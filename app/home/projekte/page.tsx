"use client";

// import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import "../../globals.css";
import LinkCard from "@/components/ui/link-card/LinkCard";
import { MySVG } from "@/lib/MySVG";
import Bulletpoint from "@/components/ui/bulletpoint/Bulletpoint";
import PageTitle from "@/components/ui/page-title/PageTitle";
import { FaRightLong } from "react-icons/fa6";
import trioclassico from "../../../public/content/trioclassico.jpg";
import ilclavifiato from "../../../public/content/ilclavifiato.jpg";
import floeteHistorisch from "../../../public/content/floeteHistorisch.jpg";

export default function Home() {
    const bulletpointSize = 14;

    return (
        <MainLayout>
            {/* -----  PER PAGE CONTENT GOES HERE  ----- */}
            <section className={`grow w-9/10 mx-auto my-0 flex flex-col`}>
                <PageTitle
                    firstLetter="P"
                    rest="rojekte & CDs"
                />
                <div className="flex">
                    <main className={`w-8/12`}>
                        <article className="">
                            <ul className="pr-10 flowText">
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
                                    <strong className="font-semibold">Fortbildungen</strong> gehalten im Rahmen des
                                    „JeKi Tages“ der Landesinstitut für Lehrerbildung und Schulentwicklung Hamburg.
                                </Bulletpoint>
                                <Bulletpoint bulletpointSize={bulletpointSize}>
                                    <strong className="font-semibold">Wettbewerbe</strong> - Erfolgreiche Teilnahme
                                    mehrerer Schüler bei Jugendmusiziert und Bundeswettbewerben.
                                </Bulletpoint>
                            </ul>
                        </article>
                    </main>
                    <aside className={`grow w-4/12 flex justify-center`}>
                        <ul className="w-max p-5 flex flex-col gap-7">
                            <LinkCard
                                description="Kammermusik mit historischen Instrumenten"
                                url="trioclassico.de"
                                photo={trioclassico}
                            />
                            <LinkCard
                                description="Barock und Klassik auf historischen Instrumenten"
                                url="ilclavifiato.de"
                                photo={ilclavifiato}
                            />
                            <LinkCard
                                description="„Flöte x Historisch“"
                                descriptionStyle="items-end"
                                subText="Vortragskonzerte mit historischen Travers- und Querflöten"
                                subTextStyle="mb-3 leading-5"
                                url="flötehistorisch.de"
                                actualLink="https://lonniinman.wixsite.com/fl-te-mal-historisch"
                                photo={floeteHistorisch}
                            />
                        </ul>
                    </aside>
                </div>
            </section>
        </MainLayout>
    );
}

const InfoBanner = () => {
    return (
        <div
            className={`relative px-10 py-3 my-5 mx-auto w-max flex flex-col flex-wrap gap-2 
                        font-secondary rounded-lg shadow-flat text-center 
                        whitespace-pre bg-slate-200/60`}
        >
            <span className="inline-block px-2 w-max mx-auto my-0 border-b-1 border-slate-600">
                Bestellen per eMail:
            </span>
            <div className="flex items-center flex-wrap gap-3">
                <span className="inline-block font-semibold tracking-wider">lonni.inman@gmx.de</span>
                <FaRightLong />
                12eur + Versand
            </div>
            <MySVG.Cart
                className="absolute -top-3 left-5"
                size={30}
            />
        </div>
    );
};
