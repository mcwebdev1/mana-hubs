import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const description =
  "Miami's only community-led coworking ecosystem. Book a tour, visit Mana Hubs curated by Mana Tech, or the Mana Fashion Showroom at Museum Tower.";
const previewImage = "https://links.manahubs.com/mana-hubs-preview.png";

export const metadata: Metadata = {
  title: "Mana Hubs",
  description,
  openGraph: {
    title: "Mana Hubs",
    description,
    url: "https://links.manahubs.com/",
    images: [
      {
        url: previewImage,
        width: 1080,
        height: 1080,
        type: "image/png",
        alt: "Mana Hubs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mana Hubs",
    description,
    images: [previewImage],
  },
  icons: {
    icon: [{ url: "/icon-mana-common.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/icon-mana-common.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon-mana-common.svg" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/card-hubs-photo.jpg"
          media="(max-width: 430px)"
        />
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
