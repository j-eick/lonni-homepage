import Image, { StaticImageData } from "next/image";

type ImageProp = {
    className?: string;
    src: string | StaticImageData;
    alt: string;
};

export default function MyImage({ className, src, alt }: ImageProp) {
    return (
        <div className={className}>
            <Image
                src={src}
                alt={alt}
                className="w-auto h-auto object-contain block"
            />
        </div>
    );
}
