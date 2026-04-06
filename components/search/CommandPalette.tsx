'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { searchIndex } from '@/content/search-index';
import { initSearch } from '@/lib/search';
import type { SearchResult } from '@/lib/search';
import Fuse from 'fuse.js';
import type { SearchItem } from '@/lib/search';

let fuseInstance: Fuse<SearchItem> | null = null;

function getOrInitFuse() {
  if (!fuseInstance) {
    fuseInstance = initSearch(searchIndex);
  }
  return fuseInstance;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
    setSelectedIndex(0);
  }, []);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') close();
    };
    window.addEventListener('openCommandPalette', handleOpen);
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('openCommandPalette', handleOpen);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [close]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const fuse = getOrInitFuse();
    const r = fuse.search(query, { limit: 8 });
    setResults(r);
    setSelectedIndex(0);
  }, [query]);

  const handleKeydown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      const item = results[selectedIndex];
      if (item) {
        router.push(item.item.href);
        close();
      }
    }
  };

  const suggestedLinks = [
    { title: 'Digital Credentials 101', href: '/learn/digital-credentials-101', section: 'Learn' },
    { title: 'How IwC Works', href: '/docs/identity-verification/product-guide/how-it-works', section: 'Identity Verification (IDV)' },
    { title: 'Using the Wallet App', href: '/holder/enrollment/using-wallet-app', section: 'Credence ID Wallet App' },
  ];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Search documentation"
    >
      <div
        className="w-[90vw] max-w-[560px] rounded-xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: '#FFFFFF', animation: 'palette-in 150ms ease forwards' }}
        onClick={e => e.stopPropagation()}
      >
        <style>{`
          @keyframes palette-in {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <div className="flex items-center gap-3 px-4 py-3.5">
          <Search size={18} style={{ color: '#9CA3AF', flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeydown}
            placeholder="Search documentation..."
            className="flex-1 text-lg outline-none bg-transparent placeholder-gray-400"
            style={{ color: '#1A1A1A', fontSize: '16px' }}
            aria-label="Search query"
          />
          {query && (
            <button onClick={() => setQuery('')} aria-label="Clear search">
              <X size={16} style={{ color: '#9CA3AF' }} />
            </button>
          )}
          <button
            onClick={close}
            className="px-2 py-1 text-xs rounded border"
            style={{ borderColor: '#E5E5E3', color: '#6B7280' }}
            aria-label="Close search"
          >
            Esc
          </button>
        </div>

        <div style={{ borderTop: '1px solid #E5E5E3' }} />

        <div className="max-h-[400px] overflow-y-auto">
          {query && results.length === 0 && (
            <div className="py-12 text-center" style={{ color: '#9CA3AF' }}>
              No results for &ldquo;{query}&rdquo;
            </div>
          )}

          {query && results.length > 0 && (
            <ul>
              {results.map((result, i) => (
                <li key={result.item.href}>
                  <button
                    className="w-full text-left px-4 py-3 transition-colors duration-75"
                    style={{ backgroundColor: i === selectedIndex ? '#F3F4F6' : 'transparent' }}
                    onClick={() => { router.push(result.item.href); close(); }}
                    onMouseEnter={() => setSelectedIndex(i)}
                  >
                    <p className="text-xs mb-0.5" style={{ color: '#6B7280' }}>{result.item.section}</p>
                    <p className="text-sm font-medium mb-0.5" style={{ color: '#1A1A1A' }}>{result.item.title}</p>
                    <p className="text-xs line-clamp-2" style={{ color: '#9CA3AF' }}>
                      {result.item.content.slice(0, 120)}...
                    </p>
                  </button>
                  {i < results.length - 1 && <div style={{ borderTop: '1px solid #F3F4F6' }} />}
                </li>
              ))}
            </ul>
          )}

          {!query && (
            <div className="p-4">
              <p className="text-xs font-medium uppercase mb-3" style={{ color: '#9CA3AF', letterSpacing: '0.06em' }}>Suggested starting points</p>
              <ul>
                {suggestedLinks.map(link => (
                  <li key={link.href}>
                    <button
                      className="w-full text-left px-3 py-2.5 rounded-lg transition-colors duration-75 hover:bg-gray-50"
                      onClick={() => { router.push(link.href); close(); }}
                    >
                      <p className="text-xs mb-0.5" style={{ color: '#6B7280' }}>{link.section}</p>
                      <p className="text-sm font-medium" style={{ color: '#1A1A1A' }}>{link.title}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
