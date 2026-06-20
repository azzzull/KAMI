import { motion } from "framer-motion";
import { useState } from "react";
import { ImageModal } from "../components/ImageModal";
import { SectionHeading } from "../components/SectionHeading";
import { categories } from "../data/site";

const legacyServiceCopy: Record<string, { title: string; description: string }> = {
    "corporate-event": {
        title: "Corporate Event",
        description:
            "Including but not limited to every gathering format that is intended for internal and/ or external stakeholders of a company. This event type typically require simpler event management support that focus es on ideation, lighting, talents, and stage production – depending on the scale and goals of the event.",
    },
    "brand-event": {
        title: "Brand Event",
        description:
            "Including but not limited to every event format that requires medium to high creative support. Corporate typically needs pre and post event management in order to ens ure deliverables of overall brand/ product pos itioning. Event management service may include product launch as well as online and offline brand campaign when needed, both in BTL and ATL formats.",
    },
    exhibition: {
        title: "Exhibition",
        description:
            "Including but not limited to various exhibition needs, from booth ideation, booth production, provision of sales force and/or other manning support, unique gimmicks to sponsorship package creation.",
    },
    concert: {
        title: "Concerts",
        description:
            "Including but not limited to provision of all and every concert needs from lighting, stage, talents, event management, license and permit, to security and every other possible items typically requested in music concerts.",
    },
};

const serviceCopy: Record<string, { title: string; description: string }> = {
    "corporate-event": {
        title: "Corporate Events & Gatherings",
        description:
            "From annual celebrations and award nights to leadership meetings, town halls, and customer appreciation events, we help organizations create experiences that strengthen relationships, reinforce culture, and leave lasting impressions.",
    },
    "brand-event": {
        title: "Brand Launches & Activations",
        description:
            "Launching something new deserves more than a stage and a backdrop. We create immersive brand experiences that bring products, campaigns, and stories to life. Everything to help brands connect with audiences both online and offline.",
    },
    exhibition: {
        title: "Exhibitions & Trade Shows",
        description:
            "Whether you're exhibiting, sponsoring, or owning the entire show floor, we help brands stand out through strategic booth design, engaging visitor experiences, production support, and on-site event management.",
    },
    concert: {
        title: "Concerts & Live Performances",
        description:
            "From intimate showcases to large-scale productions, we manage every moving part behind the scenes. KAMI can take care of stage production and technical execution to talent coordination, permits, security, and audience experience. Let the spotlight stays exactly where it belongs.",
    },
};

type ServiceItem = { src: string; title: string };

function serviceItems(category: (typeof categories)[number]): ServiceItem[] {
    if (category.slug === "corporate-event") {
        return [
            {
                src: category.gallery[0].src,
                title: "Synergy Southeast Asia Summit",
            },
            {
                src: category.gallery[3].src,
                title: "BCA Corporate & Distributor Gathering",
            },
            {
                src: category.gallery[4].src,
                title: "Unilever Distributor Award Night",
            },
            {
                src: category.gallery[5].src,
                title: "Conoco-Phillips Employee Gathering",
            },
            {
                src: category.gallery[6].src,
                title: "4Life Indonesia National Convention",
            },
        ];
    }

    return category.gallery
        .map((item) => {
            if (item.title.includes("Synergy SEA Summit"))
                return { ...item, title: "Synergy Southeast Asia Summit" };
            if (item.title.includes("BCA Corporate"))
                return {
                    ...item,
                    title: "BCA Corporate & Distributor Gathering",
                };
            if (item.title.includes("Unilever"))
                return { ...item, title: "Unilever Distributor Award Night" };
            if (item.title.includes("Conoco"))
                return { ...item, title: "Conoco-Phillips Employee Gathering" };
            if (item.title.includes("4Life Indonesia"))
                return {
                    ...item,
                    title: "4Life Indonesia National Convention",
                };
            if (item.title.includes("KFC")) return null;
            if (item.title.includes("Chevrolet"))
                return { ...item, title: "Chevrolet Booth: IIMS" };
            if (item.title.includes("Kompas"))
                return { ...item, title: "KOMPAS-GRAMEDIA: Jakarta Fair" };
            if (item.title.includes("Mandiri"))
                return { ...item, title: "Mandiri Marathon Fair: All Booth" };
            if (item.title.includes("Metallica"))
                return { ...item, title: "Metallica Concert" };
            if (item.title.includes("Bigbang"))
                return { ...item, title: "Bigbang Concert" };
            if (item.title.includes("HUT Slank"))
                return { ...item, title: "HUT Slank" };
            return item;
        })
        .filter((item): item is ServiceItem => Boolean(item))
        .slice(0, category.slug === "brand-event" ? 5 : undefined);
}

function ServicePhotoCard({
    item,
    onPreview,
    className = "",
}: {
    item: ServiceItem;
    onPreview: (item: ServiceItem) => void;
    className?: string;
}) {
    return (
        <button
            type="button"
            onClick={() => onPreview(item)}
            className={`group relative block w-full overflow-hidden bg-slate-100 text-left shadow-[0_6px_16px_rgba(15,23,42,0.20)] ${className}`}
            aria-label={`Preview ${item.title}`}
        >
            <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-[82%] truncate bg-[#6e62a7]/95 px-2.5 py-1 text-[10px] font-semibold leading-none text-white shadow-[0_10px_24px_rgba(15,23,42,0.24)] sm:text-[11px]">
                {item.title}
            </div>
        </button>
    );
}

function ServiceGallery({
    items,
    onPreview,
}: {
    items: ServiceItem[];
    onPreview: (item: ServiceItem) => void;
}) {
    const topItems = items.slice(0, 2);
    const bottomItems = items.slice(2, 5);

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row">
                {topItems.map((item) => (
                    <ServicePhotoCard
                        key={item.src}
                        item={item}
                        onPreview={onPreview}
                        className="aspect-[16/10] flex-1"
                    />
                ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
                {bottomItems.map((item) => (
                    <ServicePhotoCard
                        key={item.src}
                        item={item}
                        onPreview={onPreview}
                        className="aspect-[4/3] flex-1"
                    />
                ))}
            </div>
        </div>
    );
}

function ExhibitionGallery({
    items,
    onPreview,
}: {
    items: ServiceItem[];
    onPreview: (item: ServiceItem) => void;
}) {
    return (
        <div className="flex flex-col gap-3 sm:flex-row">
            {items.slice(0, 3).map((item) => (
                <ServicePhotoCard
                    key={item.src}
                    item={item}
                    onPreview={onPreview}
                    className="aspect-[4/3] flex-1"
                />
            ))}
        </div>
    );
}

export function ServicesSection() {
    const [previewImage, setPreviewImage] = useState<ServiceItem | null>(null);

    return (
        <section className="relative overflow-hidden bg-white py-7 sm:py-9 lg:py-10">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-28 top-0 h-80 w-80 rounded-full border-[4rem] border-slate-100"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-36 top-[34rem] h-96 w-96 rounded-full bg-slate-100/70"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 left-1/2 h-[30rem] w-[30rem] rounded-full border-[5rem] border-slate-100/80"
            />

            <div className="relative mx-auto max-w-6xl space-y-10 px-6 sm:px-8 lg:px-10">
                <SectionHeading
                    eyebrow="Services"
                    title="Experiences Built Around Your Goals"
                    description="No two events are exactly alike, but every successful event starts with the same thing: a clear objective. Whether you're celebrating achievements, launching a brand, engaging customers, or filling a concert venue, KAMI brings together strategy, creativity, production, and execution to make it happen."
                    align="center"
                />

                {categories.map((category, index) => {
                    const copy = serviceCopy[category.slug];
                    const items = serviceItems(category);
                    const textOnRight = index % 2 === 1;
                    const intro = (
                        <div className="flex flex-col justify-center border-y border-slate-200 py-7 lg:border-y-0 lg:py-0">
                            <motion.h2
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-8% 0px" }}
                                transition={{
                                    duration: 0.55,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="font-display text-4xl font-semibold tracking-normal text-[#343058] sm:text-5xl lg:text-6xl"
                            >
                                {copy.title}
                            </motion.h2>
                            <p className="mt-4 max-w-md text-sm font-medium leading-7 text-[#1f2355] sm:text-base sm:leading-8 lg:max-w-sm">
                                {copy.description}
                            </p>
                        </div>
                    );

                    return (
                        <motion.div
                            key={category.slug}
                            id={category.slug}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-8% 0px" }}
                            transition={{
                                duration: 0.55,
                                delay: index * 0.04,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative"
                        >
                            <div
                                className={`flex flex-col gap-5 lg:items-center ${textOnRight ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                            >
                                <div className="lg:w-[32%]">{intro}</div>
                                <div className="lg:w-[68%]">
                                    {category.slug === "exhibition" ? (
                                        <ExhibitionGallery
                                            items={items}
                                            onPreview={setPreviewImage}
                                        />
                                    ) : (
                                        <ServiceGallery
                                            items={items}
                                            onPreview={setPreviewImage}
                                        />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <ImageModal
                open={Boolean(previewImage)}
                title={previewImage?.title ?? ""}
                src={previewImage?.src ?? ""}
                onClose={() => setPreviewImage(null)}
            />
        </section>
    );
}
