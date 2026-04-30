import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saurabh Shukla | Software Engineer & AI Developer",
  description: "Software Engineer building scalable systems, data pipelines, and AI tools. Focused on distributed systems, event-driven architectures (Kafka, Pub/Sub), and intelligent AI agents.",
  keywords: ["Saurabh Shukla", "Software Engineer", "AI Developer", "Distributed Systems", "Data Pipelines", "Zeotap", "Full Stack Developer"],
  authors: [{ name: "Saurabh Shukla" }],
  openGraph: {
    title: "Saurabh Shukla | Software Engineer & AI Developer",
    description: "Software Engineer building scalable systems, data pipelines, and AI tools.",
    url: "https://github.com/Saurabh13042004",
    siteName: "Saurabh Shukla Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
