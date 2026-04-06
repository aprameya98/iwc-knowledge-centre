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
    <div className="mt-14 pt-8" style={{ borderTop: '1px solid #EBEBEA' }}>
      <div className="flex gap-3">
        {prev ? (
          <Link
            href={prev.href}
            className="group flex-1 flex flex-col gap-1.5 p-4 rounded-xl border no-underline transition-all duration-150 hover:shadow-sm"
            style={{ borderColor: '#E8E8E6', backgroundColor: '#FFFFFF' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#D0D0CE'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#E8E8E6'; }}
          >
            <span className="flex items-center gap-1.5 text-xs" style={{ color: '#9CA3AF' }}>
              <ArrowLeft size={11} />
              Previous
            </span>
            <span
              className="text-sm font-medium transition-colors duration-100 group-hover:text-[#E85C2C]"
              style={{ color: '#1A1A1A' }}
            >
              {prev.title}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {next ? (
          <Link
            href={next.href}
            className="group flex-1 flex flex-col gap-1.5 p-4 rounded-xl border no-underline transition-all duration-150 hover:shadow-sm text-right"
            style={{ borderColor: '#E8E8E6', backgroundColor: '#FFFFFF' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#D0D0CE'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#E8E8E6'; }}
          >
            <span className="flex items-center gap-1.5 justify-end text-xs" style={{ color: '#9CA3AF' }}>
              Next
              <ArrowRight size={11} />
            </span>
            <span
              className="text-sm font-medium transition-colors duration-100 group-hover:text-[#E85C2C]"
              style={{ color: '#1A1A1A' }}
            >
              {next.title}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
}
