"use client";

import useWindowSize from "./hooks/useWindowSize";
import Link from "next/link";
import "./globals.css";

export default function App() {
    const windowSize = useWindowSize();

    return (
        <div
            className={`relative h-full w-full grid grid-cols-1 place-items-center border-black border-dashed 
                        bg-bg1 bg-no-repeat bg-center
                        1250x:bg-auto
                        `}
        >
            <div className="absolute inset-0 z-0 w-full h-full grid place-items-center backdrop-blur-2px bg-white/30" />
            <main
                className={`h-8/10 w-9/10 max-w-1050px grid grid-cols-1 grid-rows-6 justify-items-center 
                    backdrop-blur-md backdrop-brightness-85 bg-slate-200/50 shadow-mainShadow
                    rounded-3xl border-1 border-slate-100 `}
            >
                <Link
                    href="/home"
                    className={`row-start-4 px-4 py-3 flex flex-col gap-4 items-center border rounded-3xl
                                hover:shadow-mainShadow`}
                >
                    <h1 className="text-3xl">Lonni Inman</h1>
                    <nav className="relative row-start-8 h-max">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2em"
                            height="2em"
                            viewBox="0 0 48 48"
                        >
                            <path
                                fill="black"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M24.082 4.5v22.757a8.77 8.77 0 0 0-4.388-1.178c-4.83 0-8.745 3.9-8.744 8.712c0 4.81 3.916 8.71 8.744 8.709c4.407-.005 8.698-3.245 8.704-8.173l.028-22.163h8.624V4.5z"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 1024 1024"
                            className={`absolute top-1/2 -translate-y-1/2 left-full animate-pulse `}
                        >
                            <path
                                fill="currentColor"
                                d="M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L764.736 512L452.864 192a30.59 30.59 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L508.736 512L196.864 192a30.59 30.59 0 0 1 0-42.688"
                            />
                        </svg>
                    </nav>
                </Link>
                <ul
                    className={`relative h-max px-10 row-start-6 flex justify-center gap-2 
                                before:absolute fadingLine`}
                >
                    <li>Unterricht</li>
                    <span>-</span>
                    <li>Konzerte</li>
                    <span>-</span>
                    <li>Workshops</li>
                </ul>
            </main>
            <p className={`absolute top-2 right-2`}>{windowSize.width}px</p>
        </div>
    );
}
