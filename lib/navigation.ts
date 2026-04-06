export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

export type NavSection = {
  label: string;
  slug: string;
  description?: string;
  items: NavItem[];
};

export const navigation: NavSection[] = [
  {
    label: "Identity Verification (IDV)",
    slug: "identity-verification",
    description: "Deep documentation on identity verification within IwC",
    items: [
      { title: "Overview", href: "/docs/identity-verification/product-guide/overview", description: "What IwC does and how it fits in the ecosystem" },
      { title: "How IwC Works", href: "/docs/identity-verification/product-guide/how-it-works", description: "The 6-step automated review process" },
      { title: "Automated Checks: Overview", href: "/docs/identity-verification/product-guide/automated-checks/overview", description: "All 6 automated checks at a glance" },
      { title: "OCR Check", href: "/docs/identity-verification/product-guide/automated-checks/ocr", description: "Optical character recognition for document text" },
      { title: "Biometric Match Check", href: "/docs/identity-verification/product-guide/automated-checks/biometric-match", description: "Face matching between document and selfie" },
      { title: "Liveness Detection", href: "/docs/identity-verification/product-guide/automated-checks/liveness-detection", description: "Ensuring a real person is present" },
      { title: "Document Authentication", href: "/docs/identity-verification/product-guide/automated-checks/document-authentication", description: "Verifying document legitimacy" },
      { title: "SOR Check", href: "/docs/identity-verification/product-guide/automated-checks/sor-check", description: "System of record validation" },
      { title: "Fraud Check", href: "/docs/identity-verification/product-guide/automated-checks/fraud-check", description: "Detecting fraudulent submissions" },
      { title: "Doc Auth: How It Works", href: "/docs/identity-verification/product-guide/document-authentication-deep-dive/how-it-works", description: "Document authentication deep dive overview" },
      { title: "Visual & Forensic Inspection", href: "/docs/identity-verification/product-guide/document-authentication-deep-dive/visual-forensic-inspection", description: "Physical security feature analysis" },
      { title: "Data Extraction", href: "/docs/identity-verification/product-guide/document-authentication-deep-dive/data-extraction", description: "Extracting machine-readable data" },
      { title: "Cross-Data Validation", href: "/docs/identity-verification/product-guide/document-authentication-deep-dive/cross-data-validation", description: "Consistency checking across data sources" },
      { title: "Document Consistency Check", href: "/docs/identity-verification/product-guide/document-authentication-deep-dive/document-consistency-check", description: "Structural integrity verification" },
      { title: "Supported Documents", href: "/docs/identity-verification/product-guide/document-authentication-deep-dive/supported-documents", description: "1,500+ ID types across 200+ countries" },
      { title: "Biometric: How It Works", href: "/docs/identity-verification/product-guide/biometric-verification-deep-dive/how-it-works", description: "Biometric verification deep dive overview" },
      { title: "Passive Liveness", href: "/docs/identity-verification/product-guide/biometric-verification-deep-dive/passive-liveness", description: "Silent liveness detection" },
      { title: "Active Liveness", href: "/docs/identity-verification/product-guide/biometric-verification-deep-dive/active-liveness", description: "Challenge-response liveness detection" },
      { title: "Biometric Matching", href: "/docs/identity-verification/product-guide/biometric-verification-deep-dive/biometric-matching", description: "1:1 face comparison methodology" },
      { title: "Certifications", href: "/docs/identity-verification/product-guide/biometric-verification-deep-dive/certifications", description: "NIST, ISO/IEC 30107-3 iBeta Level 2" },
      { title: "Dashboard Overview", href: "/docs/identity-verification/product-guide/review-dashboard/overview", description: "The IwC reviewer dashboard at a glance" },
      { title: "Applicant Information", href: "/docs/identity-verification/product-guide/review-dashboard/applicant-information", description: "What applicant data is shown and how" },
      { title: "Document Trust Factors", href: "/docs/identity-verification/product-guide/review-dashboard/document-trust-factors", description: "Document check results in the dashboard" },
      { title: "Biometric Trust Factors", href: "/docs/identity-verification/product-guide/review-dashboard/biometric-trust-factors", description: "Biometric check results in the dashboard" },
      { title: "Making a Decision", href: "/docs/identity-verification/product-guide/review-dashboard/making-a-decision", description: "Approve, reject, or escalate an application" },
      { title: "Reviewer Action Log", href: "/docs/identity-verification/product-guide/review-dashboard/reviewer-action-log", description: "Audit trail of all reviewer actions" },
      { title: "Post-Approval", href: "/docs/identity-verification/product-guide/post-approval", description: "What happens after an application is approved" },
    ]
  },
  {
    label: "Issuance with Credence",
    slug: "platform",
    description: "Issuance with Credence admin and platform management",
    items: [
      { title: "Dashboard", href: "/platform/dashboard", description: "Platform overview and quick actions" },
      { title: "Tenants", href: "/platform/tenants", description: "Multi-tenant configuration and isolation" },
      { title: "Issuers", href: "/platform/issuers", description: "Issuer management and configuration" },
      { title: "Templates", href: "/platform/templates", description: "Credential template management" },
      { title: "ID Applications", href: "/platform/id-applications", description: "Application tracking and management" },
      { title: "Digital Credentials", href: "/platform/digital-credentials", description: "Issued credential management" },
      { title: "Trust Management", href: "/platform/trust-management", description: "Trust framework configuration" },
      { title: "Analytics", href: "/platform/analytics", description: "Platform analytics and reporting" },
      { title: "API Explorer", href: "/platform/api-explorer", description: "Interactive API reference" },
      { title: "Settings", href: "/platform/settings", description: "Global platform configuration" },
    ]
  },
  {
    label: "Credence ID Wallet App",
    slug: "holder",
    description: "Managing digital credentials in the Credence Wallet app",
    items: [
      { title: "Overview", href: "/holder/overview", description: "What the Credence Wallet is and what it does" },
      { title: "Downloading the App", href: "/holder/downloading-the-app", description: "Get the Credence Wallet on iOS or Android" },
      { title: "Enrollment: Overview", href: "/holder/enrollment/overview", description: "Introduction to the enrollment process" },
      { title: "Using the Wallet App", href: "/holder/enrollment/using-wallet-app", description: "Enroll via the Credence Wallet mobile app" },
      { title: "Using IDV Browser", href: "/holder/enrollment/using-idv-browser", description: "Enroll via web browser" },
      { title: "Supported Documents", href: "/holder/enrollment/supported-documents", description: "Which ID documents are accepted" },
      { title: "Tips for Success", href: "/holder/enrollment/tips-for-success", description: "Best practices for a successful enrollment" },
      { title: "Checking Application Status", href: "/holder/enrollment/checking-application-status", description: "How to track your enrollment status" },
      { title: "Viewing Credential", href: "/holder/viewing-credential", description: "How to access and view your digital ID" },
      { title: "Sharing via QR Code", href: "/holder/sharing-qr-code", description: "Present your credential using a QR code" },
      { title: "Sharing via NFC", href: "/holder/sharing-nfc", description: "Tap-to-share with NFC-enabled readers" },
      { title: "Credential Status", href: "/holder/credential-status", description: "Active, suspended, and revoked states" },
      { title: "Managing Lifecycle", href: "/holder/managing-lifecycle", description: "Renewals, updates, and reissuance" },
      { title: "Lost or Stolen Device", href: "/holder/lost-stolen-device", description: "What to do if your device is lost or stolen" },
    ]
  },
  {
    label: "Credence ID Digital Wallet SDK",
    slug: "sdk",
    description: "Architecture, security, and integration guide for the Credence ID Digital Wallet SDK",
    items: [
      { title: "Overview", href: "/sdk/overview", description: "What the SDK is, delivery options, and supported platforms" },
      { title: "Supported Standards & Protocols", href: "/sdk/supported-standards", description: "OpenID4VCI, ISO 18013-5, and OpenID4VP" },
      { title: "Security Architecture", href: "/sdk/security-architecture", description: "Hardware-backed key storage, RASP, and anti-tampering" },
      { title: "Credential Lifecycle & Integration Flow", href: "/sdk/credential-lifecycle", description: "Activation, refresh, device replacement, and revocation" },
      { title: "Privacy & User Control", href: "/sdk/privacy", description: "Selective disclosure, consent, and data minimization" },
      { title: "Accessibility & Inclusion", href: "/sdk/accessibility", description: "Section 508, WCAG 2.1 AA, localization, and web fallback" },
    ]
  },
  {
    label: "Digital ID Lifecycle",
    slug: "lifecycle",
    description: "The four stages every digital credential passes through",
    items: [
      { title: "Overview", href: "/lifecycle/overview", description: "The four stages of a digital credential" },
      { title: "Stage 1: Enrollment", href: "/lifecycle/stage-1-enrollment", description: "Capturing identity data and documents" },
      { title: "Stage 2: Issuance", href: "/lifecycle/stage-2-issuance", description: "Verification, approval, and credential creation" },
      { title: "Stage 3: Holding", href: "/lifecycle/stage-3-holding", description: "Storing and managing credentials in the wallet" },
      { title: "Stage 4: Verification", href: "/lifecycle/stage-4-verification", description: "Presenting credentials to verifying parties" },
    ]
  },
  {
    label: "Learn",
    slug: "learn",
    description: "Educational resources about digital identity",
    items: [
      { title: "Digital Credentials 101", href: "/learn/digital-credentials-101", description: "Introduction to digital credentials and identity" },
    ]
  },
];

export function getFlatNavItems(): NavItem[] {
  return navigation.flatMap(section => section.items);
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
    { title: "IwC Knowledge Base", href: "/home" }
  ];
  for (const section of navigation) {
    for (const item of section.items) {
      if (item.href === href) {
        crumbs.push({ title: section.label, href: "#" });
        crumbs.push({ title: item.title, href: item.href });
        return crumbs;
      }
    }
  }
  return crumbs;
}

export function getActiveSection(href: string): NavSection | null {
  for (const section of navigation) {
    for (const item of section.items) {
      if (item.href === href) return section;
    }
  }
  return null;
}
