import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";

const displayFont = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600"],
});

const interfaceFont = Manrope({
  subsets: ["latin"],
  variable: "--font-interface",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | One 8 Restobar",
    default: "One 8 Restobar",
  },
  description: "A contemporary restobar shaped around shared plates, crafted pours, and evenings that move at their own pace.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "One 8 Restobar",
    description: "A contemporary restobar shaped around shared plates, crafted pours, and evenings that move at their own pace.",
    url: siteUrl,
    siteName: "One 8 Restobar",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${interfaceFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
