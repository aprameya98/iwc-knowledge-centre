'use client';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { NavItem } from '@/lib/navigation';

interface ArticleNavProps {
  prev: NavItem | null;
  next: NavItem | null;
}

export default function ArticleNav({ prev, next }: ArticleNavProps) {
  return (
    <div className="mt-14 pt-8" style={{ borderTop: '2px solid #3ac0c5' }}>
      <div className="flex gap-3">
        {prev ? (
          <Link
            href={prev.href}
            className="group flex-1 flex flex-col gap-1.5 p-4 rounded-lg border no-underline transition-all duration-150"
            style={{ borderColor: '#e5e5e5', backgroundColor: '#ffffff' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#3ac0c5'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e5e5e5'; }}
          >
            <span className="flex items-center gap-1.5 text-xs" style={{ color: '#999999' }}>
              <ArrowLeft size={11} /> Previous
            </span>
            <span className="text-sm font-medium transition-colors duration-100" style={{ color: '#434343' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f1592b'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#434343'; }}
            >
              {prev.title}
            </span>
          </Link>
        ) : <div className="flex-1" />}

        {next ? (
          <Link
            href={next.href}
            className="group flex-1 flex flex-col gap-1.5 p-4 rounded-lg border no-underline transition-all duration-150 text-right"
            style={{ borderColor: '#e5e5e5', backgroundColor: '#ffffff' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#3ac0c5'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e5e5e5'; }}
          >
            <span className="flex items-center gap-1.5 justify-end text-xs" style={{ color: '#999999' }}>
              Next <ArrowRight size={11} />
            </span>
            <span className="text-sm font-medium transition-colors duration-100" style={{ color: '#434343' }}>
              {next.title}
            </span>
          </Link>
        ) : <div className="flex-1" />}
      </div>
    </div>
  );
}
