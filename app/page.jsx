import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Services, Trust, Portfolio, Process, Pricing, Contact } from "../components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Trust />
      <Portfolio />
      <Process />
      <Pricing />
      <Contact />
      <footer>
        <strong>KARIVO X 2.1</strong>
        <span>Websites, die Kunden überzeugen.</span>
      </footer>
    </>
  );
}
