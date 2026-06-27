import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav className="nav" initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .9 }}>
      <a className="brand" href="#start">KARIVO</a>
      <div className="navLinks">
        <a href="#probleme">Probleme</a>
        <a href="#loesung">Lösung</a>
        <a href="#cases">Cases</a>
        <a href="#preise">Pakete</a>
        <a href="#kontakt">Kontakt</a>
      </div>
      <a className="navCta" href="#kontakt">Kostenlose Analyse</a>
    </motion.nav>
  );
}
