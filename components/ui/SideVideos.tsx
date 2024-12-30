import { allVideoLinks } from "@/lib/videoLinks";

export default function SideVideos() {
    return (
        <aside className="grow p-5 bb h-max">
            <ul className="flex flex-col gap-3">
                {allVideoLinks.map((link, i) => (
                    // <li key={link}></li>
                    <iframe
                        key={i}
                        src={link}
                        allowFullScreen
                    />
                ))}
            </ul>
        </aside>
    );
}
