import type { Metadata } from 'next';
import HeroSearch from '@/components/homepage/HeroSearch';
import SectionGrid from '@/components/homepage/SectionGrid';

export const metadata: Metadata = {
  title: 'IwC Knowledge Base | Credence ID',
  description: "Complete documentation for Issuance with Credence (IwC) — Credence ID's digital identity credentialing platform.",
};

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-8 sm:px-12 py-16">
      <HeroSearch />
      <SectionGrid />
    </div>
  );
}
