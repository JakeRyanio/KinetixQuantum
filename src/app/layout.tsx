import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kinetix Quantum - Capital in Motion",
  description: "Capital is energy. We move it where it creates real-world value—simply, transparently, relentlessly. A quantum finance fund focused on kinetic capital allocation across real assets, future markets, and timeless stores of value.",
  keywords: [
    "investment fund",
    "quantum finance",
    "capital allocation",
    "alternative investments",
    "private equity",
    "real estate",
    "commodities",
    "tokenization",
    "kinetic capital",
    "wealth management"
  ],
  authors: [{ name: "Kinetix Quantum Fund" }],
  creator: "Kinetix Quantum Fund",
  publisher: "Kinetix Quantum Fund",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kinetixquantum.com",
    siteName: "Kinetix Quantum",
    title: "Kinetix Quantum - Capital in Motion",
    description: "Capital is energy. We move it where it creates real-world value—simply, transparently, relentlessly.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kinetix Quantum - Capital in Motion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinetix Quantum - Capital in Motion",
    description: "Capital is energy. We move it where it creates real-world value—simply, transparently, relentlessly.",
    images: ["/og-image.jpg"],
    creator: "@KinetixQuantum",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#22D3EE",
      },
    ],
  },
  metadataBase: new URL("https://kinetixquantum.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "Kinetix Quantum Fund",
              "description": "Capital is energy. We move it where it creates real-world value—simply, transparently, relentlessly.",
              "url": "https://kinetixquantum.com",
              "logo": "https://kinetixquantum.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "investors@kinetixquantum.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://linkedin.com/company/kinetix-quantum",
                "https://twitter.com/KinetixQuantum"
              ]
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}