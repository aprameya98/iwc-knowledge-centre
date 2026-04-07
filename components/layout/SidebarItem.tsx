import Link from 'next/link';
import type { NavItem } from '@/lib/navigation';

interface SidebarItemProps {
  item: NavItem;
  isActive: boolean;
  indent?: 0 | 1 | 2;
}

export default function SidebarItem({ item, isActive, indent = 0 }: SidebarItemProps) {
  const pl = indent === 2 ? 'pl-10' : indent === 1 ? 'pl-7' : 'pl-3';
  return (
    <Link
      href={item.href}
      className={[
        `flex items-center w-full ${pl} pr-3 py-[7px] text-[13px] leading-[1.4] no-underline transition-colors duration-100`,
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
