"use client";

import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import PageTitle from "@/components/ui/page-title/PageTitle";
import { welcomeText } from "@/lib/paragraphs/home";

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
                        <PageTitle>
                            <div
                                className={`absolute h-24 w-24 rounded-3xl bg-slate-400/20
                                            top-1/2 -translate-y-1/2 -left-10 -z-10`}
                            />
                        </PageTitle>
                        <div className="pr-10 flowTextAndLastChild">{welcomeText}</div>
                    </article>
                </main>
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
                {/* <div /> */}
            </div>
        </MainLayout>
    );
}
