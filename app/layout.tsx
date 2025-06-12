import { metadata } from './metadata'
import './globals.css'
import Script from 'next/script'

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Saurabh Shukla",
              "url": "https://saurabhshukla.live",
              "sameAs": [
                "https://github.com/saurabhshukla-tech",
                "https://linkedin.com/in/saurabhshukla",
                "https://twitter.com/saurabh_codes"
              ],
              "jobTitle": "Full-Stack Developer & AI Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance / DICE Solutions"
              },
              "knowsAbout": [
                "Full Stack Development",
                "Artificial Intelligence",
                "React.js",
                "Next.js",
                "Node.js",
                "OpenAI",
                "SaaS Platforms",
                "Tailwind CSS",
                "Python",
                "Django",
                "SQL",
                "Redis",
                "API Integration"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
