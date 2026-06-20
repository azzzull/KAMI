import { motion } from "framer-motion";
import { teamProfiles } from "../data/site";
import { SectionHeading } from "../components/SectionHeading";

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

export function BehindKamiSection() {
    return (
        <section
            id="behind-kami"
            className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc,white)] py-14 sm:py-16 lg:py-20"
        >
            <div className="relative mx-auto max-w-6xl px-5 sm:px-10 lg:px-8">
                <SectionHeading
                    eyebrow="Behind KAMI"
                    title={
                        "The Minds Behind the Magic\n(and the Spreadsheets!)"
                    }
                    description={
                        "Every great event needs creativity. Every successful event needs control.\n\nKAMI was founded by two professionals who have spent years navigating both the corporate and production agency worlds.Together, they bring the rare ability to balance strategic thinking, creative ambition, operational discipline, and practical execution without losing sight of what matters most: delivering experiences people remember."
                    }
                    align="center"
                />

                <div className="mt-9 grid gap-5 lg:grid-cols-2">
                    {teamProfiles.map((profile, index) => (
                        <motion.article
                            key={profile.name}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-8% 0px" }}
                            transition={{
                                duration: 0.55,
                                delay: index * 0.05,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative min-w-0 rounded-[28px] border border-slate-200 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_24px_60px_rgba(17,24,39,0.12)] sm:rounded-[32px] sm:p-6"
                        >
                            <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">
                                <div className="h-14 w-14 overflow-hidden rounded-[20px] border border-white/70 bg-slate-100 shadow-[0_14px_30px_rgba(17,24,39,0.10)] ring-4 ring-white sm:h-16 sm:w-16">
                                    <img
                                        src={profile.photo}
                                        alt={profile.name}
                                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                                        loading="eager"
                                    />
                                </div>
                            </div>
                            <div className="min-h-16 pl-[4.5rem] sm:min-h-[4.5rem] sm:pl-20">
                                <div className="min-w-0">
                                    <p className="text-xl font-bold tracking-tight text-slate-950">
                                        {profile.name}
                                    </p>
                                    <p className="mt-1 break-words text-[10px] font-semibold uppercase leading-4 tracking-[0.04em] text-fuchsia-600 sm:text-xs sm:leading-5 sm:tracking-[0.06em]">
                                        {renderRole(profile.role)}
                                    </p>
                                </div>
                            </div>
                            <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">
                                {profile.description}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
