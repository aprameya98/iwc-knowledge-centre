'use client';
import { Search } from 'lucide-react';

export default function HeroSearch() {
  const open = () => window.dispatchEvent(new CustomEvent('openCommandPalette'));

  return (
    <div className="mb-14">
      {/* Logo */}
      <div className="flex justify-center mb-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/CID_Default_Logo_1.png" alt="Credence ID" className="h-12 w-auto" />
      </div>

      {/* Heading + subtext */}
      <div className="text-center mb-10">
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#1A1A1A',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
          }}
        >
          IwC Knowledge Centre
        </h1>
        <p
          style={{
            fontSize: '17px',
            fontWeight: 400,
            color: '#6B7280',
            lineHeight: 1.65,
            maxWidth: '440px',
            margin: '0 auto',
          }}
        >
          Everything you need to understand, deploy, and use Issuance with Credence.
        </p>
      </div>

      {/* Search bar */}
      <div className="flex justify-center">
        <button
          onClick={open}
          className="w-full max-w-[580px] flex items-center gap-3 px-5 text-left transition-all duration-150 hover:border-[#E85C2C] hover:shadow-sm focus:outline-none focus:border-[#E85C2C]"
          style={{
            height: '52px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0DE',
            borderRadius: '12px',
            color: '#9CA3AF',
            fontSize: '15px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}
          aria-label="Search the documentation"
        >
          <Search size={17} style={{ color: '#B0B0B0', flexShrink: 0 }} />
          <span className="flex-1" style={{ color: '#9CA3AF' }}>Search documentation...</span>
          <kbd
            className="hidden sm:flex items-center gap-0.5 px-2 py-1 rounded text-xs"
            style={{
              backgroundColor: '#F5F5F4',
              color: '#9CA3AF',
              border: '1px solid #E5E5E3',
              fontFamily: 'monospace',
              fontSize: '11px',
            }}
          >
            ⌘K
          </kbd>
        </button>
      </div>
    </div>
  );
}
