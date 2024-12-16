import { welcomeText } from "@/lib/paragraphs/home";
import Header from "./header/Header";

export default function MobileTablet() {
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
                <section className="w-9/10 mx-auto my-0 flex gap-3">
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
                </section>
            </div>
        </div>
    );
}
