import { navLinksLeft, navLinksRight } from "@/lib/navLinks";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./header.css";

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
        `h-1/3 w-full grid place-items-center duration-300 transition-all
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
        <header
            className={`relative
                        mb-14 
                        md:h-full `}
        >
            {/* ----- DESKTOP HEADER ----- */}
            <div
                className={`hidden w-full
                            md:block`}
            >
                <ul
                    className={`w-full h-full
                                flex justify-around
                                md:gap-0 md:text-size-navLink-regular
                                lg:gap-5
                                2lg:text-size-navLink-bigger`}
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
                                    className={`absolute top-[2vw] -left-3 
                                                md:text-[7vw]
                                                2lg:text-[80px]`}
                                >
                                    Lonni
                                </span>
                                <span
                                    className={`absolute -right-[1vw] bottom-[2vw] 
                                                md:text-[7vw]
                                                2lg:text-[80px] `}
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
            {/* ----- MOBILE HEADER ----- */}
            <div
                className={`fixed w-full px-[5vw] py-[1vw] flex justify-between items-center bb
                            min-h-[80px] h-mobile-header 
                            md:hidden`}
            >
                <Link
                    href="/home"
                    className="h-full grid place-items-center "
                >
                    <h1
                        className={`relative h-[16vw] w-[31vw] text-[8vw] font-headerTitle
                                    xs:w-[33vw] xs:text-[9vw]
                                    `}
                    >
                        <span className="absolute top-0 left-0">Lonni</span>
                        <span className="absolute bottom-0 right-0">Inman</span>
                    </h1>
                </Link>
                <BurgerMenu
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    isOpen={isModalOpen}
                />

                {/* {isModalOpen && <div className="fixed inset-0 z-30 backdrop-blur-[7px] backdrop-brightness-80" />}

                <div
                    id="mobileModal"
                    className={`fixed inset-0 z-30 bg-slate-100 p-4 w-4/5 h-4/5 m-auto
                                transition-opacity duration-300 ease-in-out rounded-sm
                                ${isModalOpen ? "opacity-70" : "opacity-0 pointer-events-none"}`}
                >
                    <button
                        className="absolute top-4 right-4 text-2xl"
                        onClick={() => setIsModalOpen(false)}
                    >
                        close
                    </button>
                    <ul className="flex flex-col space-y-4 mt-12">
                        {[...navLinksLeft, ...navLinksRight].map(link => (
                            <li
                                key={link.href}
                                className="text-center text-size-mobile-navLinks"
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    <span className={underlineLinkClasses(link.href)}>{link.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div> */}
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
