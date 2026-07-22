import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Technologies from "./components/Technologies";
import Insights from "./components/Insights";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About Preview */}
      <About />

      {/* Research Preview */}
      <Research />

      {/* Technologies Preview */}
      <Technologies />

      {/* Latest Insights */}
      <Insights />

      {/* Footer */}
      <Footer />
    </main>
  );
}