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
      <div className="starField" />
      <motion.div className="spaceOrb orbOne" animate={{ y: [-18, 18, -18], rotate: [0, 18, 0] }} transition={{ repeat: Infinity, duration: 7 }} />
      <motion.div className="spaceOrb orbTwo" animate={{ y: [14, -20, 14], rotate: [0, -22, 0] }} transition={{ repeat: Infinity, duration: 8 }} />
      <motion.div className="holoPyramid" animate={{ rotateY: [0, 360] }} transition={{ repeat: Infinity, duration: 18, ease: "linear" }} />

      <motion.div
        className="heroText"
        initial={{ opacity: 0, y: 36, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
      >
        <span className="badge">Premium Webdesign aus Deutschland</span>
        <h1>Websites, die aus Besuchern Kunden machen.</h1>
        <p>
          KARIVO entwickelt moderne Websites für Restaurants und Fahrschulen – mit
          klarer Struktur, starkem ersten Eindruck und Kontaktwegen, die sofort funktionieren.
        </p>

        <div className="heroActions">
          <a className="btn primary" href="#kontakt">Kostenlose Ersteinschätzung</a>
          <a className="btn secondary" href="#pakete">Pakete ansehen</a>
        </div>

        <div className="proof">
          <span>✓ Für Restaurants & Fahrschulen</span>
          <span>✓ Mobil optimiert</span>
          <span>✓ Betreuung möglich</span>
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
          <div className="depthPlate depthPlateOne" />
          <div className="depthPlate depthPlateTwo" />
          <div className="macbook">
            <div className="browserTop">
              <i /><i /><i /><span>premium-demo.de</span>
            </div>
            <div className="screenHero">
              <small>KARIVO WEBSITE SYSTEM</small>
              <h2>Online<br />überzeugen.</h2>
            </div>
            <div className="screenCards"><b /><b /><b /></div>
          </div>

          <div className="phone">
            <div className="phoneBar" />
            <h3>Anfrage</h3>
            <p>Telefon · WhatsApp · Maps</p>
            <strong>1 Klick Kontakt</strong>
          </div>
        </div>

        <motion.div className="goldRing" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 18, ease: "linear" }} />
        <motion.div className="goldOrb" animate={{ y: [-12, 14, -12] }} transition={{ repeat: Infinity, duration: 6 }} />
        <motion.div className="holoCard holoCardOne" animate={{ y: [0, -18, 0], rotateZ: [-4, 4, -4] }} transition={{ repeat: Infinity, duration: 6 }}>Reservierung & Anfrage</motion.div>
        <motion.div className="holoCard holoCardTwo" animate={{ y: [0, 16, 0], rotateZ: [4, -4, 4] }} transition={{ repeat: Infinity, duration: 7 }}>Premium Auftritt</motion.div>
      </motion.div>

      <div className="heroStrip">
        <span>Restaurants</span>
        <span>Fahrschulen</span>
        <span>Premium Design</span>
        <span>Mobil optimiert</span>
      </div>
    </section>
  );
}
