import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/visuals/logo.png";

const capabilityWords = [
    {
        label: "Event Management",
        className:
            "xl:left-[3%] xl:top-[18%] xl:text-2xl xl:-rotate-6 2xl:text-3xl",
    },
    {
        label: "Creative Development",
        className:
            "xl:left-[16%] xl:top-[7%] xl:text-lg xl:rotate-3 2xl:text-xl",
    },
    {
        label: "Booth & Set Production",
        className:
            "xl:right-[3%] xl:top-[17%] xl:text-xl xl:rotate-6 2xl:text-2xl",
    },
    {
        label: "Merchandise Production",
        className:
            "xl:left-[4%] xl:bottom-[22%] xl:text-base xl:rotate-6 2xl:text-lg",
    },
    {
        label: "Technical Production",
        className:
            "xl:right-[3%] xl:top-[36%] xl:text-lg xl:-rotate-3 2xl:text-lg",
    },
    {
        label: "Talent Management",
        className:
            "xl:right-[5%] xl:bottom-[25%] xl:text-lg xl:-rotate-6 2xl:text-xl",
    },
    {
        label: "Licensing & Permits",
        className:
            "xl:left-[1%] xl:top-[57%] xl:text-sm xl:-rotate-2 2xl:text-base",
    },
    {
        label: "Roadshows & Activations",
        className:
            "xl:right-[12%] xl:top-[5%] xl:text-base xl:rotate-2 2xl:text-lg",
    },
    {
        label: "Audience Engagement",
        className:
            "xl:right-[5%] xl:top-[54%] xl:text-sm xl:rotate-3 2xl:text-base",
    },
    {
        label: "Event Staffing",
        className:
            "xl:left-[2%] xl:top-[40%] xl:text-base xl:-rotate-3 2xl:text-lg",
    },
];

export function Footer() {
    return (
        <footer className="relative overflow-hidden bg-slate-950 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,25,139,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(30,63,174,0.16),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
            <div className="noise-overlay opacity-20" />
            <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(236,25,139,0.8),rgba(107,31,175,0.8),rgba(30,63,174,0.8),transparent)] opacity-70"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_22%,rgba(30,63,174,0.34),transparent_32%),radial-gradient(circle_at_72%_78%,rgba(107,31,175,0.30),transparent_34%),radial-gradient(circle_at_24%_70%,rgba(236,25,139,0.18),transparent_30%)]" />
            <div className="absolute inset-0 z-0 hidden xl:block">
                <div className="relative h-full">
                    {capabilityWords.map((word, index) => (
                        <motion.span
                            key={word.label}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 0.5, y: 0 }}
                            viewport={{ once: true, margin: "-8% 0px" }}
                            transition={{
                                duration: 0.45,
                                delay: index * 0.025,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={{
                                scale: 1.18,
                                opacity: 1,
                                color: "#ffffff",
                                textShadow: "0 0 22px rgba(255,255,255,0.62)",
                            }}
                            style={{
                                animationDelay: `${index * -1.7}s`,
                                animationDuration: `${18 + (index % 4) * 3}s`,
                            }}
                            className={`footer-cloud-word absolute z-10 cursor-default select-none whitespace-nowrap font-extrabold uppercase leading-none tracking-[0.08em] text-white/[0.5] transition-colors duration-200 hover:z-30 hover:text-white ${word.className}`}
                        >
                            {word.label}
                        </motion.span>
                    ))}
                </div>
            </div>
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.88)_0%,rgba(2,6,23,0.78)_42%,rgba(2,6,23,0.42)_74%,rgba(2,6,23,0.84)_100%)]" />
            <div className="relative z-10 mx-auto max-w-6xl px-5 py-12 sm:px-10 lg:px-8">
                <div className="mx-auto mb-10 max-w-2xl text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-100/70">
                        One Partner
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-white sm:text-4xl">
                        Multiple Capabilities
                    </h2>
                </div>
                <div className="grid gap-12 lg:grid-cols-[1.2fr_0.75fr_1fr_auto] lg:gap-8">
                    <div className="space-y-5">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-3 no-underline"
                        >
                            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white p-2 shadow-[0_18px_45px_rgba(236,25,139,0.18)]">
                                <img
                                    src={logo}
                                    alt="KAMI Event Management"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <div>
                                <div className="font-display text-sm font-extrabold tracking-[0.24em]">
                                    KAMI
                                </div>
                                <div className="text-[11px] uppercase tracking-[0.26em] text-slate-400">
                                    Event Management
                                </div>
                            </div>
                        </Link>
                        <p className="max-w-md text-sm leading-7 text-slate-300">
                            Corporate professionalism meets creative event
                            experience. We design and deliver premium moments
                            that feel clear, smooth, and memorable.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Quick Links
                        </h3>
                        <div className="mt-5 grid gap-3 text-sm text-slate-200">
                            <Link
                                to="/#about"
                                className="no-underline flex items-center gap-2 transition hover:text-white"
                            >
                                <ArrowUpRight className="h-4 w-4 text-fuchsia-400" />{" "}
                                About
                            </Link>
                            <Link
                                to="/#services"
                                className="no-underline flex items-center gap-2 transition hover:text-white"
                            >
                                <ArrowUpRight className="h-4 w-4 text-fuchsia-400" />{" "}
                                Services
                            </Link>
                            <Link
                                to="/#portfolio"
                                className="no-underline flex items-center gap-2 transition hover:text-white"
                            >
                                <ArrowUpRight className="h-4 w-4 text-fuchsia-400" />{" "}
                                Portfolio
                            </Link>
                            <Link
                                to="/contact"
                                className="no-underline flex items-center gap-2 transition hover:text-white"
                            >
                                <ArrowUpRight className="h-4 w-4 text-fuchsia-400" />{" "}
                                Contact
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Contact
                        </h3>
                        <div className="mt-5 grid gap-3 text-sm text-slate-200">
                            <a
                                href="tel:+6285813583832"
                                className="no-underline inline-flex min-w-0 items-center gap-2 transition hover:text-white"
                            >
                                <Phone className="h-4 w-4 text-fuchsia-400" />{" "}
                                <span className="[overflow-wrap:anywhere]">
                                    +62 858 1358 3832
                                </span>
                            </a>
                            <a
                                href="mailto:siska@kamibuatkamu.com"
                                className="no-underline inline-flex min-w-0 items-center gap-2 transition hover:text-white"
                            >
                                <Mail className="h-4 w-4 text-fuchsia-400" />{" "}
                                <span className="whitespace-nowrap">
                                    siska@kamibuatkamu.com
                                </span>
                            </a>
                            <p className="text-slate-400">Jakarta, Indonesia</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Social
                        </h3>
                        <div className="mt-5 flex gap-3">
                            <a
                                href="/"
                                aria-label="Instagram"
                                className="no-underline grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a
                                href="/"
                                aria-label="LinkedIn"
                                className="no-underline grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                            >
                                <Linkedin className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>(c) 2026 KAMI Event Management. All rights reserved.</p>
                    <p>
                        Premium event production, strategy, and creative
                        direction.
                    </p>
                </div>
            </div>
        </footer>
    );
}
