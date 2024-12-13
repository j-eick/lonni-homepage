type LinkProp = {
    href: string;
    name: string;
};

type LinksProps = {
    startpage: LinkProp;
    home: LinkProp;
    unterricht: LinkProp;
    kt: LinkProp;
    auftritteCDs: LinkProp;
    kontakt: LinkProp;
};

export const navLinks: LinksProps = {
    startpage: { href: "/", name: "startpage" },
    home: { href: "/home", name: "Home" },
    unterricht: { href: "/home/unterricht", name: "Unterricht" },
    kt: { href: "/home/künstlerische-tätigkeiten", name: "Projekte" },
    auftritteCDs: { href: "/home/auftritte-cds", name: "Auftritte und CDs" },
    kontakt: { href: "/home/kontakt", name: "Kontakt" },
};
