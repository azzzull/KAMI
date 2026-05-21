import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../data/site";
import { MagneticButton, MagneticLink } from "./MagneticButton";
import { useScrollState } from "../hooks/useScrollState";
import logo from "../assets/visuals/logov2.png";

const ease = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
    const [open, setOpen] = useState(false);
    const { scrolled } = useScrollState();
    const reduce = useReducedMotion();

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <>
            <motion.header
                initial={false}
                animate={
                    scrolled
                        ? { y: 0, backgroundColor: "rgba(255,255,255,0.76)" }
                        : { y: 0, backgroundColor: "rgba(255,255,255,0)" }
                }
                transition={{ duration: 0.35, ease }}
                className={`fixed inset-x-0 top-0 z-50 border-b border-transparent px-4 pt-4 sm:px-6 lg:px-8 ${
                    scrolled ? "backdrop-blur-lg" : ""
                }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 transition-all duration-300 sm:px-6 lg:px-8">
                    <Link to="/" className="group flex items-center gap-3">
                        <img
                            src={logo}
                            alt="KAMI Event Management"
                            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                            loading="eager"
                        />
                    </Link>

                    <nav className="hidden items-center justify-center gap-1 rounded-full border border-slate-200 bg-white/70 px-2 py-2 shadow-soft backdrop-blur md:flex">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.label}
                                to={item.href}
                                className={({ isActive }) =>
                                    [
                                        "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 no-underline",
                                        isActive
                                            ? "text-transparent bg-clip-text bg-[linear-gradient(135deg,#EC198B,#6B1FAF,#1E3FAE)] after:absolute after:inset-x-3 after:bottom-1 after:h-[2px] after:rounded-full after:bg-[linear-gradient(90deg,#EC198B,#6B1FAF,#1E3FAE)] after:opacity-70"
                                            : "text-slate-600 hover:bg-[linear-gradient(135deg,#EC198B,#6B1FAF,#1E3FAE)] hover:text-white hover:shadow-md",
                                    ].join(" ")
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <MagneticLink
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white no-underline shadow-soft transition-all duration-300 hover:bg-slate-800"
                        >
                            Let&apos;s Talk
                            <ArrowRight className="h-4 w-4" />
                        </MagneticLink>
                    </div>

                    <MagneticButton
                        onClick={() => setOpen((current) => !current)}
                        className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white/80 text-slate-900 shadow-soft backdrop-blur md:hidden"
                        aria-label="Toggle menu"
                    >
                        {open ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </MagneticButton>
                </div>
            </motion.header>

            <AnimatePresence>
                {open ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.28, ease }}
                        className="fixed inset-0 z-40 bg-slate-950/[0.92] px-4 pb-8 pt-24 backdrop-blur-xl md:hidden"
                    >
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 8, opacity: 0 }}
                            transition={{ duration: 0.4, ease }}
                            className="mx-auto flex h-full max-w-xl flex-col justify-between"
                        >
                            <div className="space-y-3">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: reduce ? 0 : index * 0.03,
                                            duration: 0.3,
                                            ease,
                                        }}
                                    >
                                        <Link
                                            to={item.href}
                                            onClick={() => setOpen(false)}
                                            className="no-underline flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.06] px-5 py-5 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/[0.1]"
                                        >
                                            {item.label}
                                            <ArrowRight className="h-5 w-5 text-fuchsia-300" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="grid gap-4">
                                <Link
                                    to="/contact"
                                    onClick={() => setOpen(false)}
                                    className="no-underline inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-4 text-sm font-semibold text-slate-950"
                                >
                                    Let&apos;s Talk
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <p className="text-sm leading-7 text-slate-300">
                                    Premium event strategy, creative direction,
                                    and flawless execution for corporate brands.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    );
}
