import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vscopefilms",
  description: "Cinematic stories, behind-the-scenes content, and creative projects from Vscopefilms. Launching soon.",
  keywords: ["film", "cinema", "creative", "production", "vscopefilms"],
  authors: [{ name: "vscopefilms" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vscopefilms.vercel.app",
    siteName: "vscopefilms",
    title: "vscopefilms — Coming Soon",
    description: "Cinematic stories, behind-the-scenes content, and creative projects from vscopefilms. Launching soon.",
    images: [
      {
        url: "https://vscopefilms.vercel.app/blackwhite.png",
        width: 1200,
        height: 800,
        alt: "vscopefilms Coming Soon",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vscopefilms — Coming Soon",
    description: "Cinematic stories, behind-the-scenes content, and creative projects from Vscopefilms. Launching soon.",
    images: ["https://vscopefilms.com/balckwhite.png"],
    creator: "@vscopefilms",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
