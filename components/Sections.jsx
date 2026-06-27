import { motion } from "framer-motion";
import { useState } from "react";

const fade = {
  initial: { opacity: 0, y: 34, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 }
};

export function Services() {
  const items = [
    ["Neue Website", "Moderner Online-Auftritt mit starken Texten und Kontaktfokus."],
    ["Relaunch", "Aus einer alten Website wird ein seriöser digitaler Eindruck."],
    ["Betreuung", "Pflege für Bilder, Texte, Öffnungszeiten und kleine Änderungen."],
    ["Online stellen", "Hosting, Domain-Verbindung und technische Einrichtung."]
  ];

  return (
    <section className="section" id="leistungen">
      <motion.div className="sectionHead" {...fade}>
        <p className="eyebrow">Leistungen</p>
        <h2>Ein hochwertiger Auftritt muss nicht kompliziert sein.</h2>
        <p>Du bekommst Struktur, Design, Technik und klare Kontaktwege aus einer Hand.</p>
      </motion.div>
      <div className="cardGrid">
        {items.map(([title, text], index) => (
          <motion.article className="card premiumCard" key={title} {...fade}>
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Trust() {
  return (
    <motion.section className="trustWall" {...fade}>
      <div><strong>3</strong><span>klare Pakete</span></div>
      <div><strong>5–10</strong><span>Tage Umsetzung</span></div>
      <div><strong>100%</strong><span>mobil optimiert</span></div>
      <div><strong>Care</strong><span>Betreuung möglich</span></div>
    </motion.section>
  );
}

export function Portfolio() {
  const projects = [
    ["Restaurant Demo", "Speisekarte, Galerie, Reservierung und Google Maps.", "Business"],
    ["Fahrschul-Konzept", "Kurse, Preise, Anmeldung und Vertrauen.", "Premium"],
    ["Handwerker-Konzept", "Leistungen, Referenzen und direkter Anruf-CTA.", "Premium"]
  ];

  return (
    <section className="portfolio" id="portfolio">
      <motion.div className="sectionHead left" {...fade}>
        <p className="eyebrow">Portfolio</p>
        <h2>Demo-Projekte, die sofort zeigen, was möglich ist.</h2>
        <p>Später ersetzt du diese Demos durch echte Kundenprojekte und Case Studies.</p>
      </motion.div>
      <div className="projectGrid">
        {projects.map(([title, text, tier]) => (
          <motion.article className="projectCard premiumCard" key={title} {...fade}>
            <div className="browserMock">
              <div /><div /><div />
              <span>{tier}</span>
            </div>
            <small>KARIVO DEMO</small>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="#kontakt">Demo anfragen →</a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Configurator() {
  const [industry, setIndustry] = useState("Restaurant");
  const [style, setStyle] = useState("Elegant");
  const [packageName, setPackageName] = useState("Premium");

  const price = packageName === "Starter" ? "349 €" : packageName === "Premium" ? "599 €" : "899 €";

  return (
    <section className="configurator" id="konfigurator">
      <motion.div className="sectionHead" {...fade}>
        <p className="eyebrow">Website-Konfigurator</p>
        <h2>Zeig Kunden schon vor dem Gespräch, was möglich ist.</h2>
        <p>Ein erster Vorgeschmack auf den späteren KARIVO-Konfigurator.</p>
      </motion.div>

      <motion.div className="configGrid" {...fade}>
        <div className="configPanel">
          <label>Branche
            <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
              <option>Restaurant</option>
              <option>Fahrschule</option>
              <option>Handwerker</option>
              <option>Friseur / Beauty</option>
            </select>
          </label>
          <label>Stil
            <select value={style} onChange={(e) => setStyle(e.target.value)}>
              <option>Elegant</option>
              <option>Minimalistisch</option>
              <option>Luxuriös</option>
              <option>Modern</option>
            </select>
          </label>
          <label>Paket
            <select value={packageName} onChange={(e) => setPackageName(e.target.value)}>
              <option>Starter</option>
              <option>Premium</option>
              <option>Business</option>
            </select>
          </label>
        </div>

        <div className="previewCard">
          <small>{industry} · {style}</small>
          <h3>{packageName} Website</h3>
          <p>Individueller Online-Auftritt mit hochwertigem Design, klaren Kontaktwegen und mobilem Aufbau.</p>
          <strong>ab {price}</strong>
          <a href="#kontakt" className="btn primary">Diese Richtung anfragen</a>
        </div>
      </motion.div>
    </section>
  );
}

export function Process() {
  const steps = [
    ["01", "Analyse", "Wir klären Branche, Ziel, Stil und Inhalte."],
    ["02", "Design", "Du bekommst einen hochwertigen ersten Entwurf."],
    ["03", "Umsetzung", "Website, Kontaktwege und Mobile-Version werden fertiggestellt."],
    ["04", "Launch", "Die Website geht online und kann betreut werden."]
  ];

  return (
    <section className="section" id="prozess">
      <motion.div className="sectionHead" {...fade}>
        <p className="eyebrow">Ablauf</p>
        <h2>Einfacher Prozess. Hochwertiges Ergebnis.</h2>
      </motion.div>
      <div className="processGrid">
        {steps.map(([num, title, text]) => (
          <motion.article className="processCard" key={title} {...fade}>
            <b>{num}</b>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function SalesBand() {
  return (
    <motion.section className="salesBand" {...fade}>
      <div>
        <p className="eyebrow">KARIVO Effekt</p>
        <h2>Deine Website soll nicht nur schön aussehen. Sie soll Vertrauen verkaufen.</h2>
      </div>
      <a className="btn primary" href="#kontakt">Kostenlos anfragen</a>
    </motion.section>
  );
}

export function Pricing() {
  const prices = [
    ["Starter", "349 €", "Onepage für kleine Unternehmen."],
    ["Premium", "599 €", "Mehrseitige Website mit starkem Auftritt."],
    ["Business", "899 €", "Individueller Premium-Auftritt."]
  ];

  return (
    <section className="section" id="preise">
      <motion.div className="sectionHead" {...fade}>
        <p className="eyebrow">Preise</p>
        <h2>Klare Pakete für den Start.</h2>
      </motion.div>
      <div className="priceGrid">
        {prices.map(([name, price, desc], index) => (
          <motion.article className={index === 1 ? "price featured" : "price"} key={name} {...fade}>
            {index === 1 && <div className="label">Beliebt</div>}
            <h3>{name}</h3>
            <strong>{price}</strong>
            <p>{desc}</p>
            <ul><li>Mobil optimiert</li><li>Kontaktfokus</li><li>Premium-Look</li></ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact" id="kontakt">
      <motion.div {...fade}>
        <p className="eyebrow">Kontakt</p>
        <h2>Bereit für einen besseren ersten Eindruck?</h2>
        <p>Schick deine Branche und dein Ziel. KARIVO erstellt dir einen passenden Vorschlag.</p>
      </motion.div>

      <motion.form className="contactForm" name="karivo-anfrage" method="POST" data-netlify="true" action="/danke" {...fade}>
        <input type="hidden" name="form-name" value="karivo-anfrage" />
        <input name="name" placeholder="Name / Unternehmen" required />
        <input name="email" type="email" placeholder="E-Mail" required />
        <input name="telefon" placeholder="Telefon / WhatsApp" />
        <select name="paket">
          <option>Starter · 349 €</option><option>Premium · 599 €</option><option>Business · 899 €</option><option>Noch unsicher</option>
        </select>
        <textarea name="nachricht" placeholder="Was soll deine Website erreichen?" required />
        <button type="submit">Anfrage senden</button>
      </motion.form>
    </section>
  );
}
