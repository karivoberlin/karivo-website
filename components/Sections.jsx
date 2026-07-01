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
    ["Restaurant-Websites", "Speisekarte, Öffnungszeiten, Reservierung, Galerie und Google Maps so aufgebaut, dass Gäste schnell entscheiden."],
    ["Fahrschul-Websites", "Kurse, Preise, Theoriezeiten, Anmeldung und Vertrauen für neue Fahrschüler klar strukturiert."],
    ["Premium-Erster Eindruck", "Starke Optik, moderne Animationen und ein seriöser Aufbau, der nicht nach Baukasten aussieht."],
    ["Schnelle Kontaktwege", "Telefon, WhatsApp, Anfrageformular und Maps werden sichtbar platziert, damit Besucher sofort handeln."]
  ];

  return (
    <section className="section" id="leistungen">
      <motion.div className="sectionHead" {...reveal}>
        <p className="eyebrow">Leistungen</p>
        <h2>Zwei Branchen. Ein klares Ziel: mehr Kundenkontakte.</h2>
        <p>KARIVO baut keine überladenen Seiten, sondern Premium-Auftritte, die sofort seriös wirken und Besucher schneller zur Anfrage bringen.</p>
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

export function ConversionStrip() {
  const stats = [
    ["2 Zielgruppen", "Restaurant & Fahrschule"],
    ["1 Ziel", "mehr direkte Anfragen"],
    ["3 Pakete", "Starter · Premium · Business"]
  ];

  return (
    <section className="conversionStrip">
      {stats.map(([big, small]) => (
        <motion.div className="conversionItem" key={big} {...reveal}>
          <strong>{big}</strong>
          <span>{small}</span>
        </motion.div>
      ))}
    </section>
  );
}

export function WebsitePackages() {
  const packages = [
    ["Starter", "ab 349 €", "Für einen schnellen, sauberen Online-Auftritt mit den wichtigsten Informationen.", ["Onepage", "Kontaktbereich", "Mobile Ansicht"]],
    ["Premium", "ab 599 €", "Für Betriebe, die mehr Vertrauen, bessere Struktur und stärkere Wirkung brauchen.", ["Bis zu 5 Seiten", "Galerie / Leistungen", "SEO-Grundstruktur"]],
    ["Business", "ab 899 €", "Für einen individuellen Premium-Auftritt mit mehr Tiefe und stärkerem Design.", ["Mehr Struktur", "Animationen", "Premium-Aufbau"]]
  ];

  return (
    <section className="section prices" id="pakete">
      <motion.div className="sectionHead" {...reveal}>
        <p className="eyebrow">Website-Pakete</p>
        <h2>Klare Pakete. Professioneller Auftritt.</h2>
        <p>Wähle das Paket, das zu deinem Restaurant oder deiner Fahrschule passt – von schneller Onepage bis Premium-Aufbau.</p>
      </motion.div>

      <div className="packageNote">
        <span>Transparent</span>
        <p>Alle Pakete sind einmalige Aufbaupreise. Domain, Texte, Bilder und Betreuung können je nach Projekt ergänzt werden.</p>
      </div>

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
    ["Restaurant", "Speisekarte, Galerie, Reservierung und Google Maps – alles, was Gäste vor dem Besuch brauchen.", "Speisekarte · Reservierung · Maps"],
    ["Fahrschule", "Kurse, Preise, Anmeldung und Vertrauen – damit Fahrschüler schnell Kontakt aufnehmen.", "Preise · Kurse · Anmeldung"]
  ];

  return (
    <section className="showcase">
      <motion.div className="sectionHead" {...reveal}>
        <p className="eyebrow">Beispiele</p>
        <h2>Beispiele für deine Zielgruppen.</h2>
        <p>Restaurant und Fahrschule sind vorbereitet. Sobald die Demo-Links da sind, werden die Buttons direkt verknüpft.</p>
      </motion.div>

      <div className="demoGrid">
        {cases.map(([title, text, tags]) => (
          <motion.article className={`caseCard hoverCard case${title}`} key={title} {...reveal}>
            <div className="caseMock">
              <span>{title}</span>
              <b />
              <i />
            </div>
            <small>KARIVO DEMO · {tags}</small>
            <h3>{title}</h3>
            <p>{text}</p>
            <a className="demoPlaceholder" href="#kontakt">Demo folgt</a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    ["01", "Kurz anfragen", "Du schickst Branche, Wunschpaket und grobe Vorstellungen."],
    ["02", "Struktur festlegen", "KARIVO plant Aufbau, Inhalte, Kontaktwege und den passenden Stil."],
    ["03", "Premium-Auftritt bauen", "Design, Texte, Animationen und Technik werden sauber umgesetzt."],
    ["04", "Live gehen", "Die Website geht online und kann danach mit Care aktuell gehalten werden."]
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
    ["Für wen ist Premium am besten?", "Premium passt meistens am besten, weil genug Platz für Vertrauen, Bilder, Leistungen und Kontaktwege da ist."],
    ["Was ist, wenn ich noch keine guten Bilder habe?", "Dann kann die Seite erstmal mit sauberem Aufbau, passenden Platzhaltern und später mit echten Bildern erweitert werden."]
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

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mkolbovw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          window.location.href = "/danke";
        }, 1300);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <section className="contact" id="kontakt">
      <motion.div {...reveal}>
        <p className="eyebrow">Kontakt</p>
        <h2>Kostenlose Ersteinschätzung sichern.</h2>
        <p>Schick kurz, ob es um ein Restaurant oder eine Fahrschule geht. Danach bekommst du eine klare Empfehlung, welches Paket wirklich Sinn macht.</p>
        <div className="contactTrust">
          <span>✓ unverbindlich</span>
          <span>✓ klare Empfehlung</span>
          <span>✓ ohne Technikstress</span>
        </div>
      </motion.div>

      <motion.form className="contactForm" onSubmit={handleSubmit} {...reveal}>
        <input name="name" placeholder="Name / Unternehmen" required />
        <input name="email" type="email" placeholder="E-Mail" required />
        <input name="telefon" placeholder="Telefon / WhatsApp" />

        <select name="branche">
          <option>Restaurant</option>
          <option>Fahrschule</option>
          <option>Noch unsicher</option>
        </select>

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

        <textarea name="nachricht" placeholder="Was soll auf die Website? Zum Beispiel Speisekarte, Kurse, Preise, Galerie, WhatsApp, Google Maps ..." required />

        <button type="submit" disabled={status === "sending" || status === "success"} className={status === "success" ? "successButton" : ""}>
          {status === "idle" && "Kostenlose Anfrage senden"}
          {status === "sending" && "Anfrage wird gesendet..."}
          {status === "success" && "✓ Anfrage erfolgreich versendet"}
          {status === "error" && "Fehler – bitte nochmal versuchen"}
        </button>

        {status === "success" && (
          <small className="successHint">Du wirst automatisch zur Danke-Seite weitergeleitet.</small>
        )}

        {status === "error" && (
          <small className="errorHint">Die Anfrage konnte nicht gesendet werden. Bitte prüfe deine Verbindung oder schreibe direkt per WhatsApp.</small>
        )}

        {status === "idle" && (
          <small>Deine Anfrage wird sicher über Formspree an KARIVO gesendet.</small>
        )}
      </motion.form>
    </section>
  );
}
