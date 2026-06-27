import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="start">
      <div className="aurora auroraA" />
      <div className="aurora auroraB" />

      <motion.div
        className="heroCopy"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="badge">KARIVO X 2.0 · Next.js</span>
        <h1>Websites, die aus Besuchern Kunden machen.</h1>
        <p>
          Premium-Websites für lokale Unternehmen — modern, schnell, mobil optimiert
          und so gestaltet, dass dein erster Eindruck sofort professionell wirkt.
        </p>
        <div className="actions">
          <a className="btn primary" href="#kontakt">Projekt starten</a>
          <a className="btn secondary" href="#portfolio">Portfolio ansehen</a>
        </div>
      </motion.div>

      <motion.div
        className="heroVisual"
        initial={{ opacity: 0, rotateY: -16, y: 40 }}
        animate={{ opacity: 1, rotateY: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.15 }}
      >
        <div className="glassLaptop">
          <div className="browserTop"><i /><i /><i /><span>karivo.web</span></div>
          <div className="mockHero">
            <small>PREMIUM LOCAL WEBSITES</small>
            <h2>Design,<br />das verkauft.</h2>
          </div>
          <div className="mockGrid"><b /><b /><b /></div>
        </div>
        <div className="goldRing" />
        <div className="goldOrb" />
      </motion.div>
    </section>
  );
}
