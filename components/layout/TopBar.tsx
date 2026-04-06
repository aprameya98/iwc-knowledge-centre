'use client';

import Link from 'next/link';
import { ArrowLeft, Home, Menu } from 'lucide-react';
import Logo from '@/public/CID_Default_Logo_1.png';
import Image from 'next/image';

interface TopBarProps {
  onMenuClick?: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 h-12 z-20 flex items-center px-4 lg:px-6"
      style={{ borderBottom: '1px solid #E5E5E3', backgroundColor: '#FAFAF9' }}
    >
      {/* Mobile: Logo + Menu */}
      <div className="flex items-center justify-between w-full lg:hidden">
        <Link href="/home" className="flex items-center gap-2 no-underline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image src={Logo} alt="Credence ID" height={28} style={{ width: 'auto' }} />
        </Link>
        <button
          onClick={onMenuClick}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded text-sm transition-colors duration-100 hover:bg-gray-100"
          style={{ color: '#6B7280' }}
          aria-label="Open navigation menu"
        >
          <Menu size={16} />
          <span>Menu</span>
        </button>
      </div>

      {/* Desktop: Home button + Back link */}
      <div className="hidden lg:flex items-center gap-4" style={{ paddingLeft: '260px' }}>
        <Link
          href="/home"
          className="flex items-center gap-1.5 text-sm no-underline transition-colors duration-100 hover:text-[#E85C2C] font-medium"
          style={{ color: '#1A1A1A' }}
          aria-label="Go to Knowledge Centre home"
        >
          <Home size={14} />
          Home
        </Link>
        <span style={{ color: '#E5E5E3' }}>|</span>
        <Link
          href="https://credenceid.com"
          className="flex items-center gap-1.5 text-sm no-underline transition-colors duration-100 hover:text-gray-900"
          style={{ color: '#6B7280' }}
        >
          <ArrowLeft size={14} />
          Back to Credence ID
        </Link>
      </div>
    </header>
  );
}
