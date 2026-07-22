import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Research from "./components/Research";
import WhyNexus from "./components/WhyNexus";
import Board from "./components/Board";
import Leadership from "./components/Leadership";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <Hero />

      <About />

      <Technologies />

      <Research />

      <WhyNexus />

      <Board />

      <Leadership />

      <Insights />

      <Contact />

      <Footer />
    </main>
  );
}