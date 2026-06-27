import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section className="hero" id="start" onMouseMove={handleMouseMove}>
      <div className="aurora auroraOne" />
      <div className="aurora auroraTwo" />
      <div className="gridGlow" />

      <motion.div
        className="heroText"
        initial={{ opacity: 0, y: 36, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
      >
        <span className="badge">KARIVO X 3.0 · Finale Launch-Version</span>
        <h1>Premium-Websites für lokale Unternehmen.</h1>
        <p>
          KARIVO erstellt moderne Websites für Restaurants, Fahrschulen, Handwerker
          und Dienstleister – hochwertig, mobil optimiert und mit passenden Care-Paketen.
        </p>

        <div className="heroActions">
          <a className="btn primary" href="#pakete">Pakete ansehen</a>
          <a className="btn secondary" href="#kontakt">Website anfragen</a>
        </div>

        <div className="proof">
          <span>✓ Starter · Premium · Business</span>
          <span>✓ Care-Pakete</span>
          <span>✓ Mobil optimiert</span>
        </div>
      </motion.div>

      <motion.div
        className="heroVisual"
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 42, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
      >
        <div className="deviceStage">
          <div className="macbook">
            <div className="browserTop">
              <i /><i /><i /><span>premium-demo.de</span>
            </div>
            <div className="screenHero">
              <small>PREMIUM LOCAL WEBSITE</small>
              <h2>Design,<br />das überzeugt.</h2>
            </div>
            <div className="screenCards"><b /><b /><b /></div>
          </div>

          <div className="phone">
            <div className="phoneBar" />
            <h3>Kontakt</h3>
            <p>WhatsApp · Anfrage · Maps</p>
            <strong>mobil optimiert</strong>
          </div>
        </div>

        <motion.div className="goldRing" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 18, ease: "linear" }} />
        <motion.div className="goldOrb" animate={{ y: [-12, 14, -12] }} transition={{ repeat: Infinity, duration: 6 }} />
      </motion.div>

      <div className="heroStrip">
        <span>Restaurants</span>
        <span>Fahrschulen</span>
        <span>Handwerker</span>
        <span>Beauty</span>
        <span>Fitnessstudios</span>
      </div>
    </section>
  );
}
