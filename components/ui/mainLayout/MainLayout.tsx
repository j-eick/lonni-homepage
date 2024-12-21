import useWindowSize from "@/app/hooks/useWindowSize";
import Header from "./header/Header";
import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import SideVideos from "../SideVideos";

export default function MainLayout({ children }: { children: ReactNode }) {
    const windowSize = useWindowSize();

    const path = usePathname();
    console.log(windowSize.width);

    useEffect(() => {
        console.log(path);
    }, []);

    return (
        <div className="h-full w-screen pt-14">
            <div className="min-h-full w-8.5/10 mx-auto my-0 flex flex-col">
                <Header
                    className="relative flex w-full mb-14"
                    link1="Home"
                    link2="Unterricht"
                    link3="Projekte"
                    link4="Auftritte & CDs"
                    link5="Kontakt"
                />
                {/* vvv---vvv PER PAGE CONTENT GOES HERE vvv---vvv */}
                <section
                    className={`grow 
                                w-9/10 mx-auto my-0 flex gap-5`}
                >
                    <main className={`w-9/12`}>
                        <article className="flowText">
                            <h1 className="relative mb-7 text-pageTitle leading-1.3">
                                <span className="block w-11/12 border-b-1 border-slate-700/40">
                                    <span className="font-bold text-firstLetterTitle">H</span>erzlich Willkommen!
                                </span>
                            </h1>
                            <div className="pr-10 flowText">{children}</div>
                        </article>
                    </main>
                    <SideVideos />
                </section>
                <div
                    className={`bb 
                                w-9/10 mx-auto my-0 mt-5
                                flex `}
                >
                    <ul
                        className={`bb w-1/3 h-full p-2 flex justify-between gap-5
                                    bg-slate-300 `}
                    >
                        <li className="grow text-center">Unterricht</li>
                        <li className="grow text-center">Konzerte</li>
                        <li className="grow text-center">Kontakt</li>
                    </ul>
                    <div />
                </div>
            </div>
        </div>
    );
}
