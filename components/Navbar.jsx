export default function Navbar() {
  return (
    <nav className="nav">
      <a className="brand" href="#start">KARIVO</a>
      <div className="navLinks">
        <a href="#leistungen">Leistungen</a>
        <a href="#pakete">Pakete</a>
        <a href="#care">Care</a>
        <a href="#ablauf">Ablauf</a>
        <a href="#kontakt">Kontakt</a>
      </div>
      <a className="navCta" href="#kontakt">Website anfragen</a>
    </nav>
  );
}
