import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Psychologist in Santa Monica, CA",
  description: "Specialized therapeutic support for anxiety, life transitions, and relationships. Licensed clinical psychologist offering in-person and telehealth sessions in Santa Monica.",
  keywords: ["Psychologist Santa Monica", "Therapy for Anxiety", "Relationship Counseling", "CBT Therapist CA", "Dr. Maya Reynolds"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
