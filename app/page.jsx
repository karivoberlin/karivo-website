import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Services, Portfolio, Pricing, Contact } from "../components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
      <footer>
        <strong>KARIVO</strong>
        <span>Websites, die Kunden überzeugen.</span>
      </footer>
    </>
  );
}
