import styles from "../page.module.css";

import { useEffect, useState } from "react";

type WindowProps = {
    width: number;
    height: number;
};

export default function useWindowSize() {
    const [windowSize, setwindowSize] = useState<WindowProps>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const WidthInfo = () => {
        return <p className={styles.resizeInfo}>{windowSize.width}px</p>;
    };

    useEffect(() => {
        const handleWindowListener = () => {
            setwindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleWindowListener);

        return () => {
            window.removeEventListener("resize", handleWindowListener);
        };
    }, []);

    return WidthInfo;
}
