import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Process from "@/components/process/Process";
import Projects from "@/components/projects/Project";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Navbar from "@/components/layout/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Projects />
      <About />
      <Contact />
     
    </main>
  );
}