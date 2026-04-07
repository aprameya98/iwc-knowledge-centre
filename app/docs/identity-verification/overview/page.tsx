import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Overview & How It Works | Identity Verification (IDV)',
  description: 'What IwC IDV is, the 6-step automated verification pipeline, and what happens after approval.',
};

const toc = [
  { id: 'what-is-idv', title: 'What Is IDV?', level: 2 as const },
  { id: 'who-uses-it', title: 'Who Uses It', level: 2 as const },
  { id: 'how-it-works', title: 'The 6-Step Automated Pipeline', level: 2 as const },
  { id: 'post-approval', title: 'After Approval', level: 2 as const },
];

const contentText = `Identity Verification IDV is the identity proofing pipeline within Issuance with Credence IwC. It sits between enrollment and credential issuance in the Digital ID Lifecycle — consuming raw applicant submissions and producing a verified identity record that IwC signs into a digital credential. IDV runs six automated checks in parallel: OCR, biometric matching, liveness detection, document authentication, system of record validation, and fraud screening. The full pipeline typically completes in 5 to 15 seconds. After approval the issuance service assembles a signed digital credential and delivers it to the holder's wallet via OpenID4VCI. The credential enters active lifecycle management — covering renewal, suspension, and revocation — from the moment it is provisioned.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/docs/identity-verification/overview"
      title="Overview & How It Works"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="what-is-idv">What Is IDV?</h2>
      <p>
        Identity Verification (IDV) is the identity proofing pipeline within Issuance with Credence. It sits between the enrollment stage — where an applicant submits their identity documents and biometrics — and the issuance stage, where a cryptographically signed digital credential is delivered to their wallet.
      </p>
      <p>
        IDV does not store raw identity data permanently, does not issue credentials directly, and does not replace the upstream enrollment interface. Its role is specific: consume a raw applicant submission, run a battery of automated checks, surface results to a human reviewer where needed, and produce a verified identity record that IwC can issue against.
      </p>

      <h2 id="who-uses-it">Who Uses It</h2>
      <p>
        IDV is used by any organisation that needs to verify identity before issuing a digital credential — including government agencies issuing digital driving licences and national IDs, financial institutions meeting KYC obligations, universities and employers issuing verifiable credentials, and any programme where credential issuance must be preceded by confirmed identity.
      </p>
      <p>
        Within those organisations, IDV surfaces to two audiences: the <strong>automated processing layer</strong> that runs checks without human involvement, and the <strong>reviewer</strong> who handles edge cases, escalations, and final approval decisions.
      </p>

      <h2 id="how-it-works">The 6-Step Automated Pipeline</h2>
      <p>
        When an applicant submission arrives, IDV runs six checks in parallel. The full pipeline typically completes in 5–15 seconds. Results are assembled into a single submission record visible in the Review Dashboard.
      </p>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Check</th>
            <th>What It Does</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><strong>OCR</strong></td>
            <td>Extracts text from the document's Visual Inspection Zone (VIZ) and Machine-Readable Zone (MRZ). Produces per-field confidence scores used by all downstream checks.</td>
          </tr>
          <tr>
            <td>2</td>
            <td><strong>Biometric Match</strong></td>
            <td>Compares the document portrait against the live selfie captured at enrollment. Produces a 0–100 similarity score using a deep learning model benchmarked against NIST FRVT.</td>
          </tr>
          <tr>
            <td>3</td>
            <td><strong>Liveness Detection</strong></td>
            <td>Determines whether the selfie was captured from a live person. Combines passive liveness analysis (texture, depth, micro-movements) with optional active challenge-response. ISO/IEC 30107-3 iBeta Level 2 certified.</td>
          </tr>
          <tr>
            <td>4</td>
            <td><strong>Document Authentication</strong></td>
            <td>Verifies the document is genuine across four layers: visual and forensic inspection, data extraction, cross-data validation, and structural consistency check. Covers 1,500+ document types from 200+ countries.</td>
          </tr>
          <tr>
            <td>5</td>
            <td><strong>System of Record (SOR) Check</strong></td>
            <td>Validates extracted identity attributes against the issuer's authoritative data source using fuzzy matching to account for transliterations and formatting variations.</td>
          </tr>
          <tr>
            <td>6</td>
            <td><strong>Fraud Check</strong></td>
            <td>Runs biometric deduplication, screens against a flagged documents database, and applies machine learning fraud pattern models. Hard fraud signals route the submission to mandatory human review.</td>
          </tr>
        </tbody>
      </table>
      <Callout type="note">
        All six checks run in parallel, not sequentially. The pipeline does not short-circuit on a single failing check — every result is surfaced to the reviewer so the full picture is available for decision-making.
      </Callout>

      <h2 id="post-approval">After Approval</h2>
      <p>
        Once a reviewer approves a submission (or the automated pipeline clears it without escalation), the IDV record is handed to the IwC Issuance Service. From that point:
      </p>
      <ul>
        <li>The issuance service assembles a credential payload from the verified identity attributes — standard ISO/IEC 18013-5 namespace attributes plus any programme-specific custom attributes</li>
        <li>Per-claim SHA-256 digests are computed and sent to the HSM for signing</li>
        <li>A signed credential (mDoc and/or W3C VC) is produced and an OpenID4VCI credential offer is generated</li>
        <li>The holder receives a notification (email, SMS, or push) and provisions the credential into their wallet</li>
        <li>The credential enters active lifecycle management — renewal notifications are triggered as expiry approaches; suspension, reinstatement, and revocation are available to authorised operators at any time</li>
      </ul>
      <p>
        The applicant receives status notifications at each milestone: submission received, under review, approved or rejected, and credential provisioned.
      </p>
    </ArticleWrapper>
  );
}
