"use client";

import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import PageTitle from "@/components/ui/page-title/PageTitle";
import AuftritteCds from "@/lib/paragraphs/auftritteCds";
import { allVideoLinks } from "@/lib/videoLinks";

export default function Home() {
    return (
        <MainLayout>
            <Header className="relative flex w-full" />
            {/* vvv---vvv PER PAGE CONTENT GOES HERE vvv---vvv */}
            <section
                className={`grow 
                w-9/10 mx-auto my-0 flex flex-col`}
            >
                <PageTitle
                    firstLetter="B"
                    rest="iografie"
                />
                <div className="flex">
                    <main className={`w-8/12`}>
                        <article className="flowText">
                            {/* ###-----  PageTitle without opaque mirroring  -----### */}
                            {/* <h1 className="relative mb-7 text-pageTitle leading-1.3">
                            <span
                                className={`block font-pageTitle tracking-wider
                                            w-11/12 border-b-1 border-slate-700/40`}
                            >
                                <span className="font-bold text-firstLetterTitle">B</span>iografie
                            </span>
                        </h1> */}
                            <div className="pr-10 flowText">
                                <AuftritteCds />
                            </div>
                        </article>
                    </main>
                    <aside className="grow w-4/12 px-5 h-max">
                        <ul className={`flex flex-col gap-5`}>
                            {allVideoLinks.map(link => (
                                <li
                                    key={link}
                                    className={`overflow-hidden rounded-3xl border-2 border-slate-300 
                                            w-[290px] h-[163px] opacity-80
                                            hover:opacity-100`}
                                >
                                    <iframe
                                        src={link}
                                        width="100%"
                                        height="100%"
                                        allowFullScreen
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        className="pointer-events-auto"
                                    />
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </section>
        </MainLayout>
    );
}
