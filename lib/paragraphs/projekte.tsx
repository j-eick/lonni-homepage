import LinkCard from "@/components/ui/link-card/LinkCard";
import { MySVG } from "../MySVG";

const bulletpointClasses = "flex place-items-start gap-2";
const bulletpointSize = 12;
const bulletpointPosition = "pt-2";

export const projekte = (
    <div className="h-full pr-10 flowText">
        <div className="flex gap-5">
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
                subTextStyle="mb-3 1230px:leading-5"
                url="flötehistorisch.de"
                actualLink="https://lonniinman.wixsite.com/fl-te-mal-historisch"
            />
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
    </div>
);

{
    /* <>
    <div className={bulletpointClasses}>
        <span className={bulletpointPosition}>
            <MySVG.BulletItemArrow size={bulletpointSize} />
        </span>
        <div className="flex gap-5">
            <p className="mb-3">
                Kammermusik mit historischen Instrumenten. <br /> Mehr dazu unter folgenden Links.
            </p>
            <div
                className={`mb-3 grow
                                flex flex-col justify-around font-pagelinks tracking-wider text-2xl`}
            >
                <span className="grow">www.trioclassico.de</span>
                <span className="grow">www.ilclavifiato.de</span>
            </div>
        </div>
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
                Reflections - Flöte und Gitarre mit Daminus Records (zu bestellen per email: lonni.inman@gmx.de - €12,
                plus Versand)
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
        <p>erfolgreiche Teilnahme von diverse Schüler an Wettbewerbe, u.a. Jugendmusiziert bis zum Bundeswettbewerb</p>
    </div>
</>; */
}
