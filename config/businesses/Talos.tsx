import { type SocialIconName } from "@/components/socialIcon";
import { talosTheme } from "@/config/themes";

type SocialConfig = {
  label: string;
  href: string;
  icon: SocialIconName;
};

export const Talos = {
  /* ============================================================
     BRAND
     ============================================================ */

  name: "Talos Industries",
  logo: "TALOS",
  logoImage: "/talos-logo.png",
  tagline: "African Advancement",
  description: "Building the digital infrastructure for growing businesses",
  theme: talosTheme,
  location: "Harare, Zimbabwe",

  /* ============================================================
     CONTACT
     ============================================================ */

  contact: {
    phone: "(+263) 77 123 4567",
    email: "info@talosindustries.co.zw",
    address: "Harare, Zimbabwe",
    whatsapp: "0788237076",

    socials: [
      { label: "Instagram", href: "https://instagram.com/talos", icon: "instagram" },
      { label: "LinkedIn", href: "https://linkedin.com/company/talos", icon: "linkedin" },
      { label: "Facebook", href: "https://facebook.com/talos", icon: "facebook" },
      { label: "X", href: "https://x.com/talos", icon: "x" },
    ] as SocialConfig[],

    form: {
      title: "Send us a message",
      subtitle: "We reply within one business day.",
      fields: {
        name: "Your name",
        email: "Email address",
        phone: "Phone (optional)",
        message: "Tell us about your project",
      },
      submitLabel: "Send message",
      successMessage: "Thanks. We'll be in touch soon.",
    },
  },

  /* ============================================================
     NAVIGATION
     ============================================================ */

  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Packages", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  /* ============================================================
     HOME PAGE
     ============================================================ */

  process: {
    title: "How We Work",
    subtitle: "A clear four step process from first conversation to live website.",
    steps: [
      {
        id: "discovery",
        number: "01",
        title: "Discovery",
        description:
          "We learn about your company, your identity, and what sets you apart.",
        youGet: [
          "Understanding of your brand and goals",
          "Recommendations for what your site needs",
          "A clear picture of what makes you different",
        ],
        weNeed: [
          "An hour of your time",
          "Access to existing brand assets if any",
          "Honest answers about your priorities",
        ],
      },
      {
        id: "plan",
        number: "02",
        title: "Plan",
        description:
          "We map out exactly what we'll build, how we'll build it, and what's needed from both sides.",
        youGet: [
          "Full page structure and sitemap",
          "Content strategy and copy plan",
          "Photography plan if needed",
          "Timeline and milestones",
        ],
        weNeed: [
          "Written content you want on the site",
          "Approval on direction and design",
          "Any existing photos, logos, or documents",
        ],
      },
      {
        id: "build",
        number: "03",
        title: "Build",
        description:
          "Weekly live demos let you watch the site come together and request changes in real time.",
        youGet: [
          "Weekly live preview link",
          "Ability to review from anywhere",
          "Real time feedback loop",
          "Two week build cycle",
        ],
        weNeed: [
          "Prompt feedback on weekly demos",
          "Consolidated change requests rather than daily drips",
          "Availability for short check ins",
        ],
      },
      {
        id: "deploy",
        number: "04",
        title: "Deploy",
        description:
          "Once approved, we launch your site with the domain connected, optimised, and live.",
        youGet: [
          "Domain setup and DNS configuration",
          "Performance and SEO checks",
          "Launch and full handover",
          "30 days of post launch support",
        ],
        weNeed: [
          "Final sign off on the build",
          "Domain registrar access if transferring",
          "Payment cleared before launch",
        ],
      },
    ],
  },

  whatWeDo: {
    eyebrow: "Scope",
    title: "What We Do",
    subtitle:
      "Everything you need to establish, launch, and maintain a professional presence online. Built with care and kept current.",
    variant: "cards" as const,
    columns: 3 as const,
    background: "gray" as const,
    items: [
      {
        id: "websites",
        icon: "01",
        title: "Custom Websites",
        description:
          "Designed and built from scratch for portfolios, company profiles, hospitality, engineering, and service businesses.",
      },
      {
        id: "listings",
        icon: "02",
        title: "Listings and Property Sites",
        description:
          "Showcase rooms, properties, or inventory with photo galleries, pricing, and direct enquiry. No online booking engine needed.",
      },
      {
        id: "payments",
        icon: "03",
        title: "Payment Gateway Linking",
        description:
          "Connect your site to licensed providers like Paynow so customers can pay securely through trusted systems.",
      },
      {
        id: "seo",
        icon: "04",
        title: "SEO and Visibility",
        description:
          "Help the right customers find you through semantic structure, metadata, Google Business Profile, and monthly ranking reports.",
      },
      {
        id: "aeo",
        icon: "05",
        title: "AEO Optimisation",
        description:
          "Help your business get discovered through AI and answer engines by structuring your website around the questions your customers are asking.",
      },
      {
        id: "accessibility",
        icon: "06",
        title: "Accessibility",
        description:
          "Sites that work for everyone, including people using screen readers, keyboard navigation, or slow connections.",
      },
      {
        id: "maintenance",
        icon: "07",
        title: "Ongoing Maintenance",
        description:
          "Content updates, security patching, uptime monitoring, and periodic performance checks after launch.",
      },
    ],
    cta: { text: "See Full Services", href: "/services" },
  },

  whatWeDontDo: {
    eyebrow: "Honest Boundaries",
    title: "What We Don't Do",
    subtitle:
      "We are a focused web studio. Being clear about what we don't do helps us serve the clients we do take on exceptionally well.",
    variant: "list" as const,
    columns: 2 as const,
    background: "dark" as const,
    items: [
      {
        id: "no-ecommerce-platform",
        title: "We don't build full ecommerce platforms",
        description:
          "If you need a full product catalogue with cart, checkout, inventory, and shipping logic, we'll refer you to a specialised ecommerce partner.",
      },
      {
        id: "no-booking-engine",
        title: "We don't run a booking or reservation engine",
        description:
          "For lodges and hospitality, we build listings that send enquiries directly to you. We don't process bookings or hold guest data on your behalf.",
      },
      {
        id: "no-payment-handling",
        title: "We don't handle money",
        description:
          "Payments go through licensed providers like Paynow. We never store card or mobile money data on our servers.",
      },
      {
        id: "no-seo-magic",
        title: "We don't promise instant SEO magic",
        description:
          "Ranking takes time and consistent content. We set up the foundations correctly and report on progress monthly. No shortcuts.",
      },
      {
        id: "no-hourly-chaos",
        title: "We don't do hourly ad hoc support",
        description:
          "Support runs through monthly plans so both sides know the scope. Consolidated change requests, predictable turnaround.",
      },
      {
        id: "no-lock-in",
        title: "We don't lock you into proprietary systems",
        description:
          "Your site is built on modern, open standards. If you ever want to move, you can take the code with you.",
      },
    ],
  },

  notOffered: {
    title: "What We Don't Offer Yet and Why",
    intro:
      "We believe in being upfront about scope. At our current stage, we don't build the following. Not because we can't code it, but because doing it responsibly requires certifications and infrastructure we're not yet in a position to guarantee.",
    items: [
      {
        id: "custom-payment-processing",
        title: "Custom Payment Processing",
        reason:
          "We don't build our own payment gateways or handle transactions directly. We integrate with licensed providers like Paynow so your customers' money and data are always handled by a properly regulated service.",
      },
      {
        id: "user-accounts",
        title: "User Accounts and Login Systems",
        reason:
          "We don't currently build systems that require users to create accounts or save personal information. Storing user data responsibly requires data protection safeguards we haven't yet certified, and we'd rather not offer this until we can do it properly.",
      },
      {
        id: "sensitive-data-storage",
        title: "Storage of Sensitive or Financial Data",
        reason:
          "No card numbers, passwords, or sensitive personal data are stored on sites we build. Anything requiring this level of data handling is routed through licensed third party providers.",
      },
    ],
    closing:
      "As we grow and formalize our data protection processes, this list will shrink. For now, this approach lets us build fast, reliable sites without cutting corners on security.",
    background: "gray" as const,
  },

  whyYouNeedWebsite: {
    eyebrow: "Why It Matters",
    title: "Why You Need a Website",
    subtitle:
      "If your business is only on social media or word of mouth, you're leaving growth on the table. Here's what a proper website actually does for you.",
    variant: "reasons" as const,
    columns: 2 as const,
    background: "gray" as const,
    items: [
      {
        id: "credibility",
        title: "Credibility",
        description:
          "Show your customers you're trustworthy and professional through a modern, well built online presence.",
      },
      {
        id: "visibility",
        title: "Visibility",
        description:
          "Put yourself out there and attract new customers worldwide at any hour, while strengthening your brand.",
      },
      {
        id: "showcase",
        title: "Showcase Your Work",
        description:
          "Present your products and services with ease through clean layouts, real photography, and clear descriptions.",
      },
      {
        id: "communication",
        title: "Easy Communication",
        description:
          "Let customers reach you with the click of a button. Contact forms, WhatsApp, phone, or email, always one tap away.",
      },
      {
        id: "standout",
        title: "Stand Out From Competitors",
        description:
          "Many of your competitors still have no online presence. A proper website instantly sets you apart.",
      },
      {
        id: "sales",
        title: "Reduce Sales Effort",
        description:
          "Accept online purchases and enquiries directly through the site, cutting back and forth and letting the site sell while you work.",
      },
      {
        id: "data",
        title: "Valuable Market Data",
        description:
          "Get real insight into where your customers are and what they're interested in. Better judgment for how to move forward.",
      },
    ],
    cta: { text: "Start Your Site", href: "/contact" },
  },

  /* ============================================================
     SERVICES PAGE
     ============================================================ */

  services: {
    headline: "Our Services",
    subheadline:
      "Six focused offerings that cover everything a modern business needs to establish, grow, and maintain its presence online.",
    contents: [
      {
        id: "web-development",
        tag: "Web",
        title: "Web Development",
        description:
          "Custom designed, modern websites built for speed, clarity, and conversion.",
        content: [
          {
            id: "digital-presence",
            subtitle: "Building a stronger digital presence",
            paragraphs: [
              "We design and build websites for businesses that want a professional online presence. From portfolios and company profiles to hospitality, engineering, and service businesses.",
              "Technically, we build with modern frameworks such as Next.js, React, and Tailwind CSS hosted on high performance infrastructure. Every site is responsive by default, optimized for fast load times, and built with clean semantic code.",
            ],
            features: [
              "Custom designed pages, not templates",
              "Mobile friendly and responsive on all devices",
              "Fast load times with optimized images",
              "Built on modern, secure hosting infrastructure",
            ],
            image:"services/WEB Dev vs Design.png",
          },
        ],
        button: { text: "Get Started", href: "/contact" },
      },
      {
        id: "listings-booking",
        tag: "Listings",
        title: "Property and Listings Websites",
        description:
          "Showcase rooms, properties, or inventory with inquiry based listings. No online payment required.",
        content: [
          {
            id: "listings-section",
            subtitle: "Put your listings in front of the right people",
            paragraphs: [
              "If you run a lodge, guesthouse, or property business, we can build a listings site showing your rooms or properties with photos, pricing, and availability.",
              "This is built as a content driven listing system rather than a transactional booking engine. Enquiries are routed to you via a secure contact form or WhatsApp link.",
            ],
            features: [
              "Photo galleries per listing",
              "Pricing and availability display",
              "Direct enquiry via form or WhatsApp",
              "No sensitive data stored on the site",
            ],
          image:"services/listing.png",
          },
        ],
        button: { text: "Discuss Your Listings", href: "/contact" },
      },
      {
        id: "payment-integration",
        tag: "Payments",
        title: "Payment Gateway Linking",
        description:
          "Accept payments through trusted providers like Paynow, securely linked to your site.",
        content: [
          {
            id: "payment-section",
            subtitle: "Get paid without us handling your money",
            paragraphs: [
              "For businesses that need to accept online payments, we connect your website to established licensed payment providers such as Paynow.",
              "We integrate via the payment provider's official API. Transactions and sensitive data are handled entirely by the licensed gateway, never stored or processed on our infrastructure.",
            ],
            features: [
              "Integration with licensed providers such as Paynow",
              "No card or payment data stored on our side",
              "Secure redirect based payment flow",
              "Clear confirmation and receipt handling",
            ],
            image:"services/payment gateway.png",
          },
        ],
        button: { text: "Ask About Payments", href: "/contact" },
      },
      {
  id: "aeo",
  tag: "AEO",
  title: "Answer Engine Optimisation",
  description:
    "Help your business appear in AI generated answers and search results when customers ask questions related to your products and services.",
  content: [
      {
        id: "aeo-section",
        subtitle: "Helping customers find you through AI and search",
        paragraphs: [
          "Search is changing. Customers are increasingly asking AI assistants and answer engines questions such as 'Where can I find a web developer in Harare?' or 'What company offers website design for small businesses?' AEO helps structure your online presence so your business has a better chance of being understood, discovered, and referenced when these questions are answered.",
          "For non technical businesses, this means making sure your website clearly explains who you are, what you offer, where you operate, and why customers should consider you. We create clear, useful content that answers the questions your potential customers are actually asking.",
          "Technically, AEO involves improving how information is structured and understood by search engines and AI systems. This can include semantic HTML, structured data and Schema.org markup, clearly structured headings, question and answer content, entity information, internal linking, crawlability, authoritative business information, and content designed around conversational search queries.",
        ],
        features: [
          "Identify questions your potential customers are asking",
          "Create clear answers around your products and services",
          "Improve website structure and semantic markup",
          "Implement relevant Schema.org structured data",
          "Strengthen business, service, and location information",
          "Optimise content for conversational and question based searches",
        ],
        image:"services/AEO.png",
      },
    ],
    button: { text: "Improve Your Online Visibility", href: "/contact" },
  },
      {
        id: "seo",
        tag: "SEO",
        title: "Search Engine Optimisation",
        description:
          "Improve your visibility and help the right customers find you online.",
        content: [
          {
            id: "seo-section",
            subtitle: "Getting found by the people who matter",
            paragraphs: [
              "A great website only helps your business if people can actually find it. We optimize every site so it shows up when your customers search for what you offer.",
              "This includes clean semantic HTML, optimized metadata, sitemap and robots dot txt configuration, mobile first performance tuning, and Google Business Profile setup.",
            ],
            features: [
              "Search optimized page structure and metadata",
              "Google Business Profile setup",
              "Mobile first and fast loading pages",
              "Monthly ranking reports on Growth and Pro plans",
            ],
            image:"services/SEO.png",
          },
        ],
        button: { text: "Improve Your Ranking", href: "/contact" },
      },
      {
        id: "accessibility",
        tag: "A11y",
        title: "Accessibility Optimisation",
        description:
          "Websites that work for everyone, including people using assistive technology.",
        content: [
          {
            id: "accessibility-section",
            subtitle: "Built so nobody is left out",
            paragraphs: [
              "We design every site so it's usable by as many people as possible, including those using screen readers, keyboard navigation, or slower connections.",
              "This means semantic HTML, proper heading hierarchy, sufficient color contrast, and keyboard navigable interactive elements, tested against WCAG 2.2 AA guidelines.",
            ],
            features: [
              "WCAG 2.2 AA guided design",
              "Screen reader and keyboard navigation support",
              "Color contrast and readable typography",
              "Manual and automated accessibility testing",
            ],
            image:"services/accesibility.png",
          },
        ],
        button: { text: "Ask About Accessibility", href: "/contact" },
      },
      {
        id: "maintenance",
        tag: "Care",
        title: "Website Maintenance and Changes",
        description:
          "Keep your site accurate, current, and running smoothly after launch.",
        content: [
          {
            id: "maintenance-section",
            subtitle: "Your site stays fresh, not frozen in time",
            paragraphs: [
              "Once your site is live, we keep it updated with new prices, new photos, new services, or small text changes so it never feels outdated.",
              "This covers content updates, dependency and security patching, hosting monitoring, and periodic performance and accessibility rechecks.",
            ],
            features: [
              "Regular content updates",
              "Security and dependency patching",
              "Uptime and performance monitoring",
              "Update allowance scales with your care plan",
            ],
            image:"services/maintanance.png",
          },
        ],
        button: { text: "See Care Plans", href: "/pricing" },
      },
    ],
  },

  /* ============================================================
     ABOUT PAGE
     ============================================================ */

  About: {
    intro: {
      eyebrow: "About Us",
      headline: "Building digital experiences for businesses ready to grow.",
      description:
        "We combine creativity, technology, and modern design to help businesses establish a strong presence in the digital world.",
    },
    title: "About Us",
    content: [
      {
        id: "who-we-are",
        subtitle: "Who We Are",
        paragraphs: [
          "We are a growing development and web design company focused on helping businesses establish a strong online presence.",
          "Our team combines creativity, practical technology, and modern design to create professional, responsive, and user friendly digital experiences tailored to each client's needs.",
          "Whether you're a startup, a small business, an organization, or an individual looking to broaden your brand in the digital world, we're here to turn your ideas into a website you can be proud of.",
        ],
        image: "/Logo-removebg-preview.png",
      },
      {
        id: "mission",
        subtitle: "Our Mission",
        paragraphs: [
          "Establishing powerful digital presences through high quality, thoughtfully designed websites and practical technology solutions.",
        ],
        features: [
          "Create professional digital experiences",
          "Help businesses establish a strong online presence",
          "Build responsive and user friendly websites",
          "Deliver technology tailored to each client's needs",
        ],
        image: "/images/about/mission.jpg",
      },
      {
        id: "vision",
        subtitle: "Our Vision",
        paragraphs: [
          "To become a leading provider of technical solutions in Southern Africa by 2035.",
          "We aim to help businesses and organizations use technology to grow, connect with their audiences, and create lasting impact.",
        ],
        image: "/images/about/vision.jpg",
      },
    ],
    motto: "Your Vision. Our Creation.",
  },

  Values: {
    title: "How We Operate",
    content: [
      {
        id: "principles",
        subtitle: "Our Working Principles",
        paragraphs: [
          "We build to last. Every site we ship is written by hand, tested on real devices, and handed over with documentation so you always know what you own.",
          "We work in the open. Weekly demos, clear timelines, and no surprise invoices. If something changes, you hear it from us first.",
        ],
        features: [
          "Human reviewed code, no shortcuts",
          "Weekly progress demos",
          "Transparent fixed pricing",
          "You own the site and its code",
        ],
        button: { text: "Start a Project", href: "/contact" },
      },
      {
        id: "commitments",
        subtitle: "What We Commit To",
        paragraphs: [
          "Every project we take on gets a named point of contact on our side, a shared document with agreed scope, and a predictable monthly cost for ongoing care.",
          "We would rather turn down work we cannot serve well than over promise and under deliver.",
        ],
      },
    ],
  },

  Team: {
    title: "Our Leadership",
    content: [
      {
        id: "sbu",
        subtitle: "Sbu: Technical Back End and Systems Specialist",
        image: "/images/team/sbu.jpg",
        paragraphs: [
          "Sbu oversees our back end architecture, platform integrations, and core infrastructure. He is currently pursuing a Bachelor of Science in Computer Science at the University of the People and brings practical full stack software development and systems engineering experience, ranging from building web platforms with Next.js, Node.js, and PostgreSQL to implementing Payload CMS integrations. Sbu ensures our digital solutions are secure, seamless, and built on reliable back end logic.",
        ],
        features: [
          "Next.js and Node.js",
          "PostgreSQL and database design",
          "Systems architecture",
          "Third party API integration",
        ],
        button: { text: "Contact Us", href: "/contact" },
      },
      {
        id: "denzel",
        subtitle: "Denzel: Technical Director",
        image: "/images/team/denzel.jpg",
        paragraphs: [
          "Denzel drives the core software architecture and web development workflows across our client projects. He is currently pursuing a BSc (Hons) in Computer Science at the University of London and brings strong full stack engineering principles, database architecture expertise, and clean coding practices to our digital solutions. From crafting dynamic front end experiences to structuring reliable back end logic in Node.js and SQL, Denzel ensures every website is built to high modern standards.",
        ],
        features: [
          "Full stack engineering",
          "Database architecture",
          "Front end performance",
          "Code quality and review",
        ],
        button: { text: "Contact Us", href: "/contact" },
      },
      {
        id: "panashe",
        subtitle: "Panashe: Business Management and Analytics Lead",
        image: "/images/team/panashe.jpg",
        paragraphs: [
          "Panashe oversees business strategy, operations, and financial planning across our web service operations. Holding a degree in Business Management with Auditing and Analytics from Swansea University, he brings a data driven approach to client partnerships, operations management, and business growth. His background ensures our client projects align with business goals while keeping our services organized, transparent, and high performing.",
        ],
        features: [
          "Business strategy",
          "Analytics and reporting",
          "Financial planning",
          "Client partnerships",
        ],
        button: { text: "Contact Us", href: "/contact" },
      },
      {
        id: "aidan",
        subtitle: "Aidan: Sales Lead and Market Research",
        image: "/images/team/aidan.jpg",
        paragraphs: [
          "Aidan leads client acquisition, sales outreach, and market research, helping connect businesses with the right digital web solutions. He is currently acquiring certifications in DevOps and IBM technical solutions and bridges technical understanding with client needs. Fluent in German, he uses deep research and communication skills to identify new market opportunities and establish lasting partnerships for our growing agency.",
        ],
        features: [
          "Client acquisition",
          "Market research",
          "Technical translation",
          "German and English",
        ],
        button: { text: "Contact Us", href: "/contact" },
      },
    ],
  },

  /* ============================================================
     PRICING PAGE
     Three tabs: Build, Add-ons, Care. No page swap, all in one
     component, switched by local state.
     ============================================================ */

  Pricing: {
    title: "Packages and Care Plans",
    subtitle:
      "Choose a build package, add any optional extras, and pick the care plan that suits how often your site changes.",

    /* Tab labels shown in the segmented control at the top */
    tabs: [
      { id: "build", label: "Build" },
      { id: "addons", label: "Add-ons" },
      { id: "care", label: "Care" },
    ],

    /* Every Talos build includes these, regardless of tier */
    includedEverywhere: {
      title: "Included in Every Package",
      items: [
        "Responsive design and mobile optimisation",
        "HTTPS and secure hosting setup",
        "Contact form and WhatsApp link",
        "Basic technical SEO",
        "Google indexing and Search Console setup",
        "Basic accessibility checks",
        "Deployment assistance",
        "30 days of post launch support",
      ],
    },

    /* ---------- BUILD TIERS ---------- */

    tiers: [
      {
        id: "starter",
        name: "Starter",
        bestFor: "Individuals, freelancers, and very small businesses",
        monthlyNote: "Recommend basic Care Plan",
         price: "Cost varies by requirements.",
        period: "one time build",
        popular: false,
        description:
          "A single page site that puts you on the map. Fast, credible, and ready in two weeks.",
        features: [
          "1 page landing site",
          "Responsive design",
          "Contact and WhatsApp integration",
          "Basic on page SEO",
          "Google indexing setup",
          "Basic accessibility",
        ],
        ctaText: "Start with Starter",
      },
      {
        id: "business",
        name: "Business",
        bestFor: "Small businesses that need a complete online presence",
        monthlyNote: "Recommend Standard care Plan",
        popular: false,
        price: "Cost varies by requirements.",
        period: "one time build",
        description:
          "Up to five pages for businesses with more to say and a wider range of services to show.",
        features: [
          "Up to 5 pages including Services and Gallery",
          "Everything in Starter",
          "Google Business Profile setup",
          "Analytics setup",
          "Improved on page SEO",
          "Higher quality content sections",
        ],
        ctaText: "Choose Business",
      },
      {
        id: "businessPro",
        name: "Business Pro",
        bestFor: "Established businesses that depend on their website",
        price: "Cost varies by requirements.",
        period: "one time build",
        monthlyNote: "Recommend Pro Care plan",
        popular: false,
        description:
          "A larger custom site with room for listings, custom sections, and advanced SEO.",
        features: [
          "Up to 9 pages plus custom sections",
          "Everything in Business",
          "Listings or content systems",
          "Advanced on page SEO",
          "Monthly SEO report",
          "Priority support",
          "Advanced performance optimisation",
        ],
        ctaText: "Talk About Pro",
      },
    ],

    /* ---------- COMPARISON TABLE ---------- */

    comparison: [
      {
        featureName: "Pages",
        tierValues: { starter: "1", business: "Up to 5", businessPro: "Up to 9 plus custom" },
      },
      {
        featureName: "Responsive design",
        tierValues: { starter: true, business: true, businessPro: true },
      },
      {
        featureName: "Contact and WhatsApp",
        tierValues: { starter: true, business: true, businessPro: true },
      },
      {
        featureName: "Basic SEO",
        tierValues: { starter: true, business: true, businessPro: true },
      },
      {
        featureName: "Google Business Profile",
        tierValues: { starter: false, business: true, businessPro: true },
      },
      {
        featureName: "Analytics",
        tierValues: { starter: false, business: true, businessPro: true },
      },
      {
        featureName: "Gallery section",
        tierValues: { starter: false, business: true, businessPro: true },
      },
      {
        featureName: "Advanced SEO",
        tierValues: { starter: false, business: false, businessPro: true },
      },
      {
        featureName: "Monthly SEO report",
        tierValues: { starter: false, business: false, businessPro: true },
      },
      {
        featureName: "Custom sections",
        tierValues: { starter: false, business: "Limited", businessPro: true },
      },
      {
        featureName: "Priority support",
        tierValues: { starter: false, business: false, businessPro: true },
      },
      {
        featureName: "Payment integration",
        tierValues: { starter: "Add on", business: "Add on", businessPro: "Add on" },
      },
      {
        featureName: "Property listings system",
        tierValues: { starter: "Add on", business: "Add on", businessPro: true },
      },
    ],

    /* ---------- ADD ONS ---------- */

    addons: {
      title: "Optional Add-ons",
      subtitle:
        "Any of these can be added to any build package. Prices are one time unless marked otherwise.",
      items: [
        {
          id: "payment-gateway",
          name: "Payment Gateway Integration",
          description:
            "Connect your site to Paynow or another licensed provider so customers can pay online through a secure redirect.",
          price: "$From 100",
        },
        {
          id: "property-listings",
          name: "Property or Inventory Listings",
          description:
            "A photo driven listings system for rooms, properties, or products, with pricing and enquiry routing.",
          price: "custom",
        },
        {
          id: "extra-pages",
          name: "Additional Pages",
          description:
            "Any pages beyond what your tier includes, designed and built to the same standard.",
          price: "$custom per page",
        },
        {
          id: "google-business-profile",
          name: "Google Business Profile Setup",
          description:
            "We set up and verify your Google Business listing so you appear on Google Maps and local search.",
          price: "$60",
        },
        {
          id: "additional-seo",
          name: "Extended SEO Setup",
          description:
            "Keyword research, structured data, and an initial optimisation pass over your top pages.",
          price: "custom",
        },
        {
          id: "website-redesign",
          name: "Website Redesign",
          description:
            "Modernising an existing site. Price depends on how much content is carried over and how much is rebuilt.",
          price: "From $50",
        },
        {
          id: "media-integration",
          name: "Photography and Media Integration",
          description:
            "Sourcing, preparing, and placing professional images or short video clips across your site.",
          price: "From $150",
        },
        
      ],
    },

    /* ---------- CARE PLANS ---------- */

    care: {
      title: "Monthly Care Plans",
      subtitle:
        "Every Talos site runs on a care plan. Each plan includes hosting, monitoring, and a monthly allowance of content edits.",
      note:
        "Hosting is included in all care plans. There is no separate hosting bill.",
      plans: [
        {
          id: "care-basic",
          name: "Care Basic",
          price: "$15",
          period: "per month",
          popular: false,
          description:
            "For static sites that rarely change. Keeps everything online, secure, and backed up.",
          features: [
            "Managed hosting included",
            "Monthly uptime and security check",
            "1 content edit per month",
            "Dependency and security patching",
            "Email support",
          ],
          ctaText: "Choose Basic",
        },
        {
          id: "care-standard",
          name: "Care Standard",
          price: "$30",
          period: "per month",
          popular: true,
          description:
            "For businesses that update their site regularly with new prices, photos, or services.",
          features: [
            "Everything in Care Basic",
            "4 content edits per month",
            "Monthly performance report",
            "Priority email support",
            "Quarterly SEO check",
          ],
          ctaText: "Choose Standard",
        },
        {
          id: "care-pro",
          name: "Care Pro",
          price: "$80",
          period: "per month",
          popular: false,
          description:
            "For businesses that rely on their site every day. Highest edit allowance and fastest response times.",
          features: [
            "Everything in Care Standard",
            "Unlimited minor edits",
            "Priority same day support",
            "Monthly SEO report and keyword tracking",
            "Advanced performance tuning",
            "Quarterly accessibility review",
          ],
          ctaText: "Choose Pro",
        },
      ],
    },
  },

  /* ============================================================
     GALLERY PAGE
     ============================================================ */

  Gallery: {
    title: "Our Work",
    items: [
      { title: "Business Website", src: "https://placehold.co/600x800?text=Business+Website", alt: "Business website" },
      { title: "Property Listings", src: "https://placehold.co/600x800?text=Property+Listings", alt: "Property listings site" },
      { title: "Landing Page", src: "https://placehold.co/600x800?text=Landing+Page", alt: "Landing page" },
      { title: "SEO Campaign", src: "https://placehold.co/600x800?text=SEO+Campaign", alt: "SEO campaign" },
      { title: "Payment Integration", src: "https://placehold.co/600x800?text=Payment+Integration", alt: "Payment integration" },
      { title: "Mobile Experience", src: "https://placehold.co/600x800?text=Mobile+Experience", alt: "Mobile experience" },
    ],
  },

  /* ============================================================
     FOOTER
     ============================================================ */

  footerData: {
    companyName: "Talos Industries",
    description: "Modern websites and ongoing care for growing businesses.",
    sections: [
      {
        title: "Services",
        links: [
          { label: "Web Development", href: "/services#digital-presence" },
          { label: "SEO Optimisation", href: "/services#seo-section" },
          { label: "Maintenance", href: "/services#maintenance-section" },
          { label: "Payment Gateway", href: "/services#payment-section" },
          { label: "Accessibility", href: "/services#accessibility-section" },
          { label: "Property and Listings Websites", href: "/services#listings-section" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Packages", href: "/pricing" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "Instagram", href: "https://instagram.com/talos" },
          { label: "LinkedIn", href: "https://linkedin.com/company/talos" },
          { label: "Facebook", href: "https://facebook.com/talos" },
          { label: "X", href: "https://x.com/talos" },
        ],
      },
    ],
  },

  /* ============================================================
     CAREERS
     ============================================================ */

  Careers: {
    jobOpenings: [
      {
        title: "Client Acquisition",
        description:
          "Reach out to prospective clients, run introductory calls, and help new businesses get matched with the right package.",
        workType: "Temporary",
        payment: "Commission based",
      },
    ],
  },
};