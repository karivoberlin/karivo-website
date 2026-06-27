"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Preloader from "../components/Preloader";
import CursorGlow from "../components/CursorGlow";
import {
  ProblemSection,
  SolutionSection,
  TrustWall,
  Cases,
  DeviceShowcase,
  Process,
  Testimonials,
  Pricing,
  FinalCTA,
  Contact
} from "../components/Sections";

export default function Home() {
  return (
    <>
      <Preloader />
      <CursorGlow />
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <TrustWall />
      <Cases />
      <DeviceShowcase />
      <Process />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Contact />
      <footer>
        <strong>KARIVO X 2.4</strong>
        <span>Premium digitale Auftritte für lokale Unternehmen.</span>
      </footer>
    </>
  );
}
