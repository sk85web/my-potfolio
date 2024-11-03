import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrainsMono',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Sergey Kovalev — Frontend Developer',
  description:
    'Portfolio of Sergey Kovalev, a frontend developer from Minsk. Explore my projects, skills, and contact information for hiring.',
  keywords:
    'Sergey Kovalev, frontend developer, portfolio, JavaScript, TypeScript, React, Redux, Vite, junior frontend developer, web developer, hire developer',
  openGraph: {
    title: 'Sergey Kovalev — Frontend Developer',
    description:
      'Welcome to the portfolio of Sergey Kovalev, a frontend developer. Discover my projects and skills.',
    type: 'website',
    url: 'https://your-site.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sergey Kovalev — Frontend Developer',
    description:
      'Portfolio of Sergey Kovalev, frontend developer, showcasing skills and projects.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
