import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Credential Lifecycle Management | Issuance with Credence Solution Overview',
  description: 'Activation, renewal, multiple MSOs, replacement, revocation, and suspension in IwC.',
};

const toc = [
  { id: 'activation', title: 'Activation', level: 2 as const },
  { id: 'renewal', title: 'Renewal', level: 2 as const },
  { id: 'multiple-msos', title: 'Multiple MSOs', level: 2 as const },
  { id: 'replacement', title: 'Replacement', level: 2 as const },
  { id: 'revocation', title: 'Revocation', level: 2 as const },
  { id: 'suspension', title: 'Suspension & Reinstatement', level: 2 as const },
  { id: 'lifecycle-operations', title: 'Lifecycle Operations Summary', level: 2 as const },
];

const contentText = `IwC manages the complete credential lifecycle from first issuance to final revocation. Activation is a five-step process: the holder receives a notification, opens the wallet app, taps the credential offer link, the wallet authenticates with the IwC OpenID4VCI endpoint, and the signed credential is provisioned to the device secure element. Renewal is triggered automatically when a credential approaches expiry or can be initiated manually by an operator. The wallet receives a new credential offer and the existing credential is superseded on completion. Multiple MSOs allow pre-generation of staggered Mobile Security Objects so offline verifiers always have a fresh MSO available without requiring the holder to connect. Replacement handles lost stolen or damaged device scenarios by revoking the existing credential and issuing a new one to the replacement device. Revocation permanently invalidates a credential via status list update or MSO expiry. Suspension temporarily invalidates a credential while preserving the underlying data for potential reinstatement.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/platform/solution-overview/credential-lifecycle"
      title="Credential Lifecycle Management"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="activation">Activation</h2>
      <p>
        Activation is the process by which a signed credential is provisioned from IwC into the holder&apos;s wallet. The sequence is fully automated and takes under 60 seconds end to end:
      </p>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>What Happens</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Notification</strong></td>
            <td>Holder receives an email, SMS, or push notification containing an OpenID4VCI credential offer link</td>
          </tr>
          <tr>
            <td><strong>2. Wallet Launch</strong></td>
            <td>Holder opens the wallet app and taps the credential offer</td>
          </tr>
          <tr>
            <td><strong>3. Authorization</strong></td>
            <td>Wallet authenticates with the IwC OpenID4VCI endpoint using the pre-authorized code from the offer</td>
          </tr>
          <tr>
            <td><strong>4. Credential Request</strong></td>
            <td>Wallet sends a credential request — including proof of possession of the device key</td>
          </tr>
          <tr>
            <td><strong>5. Provisioning</strong></td>
            <td>Signed credential is returned and stored in the device&apos;s hardware-backed Secure Element or TEE</td>
          </tr>
        </tbody>
      </table>

      <h2 id="renewal">Renewal</h2>
      <p>
        Renewal is handled automatically by IwC — no manual re-enrollment, no re-capture of identity data. When a credential approaches its expiry date, IwC generates a new credential offer and delivers it to the holder&apos;s registered contact. The holder completes the same activation flow; on completion, the new credential supersedes the expiring one in the wallet.
      </p>
      <p>
        Renewal can also be triggered at any time by an authorized operator — for example, following a program policy change that requires updated credential attributes. The underlying identity data from the source system is used; no new identity proofing is required unless the program explicitly mandates it.
      </p>

      <h2 id="multiple-msos">Multiple MSOs</h2>
      <p>
        For mDoc credentials, IwC supports pre-generation of multiple Mobile Security Objects with staggered validity windows. This ensures that offline verifiers always have access to a fresh, valid MSO — even if the holder&apos;s device has not connected to the network recently.
      </p>
      <p>
        The MSO validity window is configurable per credential template — from hours to days — and the number of pre-generated MSOs is also configurable. As MSOs near expiry, the wallet silently requests fresh ones in the background, with no visible interruption to the holder.
      </p>

      <h2 id="replacement">Replacement</h2>
      <p>
        When a holder&apos;s device is lost, stolen, or replaced, IwC handles the credential migration cleanly:
      </p>
      <table>
        <thead>
          <tr>
            <th>Scenario</th>
            <th>IwC Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lost or stolen device reported</td>
            <td>Existing credential immediately revoked — verifiers cannot accept it from any device</td>
          </tr>
          <tr>
            <td>New device provisioned</td>
            <td>New credential offer generated and delivered — no new identity proofing required</td>
          </tr>
          <tr>
            <td>New device activated</td>
            <td>Fresh credential bound to the new device key — old device key permanently invalidated</td>
          </tr>
        </tbody>
      </table>

      <h2 id="revocation">Revocation</h2>
      <p>
        Revocation permanently invalidates a credential. Once revoked, a credential cannot be reinstated — a new issuance is required if the holder becomes eligible again.
      </p>
      <ul>
        <li>
          <strong>For mDoc credentials:</strong> The credential&apos;s MSO validity window is not renewed. Existing MSOs expire naturally. Verifiers with real-time connectivity can check status via the issuer endpoint; offline verifiers will reject the credential once all pre-generated MSOs have expired.
        </li>
        <li>
          <strong>For W3C VC credentials:</strong> The credential&apos;s bit in the W3C StatusList2021 bitstring is flipped. Any online verifier checking the status list will immediately see the revocation. The status list update propagates within seconds.
        </li>
      </ul>

      <h2 id="suspension">Suspension &amp; Reinstatement</h2>
      <p>
        Suspension temporarily invalidates a credential while preserving the underlying record for potential reinstatement. It is the appropriate action when a holder&apos;s status is under review, not definitively terminated.
      </p>
      <p>
        Reinstatement reverses a suspension — updating the status list and, where applicable, triggering fresh MSO generation — so the holder&apos;s credential becomes valid again without a new issuance.
      </p>

      <h2 id="lifecycle-operations">Lifecycle Operations Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Operation</th>
            <th>Trigger</th>
            <th>Re-Issuance Required</th>
            <th>Re-Proofing Required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Activation</td>
            <td>Initial approval</td>
            <td>Yes — first issuance</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Renewal</td>
            <td>Expiry approach / policy change</td>
            <td>Yes</td>
            <td>No (unless mandated)</td>
          </tr>
          <tr>
            <td>Replacement</td>
            <td>Lost/stolen/new device</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Suspension</td>
            <td>Status under review</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Reinstatement</td>
            <td>Review resolved — status confirmed</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Revocation</td>
            <td>Ineligibility / termination</td>
            <td>No (permanent)</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Re-adjudication</td>
            <td>Data change requiring re-review</td>
            <td>Yes (post-approval)</td>
            <td>Program-dependent</td>
          </tr>
        </tbody>
      </table>
    </ArticleWrapper>
  );
}
