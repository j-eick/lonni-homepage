/**
 * The <div> beneath the header is solely to push the main content below
 * the floating header.
 */

import useWindowSize from "@/app/hooks/useWindowSize";
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import Header from "./header/Header";
import { navLinksLeft, navLinksRight } from "../../../lib/navLinks.ts";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import styles from "./MovingBanner.module.css";

export default function MainLayout({ children }: { children: ReactNode }) {
    const path = usePathname();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(path);
    const windowSize = useWindowSize();

    const underlineLinkClasses = (href: string) => `w-max px-2 text-center relative navLinks-underlineHover
        ${href === buttonClicked ? `navLinks-underline` : ""}
    `;

    useEffect(() => {
        setButtonClicked(path);
    }, [path]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const modal = document.getElementById("mobileModal");
            if (modal && !modal.contains(event.target as Node) && isModalOpen) {
                setIsModalOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <div
            className={`relative h-full w-screen no-scrollbar overflow-auto
                         md:pt-5 md:pb-20`}
        >
            <p className={`absolute top-2 right-2`}>{windowSize.width}px</p>

            <BackdropLayer isModalOpen={isModalOpen} />
            <Modal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                underlineLinkClasses={underlineLinkClasses}
            />
            {/* <div className="absolute top-0 left-0 w-screen h-11 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent border-t border-b border-gray-200/50 overflow-hidden">
                <div className="whitespace-nowrap animate-marquee">asd</div>
            </div> */}

            <div
                className={`min-h-full max-w-canvas--1270px overflow-hidden
                            mx-auto my-0 flex flex-col
                            font-geosans text-size-default text-color-primary
                            md:w-8.5/10`}
            >
                <Header
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    buttonClicked={buttonClicked}
                    underlineLinkClasses={underlineLinkClasses}
                />
                {/* -----  TOP MARGIN (pushes content below header, if viewport < 768px)  ----- */}
                <div className="mobile-topMargin:mt-[15vw]">{children}</div>
            </div>
        </div>
    );
}

function Modal({
    isModalOpen,
    setIsModalOpen,
    underlineLinkClasses,
}: {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    underlineLinkClasses: (e: string) => string;
}) {
    return (
        <div
            id="mobileModal"
            className={`fixed inset-0 z-30 bg-slate-100 p-4 w-4/5 h-4/5 m-auto font-secondary
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
        </div>
    );
}

function BackdropLayer({ isModalOpen }: { isModalOpen: boolean }) {
    return <>{isModalOpen && <div className="fixed inset-0 z-20 backdrop-blur-[7px] backdrop-brightness-80" />}</>;
}
