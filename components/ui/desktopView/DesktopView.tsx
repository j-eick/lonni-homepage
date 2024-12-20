import useWindowSize from "@/app/hooks/useWindowSize";
import SideNavSquaresA from "../nav/desktop-design-versions/SideNavSquaresA";
import { welcomeText } from "@/lib/paragraphs/home";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function DesktopView() {
    const windowSize = useWindowSize();

    const path = usePathname();
    console.log(windowSize.width);

    useEffect(() => {
        console.log(path);
    }, []);

    return (
        <div
            className={`h-full mx-auto my-0  
                        ${windowSize.width >= 1119 ? "grid grid-cols-18 grid-rows-12" : ""}`}
        >
            <SideNavSquaresA
                className={`w-full 
                        col-start-1 col-end-6
                        row-start-2 row-end-12
                        `}
            />
            <div
                className={`h-full pl-6 pr-7 z-10 
                            flex items-end
                            col-start-6 col-end-18
                            row-start-1 row-end-3
                            `}
            >
                <h1 className="text-80px leading-none">Lonni Inman</h1>
            </div>
            <main
                className={`pb-10 pr-7 
                            col-start-6 col-end-18
                            row-start-4 row-end-12
                            `}
            >
                <article className={`pl-7 flowText`}>{welcomeText}</article>
            </main>
        </div>
    );
}
