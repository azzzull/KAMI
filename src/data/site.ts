import {
    ArrowRight,
    Briefcase,
    Building2,
    CalendarDays,
    Camera,
    CheckCircle2,
    Globe2,
    Image as ImageIcon,
    Mic,
    Palette,
    ShieldCheck,
    Sparkles,
    Star,
    Target,
    Trophy,
    Users,
    Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import exhibitionBoothVisual from "../assets/visuals/exhibition-booth.svg";
import rendraPortrait from "../assets/visuals/rendra.png";
import siskaPortrait from "../assets/visuals/team-siska.jpg";
import brand4LifeSkincare from "../assets/brandEvent/4LifeSkincareLaunching.jpg";
import brand4LifeSea from "../assets/brandEvent/4lifesoutheast asia launching event.jpg";
import brandDatsunFactory from "../assets/brandEvent/datsun factory launching.jpg";
import brandGoodDoctor from "../assets/brandEvent/gooddoctoractivationroadshows.jpg";
import brandLgMobile from "../assets/brandEvent/lg mobile launching.jpg";
import concertBigbang from "../assets/concert/bigbang concert.jpg";
import concertHutSlank from "../assets/concert/hut slank.jpg";
import concertMetallica from "../assets/concert/metallica concert.jpg";
import concertTriKarnival from "../assets/concert/tri karnival.jpg";
import corporate4LifeConvention from "../assets/corporateEvent/4life indonesia national convention.jpg";
import corporateBca from "../assets/corporateEvent/bca corporate.jpg";
import corporateConoco from "../assets/corporateEvent/conoco-phillips.jpg";
import corporateSynergy from "../assets/corporateEvent/synergy sotheast asia summit.jpg";
import corporateUnilever from "../assets/corporateEvent/unilever distributor award night.jpg";
import exhibitionChevrolet from "../assets/exhibition/Chevrolet booth IIMS.jpg";
import exhibitionKompas from "../assets/exhibition/Kompas Gramedia Jakarta Fair.jpg";
import exhibitionMandiri from "../assets/exhibition/Mandiri Marathon.png";
import synergyseasummit from "../assets/corporateEvent/synergy sea summit 2.jpg";
import synergyseasummit2 from "../assets/corporateEvent/synergy sea summit.jpg";
import kami from "../assets/KAMI.jpg";
import kfcopening from "../assets/brandEvent/kfc opening store.jpg";
import kfcopening2 from "../assets/brandEvent/kfc opening store 2.jpg";
import healthtechsummitvideo from "../assets/exhibition/Health Tech Summit.mp4";
import corporateEventBanner from "../assets/bannerCategory/corporte-event.jpg";
import brandLaunchBanner from "../assets/bannerCategory/brand-launch.jpg";
import exhibitionsBanner from "../assets/bannerCategory/exhibitions.jpg";
import concertBanner from "../assets/bannerCategory/concert.jpg";

export type NavItem = { label: string; href: string };

export type TimelineGroup = { period: string; items: string[] };

export type TeamProfile = {
    name: string;
    role: string;
    description: string;
    photo: string;
};

export type GalleryImage = {
    src: string;
    title: string;
};

export type CategoryItem = {
    slug: string;
    title: string;
    description: string;
    examples: string[];
    image: string;
    gallery: GalleryImage[];
    videoTitle: string;
    videoThumb: string;
    videoSrc?: string;
};

export type ProjectItem = {
    slug: string;
    category: string;
    title: string;
    description: string;
    overview: string;
    challenge: string;
    solution: string;
    metrics: { label: string; value: string }[];
    timeline: { label: string; detail: string }[];
    image: string;
    gallery: GalleryImage[];
    videoThumb: string;
    videoTitle: string;
    videoSrc?: string;
};

export type StatItem = {
    label: string;
    value: number;
    suffix: string;
    icon: LucideIcon;
};

export type Testimonial = {
    quote: string;
    name: string;
    role: string;
    company: string;
};

export type ClientLogo = { name: string; image?: string };

export const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
];

export const aboutCopy = {
    title: "About KAMI",
    header: "Where Business Thinking Meets Creative Possibility",
    subheader:
        "KAMI was built on a simple belief: exceptional events happen when strategy, creativity, and execution work in harmony.\n\nHaving spent years on the corporate side before building our own agency, we understand what clients truly need beyond a great-looking event. We know the pressures behind every budget approval, stakeholder expectation, timeline, and business objective.\n\nThat perspective allows us to bridge the gap between corporate requirements and creative execution. KAMI takes pride in creating experiences that are impactful, practical, and purpose-driven.",
    checklist: [
        "Quality that meets enterprise standards",
        "Budgets managed with transparency and discipline",
        "Creativity designed around business objectives",
        "Processes shaped by real corporate experience",
    ],
    image: kami,
};

export const teamProfiles: TeamProfile[] = [
    {
        name: "Siska Tamba",
        role: "Chief (Executive) Everything Officer & Founder",
        description:
            "With almost 20 years of experience spanning sales, marketing, partnerships, and brand strategy, Siska understands events from the client's perspective first.\n\nHaving spent years leading teams, managing budgets, and building brands, she knows that great events are not only measured by how impressive they look, but also by how effectively they achieve their purpose. Her strength lies in translating business objectives into meaningful experiences, ensuring creativity never loses sight of practicality.",
        photo: siskaPortrait,
    },
    {
        name: "Rendra Ramadhan",
        role: "Chief Operations (Officer) Overlord & Co-Founder",
        description:
            "If Siska imagines it, Rendra figures out how to make it happen.\n\nArmed with decades of experience in event production and operations, Rendra has built an extensive network of trusted partners, vendors, and production specialists across Indonesia. His deep understanding of logistics, technical execution, and on-the-ground realities ensures that every idea is supported by a plan and every plan is delivered with confidence.",
        photo: rendraPortrait,
    },
];

export const whyKamiCards = [
    {
        title: "Smart Budgets, Stronger Impact",
        description:
            "We believe creativity should work with your budget, not against it.\n\nWith years of corporate experience behind us, we understand the importance of maximizing value without compromising quality. Every recommendation is made with practicality, efficiency, and business objectives in mind.",
        icon: Trophy,
    },
    {
        title: "An In-House Team That Knows Your Event",
        description:
            "The people planning your event are the people delivering it.\n\nBy keeping key capabilities within our own team, we maintain greater control over quality, communication, and execution. Less handover. Less confusion. More accountability.",
        icon: Users,
    },
    {
        title: "Production Without the Drama",
        description:
            "Deadlines shouldn't depend on someone else's schedule.\n\nWith our own production workshop and trusted operational network, we maintain greater control over timelines, quality standards, and last-minute changes. The result is a smoother production process and greater peace of mind for our clients.",
        icon: ShieldCheck,
    },
];

export const timelineGroups: TimelineGroup[] = [
    {
        period: "2012-2014",
        items: [
            "Telecom Provider: Brand Events",
            "FMCG Industry: Internal Events",
            "BUMN: Corporate Events",
            "Music Agency: Concerts",
        ],
    },
    {
        period: "2015-2017",
        items: [
            "Oil and Gas: Internal Events",
            "Jakarta Fair: Exhibitions",
            "MLM and Insurance: Activation Events",
        ],
    },
    {
        period: "2018-2020",
        items: [
            "IDI: Corporate Events",
            "FMCG: Brand Launching",
            "Automotive: Exhibition",
        ],
    },
    {
        period: "2021-2022",
        items: [
            "Health Tech: Internal Events",
            "Health Tech: Activation Events",
        ],
    },
    {
        period: "2023",
        items: ["Come and be with KAMI"],
    },
];

export const timelineFooterNote =
    "Timeline only acts as a reference of our portfolio and does not contain the entirety of events that we have done over the years. We decided to leave out some independent, small events that may or may not resemble the bigger events mentioned within above timeline to help with the visualization.";

export const categories: CategoryItem[] = [
    {
        slug: "corporate-event",
        title: "Corporate Events & Gatherings",
        description:
            "From annual celebrations and award nights to leadership meetings, town halls, and customer appreciation events, we help organizations create experiences that strengthen relationships, reinforce culture, and leave lasting impressions.",
        examples: [
            "Synergy Southeast Asia Summit 2025",
            "BCA Corporate and Distributor Gathering",
            "Unilever Distributor Award Night",
            "Conoco-Phillips Employee Gathering",
            "4Life Indonesia National Convention",
        ],
        image: corporateEventBanner,
        gallery: [
            {
                src: synergyseasummit,
                title: "Synergy SEA Summit opening stage",
            },
            {
                src: synergyseasummit2,
                title: "Synergy SEA Summit audience moment",
            },
            {
                src: corporateSynergy,
                title: "Synergy Southeast Asia Summit main hall",
            },
            {
                src: corporateBca,
                title: "BCA Corporate and Distributor Gathering",
            },
            {
                src: corporateUnilever,
                title: "Unilever Distributor Award Night",
            },
            {
                src: corporateConoco,
                title: "Conoco-Phillips Employee Gathering",
            },
            {
                src: corporate4LifeConvention,
                title: "4Life Indonesia National Convention",
            },
        ],
        videoTitle: "Corporate event production reel",
        videoThumb: corporateSynergy,
        videoSrc:
            "https://www.youtube.com/embed/hnTRcuF5HHI?si=4D_YohfcRSV5bUmU",
    },
    {
        slug: "brand-event",
        title: "Brand Launches & Activations",
        description:
            "Launching something new deserves more than a stage and a backdrop. We create immersive brand experiences that bring products, campaigns, and stories to life. Everything to help brands connect with audiences both online and offline.",
        examples: [
            "4Life Skincare Launching",
            "Good Doctor Activation Roadshows",
            "4Life Southeast Asia Launching Event",
            "Datsun Factory Launching",
            "LG Mobile Launching",
        ],
        image: brandLaunchBanner,
        gallery: [
            { src: kfcopening, title: "KFC Opening Store launch detail" },
            { src: kfcopening2, title: "KFC Opening Store guest experience" },
            { src: brand4LifeSkincare, title: "4Life Skincare Launching" },
            { src: brandGoodDoctor, title: "Good Doctor Activation Roadshows" },
            {
                src: brand4LifeSea,
                title: "4Life Southeast Asia Launching Event",
            },
            { src: brandDatsunFactory, title: "Datsun Factory Launching" },
            { src: brandLgMobile, title: "LG Mobile Launching" },
        ],
        videoTitle: "Brand launch video highlight",
        videoThumb: brand4LifeSkincare,
    },
    {
        slug: "exhibition",
        title: "Exhibitions & Trade Shows",
        description:
            "Whether you're exhibiting, sponsoring, or owning the entire show floor, we help brands stand out through strategic booth design, engaging visitor experiences, production support, and on-site event management.",
        examples: [
            "Chevrolet Booth : IIMS",
            "Kompas Gramedia : Jakarta Fair",
            "Mandiri Marathon Fair : All Booth",
            "Health Tech Summit",
        ],
        image: exhibitionsBanner,
        gallery: [
            { src: exhibitionChevrolet, title: "Chevrolet Booth at IIMS" },
            {
                src: exhibitionKompas,
                title: "Kompas Gramedia Jakarta Fair booth",
            },
            { src: exhibitionMandiri, title: "Mandiri Marathon Fair booth" },
        ],
        videoTitle: "Health Tech Summit",
        videoThumb: healthtechsummitvideo,
        videoSrc: healthtechsummitvideo,
    },
    {
        slug: "concert",
        title: "Concerts & Live Performances",
        description:
            "From intimate showcases to large-scale productions, we manage every moving part behind the scenes. KAMI can take care of stage production and technical execution to talent coordination, permits, security, and audience experience. Let the spotlight stays exactly where it belongs.",
        examples: [
            "Bigbang Concert",
            "Metallica Concert",
            "Tri Karnival",
            "HUT Slank",
        ],
        image: concertBanner,
        gallery: [
            { src: concertBigbang, title: "Bigbang Concert" },
            {
                src: concertMetallica,
                title: "Metallica Concert stage production",
            },
            { src: concertTriKarnival, title: "Tri Karnival live audience" },
            { src: concertHutSlank, title: "HUT Slank concert moment" },
        ],
        videoTitle: "Concert production spotlight",
        videoThumb: concertBigbang,
    },
];

export const heroCards = [
    {
        title: "Quality first",
        description:
            "Every event is built to support a clean and dependable delivery standard.",
        icon: Briefcase,
    },
    {
        title: "Budget respectful",
        description:
            "Creative ideas are shaped to stay practical and commercially sensible.",
        icon: Sparkles,
    },
    {
        title: "Creativity intact",
        description:
            "The concept stays strong while the production stays disciplined.",
        icon: Trophy,
    },
];

export const projectShowcase: ProjectItem[] = [
    {
        slug: "synergy-sea-summit",
        category: "Corporate Event",
        title: "Synergy SEA Summit 2025",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        overview:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.",
        challenge:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.",
        solution:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.",
        metrics: [
            { label: "Attendees", value: "1,500" },
            { label: "Speakers", value: "18" },
            { label: "Days", value: "1" },
        ],
        timeline: [
            {
                label: "Plan",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                label: "Build",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                label: "Live",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
        ],
        image: synergyseasummit2,
        gallery: [
            {
                src: synergyseasummit2,
                title: "Synergy SEA Summit audience moment",
            },
            {
                src: corporateSynergy,
                title: "Synergy Southeast Asia Summit main hall",
            },
            {
                src: synergyseasummit,
                title: "Synergy SEA Summit opening stage",
            },
            {
                src: corporateBca,
                title: "BCA Corporate and Distributor Gathering",
            },
            {
                src: corporateUnilever,
                title: "Unilever Distributor Award Night",
            },
            {
                src: corporateConoco,
                title: "Conoco-Phillips Employee Gathering",
            },
            {
                src: corporate4LifeConvention,
                title: "4Life Indonesia National Convention",
            },
        ],
        videoThumb: corporateSynergy,
        videoTitle: "Synergy Southeast Asia Summit recap",
        videoSrc:
            "https://www.youtube.com/embed/hnTRcuF5HHI?si=4D_YohfcRSV5bUmU",
    },
    {
        slug: "kfc-opening-store-launch",
        category: "Brand Event",
        title: "KFC Opening Store Launch",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        overview:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.",
        challenge:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.",
        solution:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.",
        metrics: [
            { label: "Guests", value: "750" },
            { label: "Reveal Time", value: "12 min" },
            { label: "Media Hits", value: "24" },
        ],
        timeline: [
            {
                label: "Narrative",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                label: "Environment",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                label: "Launch",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
        ],
        image: kfcopening2,
        gallery: [
            { src: kfcopening, title: "KFC Opening Store launch detail" },
            { src: kfcopening2, title: "KFC Opening Store guest experience" },
            { src: brand4LifeSkincare, title: "4Life Skincare Launching" },
            { src: brandGoodDoctor, title: "Good Doctor Activation Roadshows" },
            {
                src: brand4LifeSea,
                title: "4Life Southeast Asia Launching Event",
            },
            { src: brandDatsunFactory, title: "Datsun Factory Launching" },
            { src: brandLgMobile, title: "LG Mobile Launching" },
        ],
        videoThumb: brand4LifeSkincare,
        videoTitle: "Launch event reel",
    },
    {
        slug: "chevrolet-booth-iims",
        category: "Exhibition",
        title: "Chevrolet Booth : IIMS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        overview:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.",
        challenge:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.",
        solution:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.",
        metrics: [
            { label: "Leads", value: "540" },
            { label: "Visitors", value: "4.2k" },
            { label: "Engagement", value: "68%" },
        ],
        timeline: [
            {
                label: "Concept",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                label: "Fabrication",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                label: "Activation",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
        ],
        image: exhibitionChevrolet,
        gallery: [
            { src: exhibitionChevrolet, title: "Chevrolet Booth at IIMS" },
            {
                src: exhibitionKompas,
                title: "Kompas Gramedia Jakarta Fair booth",
            },
            { src: exhibitionMandiri, title: "Mandiri Marathon Fair booth" },
        ],
        videoThumb: healthtechsummitvideo,
        videoTitle: "Health Tech Summit",
        videoSrc: healthtechsummitvideo,
    },
    {
        slug: "metallica-concert-production",
        category: "Concert",
        title: "Metallica Concert Production",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        overview:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        challenge:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.",
        solution:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.",
        metrics: [
            { label: "Audience", value: "2.1k" },
            { label: "Songs", value: "22" },
            { label: "Setups", value: "1" },
        ],
        timeline: [
            {
                label: "Creative",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                label: "Technical",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                label: "Showtime",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
        ],
        image: concertMetallica,
        gallery: [
            {
                src: concertMetallica,
                title: "Metallica Concert stage production",
            },
            { src: concertBigbang, title: "Bigbang Concert crowd energy" },
            { src: concertTriKarnival, title: "Tri Karnival live audience" },
            { src: concertHutSlank, title: "HUT Slank concert moment" },
        ],
        videoThumb: concertBigbang,
        videoTitle: "Concert production spotlight",
    },
];

export const stats: StatItem[] = [
    { label: "Events Delivered", value: 150, suffix: "+", icon: CalendarDays },
    { label: "Happy Clients", value: 100, suffix: "+", icon: Users },
    { label: "Years Experience", value: 10, suffix: "+", icon: Globe2 },
    { label: "Satisfaction", value: 98, suffix: "%", icon: Star },
];

// Replace `image` with your own imported file path or public URL if you want customer logos to use photos.
export const clients: ClientLogo[] = [
    { name: "Astra Bank" },
    { name: "BCA" },
    { name: "Unilever" },
    { name: "ConocoPhillips" },
    { name: "4Life" },
    { name: "Kompas Gramedia" },
    { name: "Mandiri" },
    { name: "Slank" },
];

export const testimonials: Testimonial[] = [
    {
        quote: "KAMI translated a complex corporate brief into a polished event that felt calm, precise, and premium.",
        name: "Corporate Client",
        role: "Event Lead",
        company: "Enterprise Brand",
    },
    {
        quote: "The team handled production and communication with a level of discipline that reduced risk immediately.",
        name: "Brand Client",
        role: "Marketing Manager",
        company: "National Brand",
    },
    {
        quote: "They understand how to make the creative idea respectful of budget and still powerful in the room.",
        name: "Production Partner",
        role: "Commercial Director",
        company: "Agency Partner",
    },
];

export const quoteCopy = {
    quote: "The way to get started is to quit talking and begin doing",
    author: "Walt Disney",
    subtext: "Begin doing it with KAMI",
};

export const serviceIcons: Record<string, LucideIcon> = {
    corporate: Building2,
    brand: Sparkles,
    exhibition: ImageIcon,
    concert: Mic,
    strategy: Briefcase,
    support: Camera,
    concept: Palette,
    production: Workflow,
    quality: CheckCircle2,
    direction: Target,
};
