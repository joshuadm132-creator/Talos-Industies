// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { themeToCssVars } from "@/config/ThemeToCSS";
import { business } from "@/config/business";
import { site } from "@/config/businesses/site";

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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  verification: {
    // FIX 1: Only the token string, not the full HTML tag
    google: "PDXehE1cbUnD9Ot9l_pY5HSxIW5BtWRK9QcwPTEcwsc",
  },

  title: {
    default: `${site.name} | Web Design & Development in Zimbabwe`,
    template: `%s | ${site.name}`,
  },

  description: site.description,

  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,

  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "website",
    images: [
      {
        url: site.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${site.name} — Web Design & Development`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [site.defaultOgImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  description: site.description,
  url: site.url,
  logo: `${site.url}/images/logo.png`, 
  image: `${site.url}${site.defaultOgImage}`,
  telephone: business.contact.phone,
  email: business.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: site.country,
  },
  areaServed: [
    { "@type": "Country", name: "Zimbabwe" },
    { "@type": "Place", name: "Southern Africa" },
  ],
  serviceType: [
    "Web Design",
    "Web Development",
    "Website Maintenance",
    "Search Engine Optimisation",
    "Answer Engine Optimisation",
    "Domain Name Registration", // Fixed typo
  ],
  knowsAbout: [
    "Next.js development",
    "React web applications",
    "Technical SEO",
    "Web design in Zimbabwe",
    "Answer Engine Optimisation",
    "E-commerce integration",
    "Payment gateway integration in Zimbabwe",
  ],
  sameAs: business.contact.socials.map((s) => s.href),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en-ZW", // FIX add languages sring
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-ZW"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
      style={themeToCssVars(business.theme)}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}