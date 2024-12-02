import Navigation from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// Metadata for the document head
export const metadata = {
  title: "Jarod Rutledge, PhD",
  description: "Research, investments, and strategy work in life sciences",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
