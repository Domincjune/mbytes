import type { ReactNode } from 'react';
import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'MBYTES — Agentic AI Consulting',
  description: 'Premium AI-native product consulting, agentic AI integration, and tech modernization.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#0d0d0f] text-white antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
