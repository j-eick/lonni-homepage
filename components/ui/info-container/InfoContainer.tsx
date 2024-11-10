import React, { useEffect, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function InfoContainer() {
    const tickerRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ticker = tickerRef.current;
        if (!ticker) return;

        const animateTicker = () => {
            const containerWidth = ticker.parentElement?.clientWidth || 0;
            const tickerWidth = ticker.clientWidth;
            let position = containerWidth;

            const animate = () => {
                position--;
                ticker.style.transform = `translateX(${position}px)`;

                if (position < -tickerWidth) {
                    position = containerWidth;
                }

                requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
        };

        animateTicker();
    }, []);

    return (
        <section
            className={`row-start-1
                        h-full w-9/10 ml-auto
                        flex flex-col justify-start items-end
                        overflow-hidden`}
        >
            <div className="w-full whitespace-nowrap border-b-1 border-slate-600/50">
                <p
                    ref={tickerRef}
                    className="inline-block"
                    style={{ willChange: "transform" }}
                >
                    Information ticker... // Konzerte // CD-Verkauf...
                </p>
            </div>
            <div className="flex items-center gap-3">
                <span className="w-full text-right">Audio-Track...</span>
                <FaPlay />
                <FaPause />
            </div>
        </section>
    );
}
