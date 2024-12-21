"use client";

import MainLayout from "@/components/ui/mainLayout/MainLayout";
import { welcomeText } from "@/lib/paragraphs/home";

export default function Home() {
    return <MainLayout>{welcomeText}</MainLayout>;
}
