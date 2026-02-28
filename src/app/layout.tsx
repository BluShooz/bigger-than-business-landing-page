import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import { localBusinessSchema, faqSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Bigger Than Business | Best Barbershop in Pflugerville, TX",
  description: "Experience the best haircuts in Pflugerville at Bigger Than Business. Specialized in fades, tapers, and precision cuts tailored to your face shape. Book your appointment today!",
  keywords: "barbershop Pflugerville, best haircuts Pflugerville, fade haircut Pflugerville, men's grooming Pflugerville, 78660 barber",
  openGraph: {
    title: "Bigger Than Business | Best Barbershop in Pflugerville, TX",
    description: "Expert grooming and community connection in the heart of Pflugerville.",
    type: "website",
    locale: "en_US",
    url: "https://biggerthanbusiness.com",
    siteName: "Bigger Than Business",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased selection:bg-accent/30`}>
        {children}
      </body>
    </html>
  );
}
