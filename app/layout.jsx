import "./globals.css";

export const metadata = {
  title: "KARIVO | Premium digitale Auftritte für lokale Unternehmen",
  description: "KARIVO sorgt für professionelle digitale Auftritte, mehr Vertrauen und mehr Anfragen für lokale Unternehmen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
