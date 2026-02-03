export interface NavService {
    title: string;
    icon: string;   // emoji for now, later SVG / image
    href: string;
}

export const navServices: NavService[] = [
    {
        title: "IT Solutions",
        icon: "🖥️", // systems, infrastructure
        href: "/services/IT_Solutions",
    },
    {
        title: "Web Development",
        icon: "🌐", // web / internet
        href: "/services/Web_Development",
    },
    {
        title: "App Development",
        icon: "📱", // mobile apps
        href: "/services/App_Development",
    },
    {
        title: "Software Development",
        icon: "⚙️", // engineering, logic
        href: "/services/Software_Development",
    },
    {
        title: "Web Design",
        icon: "🧩", // layout / UI structure
        href: "/services/Web_Design",
    },
    {
        title: "WhatsApp Business API",
        icon: "💬", // messaging
        href: "/services/Whatsapp_Business_API",
    },
    {
        title: "SaaS",
        icon: "☁️", // cloud software
        href: "/services/saas",
    },
    {
        title: "Graphic Design",
        icon: "🎨", // visuals, branding
        href: "/services/Graphic_Design",
    },
    {
        title: "Operations and Booking Platform",
        icon: "📅", // scheduling, bookings
        href: "/services/Operations&Booking_Platform",
    },
    {
        title: "IT Support Maintenance",
        icon: "🛠️", // fixing, support
        href: "/services/IT_Support_Maintenace",
    },
];
