import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import KymaNav from "@/components/KymaNav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wassim Asraf — Motion. Content. Results.",
  description:
    "Social Media Manager, Motion Designer & Video Editor. Based in Cairo, working globally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-canvas text-ink">
        <KymaNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
