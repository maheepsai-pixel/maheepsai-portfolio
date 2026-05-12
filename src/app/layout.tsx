import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://maheepsaijinka.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Maheepsai Jinka | NPI Engineer & Data Analytics Expert",
    template: "%s | Maheepsai Jinka",
  },
  description:
    "Maheepsai Jinka — New Product Introduction Engineer at Intel driving $11M+ savings, 200+ NPI launches, and 99% yield. Expert in Python, SQL, Tableau, Agile, DOE, and data-driven semiconductor manufacturing.",
  keywords: [
    "Maheepsai Jinka", "Maheep Jinka", "New Product Introduction Engineer",
    "NPI Engineer", "Intel NPI Engineer", "Semiconductor",
    "Data Analytics", "Python SQL Tableau", "Mechanical Engineering", "University of Cincinnati",
    "Manufacturing Engineering", "DOE ANOVA", "Amazon Redshift", "Power BI", "Agile Scrum",
    "Yield Improvement", "ETL", "KPI Dashboard", "8D Analysis", "PLM",
  ],
  authors: [{ name: "Maheepsai Jinka", url: BASE_URL }],
  creator: "Maheepsai Jinka",
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Maheepsai Jinka Portfolio",
    title: "Maheepsai Jinka | NPI Engineer & Data Analytics Expert",
    description:
      "New Product Introduction Engineer at Intel with $11M+ cost savings, 200+ NPI launches. Expertise in data analytics, semiconductor manufacturing, Python, SQL, Tableau.",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Maheepsai Jinka Portfolio" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maheepsai Jinka | NPI Engineer & Data Analytics Expert",
    description: "NPI Engineer at Intel with $11M+ cost savings and 200+ NPI launches.",
    images: [`${BASE_URL}/og-image.png`],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: BASE_URL },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Maheepsai Jinka",
      alternateName: "Maheep Jinka",
      url: BASE_URL,
      email: "maheepsaij@gmail.com",
      telephone: "+1-513-954-3525",
      sameAs: ["https://www.linkedin.com/in/maheep-j-1b3406185/"],
      jobTitle: "New Product Introduction Engineer",
      worksFor: { "@type": "Organization", name: "Intel Corporation", url: "https://www.intel.com" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "University of Cincinnati", url: "https://www.uc.edu" },
      description: "New Product Introduction Engineer at Intel with expertise in NPI, data analytics, Python, SQL, Tableau, semiconductor manufacturing, and Agile. Achieved $11M+ in cost savings and managed 200+ new product introductions.",
      knowsAbout: ["Product Management","NPI","Data Analytics","Python","SQL","Tableau","Power BI","Amazon Redshift","DOE","ANOVA","Agile","Scrum","Manufacturing Engineering","Yield Improvement","ETL","SPC"],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Maheepsai Jinka Portfolio",
      author: { "@id": `${BASE_URL}/#person` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <meta name="theme-color" content="#F7F6F2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
