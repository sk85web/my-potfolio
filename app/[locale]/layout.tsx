import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import '../globals.css';

import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

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

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <title>Sergey Kovalev — Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio of Sergey Kovalev, a frontend developer from Minsk. Explore my projects, skills, and contact information for hiring."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <PageTransition>{children}</PageTransition>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
