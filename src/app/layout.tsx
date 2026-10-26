import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Md. Abdullah Shishir - Developer Portfolio',
  description: 'Md. Abdullah Shishir is a Full Stack Developer specializing in scalable backend systems and responsive frontend architectures.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/favicon.svg'],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'Developer Portfolio - Md. Abdullah Shishir',
    description: 'Md. Abdullah Shishir is a Full Stack Developer specializing in scalable backend systems and responsive frontend architectures.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.svg" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
