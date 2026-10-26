import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Developer Portfolio - Md. Abdullah Shishir',
  description: 'Md. Abdullah Shishir is a Full Stack Developer specializing in scalable backend systems and responsive frontend architectures.',
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
