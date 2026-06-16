import { motion } from "framer-motion";
import { Check, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "../components/MagneticButton";
import { SectionHeading } from "../components/SectionHeading";

const contactMethods = [
    { label: "Email", value: "hello@kamibuatkamu.com", icon: Mail },
    { label: "Phone", value: "+62 856 9417 9574", icon: Phone },
    { label: "Location", value: "Jakarta, Indonesia", icon: MapPin },
];

const eventNeedOptions = [
    "Corporate Event",
    "Brand Event",
    "Exhibition",
    "Concert",
    "Activation",
];

export function ContactSection() {
    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        eventNeeds: [] as string[],
        message: "",
    });

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[linear-gradient(135deg,#111827,#1e3fae,#6b1faf,#ec198b)] py-14 text-white sm:py-16 lg:py-20"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_20%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_20%)]" />
            <div className="relative mx-auto max-w-5xl px-8 sm:px-10 lg:px-8">
                <SectionHeading
                    eyebrow="Contact"
                    title="Tell us about your next event and we'll shape the experience around it."
                    description="Share the scope, location, timing, or audience goals. We'll come back with a clear path forward."
                    align="center"
                    className="text-white [&>p:first-child]:border-white/25 [&>p:first-child]:bg-white [&>p:first-child]:text-[#6B1FAF] [&_h2]:text-white [&_p]:text-white/75"
                />

                <div className="mt-9 grid gap-5 lg:grid-cols-[0.82fr_1.08fr]">
                    <div className="space-y-4">
                        {contactMethods.map((item) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-8% 0px" }}
                                    transition={{
                                        duration: 0.45,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="rounded-[26px] border border-white/10 bg-white/[0.08] p-4 backdrop-blur-sm"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
                                            <Icon className="h-5 w-5 text-cyan-200" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.24em] text-white/60">
                                                {item.label}
                                            </p>
                                            <p className="mt-1.5 text-base font-semibold">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.form
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-8% 0px" }}
                        transition={{
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="rounded-[32px] border border-white/[0.12] bg-white/[0.08] p-5 shadow-soft backdrop-blur-sm sm:p-6"
                        onSubmit={(event) => event.preventDefault()}
                    >
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field
                                label="Name"
                                value={form.name}
                                onChange={(value) =>
                                    setForm((current) => ({
                                        ...current,
                                        name: value,
                                    }))
                                }
                                placeholder="Your name"
                            />
                            <Field
                                label="Company"
                                value={form.company}
                                onChange={(value) =>
                                    setForm((current) => ({
                                        ...current,
                                        company: value,
                                    }))
                                }
                                placeholder="Company name"
                            />
                        </div>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            <Field
                                label="Email"
                                value={form.email}
                                onChange={(value) =>
                                    setForm((current) => ({
                                        ...current,
                                        email: value,
                                    }))
                                }
                                placeholder="name@company.com"
                                type="email"
                            />
                            <EventNeedsChecklist
                                label="Event Needs"
                                value={form.eventNeeds}
                                onChange={(value) =>
                                    setForm((current) => ({
                                        ...current,
                                        eventNeeds: value,
                                    }))
                                }
                            />
                        </div>
                        <div className="mt-4">
                            <label className="mb-2 block text-sm font-medium text-white/80">
                                Message
                            </label>
                            <textarea
                                value={form.message}
                                onChange={(event) =>
                                    setForm((current) => ({
                                        ...current,
                                        message: event.target.value,
                                    }))
                                }
                                rows={4}
                                className="w-full rounded-[24px] border border-white/10 bg-white/[0.08] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-cyan-300/60 focus:bg-white/[0.12]"
                                placeholder="Tell us your goals, timeline, or venue details."
                            />
                        </div>
                        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <MagneticButton
                                type="submit"
                                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-soft"
                            >
                                Send Inquiry
                            </MagneticButton>
                            <p className="text-sm text-white/[0.65]">
                                We usually reply within one business day with a
                                thoughtful next step.
                            </p>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

function EventNeedsChecklist({
    label,
    value,
    onChange,
}: {
    label: string;
    value: string[];
    onChange: (value: string[]) => void;
}) {
    const [open, setOpen] = useState(false);
    const displayValue = value.length ? value.join(", ") : "Select event needs";

    const toggleValue = (option: string) => {
        if (value.includes(option)) {
            onChange(value.filter((item) => item !== option));
            return;
        }

        onChange([...value, option]);
    };

    return (
        <div className="relative">
            <span className="mb-2 block text-sm font-medium text-white/80">
                {label}
            </span>
            <button
                type="button"
                onClick={() => setOpen((current) => !current)}
                className="flex w-full items-center justify-between gap-3 rounded-[24px] border border-white/10 bg-white/[0.08] px-4 py-3.5 text-left text-sm text-white outline-none transition hover:bg-white/[0.12] focus:border-cyan-300/60"
                aria-expanded={open}
            >
                <span className={value.length ? "truncate text-white" : "truncate text-white/40"}>
                    {displayValue}
                </span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-white/65 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>

            {open ? (
                <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-20 rounded-[24px] border border-white/10 bg-slate-950/95 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                    {eventNeedOptions.map((option) => {
                        const checked = value.includes(option);
                        return (
                            <button
                                key={option}
                                type="button"
                                onClick={() => toggleValue(option)}
                                className="flex w-full items-center gap-3 rounded-[18px] px-3 py-2.5 text-left text-sm text-white transition hover:bg-white/[0.08]"
                            >
                                <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border transition ${checked ? "border-cyan-300 bg-cyan-300 text-slate-950" : "border-white/20 bg-white/[0.04] text-transparent"}`}>
                                    <Check className="h-3.5 w-3.5" />
                                </span>
                                <span>{option}</span>
                            </button>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}

function Field({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
}: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    type?: string;
}) {
    return (
        <label className="block">
            <span className="mb-2 block text-sm font-medium text-white/80">
                {label}
            </span>
            <input
                type={type}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder={placeholder}
                className="w-full rounded-[24px] border border-white/10 bg-white/[0.08] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-cyan-300/60 focus:bg-white/[0.12]"
            />
        </label>
    );
}
