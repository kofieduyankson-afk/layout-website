export interface NavIndustry {
    title: string;
    icon: string; // emoji for now, later SVG / image
    href: string;
    animated_icon?: string;
}

export const navIndustries: NavIndustry[] = [
    {
        title: "Automotive",
        icon: "🚗",
        href: "/industries/Automotive",
        animated_icon: "/icons8-car.gif",
    },
    {
        title: "Banking & Finance",
        icon: "💰",
        href: "/industries/Banking&Finance",
        animated_icon: "/icons8-money-box.gif",
    },
    {
        title: "E-commerce",
        icon: "🛒",
        href: "/industries/E-commerce",
        animated_icon: "/icons8-cart.gif",
    },
    {
        title: "Electric Mobility",
        icon: "🔌",
        href: "/industries/Electric_Mobility",
        animated_icon: "/icons8-lightning-bolt.gif",
    },
    {
        title: "FinTech",
        icon: "💳",
        href: "/industries/FinTech",
        animated_icon: "/icons8-debit-card.gif",
    },
    {
        title: "Healthcare",
        icon: "🏥",
        href: "/industries/Healthcare",
        animated_icon: "/icons8-pill.gif",
    },
    {
        title: "SaaS",
        icon: "☁️",
        href: "/industries/SaaS",
        animated_icon: "/icons8-add-to-cloud.gif",
    },
    {
        title: "Logistics",
        icon: "📦",
        href: "/industries/Logistics",
        animated_icon: "/icons8-logistics.gif",
    },
    {
        title: "On-Demand",
        icon: "⚡",
        href: "/industries/On-Demand",
        animated_icon: "/icons8-clock.gif",
    },
    {
        title: "Real Estate",
        icon: "🏠",
        href: "/industries/Real_Estate",
        animated_icon: "/real-estate.gif",
    },
    {
        title: "Shared Mobility",
        icon: "🛵",
        href: "/industries/Shared_Mobility",
        animated_icon: "/icons8-bus.gif",
    },
];
