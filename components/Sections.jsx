import { motion } from "framer-motion";
import { useState } from "react";

const reveal = {
  initial: { opacity: 0, y: 32, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.65 }
};

export function Services() {
  const items = [
    ["Neue Website", "Ein hochwertiger Online-Auftritt mit klarer Struktur und moderner Optik."],
    ["Relaunch", "Aus einer veralteten Seite wird ein professioneller digitaler Eindruck."],
    ["Mobile Optimierung", "Deine Website funktioniert sauber auf Handy, Tablet und Desktop."],
    ["Kontaktwege", "Anfrageformular, Telefon, WhatsApp, Reservierung oder Google Maps klar sichtbar."]
  ];

  return (
    <section className="section" id="leistungen">
      <motion.div className="sectionHead" {...reveal}>
        <p className="eyebrow">Leistungen</p>
        <h2>Alles, was ein lokales Unternehmen online braucht.</h2>
        <p>KARIVO baut keine überladenen Seiten, sondern klare Premium-Auftritte, die Vertrauen schaffen.</p>
      </motion.div>

      <div className="fourGrid">
        {items.map(([title, text], index) => (
          <motion.article className="card hoverCard" key={title} {...reveal}>
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function WebsitePackages() {
  const packages = [
    ["Starter", "349 €", "Für kleine Unternehmen, die schnell professionell online wirken wollen.", ["Onepage", "Kontaktbereich", "Mobile Ansicht"]],
    ["Premium", "599 €", "Für Unternehmen, die mehr Struktur, Inhalte und Vertrauen brauchen.", ["Bis zu 5 Seiten", "Galerie / Leistungen", "SEO-Grundstruktur"]],
    ["Business", "899 €", "Für einen individuellen Premium-Auftritt mit stärkerem Design.", ["Mehr Struktur", "Animationen", "Premium-Aufbau"]]
  ];

  return (
    <section className="section prices" id="pakete">
      <motion.div className="sectionHead" {...reveal}>
        <p className="eyebrow">Website-Pakete</p>
        <h2>Einmaliger Aufbau. Klare Preise.</h2>
        <p>Wähle das Website-Paket, das zu deinem Unternehmen passt.</p>
      </motion.div>

      <div className="threeGrid">
        {packages.map(([name, price, text, features], index) => (
          <motion.article className={index === 1 ? "priceCard featured" : "priceCard"} key={name} {...reveal}>
            {index === 1 && <div className="label">Beliebt</div>}
            <h3>{name}</h3>
            <strong>{price}</strong>
            <p>{text}</p>
            <ul>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function CarePackages() {
  const care = [
    ["Care", "19 €/Monat", "Für gelegentliche kleine Änderungen.", ["1 kleine Änderung pro Monat", "Texte / Öffnungszeiten", "Basis-Pflege"]],
    ["Care+", "39 €/Monat", "Der beste Standard für die meisten lokalen Unternehmen.", ["Bis zu 3 kleine Änderungen", "Bilder / Texte / Angebote", "Priorisierte Bearbeitung"]],
    ["Care Pro", "69 €/Monat", "Für Unternehmen, die dauerhaft aktiv und aktuell wirken wollen.", ["Bis zu 6 Änderungen", "Aktionen / neue Bereiche", "Monatscheck"]]
  ];

  return (
    <section className="careSection" id="care">
      <motion.div className="sectionHead" {...reveal}>
        <p className="eyebrow">KARIVO Care</p>
        <h2>Nach dem Launch bleibt deine Website gepflegt.</h2>
        <p>Das Website-Paket ist einmalig. Das Care-Paket ist die monatliche Betreuung danach.</p>
      </motion.div>

      <div className="comboExplainer">
        <motion.div className="comboBox" {...reveal}>
          <span>Einmalig</span>
          <h3>Website-Paket</h3>
          <p>Starter, Premium oder Business.</p>
        </motion.div>
        <motion.div className="plus" {...reveal}>+</motion.div>
        <motion.div className="comboBox" {...reveal}>
          <span>Monatlich</span>
          <h3>Care-Paket</h3>
          <p>Care, Care+ oder Care Pro.</p>
        </motion.div>
      </div>

      <div className="threeGrid careGrid">
        {care.map(([name, price, text, features], index) => (
          <motion.article className={index === 1 ? "careCard featured" : "careCard"} key={name} {...reveal}>
            {index === 1 && <div className="label">Empfohlen</div>}
            <h3>{name}</h3>
            <strong>{price}</strong>
            <p>{text}</p>
            <ul>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </motion.article>
        ))}
      </div>

      <motion.div className="popularCombo" {...reveal}>
        <p className="eyebrow">Beliebte Kombination</p>
        <h3>Premium Website + Care+</h3>
        <p>Einmalig 599 € für die Website und 39 €/Monat für laufende Pflege.</p>
        <a className="btn primary" href="#kontakt">Diese Kombination anfragen</a>
      </motion.div>
    </section>
  );
}

export function Showcase() {
  const cases = [
    ["Restaurant", "Speisekarte, Galerie, Reservierung und Google Maps."],
    ["Fahrschule", "Kurse, Preise, Anmeldung und Vertrauen."],
    ["Handwerk", "Leistungen, Referenzen und direkte Kontaktwege."]
  ];

  return (
    <section className="showcase">
      <motion.div className="sectionHead" {...reveal}>
        <p className="eyebrow">Beispiele</p>
        <h2>So kann ein Premium-Auftritt aussehen.</h2>
      </motion.div>

      <div className="threeGrid">
        {cases.map(([title, text]) => (
          <motion.article className="caseCard hoverCard" key={title} {...reveal}>
            <div className="caseMock" />
            <small>KARIVO DEMO</small>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    ["01", "Anfrage", "Du schickst Branche, Wunschpaket und Betreuung."],
    ["02", "Konzept", "KARIVO erstellt eine passende Richtung für deinen Auftritt."],
    ["03", "Umsetzung", "Design, Inhalte und Technik werden aufgebaut."],
    ["04", "Launch", "Die Website geht online und kann mit Care betreut werden."]
  ];

  return (
    <section className="section" id="ablauf">
      <motion.div className="sectionHead" {...reveal}>
        <p className="eyebrow">Ablauf</p>
        <h2>Einfacher Prozess. Hochwertiges Ergebnis.</h2>
      </motion.div>

      <div className="fourGrid">
        {steps.map(([num, title, text]) => (
          <motion.article className="stepCard" key={title} {...reveal}>
            <b>{num}</b>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    ["Kann man Website und Care kombinieren?", "Ja. Das ist sogar der empfohlene Weg: einmaliger Aufbau + monatliche Betreuung."],
    ["Kann ich auch ohne Care buchen?", "Ja. Care ist optional, aber sinnvoll, wenn Inhalte regelmäßig aktuell bleiben sollen."],
    ["Für wen ist Premium am besten?", "Premium passt für die meisten lokalen Unternehmen, weil es mehr Struktur und Vertrauen bietet."],
    ["Kann ich später upgraden?", "Ja. Sowohl Website-Paket als auch Care können später erweitert werden."]
  ];

  return (
    <section className="faqSection">
      <motion.div className="sectionHead" {...reveal}>
        <p className="eyebrow">FAQ</p>
        <h2>Wichtige Fragen vor der Anfrage.</h2>
      </motion.div>

      <div className="faqGrid">
        {faqs.map(([question, answer]) => (
          <motion.details key={question} {...reveal}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const [status, setStatus] = useState("idle");

  function handleSubmit() {
    setStatus("sending");
    setTimeout(() => setStatus("success"), 600);
  }

  return (
    <section className="contact" id="kontakt">
      <motion.div {...reveal}>
        <p className="eyebrow">Kontakt</p>
        <h2>Bereit für deine neue Website?</h2>
        <p>Schick deine Branche, dein gewünschtes Website-Paket und ob du monatliche Betreuung möchtest.</p>
      </motion.div>

      <motion.form className="contactForm" name="karivo-anfrage" method="POST" data-netlify="true" action="/danke" onSubmit={handleSubmit} {...reveal}>
        <input type="hidden" name="form-name" value="karivo-anfrage" />
        <input name="name" placeholder="Name / Unternehmen" required />
        <input name="email" type="email" placeholder="E-Mail" required />
        <input name="telefon" placeholder="Telefon / WhatsApp" />

        <select name="paket">
          <option>Premium · 599 €</option>
          <option>Starter · 349 €</option>
          <option>Business · 899 €</option>
          <option>Noch unsicher</option>
        </select>

        <select name="care">
          <option>Care+ · 39 €/Monat empfohlen</option>
          <option>Care · 19 €/Monat</option>
          <option>Care Pro · 69 €/Monat</option>
          <option>Keine Betreuung</option>
          <option>Noch unsicher</option>
        </select>

        <textarea name="nachricht" placeholder="Welche Website brauchst du und was soll enthalten sein?" required />

        <button type="submit" className={status === "success" ? "successButton" : ""}>
          {status === "idle" && "Anfrage senden"}
          {status === "sending" && "Anfrage wird gesendet..."}
          {status === "success" && "✓ Anfrage erfolgreich versendet"}
        </button>

        <small>Nach dem Absenden wirst du zur Danke-Seite weitergeleitet.</small>
      </motion.form>
    </section>
  );
}
