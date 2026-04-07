// lib/data.ts
// Single source of truth for all site content.
// In production, replace these with CMS fetches (Sanity, Contentful, etc.)

export const siteConfig = {
  name: 'ARC IT Solutions',
  tagline: 'Software Engineering & Creative Design',
  description:
    'A dual-discipline agency — software engineering and creative design — built for businesses that refuse to compromise on craft, quality, or longevity.',
  email: 'info@arcit.in',
  phone: '+91 9992165050 \n +91 9991153885 \n +91 7015654688',
  address: 'Haryana, India — Remote Worldwide',
  founded: '2012',
  url: 'https://www.arcit.in',
  social: {
    twitter: 'https://twitter.com/arcitsolutions',
    linkedin: 'https://linkedin.com/company/arcitsolutions',
    dribbble: 'https://dribbble.com/arcitsolutions',
    github: 'https://github.com/arcitsolutions',
  },
}

export const stats = [
  { value: '12+', label: 'Years in Practice' },
  { value: '180+', label: 'Projects Delivered' },
  { value: '60+', label: 'Clients Served' },
  { value: '98%', label: 'Retention Rate' },
]

export const services = [
  {
    slug: 'software-engineering',
    number: '01',
    category: 'Software Engineering',
    title: 'Full-Stack Product Development',
    headline: 'Code that runs at scale. Architecture that ages well.',
    description:
      'From architecture to deployment, we build robust, scalable software products. Web applications, APIs, cloud infrastructure, and everything in between — engineered to perform for years.',
    longDescription: `We approach software engineering the way a structural engineer approaches a building: with a deep respect for what it will need to withstand over time. Our code is not just functional — it is maintainable, testable, documented, and built to be extended by teams we have never met.

Every engagement begins with an architectural review. We choose the stack that serves the product, not the stack that is fashionable. We write tests before we write features. We instrument observability before we launch.

Our engineering team has built everything from real-time financial platforms to consumer mobile applications with millions of daily active users. The common thread is a refusal to cut corners where it matters.`,
    capabilities: [
      'Web Applications',
      'API Development',
      'Cloud Architecture',
      'Mobile Apps (iOS & Android)',
      'DevOps & CI/CD',
      'Performance Engineering',
      'Database Design',
      'Security Architecture',
    ],
    technologies: [
      'React / Next.js',
      'TypeScript',
      'Node.js',
      'Python / Django',
      'PostgreSQL / Redis',
      'AWS / GCP / Azure',
      'Docker / Kubernetes',
      'GraphQL / REST',
    ],
    icon: 'code',
  },
  {
    slug: 'product-design',
    number: '02',
    category: 'Product Design',
    title: 'User Experience & Interface Design',
    headline: 'Design that earns trust before a word is read.',
    description:
      'We design digital interfaces that are intuitive, beautiful, and conversion-focused. Every pixel is intentional. Every interaction is purposeful. Design that serves the user and the business equally.',
    longDescription: `Good design is invisible. Great design makes you wonder why everything else feels clumsy by comparison. We design products at that standard.

Our process begins with deep research: understanding users, mapping journeys, identifying friction points. We prototype early, test often, and iterate with conviction. By the time a design reaches engineering, it has survived real scrutiny.

We also build the systems behind the design — component libraries, design tokens, spacing systems, icon sets — the infrastructure that allows your product to grow coherently without design debt accumulating in every sprint.`,
    capabilities: [
      'UX Research & Discovery',
      'User Journey Mapping',
      'Wireframing & Prototyping',
      'UI Design',
      'Design Systems',
      'Usability Testing',
      'Motion & Interaction Design',
      'Accessibility Auditing',
    ],
    technologies: [
      'Figma',
      'Framer',
      'Principle',
      'Maze (Testing)',
      'Hotjar / FullStory',
      'Storybook',
      'Zeroheight',
      'Lottie',
    ],
    icon: 'design',
  },
  {
    slug: 'brand-identity',
    number: '03',
    category: 'Brand Identity',
    title: 'Visual Identity & Brand Systems',
    headline: 'A brand that commands respect before a word is spoken.',
    description:
      'We create comprehensive visual identities — logos, typography, color systems, and brand guidelines — built for longevity. Brands that look as sharp in ten years as they do today.',
    longDescription: `A brand is not a logo. It is a consistent set of decisions — visual, verbal, tonal — that accumulates into a reputation. We build brands with that understanding.

We start with strategy: who you are, who you serve, what you stand for, and what you need to communicate in the first three seconds. From that foundation, we build every visual element deliberately, with an eye toward both differentiation and durability.

Every brand identity we deliver includes a comprehensive guidelines document that allows your team, your agencies, and your partners to apply the brand consistently — whether on a business card, a billboard, or a digital product.`,
    capabilities: [
      'Brand Strategy',
      'Logo Design',
      'Visual Identity System',
      'Typography Selection',
      'Color System Design',
      'Brand Guidelines',
      'Marketing Collateral',
      'Packaging Design',
    ],
    technologies: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Figma',
      'InDesign',
      'After Effects',
      'Brand.ai',
      'Frontify',
    ],
    icon: 'brand',
  },
  {
    slug: 'digital-strategy',
    number: '04',
    category: 'Digital Strategy',
    title: 'Technology Consulting & Strategy',
    headline: 'Experienced perspective on the decisions that shape everything else.',
    description:
      'For businesses at a crossroads with technology. We help you make the right architectural decisions, choose the right stack, and map a credible digital roadmap for the years ahead.',
    longDescription: `Some of the most expensive mistakes in software are not bugs — they are decisions made without sufficient experience. A wrong stack choice. A premature scaling decision. A monolith that should have been modular. A microservices architecture that should have stayed simple.

We have seen these patterns play out hundreds of times. Our strategy engagements exist to share that pattern recognition with leadership teams before the expensive decisions are locked in.

We offer technology audits, architectural reviews, CTO advisory retainers, and digital roadmapping — engagements structured around giving your leadership team the perspective they need to make high-confidence decisions.`,
    capabilities: [
      'Technology Audits',
      'Stack Selection',
      'Digital Roadmapping',
      'Architectural Reviews',
      'Team Structure Design',
      'Process Design',
      'CTO Advisory (Retainer)',
      'Vendor Evaluation',
    ],
    technologies: [
      'Architecture Reviews',
      'Risk Assessment Frameworks',
      'OKR Frameworks',
      'Agile / Shape Up',
      'Due Diligence',
    ],
    icon: 'strategy',
  },
]

export const projects = [
  {
    slug: 'meridian-financial-platform',
    category: 'Software Engineering + Brand Identity',
    client: 'Meridian Financial',
    title: 'Meridian Financial Platform',
    subtitle: 'A wealth management platform built for institutional trust.',
    description:
      'End-to-end design and engineering of a wealth management platform handling $2B+ in assets. Custom data visualization, real-time portfolio analytics, and a brand identity built for institutional trust.',
    challenge:
      'Meridian was managing client portfolios through a patchwork of spreadsheets and legacy tools. They needed a single platform that could handle $2B+ in assets, provide real-time analytics, satisfy compliance requirements, and look credible enough for their institutional clients.',
    solution:
      'We designed and built a bespoke wealth management platform from the ground up: a React front-end with real-time WebSocket data feeds, a Node.js/PostgreSQL back-end with audit-grade data integrity, and a brand identity that positioned Meridian as a serious institutional player. The platform launched to 40 client accounts and scaled to 340 within the first year.',
    outcome: 'Assets under management grew 180% in 18 months. Client onboarding time dropped from 3 weeks to 4 days. Zero compliance incidents since launch.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Brand Identity', 'WebSockets', 'AWS'],
    services: ['Software Engineering', 'Brand Identity', 'Product Design'],
    year: '2023',
    duration: '9 months',
    team: '6 engineers, 2 designers',
    featured: true,
    metrics: [
      { value: '$2B+', label: 'Assets on Platform' },
      { value: '180%', label: 'AUM Growth' },
      { value: '4 days', label: 'Onboarding Time' },
      { value: '340', label: 'Active Accounts' },
    ],
  },
  {
    slug: 'halcyon-health-app',
    category: 'Product Design + Development',
    client: 'Halcyon Health',
    title: 'Halcyon Health Mobile App',
    subtitle: 'HIPAA-compliant patient care for 400,000+ users.',
    description:
      'A patient-facing health management application with a design system serving 400,000+ users. HIPAA-compliant architecture, accessibility-first UI, and a zero-defect clinical data pipeline.',
    challenge:
      'Halcyon had a working MVP but it was struggling under scale, had significant accessibility gaps, and had accumulated enough design debt that their engineering team was slowing down. They needed a complete design system and a rebuilt data architecture.',
    solution:
      'We rebuilt Halcyon from the foundation: a new React Native application with a fully documented design system (220+ components), a HIPAA-compliant data pipeline, and accessibility testing at every stage. We delivered in three phases to minimise disruption to existing users.',
    outcome: 'App Store rating improved from 3.2 to 4.8. Engineering velocity increased 40%. Zero HIPAA incidents. 400,000 monthly active users within 6 months of relaunch.',
    tags: ['React Native', 'TypeScript', 'UX Design', 'System Design', 'HIPAA', 'AWS'],
    services: ['Product Design', 'Software Engineering'],
    year: '2023',
    duration: '11 months',
    team: '5 engineers, 3 designers',
    featured: true,
    metrics: [
      { value: '400K+', label: 'Monthly Active Users' },
      { value: '4.8★', label: 'App Store Rating' },
      { value: '40%', label: 'Engineering Velocity Gain' },
      { value: '220+', label: 'Design System Components' },
    ],
  },
  {
    slug: 'arca-architecture-studio',
    category: 'Brand Identity + Web Development',
    client: 'Arca Architecture',
    title: 'Arca Architecture Studio',
    subtitle: 'An award-nominated brand and portfolio for a boutique architecture firm.',
    description:
      'A comprehensive brand identity and bespoke website for a boutique architecture firm. Editorial photography direction, custom CMS integration, and an award-nominated portfolio experience.',
    challenge:
      'Arca was winning projects on word of mouth alone, but their digital presence did not reflect the quality of their work. They needed a brand identity and website that could open doors to larger institutional commissions.',
    solution:
      'We developed a complete visual identity system — wordmark, typographic system, grid framework — rooted in architectural principles. The website was built on Next.js with a Sanity CMS integration, allowing Arca to manage their portfolio without developer involvement. Photography direction was handled in partnership with a documentary photographer.',
    outcome: 'Arca received an Awwwards Honorable Mention within two weeks of launch. Three institutional RFPs were received within the first month. The brand has since appeared in Dezeen and Architectural Digest.',
    tags: ['Next.js', 'Sanity CMS', 'Brand System', 'Motion Design', 'TypeScript'],
    services: ['Brand Identity', 'Software Engineering', 'Product Design'],
    year: '2022',
    duration: '5 months',
    team: '2 engineers, 2 designers',
    featured: true,
    metrics: [
      { value: 'Awwwards', label: 'Honorable Mention' },
      { value: '3', label: 'Institutional RFPs in Month 1' },
      { value: '2', label: 'Major Press Features' },
      { value: '5mo', label: 'Delivered On Time' },
    ],
  },
  {
    slug: 'vanta-logistics-saas',
    category: 'Full-Stack Engineering',
    client: 'Vanta Logistics',
    title: 'Vanta Logistics SaaS',
    subtitle: 'A multi-tenant freight platform used by 80+ enterprise clients.',
    description:
      'Multi-tenant SaaS platform for freight logistics with real-time shipment tracking, custom workflow automation, and a white-label dashboard used by 80+ enterprise clients.',
    challenge:
      'Vanta was building their logistics SaaS on a codebase that had grown beyond the ability of the founding team to maintain. They needed a complete re-architecture before they could close their Series B or pursue enterprise sales.',
    solution:
      'We undertook a phased re-architecture: decomposing the monolith into domain services, rebuilding the front-end in Vue.js with a proper component architecture, and introducing the observability and multi-tenancy infrastructure needed for enterprise clients. The rebuild ran in parallel with the existing system, with a zero-downtime cutover.',
    outcome: 'Series B closed at $24M six months after relaunch. Enterprise client count grew from 12 to 80+ in 18 months. System uptime increased from 97.1% to 99.94%.',
    tags: ['Vue.js', 'Python', 'AWS', 'Microservices', 'PostgreSQL', 'Redis'],
    services: ['Software Engineering', 'Digital Strategy'],
    year: '2022',
    duration: '14 months',
    team: '8 engineers, 1 designer',
    featured: false,
    metrics: [
      { value: '$24M', label: 'Series B Raised' },
      { value: '80+', label: 'Enterprise Clients' },
      { value: '99.94%', label: 'Uptime' },
      { value: '0', label: 'Downtime at Cutover' },
    ],
  },
]

export const testimonials = [
  {
    quote:
      'ARC IT Solutions delivered something we had failed to achieve with two previous agencies — a product that our engineers are proud of and our users actually enjoy. They held a standard we did not even know to ask for.',
    name: 'Sarah Okonkwo',
    title: 'Chief Product Officer',
    company: 'Meridian Financial',
    project: 'meridian-financial-platform',
  },
  {
    quote:
      'The level of integration between their design and engineering teams is unlike anything I have seen. When we launched, there was zero gap between what was designed and what was built. That almost never happens.',
    name: 'James Hartwell',
    title: 'Founder & CEO',
    company: 'Halcyon Health',
    project: 'halcyon-health-app',
  },
  {
    quote:
      'We came to ARC IT Solutions for a website. We ended up with a brand identity, a design system, and a technology partner we plan to work with for the next decade. The quality of their thinking is exceptional.',
    name: 'Priya Menon',
    title: 'Managing Director',
    company: 'Arca Architecture Studio',
    project: 'arca-architecture-studio',
  },
  {
    quote:
      'In three years of working with ARC IT Solutions, they have never missed a deadline, never delivered work below expectation, and never stopped pushing us to think bigger. They are genuinely part of our team.',
    name: 'Daniel Park',
    title: 'VP Engineering',
    company: 'Vanta Logistics',
    project: 'vanta-logistics-saas',
  },
]

export const processSteps = [
  {
    phase: 'Phase 01',
    title: 'Discovery & Alignment',
    duration: '1–2 Weeks',
    description:
      'We begin every engagement with a structured discovery phase. We learn your business, your users, your constraints, and your ambitions. This phase produces a clear brief that aligns all stakeholders before a single line of work is started.',
    detail: `Discovery is not a formality for us — it is where we earn the right to opine on your product. We conduct stakeholder interviews, review existing systems and analytics, and map out the competitive landscape. We challenge assumptions. We ask uncomfortable questions. We surface the constraints that will define the project.\n\nAt the end of discovery, every person on both teams understands what we are building, why we are building it, and what success looks like. That clarity is the most valuable thing we deliver.`,
    deliverables: ['Project Brief', 'Scope Definition', 'Risk Assessment', 'Timeline & Budget', 'Stakeholder Alignment Document'],
  },
  {
    phase: 'Phase 02',
    title: 'Strategy & Architecture',
    duration: '2–4 Weeks',
    description:
      'Before designing or building, we design the system. Technical architecture, information architecture, content strategy, and design direction are all resolved at this stage — preventing costly pivots downstream.',
    detail: `Most projects fail not because of poor execution, but because of poor planning. The architecture phase is where we make the high-leverage decisions: the stack, the data model, the component structure, the design system foundations. We document everything.\n\nFor engineering-heavy projects, this phase produces an Architecture Decision Record (ADR) — a living document that captures every significant technical choice and the reasoning behind it. For design-heavy projects, it produces a design direction deck and a style tile that must be approved before production work begins.`,
    deliverables: ['Technical Architecture Document', 'Design Direction', 'Content Strategy', 'Development Roadmap', 'Architecture Decision Record'],
  },
  {
    phase: 'Phase 03',
    title: 'Design & Engineering',
    duration: '6–16 Weeks',
    description:
      'Our design and engineering teams work in tandem, not in sequence. Weekly check-ins, iterative reviews, and continuous collaboration ensure the final product is coherent — visually and technically — at every level.',
    detail: `The production phase runs on two-week sprints. Each sprint begins with a planning session, delivers working software or reviewed design, and ends with a client review. Nothing waits until the end.\n\nOur design and engineering teams share a Figma workspace, a Slack channel, and a weekly sync. Designers understand component constraints. Engineers understand design intent. This is not common — and it shows in the output.`,
    deliverables: ['UI/UX Design (Figma)', 'Working Software (per sprint)', 'QA & Testing Reports', 'Weekly Status Updates', 'Staging Environment'],
  },
  {
    phase: 'Phase 04',
    title: 'Launch & Partnership',
    duration: 'Ongoing',
    description:
      'Launch is not the end. We support every project post-delivery with structured maintenance, monitoring, and iteration. Our best relationships are with clients who treat us as a long-term technology and design partner.',
    detail: `Every project we deliver includes a 30-day post-launch support window as standard. After that, clients can move to a retainer — a structured ongoing engagement where we handle maintenance, monitor performance, implement improvements, and act as your on-call technical and design team.\n\nOur longest client relationship is eleven years. That is the relationship model we design every engagement toward.`,
    deliverables: ['Production Deployment', 'Monitoring Setup', 'Technical Documentation', '30-Day Support Window', 'Optional Ongoing Retainer'],
  },
]

export const values = [
  {
    title: 'Craft over speed',
    description:
      'We take the time to do it right. Every line of code, every design decision, every client interaction reflects our commitment to quality over convenience.',
  },
  {
    title: 'Integrated thinking',
    description:
      'Software and design are not separate disciplines at ARC IT Solutions. Our teams collaborate from day one, producing work that is coherent, purposeful, and indivisible.',
  },
  {
    title: 'Long-term partnerships',
    description:
      'We measure success in years, not deliverables. Our most valued relationships are with clients who have been with us through multiple phases of growth.',
  },
  {
    title: 'Honest counsel',
    description:
      'We will tell you what your project needs, not what you want to hear. Honest, experienced perspective is a core part of our service.',
  },
]

export const recognition = [
  'Awwwards — Site of the Day',
  'CSS Design Awards — Best Innovation',
  'Webby Awards Honoree',
  'Clutch — Top Design Agency',
  'G2 — High Performer 2024',
  'Dribbble — Top Studio',
]

export const teamStats = [
  { value: '38', label: 'Specialists' },
  { value: '12', label: 'Countries Served' },
  { value: '$480M+', label: 'Client Revenue Influenced' },
  { value: '4.9/5', label: 'Average Client Rating' },
]
