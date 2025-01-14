"use client";

import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import { projekte } from "@/lib/paragraphs/projekte";
import "../../globals.css";

export default function Home() {
    return (
        <MainLayout>
            <Header className="relative flex w-full mb-14" />
            {/* vvv---vvv PER PAGE CONTENT GOES HERE vvv---vvv */}
            <section
                className={`grow 
                w-9/10 mx-auto my-0 flex gap-5`}
            >
                <main className={`w-full br`}>
                    <article className="flowText">
                        <h1 className="relative mb-7 text-pageTitle leading-1.3">
                            <span
                                className={`block font-pageTitle tracking-wider
                                            w-11/12 border-b-1 border-slate-700/40`}
                            >
                                <span className="font-bold text-firstLetterTitle">P</span>rojekte
                            </span>
                        </h1>
                        <div>{projekte}</div>
                    </article>
                </main>
                {/* <aside
                    className={`bb
                                w-3/12`}
                >
                    <ul
                        className={`mb-3 w-full
                                    flex flex-col gap-5 justify-around items-center font-pagelinks tracking-wider text-xl`}
                    >
                        <li className="relative w-10/12 h-[200px] overflow-hidden thumbnail-link">
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-3">www.trioclassico.de</span>
                        </li>
                        <li className="relative w-10/12 h-[200px] overflow-hidden thumbnail-link">
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-3">www.ilclavifiato.de</span>
                        </li>
                    </ul>
                </aside> */}
            </section>
        </MainLayout>
    );
}
