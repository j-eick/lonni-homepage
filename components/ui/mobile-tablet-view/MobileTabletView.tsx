import Header from "./header/Header";
import { ReactNode } from "react";

export default function MobileTablet({ children }: { children: ReactNode }) {
    return (
        <div className="h-full w-screen pt-14">
            <div className="min-h-full w-8.5/10 mx-auto my-0 flex flex-col">
                <Header
                    className="relative flex w-full mb-14"
                    link1="Home"
                    link2="Unterricht"
                    link3="Projekte"
                    link4="Auftritte & CDs"
                    link5="Kontakt"
                />

                {/* vvv---vvv PER PAGE CONTENT GOES HERE vvv---vvv */}
                <section className="w-9/10 mx-auto my-0 flex gap-3">{children}</section>
            </div>
        </div>
    );
}
