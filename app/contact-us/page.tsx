import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Credence ID',
};

export default function ContactUsPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 sm:px-12 py-16">
      <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#1A1A1A', marginBottom: '1rem' }}>Contact Us</h1>
      <p style={{ fontSize: '16.5px', color: '#6B7280', lineHeight: 1.7 }}>
        Get in touch with the Credence ID team. This page is coming soon.
      </p>
    </div>
  );
}
