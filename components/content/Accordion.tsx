'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem { question: string; answer: string; }
interface AccordionProps { items: AccordionItem[]; }

function Row({ item }: { item: AccordionItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #E5E5E3' }}>
      <button
        onClick={() => setOpen(p => !p)}
        className="w-full flex items-center justify-between py-4 text-left"
        aria-expanded={open}
        style={{ color: '#1A1A1A' }}
      >
        <span className="text-sm font-semibold pr-8" style={{ lineHeight: '1.5' }}>{item.question}</span>
        <ChevronDown size={16} style={{ color: '#6B7280', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 200ms ease' }} />
      </button>
      <div style={{ overflow: 'hidden', maxHeight: open ? '800px' : '0', transition: 'max-height 200ms ease' }}>
        <div className="pb-4 text-sm" style={{ color: '#374151', lineHeight: '1.7' }}>{item.answer}</div>
      </div>
    </div>
  );
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div style={{ borderTop: '1px solid #E5E5E3' }}>
      {items.map((item, i) => <Row key={i} item={item} />)}
    </div>
  );
}
