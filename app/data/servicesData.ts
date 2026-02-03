// servicesData.ts
export interface Service {
    title: string;
    emoji?: string;
    iconGradient: string;
    description: string;
    items?: string[];
    image?: string;
    link?: string;
}

export const services: Service[] = [
    {
        title: "Web Development",
        emoji: "💻",
        iconGradient: "bg-gradient-to-br from-blue-500 to-indigo-500",
        description: "Building fast, modern, and responsive websites for your business.",
        items: ["Frontend development", "Backend development", "Fullstack solutions"],
        image: "/webdev.jpg",
        link: "/services/Web_Development",
    },
    {
        title: "App Development",
        emoji: "📱",
        iconGradient: "bg-gradient-to-br from-green-500 to-teal-500",
        description: "Custom mobile apps for iOS and Android tailored to your business needs.",
        items: ["iOS apps", "Android apps", "Cross-platform apps"],
        image: "/apps.jpg",
        link: "/services/App_Development",
    },
    {
        title: "Software Development",
        emoji: "🛠️",
        iconGradient: "bg-gradient-to-br from-purple-500 to-pink-500",
        description: "Custom software solutions to streamline your operations.",
        items: ["Desktop software", "Enterprise software", "Automation tools"],
        image: "/app.jpg",
        link: "/services/Software_Development",
    },
    {
        title: "Web Design",
        emoji: "🎨",
        iconGradient: "bg-gradient-to-br from-amber-500 to-orange-500",
        description: "Beautiful and user-friendly designs to make your website stand out.",
        items: ["UI/UX design", "Responsive design", "Brand-focused visuals"],
        image: "/web.jpg",
        link: "/services/Web_Design",
    },
    {
        title: "WhatsApp Business API",
        emoji: "💬",
        iconGradient: "bg-gradient-to-br from-teal-500 to-cyan-500",
        description: "Connect with customers directly through WhatsApp for seamless communication.",
        items: ["Automated messaging", "Customer support integration", "Notifications"],
        image: "/whatsapp.jpg",
        link: "/services/Whatsapp_Business_API",
    },
    {
        title: "IT Solutions",
        emoji: "🖥️",
        iconGradient: "bg-gradient-to-br from-slate-500 to-gray-700",
        description: "Reliable IT solutions to support, secure, and scale your business operations.",
        items: ["System integration", "Infrastructure management", "Cybersecurity solutions", "IT support & maintenance"],
        image: "/ITS.jpg",
        link: "/services/IT_Solutions",
    },
    {
        title: "IT Support & Maintenance",
        emoji: "🖥️",
        iconGradient: "bg-gradient-to-br from-gray-500 to-slate-700",
        description: "Reliable IT maintenance to keep your business running smoothly.",
        items: ["Hardware & software support", "Network monitoring", "Troubleshooting"],
        image: "/IT.jpg",
        link: "/services/IT_Support_Maintenace",
    },
    {
        title: "Graphic Design",
        emoji: "🖌️",
        iconGradient: "bg-gradient-to-br from-pink-500 to-purple-500",
        description: "Eye-catching visuals to enhance your brand and marketing materials.",
        items: ["Logo design", "Marketing graphics", "Social media creatives"],
        image: "/graphicc.jpg",
        link: "/services/Graphic_Design",
    },
    {
        title: "SaaS",
        emoji: "☁️",
        iconGradient: "bg-gradient-to-br from-blue-400 to-indigo-500",
        description: "Cloud-based software solutions for easy access and scalability.",
        items: ["Web apps", "Mobile apps", "Cloud hosting"],
        image: "/saas.jpg",
        link: "/services/saas",
    },
    {
        title: "Operations & Booking Platform",
        emoji: "📅",
        iconGradient: "bg-gradient-to-br from-emerald-500 to-lime-500",
        description: "Manage bookings, reservations, and business operations efficiently.",
        items: ["Booking management", "Scheduling", "Reports & analytics"],
        image: "/book.png",
        link: "/services/Operations&Booking_Platform",
    },
];
