import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Saurabh Shukla | Full-Stack Developer & AI Engineer",
  description: "Saurabh Shukla is a full-stack web developer and AI engineer specializing in building high-performance websites, SaaS apps, and AI-powered solutions using React, Node.js, Python, and modern cloud platforms.",
  keywords: "Saurabh Shukla, Full Stack Developer, AI Developer, React Developer, Node.js Developer, SaaS Developer, Freelance Web Developer, India Developer, Portfolio Website, GPT Developer, OpenAI Projects, Next.js, Tailwind CSS, Vite",
  authors: [{ name: "Saurabh Shukla" }],
  creator: "Saurabh Shukla",
  publisher: "Saurabh Shukla",
  robots: "index, follow",
  themeColor: "#000000",
  openGraph: {
    type: "website",
    title: "Saurabh Shukla — Developer Portfolio",
    description: "Explore the portfolio of Saurabh Shukla — a full-stack developer building scalable apps and AI-integrated web platforms.",
    images: [{ url: "https://saurabhshukla.live/og-image.jpg" }],
    url: "https://saurabhshukla.live",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Shukla | Full-Stack & AI Developer",
    description: "Building fast, scalable, and smart apps for the modern web.",
    images: ["https://saurabhshukla.live/twitter-card.jpg"],
  },
  metadataBase: new URL("https://saurabhshukla.live"),
  alternates: {
    canonical: "/",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  locale: "en-IN",
}