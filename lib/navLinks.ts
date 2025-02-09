export type LinkProp = {
    href: string;
    name: string;
};

export const navLinksLeft: LinkProp[] = [
    {
        href: "/home",
        name: "Home",
    },

    {
        href: "/home/unterricht",
        name: "Unterricht",
    },

    {
        href: "/home/projekte",
        name: "Projekte & CDs",
    },
];

export const navLinksRight: LinkProp[] = [
    {
        href: "/home/biografie",
        name: "Biografie",
    },
    {
        href: "/home/kontakt",
        name: "Kontakt",
    },
];
