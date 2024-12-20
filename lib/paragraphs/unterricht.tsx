import { MySVG } from "../MySVG";

const bulletpointClasses = "flex place-items-start gap-2";
const bulletpointSize = 12;
const bulletpointPosition = "pt-2";

export const unterricht = (
    <>
        <div className={bulletpointClasses}>
            <span className={bulletpointPosition}>
                <MySVG.BulletItemArrow size={bulletpointSize} />
            </span>
            <p>
                Dozentin-Tätigkeit als Privat-Lehrerin und an der Staatlichen Jugendmusikschule Hamburg seit 1984 in den
                Standorten Gymnasium Bondenwald und Albert-Schweitzer-Gymnasium in Hamburg.
            </p>
        </div>
        <div className={bulletpointClasses}>
            <span className={bulletpointPosition}>
                <MySVG.BulletItemArrow size={bulletpointSize} />
            </span>
            <p>Als Pionierin des Gruppenunterrichts und Schulkooperations Hamburg weit bekannt</p>
        </div>
        <div className={bulletpointClasses}>
            <span className={bulletpointPosition}>
                <MySVG.BulletItemArrow size={bulletpointSize} />
            </span>
            <p>
                Workshop Leiterin mehrmals an Pädagogischen Jahreskonferenzen der Staatliche Jugendmusikschule z.B. 'Wie
                kommt man in der Puste?' und 'Musikspiele - Spiele mit Musik - Spiele für den Instrumentalen
                Gruppenunterricht'.
            </p>
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
