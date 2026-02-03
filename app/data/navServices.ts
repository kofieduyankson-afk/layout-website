export interface NavService {
    title: string;
    icon: string;   // emoji for now, later SVG / image
    href: string;
    animated_icon?: string;
}

export const navServices: NavService[] = [
    {
        title: "IT Solutions",
        icon: "🖥️", // systems, infrastructure
        href: "/services/IT_Solutions",
        animated_icon: "/icons8-money-box.gif",
    },
    {
        title: "Web Development",
        icon: "🌐", // web / internet
        href: "/services/Web_Development",
        animated_icon: "/icons8-money-box.gif",
    },
    {
        title: "App Development",
        icon: "📱", // mobile apps
        href: "/services/App_Development",
        animated_icon: "/icons8-money-box.gif",
    },
    {
        title: "Software Development",
        icon: "⚙️", // engineering, logic
        href: "/services/Software_Development",
        animated_icon: "/icons8-money-box.gif",
    },
    {
        title: "Web Design",
        icon: "🧩", // layout / UI structure
        href: "/services/Web_Design",
        animated_icon: "/icons8-money-box.gif",
    },
    {
        title: "WhatsApp Business API",
        icon: "💬", // messaging
        href: "/services/Whatsapp_Business_API",
        animated_icon: "/icons8-money-box.gif",
    },
    {
        title: "SaaS",
        icon: "☁️", // cloud software
        href: "/services/saas",
        animated_icon: "/icons8-money-box.gif",
    },
    {
        title: "Graphic Design",
        icon: "🎨", // visuals, branding
        href: "/services/Graphic_Design",
        animated_icon: "/icons8-money-box.gif",
    },
    {
        title: "Operations and Booking Platform",
        icon: "📅", // scheduling, bookings
        href: "/services/Operations&Booking_Platform",
        animated_icon: "/icons8-money-box.gif",
    },
    {
        title: "IT Support Maintenance",
        icon: "🛠️", // fixing, support
        href: "/services/IT_Support_Maintenace",
        animated_icon: "/icons8-money-box.gif",
    },
];
