import type { Metadata } from 'next'
import { Inter, Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'

// Font loading with Next.js font optimization
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '700', '900']
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '700', '900']
})


export const metadata: Metadata = {
  title: 'DON\'T START A BUSINESS... Until You Read This Rant',
  description: '37-Page Reality-Slapping Guide for Broke Geniuses, Skeptical Hustlers, and Anyone One More Motivational Quote Away From Snapping',
  keywords: ['business guide', 'make money online', 'entrepreneurship', 'Nigeria business', 'side hustle'],
//   openGraph: {
//     title: 'DON\'T START A BUSINESS... Until You Read This Rant',
//     description: 'The Brutally Honest Guide to Making Money Online (Without Losing Your Sanity)',
//     url: 'https://yourdomain.com',
//     siteName: 'BusinessRant',
//     images: [
//       {
//         url: 'https://yourdomain.com/og-image.jpg',
//         width: 1200,
//         height: 630,
//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'DON\'T START A BUSINESS... Until You Read This Rant',
//     description: '37-Page Reality-Slapping Guide for Broke Geniuses',
//     images: ['https://yourdomain.com/twitter-image.jpg'],
//   },
//   metadataBase: new URL('https://yourdomain.com'),
 }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${poppins.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f59e0b" />
        <meta name="msapplication-TileColor" content="#111827" />
        <meta name="theme-color" content="#111827" />

        {/* Preload critical assets */}
        <link 
          rel="preload" 
          href="/images/grid.svg" 
          as="image" 
          type="image/svg+xml"
        />
      </head>
      <body className="antialiased bg-gray-900 text-gray-100 min-h-screen">
        {/* Smooth scrolling */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                // Smooth scroll for anchor links
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                  anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                      behavior: 'smooth'
                    });
                  });
                });

                // Intersection Observer for active nav items
                const sections = document.querySelectorAll('section[id]');
                const navItems = document.querySelectorAll('nav button');
                
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navItems.forEach((item) => {
                          if (item.getAttribute('data-section') === id) {
                            item.classList.add('active-nav-item');
                          } else {
                            item.classList.remove('active-nav-item');
                          }
                        });
                      }
                    });
                  },
                  { rootMargin: '-50% 0px -50% 0px' }
                );

                sections.forEach((section) => {
                  observer.observe(section);
                });
              });
            `,
          }}
        />

        {children}

        {/* Global footer script */}
        {/* <script
          async
          src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"
        ></script> */}
      </body>
    </html>
  )
}