import type { SearchItem } from '../lib/search';

export const searchIndex: SearchItem[] = [
  // Identity Verification (IDV) - Product Guide
  {
    title: "IwC Product Overview",
    href: "/docs/identity-verification/product-guide/overview",
    section: "Identity Verification (IDV)",
    content: "Issuance with Credence (IwC) is Credence ID's identity verification and credential issuance platform. It accepts enrollment submissions, runs automated identity verification checks, enables human reviewer adjudication, and triggers credential issuance upon approval. IwC is designed for enterprise-scale deployments and supports multi-tenant configurations for different issuing organizations."
  },
  {
    title: "How IwC Works",
    href: "/docs/identity-verification/product-guide/how-it-works",
    section: "Identity Verification (IDV)",
    content: "IwC processes each enrollment through six automated checks: OCR extracts text from documents, biometric matching compares the selfie to the ID photo, liveness detection confirms a live person is present, document authentication validates the document's security features, SOR check validates against the system of record, and fraud check screens for known fraud patterns. Reviewers then make approve or reject decisions based on the automated results."
  },
  {
    title: "Automated Checks Overview",
    href: "/docs/identity-verification/product-guide/automated-checks/overview",
    section: "Identity Verification (IDV)",
    content: "IwC runs six automated checks on every enrollment submission: OCR, Biometric Match, Liveness Detection, Document Authentication, SOR Check, and Fraud Check. Each check produces a pass, fail, or review result that is surfaced to the human reviewer in the dashboard."
  },
  {
    title: "OCR Check",
    href: "/docs/identity-verification/product-guide/automated-checks/ocr",
    section: "Identity Verification (IDV)",
    content: "The OCR check uses optical character recognition to extract text from the submitted identity document. It reads all fields including name, date of birth, document number, expiry date, address, and MRZ data. The extracted text is validated for format correctness and used in subsequent cross-data validation checks."
  },
  {
    title: "Biometric Match Check",
    href: "/docs/identity-verification/product-guide/automated-checks/biometric-match",
    section: "Identity Verification (IDV)",
    content: "The biometric match check performs a 1:1 facial comparison between the portrait photo extracted from the identity document and the live selfie submitted during enrollment. The system produces a similarity score. Scores above the configured threshold result in a pass. The technology is NIST-ranked and ISO/IEC 30107-3 iBeta Level 2 certified."
  },
  {
    title: "Liveness Detection",
    href: "/docs/identity-verification/product-guide/automated-checks/liveness-detection",
    section: "Identity Verification (IDV)",
    content: "Liveness detection ensures that the selfie submitted during enrollment was captured from a real, live person rather than a photograph, screen, or mask. IwC supports both passive liveness (analysis of a single selfie image) and active liveness (challenge-response interaction). The dual-layer approach provides the highest level of spoof resistance."
  },
  {
    title: "Document Authentication Check",
    href: "/docs/identity-verification/product-guide/automated-checks/document-authentication",
    section: "Identity Verification (IDV)",
    content: "Document authentication verifies that the submitted identity document is genuine and unaltered. It analyzes visual and forensic security features, extracts and cross-validates data from multiple zones (VIZ, MRZ, barcode), and checks structural consistency. The system supports 1,500+ document types from 200+ countries."
  },
  {
    title: "SOR Check",
    href: "/docs/identity-verification/product-guide/automated-checks/sor-check",
    section: "Identity Verification (IDV)",
    content: "The System of Record (SOR) check validates the applicant's identity against an authoritative backend database. For enterprise deployments, this may be an HR database, government registry, or member database. IwC provides API-based SOR integration that allows the platform to confirm that the applicant is who they claim to be according to the authoritative source."
  },
  {
    title: "Fraud Check",
    href: "/docs/identity-verification/product-guide/automated-checks/fraud-check",
    section: "Identity Verification (IDV)",
    content: "The fraud check screens each enrollment submission against known fraud patterns, duplicate detection, and risk signals. It identifies submissions that match previously flagged documents or biometrics, detects injection attacks and synthetic identity fraud, and flags high-risk submissions for additional human review."
  },
  {
    title: "Document Authentication: How It Works",
    href: "/docs/identity-verification/product-guide/document-authentication-deep-dive/how-it-works",
    section: "Identity Verification (IDV)",
    content: "Document authentication in IwC uses a four-layer verification approach: visual and forensic inspection of security features, data extraction from all document zones, cross-data validation between zones, and document consistency checks. Together these layers establish high confidence that a document is genuine and unaltered."
  },
  {
    title: "Visual & Forensic Inspection",
    href: "/docs/identity-verification/product-guide/document-authentication-deep-dive/visual-forensic-inspection",
    section: "Identity Verification (IDV)",
    content: "Visual and forensic inspection analyzes the submitted document image for security features including holograms, microprinting, UV-reactive elements, security threads, watermarks, and color-shifting ink. The system uses trained models to detect the presence and correctness of these features for the specific document type."
  },
  {
    title: "Data Extraction",
    href: "/docs/identity-verification/product-guide/document-authentication-deep-dive/data-extraction",
    section: "Identity Verification (IDV)",
    content: "Data extraction reads information from the three document data zones: the Visual Inspection Zone (VIZ) containing human-readable fields, the Machine Readable Zone (MRZ) at the bottom of travel documents, and 1D/2D barcodes on modern driver's licenses and ID cards. All extracted data is normalized and stored for cross-validation."
  },
  {
    title: "Cross-Data Validation",
    href: "/docs/identity-verification/product-guide/document-authentication-deep-dive/cross-data-validation",
    section: "Identity Verification (IDV)",
    content: "Cross-data validation compares the data extracted from different document zones to confirm consistency. For example, the name and date of birth in the VIZ must match the MRZ. Document number and expiry date must be consistent across all zones. Discrepancies between zones indicate potential tampering or forgery."
  },
  {
    title: "Document Consistency Check",
    href: "/docs/identity-verification/product-guide/document-authentication-deep-dive/document-consistency-check",
    section: "Identity Verification (IDV)",
    content: "The document consistency check validates that the physical layout, typography, and field placement of the submitted document matches the expected template for that document type. Structural anomalies such as misaligned fields, incorrect font usage, or wrong background patterns flag the document for review."
  },
  {
    title: "Supported Documents",
    href: "/docs/identity-verification/product-guide/document-authentication-deep-dive/supported-documents",
    section: "Identity Verification (IDV)",
    content: "IwC supports over 1,500 identity document types from more than 200 countries and territories. This includes national identity cards, passports, driver's licenses, residence permits, and travel documents. The Philippines national eID (PhilID) is fully supported with enhanced validation for its specific security features."
  },
  {
    title: "Biometric Verification: How It Works",
    href: "/docs/identity-verification/product-guide/biometric-verification-deep-dive/how-it-works",
    section: "Identity Verification (IDV)",
    content: "IwC biometric verification uses a four-step process: selfie capture, dual-layer liveness detection (passive and active), 1:1 biometric matching against the document portrait, and verification result. The dual-layer liveness approach combines passive analysis with active challenge-response to provide the highest anti-spoofing protection."
  },
  {
    title: "Passive Liveness Detection",
    href: "/docs/identity-verification/product-guide/biometric-verification-deep-dive/passive-liveness",
    section: "Identity Verification (IDV)",
    content: "Passive liveness detection analyzes a single selfie image to determine whether it was captured from a live person or from a spoof artifact such as a printed photograph, digital screen, or 3D mask. The analysis uses texture, depth, and reflection cues invisible to the human eye. No user action is required."
  },
  {
    title: "Active Liveness Detection",
    href: "/docs/identity-verification/product-guide/biometric-verification-deep-dive/active-liveness",
    section: "Identity Verification (IDV)",
    content: "Active liveness detection presents the user with a challenge that requires real-time response, such as turning their head, blinking, or following an on-screen prompt. This makes it impossible for a static photo or pre-recorded video to pass. Active liveness is combined with passive liveness for the highest confidence level."
  },
  {
    title: "Biometric Matching",
    href: "/docs/identity-verification/product-guide/biometric-verification-deep-dive/biometric-matching",
    section: "Identity Verification (IDV)",
    content: "Biometric matching performs a 1:1 facial comparison between two images: the portrait extracted from the identity document and the live selfie captured during enrollment. The comparison uses deep learning face recognition models to generate a similarity score. The threshold for passing is configurable per deployment."
  },
  {
    title: "Biometric Certifications",
    href: "/docs/identity-verification/product-guide/biometric-verification-deep-dive/certifications",
    section: "Identity Verification (IDV)",
    content: "Credence ID biometric technology holds NIST FRVT Top 2 ranking for facial recognition accuracy, ISO/IEC 30107-3 iBeta Level 2 certification for liveness detection, and supports adaptive liveness combining passive and active detection methods. These certifications represent the highest standards in the identity verification industry."
  },
  {
    title: "Review Dashboard Overview",
    href: "/docs/identity-verification/product-guide/review-dashboard/overview",
    section: "Identity Verification (IDV)",
    content: "The IwC Review Dashboard is the interface used by enterprise staff to adjudicate enrollment applications. It presents the automated check results alongside the applicant's submitted documents and biometric data, enabling reviewers to make informed approve or reject decisions efficiently."
  },
  {
    title: "Applicant Information Panel",
    href: "/docs/identity-verification/product-guide/review-dashboard/applicant-information",
    section: "Identity Verification (IDV)",
    content: "The applicant information panel displays all data extracted from the enrollment submission including personal details from the ID document, the submitted selfie, and metadata about the enrollment session such as submission time, device type, and geographic location."
  },
  {
    title: "Document Trust Factors",
    href: "/docs/identity-verification/product-guide/review-dashboard/document-trust-factors",
    section: "Identity Verification (IDV)",
    content: "The document trust factors section of the dashboard shows the results of all document authentication checks: OCR extraction quality, visual forensic inspection results, MRZ validation, barcode check, cross-data validation, and consistency check. Each factor is shown as pass, fail, or review with supporting detail."
  },
  {
    title: "Biometric Trust Factors",
    href: "/docs/identity-verification/product-guide/review-dashboard/biometric-trust-factors",
    section: "Identity Verification (IDV)",
    content: "The biometric trust factors panel shows the results of liveness detection and face matching. It displays the biometric similarity score, the liveness confidence score, and flags any anomalies detected during biometric processing. Reviewers can see side-by-side comparison of the document portrait and live selfie."
  },
  {
    title: "Making a Decision",
    href: "/docs/identity-verification/product-guide/review-dashboard/making-a-decision",
    section: "Identity Verification (IDV)",
    content: "Reviewers can approve, reject, or escalate each application from the dashboard. Approving triggers the issuance service to create and deliver the credential. Rejecting sends a notification to the applicant with a reason code. Escalating routes the application to a senior reviewer. All decisions are logged in the reviewer action log."
  },
  {
    title: "Reviewer Action Log",
    href: "/docs/identity-verification/product-guide/review-dashboard/reviewer-action-log",
    section: "Identity Verification (IDV)",
    content: "The reviewer action log provides a complete audit trail of all actions taken on each application, including who reviewed it, what checks they performed, what decision was made, and when. The log is immutable and can be exported for compliance and audit purposes."
  },
  {
    title: "Post-Approval",
    href: "/docs/identity-verification/product-guide/post-approval",
    section: "Identity Verification (IDV)",
    content: "After approval, the IwC issuance service creates a cryptographically signed credential and delivers it to the applicant's Credence Wallet. The applicant receives a push notification. The credential is immediately available for use. No further action is required from the applicant."
  },
  // Platform
  {
    title: "Tenants",
    href: "/platform/tenants",
    section: "Platform",
    content: "IwC supports multi-tenant deployments where multiple issuing organizations share a single platform instance with complete data isolation. Each tenant has its own configuration, templates, SOR connections, and reviewer teams."
  },
  {
    title: "Issuers",
    href: "/platform/issuers",
    section: "Platform",
    content: "Issuer management and configuration within the IwC platform. Manage issuing organizations, their credentials, and authorization settings."
  },
  {
    title: "Templates",
    href: "/platform/templates",
    section: "Platform",
    content: "Credential templates define the structure, attributes, and visual appearance of issued credentials. Administrators create and manage templates through the IwC admin console."
  },
  {
    title: "ID Applications",
    href: "/platform/id-applications",
    section: "Platform",
    content: "Track and manage identity applications submitted through the platform. View application status, review history, and manage workflows."
  },
  {
    title: "Digital Credentials",
    href: "/platform/digital-credentials",
    section: "Platform",
    content: "Manage issued digital credentials including status tracking, revocation, renewal, and lifecycle management."
  },
  {
    title: "Trust Management",
    href: "/platform/trust-management",
    section: "Platform",
    content: "Configure trust frameworks, trusted registries, and verification policies for credential issuance and verification."
  },
  {
    title: "Analytics",
    href: "/platform/analytics",
    section: "Platform",
    content: "Platform analytics and reporting for enrollment volumes, approval rates, processing times, and reviewer performance. Reports can be filtered by date range, document type, and tenant."
  },
  {
    title: "API Explorer",
    href: "/platform/api-explorer",
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
    title: "Using the Wallet App to Enroll",
    href: "/holder/enrollment/using-wallet-app",
    section: "Credence ID Wallet App",
    content: "To enroll using the Credence Wallet app, download the app, open an enrollment invitation or scan a QR code, follow the document capture steps, take your selfie, and submit. The app guides you through each step with clear instructions."
  },
  {
    title: "Using the IDV Browser to Enroll",
    href: "/holder/enrollment/using-idv-browser",
    section: "Credence ID Wallet App",
    content: "The IDV Browser allows enrollment without installing an app. Open the enrollment link in a mobile browser, grant camera permissions, follow the document capture steps, take your selfie, and submit."
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
