import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [9, -9]);

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
      <motion.div className="lightBeam" animate={{ x: ["-20%", "18%", "-20%"], opacity: [.14, .32, .14] }} transition={{ duration: 9, repeat: Infinity }} />

      <motion.div className="heroCopy" initial={{ opacity: 0, y: 44, filter: "blur(14px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: .9, delay: 1 }}>
        <span className="badge">KARIVO X 2.4 · Premium Digitalagentur</span>
        <h1>Mehr Anfragen durch einen Auftritt, der sofort Vertrauen schafft.</h1>
        <p>Viele lokale Unternehmen verlieren Kunden, bevor überhaupt jemand anruft. KARIVO sorgt für einen digitalen Eindruck, der professionell wirkt, schnell überzeugt und Kontaktaufnahmen einfacher macht.</p>
        <div className="actions">
          <a className="btn primary" href="#kontakt">Kostenlose Analyse anfragen</a>
          <a className="btn secondary" href="#cases">Beispiele ansehen</a>
        </div>
        <div className="proof">
          <span>✓ Mehr Vertrauen</span>
          <span>✓ Mehr Anfragen</span>
          <span>✓ Premium Außenauftritt</span>
        </div>
      </motion.div>

      <motion.div className="heroVisual" style={{ rotateX, rotateY }} initial={{ opacity: 0, y: 40, scale: .94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1, delay: 1.15 }}>
        <div className="deviceStage">
          <div className="macbook">
            <div className="browserTop"><i /><i /><i /><span>restaurant-demo.de</span></div>
            <div className="screenHero">
              <small>PREMIUM LOCAL BRANDING</small>
              <h2>Reservierungen.<br/>Anfragen.<br/>Vertrauen.</h2>
            </div>
            <div className="screenCards"><b /><b /><b /></div>
          </div>
          <div className="phone">
            <div className="phoneTop" />
            <h3>Jetzt anfragen</h3>
            <p>Mobil perfekt optimiert.</p>
            <span>WhatsApp · Kontakt · Maps</span>
          </div>
        </div>
        <motion.div className="goldRing" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 18, ease: "linear" }} />
        <motion.div className="goldOrb" animate={{ y: [-12, 14, -12] }} transition={{ repeat: Infinity, duration: 6 }} />
      </motion.div>

      <motion.div className="heroStrip" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35, duration: .7 }}>
        <span>Restaurants</span><span>Fahrschulen</span><span>Handwerker</span><span>Beauty</span><span>Fitnessstudios</span>
      </motion.div>
    </section>
  );
}
