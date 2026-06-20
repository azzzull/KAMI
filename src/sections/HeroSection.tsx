import { motion } from "framer-motion";
import { ArrowRight, Images } from "lucide-react";
import heroImage from "../assets/kamigroup.jpg";
import { MagneticLink } from "../components/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-28">
            <div className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl lg:bg-[#EC198B]/15" />
            <div className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl lg:bg-[#1E3FAE]/10" />

            <div className="relative flex min-h-[auto] flex-col overflow-hidden bg-gradient-to-br from-[#EC198B] via-[#6B1FAF] to-[#1E3FAE] pb-2 lg:overflow-visible lg:bg-none lg:pb-0">
                <motion.div
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.65, ease }}
                    className="relative z-20 order-2 flex w-full flex-col items-start justify-center overflow-hidden px-8 pb-10 pt-6 text-white sm:px-10 sm:pb-14 sm:pt-9 lg:order-1 lg:w-[58%] lg:rounded-tr-[180px] lg:bg-gradient-to-br lg:from-[#EC198B] lg:via-[#6B1FAF] lg:to-[#1E3FAE] lg:py-24 lg:pl-[max(4rem,calc((100vw-72rem)/2+2rem))] lg:pr-[12%] lg:shadow-[0_28px_90px_rgba(107,31,175,0.22)] xl:pr-16"
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
                        <h1 className="max-w-xl font-display text-[2.55rem] font-black leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-7xl">
                            We Create Moments that Move People
                        </h1>

                        <h2 className="mt-5 max-w-xl text-sm leading-7 text-white/82 sm:mt-6 sm:text-base sm:leading-8 lg:mt-5 lg:text-lg lg:font-bold">
                            Great events are more than memorable experience.
                            <br />
                            They are powerful business tools.
                        </h2>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-white/82 sm:mt-6 sm:text-base sm:leading-8 lg:mt-5">
                            KAMI combines{" "}
                            <b>
                                strategic thinking, creative excellence, and
                                disciplined execution
                            </b>{" "}
                            to deliver experiences that engage audiences,
                            elevate brands, and drive meaningful impact. With
                            corporate-grade project management and fully
                            integrated production capabilities of our own, every
                            detail is managed with precision from concept to
                            completion.
                        </p>
                        <p className="mt-2 max-w-xl text-sm leading-7 text-white/82 sm:text-base sm:leading-8">
                            <b>
                                You don't have to choose between creativity,
                                quality, budget, and execution.
                            </b>{" "}
                            KAMI knows how to balance all four.
                        </p>

                        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
                            <MagneticLink
                                to="/services"
                                className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-white px-5 text-sm font-bold text-slate-950 shadow-[0_18px_50px_rgba(255,255,255,0.20)] transition-all duration-300 hover:scale-[1.02] hover:bg-slate-50 sm:h-14 sm:w-48 sm:px-6"
                            >
                                Create Your Moment Now
                                <ArrowRight className="h-4 w-4" />
                            </MagneticLink>
                            <MagneticLink
                                to="/portfolio"
                                className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-full border border-white/70 bg-white/10 px-5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-white/15 sm:h-14 sm:w-48 sm:px-6"
                            >
                                See Moments We've Created
                                <ArrowRight className="h-5 w-5" />
                            </MagneticLink>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.65, delay: 0.05, ease }}
                    className="relative z-10 order-1 mx-8 mt-5 aspect-[16/9] overflow-hidden rounded-[26px] bg-slate-950 shadow-[0_22px_70px_rgba(17,24,39,0.24)] sm:mx-10 sm:mt-7 lg:absolute lg:bottom-0 lg:right-0 lg:top-0 lg:order-2 lg:mx-0 lg:mt-0 lg:w-[50%] lg:aspect-auto lg:rounded-l-none lg:rounded-tl-[180px] lg:shadow-[0_28px_90px_rgba(17,24,39,0.20)]"
                >
                    <img
                        src={heroImage}
                        alt="KAMI Event Management stage production"
                        className="h-full w-full object-cover object-bottom"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(0,0,0,0.10),rgba(0,0,0,0.35))]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(236,25,139,0.22),transparent_34%)]" />
                </motion.div>
            </div>
        </section>
    );
}
