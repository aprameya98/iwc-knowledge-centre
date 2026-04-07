import Link from 'next/link';
import { Clock } from 'lucide-react';

interface BreadcrumbItem { title: string; href: string; }

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
            {i > 0 && <span style={{ color: '#3ac0c5', fontSize: '12px' }}>/</span>}
            {i === breadcrumb.length - 1 ? (
              <span style={{ color: '#999999', fontSize: '12.5px' }}>{crumb.title}</span>
            ) : crumb.href === '#' ? (
              <span style={{ color: '#999999', fontSize: '12.5px' }}>{crumb.title}</span>
            ) : (
              <Link href={crumb.href}
                className="no-underline transition-colors duration-100 hover:text-[#f1592b]"
                style={{ color: '#999999', fontSize: '12.5px' }}
              >
                {crumb.title}
              </Link>
            )}
          </span>
        ))}
      </nav>

      {/* Title */}
      <h1 className="mb-4" style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: '26px',
        fontWeight: 700,
        lineHeight: 1.25,
        color: '#1E534B',
        letterSpacing: '-0.02em',
      }}>
        {title}
      </h1>

      {/* Meta row */}
      <div className="flex items-center gap-2.5 flex-wrap mb-7">
        <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold"
          style={{ backgroundColor: '#f1592b', color: '#ffffff', letterSpacing: '0.03em' }}>
          {section}
        </span>
        <span style={{ color: '#3ac0c5', fontSize: '14px' }}>·</span>
        <span className="flex items-center gap-1.5 text-xs" style={{ color: '#999999' }}>
          <Clock size={12} />
          {readingTime} min read
        </span>
      </div>

      <hr style={{ border: 'none', borderTop: '2px solid #3ac0c5', marginBottom: 0 }} />
    </header>
  );
}
