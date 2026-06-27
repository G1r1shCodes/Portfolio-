import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Features from "@/components/Features";
import Club from "@/components/Club";
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
      <Skills />
      <Features />
      <Club />
      <About />
      <QuestLog />
      <Journey />
      <Guestbook />
      <Footer />
    </main>
  );
}
