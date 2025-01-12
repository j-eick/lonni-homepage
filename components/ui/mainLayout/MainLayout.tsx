import useWindowSize from "@/app/hooks/useWindowSize";
import { ReactNode } from "react";
// import styles from "./MovingBanner.module.css";

export default function MainLayout({ children }: { children: ReactNode }) {
    const windowSize = useWindowSize();

    return (
        <div className="h-full w-screen relative">
            {/* <div className={`absolute top-10 bb ${styles.bannerContainer}`}>
                <p className={styles.movingBanner}>This is information</p>
            </div> */}
            <div className="w-screen pt-10">
                <p className={`absolute top-2 right-2`}>{windowSize.width}px</p>
                <div className="min-h-full w-8.5/10 max-w-[1273px] mx-auto my-0 flex flex-col">{children}</div>
            </div>
        </div>
    );
}
