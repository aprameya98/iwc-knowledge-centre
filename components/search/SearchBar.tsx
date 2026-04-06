'use client';

import { Search } from 'lucide-react';

export default function SearchBar() {
  const openPalette = () => {
    const event = new CustomEvent('openCommandPalette');
    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={openPalette}
      className="w-full flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-colors duration-100"
      style={{
        backgroundColor: '#1A1A1A',
        border: '1px solid #2A2A2A',
        color: '#6B7280',
      }}
      aria-label="Search documentation"
    >
      <Search size={14} style={{ color: '#6B7280', flexShrink: 0 }} />
      <span className="flex-1 text-left text-xs">Search documentation...</span>
      <kbd className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: '#2A2A2A', color: '#6B7280', fontFamily: 'monospace' }}>⌘K</kbd>
    </button>
  );
}
