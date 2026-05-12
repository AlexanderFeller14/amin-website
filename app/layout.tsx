import type { Metadata } from "next";
import { Fraunces, Geist, Caveat } from "next/font/google";
import "./globals.css";

const serif = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const hand = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amin Finanzberatung. Vorsorge, Versicherung und Vermögen aus Zollikofen",
  description:
    "Persönliche Finanzberatung in Zollikofen. Vorsorge, Versicherung und Vermögensaufbau, vom ersten Sparplan bis zur Pensionierung. Erstgespräch kostenlos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de-CH"
      className={`${serif.variable} ${sans.variable} ${hand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bone text-ink">
        {children}
      </body>
    </html>
  );
}
