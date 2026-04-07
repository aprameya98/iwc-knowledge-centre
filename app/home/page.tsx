import type { Metadata } from 'next';
import HomePage from '@/components/homepage/HomePage';

export const metadata: Metadata = {
  title: 'IwC Knowledge Centre | Credence ID',
  description: "Complete documentation for Issuance with Credence (IwC) — Credence ID's digital identity credentialing platform.",
};

export default function Page() {
  return <HomePage />;
}
