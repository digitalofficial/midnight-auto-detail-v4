import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Midnight Auto Detail | Car Detailing & Ceramic Coating in Tucson, AZ",
  description:
    "Tucson's premier car detailing, ceramic coating, paint correction & PPF studio. Premium hand-wash, interior detail, and protection packages. Mobile service available.",
  keywords:
    "car detailing Tucson, ceramic coating Tucson, paint correction, PPF, auto detail, hand wash, interior detail, Tucson AZ",
  openGraph: {
    title: "Midnight Auto Detail | Car Detailing & Ceramic Coating in Tucson, AZ",
    description:
      "Premium car detailing, ceramic coating, and paint protection in Tucson, AZ.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Midnight Auto Detail",
    description:
      "Premium car detailing, ceramic coating, paint correction, and PPF in Tucson, AZ.",
    url: "https://midnightautodetail.com",
    telephone: "(520) 555-0199",
    email: "info@midnightautodetail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tucson",
      addressRegion: "AZ",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.2226,
      longitude: -110.9747,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "00:00",
        closes: "00:00",
        description: "By appointment only",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Tucson",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
