export interface IndustryItem {
    title: string;
    description: string;
    image?: string;
}

export interface Industry {
    title: string;
    description: string;

    // NEW DYNAMIC FIELDS
    category: string;
    heroHeadlineStart: string;
    heroHeadlineGradient: string;
    content: string;
    strategyTitleStart: string;
    strategyTitleHighlight: string;
    strategyList: string[];

    items: IndustryItem[];
}

export const industries: Industry[] = [

    //Automitive
    {
        title: "Automotive",
        category: "Mobility & Transportation",
        description:
            "Technology solutions tailored for automotive businesses, supporting digital sales, fleet operations, and service management.",

        heroHeadlineStart: "Driving Digital Transformation",
        heroHeadlineGradient: "in the Automotive Industry",

        content:
            "We help automotive businesses modernize operations through digital platforms that support fleet management, vehicle booking, and customer engagement. Our solutions improve visibility, efficiency, and scalability across automotive ecosystems.",

        strategyTitleStart: "Our Automotive",
        strategyTitleHighlight: "Technology Strategy",

        strategyList: [
            "Digitize fleet and vehicle operations",
            "Enable real-time tracking and monitoring",
            "Improve customer engagement platforms",
            "Build scalable automotive systems",
        ],

        items: [
            {
                title: "Fleet Management Systems",
                description:
                    "Tools for tracking, managing, and optimizing vehicle fleets in real time.",
                image: "",
            },
            {
                title: "Vehicle Booking Platforms",
                description:
                    "Online platforms that allow customers to book vehicles and services seamlessly.",
                image: "",
            },
            {
                title: "Automotive Websites",
                description:
                    "High-performance websites designed for dealerships and automotive brands.",
                image: "",
            },
            {
                title: "Customer Management Tools",
                description:
                    "CRM solutions that help automotive businesses manage customer relationships.",
                image: "",
            },
            {
                title: "Dealer Management Systems",
                description: "Centralized platforms for managing sales, inventory, and after-sales services.",
                image: "",
            },
            {
                title: "Telematics Integration",
                description: "Vehicle data integration for diagnostics, performance tracking, and insights.",
                image: "",
            },

        ],
    },
    //Banking & Finance",
    {
        title: "Banking & Finance",
        category: "Financial Services",
        description:
            "Secure and scalable digital platforms for financial institutions, improving customer experience and operational efficiency.",

        heroHeadlineStart: "Powering Secure",
        heroHeadlineGradient: "Digital Banking Solutions",

        content:
            "We build secure, compliant, and scalable digital platforms for banks and financial institutions. From core banking systems to customer portals and payments, our solutions enhance efficiency and trust.",

        strategyTitleStart: "Our Banking & Finance",
        strategyTitleHighlight: "Digital Approach",

        strategyList: [
            "Develop secure core banking platforms",
            "Enable digital payments and transactions",
            "Improve customer self-service experiences",
            "Ensure regulatory compliance and data protection",
        ],

        items: [
            {
                title: "Core Banking Systems",
                description:
                    "Robust backend systems that power essential banking operations.",
                image: "",
            },
            {
                title: "Digital Payment Solutions",
                description:
                    "Secure payment platforms enabling fast and reliable transactions.",
                image: "",
            },
            {
                title: "Customer Portals",
                description:
                    "Self-service portals for customers to manage accounts and transactions.",
                image: "",
            },
            {
                title: "Security & Compliance",
                description:
                    "Solutions ensuring data protection and regulatory compliance.",
                image: "",
            },
            {
                title: "Mobile Banking Apps",
                description: "Secure mobile applications for banking services and customer access.",
                image: "",
            },
            {
                title: "Transaction Monitoring",
                description: "Real-time monitoring systems to detect suspicious financial activities.",
                image: "",
            },

        ],
    },
    //"Shared Mobility"
    {
        title: "Shared Mobility",
        category: "Smart Mobility",
        description:
            "Smart mobility platforms designed to power ride-sharing, bike-sharing, and vehicle pooling services.",

        heroHeadlineStart: "Building the Future of",
        heroHeadlineGradient: "Shared Mobility",

        content:
            "We create shared mobility platforms that connect users, drivers, and vehicles in real time. Our systems enable tracking, analytics, and seamless user experiences for modern mobility services.",

        strategyTitleStart: "Our Shared Mobility",
        strategyTitleHighlight: "Platform Strategy",

        strategyList: [
            "Develop real-time ride-hailing platforms",
            "Enable GPS tracking and monitoring",
            "Build reliable user and driver apps",
            "Leverage analytics for smarter operations",
        ],

        items: [
            {
                title: "Ride-hailing Platforms",
                description:
                    "Apps and systems that connect riders with drivers in real time.",
                image: "",
            },
            {
                title: "GPS Tracking",
                description:
                    "Live vehicle tracking for safety, monitoring, and analytics.",
                image: "",
            },
            {
                title: "User & Driver Apps",
                description:
                    "Mobile applications built for both riders and drivers.",
                image: "",
            },
            {
                title: "Real-time Analytics",
                description:
                    "Dashboards providing insights into usage, performance, and demand.",
                image: "",
            },
            {
                title: "Dynamic Pricing Engines",
                description: "Pricing systems that adjust fares based on demand and availability.",
                image: "",
            },
            {
                title: "Fleet Optimization Tools",
                description: "Software to improve vehicle utilization and reduce operational costs.",
                image: "",
            },

        ],
    },
    //Logistics
    {
        title: "Logistics",
        category: "Supply Chain & Logistics",
        description:
            "End-to-end logistics and supply chain software that enhances tracking, coordination, and delivery efficiency.",

        heroHeadlineStart: "Optimizing",
        heroHeadlineGradient: "Logistics Operations",

        content:
            "We build logistics platforms that provide real-time shipment visibility, dispatch coordination, and route optimization. Our solutions help logistics companies reduce costs and improve delivery efficiency.",

        strategyTitleStart: "Our Logistics",
        strategyTitleHighlight: "Optimization Strategy",

        strategyList: [
            "Enable real-time shipment tracking",
            "Improve dispatch and delivery coordination",
            "Optimize routes and delivery time",
            "Enhance supply chain visibility",
        ],

        items: [
            {
                title: "Shipment Tracking",
                description:
                    "Real-time tracking systems for monitoring shipments across the supply chain.",
                image: "",
            },
            {
                title: "Dispatch Systems",
                description:
                    "Tools for managing dispatch operations and coordinating deliveries.",
                image: "",
            },
            {
                title: "Warehouse Management",
                description:
                    "Software solutions for inventory control and warehouse operations.",
                image: "",
            },
            {
                title: "Route Optimization",
                description:
                    "Smart routing solutions to reduce delivery time and operational costs.",
                image: "",
            },
            {
                title: "Proof of Delivery Systems",
                description: "Digital confirmation of deliveries with signatures and timestamps.",
                image: "",
            },
            {
                title: "Logistics Analytics",
                description: "Data insights into delivery performance, delays, and cost efficiency.",
                image: "",
            },

        ],
    },
    //Electric Mobility
    {
        title: "Electric Mobility",
        category: "Sustainable Technology",
        description:
            "Innovative solutions for electric vehicle ecosystems, from charging management to mobility analytics.",

        heroHeadlineStart: "Accelerating",
        heroHeadlineGradient: "Electric Mobility",

        content:
            "We support electric mobility ecosystems with smart charging platforms, energy monitoring tools, and analytics dashboards designed for efficiency and sustainability.",

        strategyTitleStart: "Our Electric Mobility",
        strategyTitleHighlight: "Innovation Framework",

        strategyList: [
            "Develop EV charging management systems",
            "Monitor and optimize energy usage",
            "Provide mobility analytics dashboards",
            "Integrate IoT-powered EV solutions",
        ],

        items: [
            {
                title: "EV Charging Platforms",
                description:
                    "Systems for managing and monitoring electric vehicle charging stations.",
                image: "",
            },
            {
                title: "Energy Monitoring",
                description:
                    "Tools for tracking energy usage and optimizing power consumption.",
                image: "",
            },
            {
                title: "Mobility Dashboards",
                description:
                    "Analytics dashboards providing insights into EV usage and performance.",
                image: "",
            },
            {
                title: "IoT Integration",
                description:
                    "Integration of IoT devices for smart electric mobility solutions.",
                image: "",
            },
            {
                title: "Charging Station Mapping",
                description: "Location-based discovery of available EV charging stations.",
                image: "",
            },
            {
                title: "EV Fleet Management",
                description: "Monitoring and managing electric vehicle fleets efficiently.",
                image: "",
            },

        ],
    },
    //E-commerce
    {
        title: "E-commerce",
        category: "Digital Commerce",
        description:
            "Robust e-commerce solutions that enable online sales, inventory management, and seamless customer journeys.",

        heroHeadlineStart: "Scaling",
        heroHeadlineGradient: "E-commerce Experiences",

        content:
            "We build high-performance e-commerce platforms optimized for conversions, scalability, and operational efficiency across the entire online shopping journey.",

        strategyTitleStart: "Our E-commerce",
        strategyTitleHighlight: "Growth Strategy",

        strategyList: [
            "Build scalable online stores",
            "Integrate secure payment gateways",
            "Streamline order and inventory management",
            "Optimize customer shopping experiences",
        ],

        items: [
            {
                title: "Online Stores",
                description:
                    "Custom-built online stores optimized for conversions and scalability.",
                image: "",
            },
            {
                title: "Payment Gateways",
                description:
                    "Secure payment integrations supporting multiple payment methods.",
                image: "",
            },
            {
                title: "Order Management",
                description:
                    "Systems for managing orders, fulfillment, and customer communication.",
                image: "",
            },
            {
                title: "Inventory Systems",
                description:
                    "Inventory tracking solutions to prevent stock shortages and overselling.",
                image: "",
            },
            {
                title: "Customer Analytics",
                description: "Insights into customer behavior, preferences, and purchase patterns.",
                image: "",
            },
            {
                title: "Marketing Automation",
                description: "Automated email, promo, and remarketing tools to drive sales.",
                image: "",
            },

        ],
    },
    //"SaaS
    {
        title: "SaaS",
        category: "Cloud Software",
        description:
            "Cloud-based software platforms built for scalability, performance, and recurring revenue.",

        heroHeadlineStart: "Building Scalable",
        heroHeadlineGradient: "SaaS Platforms",

        content:
            "We design and develop SaaS platforms with multi-tenant architectures, subscription billing, and cloud infrastructure built for long-term growth.",

        strategyTitleStart: "Our SaaS",
        strategyTitleHighlight: "Product Strategy",

        strategyList: [
            "Design multi-tenant SaaS architectures",
            "Implement subscription billing systems",
            "Build intuitive admin dashboards",
            "Ensure performance and reliability",
        ],

        items: [
            {
                title: "Multi-tenant Systems",
                description:
                    "SaaS architectures that support multiple clients on a single platform.",
                image: "",
            },
            {
                title: "Subscription Billing",
                description:
                    "Automated billing systems for recurring payments and plans.",
                image: "",
            },
            {
                title: "Admin Dashboards",
                description:
                    "Centralized dashboards for managing users, data, and operations.",
                image: "",
            },
            {
                title: "Cloud Infrastructure",
                description:
                    "Scalable cloud setups ensuring reliability and performance.",
                image: "",
            },
            {
                title: "User Onboarding Systems",
                description: "Guided onboarding flows to improve activation and retention.",
                image: "",
            },
            {
                title: "Usage Analytics",
                description: "Tracking feature usage and user engagement across the platform.",
                image: "",
            },

        ],
    },
    //"FinTech"
    {
        title: "FinTech",
        category: "Financial Technology",
        description:
            "Innovative financial technology solutions that power digital payments, wallets, and financial automation.",

        heroHeadlineStart: "Innovating the Future of",
        heroHeadlineGradient: "Financial Technology",

        content:
            "We help FinTech companies launch secure, scalable, and user-friendly digital financial products. From payment platforms to APIs and fraud prevention systems, we build solutions that move money faster and safer.",

        strategyTitleStart: "Our FinTech",
        strategyTitleHighlight: "Innovation Strategy",

        strategyList: [
            "Build secure and scalable payment platforms",
            "Develop digital wallets and financial APIs",
            "Automate financial operations and workflows",
            "Implement fraud detection and risk controls",
        ],

        items: [
            {
                title: "Payment Platforms",
                description:
                    "Digital platforms for processing secure online payments.",
                image: "",
            },
            {
                title: "Digital Wallets",
                description:
                    "Wallet applications for storing and transferring funds securely.",
                image: "",
            },
            {
                title: "Financial APIs",
                description:
                    "APIs that enable integration with financial services and systems.",
                image: "",
            },
            {
                title: "Fraud Detection",
                description:
                    "Tools that detect and prevent fraudulent financial activities.",
                image: "",
            },
            {
                title: "KYC & Identity Verification",
                description: "Customer identity verification systems for compliance and security.",
                image: "",
            },
            {
                title: "Transaction Analytics",
                description: "Insights into transaction trends, volumes, and user behavior.",
                image: "",
            },

        ],
    },
    //Healthcare
    {
        title: "Healthcare",
        category: "Health Technology",
        description:
            "Digital healthcare systems focused on patient care, data security, and operational efficiency.",

        heroHeadlineStart: "Transforming",
        heroHeadlineGradient: "Digital Healthcare",

        content:
            "We develop healthcare software that improves patient experiences, streamlines clinical workflows, and ensures secure handling of sensitive medical data. Our solutions support providers, clinics, and health platforms.",

        strategyTitleStart: "Our Healthcare",
        strategyTitleHighlight: "Technology Approach",

        strategyList: [
            "Digitize patient records and workflows",
            "Enable online appointment booking",
            "Ensure secure health data management",
            "Improve operational efficiency for providers",
        ],

        items: [
            {
                title: "Patient Management Systems",
                description:
                    "Systems for managing patient records and clinical workflows.",
                image: "",
            },
            {
                title: "Appointment Booking",
                description:
                    "Online booking solutions for clinics and healthcare providers.",
                image: "",
            },
            {
                title: "Health Records",
                description:
                    "Secure electronic health record (EHR) systems.",
                image: "",
            },
            {
                title: "Secure Data Handling",
                description:
                    "Solutions ensuring privacy and protection of sensitive medical data.",
                image: "",
            },
            {
                title: "Telemedicine Platforms",
                description: "Virtual consultation systems for remote patient care.",
                image: "",
            },
            {
                title: "Medical Billing Systems",
                description: "Digital billing and insurance claim management tools.",
                image: "",
            },

        ],
    },
    //On-Demand
    {
        title: "On-Demand",
        category: "Real-Time Services",
        description:
            "On-demand platforms that connect users with services in real time, enabling instant booking and fulfillment.",

        heroHeadlineStart: "Powering",
        heroHeadlineGradient: "On-Demand Experiences",

        content:
            "We build real-time on-demand platforms that match users with services instantly. Our solutions focus on speed, reliability, and seamless user journeys across web and mobile.",

        strategyTitleStart: "Our On-Demand",
        strategyTitleHighlight: "Platform Strategy",

        strategyList: [
            "Develop real-time service booking platforms",
            "Implement instant user-to-provider matching",
            "Integrate seamless payment systems",
            "Enable notifications and real-time updates",
        ],

        items: [
            {
                title: "Service Booking Apps",
                description:
                    "Applications that allow users to book services instantly.",
                image: "",
            },
            {
                title: "Real-time Matching",
                description:
                    "Systems that match users with service providers in real time.",
                image: "",
            },
            {
                title: "Payment Integration",
                description:
                    "Integrated payment systems for seamless transactions.",
                image: "",
            },
            {
                title: "Notifications & Alerts",
                description:
                    "Automated alerts and notifications for users and providers.",
                image: "",
            },
            {
                title: "Provider Management",
                description: "Tools for onboarding, verifying, and managing service providers.",
                image: "",
            },
            {
                title: "Service Rating Systems",
                description: "Ratings and reviews to ensure service quality and trust.",
                image: "",
            },

        ],
    },
    //Real Estate
    {
        title: "Real Estate",
        category: "Property Technology",
        description:
            "Property technology solutions that simplify listings, bookings, and property management processes.",

        heroHeadlineStart: "Modernizing",
        heroHeadlineGradient: "Real Estate Platforms",

        content:
            "We build digital property platforms that simplify listings, bookings, and customer management. Our solutions help real estate businesses operate efficiently and close deals faster.",

        strategyTitleStart: "Our Real Estate",
        strategyTitleHighlight: "Digital Strategy",

        strategyList: [
            "Build scalable property listing platforms",
            "Enable booking and scheduling systems",
            "Implement CRM solutions for agents",
            "Integrate secure payment systems",
        ],

        items: [
            {
                title: "Property Listing Platforms",
                description:
                    "Platforms for showcasing and managing property listings.",
                image: "",
            },
            {
                title: "Booking & Scheduling",
                description:
                    "Scheduling systems for property viewings and reservations.",
                image: "",
            },
            {
                title: "CRM Systems",
                description:
                    "Customer relationship management tools for real estate businesses.",
                image: "",
            },
            {
                title: "Payment Integration",
                description:
                    "Integrated payment solutions for property transactions.",
                image: "",
            },
            {
                title: "Property Management Systems",
                description: "Tools for managing tenants, leases, and maintenance tasks.",
                image: "",
            },
            {
                title: "Virtual Property Tours",
                description: "Digital walkthroughs that allow remote property viewing.",
                image: "",
            },

        ],
    },













];
