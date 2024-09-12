import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      {/* // H E A D E R  */}
      <Header />

      {/* // H E R O  */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* // A B O U T  */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* // E X P E R I E N C E  */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* //  S K I L L S  */}

      {/* // P R O J E C T S  */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* // C O N T A C T   M E  */}
    </main>
  );
}
