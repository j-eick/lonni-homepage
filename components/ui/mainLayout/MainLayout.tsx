import useWindowSize from "@/app/hooks/useWindowSize";
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import Header from "./header/Header";
import { navLinksLeft, navLinksRight } from "../../../lib/navLinks.ts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../../app/globals.css";

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

    useEffect(() => {
        const marquee = document.querySelector<HTMLDivElement>(".banner");
        let offset: number;

        if (!marquee) {
            console.error("Element with class .text-marque not found");
            return;
        }

        console.log(marquee.offsetWidth);

        offset = marquee.offsetWidth;

        function animateMarquee() {
            offset -= 2;

            if (!marquee) {
                console.error("marquee not found");
                return;
            }
            marquee.style.transform = `translateX(${offset}px)`;

            if (Math.abs(offset) > marquee.scrollWidth) {
                offset = marquee.offsetWidth;
            }

            requestAnimationFrame(animateMarquee);
        }

        animateMarquee();
    }, []);

    return (
        <div
            className={`relative min-h-full w-screen no-scrollbar overflow-auto
                        font-TA_ExtraLight text-size-default text-color-primary `}
        >
            <p className={`absolute z-50 top-2 right-2`}>{windowSize.width}px</p>

            <BackdropLayer isModalOpen={isModalOpen} />

            <Modal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                underlineLinkClasses={underlineLinkClasses}
            />
            <div className="relative ">
                <Canvas
                    className={`relative max-w-canvas--1270px overflow-hidden 
                                mx-auto my-0
                                md:w-8.5/10`}
                >
                    <Header
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        buttonClicked={buttonClicked}
                        underlineLinkClasses={underlineLinkClasses}
                    />
                </Canvas>
                <div
                    className={`
                                absolute bottom-0  left-0 w-full h-marquee-banner flex items-center justify-center
                                bg-gradient-to-r from-cyan-700/10 via-purple-400/10 to-cyan-700/10 whitespace-nowrap
                                border-[.5px] border-b-[.5px] border-white/20
                                backdrop-blur-sm shadow-lg`}
                >
                    <div className="banner w-9/12 mx-6 text-size-default font-semibold text-white drop-shadow-md">
                        {/* <span>[Moving Text Banner]</span> */}
                    </div>
                    {/* <div className="w-2/12 text-size-default font-semibold text-white drop-shadow-md">[Playing Track]</div> */}
                </div>
            </div>
            {/* --- CONTENT --- */}
            <Canvas
                className={`max-w-canvas--1270px overflow-hidden 
                            mx-auto my-0 flex flex-col
                            text-size-default
                            md:w-8.5/10`}
            >
                {children}
            </Canvas>
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
                        transition-opacity duration-300 ease-in-out rounded-md
                        ${isModalOpen ? "opacity-70 " : "opacity-0 pointer-events-none"}`}
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
    return <>{isModalOpen && <div className="fixed inset-0 z-30 backdrop-blur-[7px] backdrop-brightness-70" />}</>;
}

function Canvas({ children, className }: { children: ReactNode; className: string }) {
    return <div className={className}>{children}</div>;
}
