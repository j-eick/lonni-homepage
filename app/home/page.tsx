"use client";

import Link from "next/link";
import useWindowSize from "../hooks/useWindowSize";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const windowSize = useWindowSize();

    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, []);

    return (
        <div
            className={`relative h-full w-full flex items-center justify-center
                        bg-bg1 bg-no-repeat bg-center bg-cover
                        `}
        >
            <div className="absolute inset-0 z-0 w-full h-full grid place-items-center backdrop-blur-4px" />
            <div
                className={`h-8/10 w-9/10 max-w-1150px flex gap-8 overflow-hidden mainGradient
                            backdrop-blur-xl backdrop-brightness-85 bg-slate-200/30
                            shadow-mainShadow rounded-3xl border-1 border-slate-100/50
                            `}
            >
                <aside className={`p-4 pt-20 max-w-52 w-2/10 h-full leading-6 shadow-asideShadow bg-stone-500/20`}>
                    <nav>
                        <ul className="flex flex-col gap-5">
                            {links.map((link, i) => (
                                <li
                                    key={i}
                                    className={`relative px-3 h-14 flex items-end
                                                before:absolute before:left-1/2 before:-translate-x-1/2 ${
                                                    path === link.href ? "fadingLineWhite" : "fadingLineBlack"
                                                } `}
                                >
                                    <Link
                                        href={link.href}
                                        className="w-full "
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                <main
                    className={`w-full pr-5 pb-10 grid grid-cols-1 grid-rows-mainLayout overflow-hidden
                                rounded-3xl `}
                >
                    <section
                        className={`row-start-1
                                    h-11 w-9/10 ml-auto flex justify-end items-center
                                    border-b-1 border-slate-600/30`}
                    >
                        <p className="translate-y-1.5 text-right">Music ticker...</p>
                        <span className="translate-y-1">PlayIcon</span>
                    </section>
                    <article
                        className={`row-start-2 
                                    h-auto border-dashed`}
                    >
                        <h4 className="pb-4">Welcome to my page!</h4>
                        <p className="leading-9">
                            As a professional musician and educator, my passion is sharing the joy of music with others.
                            Whether you're looking to take music lessons, attend one of my upcoming concerts, or
                            participate in a special workshop, you've come to the right place. <br />
                            My private music lessons cater to students of all ages and skill levels, from complete
                            beginners to advanced players. I offer instruction in [list instruments/styles]. My teaching
                            style is patient, personalized, and designed to help you reach your unique musical goals. In
                            addition to lessons, I also host a variety of public performances and interactive workshops
                            throughout the year. These events are open to music lovers of all backgrounds and are a
                            great way to discover new artists, learn new skills, and connect with the local music
                            community. Feel free to explore the rest of my site to learn more about my services,
                            upcoming events, and special offers. I look forward to connecting with you soon and being a
                            part of your musical journey! <br /> <br />
                            Best regards, Lonni
                        </p>
                    </article>
                </main>
            </div>

            <p className={`absolute top-2 right-2`}>{windowSize.width}px</p>
        </div>
    );
}

const links = [
    { href: "/home", name: "Home" },
    { href: "/home/ausbildung", name: "Ausbildung" },
    { href: "/ausbildung", name: "Künstlerische Tätigkeit" },
    { href: "/ausbildung", name: "Pädagogische Erfahrung" },
    { href: "/ausbildung", name: "Links" },
    { href: "/ausbildung", name: "Kontakt" },
];

// "use client";

// import Link from "next/link";
// import useWindowSize from "../hooks/useWindowSize";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";
// import { FaMusic } from "react-icons/fa"; // Import music icon

// export default function Home() {
//     const windowSize = useWindowSize();
//     const path = usePathname();

//     useEffect(() => {
//         console.log(path);
//     }, []);

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-8">
//             <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
//                 <div className="flex">
//                     <aside className="w-64 bg-gray-100 p-6">
//                         <nav>
//                             <ul className="space-y-4">
//                                 {links.map((link, i) => (
//                                     <li key={i}>
//                                         <Link
//                                             href={link.href}
//                                             className={`block py-2 px-4 rounded transition-colors ${
//                                                 path === link.href ? "bg-indigo-600 text-white" : "hover:bg-indigo-100"
//                                             }`}
//                                         >
//                                             {link.name}
//                                         </Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </nav>
//                     </aside>
//                     <main className="flex-1 p-8">
//                         <header className="flex justify-between items-center mb-8 pb-4 border-b">
//                             <h1 className="text-3xl font-bold text-gray-800">Welcome to Lonni's Music</h1>
//                             <div className="flex items-center space-x-2">
//                                 <p className="text-sm text-gray-600">Now Playing: Jazz Fusion</p>
//                                 <FaMusic className="text-indigo-600" />
//                             </div>
//                         </header>
//                         <article className="prose lg:prose-xl">
//                             <h2 className="text-2xl font-semibold mb-4">Welcome to my page!</h2>
//                             <p className="mb-4">
//                                 As a professional musician and educator, my passion is sharing the joy of music with
//                                 others. Whether you're looking to take music lessons, attend one of my upcoming
//                                 concerts, or participate in a special workshop, you've come to the right place.
//                             </p>
//                             <p className="mb-4">
//                                 My private music lessons cater to students of all ages and skill levels, from complete
//                                 beginners to advanced players. I offer instruction in various instruments and styles,
//                                 with a teaching approach that is patient, personalized, and designed to help you reach
//                                 your unique musical goals.
//                             </p>
//                             <p className="mb-4">
//                                 In addition to lessons, I also host a variety of public performances and interactive
//                                 workshops throughout the year. These events are open to music lovers of all backgrounds
//                                 and are a great way to discover new artists, learn new skills, and connect with the
//                                 local music community.
//                             </p>
//                             <p>
//                                 Feel free to explore the rest of my site to learn more about my services, upcoming
//                                 events, and special offers. I look forward to connecting with you soon and being a part
//                                 of your musical journey!
//                             </p>
//                             <p className="mt-8 text-right font-semibold">Best regards, Lonni</p>
//                         </article>
//                     </main>
//                 </div>
//             </div>
//             <p className="text-xs text-white mt-4 text-right">Window width: {windowSize.width}px</p>
//         </div>
//     );
// }

// const links = [
//     { href: "/home", name: "Home" },
//     { href: "/home/ausbildung", name: "Education" },
//     { href: "/artistic", name: "Artistic Activities" },
//     { href: "/teaching", name: "Teaching Experience" },
//     { href: "/links", name: "Links" },
//     { href: "/contact", name: "Contact" },
// ];
