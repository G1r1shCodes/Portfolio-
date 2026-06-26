import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import QuestLog from "@/components/QuestLog";
import Journey from "@/components/Journey";
import Guestbook from "@/components/Guestbook";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";

export default function Home() {
  return (
    <main>
      <Effects />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <QuestLog />
      <Journey />
      <Guestbook />
      <Footer />
    </main>
  );
}
