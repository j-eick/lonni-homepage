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
                            w-9/10 mx-auto 
                            mt-content_top-mobile 
                            mb-content_bottom-mobile
                            2xs:w-10/12
                            md-768:w-9/12 
                            md-768:mt-content_top-desktop 
                            md-768:mb-content_bottom-desktop
                            `}
            >
                <h1 className="relative mb-pageTitle font-secondary">
                    <span
                        className={`
                            xss-320:text-size-pageTitle-mobile
                            sm-620:text-size-pageTitle-desktop
                            `}
                    >
                        Projekte
                    </span>
                    <span
                        className={`
                                    absolute block w-full bottom-pageTitle-underline border-b-1.5 border-slate-700/40
                                    xss-320:border-b-1
                                `}
                    />
                </h1>
                <div className="w-full flex gap-5">
                    <article
                        className={`w-full
                                    sm-620:leading-mobile
                                    2md-875:leading-desktop`}
                    >
                        <ul className="flowText hyphens-auto">
                            <strong className="font-CreatoDisplay text-gray-500/60">Auftritte</strong>
                            <ul className="flowText">
                                <Bulletpoint active={true}>
                                    Teilnahme an diversen Barockorchestern in Norddeutschland.
                                </Bulletpoint>
                                <Bulletpoint active={true}>
                                    Konzertreisen und Rundfunk- und Fernsehauftritte.
                                </Bulletpoint>
                                <Bulletpoint active={true}>Onlineauftritte zu verschiedenen Themen.</Bulletpoint>
                            </ul>

                            <strong className="font-CreatoDisplay text-gray-500/60">Dozentin</strong>
                            <ul className="flowText">
                                <Bulletpoint active={true}>
                                    Fortbildungen gehalten im Rahmen des „JeKi Tages“ der Landesinstitut für
                                    Lehrerbildung und Schulentwicklung Hamburg.
                                </Bulletpoint>
                            </ul>
                            <strong className="font-CreatoDisplay text-gray-500/60">Wettbewerbe</strong>
                            <Bulletpoint active={true}>
                                Erfolgreiche Teilnahme mehrerer Schüler bei Jugendmusiziert und Bundeswettbewerben.
                            </Bulletpoint>
                        </ul>
                        <br />
                        <h1 className="relative mb-pageTitle font-secondary">
                            <span
                                className={`xss-320:text-size-pageTitle-mobile
                                            sm-620:text-size-pageTitle-desktop`}
                            >
                                CDs
                            </span>
                            <span
                                className={`
                                    absolute block w-full bottom-pageTitle-underline-modded 
                                    border-b-1.5 border-slate-700/40
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
                            <br className="md-768:hidden" />
                        </ul>
                        <InfoBanner />
                        <br />
                        <br className="md-768:hidden" />
                        <h1 className="relative mb-pageTitle  font-secondary">
                            <span
                                className={`
                                xss-320:text-size-pageTitle-mobile
                                sm-620:text-size-pageTitle-desktop`}
                            >
                                Online-Projekte
                            </span>
                            <span
                                className={`
                                    absolute block w-full bottom-pageTitle-underline-modded 
                                    border-b-1.5 border-slate-700/40
                                    xss-320:border-b-1
                                `}
                            />
                        </h1>
                        <ul
                            className={`
                                w-full flex flex-wrap gap-projectLinks justify-center pt-[1vw]
                            `}
                        >
                            <LinkCard
                                description="Kammermusik mit historischen Instrumenten"
                                url="trioclassico.de"
                                photo={trioclassico}
                                photoStyle="transform -translate-y-3 grow"
                                width={250}
                            />
                            <LinkCard
                                description="Barock und Klassik auf historischen Instrumenten"
                                url="ilclavifiato.de"
                                photo={ilclavifiato}
                                photoStyle="transform -translate-y-5 grow"
                                width={250}
                            />
                            <LinkCard
                                description="„Flöte x Historisch“"
                                descriptionStyle="items-end"
                                subText="Vortragskonzerte mit historischen Travers- und Querflöten"
                                subTextStyle="mb-3 leading-5"
                                url="flötehistorisch.de"
                                actualLink="https://lonniinman.wixsite.com/fl-te-mal-historisch"
                                photo={floeteHistorisch}
                                width={250}
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
        <>
            {/* ----- Mobile ----- */}
            <div
                className={`font-secondary rounded-lg shadow-flat bg-slate-200/60
                            text-size-mobile-2xs
                            md-768:hidden`}
            >
                <div className={`relative p-3 flex`}>
                    <div
                        className={`absolute z-10 -top-5 left-1/2 -translate-x-1/2 
                                flex gap-2 items-center
                                px-5 py-1 rounded-full border-[.5px] border-slate-600/40 bg-slate-200`}
                    >
                        <MySVG.Cart
                            size={25}
                            className="mx-auto"
                        />
                        <span className="font-black">Bestellen</span>
                    </div>
                    <div className="w-full flex-col pt-infoBox text-center leading-8">
                        <span className="block px-3">
                            eMail an: <br />
                            {/* <div
                                className={`absolute w-11/12 left-1/2 -translate-x-1/2  
                                        bottom border-b-1 border-slate-500/40`}
                            /> */}
                        </span>
                        <span
                            className={`px-3 flex items-center justify-center
                                        tracking-wider font-semibold
                            `}
                        >
                            lonni.inman@gmx.de
                        </span>
                        {/* <div className="absolute h-full top-0 right-0 border-r-1 border-slate-700/40" /> */}
                    </div>
                </div>
                <p className="text-center text-size-smaller">[ 12eur + Versand ]</p>
            </div>

            {/* ----- Desktop ----- */}
            <div
                className={`relative px-10 py-3 my-5 mx-auto w-max flex flex-col flex-wrap gap-2
                        font-secondary rounded-lg shadow-flat text-center 
                        whitespace-pre bg-slate-200/60
                        xss-320:hidden
                        md-768:block
                        `}
            >
                <span className="inline-block px-2 w-max mx-auto my-0 border-b-1 border-slate-600">
                    Bestellen per eMail:
                </span>
                <div className="mt-3 flex items-center flex-wrap gap-3">
                    <span className="inline-block font-semibold tracking-wider">lonni.inman@gmx.de</span>
                    <FaRightLong />
                    12eur + Versand
                </div>
                <MySVG.Cart
                    className="absolute -top-3 left-5"
                    size={30}
                />
            </div>
        </>
    );
};
