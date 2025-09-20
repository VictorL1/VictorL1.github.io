import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VLT Services - Déménagement & Transport de Meubles Marseille",
  description: "Transport de meubles, livraisons LeBonCoin et petits déménagements à Marseille. Tarifs accessibles, service rapide et professionnel. Camion 9m3 disponible.",
  keywords: "déménagement Marseille, transport meubles, livraison LeBonCoin, camion 9m3, déménageur pas cher",
  authors: [{ name: "VLT Services" }],
  creator: "VLT Services",
  metadataBase: new URL('https://VictorL1.github.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://VictorL1.github.io',
    siteName: 'VLT Services',
    title: 'VLT Services - Transport & Déménagement Marseille',
    description: 'Transport de meubles et déménagement à Marseille. Service professionnel, tarifs accessibles.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VLT Services - Transport & Déménagement Marseille',
    description: 'Transport de meubles et déménagement à Marseille. Service professionnel, tarifs accessibles.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'VLT Services',
  description: 'Transport de meubles et déménagement à Marseille',
  url: 'https://VictorL1.github.io',
  telephone: '+33619640661',
  email: 'victor.ltalamon@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Marseille',
    addressRegion: 'Provence-Alpes-Côte d\'Azur',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.2965,
    longitude: 5.3698,
  },
  areaServed: {
    '@type': 'City',
    name: 'Marseille',
  },
  serviceType: [
    'Transport de meubles',
    'Livraison LeBonCoin',
    'Petit déménagement',
    'Transport express'
  ],
  priceRange: '40€-200€',
  openingHours: 'Mo-Sa 08:00-20:00',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
