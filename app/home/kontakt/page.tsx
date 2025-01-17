"use client";

import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import { kontakt } from "@/lib/paragraphs/kontakt";

export default function Home() {
    return (
        <MainLayout>
            <Header className="relative flex w-full mb-14" />
            {/* vvv---vvv PER PAGE CONTENT GOES HERE vvv---vvv */}
            <section
                className={`grow 
                w-9/10 mx-auto my-0 flex gap-5`}
            >
                <main className={`w-9/12 mx-auto my-0 pb-20`}>
                    <article className={`pt-16 flowText rounded-lg shadow-soft`}>
                        {/* <h1 className="relative mb-7 text-pageTitle leading-1.3">
                            <span className="block w-11/12 border-b-1 border-slate-700/40">
                                <span className="font-bold text-firstLetterTitle">K</span>ontakt
                            </span>
                        </h1> */}
                        <div
                            className={`flowText
                                        w-max mx-auto my-0`}
                        >
                            {kontakt}
                        </div>
                    </article>
                </main>
            </section>
        </MainLayout>
    );
}
