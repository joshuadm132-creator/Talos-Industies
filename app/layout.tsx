import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { themeToCssVars } from "@/config/ThemeToCSS";
import { business } from "@/config/business";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

/* ============================================================
   Metadata — drives <title>, <meta description>, OG tags
   ============================================================ */

export const metadata: Metadata = {
  // metadataBase lets Next.js resolve relative URLs (OG images, canonicals)
  metadataBase: new URL("https://talosindustries.co.zw"),

  // Page titles use this template: "Pricing | Talos Industries"
  title: {
    default: business.name,
    template: `%s | ${business.name}`,
  },

  description: business.description,

  // OpenGraph — what shows when the site is shared on WhatsApp, LinkedIn, etc.
  openGraph: {
    title: business.name,
    description: business.description,
    url: "https://talosindustries.co.zw",
    siteName: business.name,
    locale: "en_ZW",
    type: "website",
  },

  // Twitter / X cards
  twitter: {
    card: "summary_large_image",
    title: business.name,
    description: business.description,
  },

  // Tells Google the canonical host, prevents duplicate-content issues
  alternates: {
    canonical: "https://talosindustries.co.zw",
  },

  // Robots — indexable by default, but explicit
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

/* ============================================================
   JSON-LD — structured data for Google and AI answer engines.
   Every value pulled from business config so the schema stays
   in sync when the business changes.
   ============================================================ */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: business.name,
  description: business.description,
  url: "https://talosindustries.co.zw",
  telephone: business.contact.phone,
  email: business.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: business.location.split(",")[0].trim(), // "Harare"
    addressCountry: "ZW",
  },
  areaServed: {
    "@type": "Country",
    name: "Zimbabwe",
  },
  serviceType: [
    "Web Design",
    "Web Development",
    "Website Maintenance",
    "Search Engine Optimisation",
    "Answer Engine Optimisation",
  ],
  // Social profiles — feeds Google's knowledge panel
  sameAs: business.contact.socials.map((s) => s.href),
};

/* ============================================================
   Root layout
   ============================================================ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
      style={themeToCssVars(business.theme)}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}