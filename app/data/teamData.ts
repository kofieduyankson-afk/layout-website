export interface TeamMember {
    name: string;
    role: string;
    image: string;
}

export const team: TeamMember[] = [
    {
        name: "Peter ",
        role: "Founder ",
        image: "/team/peter.jpg",
    },
    {
        name: "Godwin",
        role: "Project Manager",
        image: "/team/godwin.jpg",
    },
    {
        name: "Vansh",
        role: "Senior Developer Engineer",
        image: "/team/vansh.jpg",
    },
    {
        name: "Frank",
        role: "Operations Manager",
        image: "/team/frank.jpg",
    },
    {
        name: "Kofi",
        role: "Junior developer",
        image: "/team/kofi.jpg",
    },
];
