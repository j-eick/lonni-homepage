import { navLinksLeft, navLinksRight } from "@/lib/navLinks";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./header.css";
import "../../../../app/globals.css";

type HeaderProps = {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    buttonClicked: string;
    underlineLinkClasses: (e: string) => string;
};

export default function Header({ isModalOpen, setIsModalOpen, underlineLinkClasses, buttonClicked }: HeaderProps) {
    const path = usePathname();
    // const [buttonClicked, setButtonClicked] = useState(path);

    const linkStyleClasses = (href: string) =>
        `w-full grid place-items-center duration-300 transition-all
        ${href === buttonClicked ? `scale-navLinks-selected text-navLinks font-bold` : ""}`;

    // const underlineLinkClasses = (href: string) => `w-max px-2 text-center relative navLinks-underlineHover
    //     ${href === buttonClicked ? `navLinks-underline` : ""}
    // `;

    // useEffect(() => {
    //     setButtonClicked(path);
    // }, [path]);

    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //         const modal = document.getElementById("mobileModal");
    //         if (modal && !modal.contains(event.target as Node) && isModalOpen) {
    //             setIsModalOpen(false);
    //         }
    //     };

    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [isModalOpen]);

    return (
        <header className={`relative`}>
            {/* ----- MOBILE HEADER ----- */}
            <div className="relative flex justify-center">
                <div
                    className={`fixed top-5 z-20 w-11/12 h-mobile-header py-[1vw] 
                                flex justify-between items-center rounded-lg
                                backdrop-blur-xl shadow-regular 
                                2xs:px-8
                                md:hidden`}
                >
                    <Link
                        href="/home"
                        className="h-full grid place-items-center"
                    >
                        <h1
                            className={`relative h-full w-[31vw] max-w-[195px] text-[8vw] font-headerTitle 
                                        2xs:text-size_headerTitle_mobile
                                        xs:w-[33vw]
                                        `}
                        >
                            <span className={`absolute z-10 top-title-lonni-top-exp left-title-lonni-left`}>Lonni</span>
                            <span
                                className={`absolute z-10 
                                            bottom-title_inman_bottom 
                                            right-title_inman_right_320
                                            2sm-510:right-title_inman_right_510
                                            `}
                            >
                                Inman
                            </span>
                        </h1>
                    </Link>
                    <div
                        className={`hidden relative 
                                    h-[70%] w-auto px-3 flex-col justify-center items-center
                                    whitespace-pre tracking-wider text-size-smallest opacity-80
                                    font-CreatoDisplay text-gray-500/40 italic
                                    2sm-455:flex
                                    2sm-510:text-size-small
                                    sm-670:hidden
                                    `}
                    >
                        <span className="h-full flex items-center">{`Unterricht  -  Konzerte`}</span>
                        <span className="h-full flex items-center">Workshops</span>
                        <div className="absolute w-[95%] h-[.25px] bg-slate-500/60 top-1/2 translate-y-1/2" />
                    </div>
                    <div
                        className={`hidden relative 
                                    h-[70%] w-auto px-3 justify-start items-center
                                    whitespace-pre tracking-wider text-size-small opacity-80
                                    font-CreatoDisplay text-gray-500/40 italic
                                    sm-670:flex
                                    `}
                    >
                        <span>{`Unterricht   /   `}</span>
                        <span>{`Konzerte   /   `}</span>
                        <span>Workshops</span>
                    </div>
                    <BurgerMenu
                        onClick={() => setIsModalOpen(!isModalOpen)}
                        isOpen={isModalOpen}
                    />
                </div>
            </div>

            {/* ----- DESKTOP HEADER ----- */}
            <div
                className={`hidden w-full
                            md:block md:relative`}
            >
                <ul
                    className={`relative w-full h-full
                                flex justify-around
                                md-768:gap-0 md-768:text-size-navLink-small
                                lg-1024:gap-5 `}
                >
                    <li className={`grow relative max-w-navContainer-left`}>
                        <ul className={`relative h-full flex justify-between gap-0 font-navLink`}>
                            {navLinksLeft.map(link => (
                                <li
                                    key={link.href}
                                    className="grow h-full w-full flex items-center justify-center"
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
                    {/* min-w-[300px] */}
                    <li
                        className={`flex-1
                            `}
                    >
                        <Link href="/home">
                            <h1
                                id="titleLonni"
                                className={`relative font-headerTitle mx-auto my-0
                                            max-h-[200px] 
                                            min-w-[150px] max-w-[285px] w-[25vw] 
                                            md:h-[17vw]
                                           `}
                            >
                                <span
                                    className={`absolute z-10 top-[2vw] -left-3 
                                                md-768:text-[7vw]
                                                xl-1200:text-[80px]`}
                                >
                                    Lonni
                                </span>
                                <span
                                    className={`absolute z-10 -right-[1vw] bottom-[2vw] 
                                                md-768:text-[7vw]
                                                xl-1200:text-[80px] `}
                                >
                                    <span className="">Inman</span>
                                </span>
                            </h1>
                        </Link>
                    </li>
                    <li className="grow max-w-navContainer-right">
                        <ul
                            className={`h-full 
                                        flex justify-between
                                        md:gap-0
                                        `}
                        >
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
            </div>
        </header>
    );
}

function BurgerMenu({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) {
    return (
        <button
            onClick={onClick}
            aria-label="Toggle menu"
            className={`h-burger-canvas w-burger-canvas
                        flex flex-col justify-center items-start gap-burgerMenu p-2 text-black`}
        >
            <div
                className={`min-h-0.5 h-burger-lineHeight bg-black transition-all duration-300 ease-in-out rounded-full
                            ${isOpen ? "w-6 rotate-45 translate-y-2 bg-gray-400" : "min-w-4 w-burger-outerLine"}`}
            />
            <div
                className={`min-h-0.5 h-burger-lineHeight bg-black transition-all duration-300 ease-in-out rounded-full
                            ${isOpen ? "w-6 opacity-0" : "min-w-5 w-burger-middleLine"}`}
            />
            <div
                className={`min-h-0.5 h-burger-lineHeight bg-black transition-all duration-300 ease-in-out rounded-full
                            ${isOpen ? "w-6 -rotate-45 -translate-y-2 bg-gray-400" : "min-w-4 w-burger-outerLine"}`}
            />
        </button>
    );
}
