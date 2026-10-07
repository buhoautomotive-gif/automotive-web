import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "BÚHO AUTOMOTIVE — Tu próximo coche, en Europa",
    template: "%s | BÚHO AUTOMOTIVE",
  },
  description: site.description,
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  openGraph: {
    title: "BÚHO AUTOMOTIVE",
    description: site.description,
    locale: "es_ES",
    type: "website",
    siteName: site.name,
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  themeColor: "#0b0c0c",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={geist.variable}>
        <a href="#main-content" className="skip-link">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
