'use client';
import Link from 'next/link';
import { ArrowRight, BookOpen, GitBranch, Package, Wallet, Building2, Smartphone, GraduationCap, type LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import { navigation } from '@/lib/navigation';

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;

const icons: Record<string, LucideIcon> = {
  'identity-verification': Package,
  'platform': Building2,
  'holder': Wallet,
  'sdk': Smartphone,
  'lifecycle': GitBranch,
  'learn': GraduationCap,
};

const sectionColors: Record<string, { bg: string; icon: string }> = {
  'identity-verification': { bg: '#FFF4F0', icon: '#E85C2C' },
  'platform': { bg: '#F0F4FF', icon: '#4B6BFB' },
  'holder': { bg: '#F0FFF8', icon: '#16A34A' },
  'sdk': { bg: '#FFF8F0', icon: '#D97706' },
  'lifecycle': { bg: '#F8F0FF', icon: '#9333EA' },
  'learn': { bg: '#F0FAFF', icon: '#0EA5E9' },
};

export default function SectionGrid() {
  return (
    <div>
      <p
        className="text-xs font-semibold uppercase mb-5 tracking-wider"
        style={{ color: '#9CA3AF', letterSpacing: '0.08em' }}
      >
        Browse documentation
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {navigation.map(section => {
          const Icon = icons[section.slug] || BookOpen;
          const colors = sectionColors[section.slug] ?? { bg: '#F5F5F4', icon: '#6B7280' };

          return (
            <Link
              key={section.slug}
              href={section.groups ? section.groups[0].items[0].href : (section.items?.[0].href ?? '#')}
              className="group flex items-start gap-4 p-5 rounded-xl border no-underline transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              style={{
                borderColor: '#E8E8E6',
                backgroundColor: '#FFFFFF',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#D0D0CE';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#E8E8E6';
              }}
            >
              {/* Icon box */}
              <div
                className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg mt-0.5"
                style={{ backgroundColor: colors.bg }}
              >
                <Icon size={18} color={colors.icon} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold mb-1" style={{ color: '#1A1A1A' }}>
                  {section.label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  {section.description}
                </p>
                <div
                  className="flex items-center gap-1 mt-2.5 text-xs font-medium transition-colors duration-150 group-hover:gap-1.5"
                  style={{ color: colors.icon }}
                >
                  Browse docs
                  <ArrowRight size={11} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
