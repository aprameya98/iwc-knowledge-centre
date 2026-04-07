import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Wallet User Journey | Credence ID Wallet',
  description: 'The end-to-end user journey for the Credence ID Wallet — from welcome screen to active credential sharing.',
};

const toc = [
  { id: 'streamlined-onboarding',   title: 'Streamlined Onboarding',                level: 2 as const },
  { id: 'welcome-experience',        title: 'The Welcome Experience',                level: 3 as const },
  { id: 'selecting-issuer',          title: 'Selecting an Issuer',                   level: 3 as const },
  { id: 'contact-detail-input',      title: 'Contact Detail Input',                  level: 3 as const },
  { id: 'secure-verification',       title: 'Secure Verification',                   level: 3 as const },
  { id: 'document-verification',     title: 'Seamless Document Verification',        level: 2 as const },
  { id: 'document-selection',        title: 'Document Selection',                    level: 3 as const },
  { id: 'verification-preparation',  title: 'Guided Verification Preparation',       level: 3 as const },
  { id: 'document-capture',          title: 'Intuitive Document Capture',            level: 3 as const },
  { id: 'nfc-chip',                  title: 'Reading the NFC Chip',                  level: 2 as const },
  { id: 'nfc-preparation',           title: 'NFC Preparation & Instruction',         level: 3 as const },
  { id: 'active-chip-scanning',      title: 'Active Chip Scanning',                  level: 3 as const },
  { id: 'biometric-verification',    title: 'Biometric Liveness & Final Verification', level: 2 as const },
  { id: 'liveness-preparation',      title: 'Liveness Preparation',                  level: 3 as const },
  { id: 'active-capture',            title: 'Active Capture & Processing',           level: 3 as const },
  { id: 'verification-success',      title: 'Verification Success & Handoff',        level: 3 as const },
  { id: 'wallet-dashboard',          title: 'The Wallet Dashboard',                  level: 2 as const },
  { id: 'active-wallet-view',        title: 'The Active Wallet View',                level: 3 as const },
  { id: 'credential-sharing',        title: 'Frictionless Credential Sharing',       level: 3 as const },
];

const contentText = `An end-to-end walkthrough of the Credence ID Wallet user experience — from the welcome screen through identity verification and into active credential management. Setting up a secure digital identity should be both safe and frictionless. This page documents the intuitive, user-centric process designed to get individuals verified and ready to go in just a few taps.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/holder/wallet-user-journey"
      title="Wallet User Journey"
      contentText={contentText}
      toc={toc}
    >
      <p>
        Setting up a secure digital identity should be both safe and frictionless. Here is a look at the intuitive, user-centric process designed to get individuals verified and ready to go in just a few taps.
      </p>

      {/* ── Section 1: Streamlined Onboarding ── */}
      <h2 id="streamlined-onboarding">Streamlined Onboarding: The Digital Credential Wallet Journey</h2>

      <h3 id="welcome-experience">01 | The Welcome Experience</h3>
      <p>
        The journey begins with a sleek, dark-themed landing screen that immediately establishes trust and sets a premium tone.
      </p>
      <ul>
        <li><strong>Value Proposition:</strong> Clear, upfront messaging emphasizes that the user&apos;s identity is &ldquo;Secure, private, and ready when you need it.&rdquo;</li>
        <li><strong>Trust Indicators:</strong> Highlighted features — <em>Government Verified</em>, <em>Biometric Secured</em>, and <em>Always With You</em> — reassure users before they even begin.</li>
        <li><strong>Clear Call to Action:</strong> A prominent, accessible &ldquo;Get My Digital ID&rdquo; button invites the user to start the process without visual clutter.</li>
      </ul>

      <h3 id="selecting-issuer">02 | Selecting an Issuer</h3>
      <p>
        Transitioning to a clean, light interface, the app guides the user to choose the authorized organization that will verify them.
      </p>
      <ul>
        <li><strong>Progress Tracking:</strong> A simple, top-level progress bar (Issuer &rarr; Phone &rarr; Document &rarr; Verify) sets clear expectations for the steps ahead.</li>
        <li><strong>Easy Discovery:</strong> A prominent search bar allows users to quickly find their specific institution rather than scrolling endlessly.</li>
        <li><strong>Categorized Options:</strong> Issuers are neatly listed alongside their industry (e.g., Banking &amp; Financial Services) and can be easily selected, indicated by a clear green checkmark, before hitting &ldquo;Continue.&rdquo;</li>
      </ul>

      <h3 id="contact-detail-input">03 | Contact Detail Input</h3>
      <p>
        Step two of the progress tracker focuses on establishing a secure, two-way line of communication.
      </p>
      <ul>
        <li><strong>Phone &amp; Email Collection:</strong> Clean, dedicated fields for both a phone number (featuring a country code dropdown) and an email address.</li>
        <li><strong>Transparent Explanations:</strong> Helpful microcopy below the input fields clearly explains why the data is needed — noting that an SMS will deliver a 6-digit code, and an email will deliver the approved Digital ID QR code.</li>
        <li><strong>Action-Oriented Button:</strong> The &ldquo;Send Verification Code&rdquo; button leaves no ambiguity about what happens next.</li>
      </ul>

      <h3 id="secure-verification">04 | Secure Verification</h3>
      <p>
        The final screen in this sequence handles the crucial OTP (One-Time Password) verification to ensure the contact details are accurate.
      </p>
      <ul>
        <li><strong>Reassurance:</strong> The screen displays the partially masked phone number the code was sent to, confirming the destination for the user.</li>
        <li><strong>Frictionless Input:</strong> Six distinct input boxes make entering the verification code straightforward and help prevent typing errors.</li>
        <li><strong>Built-in Support:</strong> A &ldquo;Resend code&rdquo; countdown timer (e.g., 54s) manages user expectations and prevents frustration if a message is delayed, followed by a final &ldquo;Verify &amp; Continue&rdquo; button to proceed to the document stage.</li>
      </ul>

      {/* ── Section 2: Document Verification ── */}
      <h2 id="document-verification">Seamless Document Verification: Guiding the User</h2>
      <p>
        Once the user&apos;s contact details are confirmed, the app seamlessly transitions into the core identity verification phase. This flow is designed to minimize errors and user frustration by providing crystal-clear instructions and visual aids.
      </p>

      <h3 id="document-selection">01 | Document Selection</h3>
      <p>
        Step three of the primary onboarding flow allows users to choose their preferred method of identification.
      </p>
      <ul>
        <li><strong>Diverse Options:</strong> The interface accommodates various ID types, including Driving Licenses, National ID Cards, Passports, and Verifiable Credential (VC) Cards.</li>
        <li><strong>Upfront Transparency:</strong> Each document card features helpful pill-shaped tags (e.g., <em>Front &amp; Back Scan</em>, <em>NFC / ICAO Chip</em>, <em>PDF417 Barcode</em>). This UX detail tells the user exactly what hardware capabilities or scanning steps will be required before they even make a selection, preventing mid-process surprises.</li>
        <li><strong>Clear State Changes:</strong> The &ldquo;Continue to Verification&rdquo; button remains inactive until a document is selected, preventing accidental progression without required input.</li>
      </ul>

      <h3 id="verification-preparation">02 | Guided Verification Preparation</h3>
      <p>
        Assuming the user selects &ldquo;Passport,&rdquo; the app introduces a nested progress tracker specifically for this document type (<em>Scan Passport &rarr; Read NFC Chip &rarr; Verify Photo &rarr; Documents</em>).
      </p>
      <ul>
        <li><strong>Setting Users Up for Success:</strong> Instead of placing the user straight into a camera view, this instructional screen pauses to explain exactly what is about to happen.</li>
        <li><strong>Visual Aids:</strong> A clear, high-quality illustration demonstrates exactly which part of the passport needs to be scanned (the photo page).</li>
        <li><strong>Actionable Tips:</strong> A dedicated &ldquo;Tips&rdquo; module provides easily scannable bullet points — advising on flat surfaces, full-page visibility, and avoiding glare. This proactively reduces common scanning errors.</li>
      </ul>

      <h3 id="document-capture">03 | Intuitive Document Capture</h3>
      <p>
        The final screen in this sequence activates the device&apos;s camera for the actual document scan.
      </p>
      <ul>
        <li><strong>Uncluttered Interface:</strong> The UI gets out of the way. The nested progress bar remains visible so the user stays oriented, but the focus is entirely on the task at hand.</li>
        <li><strong>Visual Guardrails:</strong> A prominent dashed framing box and a central camera icon provide intuitive alignment cues, showing the user exactly where to position their document.</li>
        <li><strong>Direct Instruction:</strong> Simple, reinforcing microcopy (&ldquo;Position the photo page of your passport within the frame&rdquo;) ensures the user doesn&apos;t have to guess what the system is looking for.</li>
      </ul>

      {/* ── Section 3: NFC Chip ── */}
      <h2 id="nfc-chip">Advanced Data Extraction: Reading the NFC Chip</h2>
      <p>
        Following the visual document scan, the app guides the user through reading the cryptographic data embedded within their e-Passport. Since interacting with NFC hardware can sometimes be confusing for users, this flow is designed with heavy emphasis on clear, physical instructions and real-time feedback.
      </p>

      <h3 id="nfc-preparation">01 | NFC Preparation &amp; Instruction</h3>
      <p>
        Step two of the nested passport verification flow prepares the user for a physical interaction between their device and their document.
      </p>
      <ul>
        <li><strong>Contextual Progress:</strong> The sub-navigation bar smoothly advances to &ldquo;Read NFC Chip,&rdquo; keeping the user oriented within the specific passport workflow.</li>
        <li><strong>Clear Visual Demonstration:</strong> A high-quality, unambiguous illustration shows exactly how the user needs to hold their phone against the closed passport, bridging the gap between digital instructions and physical actions.</li>
        <li><strong>Anticipatory Troubleshooting:</strong> The dedicated &ldquo;Tips&rdquo; module explains exactly how to execute the scan successfully (e.g., placing it face down, holding the phone still, and where the chip is typically located). This preempts the most common reasons for NFC read failures.</li>
      </ul>

      <h3 id="active-chip-scanning">02 | Active Chip Scanning</h3>
      <p>
        Once the user is ready and initiates the scan, the interface transitions into an active loading state that clearly communicates what the system is doing.
      </p>
      <ul>
        <li><strong>Focal Point Animation:</strong> A prominent, centralized wireless/NFC icon acts as a visual anchor, signaling that the device is actively searching for or reading the chip.</li>
        <li><strong>Transparent Status:</strong> The bold &ldquo;Reading NFC Chip...&rdquo; heading provides immediate system status, so the user never wonders if the app has frozen.</li>
        <li><strong>Reinforcing Microcopy:</strong> The subtext gently reminds the user to &ldquo;Hold your passport steady,&rdquo; reinforcing the physical requirements needed to successfully complete the secure data transfer.</li>
      </ul>

      {/* ── Section 4: Biometric ── */}
      <h2 id="biometric-verification">Biometric Liveness &amp; Final Verification: Closing the Loop</h2>
      <p>
        The final phase of the onboarding journey ensures that the person holding the device physically matches the verified document. This critical step prioritizes high-security biometric matching while maintaining a friction-free, reassuring user experience.
      </p>

      <h3 id="liveness-preparation">01 | Liveness Preparation</h3>
      <p>
        Before opening the front-facing camera, the app ensures the user knows exactly how to take a successful selfie for the biometric match, reducing the likelihood of failed attempts.
      </p>
      <ul>
        <li><strong>Privacy First:</strong> A crucial piece of microcopy explicitly states, &ldquo;This photo will not be retained,&rdquo; proactively addressing common user privacy and data security concerns before camera access is even requested.</li>
        <li><strong>Visual Dos and Don&apos;ts:</strong> Intuitive illustrations quickly demonstrate the correct framing (face centered inside the circle) versus incorrect framing (face partially out of bounds), bypassing the need for heavy text instructions.</li>
        <li><strong>Actionable Guidance:</strong> The recurring &ldquo;Tips&rdquo; module outlines environmental and physical requirements — such as finding even lighting, keeping a neutral expression, and removing glasses or hats — to ensure optimal match accuracy on the first try.</li>
      </ul>

      <h3 id="active-capture">02 | Active Capture &amp; Processing</h3>
      <p>
        Transitioning into the live camera view, the interface shifts to capture and verify the user&apos;s face against the secure database.
      </p>
      <ul>
        <li><strong>Focused Capture Area:</strong> A large, dedicated frame serves as the camera viewfinder, keeping the user&apos;s attention centered on positioning their face correctly.</li>
        <li><strong>User-Initiated Action:</strong> The &ldquo;Start Verification&rdquo; button ensures the user dictates the pace, allowing them to get perfectly situated before initiating the liveness scan.</li>
        <li><strong>Real-Time System Status:</strong> Once initiated, clear &ldquo;Verifying&rdquo; text provides immediate feedback that the app is actively processing the biometric data, preventing the user from wondering if the application has stalled.</li>
      </ul>

      <h3 id="verification-success">03 | Verification Success &amp; Handoff</h3>
      <p>
        The final screen delivers the results with absolute clarity, providing a highly satisfying conclusion to the setup process.
      </p>
      <ul>
        <li><strong>Transparent Results:</strong> A side-by-side visual comparison of the extracted &ldquo;Document Photo&rdquo; and the new &ldquo;Live Photo&rdquo; provides tangible proof of the match. This is anchored by a prominent, high-confidence match score (e.g., 98.7%) for ultimate reassurance.</li>
        <li><strong>Comprehensive Checklist:</strong> A crisp, highly scannable checklist confirms that all security hurdles have been successfully cleared: <em>Liveness Check</em>, <em>Biometric Match</em>, and <em>Document Authenticity</em>.</li>
        <li><strong>The Final Call to Action:</strong> With a definitive &ldquo;Verification Complete&rdquo; success message, the primary button updates to &ldquo;Go to My Wallet,&rdquo; seamlessly transitioning the newly verified user out of the onboarding flow and into their active digital wallet.</li>
      </ul>

      <Callout type="tip">
        The side-by-side biometric result screen — showing both the document photo and the live capture alongside a match score — builds user trust by making the verification outcome transparent and easy to understand.
      </Callout>

      {/* ── Section 5: Wallet Dashboard ── */}
      <h2 id="wallet-dashboard">The Wallet Dashboard: Managing and Sharing Your Identity</h2>
      <p>
        Once onboarding and verification are complete, users land in their secure digital wallet. This central hub is designed for quick access, intuitive credential management, and the frictionless sharing of their digital identity.
      </p>

      <h3 id="active-wallet-view">01 | The Active Wallet View</h3>
      <p>
        The main dashboard provides a clear, at-a-glance overview of the user&apos;s active credentials in a clean, card-based layout.
      </p>
      <ul>
        <li><strong>Personalized Header:</strong> A welcoming top navigation area greets the user by name and provides quick access to notifications and account settings.</li>
        <li><strong>The Digital ID Card:</strong> The verified credential is displayed prominently. It highlights the issuer (e.g., National Bank of Egypt) and document type (Passport) alongside a bright green &ldquo;Verified&rdquo; badge for instant credibility.</li>
        <li><strong>Essential Data, Masked:</strong> Key details like Full Name, Date of Birth, and Document Number are neatly organized. Sensitive data elements are visually masked by default to protect the user&apos;s privacy from shoulder surfers.</li>
        <li><strong>Built for Growth:</strong> A distinct, dashed-border &ldquo;Add New Digital ID&rdquo; action sits below the primary card, inviting users to securely store multiple credentials — such as a driver&apos;s license or employee ID — within the same ecosystem.</li>
      </ul>

      <h3 id="credential-sharing">02 | Frictionless Credential Sharing</h3>
      <p>
        When a user needs to prove their identity in the real world, the interface transforms to prioritize secure, immediate data transfer.
      </p>
      <ul>
        <li><strong>Dynamic QR Generation:</strong> Tapping the digital ID card seamlessly flips or expands it into a large, high-contrast QR code. This allows verifiers to scan and authenticate the user&apos;s identity instantly.</li>
        <li><strong>Clear Context:</strong> Simple microcopy (&ldquo;Show this QR to verifier&rdquo;) removes any guesswork about how to use the feature.</li>
        <li><strong>Quick Dismissal:</strong> A prominent &ldquo;Cancel&rdquo; button sits just below the QR code, giving the user an obvious and easy way to close the sharing view and return to their private dashboard once the verification is complete.</li>
      </ul>
    </ArticleWrapper>
  );
}
