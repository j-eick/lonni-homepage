"use client";

import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import "../../globals.css";
import Bulletpoint from "@/components/ui/bulletpoint/Bulletpoint";
import Image from "next/image";
import UsedTools from "@/components/used-tools/UsedTools";

export default function Home() {
    const bulletpointSize = 14;

    return (
        <MainLayout>
            <Header />
            {/* vvv---vvv PER PAGE CONTENT GOES HERE vvv---vvv */}
            <section
                className={`grow 
                w-9/10 h-full mx-auto my-0 flex justify-center gap-5`}
            >
                <main className={`w-9/12 p-10 pb-20 `}>
                    <article
                        className={`flowText rounded-lg shadow-soft kontakPage-heavyRain
                                        relative`}
                    >
                        <Image
                            src={"/decoration/catSilhuette.svg"}
                            alt={""}
                            width={230}
                            className="absolute -top-16 right-0 -scale-x-100"
                        />
                        <div className="pt-16 pb-16 px-12">
                            <div
                                className={`flex flex-col gap-10 flowText
                                        mx-auto my-0`}
                            >
                                <div className="mx-auto my-0 font-secondary">
                                    <h1 className="mb-8 text-size-regularTitle border-b-1 border-color-primary">
                                        Für Buchung und Anfragen
                                        {/* Für Buchung und Anfragen für Unterricht, Konzerte oder Workshops: */}
                                    </h1>
                                    <div className="flex gap-5 pl-5">
                                        <ul className="flex flex-col gap-2">
                                            <Bulletpoint bulletpointSize={bulletpointSize}>
                                                <p>
                                                    <strong>Telefon</strong>
                                                </p>
                                            </Bulletpoint>
                                            <Bulletpoint bulletpointSize={bulletpointSize}>
                                                <p>
                                                    <strong>Mobile</strong>
                                                </p>
                                            </Bulletpoint>
                                            <Bulletpoint bulletpointSize={bulletpointSize}>
                                                <p>
                                                    <strong>E-Mail</strong>
                                                </p>
                                            </Bulletpoint>
                                            <Bulletpoint bulletpointSize={bulletpointSize}>
                                                <p>
                                                    <strong>Adresse</strong>
                                                </p>
                                            </Bulletpoint>
                                        </ul>
                                        <div className="flex flex-col gap-2">
                                            <span>040/56 32 01</span>
                                            <span>(+49)162 332 3355</span>
                                            <span>lonni.inman@gmx.de</span>
                                            <span>Beethovenallee 14 22529 Hamburg</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="w-max p-2 shadow-line rounded-md font-secondary text-size-small">
                                <div>Webdesign / Joschka Eickhoff</div>
                            </div> */}
                            </div>
                        </div>
                    </article>
                </main>
            </section>
        </MainLayout>
    );
}
