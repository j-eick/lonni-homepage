import Link from "next/link";
import { MySVG } from "../MySVG";

export const AuftritteCds = () => {
    const bulletpointClasses = "flex place-items-start gap-2";
    const bulletpointSize = 12;
    const bulletpointPosition = "pt-2";

    return (
        <>
            <div className={bulletpointClasses}>
                <span className={bulletpointPosition}>
                    <MySVG.BulletItemArrow size={bulletpointSize} />
                </span>
                <section>
                    <p>Vortrags Konzerte mit historische Travers- und Querflöten</p>
                    <p>„Flöte mal Historisch“ => <Link href="Seite besuchen">Seite besuchen</Link></p>
                </section>
            </div>
            <div className={bulletpointClasses}>
                <span className={bulletpointPosition}>
                    <MySVG.BulletItemArrow size={bulletpointSize} />
                </span>
                <section className="flex-col">
                    <p>Orchester-Tätigkeit in diverse Barockorchestern in Norddeutschland</p>
                    <p>Konzertreisen und Rundfunk- und Fernsehauftritte</p>
                    <p>CD-Aufnahmen</p>
                    <p>Trio Classico - Franz Danzi, Trios, Op. 71 mit Ancient Music Edition</p>
                    <p>
                        Reflections - Flöte und Gitarre mit Daminus Records (zu bestellen per email: lonni.inman@gmx.de
                        - €12, plus Versand)
                    </p>
                </section>
            </div>
            <div className={bulletpointClasses}>
                <span className={bulletpointPosition}>
                    <MySVG.BulletItemArrow size={bulletpointSize} />
                </span>
                <p>
                    Mehrmals im Rahmen des „JeKi Tages“ der Landesinstitut für Lehrerbildung und Schulentwicklung
                    Hamburg Fortbildungen gehalten
                </p>
            </div>
        </>
    );
};
