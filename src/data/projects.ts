export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  year: string;
  client: string;
  tags: string[];
  description: string;
  brief: string;
  approach: string;
  results: { metric: string; value: string }[];
  thumbnail: string;
  heroImage: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Brand Campaign X",
    slug: "brand-campaign-x",
    category: "Motion",
    year: "2025",
    client: "Global Brand Co.",
    tags: ["Social", "Motion"],
    description: "A high-energy brand campaign that drove 2M+ views across platforms.",
    brief: "The client needed to break through a saturated market with a bold visual identity. We created a motion-first campaign that prioritized shareability and brand recall.",
    approach: "Starting with moodboards and style frames, we developed a kinetic typography system paired with custom illustrations. Every asset was optimized for both 16:9 and 9:16 formats.",
    results: [
      { metric: "Views", value: "2M+" },
      { metric: "Engagement", value: "+180%" },
      { metric: "Followers", value: "+15K" },
    ],
    thumbnail: "/projects/thumb-1.jpg",
    heroImage: "/projects/hero-1.jpg",
  },
  {
    id: "2",
    title: "Product Launch Reel",
    slug: "product-launch-reel",
    category: "Social",
    year: "2025",
    client: "TechStart Inc.",
    tags: ["Social", "Video"],
    description: "Launch campaign that hit #1 trending on launch day.",
    brief: "A product launch needed to feel like an event. The goal was maximum visibility in the first 24 hours.",
    approach: "We scripted, shot, and edited a 60-second launch reel that told the product story in three acts. Strategic sound design and pacing kept retention above 70%.",
    results: [
      { metric: "Views", value: "500K+" },
      { metric: "Retention", value: "72%" },
      { metric: "Shares", value: "+8K" },
    ],
    thumbnail: "/projects/thumb-2.jpg",
    heroImage: "/projects/hero-2.jpg",
  },
  {
    id: "3",
    title: "Motion Reel 2025",
    slug: "motion-reel-2025",
    category: "Motion",
    year: "2025",
    client: "Self-initiated",
    tags: ["Motion", "Content"],
    description: "Annual showreel showcasing best motion work of the year.",
    brief: "An annual portfolio piece that needed to demonstrate range while maintaining a cohesive visual signature.",
    approach: "Curated 12 projects into a continuous 90-second edit. Used a consistent color grade and transition language to unify diverse client work.",
    results: [
      { metric: "Views", value: "100K+" },
      { metric: "Inquiries", value: "+45%" },
    ],
    thumbnail: "/projects/thumb-3.jpg",
    heroImage: "/projects/hero-3.jpg",
  },
  {
    id: "4",
    title: "Documentary Short",
    slug: "documentary-short",
    category: "Video",
    year: "2024",
    client: "Independent",
    tags: ["Video", "Content"],
    description: "A 12-minute documentary exploring local creative communities.",
    brief: "To document the underground creative scene in Cairo through intimate interviews and cinema-quality visuals.",
    approach: "Filmed over 3 weeks with a small crew. Post-production focused on natural color grading and sound design that immersed viewers in each space.",
    results: [
      { metric: "Screenings", value: "5+" },
      { metric: "Award Nom.", value: "2" },
    ],
    thumbnail: "/projects/thumb-4.jpg",
    heroImage: "/projects/hero-4.jpg",
  },
  {
    id: "5",
    title: "E-Commerce Campaign",
    slug: "ecommerce-campaign",
    category: "Campaigns",
    year: "2024",
    client: "RetailPlus",
    tags: ["Campaigns", "Social", "Motion"],
    description: "Performance-driven campaign with measurable ROI across channels.",
    brief: "Scale holiday sales through a multi-platform video campaign targeting Gen Z and Millennials.",
    approach: "Created 30+ assets across TikTok, Instagram, and YouTube. A/B tested hooks, lengths, and CTAs to optimize CAC.",
    results: [
      { metric: "ROAS", value: "4.2x" },
      { metric: "CAC Reduction", value: "-35%" },
      { metric: "Revenue", value: "$120K+" },
    ],
    thumbnail: "/projects/thumb-5.jpg",
    heroImage: "/projects/hero-5.jpg",
  },
  {
    id: "6",
    title: "Rebrand Video Suite",
    slug: "rebrand-video-suite",
    category: "Motion",
    year: "2024",
    client: "Heritage Brand",
    tags: ["Motion", "Brand Content"],
    description: "Complete video identity system for a heritage brand refresh.",
    brief: "A 50-year-old brand needed to modernize without losing equity. The video identity had to bridge past and future.",
    approach: "Developed a modular motion system with brand-specific transitions, typography animations, and a signature color treatment. Applied across 12 deliverables.",
    results: [
      { metric: "Brand Recall", value: "+65%" },
      { metric: "Campaign Views", value: "800K+" },
    ],
    thumbnail: "/projects/thumb-6.jpg",
    heroImage: "/projects/hero-6.jpg",
  },
];

export const categories = ["All", "Motion", "Social", "Video", "Campaigns"];

export const testimonials = [
  {
    quote: "Wassim doubled our Instagram reach in 6 weeks. The reels didn't just look good — they performed.",
    author: "Sarah Chen",
    role: "Head of Marketing",
    company: "GrowthLayer",
  },
  {
    quote: "Best motion designer we've worked with. Delivered ahead of schedule and exceeded every benchmark.",
    author: "Marcus Rivera",
    role: "Creative Director",
    company: "Apex Studio",
  },
  {
    quote: "He translated our brand strategy into visuals that actually connected. Engagement numbers proved it.",
    author: "Aisha Patel",
    role: "Founder",
    company: "BrandFlow",
  },
];
