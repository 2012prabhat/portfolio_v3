"use client";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import Work from "@/components/Work/Work";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Work />
    </>
  );
}
