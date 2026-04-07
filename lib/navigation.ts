export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

export type NavSubGroup = {
  label: string;
  slug: string;
  items: NavItem[];
};

export type NavGroup = {
  label: string;
  slug: string;
  items?: NavItem[];
  subgroups?: NavSubGroup[];
  isLabel?: boolean;
};

export type NavSection = {
  label: string;
  slug: string;
  description?: string;
  items?: NavItem[];
  groups?: NavGroup[];
};

// Helper: get all items from a section (flat, grouped, or with subgroups)
function getSectionItems(section: NavSection): NavItem[] {
  if (section.groups) {
    return section.groups.flatMap(g => {
      if (g.isLabel) return [];
      if (g.subgroups) return g.subgroups.flatMap(sg => sg.items);
      return g.items ?? [];
    });
  }
  return section.items ?? [];
}

export const navigation: NavSection[] = [
  {
    label: 'Issuance with Credence',
    slug: 'platform',
    description: 'End-to-end credential issuance, verification, and wallet management',
    groups: [
      {
        label: 'Solution Overview',
        slug: 'solution-overview',
        items: [
          { title: 'Overview', href: '/platform/solution-overview/overview', description: 'What IwC is and its role in the Credence ID ecosystem' },
          { title: 'Architecture', href: '/platform/solution-overview/architecture', description: 'Core components and how it all flows' },
          { title: 'Credential Template Designer', href: '/platform/solution-overview/credential-template-designer', description: 'Four-step guided workflow to define credential types' },
          { title: 'Analytics Dashboard', href: '/platform/solution-overview/analytics', description: 'Real-time KPIs and program health visibility' },
          { title: 'Integration & APIs', href: '/platform/solution-overview/integration-apis', description: 'Issuance trigger, data ingestion, and status sync APIs' },
          { title: 'Deployment & Operations', href: '/platform/solution-overview/deployment-operations', description: 'Hosting options, environments, and 24/7 operations' },
          { title: 'Scalability & Performance', href: '/platform/solution-overview/scalability-performance', description: 'Throughput, availability, and proven scale metrics' },
          { title: 'Security & Compliance', href: '/platform/solution-overview/security-compliance', description: 'Data protection, NIST alignment, and FIPS compliance' },
          { title: 'Supported Standards Reference', href: '/platform/solution-overview/supported-standards', description: 'Full list of supported standards and protocols' },
          { title: 'Roadmap', href: '/platform/solution-overview/roadmap', description: 'FIDO2/WebAuthn, post-quantum cryptography, and OS wallet integration' },
        ],
      },
      {
        label: 'Four Sections of IwC',
        slug: 'three-parts-label',
        isLabel: true,
      },
      {
        label: 'Identity Verification (IDV)',
        slug: 'identity-verification',
        items: [
          { title: 'Overview & How It Works', href: '/docs/identity-verification/overview', description: 'What IDV is, the 6-step pipeline, and what happens after approval' },
          { title: 'Automated Checks', href: '/docs/identity-verification/automated-checks', description: 'OCR, biometric match, liveness, document auth, SOR, and fraud checks' },
          { title: 'Review Dashboard', href: '/docs/identity-verification/review-dashboard', description: 'Applicant information, trust factors, decision workflow, and audit trail' },
        ],
      },
      {
        label: 'IwC Portal',
        slug: 'iwc-portal',
        items: [
          { title: 'Creating Tenants', href: '/platform/iwc-portal/tenants', description: 'Multi-tenant configuration and isolation' },
          { title: 'Creating Issuers', href: '/platform/iwc-portal/issuers', description: 'Issuer management and configuration' },
          { title: 'Creating Credential Templates', href: '/platform/iwc-portal/templates', description: 'Credential template management' },
          { title: 'Viewing ID Applications', href: '/platform/iwc-portal/id-applications', description: 'Application tracking and management' },
          { title: 'Managing issued Digital Credentials', href: '/platform/iwc-portal/digital-credentials', description: 'Issued credential management' },
          { title: 'Trust Management', href: '/platform/iwc-portal/trust-management', description: 'Trust framework configuration' },
          { title: 'Viewing Analytics', href: '/platform/iwc-portal/analytics', description: 'Platform analytics and reporting' },
          { title: 'API Explorer', href: '/platform/iwc-portal/api-explorer', description: 'Interactive API reference' },
          { title: 'Settings', href: '/platform/iwc-portal/settings', description: 'Global platform configuration' },
        ],
      },
      {
        label: 'Credential Solution',
        slug: 'credential-solution',
        items: [
          { title: 'Credential Data Model', href: '/platform/solution-overview/credential-data-model', description: 'Formats, namespaces, derived attributes, and status' },
          { title: 'Issuance Flows', href: '/platform/solution-overview/issuance-flows', description: 'Standard, deferred, and parallel issuance sequences' },
          { title: 'Cryptographic Signing & Key Management', href: '/platform/solution-overview/cryptographic-signing', description: 'Per-claim hashing, HSM signing, and PKI trust chain' },
          { title: 'Credential Lifecycle Management', href: '/platform/solution-overview/credential-lifecycle', description: 'Activation, renewal, replacement, and revocation' },
          { title: 'Credential Binding', href: '/platform/solution-overview/credential-binding', description: 'Case, physical card, and device-level binding' },
          { title: 'Status Change Management', href: '/platform/solution-overview/status-change-management', description: 'How status propagates to wallets and verifiers' },
          { title: 'Multi-Standard & Interoperability', href: '/platform/solution-overview/multi-standard-interoperability', description: 'One data model, two formats, open ecosystem' },
        ],
      },
      {
        label: 'Digital ID Wallet',
        slug: 'credence-wallet',
        subgroups: [
          {
            label: 'Wallet App',
            slug: 'wallet',
            items: [
              { title: 'Overview', href: '/holder/overview', description: 'What the Credence Wallet is and what it does' },
              { title: 'Downloading the App', href: '/holder/downloading-the-app', description: 'Get the Credence Wallet on iOS or Android' },
              { title: 'Wallet User Journey', href: '/holder/wallet-user-journey', description: 'End-to-end user journey for the Credence ID Wallet' },
              { title: 'Enrollment: Overview', href: '/holder/enrollment/overview', description: 'Introduction to the enrollment process' },
              { title: 'Supported Documents', href: '/holder/enrollment/supported-documents', description: 'Which ID documents are accepted' },
              { title: 'Tips for Success', href: '/holder/enrollment/tips-for-success', description: 'Best practices for a successful enrollment' },
              { title: 'Checking Application Status', href: '/holder/enrollment/checking-application-status', description: 'How to track your enrollment status' },
              { title: 'Viewing Credential', href: '/holder/viewing-credential', description: 'How to access and view your digital ID' },
              { title: 'Sharing via QR Code', href: '/holder/sharing-qr-code', description: 'Present your credential using a QR code' },
              { title: 'Sharing via NFC', href: '/holder/sharing-nfc', description: 'Tap-to-share with NFC-enabled readers' },
              { title: 'Credential Status', href: '/holder/credential-status', description: 'Active, suspended, and revoked states' },
              { title: 'Managing Lifecycle', href: '/holder/managing-lifecycle', description: 'Renewals, updates, and reissuance' },
              { title: 'Lost or Stolen Device', href: '/holder/lost-stolen-device', description: 'What to do if your device is lost or stolen' },
            ],
          },
          {
            label: 'Wallet App SDK',
            slug: 'wallet-sdk',
            items: [
              { title: 'SDK Overview', href: '/sdk/overview', description: 'What the SDK is, delivery options, and supported platforms' },
              { title: 'Supported Standards & Protocols', href: '/sdk/supported-standards', description: 'OpenID4VCI, ISO 18013-5, and OpenID4VP' },
              { title: 'Security Architecture', href: '/sdk/security-architecture', description: 'Hardware-backed key storage, RASP, and anti-tampering' },
              { title: 'Credential Lifecycle & Integration Flow', href: '/sdk/credential-lifecycle', description: 'Activation, refresh, device replacement, and revocation' },
              { title: 'Privacy & User Control', href: '/sdk/privacy', description: 'Selective disclosure, consent, and data minimization' },
              { title: 'Accessibility & Inclusion', href: '/sdk/accessibility', description: 'Section 508, WCAG 2.1 AA, localization, and web fallback' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Learn',
    slug: 'learn',
    description: 'Educational resources about digital identity',
    groups: [
      {
        label: 'Digital Credentials',
        slug: 'digital-credentials-learn',
        items: [
          { title: 'Digital Credentials 101', href: '/learn/digital-credentials-101', description: 'Introduction to digital credentials and identity' },
        ],
      },
      {
        label: 'Digital ID Lifecycle',
        slug: 'lifecycle',
        items: [
          { title: 'Overview', href: '/lifecycle/overview', description: 'The four stages of a digital credential' },
          { title: 'Stage 1: Enrollment', href: '/lifecycle/stage-1-enrollment', description: 'Capturing identity data and documents' },
          { title: 'Stage 2: Issuance', href: '/lifecycle/stage-2-issuance', description: 'Verification, approval, and credential creation' },
          { title: 'Stage 3: Holding', href: '/lifecycle/stage-3-holding', description: 'Storing and managing credentials in the wallet' },
          { title: 'Stage 4: Verification', href: '/lifecycle/stage-4-verification', description: 'Presenting credentials to verifying parties' },
        ],
      },
    ],
  },
];

export function getFlatNavItems(): NavItem[] {
  return navigation.flatMap(section => getSectionItems(section));
}

export function getPrevNext(href: string): { prev: NavItem | null; next: NavItem | null } {
  const flat = getFlatNavItems();
  const index = flat.findIndex(item => item.href === href);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? flat[index - 1] : null,
    next: index < flat.length - 1 ? flat[index + 1] : null,
  };
}

export function getBreadcrumb(href: string): Array<{ title: string; href: string }> {
  const crumbs: Array<{ title: string; href: string }> = [
    { title: 'IwC Knowledge Base', href: '/home' },
  ];
  for (const section of navigation) {
    if (section.groups) {
      for (const group of section.groups) {
        if (group.isLabel) continue;
        // Check subgroups
        if (group.subgroups) {
          for (const sg of group.subgroups) {
            for (const item of sg.items) {
              if (item.href === href) {
                crumbs.push({ title: section.label, href: '#' });
                crumbs.push({ title: sg.label, href: '#' });
                crumbs.push({ title: item.title, href: item.href });
                return crumbs;
              }
            }
          }
          continue;
        }
        // Check flat group items
        for (const item of group.items ?? []) {
          if (item.href === href) {
            crumbs.push({ title: section.label, href: '#' });
            crumbs.push({ title: group.label, href: '#' });
            crumbs.push({ title: item.title, href: item.href });
            return crumbs;
          }
        }
      }
    } else {
      for (const item of section.items ?? []) {
        if (item.href === href) {
          crumbs.push({ title: section.label, href: '#' });
          crumbs.push({ title: item.title, href: item.href });
          return crumbs;
        }
      }
    }
  }
  return crumbs;
}

export function getActiveSection(href: string): NavSection | null {
  for (const section of navigation) {
    for (const item of getSectionItems(section)) {
      if (item.href === href) return section;
    }
  }
  return null;
}
