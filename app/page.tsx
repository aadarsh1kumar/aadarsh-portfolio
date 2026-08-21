import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Activity } from "@/components/Activity";
import { Technologies } from "@/components/Technologies";
import { Journey } from "@/components/Journey";
import { Achievements } from "@/components/Achievements";
import { Projects } from "@/components/Projects";
import { CurrentlyLearning } from "@/components/CurrentlyLearning";
import { Writing } from "@/components/Writing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="hairline mx-6" />
        <About />
        <Activity />
        <Technologies />
        <Journey />
        <Achievements />
        <Projects />
        <CurrentlyLearning />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
