import { startpage } from "@/lib/paragraphs/startpage";
import SideNavSquaresA from "../nav/desktop-design-versions/SideNavSquaresA";

export default function DesktopView() {
  return (
    <>
        <SideNavSquaresA
            className={`w-full bb
                        col-start-1 col-end-6
                        row-start-2 row-end-12
                        `}
        />
            <div
                className={`h-full pl-6 pr-7 z-10 bb
                            flex items-end
                            col-start-6 col-end-18
                            row-start-1 row-end-3
                            `}
            >
                <h1 className="text-80px leading-none">Lonni Inman</h1>
            </div>
            <main
                className={`pb-10 pr-7 bb
                            col-start-6 col-end-18
                            row-start-4 row-end-12
                            `}
            >
                <article className={`pl-7 whitespace-pre-wrap`}>
                    <p>{startpage.welcomeText}</p>
                </article>
            </main>
    </>
  )
}
