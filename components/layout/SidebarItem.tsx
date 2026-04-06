import Link from 'next/link';
import type { NavItem } from '@/lib/navigation';

interface SidebarItemProps {
  item: NavItem;
  isActive: boolean;
}

export default function SidebarItem({ item, isActive }: SidebarItemProps) {
  return (
    <Link
      href={item.href}
      className={[
        'flex items-center w-full px-3 py-[7px] text-[13px] leading-[1.4] no-underline transition-colors duration-100',
        isActive
          ? 'text-white font-medium bg-[#1E1E1E] border-l-[2px] border-[#E85C2C]'
          : 'text-[#6B7280] font-normal border-l-[2px] border-transparent hover:text-[#D1D5DB] hover:bg-[#181818]',
      ].join(' ')}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.title}
    </Link>
  );
}
