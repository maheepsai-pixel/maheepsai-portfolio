import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Project from "@/components/Project";
import ProjectQP from "@/components/ProjectQP";
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
        <Project />
        <ProjectQP />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
