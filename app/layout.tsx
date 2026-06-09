import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bianca Chanda — Strategy, Innovation & Digital Consulting",
  description:
    "Bianca Chanda is a Toronto-based strategy and digital transformation consultant helping organizations cut through complexity to solve the right problems.",
  keywords: ["strategy consulting", "digital transformation", "innovation", "market research", "Toronto"],
  openGraph: {
    title: "Bianca Chanda — Strategy, Innovation & Digital Consulting",
    description:
      "Helping organizations navigate complexity with clarity — strategy, digital transformation, and market intelligence.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
