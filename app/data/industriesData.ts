// industriesData.ts
export interface Industry {
    id: number;
    title: string;
    description: string;
    emoji?: string;
    iconGradient?: string;
    image?: string;
    link?: string;
    icon?: string; // 
}

export const industries: Industry[] = [
    {
        id: 1,
        title: "Automotive",
        description:
            "Digital solutions for vehicle sales, fleet management, and automotive service platforms.",
        emoji: "🚗",
        iconGradient: "bg-gradient-to-br from-red-500 to-pink-500",
        image: "/auto.jpg",
        link: "/industries/Automotive",
        icon: "/icons8-car.gif",
    },
    {
        id: 2,
        title: "Banking & Finance",
        description:
            "Secure, scalable systems for financial operations, customer engagement, and compliance.",
        emoji: "🏦",
        iconGradient: "bg-gradient-to-br from-blue-500 to-indigo-500",
        image: "/finance.jpg",
        link: "/industries/Banking&Finance",
        icon: "/icons8-money-box.gif",
    },
    {
        id: 3,
        title: "Shared Mobility",
        description:
            "Technology platforms for ride-sharing, vehicle tracking, and mobility management.",
        emoji: "🚌",
        iconGradient: "bg-gradient-to-br from-green-500 to-teal-500",
        image: "/shared.jpg",
        link: "/industries/Shared_Mobility",
        icon: "/icons8-bus.gif",
    },
    {
        id: 4,
        title: "Logistics",
        description:
            "End-to-end logistics systems including tracking, dispatch, and operations optimization.",
        emoji: "📦",
        iconGradient: "bg-gradient-to-br from-yellow-500 to-orange-500",
        image: "/logistics.jpg",
        link: "/industries/Logistics",
        icon: "/icons8-logistics.gif",
    },
    {
        id: 5,
        title: "Electric Mobility",
        description:
            "Smart solutions for EV platforms, charging systems, and mobility innovation.",
        emoji: "⚡",
        iconGradient: "bg-gradient-to-br from-emerald-500 to-lime-500",
        image: "/electric.jpg",
        link: "/industries/Electric_Mobility",
        icon: "/icons8-lightning-bolt.gif",
    },
    {
        id: 6,
        title: "E-commerce",
        description:
            "Online commerce platforms with payment integration, inventory, and order management.",
        emoji: "🛒",
        iconGradient: "bg-gradient-to-br from-purple-500 to-pink-500",
        image: "/e-commerce.jpg",
        link: "/industries/E-commerce",
        icon: "/icons8-cart.gif",
    },
    {
        id: 7,
        title: "SaaS",
        description:
            "Cloud-based software platforms built for scalability, performance, and growth.",
        emoji: "☁️",
        iconGradient: "bg-gradient-to-br from-blue-400 to-indigo-500",
        image: "/saas.jpg",
        link: "/industries/SaaS",
        icon: "/icons8-add-to-cloud.gif",
    },
    {
        id: 8,
        title: "On-Demand",
        description:
            "Real-time service platforms for booking, scheduling, and instant fulfillment.",
        emoji: "⏱️",
        iconGradient: "bg-gradient-to-br from-red-400 to-orange-500",
        image: "/demand.png",
        link: "/industries/On-Demand",
        icon: "/icons8-clock.gif",
    },
    {
        id: 9,
        title: "Healthcare",
        description:
            "Digital health systems for patient management, data security, and operational efficiency.",
        emoji: "💊",
        iconGradient: "bg-gradient-to-br from-teal-500 to-cyan-500",
        image: "/healthcare.jpg",
        link: "/industries/Healthcare",
        icon: "/icons8-pill.gif",
    },
    {
        id: 10,
        title: "FinTech",
        description:
            "Innovative financial technology solutions including payments, wallets, and automation.",
        emoji: "💳",
        iconGradient: "bg-gradient-to-br from-blue-600 to-indigo-700",
        image: "/fintech.png",
        link: "/industries/FinTech",
        icon: "/icons8-debit-card.gif",
    },
    {
        id: 11,
        title: "Real Estate",
        description:
            "Property management, listing platforms, and booking solutions for real estate businesses.",
        emoji: "🏠",
        iconGradient: "bg-gradient-to-br from-amber-500 to-orange-500",
        image: "/estate.jpg",
        link: "/industries/Real_Estate",
        icon: "/real-estate.gif",
    },
];
