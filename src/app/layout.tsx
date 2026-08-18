import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TESLA Candles — Electricity, But Make It Cozy",
  description:
    "Tesla reimagined as a luxury artisan candle company. Premium hand-poured candles with scents inspired by the electric future. Charged with ambiance.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "TESLA Candles — Electricity, But Make It Cozy",
    description: "Premium hand-poured candles charged with ambiance.",
    type: "website",
    siteName: "TESLA Candles",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1209",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
