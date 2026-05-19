export const metadata = {
  title: 'Luxe Gallery | Elite AI-Generated Digital Art Collection',
  description: 'Explore a curated collection of elite AI-generated digital artwork. Where technology meets aesthetic beauty — discover, admire, and collect stunning digital art.',
  keywords: ['AI art', 'digital art gallery', 'AI generated art', 'NFT art', 'digital artwork', 'generative art', 'AI gallery', 'luxury art', 'luxe gallery', 'contemporary digital art'],
  authors: [{ name: 'Luxe Gallery' }],
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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
