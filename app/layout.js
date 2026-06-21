import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AQUA Z | Geomembrane & Containment Engineering Solutions | Africa & Middle East",
  description: "AQUA Z provides world-class geomembrane installation, containment solutions, and environmental engineering across Egypt, Africa, and the Middle East. ISO certified since 2009.",
  keywords: "geomembrane, containment solutions, engineering, Africa, Middle East, Egypt, environmental protection",
  metadataBase: new URL("https://aquaz-eng.com"),
  openGraph: {
    title: "AQUA Z | Engineering Excellence in Containment Solutions",
    description: "Leading provider of geomembrane and containment engineering across Africa and the Middle East since 2009",
    url: "https://aquaz-eng.com",
    siteName: "AQUA Z",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AQUA Z Engineering",
        type: "image/jpeg",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AQUA Z | Containment Engineering Solutions",
    description: "World-class geomembrane and environmental engineering",
    images: ["/assets/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "https://aquaz-eng.com",
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AQUA Z",
    "url": "https://aquaz-eng.com",
    "logo": "https://aquaz-eng.com/logo.png",
    "description": "Leading provider of geomembrane and environmental containment solutions",
    "sameAs": [
      "https://www.linkedin.com/company/aqua-z",
      "https://www.facebook.com/aquazeng"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Engineering Blvd",
      "addressLocality": "Nasr City",
      "addressRegion": "Cairo",
      "postalCode": "11371",
      "addressCountry": "EG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Technical Support",
      "telephone": "+20-2-01096019174",
      "email": "contact@aquaz-eng.com"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <meta name="theme-color" content="#005B96" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
