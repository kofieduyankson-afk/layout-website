export interface ServiceItem {
    title: string;
    description: string;
    image?: string;
}

export interface Service {
    title: string;
    description: string;
    content: string;

    // NEW DYNAMIC FIELDS
    category: string;
    heroHeadlineStart: string;
    heroHeadlineGradient: string;
    strategyTitleStart: string;
    strategyTitleHighlight: string;
    strategyList: string[];

    items: ServiceItem[];
}


export const services: Service[] = [
    {
        title: "IT Solutions",
        category: "Professional Services",
        heroHeadlineStart: "IT Solutions for the",
        heroHeadlineGradient: "Modern Enterprise",
        description: "End-to-end IT solutions designed to streamline operations, improve efficiency, and support business growth across digital platforms.",

        strategyTitleStart: "Strategic Implementation,",
        strategyTitleHighlight: "Not Just Fixes.",
        content: "We design the digital nervous system of your company. By combining industry insights with cutting-edge technology, we deliver solutions that drive operational excellence, stability, and long-term growth.",
        strategyList: [
            "Scalability: Systems that grow as you grow.",
            "Security: Enterprise-grade protection for your data.",
            "Integration: Seamless communication between your tools."
        ],

        items: [
            {
                title: "System Integration",
                description: "Connecting software, tools, and platforms to work seamlessly together.",
                image: "",
            },
            {
                title: "Business Automation",
                description: "Automating repetitive processes to improve efficiency and reduce costs.",
                image: "",
            },
            {
                title: "IT Consulting",
                description: "Expert guidance on technology decisions, architecture, and strategy.",
                image: "",
            },
            {
                title: "Infrastructure Support",
                description: "Reliable setup and maintenance of IT infrastructure and systems.",
                image: "",
            },
        ],
    },
    {
        title: "Web Development",
        category: "Digital Experience",
        heroHeadlineStart: "Web Development that",
        heroHeadlineGradient: "Converts Users",
        description: "Custom, fast, and SEO-friendly websites built to represent your brand and convert visitors into customers.",

        strategyTitleStart: "Performance Driven,",
        strategyTitleHighlight: "Not Just Aesthetics.",
        content: "We build high-performing websites that don’t just look good, but work hard for your business. We focus on Core Web Vitals, accessibility, and user journeys that drive actual revenue.",
        strategyList: [
            "SEO Optimized: Built to be found by your customers.",
            "Blazing Fast: Speed optimizations for higher engagement.",
            "Responsive: Flawless experience on every device."
        ],

        items: [
            {
                title: "Corporate Websites",
                description: "Professional websites designed to showcase your business and services.",
                image: "",
            },
            {
                title: "Next.js & React",
                description: "Modern web applications built with performant frontend technologies.",
                image: "",
            },
            {
                title: "E-commerce Platforms",
                description: "Online stores with secure payments and inventory management.",
                image: "",
            },
            {
                title: "Performance Optimization",
                description: "Speed and performance improvements for better user experience.",
                image: "",
            },
        ],
    },
    {
        title: "App Development",
        category: "Mobile Solutions",
        heroHeadlineStart: "Apps Designed for",
        heroHeadlineGradient: "Growth & Retention",
        description: "High-quality mobile applications designed for Android and iOS, focused on usability, performance, and scalability.",

        strategyTitleStart: "Seamless Experiences,",
        strategyTitleHighlight: "Native Performance.",
        content: "We create reliable mobile applications that put your business directly in your customers’ hands. Our development process ensures your app is intuitive, crash-free, and ready to scale to millions of users.",
        strategyList: [
            "User Centric: Interfaces designed for human fingers.",
            "Cross-Platform: Efficient code for iOS and Android.",
            "Offline Mode: Functionality even without internet."
        ],

        items: [
            {
                title: "Android Apps",
                description: "Native and hybrid Android applications tailored to business needs.",
                image: "",
            },
            {
                title: "iOS Apps",
                description: "High-performance iOS applications with polished user experiences.",
                image: "",
            },
            {
                title: "Cross-platform Solutions",
                description: "Apps that run on multiple platforms using a shared codebase.",
                image: "",
            },
            {
                title: "App Maintenance",
                description: "Ongoing updates, monitoring, and improvements after launch.",
                image: "",
            },
        ],
    },
    {
        title: "Software Development",
        category: "Custom Engineering",
        heroHeadlineStart: "Software Built for",
        heroHeadlineGradient: "Your Workflow",
        description: "Tailor-made software solutions built to solve specific business challenges and support long-term scalability.",

        strategyTitleStart: "Solving Complexity,",
        strategyTitleHighlight: "Simplifying Work.",
        content: "Off-the-shelf software rarely fits perfectly. We engineer custom software that aligns exactly with your unique workflows, helping you eliminate inefficiencies and gain a competitive edge.",
        strategyList: [
            "Tailored Logic: Code that matches your business rules.",
            "Data Security: Architecture designed for privacy.",
            "API First: Ready to connect with the world."
        ],

        items: [
            {
                title: "Custom Business Software",
                description: "Software built specifically to match your internal workflows.",
                image: "",
            },
            {
                title: "Web Applications",
                description: "Scalable web-based systems for internal or customer-facing use.",
                image: "",
            },
            {
                title: "API Development",
                description: "Secure and scalable APIs for system integration and automation.",
                image: "",
            },
            {
                title: "System Automation",
                description: "Automated processes to reduce manual effort and errors.",
                image: "",
            },
        ],
    },
    {
        title: "Web Design",
        category: "Creative Studio",
        heroHeadlineStart: "Designs that Build",
        heroHeadlineGradient: "Brand Trust",
        description: "Modern and responsive web designs that create strong first impressions and deliver great user experiences.",

        strategyTitleStart: "Visual Storytelling,",
        strategyTitleHighlight: "User Focused.",
        content: "We translate your brand’s story into compelling visuals that capture attention. Good design is about more than colors; it's about guiding the user's eye to the information that matters most.",
        strategyList: [
            "Consistency: Unified visual language across pages.",
            "Accessibility: Designs usable by everyone.",
            "Engagement: Interactions that delight users."
        ],

        items: [
            {
                title: "UI / UX Design",
                description: "User-centered designs focused on usability and engagement.",
                image: "",
            },
            {
                title: "Responsive Layouts",
                description: "Designs optimized for mobile, tablet, and desktop devices.",
                image: "",
            },
            {
                title: "Brand-focused Design",
                description: "Visual designs aligned with your brand identity.",
                image: "",
            },
            {
                title: "Website Redesign",
                description: "Refreshing existing websites for a modern look and feel.",
                image: "",
            },
        ],
    },
    {
        title: "WhatsApp Business API",
        category: "Communication",
        heroHeadlineStart: "Connect at Scale",
        heroHeadlineGradient: "Via WhatsApp",
        description: "Official WhatsApp Business API integration for customer support, notifications, and automated messaging at scale.",

        strategyTitleStart: "Instant Connection,",
        strategyTitleHighlight: "Automated Support.",
        content: "Meet your customers where they already are. We help businesses communicate at scale using WhatsApp—automating conversations, improving response times, and delivering better customer experiences.",
        strategyList: [
            "High Open Rates: Messages that actually get read.",
            "Automation: Chatbots that handle FAQs instantly.",
            "Verification: Official Green Tick support."
        ],

        items: [
            {
                title: "Chatbot Development",
                description: "Automated chat experiences for customer engagement and support.",
                image: "",
            },
            {
                title: "Automated Notifications",
                description: "Transactional and alert messages sent at the right time.",
                image: "",
            },
            {
                title: "Customer Support Systems",
                description: "Centralized systems for managing WhatsApp conversations.",
                image: "",
            },
            {
                title: "API Integration",
                description: "Secure integration of WhatsApp with existing systems.",
                image: "",
            },
        ],
    },
    {
        title: "IT Support & Maintenance",
        category: "Reliability",
        heroHeadlineStart: "Zero Downtime",
        heroHeadlineGradient: "Maximum Output",
        description: "Reliable technical support and system maintenance to keep your business running smoothly with minimal downtime.",

        strategyTitleStart: "Proactive Care,",
        strategyTitleHighlight: "Rapid Response.",
        content: "We keep your systems stable, secure, and running smoothly. Our goal is to catch issues before they affect your business, allowing your team to focus on what matters most while we handle the technical side.",
        strategyList: [
            "24/7 Monitoring: We watch so you don't have to.",
            "Security Patches: Keeping bad actors out.",
            "Data Backups: Ensuring you never lose work."
        ],

        items: [
            {
                title: "System Monitoring",
                description: "Proactive monitoring to detect and resolve issues early.",
                image: "",
            },
            {
                title: "Bug Fixes",
                description: "Quick identification and resolution of system issues.",
                image: "",
            },
            {
                title: "Software Updates",
                description: "Keeping systems secure and up to date.",
                image: "",
            },
            {
                title: "Technical Support",
                description: "Ongoing assistance for technical challenges and questions.",
                image: "",
            },
        ],
    },
    {
        title: "Graphic Design",
        category: "Visual Identity",
        heroHeadlineStart: "Visuals that Make",
        heroHeadlineGradient: "An Impact",
        description: "Creative graphic design solutions that visually communicate your brand message across digital and print media.",

        strategyTitleStart: "Artistic Excellence,",
        strategyTitleHighlight: "Strategic Purpose.",
        content: "We translate your brand’s story into compelling visuals that capture attention, communicate value, and strengthen brand recognition across every medium your customers touch.",
        strategyList: [
            "Memorable: Designs that stick in the mind.",
            "Versatile: Assets ready for print and web.",
            "Cohesive: A look that matches your voice."
        ],

        items: [
            {
                title: "Brand Identity",
                description: "Logos, colors, and visual systems that define your brand.",
                image: "",
            },
            {
                title: "Marketing Materials",
                description: "Design assets for campaigns, presentations, and promotions.",
                image: "",
            },
            {
                title: "Social Media Graphics",
                description: "Eye-catching visuals for social media platforms.",
                image: "",
            },
            {
                title: "Print Design",
                description: "High-quality designs for brochures, flyers, and posters.",
                image: "",
            },
        ],
    },
    {
        title: "SaaS",
        category: "Product Development",
        heroHeadlineStart: "Scalable Platforms",
        heroHeadlineGradient: "For the Cloud",
        description: "Design and development of scalable Software-as-a-Service platforms tailored to your business model and users.",

        strategyTitleStart: "Built to Scale,",
        strategyTitleHighlight: "Ready to Monetize.",
        content: "We design and build SaaS platforms that are secure, maintainable, and ready to grow. From multi-tenant architectures to subscription billing, we handle the complexities of cloud software.",
        strategyList: [
            "Multi-Tenancy: Secure data isolation for users.",
            "Subscription Logic: Automated recurring billing.",
            "Cloud Native: Infinite scaling capabilities."
        ],

        items: [
            {
                title: "SaaS Architecture",
                description: "Scalable system architecture for multi-tenant platforms.",
                image: "",
            },
            {
                title: "Subscription Systems",
                description: "Billing and subscription management solutions.",
                image: "",
            },
            {
                title: "Admin Dashboards",
                description: "Powerful dashboards for managing users and data.",
                image: "",
            },
            {
                title: "Cloud Deployment",
                description: "Secure deployment and scaling on cloud infrastructure.",
                image: "",
            },
        ],
    },
    {
        title: "Operations & Booking Platform",
        category: "Business Logic",
        heroHeadlineStart: "Streamline Your",
        heroHeadlineGradient: "Daily Operations",
        description: "Custom platforms that manage bookings, operations, payments, and reporting to simplify business workflows.",

        strategyTitleStart: "Centralized Control,",
        strategyTitleHighlight: "Real-Time Data.",
        content: "We build operational platforms that centralize bookings, payments, and reporting. Eliminate spreadsheets and manual errors by moving your entire operation into a custom-built digital command center.",
        strategyList: [
            "Efficiency: Reduce admin time by 50%.",
            "Accuracy: Automated calculations and logs.",
            "Insight: Reports that help you decide faster."
        ],

        items: [
            {
                title: "Ticketing Systems",
                description: "Digital ticketing solutions for events and transport.",
                image: "",
            },
            {
                title: "Booking Management",
                description: "Centralized booking and scheduling systems.",
                image: "",
            },
            {
                title: "Payment Integration",
                description: "Secure online payment processing and reconciliation.",
                image: "",
            },
            {
                title: "Admin & Reporting Tools",
                description: "Dashboards and reports for operational insights.",
                image: "",
            },
        ],
    },
];