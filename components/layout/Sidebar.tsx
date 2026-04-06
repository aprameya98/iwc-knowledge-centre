'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { navigation } from '@/lib/navigation';
import SidebarSection from './SidebarSection';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const pathname = usePathname();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const event = new CustomEvent('openCommandPalette');
        window.dispatchEvent(event);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      {/* Mobile overlay backdrop */}
      {isOpen && onClose && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[260px] z-40 flex flex-col overflow-hidden transition-transform duration-200 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
        style={{ backgroundColor: '#0F0F0F' }}
        aria-label="Site navigation"
      >
        {/* Logo area */}
        <div className="flex items-start justify-between px-4 pt-5 pb-4 border-b border-white/10">
          <div className="flex-1 min-w-0">
            <Link href="https://credenceid.com" className="block" aria-label="Credence ID website">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/CID_Default_Logo_1.png"
                alt="Credence ID"
                className="h-7 w-auto"
                style={{ borderRadius: '4px' }}
              />
            </Link>
            <Link href="/home" className="block mt-2 no-underline group" aria-label="Go to Knowledge Centre home">
              <p className="text-xs leading-tight transition-colors duration-100" style={{ color: '#9CA3AF', letterSpacing: '0.02em', fontWeight: 500 }}>
                Issuance with Credence<br/>
                <span className="group-hover:text-white transition-colors duration-100" style={{ color: '#6B7280', fontWeight: 400 }}>Knowledge Centre</span>
              </p>
            </Link>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-1 rounded text-gray-500 hover:text-white transition-colors"
              aria-label="Close navigation"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Search trigger */}
        <div className="px-3 py-3 border-b border-white/10">
          <button
            onClick={() => {
              const event = new CustomEvent('openCommandPalette');
              window.dispatchEvent(event);
            }}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-colors duration-100"
            style={{
              backgroundColor: '#1A1A1A',
              border: '1px solid #2A2A2A',
              color: '#6B7280',
            }}
            aria-label="Search documentation, press Command K"
          >
            <Search size={14} style={{ color: '#6B7280', flexShrink: 0 }} />
            <span className="flex-1 text-left text-xs">Search documentation...</span>
            <kbd className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: '#2A2A2A', color: '#6B7280', fontFamily: 'monospace' }}>⌘K</kbd>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 px-2">
          {navigation.map((section) => (
            <SidebarSection
              key={section.slug}
              section={section}
              currentPath={pathname}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}
