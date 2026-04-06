import Link from 'next/link';
const links = [
  { label: 'How to Enroll', href: '/knowledge-base/iwc/enrollment/using-wallet-app' },
  { label: 'What is IwC?', href: '/knowledge-base/iwc/product-guide/overview' },
  { label: 'Retail Use Cases', href: '/knowledge-base/iwc/use-cases/overview' },
];
export default function QuickLinks() {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-sm" style={{ color: '#6B7280' }}>Quick starts:</span>
      {links.map(l => (
        <Link key={l.href} href={l.href} className="px-4 py-1.5 text-sm no-underline transition-all duration-100 hover:border-[#E85C2C] hover:text-[#E85C2C]"
          style={{ border: '1px solid #E5E5E3', borderRadius: '999px', color: '#6B7280', fontSize: '13px' }}>
          {l.label}
        </Link>
      ))}
    </div>
  );
}
