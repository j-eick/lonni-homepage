import { allVideoLinks } from "@/lib/videoLinks";

type SideVideosProps = {
    width?: number;
    height?: number;
};

export default function SideVideos({ width = 290, height = 155 }: SideVideosProps) {
    return (
        <aside className="grow p-5  h-max">
            <ul className={`flex flex-col gap-5`}>
                {allVideoLinks.map(link => (
                    <li
                        key={link}
                        className="w-max overflow-hidden rounded-3xl border-white"
                    >
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
