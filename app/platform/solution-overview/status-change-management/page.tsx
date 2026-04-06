import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Status Change Management | Issuance with Credence Solution Overview',
  description: 'How status changes propagate to wallets and verifiers in IwC, including online and offline scenarios.',
};

const toc = [
  { id: 'status-triggers', title: 'Status Change Triggers', level: 2 as const },
  { id: 'propagation', title: 'How Status Reaches Wallets & Verifiers', level: 2 as const },
  { id: 'online-offline', title: 'Online vs Offline Verification', level: 2 as const },
  { id: 'mso-validity', title: 'MSO Validity Window', level: 2 as const },
];

const contentText = `Status changes in IwC are first-class operations with defined propagation paths for both online and offline verification scenarios. Status change triggers include operator-initiated actions such as suspension revocation reinstatement and re-adjudication as well as automated triggers such as expiry approach and case management system webhooks. For W3C VC credentials status propagates immediately via W3C StatusList2021 bitstring update. For mDoc credentials status propagates via MSO validity window expiry and real-time issuer status endpoint. Online verifiers check status in real time. Offline verifiers rely on pre-generated MSOs with configurable validity windows that balance offline usability against status freshness. The MSO validity window is configurable per template from hours to days.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/platform/solution-overview/status-change-management"
      title="Status Change Management"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="status-triggers">Status Change Triggers</h2>
      <p>
        Status changes in IwC originate from two sources — operator actions and automated system events:
      </p>
      <table>
        <thead>
          <tr>
            <th>Trigger Source</th>
            <th>Action</th>
            <th>Resulting Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Operator (Admin Portal)</td>
            <td>Suspend</td>
            <td>Suspended — immediately invalid</td>
          </tr>
          <tr>
            <td>Operator (Admin Portal)</td>
            <td>Reinstate</td>
            <td>Active — immediately valid</td>
          </tr>
          <tr>
            <td>Operator (Admin Portal)</td>
            <td>Revoke</td>
            <td>Revoked — permanently invalid</td>
          </tr>
          <tr>
            <td>Operator (Admin Portal)</td>
            <td>Re-adjudicate</td>
            <td>Under review — suspended pending outcome</td>
          </tr>
          <tr>
            <td>Case Management System (webhook)</td>
            <td>Status change event</td>
            <td>Mirrors case status — configurable mapping</td>
          </tr>
          <tr>
            <td>Automated (system)</td>
            <td>Expiry approach</td>
            <td>Renewal notification triggered</td>
          </tr>
          <tr>
            <td>Automated (system)</td>
            <td>MSO expiry (no renewal)</td>
            <td>Offline presentation rejected by verifier</td>
          </tr>
        </tbody>
      </table>

      <h2 id="propagation">How Status Reaches Wallets &amp; Verifiers</h2>
      <p>
        IwC uses format-appropriate status propagation mechanisms for each credential type:
      </p>
      <ul>
        <li>
          <strong>W3C VC Credentials — W3C StatusList2021:</strong> A privacy-preserving bitstring mechanism. When a credential is suspended or revoked, the corresponding bit in the status list is flipped. The status list is a signed JSON-LD document hosted at a public endpoint. Any online verifier fetching the status list will see the change within seconds of it being made.
        </li>
        <li>
          <strong>mDoc Credentials — MSO Validity and Issuer Status Endpoint:</strong> The Mobile Security Object has a built-in validity window. An expired MSO signals an invalid credential to offline verifiers. Online verifiers can additionally query the issuer status endpoint for real-time confirmation. When a credential is revoked or suspended, IwC stops generating new MSOs — the credential becomes invalid as the last valid MSO expires.
        </li>
      </ul>
      <Callout type="important">
        For immediate revocation of mDoc credentials in online environments, verifiers should be configured to query the issuer status endpoint — not rely solely on MSO expiry, which introduces a delay equal to the MSO validity window.
      </Callout>

      <h2 id="online-offline">Online vs Offline Verification</h2>
      <table>
        <thead>
          <tr>
            <th>Scenario</th>
            <th>mDoc</th>
            <th>W3C VC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Online verifier — revocation check</td>
            <td>Issuer status endpoint — real-time</td>
            <td>StatusList2021 fetch — near real-time (&lt;60s)</td>
          </tr>
          <tr>
            <td>Offline verifier — revocation check</td>
            <td>MSO validity window — configurable lag</td>
            <td>Cached status list — configurable staleness</td>
          </tr>
          <tr>
            <td>Offline verifier — no connectivity</td>
            <td>MSO expiry check only — fully air-gapped</td>
            <td>Last cached status list only</td>
          </tr>
        </tbody>
      </table>

      <h2 id="mso-validity">MSO Validity Window</h2>
      <p>
        The MSO validity window is a per-template configuration that defines how long a single pre-generated Mobile Security Object remains valid for offline verification. Shorter windows mean more frequent MSO refresh (better status freshness, requires more connectivity). Longer windows support extended offline use at the cost of a longer revocation propagation lag.
      </p>
      <p>
        IwC also supports pre-generating multiple MSOs simultaneously with staggered expiry times. The wallet holds a stack of valid MSOs and presents the most recently generated one — while silently refreshing in the background. This eliminates the need for the holder to actively reconnect to receive a new MSO before each verification event.
      </p>
      <Callout type="tip">
        For most government ID programs, an MSO validity window of 24–72 hours with 3–5 pre-generated MSOs provides a good balance between offline usability and status freshness. Programs with strict real-time revocation requirements should configure shorter windows and require online verification for high-stakes use cases.
      </Callout>
    </ArticleWrapper>
  );
}
