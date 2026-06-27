import { motion } from "framer-motion";

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
    ["Restaurant Demo", "Speisekarte, Galerie, Reservierung und Google Maps."],
    ["Fahrschul-Konzept", "Kurse, Preise, Anmeldung und Vertrauen."],
    ["Handwerker-Konzept", "Leistungen, Referenzen und direkter Anruf-CTA."]
  ];

  return (
    <section className="portfolio" id="portfolio">
      <motion.div className="sectionHead left" {...fade}>
        <p className="eyebrow">Portfolio</p>
        <h2>Demo-Projekte, die sofort zeigen, was möglich ist.</h2>
        <p>Später ersetzt du diese Demos durch echte Kundenprojekte und Case Studies.</p>
      </motion.div>
      <div className="projectGrid">
        {projects.map(([title, text]) => (
          <motion.article className="projectCard premiumCard" key={title} {...fade}>
            <div className="browserMock">
              <div /><div /><div />
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
            <ul>
              <li>Mobil optimiert</li>
              <li>Kontaktfokus</li>
              <li>Premium-Look</li>
            </ul>
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
          <option>Starter · 349 €</option>
          <option>Premium · 599 €</option>
          <option>Business · 899 €</option>
          <option>Noch unsicher</option>
        </select>
        <textarea name="nachricht" placeholder="Was soll deine Website erreichen?" required />
        <button type="submit">Anfrage senden</button>
      </motion.form>
    </section>
  );
}
