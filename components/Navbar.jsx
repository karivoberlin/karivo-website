import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.9 }}
    >
      <a className="brand" href="#start">KARIVO</a>
      <div className="navLinks">
        <a href="#leistungen">Leistungen</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#prozess">Ablauf</a>
        <a href="#preise">Preise</a>
        <a href="#kontakt">Kontakt</a>
      </div>
      <a className="navCta" href="#kontakt">Projekt anfragen</a>
    </motion.nav>
  );
}
