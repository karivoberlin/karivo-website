import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 34, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: .2 },
  transition: { duration: .7 }
};

export function ProblemSection() {
  const items = [
    ["Altmodischer Eindruck", "Kunden vergleichen dich online, bevor sie dich kontaktieren."],
    ["Zu wenig Kontaktwege", "Wenn Anruf, WhatsApp, Reservierung oder Anfrage nicht klar sind, springen Besucher ab."],
    ["Schwache mobile Ansicht", "Die meisten Besucher kommen über das Handy. Dort muss alles sofort funktionieren."]
  ];
  return (
    <section className="section" id="probleme">
      <motion.div className="sectionHead" {...fade}>
        <p className="eyebrow">Warum Unternehmen Kunden verlieren</p>
        <h2>Der erste Eindruck entsteht heute online.</h2>
        <p>Eine schlechte digitale Präsenz kostet Vertrauen, Anfragen und Umsatz – oft ohne dass man es direkt merkt.</p>
      </motion.div>
      <div className="threeGrid">
        {items.map(([title, text]) => (
          <motion.article className="card premiumCard" key={title} {...fade}>
            <span>Problem</span><h3>{title}</h3><p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function SolutionSection() {
  const items = [
    ["Premium Auftritt", "Ein moderner Außenauftritt, der hochwertig wirkt und zur Branche passt."],
    ["Mehr Anfragen", "Klare Kontaktwege: Anruf, WhatsApp, Formular, Reservierung oder Google Maps."],
    ["Betreuung", "Texte, Bilder, Öffnungszeiten, Speisekarten und kleine Änderungen bleiben aktuell."],
    ["Sichtbarkeit", "Saubere Struktur, schnelle Ladezeiten und Grundlagen für Google."]
  ];
  return (
    <section className="solution" id="loesung">
      <motion.div className="sectionHead left" {...fade}>
        <p className="eyebrow">KARIVO Lösung</p>
        <h2>Kein Baukasten-Gefühl. Ein digitaler Auftritt, der verkauft.</h2>
      </motion.div>
      <div className="cardGrid">
        {items.map(([title, text], index) => (
          <motion.article className="card premiumCard" key={title} {...fade}>
            <span>0{index + 1}</span><h3>{title}</h3><p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function TrustWall() {
  return (
    <motion.section className="trustWall" {...fade}>
      <div><strong>24/7</strong><span>Online-Eindruck</span></div>
      <div><strong>100%</strong><span>mobil optimiert</span></div>
      <div><strong>3</strong><span>klare Pakete</span></div>
      <div><strong>Care</strong><span>Betreuung möglich</span></div>
    </motion.section>
  );
}

export function Cases() {
  const cases = [
    ["Restaurant", "Mehr Reservierungen durch klare Speisekarte, Galerie, Google Maps und Reservierungs-CTA.", "Business"],
    ["Fahrschule", "Mehr Vertrauen durch Kursübersicht, Preise, Anmeldung und starke mobile Führung.", "Premium"],
    ["Handwerk", "Mehr Anrufe durch Leistungen, Referenzen, Vorher/Nachher und direkte Kontaktwege.", "Premium"]
  ];
  return (
    <section className="cases" id="cases">
      <motion.div className="sectionHead" {...fade}>
        <p className="eyebrow">Case Studies</p>
        <h2>So könnte ein moderner Auftritt für lokale Unternehmen wirken.</h2>
      </motion.div>
      <div className="caseGrid">
        {cases.map(([title, text, tier]) => (
          <motion.article className="caseCard premiumCard" key={title} {...fade}>
            <div className="casePreview"><span>{tier}</span></div>
            <small>KARIVO CASE</small>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="#kontakt">Analyse anfragen →</a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function DeviceShowcase() {
  return (
    <section className="deviceShowcase">
      <motion.div className="sectionHead" {...fade}>
        <p className="eyebrow">Mobile First</p>
        <h2>Dein Auftritt muss auf jedem Gerät überzeugen.</h2>
        <p>Handy, Tablet, Desktop – die wichtigsten Kontaktwege bleiben immer sichtbar.</p>
      </motion.div>
      <motion.div className="devices" {...fade}>
        <div className="device desktop"><b /><h3>Desktop</h3><p>Großer Premium-Eindruck.</p></div>
        <div className="device mobile"><b /><h3>Mobile</h3><p>Sofort Kontakt aufnehmen.</p></div>
        <div className="device tablet"><b /><h3>Tablet</h3><p>Sauber und hochwertig.</p></div>
      </motion.div>
    </section>
  );
}

export function Process() {
  const steps = [
    ["01", "Analyse", "Wir prüfen Branche, Ziel, Stil und Kontaktwege."],
    ["02", "Konzept", "Du bekommst eine klare Richtung für den neuen Außenauftritt."],
    ["03", "Umsetzung", "Design, Inhalte und Technik werden professionell umgesetzt."],
    ["04", "Launch", "Der Auftritt geht online und kann monatlich betreut werden."]
  ];
  return (
    <section className="section">
      <motion.div className="sectionHead" {...fade}>
        <p className="eyebrow">Ablauf</p>
        <h2>Von unklar zu professionell – ohne komplizierten Prozess.</h2>
      </motion.div>
      <div className="processGrid">
        {steps.map(([num, title, text]) => (
          <motion.article className="processCard" key={title} {...fade}>
            <b>{num}</b><h3>{title}</h3><p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  const quotes = [
    ["„Wirkt direkt hochwertiger.“", "Restaurant-Inhaber"],
    ["„Endlich versteht man sofort, was wir anbieten.“", "Fahrschule"],
    ["„Die Kontaktanfragen sind viel klarer geworden.“", "Handwerk"]
  ];
  return (
    <section className="testimonials">
      <motion.div className="sectionHead" {...fade}>
        <p className="eyebrow">Vertrauen</p>
        <h2>So soll KARIVO später mit echten Kundenstimmen wirken.</h2>
      </motion.div>
      <div className="threeGrid">
        {quotes.map(([quote, role]) => (
          <motion.article className="quoteCard" key={quote} {...fade}>
            <div className="stars">★★★★★</div>
            <h3>{quote}</h3>
            <p>{role}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Pricing() {
  const prices = [
    ["Starter", "349 €", "Für kleine Unternehmen, die schnell professionell wirken wollen."],
    ["Premium", "599 €", "Für Unternehmen, die mehr Struktur, Inhalte und Vertrauen brauchen."],
    ["Business", "899 €", "Für einen individuellen Premium-Auftritt mit stärkerem Design."]
  ];
  return (
    <section className="section prices" id="preise">
      <motion.div className="sectionHead" {...fade}>
        <p className="eyebrow">Pakete</p>
        <h2>Klare Preise für einen professionellen Start.</h2>
      </motion.div>
      <div className="priceGrid">
        {prices.map(([name, price, desc], index) => (
          <motion.article className={index === 1 ? "price featured" : "price"} key={name} {...fade}>
            {index === 1 && <div className="label">Beliebt</div>}
            <h3>{name}</h3><strong>{price}</strong><p>{desc}</p>
            <ul><li>Mobil optimiert</li><li>Klare Kontaktwege</li><li>Premium Außenauftritt</li></ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <motion.section className="finalCta" {...fade}>
      <p className="eyebrow">Nächster Schritt</p>
      <h2>Lass uns prüfen, wie dein aktueller Online-Auftritt wirkt.</h2>
      <p>Schick deine Branche oder bestehende Website. KARIVO gibt dir eine klare Einschätzung, was verbessert werden kann.</p>
      <a className="btn primary" href="#kontakt">Kostenlose Analyse anfragen</a>
    </motion.section>
  );
}

export function Contact() {
  return (
    <section className="contact" id="kontakt">
      <motion.div {...fade}>
        <p className="eyebrow">Kontakt</p>
        <h2>Kostenlose Analyse anfragen.</h2>
        <p>Schick kurz, welches Unternehmen du hast und was besser werden soll: mehr Anrufe, Reservierungen, Bewerbungen oder Vertrauen.</p>
      </motion.div>
      <motion.form className="contactForm" name="karivo-anfrage" method="POST" data-netlify="true" action="/danke" {...fade}>
        <input type="hidden" name="form-name" value="karivo-anfrage" />
        <input name="name" placeholder="Name / Unternehmen" required />
        <input name="email" type="email" placeholder="E-Mail" required />
        <input name="telefon" placeholder="Telefon / WhatsApp" />
        <select name="ziel"><option>Mehr Anfragen</option><option>Mehr Reservierungen</option><option>Moderner Auftritt</option><option>Noch unsicher</option></select>
        <textarea name="nachricht" placeholder="Was soll besser werden?" required />
        <button type="submit">Analyse anfragen</button>
      </motion.form>
    </section>
  );
}
