"use client";

import useWindowSize from "@/app/hooks/useWindowSize";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import { unterricht } from "@/lib/paragraphs/unterricht";

export default function Home() {
    const windowSize = useWindowSize();

    return (
        <>
            <p className={`absolute top-2 right-2`}>{windowSize.width}px</p>
            <MainLayout>
                <main className={`w-9/12`}>
                    <article className="flowText">
                        <h1 className="relative mb-7 text-pageTitle leading-1.3">
                            <span className="block w-11/12 border-b-1 border-slate-700/40">
                                <span className="font-bold text-firstLetterTitle">U</span>nterricht
                            </span>
                        </h1>
                        <div className="flowText br">{unterricht}</div>
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
            </MainLayout>
        </>
    );
}
