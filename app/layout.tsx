import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://website-gules-ten-41.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Kyle Teach × OPMEDIA — Brand Strategy",
  description:
    "The complete brand and content strategy that turns 7,110 followers into a $200B-niche coaching brand.",
  openGraph: {
    title: "Kyle Teach × OPMEDIA — Brand Strategy",
    description:
      "You once hit 259,160 plays on a single reel. Here's how we rebuild your brand.",
    url: SITE_URL,
    siteName: "OPMEDIA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kyle Teach × OPMEDIA — Brand Strategy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyle Teach × OPMEDIA — Brand Strategy",
    description:
      "You once hit 259,160 plays on a single reel. Here's how we rebuild your brand.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${mono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
