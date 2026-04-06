'use client';
import { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import Sidebar from '@/components/layout/Sidebar';

export default function KBShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAF9' }}>
      <TopBar onMenuClick={() => setOpen(true)} />
      <Sidebar isOpen={open} onClose={() => setOpen(false)} />
      <div className="lg:pl-[260px] pt-12">
        <main id="main-content">{children}</main>
      </div>
    </div>
  );
}
