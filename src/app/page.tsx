import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Technologies from "./components/Technologies";
import Products from "./components/Products";
import Insights from "./components/Insights";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <Hero />

      <About />

      <Research />

      <Technologies />

      <Products />

      <Insights />

      <Footer />
    </main>
  );
}