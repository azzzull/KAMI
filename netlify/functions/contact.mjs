import nodemailer from "nodemailer";

const json = (status, body) =>
    new Response(JSON.stringify(body), {
        status,
        headers: { "Content-Type": "application/json" },
    });

const clean = (value, maxLength) =>
    typeof value === "string" ? value.trim().slice(0, maxLength) : "";

const escapeHtml = (value) =>
    value.replace(
        /[&<>'"]/g,
        (character) =>
            ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#039;",
                '"': "&quot;",
            })[character],
    );

export default async (request) => {
    if (request.method !== "POST") {
        return json(405, { message: "Method not allowed" });
    }

    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 20_000) {
        return json(413, { message: "Request is too large" });
    }

    let payload;
    try {
        payload = await request.json();
    } catch {
        return json(400, { message: "Invalid request body" });
    }

    if (clean(payload.website, 200)) {
        return json(200, { message: "Inquiry received" });
    }

    const inquiry = {
        name: clean(payload.name, 120) || "Not provided",
        company: clean(payload.company, 160),
        email: clean(payload.email, 254),
        phone: clean(payload.phone, 50),
        eventNeeds: Array.isArray(payload.eventNeeds)
            ? payload.eventNeeds
                  .map((item) => clean(item, 120))
                  .filter(Boolean)
                  .slice(0, 10)
            : [],
        message: clean(payload.message, 5_000) || "Not provided",
    };

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
        !inquiry.company ||
        !emailPattern.test(inquiry.email) ||
        !inquiry.phone
    ) {
        return json(400, { message: "Company, email, and phone are required" });
    }

    const smtpUser = process.env.GOOGLE_WORKSPACE_USER;
    const smtpPassword = process.env.GOOGLE_WORKSPACE_APP_PASSWORD;
    const recipient = process.env.CONTACT_RECIPIENT || "hello@kamibuatkamu.com";

    if (!smtpUser || !smtpPassword) {
        console.error(
            "Google Workspace SMTP environment variables are missing",
        );
        return json(500, { message: "Email service is not configured" });
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: { user: smtpUser, pass: smtpPassword },
    });

    const eventNeeds = inquiry.eventNeeds.length
        ? inquiry.eventNeeds.join(", ")
        : "Not selected";
    const safe = Object.fromEntries(
        Object.entries({ ...inquiry, eventNeeds }).map(([key, value]) => [
            key,
            escapeHtml(String(value)),
        ]),
    );

    try {
        await transporter.sendMail({
            from: `KAMI Website <${smtpUser}>`,
            to: recipient,
            replyTo: inquiry.email,
            subject: `New inquiry from ${inquiry.company}`,
            text: [
                `Name: ${inquiry.name}`,
                `Company: ${inquiry.company}`,
                `Email: ${inquiry.email}`,
                `Phone: ${inquiry.phone}`,
                `Event Needs: ${eventNeeds}`,
                "",
                "Message:",
                inquiry.message,
            ].join("\n"),
            html: `
                <h2>New website inquiry</h2>
                <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
                    <tr><td><strong>Name</strong></td><td>${safe.name}</td></tr>
                    <tr><td><strong>Company</strong></td><td>${safe.company}</td></tr>
                    <tr><td><strong>Email</strong></td><td>${safe.email}</td></tr>
                    <tr><td><strong>Phone</strong></td><td>${safe.phone}</td></tr>
                    <tr><td><strong>Event Needs</strong></td><td>${safe.eventNeeds}</td></tr>
                </table>
                <h3>Message</h3>
                <p style="white-space:pre-wrap">${safe.message}</p>
            `,
        });

        return json(200, { message: "Inquiry sent" });
    } catch (error) {
        console.error("Failed to send contact inquiry", error);
        return json(502, { message: "Unable to send inquiry" });
    }
};
