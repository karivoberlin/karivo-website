"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Preloader from "../components/Preloader";
import CursorGlow from "../components/CursorGlow";
import { Services, Trust, Portfolio, PackageComboSection, CareSection, Process, SalesBand, Pricing, Contact } from "../components/Sections";

export default function Home() {
  return (
    <>
      <Preloader />
      <CursorGlow />
      <Navbar />
      <Hero />
      <Services />
      <Trust />
      <Portfolio />
      <PackageComboSection />
      <CareSection />
      <Process />
      <SalesBand />
      <Pricing />
      <Contact />
      <footer>
        <strong>KARIVO X 2.5</strong>
        <span>Websites, die Kunden überzeugen.</span>
      </footer>
    </>
  );
}
