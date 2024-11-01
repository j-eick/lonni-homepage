import Link from "next/link";
import navStyle from "../../home/home.desktop.module.css";

type NavProps = {
    className?: string;
};
export default function Nav({ className }: NavProps) {
    return (
        <nav className={className}>
            <Link
                href="/home"
                className={navStyle.link}
            >
                Home
            </Link>
            <Link
                href="/home/ausbildung"
                className={navStyle.link}
            >
                Ausbildung
            </Link>
            <Link
                href="/home/künstlerischeTätigkeit"
                className={navStyle.link}
            >
                Künstlerische Tätigkeit
            </Link>
            <Link
                href="/home/pädagogischeErfahrung"
                className={navStyle.link}
            >
                Pädagogische Erfahrung
            </Link>
            <Link
                href="/home/links"
                className={navStyle.link}
            >
                Links
            </Link>
            <Link
                href="/home/kontakt"
                className={navStyle.link}
            >
                Kontakt
            </Link>
        </nav>
    );
}
