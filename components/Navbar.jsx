export default function Navbar() {
  return (
    <nav className="nav">
      <a className="brand" href="#start">KARIVO</a>
      <div className="navLinks">
        <a href="#leistungen">Leistungen</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#preise">Preise</a>
        <a href="#kontakt">Kontakt</a>
      </div>
      <a className="navCta" href="#kontakt">Projekt anfragen</a>
    </nav>
  );
}
