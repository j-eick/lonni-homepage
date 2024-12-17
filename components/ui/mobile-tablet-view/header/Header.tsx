import { navLinks } from "@/lib/navLinks";
import Link from "next/link";
import { ReactNode } from "react";

type HeaderProps = {
    children?: ReactNode;
    className: string;
    link1: string;
    link2: string;
    link3: string;
    link4: string;
    link5: string;
};

export default function Header({ className, link1, link2, link3, link4, link5 }: HeaderProps) {
    const liStyle = "grow h-full w-full flex items-center justify-center";
    const linkStyle = "h-1/3 w-full grid place-items-center";

    return (
        <header className={className}>
            <ul className="w-full h-full flex justify-around">
                <li className={`grow relative`}>
                    <ul
                        className={`relative h-full flex justify-between
                                    `}
                    >
                        <li className={liStyle}>
                            <Link
                                className={`${linkStyle}`}
                                href={navLinks.home.href}
                            >
                                {link1}
                            </Link>
                        </li>
                        <li className={liStyle}>
                            <Link
                                className={`h-full w-full ${linkStyle}`}
                                href={navLinks.unterricht.href}
                            >
                                {link2}
                            </Link>
                        </li>
                        <li className={liStyle}>
                            <Link
                                className={`h-full w-full ${linkStyle}`}
                                href={navLinks.kt.href}
                            >
                                {link3}
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="w-4/12">
                    <h1
                        id="titleLonni"
                        className="grid grid-cols-10 grid-rows-2"
                    >
                        <span className="w-full col-start-2">Lonni</span>
                        <span
                            className={`row-start-2 col-start-4 col-end-10
                                        grid justify-end`}
                        >
                            <span className="">Inman</span>
                        </span>
                    </h1>
                </li>
                <li className="grow">
                    <ul className={`h-full flex justify-between`}>
                        <li className={liStyle}>
                            <Link
                                className={`h-full w-full leading-1.5 ${linkStyle}`}
                                href={navLinks.auftritteCDs.href}
                            >
                                {link4}
                            </Link>
                        </li>
                        <li className={liStyle}>
                            <Link
                                className={`h-full w-full ${linkStyle}`}
                                href={navLinks.kontakt.href}
                            >
                                {link5}
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </header>
    );
}
