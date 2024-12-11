import Link from "next/link";
import { usePathname } from "next/navigation";

type SideNavProps = {
    className: string;
};

// SideNavSquares-Shape version A
export default function SideNavSquaresA({ className }: SideNavProps) {
    const path = usePathname();

    return (
        <aside className={className}>
            <nav
                className={`h-full grid grid-cols-12 grid-rows-16`}
                id="startpage-navItems"
            >
                <Link
                    href={"/home"}
                    className={`z-20
                                col-start-6 col-end-11
                                row-start-2 row-end-5
                                `}
                >
                    Willkommen!
                </Link>
                <Link
                    href={"/home/unterricht"}
                    className={`z-10
                                col-start-2 col-end-9
                                row-start-4 row-end-8
                                ${path === "unterricht" ? "bg-selected" : ""}
                                `}
                >
                    Unterricht
                </Link>
                <Link
                    href={""}
                    className={`z-10
                                col-start-5 col-end-10
                                row-start-7 row-end-10`}
                >
                    Künsterlische Tätigkeiten
                </Link>
                <Link
                    href={""}
                    className={`bb bg-blue-400
                                col-start-2 col-end-7
                                row-start-12 row-end-15`}
                >
                    Auftritte & CDs
                </Link>
                <Link
                    href={""}
                    className={`bb bg-slate-400
                                col-start-5 col-end-10
                                row-start-14 row-end-16`}
                >
                    Kontakt
                </Link>
            </nav>
        </aside>
    );
}
