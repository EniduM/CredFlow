import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CredFlow — The Financial Operating System for Freelancers",
  description:
    "Transform global freelance income into trusted financial identities accepted by banks and financial institutions. CredFlow verifies international earnings and unlocks loans, credit cards, and financing.",
  keywords: [
    "freelancer income verification",
    "freelancer loans",
    "international income verification",
    "financial identity for freelancers",
    "CredFlow",
  ],
  authors: [{ name: "CredFlow" }],
  openGraph: {
    title: "CredFlow — The Financial Operating System for Freelancers",
    description:
      "Transform global freelance income into trusted financial identities accepted by banks.",
    url: "https://credflow.io",
    siteName: "CredFlow",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CredFlow — The Financial Operating System for Freelancers",
    description:
      "Transform global freelance income into trusted financial identities accepted by banks.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
