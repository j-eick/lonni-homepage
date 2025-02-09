import { LinkProp } from "../../../lib/navLinks.ts";
import Link from "next/link";

type NavProps = {
    link: LinkProp[];
    path: string;
};

export default function Nav({ link: links, path }: NavProps) {
    return (
        <nav>
            <ul className="flex flex-col gap-5">
                {links.map((link, i) => (
                    <li
                        key={i}
                        className={`relative px-3 h-14 flex items-end
                                    before:absolute before:left-1/2 before:-translate-x-1/2 
                                    ${path === link.href ? "fadingLineWhite" : "fadingLineBlack"} 
                                  `}
                    >
                        <Link
                            href={link.href}
                            className="w-full "
                        >
                            <p className="navP">{link.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
