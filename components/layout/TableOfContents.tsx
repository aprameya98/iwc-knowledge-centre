'use client';

import { useState, useEffect, useRef } from 'react';

export interface TocItem {
  id: string;
  title: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    const headingElements = items
      .map(item => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    // Use the topmost visible heading as the active one
    const updateActive = () => {
      const scrollY = window.scrollY + 80;
      let current = headingElements[0]?.id ?? '';
      for (const el of headingElements) {
        if (el.offsetTop <= scrollY) {
          current = el.id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();

    return () => {
      window.removeEventListener('scroll', updateActive);
      observerRef.current?.disconnect();
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav
      className="hidden xl:block w-[216px] flex-shrink-0 sticky top-16 self-start max-h-[calc(100vh-80px)] overflow-y-auto"
      aria-label="Table of contents"
    >
      <p
        className="text-xs font-semibold uppercase mb-3 tracking-wider"
        style={{ color: '#9CA3AF', letterSpacing: '0.08em' }}
      >
        On this page
      </p>

      <ul className="space-y-0">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block py-1.5 text-[13px] no-underline transition-all duration-150"
                style={{
                  color: isActive ? '#1A1A1A' : '#9CA3AF',
                  fontWeight: isActive ? '500' : '400',
                  lineHeight: '1.5',
                  paddingLeft: item.level === 3 ? '20px' : '10px',
                  borderLeft: `2px solid ${isActive ? '#E85C2C' : '#E5E5E3'}`,
                  display: 'block',
                }}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
