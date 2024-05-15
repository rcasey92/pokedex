import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";

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
      <body className={inter.className}>
        <h1 className="appHeading">Professor Oak&apos;s Pokedex</h1>
        {children}
      </body>
    </html>
  );
}
