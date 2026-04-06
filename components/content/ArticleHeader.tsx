import Link from 'next/link';
import { Clock } from 'lucide-react';

interface BreadcrumbItem {
  title: string;
  href: string;
}

interface ArticleHeaderProps {
  breadcrumb: BreadcrumbItem[];
  title: string;
  readingTime: number;
  section: string;
}

export default function ArticleHeader({ breadcrumb, title, readingTime, section }: ArticleHeaderProps) {
  return (
    <header className="mb-10">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-5 flex-wrap">
        {breadcrumb.map((crumb, i) => (
          <span key={crumb.href} className="flex items-center gap-1.5">
            {i > 0 && (
              <span style={{ color: '#D1D5DB', fontSize: '12px' }}>/</span>
            )}
            {i === breadcrumb.length - 1 ? (
              <span style={{ color: '#6B7280', fontSize: '12.5px' }}>{crumb.title}</span>
            ) : crumb.href === '#' ? (
              <span style={{ color: '#9CA3AF', fontSize: '12.5px' }}>{crumb.title}</span>
            ) : (
              <Link
                href={crumb.href}
                className="no-underline hover:text-[#E85C2C] transition-colors duration-100"
                style={{ color: '#9CA3AF', fontSize: '12.5px' }}
              >
                {crumb.title}
              </Link>
            )}
          </span>
        ))}
      </nav>

      {/* Title */}
      <h1
        className="mb-4"
        style={{
          fontSize: '28px',
          fontWeight: 700,
          lineHeight: 1.25,
          color: '#1A1A1A',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h1>

      {/* Meta row */}
      <div className="flex items-center gap-2.5 flex-wrap mb-7">
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium"
          style={{ backgroundColor: '#FFF4F0', color: '#E85C2C' }}
        >
          {section}
        </span>
        <span style={{ color: '#D1D5DB', fontSize: '12px' }}>·</span>
        <span className="flex items-center gap-1.5 text-xs" style={{ color: '#9CA3AF' }}>
          <Clock size={12} />
          {readingTime} min read
        </span>
      </div>

      <hr style={{ borderColor: '#EBEBEA', borderTopWidth: '1px' }} />
    </header>
  );
}
