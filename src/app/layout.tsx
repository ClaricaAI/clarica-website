import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Clarica | AI Agency for Business",
  description:
    "We audit your operations, build bespoke AI systems, and train your team to use them.",
  openGraph: {
    title: "Clarica — AI Agency",
    description:
      "We build custom software and AI systems that help businesses work faster.",
    url: "https://clarica.co.uk",
    siteName: "Clarica",
    images: [
      {
        url: "https://clarica.co.uk/og-image.png",
        width: 1200,
        height: 627,
      },
    ],
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          id="vtag-ai-js"
          async
          src="https://r2.leadsy.ai/tag.js"
          data-pid="1gXZjbSPY26fOQ7pZ"
          data-version="062024"
        />
      </head>
      <body className="font-sans text-gray-700 antialiased bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
