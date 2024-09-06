import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      {/* // H E A D E R  */}
      <Header />

      {/* // H E R O  */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* // A B O U T  */}

      {/* // E X P E R I E N C E  */}

      {/* //  S K I L L S  */}

      {/* // P R O J E C T S  */}

      {/* // C O N T A C T   M E  */}
    </main>
  );
}
