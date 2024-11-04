import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <Link
                href="/home"
                className={styles.link}
            >
                Home
            </Link>
            <Link
                href="/home/ausbildung"
                className={styles.link}
            >
                Ausbildung
            </Link>
            <Link
                href="/home/künstlerischeTätigkeit"
                className={styles.link}
            >
                Künstlerische Tätigkeit
            </Link>
            <Link
                href="/home/pädagogischeErfahrung"
                className={styles.link}
            >
                Pädagogische Erfahrung
            </Link>
            <Link
                href="/home/links"
                className={styles.link}
            >
                Links
            </Link>
            <Link
                href="/home/kontakt"
                className={styles.link}
            >
                Kontakt
            </Link>
        </nav>
    );
}
