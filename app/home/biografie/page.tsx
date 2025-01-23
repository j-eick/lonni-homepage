"use client";

import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import PageTitle from "@/components/ui/page-title/PageTitle";
import AuftritteCds from "@/lib/paragraphs/auftritteCds";
import Image from "next/image";
import profilePic from "../../../public/content/profile.jpg";

export default function Home() {
    return (
        <MainLayout>
            <Header />
            {/* vvv---vvv PER PAGE CONTENT GOES HERE vvv---vvv */}
            <section className={`w-9/10 mx-auto my-0 flex flex-col`}>
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
                    <div className="w-4/12 pt-10 flex justify-center">
                        <div
                            className={`h-max rounded-lg overflow-hidden 
                                        shadow-softWhite border-1 border-slate-200`}
                        >
                            <Image
                                src={profilePic}
                                alt={""}
                                className="w-auto h-auto object-contain block"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
