"use client";

import useWindowSize from "../hooks/useWindowSize";
import MobileTabletView from "@/components/ui/mobile-tablet-view/MobileTabletView";
import { welcomeText } from "@/lib/paragraphs/home";

export default function Home() {
    const windowSize = useWindowSize();

    // const path = usePathname();
    // console.log(windowSize.width);

    // const desktopView = windowSize.width >= 1119;

    // const tabletMobileView = windowSize.width <= 1119;

    // useEffect(() => {
    //     console.log(path);
    // }, []);

    return (
        <>
            <p className={`absolute top-2 right-2`}>{windowSize.width}px</p>
            <MobileTabletView>
                <main className={`w-9/12`}>
                    <article className="flowText">
                        <h1 className="relative mb-7 text-pageTitle leading-1.3">
                            <span className="block w-11/12 border-b-1 border-slate-700/40">
                                <span className="font-bold text-firstLetterTitle">H</span>erzlich Willkommen!
                            </span>
                        </h1>
                        <div className="bb pl-5 flowText">{welcomeText}</div>
                    </article>
                </main>
                <aside className="grow leading-1 bb">
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nemo distinctio cumque.
                            Consequatur commodi quos suscipit consequuntur ea
                        </li>
                        <li>b</li>
                        <li>c</li>
                    </ul>
                </aside>
            </MobileTabletView>
        </>
    );
}
