import { createFileRoute } from "@tanstack/react-router";
import Preloader from "@/portfolio/components/Preloader";
import Navbar from "@/portfolio/components/Navbar";
import Hero from "@/portfolio/components/Hero";
import About from "@/portfolio/components/About";
import Expertise from "@/portfolio/components/Expertise";
import Skills from "@/portfolio/components/Skills";
import Projects from "@/portfolio/components/Projects";
import Certifications from "@/portfolio/components/Certifications";
import Contact from "@/portfolio/components/Contact";
import Footer from "@/portfolio/components/Footer";
import Process from "@/portfolio/components/Process";
import HireStrip from "@/portfolio/components/HireStrip";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Skills />
      <Process />
      <Projects />
      <Certifications />
      <Contact />
      <HireStrip />
      <Footer />
    </>
  );
}
