import type { Metadata } from 'next';
import './globals.css';
import CommandPalette from '@/components/search/CommandPalette';
import KBShell from '@/components/layout/KBShell';

export const metadata: Metadata = {
  title: {
    template: '%s | IwC Knowledge Base | Credence ID',
    default: 'IwC Knowledge Base | Credence ID',
  },
  description: "Complete documentation for Issuance with Credence (IwC) — Credence ID's digital identity credentialing platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ backgroundColor: '#ffffff', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        <KBShell>{children}</KBShell>
        <CommandPalette />
      </body>
    </html>
  );
}
