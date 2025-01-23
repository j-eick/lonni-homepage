export const soloFlute = {
    id: 1,
    url: "https://www.youtube.com/embed/is9dRWiRDNs",
    thumbnail: "/thumbnails/thumbnail1.jpg",
    title: "Flöte mal historisch",
};
export const concert = {
    id: 2,
    url: "https://www.youtube.com/embed/gEUwCTkKEwM",
    thumbnail: "/thumbnails/thumbnail2.jpg",
    title: "Il Clavifiato - Historische Instrumente",
};
export const interview = {
    id: 3,
    url: "https://www.youtube.com/embed/NEyrmkzSGLg",
    thumbnail: "/thumbnails/thumbnail3.jpg",
    title: "Zauberstab Flöte beendet Schumann Plus Reihe",
};

type allVideoLinksProps = {
    id: number;
    url: string;
    thumbnail: string;
    title: string;
};
export const allVideoLinks: allVideoLinksProps[] = [soloFlute, concert, interview];
