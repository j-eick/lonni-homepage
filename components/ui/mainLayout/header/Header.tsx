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

    // const hoverScaleClasses = "hover:navLinks-underline";
    const linkStyleClasses = (href: string) =>
        `h-1/3 w-full grid place-items-center duration-300 transition-all
        ${href === buttonClicked ? `scale-navLinks-selected text-navLinks font-bold` : ""}`;
    const underlineLinkClasses = (href: string) => `w-max px-2 text-center relative navLinks-underlineHover
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
                                className="grow h-full w-full flex items-center justify-center font-navLink text-navLinks"
                            >
                                <Link
                                    className={linkStyleClasses(link.href)}
                                    href={link.href}
                                >
                                    <span className={underlineLinkClasses(link.href)}>{link.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="min-w-[300px] max-w-[335px] flex-1 shrink">
                    <Link href="/home">
                        <h1
                            id="titleLonni"
                            className={`h-[215px] relative
                                        font-headerTitle`}
                        >
                            <span className="absolute top-7 w-full text-size-headerTitle ">Lonni</span>
                            <span
                                className={`absolute right-0 bottom-7 text-headerTitle-inman 
                                        `}
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
                                className="grow h-full w-full flex items-center justify-center font-navLink text-navLinks"
                            >
                                <Link
                                    className={linkStyleClasses(link.href)}
                                    href={link.href}
                                >
                                    <span className={underlineLinkClasses(link.href)}>{link.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </header>
    );
}
