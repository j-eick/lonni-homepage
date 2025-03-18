import Bulletpoint from "@/components/ui/bulletpoint/Bulletpoint";

export default function AuftritteCds() {
    const bulletpointSize = 14;

    return (
        <>
            <Bulletpoint size={bulletpointSize}>
                Dozentin-Tätigkeit als Privat-Lehrerin und an der Staatlichen Jugendmusikschule Hamburg seit 1984 in den
                Standorten Gymnasium Bondenwald und Albert-Schweitzer-Gymnasium in Hamburg.
            </Bulletpoint>
            <Bulletpoint size={bulletpointSize}>
                Als Pionierin des Gruppenunterrichts und Schulkooperations Hamburg weit bekannt.
            </Bulletpoint>
            <Bulletpoint size={bulletpointSize}>
                Workshop Leiterin mehrmals an Pädagogischen Jahreskonferenzen der Staatliche Jugendmusikschule z.B.{" "}
                <span className="italic">"Wie kommt man in der Puste?"</span> und "Musikspiele - Spiele mit Musik -
                Spiele für den Instrumentalen Gruppenunterricht"
            </Bulletpoint>
            <Bulletpoint size={bulletpointSize}>
                Mehrmals im Rahmen des „JeKi Tages“ der Landesinstitut für Lehrerbildung und Schulentwicklung Hamburg
                Fortbildungen gehalten
            </Bulletpoint>
            <Bulletpoint size={bulletpointSize}>
                Erfolgreiche Teilnahme von diverse Schüler an Wettbewerbe, u.a. Jugendmusiziert bis zum Bundeswettbewerb
            </Bulletpoint>
        </>
    );
}
