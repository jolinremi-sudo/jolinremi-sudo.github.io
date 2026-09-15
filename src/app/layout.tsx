import type { Metadata } from "next";
import { DM_Mono, Fraunces, Lora, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const lora = Lora({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-lora" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Remi's Creative Desk — Content & Brand Marketing",
  description: "Consumer insight, content strategy, visual storytelling and commercial impact.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${lora.variable} ${manrope.variable} ${dmMono.variable}`}>{children}</body>
    </html>
  );
}
