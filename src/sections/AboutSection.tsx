import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { aboutCopy, categories } from "../data/site";

export function AboutSection() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
        >
            <div className="absolute left-[-7rem] top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(236,25,139,0.12),transparent_72%)] blur-3xl" />
            <div className="absolute right-[-6rem] bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(30,63,174,0.1),transparent_72%)] blur-3xl" />
            <div className="relative mx-auto max-w-6xl px-8 sm:px-10 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div className="space-y-6">
                        <p className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500 shadow-soft">
                            {aboutCopy.title}
                        </p>
                        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                            {aboutCopy.body1}
                        </h2>
                        <p className="max-w-2xl text-base leading-8 text-slate-600">
                            {aboutCopy.body2}
                        </p>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {[
                                "Quality aligned with enterprise expectations",
                                "Budget handled with practical discipline",
                                "Creativity shaped around business goals",
                                "Corporate backgrounds inform our process",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-3 rounded-[24px] border border-slate-200 bg-slate-50 p-4"
                                >
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-fuchsia-600" />
                                    <p className="text-sm leading-6 text-slate-700">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800"
                            >
                                Talk to KAMI
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50"
                            >
                                View categories
                            </Link>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-8% 0px" }}
                        transition={{
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative"
                    >
                        <div className="absolute inset-0 rounded-[40px] bg-[linear-gradient(135deg,rgba(236,25,139,0.14),rgba(107,31,175,0.1),rgba(30,63,174,0.16))] blur-2xl" />
                        <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fafc)] shadow-soft transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_24px_80px_rgba(17,24,39,0.12)]">
                            <img
                                src={aboutCopy.image}
                                alt="About KAMI"
                                className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]"
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/5 to-transparent opacity-50" />
                            <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
                                <div className="rounded-[24px] border border-white/[0.15] bg-white/[0.12] p-4 text-white backdrop-blur-md">
                                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">
                                        What we bridge
                                    </p>
                                    <p className="mt-2 text-sm leading-7">
                                        Corporate expectations and creative
                                        agency execution.
                                    </p>
                                </div>
                                <div className="rounded-[24px] border border-white/[0.15] bg-white/[0.12] p-4 text-white backdrop-blur-md">
                                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">
                                        What we protect
                                    </p>
                                    <p className="mt-2 text-sm leading-7">
                                        Quality, budget, and creativity in one
                                        balanced process.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
