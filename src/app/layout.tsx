import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grace Aluminium | Premium Aluminium Sections & Solutions Pakistan",
  description:
    "Grace Aluminium is a leading retailer and wholesaler of premium aluminium products. We offer a complete range of windows, doors, and accessories with superior strength and quality.",
  keywords: [
    "Grace Aluminium",
    "Aluminium supplier Pakistan",
    "Aluminium sections Multan",
    "Aluminium profiles Pakistan",
    "Premium aluminium solutions",
    "Wholesale aluminium supplier",
    "Aluminium windows Pakistan",
    "Aluminium doors Pakistan",
  ],
  openGraph: {
    title: "Grace Aluminium | Premium Aluminium Sections & Solutions",
    description:
      "Retailer and wholesaler of premium aluminium products, offering complete solutions for windows, doors, and architectural accessories across Pakistan.",
    type: "website",
    images: [
      {
        url: "/assets/logo/log.jpeg",
        width: 1200,
        height: 630,
        alt: "Grace Aluminum Logo",
      },
    ],
  },
  icons: {
    icon: "/assets/logo/logo.jpeg",
    shortcut: "/assets/logo/logo.jpeg",
    apple: "/assets/logo/logo.jpeg",
  },
  verification: {
    google: "J2ti2_vWuLAz4IC621v4fscLeRgWyde0lNcmXrf0e2E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
