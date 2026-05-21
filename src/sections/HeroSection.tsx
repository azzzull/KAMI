import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/corporateEvent/synergy sotheast asia summit.jpg";
import { categories, heroCards } from "../data/site";
import { MagneticLink } from "../components/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
            <div className="absolute inset-0 bg-mesh-primary" />
            <div className="noise-overlay" />
            <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, ease }}
                className="absolute left-[-8rem] top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(236,25,139,0.18),transparent_70%)] blur-3xl"
            />
            <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, ease }}
                className="absolute right-[-5rem] top-12 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(30,63,174,0.12),transparent_70%)] blur-3xl"
            />

            <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-24">
                <div className="order-2 flex flex-col justify-center lg:order-1">
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.03, ease }}
                        className="mt-5 max-w-xl font-display text-5xl font-extrabold tracking-tight text-slate-950 text-balance sm:text-6xl lg:text-7xl"
                    >
                        We Create Moments That Move People
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.08, ease }}
                        className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
                    >
                        KAMI Event Management bridges corporate expectations and
                        creative execution with a team that understands quality,
                        budget, and creativity from the inside out.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.12, ease }}
                        className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
                    >
                        <MagneticLink
                            to="/services"
                            className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-semibold leading-none text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_24px_60px_rgba(17,24,39,0.14)]"
                        >
                            Explore Services
                            <ArrowRight className="h-4 w-4" />
                        </MagneticLink>
                        <a
                            href="#portfolio"
                            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 text-sm font-semibold leading-none text-slate-900 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_24px_60px_rgba(17,24,39,0.12)]"
                        >
                            <span className="grid h-8 w-8 place-items-center rounded-full bg-[linear-gradient(135deg,#EC198B,#6B1FAF,#1E3FAE)] text-white">
                                <Play className="h-3.5 w-3.5 fill-white" />
                            </span>
                            Watch Showreel
                        </a>
                    </motion.div>

                    <div className="mt-10 grid gap-3 sm:grid-cols-3">
                        {heroCards.map((card, index) => {
                            const Icon = card.icon;
                            return (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.55,
                                        delay: 0.08 + index * 0.04,
                                        ease,
                                    }}
                                    className="rounded-[28px] border border-white/70 bg-white/75 p-4 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_24px_60px_rgba(17,24,39,0.12)]"
                                >
                                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[linear-gradient(135deg,rgba(236,25,139,0.12),rgba(107,31,175,0.12),rgba(30,63,174,0.12))] text-fuchsia-600">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-4 text-sm font-bold text-slate-950">
                                        {card.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        {card.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <div className="relative order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, ease }}
                        className="relative mx-auto aspect-[4/5] max-w-[36rem]"
                    >
                        <div className="absolute inset-0 rounded-[40px] bg-[linear-gradient(135deg,rgba(236,25,139,0.14),rgba(107,31,175,0.08),rgba(30,63,174,0.14))] blur-2xl" />
                        <div className="absolute -left-3 top-10 h-36 w-28 overflow-hidden rounded-[28px] border border-white/60 bg-white/70 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_24px_60px_rgba(17,24,39,0.14)] sm:h-44 sm:w-36">
                            <img
                                src={categories[1].image}
                                alt="Event visual 1"
                                className="h-full w-full object-cover transition duration-300"
                                loading="eager"
                            />
                        </div>
                        <div className="absolute -right-1 top-14 h-44 w-32 overflow-hidden rounded-[28px] border border-white/60 bg-white/70 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_24px_60px_rgba(17,24,39,0.14)] sm:h-52 sm:w-40">
                            <img
                                src={categories[2].image}
                                alt="Event visual 2"
                                className="h-full w-full object-cover transition duration-300"
                                loading="eager"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 top-16 overflow-hidden rounded-[40px] border border-white/60 bg-white/75 shadow-soft backdrop-blur">
                            <img
                                src={heroImage}
                                alt="KAMI event collage"
                                className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]"
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-65" />
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, ease }}
                                className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/[0.12] px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-white backdrop-blur"
                            >
                                Live Experience
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, ease }}
                                className="absolute bottom-5 left-5 right-5 grid gap-4 rounded-[28px] border border-white/20 bg-white/10 p-4 text-white backdrop-blur-sm"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.26em] text-cyan-200">
                                            Project Focus
                                        </p>
                                        <p className="mt-2 text-lg font-bold">
                                            Corporate, brand, exhibition, and
                                            live formats
                                        </p>
                                    </div>
                                    <Link
                                        to="/portfolio"
                                        aria-label="Go to portfolio"
                                        className="group grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white/60"
                                    >
                                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, delay: 0.15, ease }}
                        className="absolute -left-4 top-8 hidden rounded-[28px] border border-white/70 bg-white/90 p-4 shadow-soft backdrop-blur lg:block"
                    >
                        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                            Creative Direction
                        </div>
                        <p className="mt-2 max-w-44 text-sm leading-6 text-slate-600">
                            Curved compositions and controlled energy.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
