'use client';

import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import type { NavSection } from '@/lib/navigation';
import SidebarItem from './SidebarItem';

interface SidebarSectionProps {
  section: NavSection;
  currentPath: string;
}

export default function SidebarSection({ section, currentPath }: SidebarSectionProps) {
  const isActive = section.items.some(item => item.href === currentPath);
  const [isOpen, setIsOpen] = useState(isActive);

  useEffect(() => {
    if (isActive) setIsOpen(true);
  }, [isActive]);

  return (
    <div
      className="mb-1 rounded transition-all duration-200"
      style={{
        border: isOpen ? '1px solid #2A2A2A' : '1px solid transparent',
        backgroundColor: isOpen ? '#141414' : 'transparent',
      }}
    >
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="w-full flex items-center justify-between px-3 py-2 rounded text-left transition-colors duration-100 hover:bg-[#1A1A1A]"
        aria-expanded={isOpen}
        aria-controls={`section-${section.slug}`}
      >
        <span
          className="text-xs font-medium uppercase tracking-widest"
          style={{ color: '#9CA3AF', letterSpacing: '0.06em', fontSize: '11px' }}
        >
          {section.label}
        </span>
        <ChevronRight
          size={12}
          style={{ color: '#6B7280', transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 200ms ease', flexShrink: 0 }}
        />
      </button>

      <div
        id={`section-${section.slug}`}
        style={{
          overflow: 'hidden',
          maxHeight: isOpen ? '2000px' : '0',
          transition: 'max-height 200ms ease',
        }}
      >
        <div className="pl-1 pb-1">
          {section.items.map((item) => (
            <SidebarItem
              key={item.href}
              item={item}
              isActive={currentPath === item.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
