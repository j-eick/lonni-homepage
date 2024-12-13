import { navLinks } from "@/lib/navLinks";
import Link from "next/link";
import { ReactNode } from "react";

type HeaderProps = {
    children?: ReactNode;
    className: string;
};

export default function Header({ className }: HeaderProps) {
    const liStyle = "grow";
    const linkStyle = "grid place-items-center";

    return (
        <header className={className}>
            <ul className="w-full h-full flex justify-around">
                <li className="grow">
                    <ul className={`h-full flex justify-between`}>
                        <li className={liStyle}>
                            <Link
                                className={`h-full w-full ${linkStyle}`}
                                href={navLinks.home.href}
                            >
                                {navLinks.home.name}
                            </Link>
                        </li>
                        <li className={liStyle}>
                            <Link
                                className={`h-full w-full ${linkStyle}`}
                                href={navLinks.unterricht.href}
                            >
                                {navLinks.unterricht.name}
                            </Link>
                        </li>
                        <li className={liStyle}>
                            <Link
                                className={`h-full w-full ${linkStyle}`}
                                href={navLinks.kt.href}
                            >
                                {navLinks.kt.name}
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
                                Auftritte & CDs
                            </Link>
                        </li>
                        <li className={liStyle}>
                            <Link
                                className={`h-full w-full ${linkStyle}`}
                                href={navLinks.kontakt.href}
                            >
                                {navLinks.kontakt.name}
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </header>
    );
}
