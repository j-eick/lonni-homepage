import useWindowSize from "@/app/hooks/useWindowSize";
import { ReactNode } from "react";
// import styles from "./MovingBanner.module.css";

export default function MainLayout({ children }: { children: ReactNode }) {
    const windowSize = useWindowSize();

    return (
        <div className="h-full w-screen relative no-scrollbar overflow-scroll">
            {/* <div className={`absolute top-10 bb ${styles.bannerContainer}`}>
                <p className={styles.movingBanner}>This is information</p>
            </div> */}
            <div
                className={`w-full 
                            md:pt-5 md:pb-20
                        `}
            >
                <p className={`absolute top-2 right-2`}>{windowSize.width}px</p>
                <div
                    className={`min-h-full max-w-canvas--1270px overflow-hidden
                                mx-auto my-0 flex flex-col
                                font-geosans text-size-default text-color-primary
                                md:w-8.5/10
                                `}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
