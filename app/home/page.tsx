"use client";

import desktop from "./desktop.module.css";
import useWindowSize from "../hooks/useWindowSize";
import Nav from "../components/nav/Nav";

export default function Home() {
    const windowSize = useWindowSize();
    return (
        <div className={desktop.canvas}>
            <p className={`${desktop.resizeInfo}`}>{windowSize.width}px</p>
            <main className={` ${desktop.main}`}>
                <Nav />
                <article className={desktop.content}>
                    <div className={desktop.titleContainer}>
                        <h1 className={desktop.titleText}>Herzlich Willkommen</h1>
                    </div>
                    <p className={desktop.text}>
                        Schön, dass Sie hier sind! Mein Name ist [Ihr Name], und ich bin leidenschaftliche
                        Querflötistin. Ich teile gerne meine Begeisterung für die Musik – sei es durch individuellen
                        Unterricht oder bei Auftritten, die Ihre Veranstaltungen bereichern.
                        <br />
                        <br />
                        Mit meiner Erfahrung im Unterrichten habe ich zahlreichen Schülerinnen und Schülern geholfen,
                        ihre musikalischen Ziele zu erreichen. Mein Ansatz kombiniert technische Schulung mit der Freude
                        an der Musik. Ich glaube, dass Musik eine wertvolle Möglichkeit ist, sich auszudrücken und
                        Selbstvertrauen zu entwickeln.
                        <br />
                        Egal, ob Sie Anfänger sind oder bereits fortgeschrittene Fähigkeiten besitzen – ich freue mich
                        darauf, gemeinsam mit Ihnen an Ihrer Querflötenkunst zu arbeiten. Lassen Sie uns zusammen die
                        Möglichkeiten der Musik erkunden.
                        <br />
                        <br />
                        Ich lade Sie ein, mehr über meine Angebote zu erfahren und freue mich darauf, Sie bald
                        kennenzulernen!
                        <br />
                        Mit besten Grüßen,
                        <br />
                        [Ihr Name]
                    </p>
                </article>
                <section className={desktop.profile}>Profile</section>
            </main>
            <footer className={desktop.footer}>(c) Joschka Eickhoff, 2024</footer>
        </div>
    );
}
