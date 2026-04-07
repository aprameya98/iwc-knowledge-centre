import type { SearchItem } from '../lib/search';

export const searchIndex: SearchItem[] = [
  // Identity Verification (IDV)
  {
    title: "Overview & How It Works",
    href: "/docs/identity-verification/overview",
    section: "Identity Verification (IDV)",
    content: "IDV is the identity proofing pipeline within IwC. It runs six automated checks in parallel — OCR, biometric match, liveness detection, document authentication, SOR check, and fraud check — typically completing in 5 to 15 seconds. After approval the issuance service assembles a signed credential and delivers it to the holder wallet via OpenID4VCI."
  },
  {
    title: "Automated Checks",
    href: "/docs/identity-verification/automated-checks",
    section: "Identity Verification (IDV)",
    content: "IDV runs six checks on every submission in parallel. OCR extracts VIZ and MRZ fields with per-field confidence scores. Biometric match compares document portrait to selfie using a NIST FRVT Top 2 model. Liveness detection combines passive image analysis with optional active challenge-response certified to ISO IEC 30107-3 iBeta Level 2. Document authentication runs visual forensic inspection, data extraction, cross-data validation, and consistency checking. The SOR check validates attributes against the issuer's authoritative data source. The fraud check runs biometric deduplication, document screening, and machine learning fraud models."
  },
  {
    title: "Review Dashboard",
    href: "/docs/identity-verification/review-dashboard",
    section: "Identity Verification (IDV)",
    content: "The reviewer dashboard presents every submission as a structured record with applicant information, document trust factors, biometric trust factors, a decision panel, and an immutable reviewer action log. Reviewers can approve reject or escalate. Senior reviewers can override automated decisions with mandatory justification. The audit log is append-only with a minimum five-year retention period and is exportable in JSON or CSV."
  },
  // Platform
  {
    title: "Tenants",
    href: "/platform/iwc-portal/tenants",
    section: "Platform",
    content: "IwC supports multi-tenant deployments where multiple issuing organizations share a single platform instance with complete data isolation. Each tenant has its own configuration, templates, SOR connections, and reviewer teams."
  },
  {
    title: "Issuers",
    href: "/platform/iwc-portal/issuers",
    section: "Platform",
    content: "Issuer management and configuration within the IwC platform. Manage issuing organizations, their credentials, and authorization settings."
  },
  {
    title: "Templates",
    href: "/platform/iwc-portal/templates",
    section: "Platform",
    content: "Credential templates define the structure, attributes, and visual appearance of issued credentials. Administrators create and manage templates through the IwC admin console."
  },
  {
    title: "ID Applications",
    href: "/platform/iwc-portal/id-applications",
    section: "Platform",
    content: "Track and manage identity applications submitted through the platform. View application status, review history, and manage workflows."
  },
  {
    title: "Digital Credentials",
    href: "/platform/iwc-portal/digital-credentials",
    section: "Platform",
    content: "Manage issued digital credentials including status tracking, revocation, renewal, and lifecycle management."
  },
  {
    title: "Trust Management",
    href: "/platform/iwc-portal/trust-management",
    section: "Platform",
    content: "Configure trust frameworks, trusted registries, and verification policies for credential issuance and verification."
  },
  {
    title: "Analytics",
    href: "/platform/iwc-portal/analytics",
    section: "Platform",
    content: "Platform analytics and reporting for enrollment volumes, approval rates, processing times, and reviewer performance. Reports can be filtered by date range, document type, and tenant."
  },
  {
    title: "API Explorer",
    href: "/platform/iwc-portal/api-explorer",
    section: "Platform",
    content: "The API Explorer provides an interactive interface for testing IwC API endpoints. You can make live API calls, see request and response formats, and explore available endpoints."
  },
  // Credence ID Wallet App (Holder)
  {
    title: "Credence Wallet Overview",
    href: "/holder/overview",
    section: "Credence ID Wallet App",
    content: "The Credence Wallet is a secure mobile application for storing and presenting digital credentials. It uses device secure enclave technology to protect credential keys and supports multiple sharing methods including QR code and NFC tap. The wallet can hold multiple credentials from different issuers."
  },
  {
    title: "Downloading the Credence Wallet",
    href: "/holder/downloading-the-app",
    section: "Credence ID Wallet App",
    content: "The Credence Wallet is available on iOS (App Store) and Android (Google Play). Search for Credence Wallet and install the official app by Credence ID. The app requires iOS 14 or later or Android 8 or later. An internet connection is required for initial setup but credentials can be viewed offline."
  },
  {
    title: "Enrollment Overview",
    href: "/holder/enrollment/overview",
    section: "Credence ID Wallet App",
    content: "Enrollment is the first step in getting a digital credential. It involves submitting your identity documents and taking a selfie through either the Credence Wallet app or a web browser. The process typically takes 5-10 minutes."
  },
  {
    title: "Supported Documents for Enrollment",
    href: "/holder/enrollment/supported-documents",
    section: "Credence ID Wallet App",
    content: "IwC accepts government-issued photo identity documents for enrollment. Supported types vary by deployment configuration but typically include national identity cards, passports, driver's licenses, and residence permits."
  },
  {
    title: "Tips for Successful Enrollment",
    href: "/holder/enrollment/tips-for-success",
    section: "Credence ID Wallet App",
    content: "Ensure good lighting when photographing your documents and taking your selfie. Avoid glare on the document surface. Hold the document flat and fill the camera frame. Take your selfie with a neutral expression against a plain background."
  },
  {
    title: "Checking Application Status",
    href: "/holder/enrollment/checking-application-status",
    section: "Credence ID Wallet App",
    content: "After submitting your enrollment, you can check your application status in the Credence Wallet app or through the link provided in your enrollment confirmation. Status states include Submitted, Under Review, Additional Information Required, Approved, and Rejected."
  },
  {
    title: "Viewing Your Credential",
    href: "/holder/viewing-credential",
    section: "Credence ID Wallet App",
    content: "After your credential is issued, it appears in the Credence Wallet app. Tap the credential card to view all fields including your name, photo, and other attributes. You can also see the credential's status, issuer, and expiry date."
  },
  {
    title: "Sharing via QR Code",
    href: "/holder/sharing-qr-code",
    section: "Credence ID Wallet App",
    content: "To share your credential via QR code, open the credential in the Credence Wallet, tap Share, and choose QR Code. A QR code is generated that the verifier scans using VwC tooling or a compatible reader."
  },
  {
    title: "Sharing via NFC",
    href: "/holder/sharing-nfc",
    section: "Credence ID Wallet App",
    content: "NFC tap-to-share allows you to present your credential by tapping your phone on an NFC reader. Open the credential, activate NFC sharing, and tap your phone against the reader."
  },
  {
    title: "Credential Status",
    href: "/holder/credential-status",
    section: "Credence ID Wallet App",
    content: "Credentials have three possible statuses: Active (valid and usable), Suspended (temporarily deactivated by the issuer), and Revoked (permanently invalidated). Status is checked in real-time during verification."
  },
  {
    title: "Managing Credential Lifecycle",
    href: "/holder/managing-lifecycle",
    section: "Credence ID Wallet App",
    content: "Credentials have expiry dates set by the issuing organization. The Credence Wallet notifies you before expiry with renewal reminders. Renewals may require a new enrollment submission or may be automatic."
  },
  {
    title: "Lost or Stolen Device",
    href: "/holder/lost-stolen-device",
    section: "Credence ID Wallet App",
    content: "If your device is lost or stolen, contact your issuing authority immediately to request credential revocation. Credentials are protected by device authentication, so they cannot be used without your PIN or biometric."
  },
  // SDK
  {
    title: "Overview",
    href: "/sdk/overview",
    section: "Credence ID Digital Wallet SDK",
    content: "The Credence ID Digital Wallet is a cross-platform solution built on Kotlin Multiplatform (KMP) and the Open Wallet Foundation's multipaz library. It provides a unified API for credential management, supporting both in-person and online presentation. Available as an embeddable SDK (.aar for Android, .xcframework for iOS) or as a white-label application."
  },
  {
    title: "Supported Standards & Protocols",
    href: "/sdk/supported-standards",
    section: "Credence ID Digital Wallet SDK",
    content: "The SDK uses OpenID4VCI for credential provisioning and issuance including deferred issuance. In-person presentation follows ISO 18013-5 with device engagement, session encryption via ephemeral ECDH, and selective disclosure. Online presentation uses OpenID4VP with HTTPS certificate pinning and real-time status checking."
  },
  {
    title: "Security Architecture",
    href: "/sdk/security-architecture",
    section: "Credence ID Digital Wallet SDK",
    content: "The SDK aligns with NIST AAL2. Keys are stored in hardware-backed ECDSA P-256 key pairs in the Android TEE or iOS Secure Element. The RASP layer detects root, jailbreak, Frida, Xposed, debuggers, and emulators. FLAG_SECURE blocks screenshots of sensitive data. Backend monitoring detects simultaneous bindings and geographic anomalies."
  },
  {
    title: "Credential Lifecycle & Integration Flow",
    href: "/sdk/credential-lifecycle",
    section: "Credence ID Digital Wallet SDK",
    content: "The SDK manages the full credential lifecycle remotely. Activation includes biometric registration, hardware key generation, OpenID4VCI credential fetch, and encrypted DocumentStore storage. Silent background refresh fetches fresh MSOs automatically. Multiple staggered MSOs enable offline verification. Device replacement auto-revokes the old device's credential."
  },
  {
    title: "Privacy & User Control",
    href: "/sdk/privacy",
    section: "Credence ID Digital Wallet SDK",
    content: "The platform enforces data minimization and explicit user consent. Selective disclosure allows sharing derived attributes like age_over_18 instead of full birth dates. The UI displays the verifier identity, requested data, and retention intent before each presentation. No location telemetry is collected. Verification logs are local-only and users can delete all data at any time."
  },
  {
    title: "Accessibility & Inclusion",
    href: "/sdk/accessibility",
    section: "Credence ID Digital Wallet SDK",
    content: "The SDK is compliant with Section 508 and WCAG 2.1 AA. It supports adjustable text sizes, high-contrast modes, TalkBack and VoiceOver screen readers, and guided step-by-step onboarding for users with limited digital literacy. Supported languages include Spanish, Chinese, Vietnamese, and Tagalog. Web-based fallback components are available for older devices."
  },
  // Digital ID Lifecycle
  {
    title: "Digital ID Lifecycle Overview",
    href: "/lifecycle/overview",
    section: "Digital ID Lifecycle",
    content: "Every digital credential passes through four stages: Enrollment where identity data is captured, Issuance where the credential is verified and created, Holding where the credential lives in the user's wallet, and Verification where the credential is presented and validated."
  },
  {
    title: "Stage 1: Enrollment",
    href: "/lifecycle/stage-1-enrollment",
    section: "Digital ID Lifecycle",
    content: "Enrollment is the process by which an applicant submits their identity documents and biometric data to apply for a digital credential. This typically involves photographing a government-issued ID document and taking a selfie."
  },
  {
    title: "Stage 2: Issuance",
    href: "/lifecycle/stage-2-issuance",
    section: "Digital ID Lifecycle",
    content: "Issuance is the stage where IwC processes the enrollment submission. The platform runs six automated checks. A human reviewer may adjudicate edge cases. Once approved, the issuance service creates a cryptographically signed credential."
  },
  {
    title: "Stage 3: Holding",
    href: "/lifecycle/stage-3-holding",
    section: "Digital ID Lifecycle",
    content: "The holding stage is where the credential lives on the user's device in the Credence Wallet app. The wallet stores credentials securely using device secure enclave technology."
  },
  {
    title: "Stage 4: Verification",
    href: "/lifecycle/stage-4-verification",
    section: "Digital ID Lifecycle",
    content: "Verification is when the credential holder presents their credential to a verifying party. Presentation can happen via QR code scan, NFC tap, or online verification link."
  },
  // Learn
  {
    title: "Digital Credentials 101",
    href: "/learn/digital-credentials-101",
    section: "Learn",
    content: "A comprehensive introduction to digital credentials, digital identity, the trust triangle, and the Credence ID ecosystem. Understand what digital credentials are, why they matter, how issuers, holders, and verifiers interact, and how IwC fits into the digital identity landscape."
  },
];
