export interface ServiceItem {
    title: string;
    description: string;
    image?: string;
}

export interface Service {
    title: string;
    description: string;
    items: ServiceItem[];
}


export const services: Service[] = [
    {
        title: "IT Solutions",
        description:
            "End-to-end IT solutions designed to streamline operations, improve efficiency, and support business growth across digital platforms.",
        items: [
            {
                title: "System Integration",
                description:
                    "Connecting software, tools, and platforms to work seamlessly together.",
                image: "",
            },
            {
                title: "Business Automation",
                description:
                    "Automating repetitive processes to improve efficiency and reduce costs.",
                image: "",
            },
            {
                title: "IT Consulting",
                description:
                    "Expert guidance on technology decisions, architecture, and strategy.",
                image: "",
            },
            {
                title: "Infrastructure Support",
                description:
                    "Reliable setup and maintenance of IT infrastructure and systems.",
                image: "",
            },
        ],
    },
    {
        title: "Web Development",
        description:
            "Custom, fast, and SEO-friendly websites built to represent your brand and convert visitors into customers.",
        items: [
            {
                title: "Corporate Websites",
                description:
                    "Professional websites designed to showcase your business and services.",
                image: "",
            },
            {
                title: "Next.js & React",
                description:
                    "Modern web applications built with performant frontend technologies.",
                image: "",
            },
            {
                title: "E-commerce Platforms",
                description:
                    "Online stores with secure payments and inventory management.",
                image: "",
            },
            {
                title: "Performance Optimization",
                description:
                    "Speed and performance improvements for better user experience.",
                image: "",
            },
        ],
    },
    {
        title: "App Development",
        description:
            "High-quality mobile applications designed for Android and iOS, focused on usability, performance, and scalability.",
        items: [
            {
                title: "Android Apps",
                description:
                    "Native and hybrid Android applications tailored to business needs.",
                image: "",
            },
            {
                title: "iOS Apps",
                description:
                    "High-performance iOS applications with polished user experiences.",
                image: "",
            },
            {
                title: "Cross-platform Solutions",
                description:
                    "Apps that run on multiple platforms using a shared codebase.",
                image: "",
            },
            {
                title: "App Maintenance",
                description:
                    "Ongoing updates, monitoring, and improvements after launch.",
                image: "",
            },
        ],
    },
    {
        title: "Software Development",
        description:
            "Tailor-made software solutions built to solve specific business challenges and support long-term scalability.",
        items: [
            {
                title: "Custom Business Software",
                description:
                    "Software built specifically to match your internal workflows.",
                image: "",
            },
            {
                title: "Web Applications",
                description:
                    "Scalable web-based systems for internal or customer-facing use.",
                image: "",
            },
            {
                title: "API Development",
                description:
                    "Secure and scalable APIs for system integration and automation.",
                image: "",
            },
            {
                title: "System Automation",
                description:
                    "Automated processes to reduce manual effort and errors.",
                image: "",
            },
        ],
    },
    {
        title: "Web Design",
        description:
            "Modern and responsive web designs that create strong first impressions and deliver great user experiences.",
        items: [
            {
                title: "UI / UX Design",
                description:
                    "User-centered designs focused on usability and engagement.",
                image: "",
            },
            {
                title: "Responsive Layouts",
                description:
                    "Designs optimized for mobile, tablet, and desktop devices.",
                image: "",
            },
            {
                title: "Brand-focused Design",
                description:
                    "Visual designs aligned with your brand identity.",
                image: "",
            },
            {
                title: "Website Redesign",
                description:
                    "Refreshing existing websites for a modern look and feel.",
                image: "",
            },
        ],
    },
    {
        title: "WhatsApp Business API",
        description:
            "Official WhatsApp Business API integration for customer support, notifications, and automated messaging at scale.",
        items: [
            {
                title: "Chatbot Development",
                description:
                    "Automated chat experiences for customer engagement and support.",
                image: "",
            },
            {
                title: "Automated Notifications",
                description:
                    "Transactional and alert messages sent at the right time.",
                image: "",
            },
            {
                title: "Customer Support Systems",
                description:
                    "Centralized systems for managing WhatsApp conversations.",
                image: "",
            },
            {
                title: "API Integration",
                description:
                    "Secure integration of WhatsApp with existing systems.",
                image: "",
            },
        ],
    },
    {
        title: "IT Support & Maintenance",
        description:
            "Reliable technical support and system maintenance to keep your business running smoothly with minimal downtime.",
        items: [
            {
                title: "System Monitoring",
                description:
                    "Proactive monitoring to detect and resolve issues early.",
                image: "",
            },
            {
                title: "Bug Fixes",
                description:
                    "Quick identification and resolution of system issues.",
                image: "",
            },
            {
                title: "Software Updates",
                description:
                    "Keeping systems secure and up to date.",
                image: "",
            },
            {
                title: "Technical Support",
                description:
                    "Ongoing assistance for technical challenges and questions.",
                image: "",
            },
        ],
    },
    {
        title: "Graphic Design",
        description:
            "Creative graphic design solutions that visually communicate your brand message across digital and print media.",
        items: [
            {
                title: "Brand Identity",
                description:
                    "Logos, colors, and visual systems that define your brand.",
                image: "",
            },
            {
                title: "Marketing Materials",
                description:
                    "Design assets for campaigns, presentations, and promotions.",
                image: "",
            },
            {
                title: "Social Media Graphics",
                description:
                    "Eye-catching visuals for social media platforms.",
                image: "",
            },
            {
                title: "Print Design",
                description:
                    "High-quality designs for brochures, flyers, and posters.",
                image: "",
            },
        ],
    },
    {
        title: "SaaS",
        description:
            "Design and development of scalable Software-as-a-Service platforms tailored to your business model and users.",
        items: [
            {
                title: "SaaS Architecture",
                description:
                    "Scalable system architecture for multi-tenant platforms.",
                image: "",
            },
            {
                title: "Subscription Systems",
                description:
                    "Billing and subscription management solutions.",
                image: "",
            },
            {
                title: "Admin Dashboards",
                description:
                    "Powerful dashboards for managing users and data.",
                image: "",
            },
            {
                title: "Cloud Deployment",
                description:
                    "Secure deployment and scaling on cloud infrastructure.",
                image: "",
            },
        ],
    },
    {
        title: "Operations & Booking Platform",
        description:
            "Custom platforms that manage bookings, operations, payments, and reporting to simplify business workflows.",
        items: [
            {
                title: "Ticketing Systems",
                description:
                    "Digital ticketing solutions for events and transport.",
                image: "",
            },
            {
                title: "Booking Management",
                description:
                    "Centralized booking and scheduling systems.",
                image: "",
            },
            {
                title: "Payment Integration",
                description:
                    "Secure online payment processing and reconciliation.",
                image: "",
            },
            {
                title: "Admin & Reporting Tools",
                description:
                    "Dashboards and reports for operational insights.",
                image: "",
            },
        ],
    },
];

