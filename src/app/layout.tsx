import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kenya Astra Hub - Redefining Tourism",
  description: "Experience Kenya like never before with AI-powered itineraries, AR cultural tours, and sustainable travel options. Join us in redefining Kenyan tourism.",
  keywords: ["Kenya tourism", "travel", "AI itinerary", "AR tours", "sustainable travel", "African safari"],
  authors: [{ name: "Kenya Astra Hub Team" }],
  openGraph: {
    title: "Kenya Astra Hub - Redefining Tourism",
    description: "Transform your Kenyan adventure with cutting-edge technology and authentic cultural experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-white text-gray-900`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
