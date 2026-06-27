export default function Danke() {
  return (
    <main className="thanksPage">
      <div className="thanksAurora thanksAuroraA" />
      <div className="thanksAurora thanksAuroraB" />

      <section className="thanksHero">
        <div className="successIcon">✓</div>
        <p className="eyebrow">Anfrage erfolgreich versendet</p>
        <h1>Vielen Dank für deine Anfrage!</h1>
        <p className="thanksSubtitle">
          Deine Anfrage wurde erfolgreich übermittelt. KARIVO meldet sich in der Regel innerhalb von 24 Stunden mit einer Rückmeldung bei dir.
        </p>
      </section>

      <section className="nextSteps">
        <div className="step active">
          <span>✓</span>
          <div>
            <h3>Anfrage erhalten</h3>
            <p>Deine Anfrage ist sicher bei KARIVO angekommen.</p>
          </div>
        </div>
        <div className="step">
          <span>2</span>
          <div>
            <h3>Konzept</h3>
            <p>Wir schauen uns Branche, Paket und gewünschte Betreuung an.</p>
          </div>
        </div>
        <div className="step">
          <span>3</span>
          <div>
            <h3>Angebot</h3>
            <p>Du bekommst ein unverbindliches Angebot für Website und Care.</p>
          </div>
        </div>
        <div className="step">
          <span>4</span>
          <div>
            <h3>Umsetzung</h3>
            <p>Nach deiner Freigabe starten wir mit deiner Website.</p>
          </div>
        </div>
      </section>

      <section className="thanksPanel">
        <div>
          <p className="eyebrow">Während du wartest</p>
          <h2>Folge KARIVO auf Social Media.</h2>
          <p>Die Links sind vorbereitet und können später einfach durch deine echten Profile ersetzt werden.</p>
        </div>

        <div className="socialButtons">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="TikTok">TikTok</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
        </div>

        <a className="whatsappButton" href="#">WhatsApp schreiben</a>
      </section>

      <footer className="thanksFooter">
        <strong>KARIVO</strong>
        <span>Premium Websites für lokale Unternehmen.</span>
        <a href="/">Zurück zur Startseite</a>
      </footer>
    </main>
  );
}
