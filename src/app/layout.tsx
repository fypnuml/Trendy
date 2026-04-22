import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grace Aluminum | Premium Aluminum Sections & Solutions Pakistan",
  description:
    "Grace Aluminum is a leading wholesale supplier of premium aluminium sections in Pakistan. Offering all gauges and profiles, we provide high-quality aluminum windows, doors, kitchens, and wardrobes.",
  keywords: [
    "Grace Aluminum",
    "Aluminum supplier Pakistan",
    "Aluminium sections Multan",
    "Aluminum profiles Pakistan",
    "Premium aluminum solutions",
    "Wholesale aluminum supplier",
    "Aluminum windows Pakistan",
    "Aluminum doors Pakistan",
  ],
  openGraph: {
    title: "Grace Aluminum | Premium Aluminum Sections & Solutions",
    description:
      "Wholesale supplier of premium aluminium sections, offering all gauges and profiles for modern construction and interiors across Pakistan.",
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
    icon: "/assets/logo/log.jpeg",
    shortcut: "/assets/logo/log.jpeg",
    apple: "/assets/logo/log.jpeg",
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
