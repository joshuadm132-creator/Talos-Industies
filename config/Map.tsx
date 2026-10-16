
export type MapPinData = {
  id: string;
  title: string;
  description: string;
  x: number;
  y: number;
  variant?: "main" | "support";
  step?: number;
  subtitle?: string;
  whatWeDo?: string[];
  example?: string;
  href?: string;
  cta?: string;
};

export type PathNode = {
  id: string;
  x: number;
  y: number;
  connectsTo: string[];
};

export type PathConnection = {
  from: string;
  to: string;
  variant: "main" | "support";
};

export type MapDestination = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  x: number;
  y: number;
  connectsTo: string;
  variant: "support";
  whatWeDo?: string[];
  example?: string;
  cta?: string;
};

export const mapConfig = {
  title: "Our Development Journey",
  subtitle:
    "From the first conversation to launch and beyond, discover how Valis Tech helps businesses grow online.",

  image: "/images/process-map.png",

  // ============================================================
  // PROCESS STAGES
  // ============================================================

  pins: [
    {
      id: "discover",
      title: "Discover",
      subtitle: "Understand your business",
      description:
        "Every successful website starts with understanding your business, your customers, and what you want to achieve. We identify the right opportunities before deciding what to build.",
      whatWeDo: [
        "Understand your company, brand, and goals.",
        "Identify your target customers and their needs.",
        "Recommend the pages and features your website requires.",
        "Establish priorities and the project scope.",
      ],
      example:
        "A business receiving product enquiries through WhatsApp may benefit from a structured online catalogue that makes products easier to explore.",
      href: "/contact",
      cta: "Start a conversation",
      x: 15,
      y: 72,
      variant: "main",
      step: 1,
    },
    {
      id: "design",
      title: "Design",
      subtitle: "Plan the experience",
      description:
        "We turn your requirements into a clear website structure and visual direction. The aim is to make your business look professional while helping visitors find the information they need.",
      whatWeDo: [
        "Plan the pages and navigation.",
        "Establish typography, colours, spacing, and visual identity.",
        "Design layouts for mobile, tablet, and desktop.",
        "Plan clear calls to action and customer journeys.",
      ],
      example:
        "For a service business, we can organise the site around its services, company background, packages, and a straightforward enquiry process.",
      href: "/services#digital-presence",
      cta: "Explore web development",
      x: 48,
      y: 40,
      variant: "main",
      step: 2,
    },
    {
      id: "develop",
      title: "Develop",
      subtitle: "Build your digital presence",
      description:
        "We build the website and implement the features agreed during planning. Our focus is on responsive layouts, useful functionality, clean implementation, and a strong foundation for future improvements.",
      whatWeDo: [
        "Build custom website pages and reusable components.",
        "Implement forms, galleries, and enquiry functionality.",
        "Integrate appropriate third-party services.",
        "Share progress previews so you can review the work.",
      ],
      example:
        "A property business could receive a listings website with photo galleries, pricing information, and direct enquiries without needing a full booking engine.",
      href: "/services",
      cta: "Explore our services",
      x: 72,
      y: 65,
      variant: "main",
      step: 3,
    },
    {
      id: "deliver",
      title: "Deliver",
      subtitle: "Launch your website",
      description:
        "Once the website is approved, we prepare it for launch, connect the domain, configure hosting, and complete the handover so you know how your digital presence is managed.",
      whatWeDo: [
        "Prepare the website for production.",
        "Configure the domain and DNS connection.",
        "Complete performance and technical SEO checks.",
        "Launch the website and provide a handover.",
      ],
      example:
        "Your business website becomes accessible through your own domain, with the launch checks completed and ownership kept under your control.",
      href: "/contact",
      cta: "Plan your website launch",
      x: 85,
      y: 48,
      variant: "main",
      step: 4,
    },
    {
      id: "test-refine",
      title: "Test & Refine",
      subtitle: "Make the experience better",
      description:
        "A website needs to work well for real people. We check its functionality, responsiveness, accessibility, and performance, then identify opportunities to improve it.",
      whatWeDo: [
        "Test links, forms, and interactive features.",
        "Check mobile layouts and browser compatibility.",
        "Review accessibility and page performance.",
        "Improve search visibility through SEO and AEO foundations.",
      ],
      example:
        "If a contact form is difficult to use on a phone, testing helps identify the issue so the form can be improved before or after launch.",
      href: "/services#accessibility-section",
      cta: "Explore accessibility",
      x: 83,
      y: 24,
      variant: "support",
      step: 5,
    },
    {
      id: "maintenance",
      title: "Maintenance",
      subtitle: "Keep your website current",
      description:
        "Our relationship with a website does not have to end at launch. Ongoing care helps keep the site updated, monitored, and aligned with your changing business needs.",
      whatWeDo: [
        "Update website content, prices, and images.",
        "Apply relevant security and dependency updates.",
        "Monitor uptime and review performance.",
        "Provide ongoing care through suitable monthly plans.",
      ],
      example:
        "When your business changes its services or prices, maintenance helps keep your website accurate without rebuilding it from scratch.",
      href: "/services#maintenance-section",
      cta: "Explore website maintenance",
      x: 58,
      y: 82,
      variant: "support",
      step: 6,
    },
  ] satisfies MapPinData[],

  // ============================================================
  // ROUTE GRAPH
  // Each node ID appears only once.
  // ============================================================

  paths: {
    nodes: [
      {
        id: "discover",
        x: 15,
        y: 72,
        connectsTo: ["trail-1", "about"],
      },
      {
        id: "trail-1",
        x: 24,
        y: 68,
        connectsTo: ["junction-1"],
      },
      {
        id: "junction-1",
        x: 34,
        y: 60,
        connectsTo: ["design", "lower-branch", "services-ridge"],
      },
      {
        id: "services-ridge",
        x: 32,
        y: 43,
        connectsTo: ["services"],
      },
      {
        id: "design",
        x: 48,
        y: 40,
        connectsTo: ["ridge-1", "work"],
      },
      {
        id: "ridge-1",
        x: 60,
        y: 48,
        connectsTo: ["develop"],
      },
      {
        id: "lower-branch",
        x: 46,
        y: 72,
        connectsTo: ["develop"],
      },
      {
        id: "develop",
        x: 72,
        y: 65,
        connectsTo: ["deliver", "maintenance", "faq"],
      },
      {
        id: "deliver",
        x: 85,
        y: 48,
        connectsTo: ["test-refine"],
      },
      {
        id: "test-refine",
        x: 83,
        y: 24,
        connectsTo: [],
      },
      {
        id: "maintenance",
        x: 58,
        y: 82,
        connectsTo: ["contact"],
      },
      {
        id: "services",
        x: 28,
        y: 22,
        connectsTo: [],
      },
      {
        id: "about",
        x: 8,
        y: 47,
        connectsTo: [],
      },
      {
        id: "work",
        x: 48,
        y: 12,
        connectsTo: [],
      },
      {
        id: "contact",
        x: 35,
        y: 91,
        connectsTo: [],
      },
      {
        id: "faq",
        x: 91,
        y: 84,
        connectsTo: [],
      },
    ] satisfies PathNode[],
  },
};

// ============================================================
// DESTINATION PINS
// ============================================================

export const destinations: MapDestination[] = [
  {
    id: "services",
    title: "Services",
    subtitle: "What we build",
    description:
      "Explore the services Valis Tech offers to help businesses establish, grow, and maintain their online presence.",
    whatWeDo: [
      "Custom websites and digital experiences.",
      "Property and inventory listing websites.",
      "Payment gateway integrations through licensed providers.",
      "SEO, AEO, accessibility, and ongoing maintenance.",
    ],
    example:
      "Explore the service options and identify the solution that best fits your business requirements.",
    href: "/services",
    cta: "Explore all services",
    x: 28,
    y: 22,
    connectsTo: "junction-1",
    variant: "support",
  },
  {
    id: "about",
    title: "About Us",
    subtitle: "Who we are",
    description:
      "Learn about Valis Tech, our mission, our working principles, and our commitment to building thoughtful digital experiences.",
    whatWeDo: [
      "Build professional digital experiences.",
      "Focus on practical technology and modern design.",
      "Work transparently with clients throughout projects.",
      "Keep ownership and handover clear.",
    ],
    example:
      "Understand how our approach combines your business goals with practical web development.",
    href: "/about#who-we-are",
    cta: "Get to know us",
    x: 8,
    y: 47,
    connectsTo: "discover",
    variant: "support",
  },
  {
    id: "work",
    title: "Our Work",
    subtitle: "Explore our projects",
    description:
      "See examples of the types of websites and digital experiences Valis Tech aims to create for businesses and organisations.",
    whatWeDo: [
      "Present business websites and landing pages.",
      "Showcase listing-based digital experiences.",
      "Demonstrate design and mobile usability.",
      "Explore different ways to present a business online.",
    ],
    example:
      "Use project examples to explore possible layouts and features for your own website.",
    href: "/gallery",
    cta: "Explore our work",
    x: 48,
    y: 12,
    connectsTo: "design",
    variant: "support",
  },
  {
    id: "contact",
    title: "Contact Us",
    subtitle: "Start a project",
    description:
      "Tell us about your business, your goals, and the website you have in mind. We can discuss your requirements and the next steps.",
    whatWeDo: [
      "Share your project requirements.",
      "Discuss suitable website features.",
      "Clarify scope and priorities.",
      "Arrange the next steps for your project.",
    ],
    example:
      "Whether you need a new business website or help improving an existing one, start by explaining what you want to achieve.",
    href: "/contact",
    cta: "Start your project",
    x: 35,
    y: 91,
    connectsTo: "maintenance",
    variant: "support",
  },
  {
    id: "faq",
    title: "Packages & Care",
    subtitle: "Build, add-ons and support",
    description:
      "Explore website packages, optional add-ons, and monthly care plans to understand which setup may suit your business.",
    whatWeDo: [
      "Compare website build packages.",
      "Explore optional integrations and additional features.",
      "Review monthly hosting and care plans.",
      "Discuss a package based on your requirements.",
    ],
    example:
      "A small business may start with a one-page site, while a growing company may need several pages and a more comprehensive care plan.",
    href: "/pricing",
    cta: "Explore packages",
    x: 91,
    y: 84,
    connectsTo: "develop",
    variant: "support",
  },
];

// ============================================================
// DRAWN ROAD SEGMENTS
// Keep these in sync with the graph above.
// ============================================================

export const pathConnections: PathConnection[] = [
  // Main development journey
  { from: "discover", to: "trail-1", variant: "main" },
  { from: "trail-1", to: "junction-1", variant: "main" },
  { from: "junction-1", to: "design", variant: "main" },
  { from: "design", to: "ridge-1", variant: "main" },
  { from: "ridge-1", to: "develop", variant: "main" },
  { from: "develop", to: "deliver", variant: "main" },
  { from: "deliver", to: "test-refine", variant: "support" },

  // Alternative development route
  { from: "junction-1", to: "lower-branch", variant: "support" },
  { from: "lower-branch", to: "develop", variant: "support" },

  // Ongoing maintenance
  { from: "develop", to: "maintenance", variant: "support" },

  // Destination branches
  { from: "junction-1", to: "services-ridge", variant: "support" },
  { from: "services-ridge", to: "services", variant: "support" },
  { from: "discover", to: "about", variant: "support" },
  { from: "design", to: "work", variant: "support" },
  { from: "maintenance", to: "contact", variant: "support" },
  { from: "develop", to: "faq", variant: "support" },
];
