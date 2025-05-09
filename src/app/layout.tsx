import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navigation from '@/components/Navigation';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My professional portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
