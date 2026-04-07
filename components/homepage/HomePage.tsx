'use client';

import Link from 'next/link';
import { Search, ArrowRight, ShieldCheck, Layers, RefreshCw, Lock, IdCard, LayoutDashboard, Wallet } from 'lucide-react';

export default function HomePage() {
  const openSearch = () => window.dispatchEvent(new CustomEvent('openCommandPalette'));

  return (
    <div className="max-w-3xl mx-auto px-8 sm:px-12 py-16">

      {/* ── Logo ── */}
      <div className="flex justify-center mb-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/CID_Default_Logo_1.png" alt="Credence ID" className="h-10 w-auto" />
      </div>

      {/* ── Hero ── */}
      <div className="text-center mb-10">
        <div
          className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest"
          style={{ backgroundColor: '#FFF4F0', color: '#E85C2C', letterSpacing: '0.1em' }}
        >
          Knowledge Centre
        </div>
        <h1
          style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#1A1A1A',
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            marginBottom: '1.1rem',
          }}
        >
          Issuance with Credence (IwC)
        </h1>
        <p
          style={{
            fontSize: '17px',
            color: '#6B7280',
            lineHeight: 1.7,
            maxWidth: '520px',
            margin: '0 auto 2rem',
          }}
        >
          Everything you need to understand, deploy, and operate IwC — Credence ID&apos;s flagship platform for issuing and managing secure digital credentials.
        </p>

        {/* Search */}
        <div className="flex justify-center">
          <button
            onClick={openSearch}
            className="w-full max-w-[540px] flex items-center gap-3 px-5 text-left transition-all duration-150 hover:border-[#E85C2C] hover:shadow-sm"
            style={{
              height: '50px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E0E0DE',
              borderRadius: '12px',
              color: '#9CA3AF',
              fontSize: '15px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            }}
            aria-label="Search the documentation"
          >
            <Search size={16} style={{ color: '#B0B0B0', flexShrink: 0 }} />
            <span className="flex-1" style={{ color: '#9CA3AF' }}>Search documentation...</span>
            <kbd
              className="hidden sm:flex items-center px-2 py-1 rounded text-xs"
              style={{
                backgroundColor: '#F5F5F4',
                color: '#9CA3AF',
                border: '1px solid #E5E5E3',
                fontFamily: 'monospace',
                fontSize: '11px',
              }}
            >
              ⌘K
            </kbd>
          </button>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px w-full mb-12" style={{ backgroundColor: '#EBEBEA' }} />

      {/* ── What is IwC ── */}
      <div className="mb-12">
        <h2
          style={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#1A1A1A',
            letterSpacing: '-0.015em',
            marginBottom: '1rem',
          }}
        >
          What is IwC?
        </h2>
        <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.75, marginBottom: '0.9rem' }}>
          <strong style={{ color: '#1A1A1A', fontWeight: 600 }}>Issuance with Credence™ (IwC)</strong> is Credence ID&apos;s end-to-end credential issuance and lifecycle management platform — purpose-built to transform verified identity data into secure, privacy-preserving digital credentials that holders trust and relying parties can verify instantly.
        </p>
        <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.75, marginBottom: '0.9rem' }}>
          IwC connects to any authoritative identity data source, ingests pre-verified attributes, and delivers cryptographically signed digital credentials directly to holder wallets over OpenID4VCI. Every credential is signed inside a FIPS 140-3 Level 3 validated Hardware Security Module using ECDSA P-256 — ensuring private keys never leave the hardware boundary under any operational condition.
        </p>
        <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.75 }}>
          The platform issues in both major digital credential formats — <strong style={{ color: '#1A1A1A', fontWeight: 600 }}>ISO/IEC 18013-5 mDoc</strong> and <strong style={{ color: '#1A1A1A', fontWeight: 600 }}>W3C Verifiable Credentials 2.0</strong> — from a single authoritative data model, with no duplication of identity data and no compromise on interoperability. From first issuance to final revocation, IwC manages the complete credential lifecycle automatically and at scale.
        </p>
      </div>

      {/* ── Key capabilities ── */}
      <div className="grid grid-cols-2 gap-3 mb-12">
        {[
          { icon: Layers, label: 'Dual-Standard Issuance', desc: 'mDoc and W3C VC from one data model', color: '#4B6BFB', bg: '#F0F4FF' },
          { icon: Lock, label: 'HSM-Backed Signing', desc: 'FIPS 140-3 Level 3 — keys never leave hardware', color: '#E85C2C', bg: '#FFF4F0' },
          { icon: ShieldCheck, label: 'Privacy by Design', desc: 'Per-claim hashing and selective disclosure', color: '#16A34A', bg: '#F0FFF8' },
          { icon: RefreshCw, label: 'Full Lifecycle Control', desc: 'Activation, renewal, revocation, and reinstatement', color: '#9333EA', bg: '#F8F0FF' },
        ].map(({ icon: Icon, label, desc, color, bg }) => (
          <div
            key={label}
            className="flex items-start gap-3 p-4 rounded-xl"
            style={{ backgroundColor: '#FAFAFA', border: '1px solid #EBEBEA' }}
          >
            <div
              className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg"
              style={{ backgroundColor: bg }}
            >
              <Icon size={15} color={color} />
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: '#1A1A1A', marginBottom: '2px' }}>{label}</p>
              <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Divider with label ── */}
      <div className="flex items-center gap-3 mb-7">
        <p className="text-xs font-semibold uppercase tracking-widest flex-shrink-0" style={{ color: '#9CA3AF', letterSpacing: '0.1em' }}>
          Three parts of IwC
        </p>
        <div className="flex-1 h-px" style={{ backgroundColor: '#EBEBEA' }} />
      </div>

      {/* ── Three parts ── */}
      <div className="flex flex-col gap-3 mb-12">
        {[
          {
            icon: ShieldCheck,
            color: '#E85C2C',
            bg: '#FFF4F0',
            label: 'Identity Verification (IDV)',
            desc: 'The identity proofing pipeline — automated OCR, biometric matching, liveness detection, document authentication, and fraud checks that produce the verified attributes IwC issues against.',
            href: '/docs/identity-verification/product-guide/overview',
            cta: 'Explore IDV',
          },
          {
            icon: LayoutDashboard,
            color: '#4B6BFB',
            bg: '#F0F4FF',
            label: 'IwC Portal',
            desc: 'The administrative control center — manage credential templates, issuers, tenants, digital credentials, trust frameworks, and real-time analytics from a single web-based console.',
            href: '/platform/iwc-portal/dashboard',
            cta: 'Explore IwC Portal',
          },
          {
            icon: Wallet,
            color: '#16A34A',
            bg: '#F0FFF8',
            label: 'Credential Solution',
            desc: 'The holder-facing layer — the Credence ID Wallet app and the Digital Wallet SDK that brings credential storage, NFC/QR presentation, and full lifecycle management to any mobile application.',
            href: '/holder/overview',
            cta: 'Explore Credential Solution',
          },
        ].map(({ icon: Icon, color, bg, label, desc, href, cta }) => (
          <Link
            key={label}
            href={href}
            className="group flex items-start gap-5 p-5 rounded-xl no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{ border: '1px solid #E8E8E6', backgroundColor: '#FFFFFF' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#D0D0CE'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#E8E8E6'; }}
          >
            <div
              className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl mt-0.5"
              style={{ backgroundColor: bg }}
            >
              <Icon size={18} color={color} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold mb-1.5" style={{ color: '#1A1A1A' }}>{label}</p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#6B7280' }}>{desc}</p>
              <div
                className="inline-flex items-center gap-1 text-xs font-semibold transition-all duration-150 group-hover:gap-1.5"
                style={{ color }}
              >
                {cta}
                <ArrowRight size={11} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Divider with label ── */}
      <div className="flex items-center gap-3 mb-7">
        <p className="text-xs font-semibold uppercase tracking-widest flex-shrink-0" style={{ color: '#9CA3AF', letterSpacing: '0.1em' }}>
          More documentation
        </p>
        <div className="flex-1 h-px" style={{ backgroundColor: '#EBEBEA' }} />
      </div>

      {/* ── More docs ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
        {[
          {
            icon: IdCard,
            color: '#9333EA',
            bg: '#F8F0FF',
            label: 'Digital ID Lifecycle',
            desc: 'The four stages every digital credential passes through — enrollment, issuance, holding, and verification.',
            href: '/lifecycle/overview',
          },
          {
            icon: Layers,
            color: '#0EA5E9',
            bg: '#F0FAFF',
            label: 'Learn',
            desc: 'Foundational concepts in digital identity — standards, terminology, and how it all fits together.',
            href: '/learn/digital-credentials-101',
          },
        ].map(({ icon: Icon, color, bg, label, desc, href }) => (
          <Link
            key={label}
            href={href}
            className="group flex items-start gap-4 p-5 rounded-xl no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{ border: '1px solid #E8E8E6', backgroundColor: '#FFFFFF' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#D0D0CE'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#E8E8E6'; }}
          >
            <div
              className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg mt-0.5"
              style={{ backgroundColor: bg }}
            >
              <Icon size={16} color={color} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold mb-1" style={{ color: '#1A1A1A' }}>{label}</p>
              <p className="text-sm leading-relaxed mb-2.5" style={{ color: '#6B7280' }}>{desc}</p>
              <div
                className="inline-flex items-center gap-1 text-xs font-semibold transition-all duration-150 group-hover:gap-1.5"
                style={{ color }}
              >
                Browse docs
                <ArrowRight size={11} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Footer note ── */}
      <div className="text-center">
        <p className="text-xs" style={{ color: '#C0C0BE' }}>
          Built by Credence ID &mdash; questions? Contact your Credence ID account team.
        </p>
      </div>
    </div>
  );
}
