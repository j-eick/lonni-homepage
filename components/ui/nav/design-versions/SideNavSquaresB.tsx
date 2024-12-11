import Link from "next/link";
import React from "react";

export default function SideNavSquaresB() {
    return (
        <aside
            className={`
                            w-full
                            col-start-1 col-end-6
                            row-start-2 row-end-12
                            `}
        >
            <nav
                className={`h-full grid grid-cols-12 grid-rows-16`}
                id="startpage-navItems"
            >
                <Link
                    href={"/home"}
                    className={`
                                    col-start-3 col-end-7
                                    row-start-3 row-end-5
                                    `}
                >
                    Willkommen!
                </Link>
                <Link
                    href={"/home/unterricht"}
                    className={`z-10
                                    col-start-3 col-end-9
                                    row-start-5 row-end-9
                                    `}
                >
                    Unterricht
                </Link>
                <Link
                    href={""}
                    className={`z-20
                                    col-start-6 col-end-11
                                    row-start-8 row-end-11`}
                >
                    Künsterlische Tätigkeiten
                </Link>
                <Link
                    href={""}
                    className={`z-10
                                    bb bg-blue-400
                                    col-start-6 col-end-11
                                    row-start-12 row-end-15`}
                >
                    Auftritte & CDs
                </Link>
                <Link
                    href={""}
                    className={`bg-slate-400
                                    col-start-3 col-end-8
                                    row-start-14 row-end-17`}
                >
                    Kontakt
                </Link>
            </nav>
        </aside>
    );
}
