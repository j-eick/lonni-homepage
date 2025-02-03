// "use client";

// import links from "@/lib/navLinks";
// import useWindowSize from "../../hooks/useWindowSize";
// import { usePathname } from "next/navigation";
// import PageTitle from "@/components/ui/page-title/PageTitle";
// import InfoContainer from "@/components/ui/info-container/InfoContainer";
// import Nav from "@/components/ui/nav/Nav";

// export default function Ausbildung() {
//     const windowSize = useWindowSize();
//     const path = usePathname();

//     return (
//         <>
//             <p className={`absolute top-2 right-2`}>{windowSize.width}px</p>
//             <div className="content-allPages">
//                 <aside className={`p-4 pt-20 max-w-52 w-2/10 h-full leading-6 shadow-asideShadow bg-stone-500/20`}>
//                     <Nav
//                         links={links}
//                         path={path}
//                     />
//                 </aside>
//                 <main
//                     className={`w-8/10 pt-2 px-10 pb-10 grid grid-cols-1 grid-rows-mainLayout overflow-hidden
//                                 rounded-3xl`}
//                 >
//                     <InfoContainer />
//                     <article
//                         className={`row-start-2
//                                     h-auto`}
//                     >
//                         <PageTitle content="Ausbildung" />
//                         <ul
//                             className="space-y-6 list-disc pl-6"
//                             role="list"
//                         >
//                             <li className="text-lg leading-relaxed">
//                                 Studium der moderne Querflöte an Northwestern University, Chicago, USA sowie
//                                 Postgraduate Studies als Rotary Foundation Fellow an der Royal Academy of Music in
//                                 Glasgow, Schottland.
//                             </li>
//                             <li className="text-lg leading-relaxed">
//                                 Kontakt-Studium in barocke und klassische Traversflöte an der Akademie für Alte Musik
//                                 bzw. Hochschule für Musik Bremen sowie Weiterbildungsstudium in klassische
//                                 Klappen-Traversflöte an der Hochschule für Musik Bremen.
//                             </li>
//                             <li className="text-lg leading-relaxed">
//                                 Regelmäßig Teilnahme an Fortbildungen und Meisterkurse an diverse Institutionen u.a.
//                                 Mozarteum in Salzburg, Stiftung Kloster Michaelstein, Hochschule für Musik Bremen,
//                                 Landesmusikakademie Hamburg und Johannes-Brahms-Konservatorium Hamburg.
//                             </li>
//                         </ul>
//                     </article>
//                 </main>
//             </div>
//         </>
//     );
// }
