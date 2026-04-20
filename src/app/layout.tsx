import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trendy | Premium Aluminum & Interior Solutions",
  description:
    "Crafting exceptional aluminum and interior design solutions. Premium exterior and interior installations including windows, doors, kitchens, wardrobes, and shower enclosures.",
  keywords: [
    "aluminum solutions",
    "interior design",
    "aluminum windows",
    "aluminum doors",
    "kitchen design",
    "wardrobe solutions",
    "shower enclosures",
    "premium interiors",
  ],
  openGraph: {
    title: "Trendy | Premium Aluminum & Interior Solutions",
    description:
      "Crafting exceptional aluminum and interior design solutions for modern spaces.",
    type: "website",
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
