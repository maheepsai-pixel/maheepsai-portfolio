import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <Marquee />
        <Story />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
