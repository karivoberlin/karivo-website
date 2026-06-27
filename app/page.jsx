"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import {
  Services,
  WebsitePackages,
  CarePackages,
  Showcase,
  Process,
  FAQ,
  Contact
} from "../components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WebsitePackages />
      <CarePackages />
      <Showcase />
      <Process />
      <FAQ />
      <Contact />
      <footer>
        <strong>KARIVO</strong>
        <span>Premium Websites für lokale Unternehmen.</span>
      </footer>
    </>
  );
}
