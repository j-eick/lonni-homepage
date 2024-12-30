import { MySVG } from "../MySVG";

const bulletpointClasses = "flex place-items-start gap-2";
const bulletpointSize = 12;
const bulletpointPosition = "pt-2";

export const kontakt = (
    <>
        <div className={bulletpointClasses}>
            <p>Für Buchung und Anfragen für Unterricht, Konzerte oder Workshops: </p>
        </div>
        <div className={bulletpointClasses}>
            <span className={bulletpointPosition}>
                <MySVG.BulletItemArrow size={bulletpointSize} />
            </span>
            <p>Telefon: 040/56 32 01</p>
        </div>
        <div className={bulletpointClasses}>
            <span className={bulletpointPosition}>
                <MySVG.BulletItemArrow size={bulletpointSize} />
            </span>
            <p>Mobile: +49162 332 3355</p>
        </div>
        <div className={bulletpointClasses}>
            <span className={bulletpointPosition}>
                <MySVG.BulletItemArrow size={bulletpointSize} />
            </span>
            <p>E-Mail: lonni.inman@gmx.de</p>
        </div>
        <div className={bulletpointClasses}>
            <span className={bulletpointPosition}>
                <MySVG.BulletItemArrow size={bulletpointSize} />
            </span>
            <p>Adresse: Beethovenallee 14 22529 Hamburg</p>
        </div>
    </>
);
