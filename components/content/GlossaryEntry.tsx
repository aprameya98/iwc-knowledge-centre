'use client';
import { useState } from 'react';

interface GlossaryEntryProps {
  term: string;
  definition: string;
}

export default function GlossaryEntry({ term, definition }: GlossaryEntryProps) {
  const [show, setShow] = useState(false);
  return (
    <span className="relative inline-block">
      <span
        style={{ borderBottom: '1px dashed #9CA3AF', cursor: 'help' }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        tabIndex={0}
        aria-describedby={`tooltip-${term.replace(/\s+/g, '-')}`}
      >
        {term}
      </span>
      {show && (
        <span
          id={`tooltip-${term.replace(/\s+/g, '-')}`}
          role="tooltip"
          className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-lg shadow-lg"
          style={{ backgroundColor: '#1A1A1A', color: '#E5E5E3', fontSize: '12px', lineHeight: '1.5' }}
        >
          <strong className="block mb-1" style={{ color: '#FFFFFF', fontSize: '12px' }}>{term}</strong>
          {definition}
          <span className="absolute left-1/2 -translate-x-1/2 top-full" style={{ borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '6px solid #1A1A1A' }} />
        </span>
      )}
    </span>
  );
}
