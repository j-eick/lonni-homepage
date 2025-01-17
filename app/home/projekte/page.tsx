"use client";

import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import "../../globals.css";
import LinkCard from "@/components/ui/link-card/LinkCard";
import { MySVG } from "@/lib/MySVG";
import Bulletpoint from "@/components/ui/bulletpoint/Bulletpoint";

export default function Home() {
    const bulletpointSize = 14;

    return (
        <MainLayout>
            <Header className="relative flex w-full mb-14" />
            {/* vvv---vvv PER PAGE CONTENT GOES HERE vvv---vvv */}
            <section className={`w-9/10 mx-auto my-0 flex gap-5`}>
                <main className={`w-8/12`}>
                    <article className="flowText">
                        <h1 className="relative mb-7 text-pageTitle leading-1.3">
                            <span
                                className={`block font-pageTitle tracking-wider
                                            w-11/12 border-b-1 border-slate-700/40`}
                            >
                                <span className="font-bold text-firstLetterTitle">P</span>rojekte
                            </span>
                        </h1>
                        <ul className="flowText">
                            <Bulletpoint bulletpointSize={bulletpointSize}>
                                <strong className="font-semibold">Onlineauftritte</strong> zu verschiedenen Themen
                            </Bulletpoint>
                            <Bulletpoint bulletpointSize={bulletpointSize}>
                                <strong className="font-semibold">Orchester-Tätigkeit</strong> in diversen
                                Barockorchestern in Norddeutschland
                            </Bulletpoint>
                            <Bulletpoint bulletpointSize={bulletpointSize}>
                                <strong className="font-semibold">Konzertreisen</strong> und Rundfunk- und
                                Fernsehauftritte
                            </Bulletpoint>
                            <Bulletpoint
                                classname="relative"
                                bulletpointSize={bulletpointSize}
                            >
                                <strong className="font-semibold">CD-Aufnahmen</strong>
                                <ul>
                                    <Bulletpoint
                                        fill="none"
                                        bulletpointSize={bulletpointSize}
                                    >
                                        Trio Classico - Franz Danzi, Trios, Op. 71 mit Ancient Music Edition
                                    </Bulletpoint>
                                    <Bulletpoint
                                        fill="none"
                                        bulletpointSize={bulletpointSize}
                                    >
                                        Reflections - Flöte und Gitarre mit Daminus Records
                                    </Bulletpoint>
                                    <InfoBanner />
                                </ul>
                            </Bulletpoint>
                            <Bulletpoint bulletpointSize={bulletpointSize}>
                                <strong className="font-semibold">Fortbildungen</strong> gehalten im Rahmen des „JeKi
                                Tages“ der Landesinstitut für Lehrerbildung und Schulentwicklung Hamburg.
                            </Bulletpoint>
                            <Bulletpoint bulletpointSize={bulletpointSize}>
                                <strong className="font-semibold">Wettbewerbe</strong> - Erfolgreiche Teilnahme mehrerer
                                Schüler bei Jugendmusiziert und Bundeswettbewerben.
                            </Bulletpoint>
                        </ul>
                    </article>
                </main>
                <aside className={`w-4/12 flex justify-end`}>
                    <ul className="w-max flex flex-col gap-5">
                        <LinkCard
                            description="Kammermusik mit historischen Instrumenten"
                            url="trioclassico.de"
                        />
                        <LinkCard
                            description="Barock und Klassik auf historischen Instrumenten"
                            url="ilclavifiato.de"
                        />
                        <LinkCard
                            description="„Flöte x Historisch“"
                            descriptionStyle="items-end mt-2"
                            subText="Vortragskonzerte mit historischen Travers- und Querflöten"
                            subTextStyle="mb-3 leading-5"
                            url="flötehistorisch.de"
                            actualLink="https://lonniinman.wixsite.com/fl-te-mal-historisch"
                        />
                    </ul>
                </aside>
            </section>
        </MainLayout>
    );
}

const InfoBanner = () => {
    return (
        <div className="relative px-10 py-3 my-5 mx-auto w-max flex flex-col gap-2 rounded-lg shadow-flat text-center whitespace-pre">
            <span className="inline-block px-2 w-max mx-auto my-0 border-b-1 border-slate-600">
                Bestellen per eMail:
            </span>
            <div>
                <span className="font-semibold font-secondary tracking-wider">lonni.inman@gmx.de</span>
                || 12eur + Versand
            </div>
            <MySVG.Cart
                className="absolute -top-3 left-5"
                size={30}
            />
        </div>
    );
};
