import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Md Abdullah Shishir - Full Stack Developer',
  description: 'Md Abdullah Shishir is a Full Stack Developer specializing in scalable backend systems and responsive frontend architectures.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
