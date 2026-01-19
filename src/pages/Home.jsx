"use client";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import About from '@/components/About/About'
import Skills from '@/components/Skills.jsx/Skills.jsx'
import Projects from '@/components/Projects/Projects'
import FAQSection from "@/components/Faq/FAQ";
import ContactSection from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import StickySocials from "@/components/StickySocials";



export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <FAQSection />
      <ContactSection/>
      <Footer/>
      <StickySocials/>
    </>
  );
}
