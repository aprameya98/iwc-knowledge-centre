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
          ? 'font-medium border-l-[3px] border-[#f1592b]'
          : 'font-normal border-l-[3px] border-transparent',
      ].join(' ')}
      style={isActive
        ? { color: '#ffffff', backgroundColor: 'rgba(241,89,43,0.18)' }
        : { color: 'rgba(255,255,255,0.58)' }
      }
      onMouseEnter={e => {
        if (!isActive) {
          (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)';
          (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.07)';
        }
      }}
      onMouseLeave={e => {
        if (!isActive) {
          (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.58)';
          (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
        }
      }}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.title}
    </Link>
  );
}
