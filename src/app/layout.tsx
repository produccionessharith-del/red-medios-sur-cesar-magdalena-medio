import type { Metadata } from "next";
import "./globals.css";
import "./simple.css";
import "./admin/admin.css";

const siteTitle = "Red Regional de Medios | Sur del Cesar y Magdalena Medio";
const siteDescription = "Red Regional de Medios de Comunicación del Sur del Cesar y Magdalena Medio. Noticias, televisión, radio y contenidos de nuestros medios asociados. Unidos por la información.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: "Red Regional de Medios",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/icon.png",
    apple: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }]
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "Red Regional de Medios",
    locale: "es_CO",
    type: "website",
    images: [{ url: "/logo-red-regional.png", width: 1536, height: 1024, alt: "Red Regional de Medios de Comunicación del Sur del Cesar y Magdalena Medio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/logo-red-regional.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
