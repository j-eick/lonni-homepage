import { allVideoLinks } from "@/lib/videoLinks";

type SideVideosProps = {
    width?: number;
    height?: number;
};

export default function SideVideos({ width = 300, height = 200 }: SideVideosProps) {
    return (
        <aside className="grow p-5 bb h-max">
            <ul className="flex flex-col gap-3">
                {allVideoLinks.map(link => (
                    <li key={link}>
                        <iframe
                            src={link}
                            width={width}
                            height={height}
                        />
                    </li>
                ))}
            </ul>
        </aside>
    );
}
