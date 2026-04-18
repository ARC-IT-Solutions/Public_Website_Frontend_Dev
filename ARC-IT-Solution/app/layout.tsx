import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://www.arcit.in'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ARC IT Solutions — Software Engineering & Creative Design Agency',
    template: '%s | ARC IT Solutions',
  },
  description:
    'ARC IT Solutions is a premium software engineering and creative design agency crafting enduring digital products, brand identities, and bespoke technology solutions for ambitious businesses.',
  keywords: [
    'software engineering agency',
    'creative design studio',
    'digital product design',
    'brand identity design',
    'custom software development',
    'UI UX design agency',
    'full-stack development',
    'web application development',
  ],
  authors: [{ name: 'ARC IT Solutions' }],
  creator: 'ARC IT Solutions',
  publisher: 'ARC IT Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'ARC IT Solutions',
    title: 'ARC IT Solutions — Software Engineering & Creative Design Agency',
    description:
      'Premium software engineering and creative design for ambitious businesses. We build products that endure.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ARC IT Solutions — Software Engineering & Creative Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARC IT Solutions — Software Engineering & Creative Design Agency',
    description:
      'Premium software engineering and creative design for ambitious businesses.',
    images: ['/og-image.jpg'],
    creator: '@arcitsolutions',
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0d0d0b" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
           // In app/layout.tsx <head>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ARC IT Solutions",
    "description": "Software engineering and creative design agency.",
    "url": "https://www.arcit.in",
    "email": "info@arcit.in",
    "foundingDate": "2026",
    "areaServed": "Worldwide",
    "serviceType": [
      "Software Engineering",
      "Product Design",
      "Brand Identity",
      "Technology Consulting"
    ],
    "sameAs": [
      "https://linkedin.com/company/arcit",
      "https://twitter.com/arcit"
    ]
  })}}
/>
      </head>
      <body>
        {children}
      </body>
      
    </html>
 
  )
}
