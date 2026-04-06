import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Understanding Credential Status',
  description: 'An explanation of the three credential status states in the Credence Wallet — Active, Suspended, and Revoked — and what each means for usability.',
};

const toc = [
  { id: 'status-overview', title: 'Status Overview', level: 2 as const },
  { id: 'active', title: 'Active', level: 2 as const },
  { id: 'suspended', title: 'Suspended', level: 2 as const },
  { id: 'revoked', title: 'Revoked', level: 2 as const },
];

const content = `Every credential in the Credence Wallet has a status that indicates its current validity. The three possible statuses are Active, Suspended, and Revoked. An Active credential is fully valid and can be presented to any verifier. A Suspended credential is temporarily invalid and cannot be used for verification until the suspension is lifted by the issuing organization. A Revoked credential has been permanently invalidated and cannot be reinstated. The current status is visible on the credential card in the wallet and is encoded in every presentation so verifiers always receive up-to-date status information.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/holder/credential-status"
      title="Understanding Credential Status"
      contentText={content}
      toc={toc}
    >
      <h2 id="status-overview">Status Overview</h2>
      <p>
        Every credential stored in the Credence Wallet carries a status indicator that reflects its
        current validity. The status is set and managed exclusively by the issuing organization — you
        cannot change your own credential status. The current status is displayed prominently on the
        credential card in the wallet and is also embedded in every QR code or NFC presentation, ensuring
        that verifiers always receive accurate, real-time information about your credential's validity.
        You can check your credential's current status at any time by opening the Credence Wallet and
        viewing the credential card.
      </p>

      <h2 id="active">Active</h2>
      <p>
        An <strong>Active</strong> status means the credential is fully valid and can be presented to
        verifiers without restriction. This is the normal operational state for a credential that has been
        successfully issued, has not expired, and has not been suspended or revoked by the issuing
        organization. An Active credential can be used for all supported presentation methods including QR
        code and NFC. If your credential is Active and a verifier rejects it, contact your issuing
        organization to confirm there are no additional access restrictions that may apply outside the
        credential itself.
      </p>

      <h2 id="suspended">Suspended</h2>
      <p>
        A <strong>Suspended</strong> credential has been temporarily disabled by the issuing organization.
        Suspension is typically a reversible action taken in response to a specific circumstance, such as
        a report of a lost device, an ongoing administrative review, or a temporary change in the holder's
        status. While suspended, your credential cannot be used for verification — verifiers who check the
        credential will see that it is invalid. The credential card in your wallet will display a
        Suspended indicator. If your credential has been suspended and you believe this is an error, or
        if you wish to understand the reason, contact your issuing organization directly. Suspension can
        be lifted by the issuing organization when the underlying circumstance is resolved.
      </p>

      <Callout type="note">
        Only the issuing organization can suspend or reinstate a credential. If you believe your
        credential has been suspended in error, contact your issuing organization's support team with
        your credential reference number.
      </Callout>

      <h2 id="revoked">Revoked</h2>
      <p>
        A <strong>Revoked</strong> credential has been permanently invalidated by the issuing organization.
        Unlike suspension, revocation is not reversible — once revoked, the credential cannot be
        reinstated. Revocation may occur for a number of reasons including the expiry of an employment
        relationship, a change in entitlement, a security incident, or a finding of fraudulent enrollment.
        A revoked credential will display a Revoked indicator in your wallet and cannot be used for
        verification. If you require a credential after revocation, you will typically need to re-enroll
        with your issuing organization to receive a new one. Revoked credentials remain in your wallet
        for your records but are clearly marked as invalid.
      </p>
    </ArticleWrapper>
  );
}
