import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Key to Ace Maths - Exam Prep Workshop',
  description: 'Maths Exam Prep Workshop with Keitumetse Motlhabane. Grade 10, 11 & 12 CAPS curriculum. 1 Oct - 1 Nov 2025.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
