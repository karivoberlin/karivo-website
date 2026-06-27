import "./globals.css";

export const metadata = {
  title: "KARIVO X | Premium Websites für lokale Unternehmen",
  description: "KARIVO erstellt moderne Premium-Websites für lokale Unternehmen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
