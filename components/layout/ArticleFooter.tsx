'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ThumbsUp, ThumbsDown } from 'lucide-react';
import type { NavItem } from '@/lib/navigation';

interface ArticleFooterProps {
  prev: NavItem | null;
  next: NavItem | null;
}

export default function ArticleFooter({ prev, next }: ArticleFooterProps) {
  const [feedback, setFeedback] = useState<'positive' | 'negative' | null>(null);

  return (
    <footer className="mt-12 pt-6" style={{ borderTop: '1px solid #E5E5E3' }}>
      {/* Prev/Next navigation */}
      <div className="flex gap-4 mb-8">
        {prev ? (
          <Link
            href={prev.href}
            className="flex-1 flex flex-col gap-1 p-4 rounded-lg border no-underline transition-all duration-100 group"
            style={{ borderColor: '#E5E5E3' }}
          >
            <span className="flex items-center gap-1.5 text-xs" style={{ color: '#6B7280' }}>
              <ArrowLeft size={12} />
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
            className="flex-1 flex flex-col gap-1 p-4 rounded-lg border no-underline transition-all duration-100 group text-right"
            style={{ borderColor: '#E5E5E3' }}
          >
            <span className="flex items-center gap-1.5 text-xs justify-end" style={{ color: '#6B7280' }}>
              Next
              <ArrowRight size={12} />
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

      {/* Feedback */}
      <div className="flex items-center gap-4">
        <span className="text-sm" style={{ color: '#6B7280' }}>Was this article helpful?</span>
        {feedback ? (
          <span className="text-sm" style={{ color: '#4CAF7D' }}>Thanks for your feedback!</span>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => setFeedback('positive')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded border text-sm transition-all duration-100 hover:border-[#4CAF7D] hover:text-[#4CAF7D]"
              style={{ borderColor: '#E5E5E3', color: '#6B7280' }}
              aria-label="Mark article as helpful"
            >
              <ThumbsUp size={13} />
              Yes
            </button>
            <button
              onClick={() => setFeedback('negative')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded border text-sm transition-all duration-100 hover:border-red-400 hover:text-red-500"
              style={{ borderColor: '#E5E5E3', color: '#6B7280' }}
              aria-label="Mark article as not helpful"
            >
              <ThumbsDown size={13} />
              No
            </button>
          </div>
        )}
      </div>
    </footer>
  );
}
