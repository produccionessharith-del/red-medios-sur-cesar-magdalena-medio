import type { Metadata } from "next";
import "./globals.css";
import "./simple.css";

export const metadata: Metadata = {
  title: "Red de Medios | Sur del Cesar y Magdalena Medio",
  description: "Noticias, televisión, radio y medios de comunicación del Sur del Cesar y Magdalena Medio."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
