'use client';

import Link from 'next/link';
import { Home, Menu } from 'lucide-react';
import Logo from '@/public/CID_Default_Logo_1.png';
import Image from 'next/image';

interface TopBarProps {
  onMenuClick?: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 h-12 z-20 flex items-center px-4 lg:px-6"
      style={{ borderBottom: '1px solid #e5e5e5', backgroundColor: '#ffffff' }}
    >
      {/* Mobile */}
      <div className="flex items-center justify-between w-full lg:hidden">
        <Link href="/home" className="flex items-center gap-2 no-underline">
          <Image src={Logo} alt="Credence ID" height={28} style={{ width: 'auto' }} />
        </Link>
        <button
          onClick={onMenuClick}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded text-sm transition-colors duration-100 hover:text-[#434343]"
          style={{ color: '#999999' }}
          aria-label="Open navigation menu"
        >
          <Menu size={16} />
          <span>Menu</span>
        </button>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex items-center gap-4" style={{ paddingLeft: '260px' }}>
        <Link
          href="/home"
          className="flex items-center gap-1.5 text-sm no-underline font-medium transition-colors duration-100 hover:text-[#f1592b]"
          style={{ color: '#434343' }}
        >
          <Home size={14} />
          Home
        </Link>
        <span style={{ color: '#3ac0c5', fontSize: '16px', lineHeight: 1 }}>|</span>
        <Link
          href="https://credenceid.com"
          className="flex items-center gap-1.5 text-sm no-underline transition-colors duration-100 hover:text-[#434343]"
          style={{ color: '#999999' }}
        >
          credenceid.com
        </Link>
      </div>
    </header>
  );
}
