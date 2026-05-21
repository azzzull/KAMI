import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "../assets/corporateEvent/synergy sotheast asia summit.jpg";
import { MagneticLink } from "../components/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-28">
            <div className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full bg-[#EC198B]/15 blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-[#1E3FAE]/10 blur-3xl" />

            <div className="relative flex min-h-[calc(100vh-7rem)] flex-col lg:min-h-[calc(100vh-7rem)] lg:flex-row">
                <motion.div
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.65, ease }}
                    className="relative z-20 flex min-h-[34rem] w-full flex-col items-start justify-center overflow-hidden rounded-tr-[96px] bg-gradient-to-br from-[#EC198B] via-[#6B1FAF] to-[#1E3FAE] px-6 py-16 text-white shadow-[0_28px_90px_rgba(107,31,175,0.22)] sm:px-10 sm:py-20 lg:min-h-[calc(100vh-7rem)] lg:w-[58%] lg:rounded-tr-[180px] lg:pl-[max(4rem,calc((100vw-72rem)/2+2rem))] lg:pr-14 lg:py-24 xl:pr-16"
                >
                    <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                    <div className="pointer-events-none absolute right-16 top-14 h-32 w-32 rounded-full border border-white/15" />
                    <div className="pointer-events-none absolute bottom-20 right-24 h-2 w-24 rounded-full bg-cyan-300/50 blur-sm" />

                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.08, ease }}
                        className="relative max-w-2xl"
                    >
                        <h1 className="max-w-xl font-display text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                            We Create Moments That Move People
                        </h1>

                        <p className="mt-7 max-w-md text-sm leading-7 text-white/82 sm:text-base sm:leading-8">
                            KAMI Event Management bridges corporate expectations
                            and creative execution with a team that understands
                            quality, budget, and creativity from the inside out.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <MagneticLink
                                to="/services"
                                className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-bold text-slate-950 shadow-[0_18px_50px_rgba(255,255,255,0.20)] transition-all duration-300 hover:scale-[1.02] hover:bg-slate-50 sm:w-48"
                            >
                                Our Services
                                <ArrowRight className="h-4 w-4" />
                            </MagneticLink>
                            <a
                                href="#portfolio"
                                className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full border border-white/70 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-white/15 sm:w-48"
                            >
                                Watch Showreel
                                <span className="grid h-8 w-8 place-items-center rounded-full border border-white/70 bg-white/10">
                                    <Play className="h-3.5 w-3.5 fill-white text-white" />
                                </span>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.65, delay: 0.05, ease }}
                    className="relative z-10 min-h-[24rem] w-full overflow-hidden rounded-tl-[96px] bg-slate-950 shadow-[0_28px_90px_rgba(17,24,39,0.20)] sm:min-h-[32rem] lg:-ml-[8%] lg:min-h-[calc(100vh-7rem)] lg:w-[50%] lg:rounded-tl-[180px]"
                >
                    <img
                        src={heroImage}
                        alt="KAMI Event Management stage production"
                        className="h-full w-full object-cover"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(0,0,0,0.10),rgba(0,0,0,0.35))]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(236,25,139,0.22),transparent_34%)]" />
                </motion.div>
            </div>
        </section>
    );
}
