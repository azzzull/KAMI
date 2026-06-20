import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Marquee } from "../components/Marquee";
import crew0196 from "../assets/crew/DSC_0196.JPG";
import crew0203 from "../assets/crew/DSC_0203.JPG";
import crew0224 from "../assets/crew/DSC_0224.JPG";
import crew0227 from "../assets/crew/DSC_0227.JPG";
import crew0256 from "../assets/crew/DSC_0256.JPG";
import crew0259 from "../assets/crew/DSC_0259.JPG";
import crew0262 from "../assets/crew/DSC_0262.JPG";
import { aboutCopy, teamProfiles } from "../data/site";

const aboutGallery = [
    {
        src: crew0196,
        title: "KAMI crew moment",
    },
    {
        src: crew0203,
        title: "KAMI crew moment",
    },
    {
        src: crew0224,
        title: "KAMI crew moment",
    },
    {
        src: crew0227,
        title: "KAMI crew moment",
    },
    {
        src: crew0256,
        title: "KAMI crew moment",
    },
    {
        src: crew0259,
        title: "KAMI crew moment",
    },
    {
        src: crew0262,
        title: "KAMI crew moment",
    },
];

function renderRole(role: string) {
    return role.split(/(\([^)]+\))/g).map((part) => {
        if (part.startsWith("(") && part.endsWith(")")) {
            return (
                <span key={part} className="line-through decoration-2">
                    {part.slice(1, -1)}
                </span>
            );
        }

        return part;
    });
}

export function AboutSection() {
    const [introParagraph, ...aboutParagraphs] =
        aboutCopy.subheader.split("\n\n");
    const introLead =
        "KAMI was built on a simple belief: exceptional events happen when strategy, creativity, and execution work in harmony.";
    const introTail = introParagraph.startsWith(introLead)
        ? introParagraph.slice(introLead.length)
        : "";

    return (
        <section
            id="about"
            className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
        >
            <div className="absolute left-[-7rem] top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(236,25,139,0.12),transparent_72%)] blur-3xl" />
            <div className="absolute right-[-6rem] bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(30,63,174,0.1),transparent_72%)] blur-3xl" />
            <div className="relative mx-auto max-w-6xl px-5 sm:px-10 lg:px-8">
                <div className="mx-auto mb-10 max-w-4xl text-center">
                    <p className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500 shadow-soft">
                        {aboutCopy.title}
                    </p>
                    <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                        {aboutCopy.header}
                    </h2>
                    <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600">
                        <strong className="font-semibold text-slate-900">
                            {introLead}
                        </strong>
                        {introTail}
                    </p>
                </div>

                <div className="grid min-w-0 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div className="min-w-0 space-y-6 lg:self-center">
                        <div className="min-w-0 max-w-2xl space-y-4 break-words text-left text-base leading-8 text-slate-600">
                            {aboutParagraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {aboutCopy.checklist.map((item) => (
                                <div
                                    key={item}
                                    className="min-w-0 flex items-start gap-3 rounded-[24px] border border-slate-200 bg-slate-50 p-4 text-left"
                                >
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-fuchsia-600" />
                                    <p className="min-w-0 break-words text-sm leading-6 text-slate-700">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                to="/contact"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 sm:w-auto"
                            >
                                Tell Us About Your Moment
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
                            >
                                See Moments We've Created
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
                        className="min-w-0 max-w-full space-y-4 overflow-hidden lg:mx-auto lg:w-full lg:max-w-[34rem]"
                    >
                        <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:max-w-[34rem]">
                            {teamProfiles.map((profile) => (
                                <Link
                                    key={profile.name}
                                    to="/about#behind-kami"
                                    className="group min-w-0 overflow-hidden rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fafc)] shadow-soft transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_24px_80px_rgba(17,24,39,0.12)]"
                                >
                                    <img
                                        src={profile.photo}
                                        alt={profile.name}
                                        className="h-[11rem] w-full object-cover object-top transition duration-300 group-hover:scale-[1.03] sm:h-[12rem] lg:h-[10.5rem]"
                                        loading="eager"
                                    />
                                    <div className="border-t border-slate-200 bg-white px-4 py-3 text-center">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-700">
                                            Behind KAMI
                                        </p>
                                        <p className="mt-1 text-base font-bold tracking-tight text-slate-950">
                                            {profile.name}
                                        </p>
                                        <p className="text-[10px] leading-4 text-slate-500 sm:text-[11px]">
                                            {renderRole(profile.role)}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="rounded-[30px] border border-slate-200 p-4 sm:p-5">
                            <div className="mb-3 flex items-center justify-between">
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                                    Crew KAMI
                                </p>
                            </div>
                            <Marquee fade={false}>
                                {aboutGallery.map((item) => (
                                    <div
                                        key={item.src}
                                        className="overflow-hidden rounded-[18px] border border-slate-200"
                                    >
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="h-24 w-40 object-cover sm:h-28 sm:w-44"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
