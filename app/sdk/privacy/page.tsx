import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Privacy & User Control | Credence ID Digital Wallet SDK',
  description: 'How the Credence ID Digital Wallet SDK enforces data minimization, explicit user consent, and full holder control over credential data at every stage.',
};

const toc = [
  { id: 'privacy-by-design', title: 'Privacy by Design', level: 2 as const },
  { id: 'selective-disclosure', title: 'Selective Disclosure & Derived Attributes', level: 2 as const },
  { id: 'explicit-consent', title: 'Explicit Consent', level: 2 as const },
  { id: 'no-tracking', title: 'No Location Tracking', level: 2 as const },
  { id: 'local-logging', title: 'Local Logging & Deletion Rights', level: 2 as const },
];

const contentText = `The platform is engineered for data minimization and strict user consent. Users choose exactly what to share, for example sharing a boolean authorized_to_work true instead of a full date of birth or document number. The UI displays the requested data elements, the verifier identity, and intent-to-retain indicators before any transfer. Cryptographic proof of user presence via biometrics is required to release data. No telemetry is collected regarding beneficiary location or usage patterns. Verification events are logged strictly locally and users have the right to delete their credentials and all associated data at any time.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/sdk/privacy"
      title="Privacy & User Control"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="privacy-by-design">Privacy by Design</h2>
      <p>
        The Credence ID Digital Wallet platform is engineered from the ground up around data minimization and strict user consent. Privacy controls are architectural — built into the credential format, the presentation protocol, and the UI — rather than added as a policy layer on top of a system that was not designed with them in mind. The result is that privacy protections cannot be disabled, bypassed, or weakened through configuration changes at the issuer or verifier level.
      </p>
      <p>
        No credential data is transmitted during a presentation unless three conditions are met: the holder has actively authenticated (via biometric or PIN), the holder has reviewed and accepted the specific data request, and the verifier has been cryptographically identified. If any of these conditions is not satisfied, the wallet does not proceed.
      </p>

      <h2 id="selective-disclosure">Selective Disclosure & Derived Attributes</h2>
      <p>
        The wallet supports <strong>selective disclosure</strong> at the individual data element level. When a verifier requests credential data, the holder sees exactly which fields are being requested — and can see whether the request is narrowly scoped to what is genuinely necessary. For example, a verifier checking work authorization does not need a holder&apos;s full date of birth, home address, or document number. The wallet makes it technically straightforward to share only the relevant field.
      </p>
      <p>
        Beyond selective disclosure, the platform supports <strong>derived attributes</strong> — computed claims that convey a specific fact without exposing the underlying data. For instance, rather than sharing a full date of birth to prove age eligibility, the wallet can present a boolean <code>age_over_18: true</code>. Similarly, rather than revealing a document number to prove work authorization, it can present <code>authorized_to_work: true</code>. The verifier receives cryptographic proof of the claim without ever seeing the sensitive field that underpins it.
      </p>

      <Callout type="tip">
        Derived attributes are defined at the credential template level during issuance configuration. Work with your issuance team to define the set of derived attributes appropriate for the expected presentation contexts for your credential type.
      </Callout>

      <h2 id="explicit-consent">Explicit Consent</h2>
      <p>
        Before any data is released during a presentation, the wallet UI presents the holder with a clear consent screen containing three pieces of information:
      </p>
      <ul>
        <li>The <strong>exact list of data elements</strong> being requested, labeled in plain language rather than technical field names</li>
        <li>The <strong>verified identity of the requesting verifier</strong>, including its name and any trust anchor information available from the verifier&apos;s certificate</li>
        <li>Whether the verifier has indicated an <strong>intent to retain</strong> the presented data after the interaction ends</li>
      </ul>
      <p>
        The holder must actively approve the request — the wallet does not transmit anything in response to a presentation request unless the holder takes a deliberate action to confirm. In addition, <strong>cryptographic proof of user presence</strong> via biometric authentication or PIN is required to authorize the release. This means that physical possession of an unlocked device is not sufficient to use a stored credential; the holder must re-authenticate specifically for each presentation.
      </p>

      <h2 id="no-tracking">No Location Tracking</h2>
      <p>
        The wallet does not collect, transmit, or report any telemetry related to a holder&apos;s location, movement, or credential usage patterns. Presentation events are not reported back to the issuer or to Credence ID. The issuing authority has no visibility into where, when, or how frequently a credential is being used after it has been issued. This property is architectural — there is no opt-out or configuration switch because the data collection infrastructure does not exist.
      </p>

      <h2 id="local-logging">Local Logging & Deletion Rights</h2>
      <p>
        The wallet maintains a local log of verification events — a record of when and to whom a credential was presented, stored exclusively on the holder&apos;s device. This log is never transmitted to the issuer, the verifier, or any third party. Holders can review this log at any time within the wallet application.
      </p>
      <p>
        Holders have the right to delete their credentials and all associated data at any time, without requiring authorization from the issuing authority. Deletion removes the credential from the <code>DocumentStore</code>, clears the local verification log, and triggers revocation of the associated hardware key binding with the issuance service. The deletion is immediate and irreversible.
      </p>
    </ArticleWrapper>
  );
}
