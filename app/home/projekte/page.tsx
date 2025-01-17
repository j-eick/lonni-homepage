"use client";

import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import "../../globals.css";
import LinkCard from "@/components/ui/link-card/LinkCard";
import { ReactNode } from "react";
import { MySVG } from "@/lib/MySVG";

export default function Home() {
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
                            <Bulletpoint>
                                <Pronounced>Onlineauftritte</Pronounced> zu verschiedenen Themen
                            </Bulletpoint>
                            <Bulletpoint>
                                <Pronounced>Orchester-Tätigkeit</Pronounced> in diversen Barockorchestern in
                                Norddeutschland
                            </Bulletpoint>
                            <Bulletpoint>
                                <Pronounced>Konzertreisen</Pronounced> und Rundfunk- und Fernsehauftritte
                            </Bulletpoint>
                            <Bulletpoint classname="relative">
                                <Pronounced>CD-Aufnahmen</Pronounced>
                                <ul>
                                    <Bulletpoint fill="none">
                                        Trio Classico - Franz Danzi, Trios, Op. 71 mit Ancient Music Edition
                                    </Bulletpoint>
                                    <Bulletpoint fill="none">
                                        Reflections - Flöte und Gitarre mit Daminus Records
                                    </Bulletpoint>
                                    <InfoBanner />
                                </ul>
                            </Bulletpoint>
                            <Bulletpoint>
                                <Pronounced>Fortbildungen</Pronounced> gehalten im Rahmen des „JeKi Tages“ der
                                Landesinstitut für Lehrerbildung und Schulentwicklung Hamburg.
                            </Bulletpoint>
                            <Bulletpoint>
                                <Pronounced>Wettbewerbe</Pronounced> - Erfolgreiche Teilnahme mehrerer Schüler bei
                                Jugendmusiziert und Bundeswettbewerben.
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

const Pronounced = ({ children }: { children: ReactNode }) => {
    return <strong className="font-semibold">{children}</strong>;
};

const bulletpointClasses = "flex place-items-start gap-4";
const bulletpointSize = 14;
const bulletpointPosition = "pt-2";

type BulletpointProps = {
    children: ReactNode;
    size?: number;
    fill?: "none" | "currentColor";
    classname?: string;
};

const Bulletpoint = ({ children, size = bulletpointSize, fill = "currentColor", classname }: BulletpointProps) => {
    return (
        <li className={`${bulletpointClasses} ${classname}`}>
            <span className={bulletpointPosition}>
                <MySVG.BulletItemArrow
                    size={size}
                    fill={fill}
                />
            </span>
            <div>{children}</div>
        </li>
    );
};

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
