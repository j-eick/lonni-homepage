import { MySVG } from "../MySVG";

const bulletpointClasses = "flex place-items-start gap-2";
const bulletpointSize = 12;
const bulletpointPosition = "pt-2";

export const projekte = (
    <>
        <div className={bulletpointClasses}>
            <span className={bulletpointPosition}>
                <MySVG.BulletItemArrow size={bulletpointSize} />
            </span>
            <section className="flex-col">
                <p>Kammermusik mit historischen Instrumenten mit</p>
                <p>„Trio Classico“ (www.trioclassico.de)</p>
                <p>„Il Clavifiato“ (www.ilclavifiato.de)</p>
            </section>
        </div>
        <div className={bulletpointClasses}>
            <span className={bulletpointPosition}>
                <MySVG.BulletItemArrow size={bulletpointSize} />
            </span>
            <p>Vortrags Konzerte mit historische Travers- und Querflöten</p>
            <p>„Flöte mal Historisch“ https://lonniinman.wixsite.com/fl-te-mal-historisch</p>
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
                    Reflections - Flöte und Gitarre mit Daminus Records (zu bestellen per email: lonni.inman@gmx.de -
                    €12, plus Versand)
                </p>
            </section>
        </div>
        <div className={bulletpointClasses}>
            <span className={bulletpointPosition}>
                <MySVG.BulletItemArrow size={bulletpointSize} />
            </span>
            <p>
                Mehrmals im Rahmen des „JeKi Tages“ der Landesinstitut für Lehrerbildung und Schulentwicklung Hamburg
                Fortbildungen gehalten
            </p>
        </div>
        <div className={bulletpointClasses}>
            <span className={bulletpointPosition}>
                <MySVG.BulletItemArrow size={bulletpointSize} />
            </span>
            <p>
                erfolgreiche Teilnahme von diverse Schüler an Wettbewerbe, u.a. Jugendmusiziert bis zum Bundeswettbewerb
            </p>
        </div>
    </>
);
