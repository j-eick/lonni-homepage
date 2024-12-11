import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Lonni Inman - Homepage",
    description: "awaiting text...",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
}

type MainLayoutProps = {
    children: ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
    return <div className={`h-full w-full`}>{children}</div>;
};
