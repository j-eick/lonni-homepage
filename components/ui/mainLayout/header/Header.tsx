import { navLinksLeft, navLinksRight } from "@/lib/navLinks";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./header.css";

type HeaderProps = {
    className: string;
};

export default function Header({ className }: HeaderProps) {
    const path = usePathname();
    const [buttonClicked, setButtonClicked] = useState(path);

    console.log(path);

    const hoverScaleClasses = "hover:text-navLinks-selected";
    const linkStyleClasses = (href: string) =>
        `h-1/3 w-full grid place-items-center 
        ${href === buttonClicked ? `text-navLinks-selected font-bold` : ""}
        ${hoverScaleClasses} duration-300 transition-all`;
    const selectedLinkClasses = (href: string) => `w-max px-2 text-center relative
        ${href === buttonClicked ? `navLinks-underline` : ""}
    `;

    useEffect(() => {
        setButtonClicked(path);
    }, [path]);

    return (
        <header className={className}>
            {/* ###   LEFT NAV--ITEMS   ### */}
            <ul className="w-full h-full flex justify-around">
                <li className={`grow relative max-w-navContainer-left`}>
                    <ul className={`relative h-full flex justify-between gap-3`}>
                        {navLinksLeft.map(link => (
                            <li
                                key={link.href}
                                className="grow h-full w-full flex items-center justify-center font-navLink-unselected text-navLinks"
                            >
                                <Link
                                    className={linkStyleClasses(link.href)}
                                    href={link.href}
                                >
                                    <span className={selectedLinkClasses(link.href)}>{link.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="w-4/12">
                    <Link href="/home">
                        <h1
                            id="titleLonni"
                            className="grid grid-cols-10 grid-rows-2 font-pageTitle "
                        >
                            <span className="w-full col-start-2 text-headerTitle">Lonni</span>
                            <span
                                className={`row-start-2 col-start-4 col-end-10 text-headerTitle
                                        grid justify-end`}
                            >
                                <span className="">Inman</span>
                            </span>
                        </h1>
                    </Link>
                </li>
                <li className="grow max-w-navContainer-right">
                    {/* ###   RIGHT NAV--ITEMS   ### */}
                    <ul className={`h-full flex justify-between gap-3`}>
                        {navLinksRight.map(link => (
                            <li
                                key={link.href}
                                className="grow h-full w-full flex items-center justify-center font-navLink-unselected text-navLinks"
                            >
                                <Link
                                    className={linkStyleClasses(link.href)}
                                    href={link.href}
                                >
                                    <span className={selectedLinkClasses(link.href)}>{link.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </header>
    );
}
