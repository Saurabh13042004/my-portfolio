import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://saurabhshukla.tech/"),

	title: {
		template: "%s | Saurabh Shukla",
		default: "Saurabh Shukla",
	},
	authors: {
		name: "Saurabh Shukla",
	},

	description:
		"I'm a fullstack developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "Saurabh Shukla ",
		description:
    "I'm a fullstack developer passionate about building a modern web application that users love.",
		url: "http://saurabhshukla.tech/",
		siteName: "Saurabh Shukla",
		images: "https://mir-s3-cdn-cf.behance.net/projects/404/6a438557657667.Y3JvcCwxOTcyLDE1NDQsMCw5Mg.png",
		type: "website",
	},
	keywords: ["saurabh shukla", "saurabh shukla portfolio", "nextjs portfolio" , "saurabh shukla chitkara university"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
