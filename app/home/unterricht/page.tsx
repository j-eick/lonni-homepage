"use client";

import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import SideVideos from "@/components/ui/SideVideos";
import { unterricht } from "@/lib/paragraphs/unterricht";

export default function Home() {
    return (
        <MainLayout>
            <Header className="relative flex w-full mb-14" />
            {/* vvv---vvv PER PAGE CONTENT GOES HERE vvv---vvv */}
            <section
                className={`grow 
                w-9/10 mx-auto my-0 flex gap-5`}
            >
                <main className={`w-9/12`}>
                    <article className="flowText">
                        <h1 className="relative mb-7 text-pageTitle leading-1.3">
                            <span
                                className={`block font-pageTitle tracking-wider
                                            w-11/12 border-b-1 border-slate-700/40`}
                            >
                                <span className="font-bold text-firstLetterTitle">U</span>nterricht
                            </span>
                        </h1>
                        <div className="pr-10 flowText">{unterricht}</div>
                    </article>
                </main>
                <SideVideos />
            </section>
        </MainLayout>
    );
}
