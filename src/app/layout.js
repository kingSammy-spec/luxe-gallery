import Script from 'next/script';

export const metadata = {
  title: 'Luxe Gallery | Elite AI-Generated Digital Art Collection',
  description: 'Explore a curated collection of elite AI-generated digital artwork. Where technology meets aesthetic beauty — discover, admire, and collect stunning digital art.',
  keywords: ['AI art', 'digital art gallery', 'AI generated art', 'NFT art', 'digital artwork', 'generative art', 'AI gallery', 'luxury art', 'luxe gallery', 'contemporary digital art'],
  authors: [{ name: 'Luxe Gallery' }],
  other: {
    'google-adsense-account': 'ca-pub-7322019754286753'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Luxe Gallery | Elite AI-Generated Digital Art Collection',
    description: 'A curated collection of the finest AI-generated digital art. Explore the intersection of technology and aesthetic beauty.',
    siteName: 'Luxe Gallery',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxe Gallery | Elite AI Digital Art',
    description: 'Discover the finest curated AI-generated digital art at Luxe Gallery.',
  },
}

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Luxe Gallery",
    "description": "Explore a curated collection of elite AI-generated digital artwork. Where technology meets aesthetic beauty — discover, admire, and collect stunning digital art.",
    "url": "https://luxe-gallery.vercel.app"
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7322019754286753"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
