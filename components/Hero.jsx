import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section className="hero" id="start" onMouseMove={handleMouseMove}>
      <div className="aurora auroraA" />
      <div className="aurora auroraB" />
      <div className="gridGlow" />
      <motion.div
        className="lightBeam"
        animate={{ x: ["-20%", "20%", "-20%"], opacity: [0.18, 0.34, 0.18] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <motion.div
        className="heroCopy"
        initial={{ opacity: 0, y: 44, filter: "blur(14px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 1 }}
      >
        <span className="badge">KARIVO X 2.2 · Premium Motion</span>
        <h1>Websites, die aus Besuchern Kunden machen.</h1>
        <p>
          Premium-Websites für lokale Unternehmen — modern, schnell, mobil optimiert
          und so gestaltet, dass dein erster Eindruck sofort professionell wirkt.
        </p>
        <div className="actions">
          <a className="btn primary" href="#kontakt">Projekt starten</a>
          <a className="btn secondary" href="#portfolio">Portfolio ansehen</a>
        </div>
        <div className="proof">
          <span>✓ Premium Design</span>
          <span>✓ Conversion-Fokus</span>
          <span>✓ Mobile First</span>
        </div>
      </motion.div>

      <motion.div
        className="heroVisual"
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 1.15 }}
      >
        <div className="glassLaptop">
          <div className="browserTop"><i /><i /><i /><span>karivo.web</span></div>
          <div className="mockHero">
            <small>PREMIUM LOCAL WEBSITES</small>
            <h2>Design,<br />das verkauft.</h2>
          </div>
          <div className="mockGrid"><b /><b /><b /></div>
        </div>

        <motion.div className="goldRing" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 18, ease: "linear" }} />
        <motion.div className="goldOrb" animate={{ y: [-12, 14, -12] }} transition={{ repeat: Infinity, duration: 6 }} />
        <motion.div className="floatingTag tagOne" animate={{ y: [0, -16, 0] }} transition={{ repeat: Infinity, duration: 5 }}>+ mehr Vertrauen</motion.div>
        <motion.div className="floatingTag tagTwo" animate={{ y: [0, 14, 0] }} transition={{ repeat: Infinity, duration: 6 }}>+ bessere Anfragen</motion.div>
      </motion.div>

      <motion.div
        className="heroStrip"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.35, duration: 0.7 }}
      >
        <span>Restaurants</span><span>Fahrschulen</span><span>Handwerker</span><span>Friseure</span><span>Fitnessstudios</span>
      </motion.div>
    </section>
  );
}
