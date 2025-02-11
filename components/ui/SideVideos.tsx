import { allVideoLinks } from "@/lib/videoLinks";
import { useEffect, useState } from "react";

type SideVideosProps = {
    width?: number;
    height?: number;
};

export default function SideVideos({ width = 290, height = 155 }: SideVideosProps) {
    const [hoveredThumbnail, setHoveredThumbnail] = useState<string>("");

    useEffect(() => {
        console.log(hoveredThumbnail);
    }, [hoveredThumbnail]);

    return (
        <aside className={`grow h-max pb-10 flex justify-end`}>
            <ul
                className={`p-5 mx-auto my-0 flex flex-col items-end gap-7 
                             `}
            >
                {allVideoLinks.map(link => (
                    <li
                        key={link.url}
                        className={`relative w-max mx-auto my-0 rounded-lg overflow-hidden  
                                    transition-all duration-300
                                    ${
                                        hoveredThumbnail === link.thumbnail
                                            ? "saturate-100 opacity-100 border-1 border-slate-200 shadow-step"
                                            : "saturate-50 opacity-70 border-1 border-slate-700 shadow-flat"
                                    }
                                  `}
                        onMouseEnter={() => setHoveredThumbnail(link.thumbnail)}
                        onMouseLeave={() => setHoveredThumbnail("")}
                    >
                        <iframe
                            src={link.url}
                            width={width}
                            height={height}
                            allowFullScreen
                        />
                        {/* ---------------------------------------- */}
                        {/* -----  Cover that hides Thumbnail  ----- */}
                        {/* ---------------------------------------- */}
                        {/* <div
                            className={`absolute z-10 inset-0 transition-all duration-500 ease-in-out
                                        ${hoveredThumbnail === link.thumbnail ? "opacity-0" : ""}
                                        `}
                            // onMouseEnter={() => setHoveredThumbnail(link.thumbnail)}
                            // onMouseLeave={() => setHoveredThumbnail("")}
                        >
                            <div className="relative">
                                <Image
                                    src={link.thumbnail}
                                    width={width}
                                    height={height}
                                    alt={""}
                                />
                                <div
                                    className={`absolute bottom-1.5 w-full h-14
                                                grid place-items-center 
                                                bg-slate-800/70 text-slate-200 font-secondary tracking-wider
                                                ${link.id === 2 ? "text-size-" : ""}`}
                                >
                                    {link.title}
                                </div>
                            </div>
                        </div> */}
                    </li>
                ))}
            </ul>
        </aside>
    );
}
