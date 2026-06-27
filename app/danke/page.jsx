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
          Deine Anfrage wurde erfolgreich übermittelt. KARIVO meldet sich in der Regel innerhalb von 24 Stunden bei dir.
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
            <p>Wir schauen uns Paket, Branche und Care-Wunsch an.</p>
          </div>
        </div>
        <div className="step">
          <span>3</span>
          <div>
            <h3>Angebot</h3>
            <p>Du erhältst ein unverbindliches Website-Angebot.</p>
          </div>
        </div>
        <div className="step">
          <span>4</span>
          <div>
            <h3>Umsetzung</h3>
            <p>Nach deiner Freigabe starten wir dein Projekt.</p>
          </div>
        </div>
      </section>

      <section className="thanksPanel">
        <p className="eyebrow">Während du wartest</p>
        <h2>Folge KARIVO auf Social Media.</h2>
        <p>Die Links sind vorbereitet und können später einfach durch deine echten Profile ersetzt werden.</p>

        <div className="socialButtons">
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">LinkedIn</a>
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
