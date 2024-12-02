import type { Metadata } from "next";
import localFont from "next/font/local";
import Navigation from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jarod Rutledge, PhD", // Update this
  description: "Research, investments, and strategy work in life sciences", // Update this
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
