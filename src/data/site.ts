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
  Workflow
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import backstageVisual from '../assets/visuals/backstage-control.svg';
import brandLaunchVisual from '../assets/visuals/brand-launch.svg';
import concertStageVisual from '../assets/visuals/concert-stage.svg';
import corporateStageVisual from '../assets/visuals/corporate-stage.svg';
import exhibitionBoothVisual from '../assets/visuals/exhibition-booth.svg';
import rendraPortrait from '../assets/visuals/rendra.svg';
import siskaPortrait from '../assets/visuals/team-siska.svg';
import videoReelVisual from '../assets/visuals/video-reel.svg';

export type NavItem = { label: string; href: string };

export type TimelineGroup = { period: string; items: string[] };

export type TeamProfile = { name: string; role: string; description: string; photo: string };

export type CategoryItem = {
  slug: string;
  title: string;
  description: string;
  examples: string[];
  image: string;
  gallery: string[];
  videoTitle: string;
  videoThumb: string;
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
  gallery: string[];
  videoThumb: string;
  videoTitle: string;
};

export type StatItem = { label: string; value: number; suffix: string; icon: LucideIcon };

export type Testimonial = { quote: string; name: string; role: string; company: string };

export type ClientLogo = { name: string; image?: string };

function eventImage(kind: 'corporate' | 'brand' | 'exhibition' | 'concert' | 'backstage' | 'booth', variant = 0) {
  const maps = {
    corporate: [corporateStageVisual],
    brand: [brandLaunchVisual],
    exhibition: [exhibitionBoothVisual],
    booth: [exhibitionBoothVisual],
    concert: [concertStageVisual],
    backstage: [backstageVisual]
  } as const;

  const list = maps[kind];
  return list[variant % list.length];
}

function unsplashPhoto(query: string, sig: string | number) {
  const q = query.toLowerCase();
  if (q.includes('backstage') || q.includes('crew')) return eventImage('backstage', String(sig).length);
  if (q.includes('product') || q.includes('launch') || q.includes('brand')) return eventImage('brand', String(sig).length);
  if (q.includes('booth') || q.includes('trade') || q.includes('expo')) return eventImage('booth', String(sig).length);
  if (q.includes('exhibition')) return eventImage('exhibition', String(sig).length);
  if (q.includes('concert') || q.includes('stage') || q.includes('music')) return eventImage('concert', String(sig).length);
  if (q.includes('corporate') || q.includes('conference') || q.includes('summit') || q.includes('gala') || q.includes('audience')) return eventImage('corporate', String(sig).length);
  return eventImage('corporate', String(sig).length);
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Why KAMI', href: '/why-kami' },
  { label: 'Contact', href: '/contact' }
];

export const aboutCopy = {
  title: 'About KAMI',
  body1: 'KAMI bridges corporate needs and creative event execution.',
  body2:
    'With a core team that has strong corporate backgrounds prior to developing their own agency, KAMI understands the 3 main pillars in every corporate event needs, which are quality, budget, and creativity.'
};

export const teamProfiles: TeamProfile[] = [
  {
    name: 'Siska Tamba',
    role: 'Wizard of Lightbulb Moments',
    description:
      'With 16 years of experience in Sales and Brand Marketing, Siska is more than able to map out your unique needs as a client and incorporate your brand values in various event concepts that actually are respectful of your budget!',
    photo: siskaPortrait
  },
  {
    name: 'Rendra Ramadhan',
    role: 'Operation Ninja',
    description:
      'Rendra brings a strong, dependable operational and production networks that are just the best for KAMI. He built these networks throughout his decades of event management experience in various industries and organizations in Indonesia.',
    photo: rendraPortrait
  }
];

export const whyKamiCards = [
  {
    title: 'Efficient Budget!',
    description: 'KAMI knows exactly how to be respectful of budget without having to sacrifice ideas and creativities.',
    icon: Trophy
  },
  {
    title: 'Dedicated Inhouse Team!',
    description: 'KAMI guarantees our quality by engaging only inhouse team for the most important part of your events.',
    icon: Users
  },
  {
    title: 'Drama-Free Production!',
    description:
      'KAMI has our own workshop for every production needs. It ensures timely delivery of production, as we are not sharing production load with another agency.',
    icon: ShieldCheck
  }
];

export const timelineGroups: TimelineGroup[] = [
  {
    period: '2012-2014',
    items: ['Telecom Provider: Brand Events', 'FMCG Industry: Internal Events', 'BUMN: Corporate Events', 'Music Agency: Concerts']
  },
  {
    period: '2015-2017',
    items: ['Oil and Gas: Internal Events', 'Jakarta Fair: Exhibitions', 'MLM and Insurance: Activation Events']
  },
  {
    period: '2018-2020',
    items: ['IDI: Corporate Events', 'FMCG: Brand Launching', 'Automotive: Exhibition']
  },
  {
    period: '2021-2022',
    items: ['Health Tech: Internal Events', 'Health Tech: Activation Events']
  },
  {
    period: '2023',
    items: ['Come and be with KAMI']
  }
];

export const timelineFooterNote =
  'Timeline only acts as a reference of our portfolio and does not contain the entirety of events that we have done over the years. We decided to leave out some independent, small events that may or may not resemble the bigger events mentioned within above timeline to help with the visualization.';

export const categories: CategoryItem[] = [
  {
    slug: 'corporate-event',
    title: 'Corporate Event',
    description:
      'Including but not limited to every gathering format that is intended for internal and/or external stakeholders of a company. This event type typically require simpler event management support that focuses on ideation, lighting, talents, and stage production depending on the scale and goals of the event.',
    examples: [
      'Synergy Southeast Asia Summit 2025',
      'BCA Corporate and Distributor Gathering',
      'Unilever Distributor Award Night',
      'Conoco-Phillips Employee Gathering',
      '4Life Indonesia National Convention'
    ],
    image: unsplashPhoto('corporate event conference stage audience', 'corporate-hero'),
    gallery: [
      unsplashPhoto('corporate event conference stage audience', 'corporate-g1'),
      unsplashPhoto('executive summit keynote stage lighting', 'corporate-g2'),
      unsplashPhoto('corporate gala dinner event lighting', 'corporate-g3')
    ],
    videoTitle: 'Corporate event production reel',
    videoThumb: videoReelVisual
  },
  {
    slug: 'brand-event',
    title: 'Brand Event',
    description:
      'Including but not limited to every event format that requires medium to high creative support. Corporate typically needs pre and post event management in order to ensure deliverables of overall brand and product positioning. Event management service may include product launch as well as online and offline brand campaign when needed, both in BTL and ATL formats.',
    examples: [
      '4Life Skincare Launching',
      'Good Doctor Activation Roadshows',
      '4Life Southeast Asia Launching Event',
      'Datsun Factory Launching',
      'LG Mobile Launching'
    ],
    image: unsplashPhoto('product launch event stage lighting brand', 'brand-hero'),
    gallery: [
      unsplashPhoto('product launch event stage lighting brand', 'brand-g1'),
      unsplashPhoto('brand activation crowd event lighting', 'brand-g2'),
      unsplashPhoto('corporate brand launch reveal stage', 'brand-g3')
    ],
    videoTitle: 'Brand launch video highlight',
    videoThumb: videoReelVisual
  },
  {
    slug: 'exhibition',
    title: 'Exhibition',
    description:
      'Including but not limited to various exhibition needs, from booth ideation, booth production, provision of sales force and or other manning support, unique gimmicks to sponsorship package creation.',
    examples: ['Chevrolet Booth : IIMS', 'Kompas Gramedia : Jakarta Fair', 'Mandiri Marathon Fair : All Booth'],
    image: unsplashPhoto('exhibition booth trade show lighting', 'expo-hero'),
    gallery: [
      unsplashPhoto('exhibition booth trade show lighting', 'expo-g1'),
      unsplashPhoto('trade show booth product display', 'expo-g2'),
      unsplashPhoto('event booth activation audience', 'expo-g3')
    ],
    videoTitle: 'Exhibition booth walkthrough',
    videoThumb: videoReelVisual
  },
  {
    slug: 'concert',
    title: 'Concert',
    description:
      'Including but not limited to provision of all and every concert needs from lighting, stage, talents, event management, license and permit, to security and every other possible items typically requested in music concerts.',
    examples: ['Bigbang Concert', 'Metallica Concert', 'Tri Karnival', 'HUT Slank'],
    image: unsplashPhoto('concert stage lights crowd live music', 'concert-hero'),
    gallery: [
      unsplashPhoto('concert stage lights crowd live music', 'concert-g1'),
      unsplashPhoto('live concert audience lighting stage', 'concert-g2'),
      unsplashPhoto('backstage concert production crew', 'concert-g3')
    ],
    videoTitle: 'Concert production spotlight',
    videoThumb: videoReelVisual
  }
];

export const heroCards = [
  {
    title: 'Quality first',
    description: 'Every event is built to support a clean and dependable delivery standard.',
    icon: Briefcase
  },
  {
    title: 'Budget respectful',
    description: 'Creative ideas are shaped to stay practical and commercially sensible.',
    icon: Sparkles
  },
  {
    title: 'Creativity intact',
    description: 'The concept stays strong while the production stays disciplined.',
    icon: Trophy
  }
];

export const projectShowcase: ProjectItem[] = [
  {
    slug: 'global-leadership-summit',
    category: 'Corporate Event',
    title: 'Global Leadership Summit',
    description: 'A premium executive summit with structured pacing and calm, precise show control.',
    overview: 'A corporate summit designed to keep the audience focused while the production stayed almost invisible.',
    challenge: 'Multiple speakers, short setup windows, and a sensitive venue required a disciplined operational plan.',
    solution: 'We used a modular stage approach, tight cueing, and a backstage workflow that kept the room calm and polished.',
    metrics: [
      { label: 'Attendees', value: '1,200' },
      { label: 'Speakers', value: '18' },
      { label: 'Days', value: '2' }
    ],
    timeline: [
      { label: 'Plan', detail: 'Defined room flow, stage architecture, and show rhythm.' },
      { label: 'Build', detail: 'Prepared technical integration and cue sheets.' },
      { label: 'Live', detail: 'Delivered smooth operations across all sessions.' }
    ],
    image: unsplashPhoto('leadership summit keynote stage audience', 'project-1a'),
    gallery: [
      unsplashPhoto('leadership summit keynote stage audience', 'project-1a'),
      unsplashPhoto('executive conference panel stage', 'project-1b'),
      unsplashPhoto('corporate event audience lighting', 'project-1c')
    ],
    videoThumb: videoReelVisual,
    videoTitle: 'Executive summit highlight'
  },
  {
    slug: 'product-launch-night',
    category: 'Brand Event',
    title: 'Product Launch Night',
    description: 'A cinematic reveal experience with focused storytelling and press-ready visuals.',
    overview: 'A launch night created to build anticipation, then deliver a clear and memorable brand reveal.',
    challenge: 'The client needed a premium launch environment that avoided looking like a generic showroom.',
    solution: 'We used layered lighting, reveal pacing, and a room design that made the final moment feel earned.',
    metrics: [
      { label: 'Guests', value: '750' },
      { label: 'Reveal Time', value: '12 min' },
      { label: 'Media Hits', value: '24' }
    ],
    timeline: [
      { label: 'Narrative', detail: 'Built the reveal around suspense and brand positioning.' },
      { label: 'Environment', detail: 'Composed lighting and entry flow for pace.' },
      { label: 'Launch', detail: 'Timed the final reveal to maximize impact.' }
    ],
    image: unsplashPhoto('product launch reveal stage lighting', 'project-2a'),
    gallery: [
      unsplashPhoto('product launch reveal stage lighting', 'project-2a'),
      unsplashPhoto('brand launch event crowd lights', 'project-2b'),
      unsplashPhoto('media event product launch photography', 'project-2c')
    ],
    videoThumb: videoReelVisual,
    videoTitle: 'Launch event reel'
  },
  {
    slug: 'future-industry-expo',
    category: 'Exhibition',
    title: 'Future Industry Expo',
    description: 'A high-traffic booth concept with strong visitor flow and clear product storytelling.',
    overview: 'An exhibition build that balanced credibility, visibility, and easy navigation in a dense hall.',
    challenge: 'The booth needed to stand out without feeling overbuilt or difficult to operate.',
    solution: 'We used layered display depths, brand-led graphics, and a guided interaction path.',
    metrics: [
      { label: 'Leads', value: '540' },
      { label: 'Visitors', value: '4.2k' },
      { label: 'Engagement', value: '68%' }
    ],
    timeline: [
      { label: 'Concept', detail: 'Built a layout around traffic and conversation.' },
      { label: 'Fabrication', detail: 'Prepared modular structures for quick build.' },
      { label: 'Activation', detail: 'Trained staff and choreographed touchpoints.' }
    ],
    image: unsplashPhoto('trade show booth exhibition lighting', 'project-3a'),
    gallery: [
      unsplashPhoto('trade show booth exhibition lighting', 'project-3a'),
      unsplashPhoto('event booth product display crowd', 'project-3b'),
      unsplashPhoto('exhibition architecture branded booth', 'project-3c')
    ],
    videoThumb: videoReelVisual,
    videoTitle: 'Expo walkthrough'
  },
  {
    slug: 'neon-stage-session',
    category: 'Concert',
    title: 'Neon Stage Session',
    description: 'A live production with synchronized visuals, lighting, and audience energy.',
    overview: 'A performance environment built for intensity, clarity, and dependable cue execution.',
    challenge: 'The show needed strong stage presence without becoming hard to manage on site.',
    solution: 'We used layered truss geometry, cue discipline, and a compact control workflow.',
    metrics: [
      { label: 'Audience', value: '2.1k' },
      { label: 'Songs', value: '22' },
      { label: 'Setups', value: '1' }
    ],
    timeline: [
      { label: 'Creative', detail: 'Defined the visual identity and atmosphere.' },
      { label: 'Technical', detail: 'Mapped lighting and sound coordination.' },
      { label: 'Showtime', detail: 'Ran cue stacks with steady control.' }
    ],
    image: unsplashPhoto('concert stage lights audience crowd', 'project-4a'),
    gallery: [
      unsplashPhoto('concert stage lights audience crowd', 'project-4a'),
      unsplashPhoto('live music backstage production crew', 'project-4b'),
      unsplashPhoto('concert lighting equipment stage', 'project-4c')
    ],
    videoThumb: videoReelVisual,
    videoTitle: 'Concert production spotlight'
  }
];

export const stats: StatItem[] = [
  { label: 'Events Delivered', value: 150, suffix: '+', icon: CalendarDays },
  { label: 'Happy Clients', value: 100, suffix: '+', icon: Users },
  { label: 'Years Experience', value: 10, suffix: '+', icon: Globe2 },
  { label: 'Satisfaction', value: 98, suffix: '%', icon: Star }
];

// Replace `image` with your own imported file path or public URL if you want customer logos to use photos.
export const clients: ClientLogo[] = [
  { name: 'Astra Bank' },
  { name: 'BCA' },
  { name: 'Unilever' },
  { name: 'ConocoPhillips' },
  { name: '4Life' },
  { name: 'Kompas Gramedia' },
  { name: 'Mandiri' },
  { name: 'Slank' }
];

export const testimonials: Testimonial[] = [
  {
    quote: 'KAMI translated a complex corporate brief into a polished event that felt calm, precise, and premium.',
    name: 'Corporate Client',
    role: 'Event Lead',
    company: 'Enterprise Brand'
  },
  {
    quote: 'The team handled production and communication with a level of discipline that reduced risk immediately.',
    name: 'Brand Client',
    role: 'Marketing Manager',
    company: 'National Brand'
  },
  {
    quote: 'They understand how to make the creative idea respectful of budget and still powerful in the room.',
    name: 'Production Partner',
    role: 'Commercial Director',
    company: 'Agency Partner'
  }
];

export const quoteCopy = {
  quote: 'The way to get started is to quit talking and begin doing',
  author: 'Walt Disney',
  subtext: 'Begin doing it with KAMI'
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
  direction: Target
};
