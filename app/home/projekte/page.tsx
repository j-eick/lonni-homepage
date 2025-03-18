"use client";

// import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import LinkCard from "@/components/ui/link-card/LinkCard";
import { MySVG } from "@/lib/MySVG";
import Bulletpoint from "@/components/ui/bulletpoint/Bulletpoint";
import PageTitle from "@/components/ui/page-title/PageTitle";
import { FaRightLong } from "react-icons/fa6";
import trioclassico from "../../../public/content/trioclassico.jpg";
import ilclavifiato from "../../../public/content/ilclavifiato.jpg";
import floeteHistorisch from "../../../public/content/floeteHistorisch.jpg";
import useWindowSize from "@/app/hooks/useWindowSize";
import "../../globals.css";

export default function Home() {
    const windowSize = useWindowSize();
    const bulletpointSize = 14;

    return (
        <MainLayout>
            <main
                className={`grow 
                            w-9/10 mx-auto flowText 
                            mt-content_top-mobile 
                            mb-content_bottom-mobile
                            2xs:w-10/12
                            2xs:text-size-mobile-2xs
                            md-768:w-8/10 
                            md-768:mt-content_top-desktop 
                            md-768:mb-content_bottom-desktop
                            `}
            >
                <h1 className="relative mb-pageTitle font-secondary">
                    <span
                        className={`
                                xss-320:text-size-restPageTitle-mobile`}
                    >
                        Projekte
                    </span>
                    <span
                        className={`
                                    absolute block w-full bottom-1 border-b-1.5 border-slate-700/40
                                    xss-320:border-b-1
                                `}
                    />
                </h1>
                <div className="w-full flex gap-5">
                    <article
                        className={`w-full flowText 
                                    2xs:leading-7 
                                    sm-620:leading-regularText
                                    md:text-size-desktop-md`}
                    >
                        <ul className="flowText hyphens-auto">
                            <Bulletpoint active={true}>
                                <strong className="font-semibold">Auftritte</strong>
                                <Bulletpoint
                                    active={true}
                                    fill="none"
                                >
                                    Teilnahme an diversen Barockorchestern in Norddeutschland.
                                </Bulletpoint>
                                <Bulletpoint
                                    active={true}
                                    fill="none"
                                >
                                    Konzertreisen und Rundfunk- und Fernsehauftritte.
                                </Bulletpoint>
                                <Bulletpoint
                                    active={true}
                                    fill="none"
                                >
                                    Onlineauftritte zu verschiedenen Themen.
                                </Bulletpoint>
                            </Bulletpoint>
                            <Bulletpoint
                                active={true}
                                classname=""
                            >
                                <strong className="font-semibold">Fortbildungen</strong> gehalten im Rahmen des „JeKi
                                Tages“ der Landesinstitut für Lehrerbildung und Schulentwicklung Hamburg.
                            </Bulletpoint>
                            <Bulletpoint active={true}>
                                <strong className="font-semibold">Wettbewerbe</strong> - Erfolgreiche Teilnahme mehrerer
                                Schüler bei Jugendmusiziert und Bundeswettbewerben.
                            </Bulletpoint>
                        </ul>
                        <br />
                        <h1 className="relative mb-pageTitle font-secondary">
                            <span
                                className={`
                                xss-320:text-size-restPageTitle-mobile`}
                            >
                                CD-Aufnahmen
                            </span>
                            <span
                                className={`
                                    absolute block w-full bottom-1 border-b-1.5 border-slate-700/40
                                    xss-320:border-b-1
                                `}
                            />
                        </h1>
                        <ul className="flowText ">
                            <Bulletpoint
                                classname="relative"
                                active={true}
                            >
                                Trio Classico - Franz Danzi, Trios, Op. 71 mit Ancient Music Edition
                            </Bulletpoint>
                            <Bulletpoint active={true}>Reflections - Flöte und Gitarre mit Daminus Records</Bulletpoint>
                            <br />
                            <InfoBanner />
                        </ul>
                        <br />
                        <h1 className="relative mb-pageTitle font-secondary">
                            <span
                                className={`
                                xss-320:text-size-restPageTitle-mobile`}
                            >
                                Online-Projekte
                            </span>
                            <span
                                className={`
                                    absolute block w-full bottom-1 border-b-1.5 border-slate-700/40
                                    xss-320:border-b-1
                                `}
                            />
                        </h1>
                        <ul
                            className={`
                                w-full flex flex-wrap gap-[clamp(20px, 3.5vw, 40px)] justify-center pt-[1vw]
                            `}
                        >
                            <LinkCard
                                description="Kammermusik mit historischen Instrumenten"
                                url="trioclassico.de"
                                photo={trioclassico}
                                photoStyle="transform -translate-y-3 grow"
                                width={270}
                            />
                            <LinkCard
                                description="Barock und Klassik auf historischen Instrumenten"
                                url="ilclavifiato.de"
                                photo={ilclavifiato}
                                photoStyle="transform -translate-y-5 grow"
                                width={270}
                            />
                            <LinkCard
                                description="„Flöte x Historisch“"
                                descriptionStyle="items-end"
                                subText="Vortragskonzerte mit historischen Travers- und Querflöten"
                                subTextStyle="mb-3 leading-5"
                                url="flötehistorisch.de"
                                actualLink="https://lonniinman.wixsite.com/fl-te-mal-historisch"
                                photo={floeteHistorisch}
                                width={270}
                                photoStyle="grow"
                            />
                        </ul>
                    </article>
                    {/* <aside className={`grow w-4/12 flex justify-center`}>
                        <ul className="w-max flex flex-col gap-7">
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
                    </aside> */}
                </div>
            </main>
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
