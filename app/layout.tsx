import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CommandPalette from '@/components/search/CommandPalette';
import KBShell from '@/components/layout/KBShell';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | IwC Knowledge Base | Credence ID',
    default: 'IwC Knowledge Base | Credence ID',
  },
  description: "Complete documentation for Issuance with Credence (IwC) — Credence ID's digital identity credentialing platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased" style={{ backgroundColor: '#FAFAF9', fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif' }}>
        <KBShell>{children}</KBShell>
        <CommandPalette />
      </body>
    </html>
  );
}
