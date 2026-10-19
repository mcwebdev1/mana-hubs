import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mana Hubs",
  description:
    "Miami's only community-led coworking ecosystem. Book a tour, visit Mana Hubs curated by Mana Tech, or the Biscayne Showroom by Mana Fashion.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/tech-spaces-loft-10-2.jpg"
          media="(min-width: 431px)"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
