import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const pokefont = localFont({
  src: "../../fonts/PKMN_RBYGSC.ttf",
  variable: "--font-pokefont",
  weight: "100 900",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Professor Oak's Pokedex",
  description: "A small app used to find pokemon by their id.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${pokefont.variable}`}>{children}</body>
    </html>
  );
}
