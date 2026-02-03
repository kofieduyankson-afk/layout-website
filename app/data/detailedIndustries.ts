export interface IndustryItem {
    title: string;
    description: string;
    image?: string;
}

export interface Industry {
    title: string;
    description: string;
    items: IndustryItem[];
}
export const industries: Industry[] = [
    {
        title: "Automotive",
        description:
            "Technology solutions tailored for automotive businesses, supporting digital sales, fleet operations, and service management.",
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
        ],
    },
    {
        title: "Banking & Finance",
        description:
            "Secure and scalable digital platforms for financial institutions, improving customer experience and operational efficiency.",
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
        ],
    },
    {
        title: "Shared Mobility",
        description:
            "Smart mobility platforms designed to power ride-sharing, bike-sharing, and vehicle pooling services.",
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
        ],
    },
    {
        title: "Logistics",
        description:
            "End-to-end logistics and supply chain software that enhances tracking, coordination, and delivery efficiency.",
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
        ],
    },
    {
        title: "Electric Mobility",
        description:
            "Innovative solutions for electric vehicle ecosystems, from charging management to mobility analytics.",
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
        ],
    },
    {
        title: "E-commerce",
        description:
            "Robust e-commerce solutions that enable online sales, inventory management, and seamless customer journeys.",
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
        ],
    },
    {
        title: "SaaS",
        description:
            "Cloud-based software platforms built for scalability, performance, and recurring revenue.",
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
        ],
    },
    {
        title: "On-Demand",
        description:
            "On-demand platforms that connect users with services in real time, enabling instant booking and fulfillment.",
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
        ],
    },
    {
        title: "Healthcare",
        description:
            "Digital healthcare systems focused on patient care, data security, and operational efficiency.",
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
        ],
    },
    {
        title: "FinTech",
        description:
            "Innovative financial technology solutions that power digital payments, wallets, and financial automation.",
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
        ],
    },
    {
        title: "Real Estate",
        description:
            "Property technology solutions that simplify listings, bookings, and property management processes.",
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
        ],
    },



];
