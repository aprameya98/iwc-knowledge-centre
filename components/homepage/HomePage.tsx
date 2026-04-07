'use client';

import Link from 'next/link';
import { Search, ArrowRight, ShieldCheck, Layers, RefreshCw, Lock, IdCard, LayoutDashboard, Wallet } from 'lucide-react';

export default function HomePage() {
  const openSearch = () => window.dispatchEvent(new CustomEvent('openCommandPalette'));

  return (
    <div style={{ backgroundColor: '#ffffff' }}>

      {/* ── Hero — Dark-Green background ─────────────────────────────── */}
      <div style={{ backgroundColor: '#ffffff', paddingTop: '72px' }}>
        <div className="max-w-3xl mx-auto px-8 sm:px-12 py-16 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/CID_Default_Logo_1.png" alt="Credence ID" className="h-10 w-auto" />
          </div>

          {/* Badge */}
          <div className="inline-block mb-5 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest"
            style={{ backgroundColor: '#f1592b', color: '#ffffff', letterSpacing: '0.12em' }}>
            Knowledge Centre
          </div>

          <h1 style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: '34px',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            marginBottom: '1.1rem',
          }}>
            Issuance with Credence (IwC)
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 0.72)', lineHeight: 1.75, maxWidth: '480px', margin: '0 auto 2.5rem' }}>
            Everything you need to understand and operate IwC — Credence ID&apos;s platform for issuing and managing secure digital credentials.
          </p>

          {/* Search */}
          <div className="flex justify-center">
            <button
              onClick={openSearch}
              className="w-full max-w-[520px] flex items-center gap-3 px-5 text-left transition-all duration-150"
              style={{ height: '50px', backgroundColor: '#ffffff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
              aria-label="Search the documentation"
            >
              <Search size={16} style={{ color: '#999999', flexShrink: 0 }} />
              <span className="flex-1" style={{ color: '#999999', fontSize: '15px' }}>Search documentation...</span>
              <kbd className="hidden sm:flex items-center px-2 py-1 rounded text-xs"
                style={{ backgroundColor: '#f5f5f5', color: '#999999', border: '1px solid #e5e5e5', fontFamily: 'monospace', fontSize: '11px' }}>
                ⌘K
              </kbd>
            </button>
          </div>
        </div>

        {/* Teal bottom border */}
        <div style={{ height: '4px', backgroundColor: '#3ac0c5' }} />
      </div>

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-8 sm:px-12 py-14">

        {/* What is IwC */}
        <div className="mb-12">
          <h2 style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: '20px',
            fontWeight: 700,
            color: '#1E534B',
            letterSpacing: '-0.01em',
            marginBottom: '1rem',
            paddingBottom: '0.5rem',
            borderBottom: '2px solid #3ac0c5',
          }}>
            What is IwC?
          </h2>
          <p style={{ fontSize: '15px', color: '#434343', lineHeight: 1.8, marginBottom: '0.9rem' }}>
            <strong style={{ color: '#1E534B', fontWeight: 700 }}>Issuance with Credence™ (IwC)</strong> is Credence ID&apos;s end-to-end credential issuance and lifecycle management platform — purpose-built to transform verified identity data into secure, privacy-preserving digital credentials that holders trust and relying parties can verify instantly.
          </p>
          <p style={{ fontSize: '15px', color: '#434343', lineHeight: 1.8, marginBottom: '0.9rem' }}>
            IwC connects to any authoritative identity data source, ingests pre-verified attributes, and delivers cryptographically signed digital credentials directly to holder wallets over OpenID4VCI. Every credential is signed inside a FIPS 140-3 Level 3 validated Hardware Security Module using ECDSA P-256 — ensuring private keys never leave the hardware boundary.
          </p>
          <p style={{ fontSize: '15px', color: '#434343', lineHeight: 1.8 }}>
            The platform issues in both major digital credential formats — <strong style={{ color: '#1E534B', fontWeight: 700 }}>ISO/IEC 18013-5 mDoc</strong> and <strong style={{ color: '#1E534B', fontWeight: 700 }}>W3C Verifiable Credentials 2.0</strong> — from a single authoritative data model, with no duplication of identity data and no compromise on interoperability.
          </p>
        </div>

        {/* Key capabilities */}
        <div className="grid grid-cols-2 gap-3 mb-12">
          {[
            { icon: Layers,      label: 'Dual-Standard Issuance',  desc: 'mDoc and W3C VC from one data model',                  color: '#f1592b', bg: '#fff8f6', border: '#f1592b' },
            { icon: Lock,        label: 'HSM-Backed Signing',       desc: 'FIPS 140-3 Level 3 — keys never leave hardware',       color: '#1E534B', bg: '#f0f7f5', border: '#3ac0c5' },
            { icon: ShieldCheck, label: 'Privacy by Design',        desc: 'Per-claim hashing and selective disclosure',            color: '#3ac0c5', bg: '#f0fafa', border: '#3ac0c5' },
            { icon: RefreshCw,   label: 'Full Lifecycle Control',   desc: 'Activation, renewal, revocation, and reinstatement',   color: '#1E534B', bg: '#f0f7f5', border: '#1E534B' },
          ].map(({ icon: Icon, label, desc, color, bg, border }) => (
            <div key={label} className="flex items-start gap-3 p-4 rounded-lg"
              style={{ backgroundColor: bg, border: `1px solid ${border}`, borderLeftWidth: '3px' }}>
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded" style={{ backgroundColor: '#ffffff' }}>
                <Icon size={15} color={color} />
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: '#434343', marginBottom: '2px', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>{label}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#999999' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Three parts divider */}
        <div className="flex items-center gap-3 mb-7">
          <p className="text-xs font-bold uppercase flex-shrink-0" style={{ color: '#1E534B', letterSpacing: '0.1em', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            Three Parts of IwC
          </p>
          <div className="flex-1 h-[2px]" style={{ backgroundColor: '#3ac0c5' }} />
        </div>

        {/* Three parts cards */}
        <div className="flex flex-col gap-3 mb-12">
          {[
            {
              icon: ShieldCheck,
              color: '#f1592b',
              bg: '#fff8f6',
              borderAccent: '#f1592b',
              label: 'Identity Verification (IDV)',
              desc: 'The identity proofing pipeline — automated OCR, biometric matching, liveness detection, document authentication, and fraud checks that produce the verified attributes IwC issues against.',
              href: '/docs/identity-verification/overview',
              cta: 'Explore IDV',
            },
            {
              icon: LayoutDashboard,
              color: '#1E534B',
              bg: '#f0f7f5',
              borderAccent: '#3ac0c5',
              label: 'IwC Portal',
              desc: 'The administrative control centre — manage credential templates, issuers, tenants, digital credentials, trust frameworks, and real-time analytics from a single web-based console.',
              href: '/platform/iwc-portal/dashboard',
              cta: 'Explore IwC Portal',
            },
            {
              icon: Wallet,
              color: '#3ac0c5',
              bg: '#f0fafa',
              borderAccent: '#3ac0c5',
              label: 'Credential Solution',
              desc: 'The holder-facing layer — the Credence ID Wallet app and the Digital Wallet SDK that brings credential storage, NFC/QR presentation, and full lifecycle management to any mobile application.',
              href: '/holder/overview',
              cta: 'Explore Credential Solution',
            },
          ].map(({ icon: Icon, color, bg, borderAccent, label, desc, href, cta }) => (
            <Link
              key={label}
              href={href}
              className="group flex items-start gap-5 p-5 rounded-lg no-underline transition-all duration-200"
              style={{ border: `1px solid #e5e5e5`, borderLeft: `4px solid ${borderAccent}`, backgroundColor: '#ffffff' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = borderAccent;
                el.style.borderLeftColor = borderAccent;
                el.style.backgroundColor = bg;
                el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = '#e5e5e5';
                el.style.borderLeftColor = borderAccent;
                el.style.backgroundColor = '#ffffff';
                el.style.boxShadow = 'none';
              }}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg mt-0.5" style={{ backgroundColor: bg }}>
                <Icon size={18} color={color} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold mb-1.5" style={{ color: '#1E534B', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>{label}</p>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#434343' }}>{desc}</p>
                <div className="inline-flex items-center gap-1 text-xs font-bold transition-all duration-150 group-hover:gap-1.5"
                  style={{ color, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  {cta} <ArrowRight size={11} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* More docs divider */}
        <div className="flex items-center gap-3 mb-7">
          <p className="text-xs font-bold uppercase flex-shrink-0" style={{ color: '#1E534B', letterSpacing: '0.1em', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            More Documentation
          </p>
          <div className="flex-1 h-[2px]" style={{ backgroundColor: '#3ac0c5' }} />
        </div>

        {/* More docs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-14">
          {[
            {
              icon: IdCard,
              color: '#1E534B',
              bg: '#f0f7f5',
              border: '#3ac0c5',
              label: 'Digital ID Lifecycle',
              desc: 'The four stages every digital credential passes through — enrollment, issuance, holding, and verification.',
              href: '/lifecycle/overview',
            },
            {
              icon: Layers,
              color: '#f1592b',
              bg: '#fff8f6',
              border: '#f1592b',
              label: 'Learn',
              desc: 'Foundational concepts in digital identity — standards, terminology, and how it all fits together.',
              href: '/learn/digital-credentials-101',
            },
          ].map(({ icon: Icon, color, bg, border, label, desc, href }) => (
            <Link
              key={label}
              href={href}
              className="group flex items-start gap-4 p-5 rounded-lg no-underline transition-all duration-200"
              style={{ border: `1px solid #e5e5e5`, borderLeft: `4px solid ${border}`, backgroundColor: '#ffffff' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = bg;
                el.style.borderColor = border;
                el.style.borderLeftColor = border;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = '#ffffff';
                el.style.borderColor = '#e5e5e5';
                el.style.borderLeftColor = border;
              }}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg mt-0.5" style={{ backgroundColor: bg }}>
                <Icon size={16} color={color} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold mb-1" style={{ color: '#1E534B', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>{label}</p>
                <p className="text-sm leading-relaxed mb-2.5" style={{ color: '#434343' }}>{desc}</p>
                <div className="inline-flex items-center gap-1 text-xs font-bold transition-all duration-150 group-hover:gap-1.5"
                  style={{ color, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  Browse docs <ArrowRight size={11} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-4" style={{ borderTop: '1px solid #e5e5e5' }}>
          <p className="text-xs" style={{ color: '#999999' }}>
            Built by Credence ID &mdash; questions? Contact your Credence ID account team.
          </p>
        </div>
      </div>
    </div>
  );
}
