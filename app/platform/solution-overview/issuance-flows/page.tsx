import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Issuance Flows | Issuance with Credence Solution Overview',
  description: 'Standard issuance sequence, OpenID4VCI provisioning flows, and parallel issuance for mDoc and W3C VC credentials.',
};

const toc = [
  { id: 'standard-issuance', title: 'Standard Issuance Sequence', level: 2 as const },
  { id: 'openid4vci', title: 'OpenID4VCI Provisioning Flow', level: 2 as const },
  { id: 'parallel-issuance', title: 'Parallel Issuance', level: 2 as const },
];

const contentText = `IwC supports three issuance flow patterns. The standard issuance sequence has six steps: Trigger where a case management system or operator initiates issuance via REST API, Template Lookup where the issuance service resolves the correct credential template and attribute schema, Credential Build where the service assembles the full credential payload from verified identity attributes, Sign where per-claim SHA-256 digests are sent to the HSM and the Document Signer key returns a signed MSO or W3C VC proof, Deferred Offer where an OpenID4VCI credential offer is generated and delivered to the holder via email SMS or push notification, and Notify where the case management system receives a webhook confirmation. The OpenID4VCI provisioning flow supports immediate issuance for production environments where a pre-authorized code flow can complete in under 10 seconds. It also supports deferred issuance for cases where issuance is triggered before identity data processing is fully complete. In parallel issuance IwC generates both credential formats simultaneously from the same data model with no duplication of identity data.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/platform/solution-overview/issuance-flows"
      title="Issuance Flows"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="standard-issuance">Standard Issuance Sequence</h2>
      <p>
        IwC orchestrates a clean, auditable six-step issuance pipeline from trigger to wallet delivery:
      </p>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Actor</th>
            <th>What Happens</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Trigger</strong></td>
            <td>Case Management System / Operator</td>
            <td>Issuance initiated via REST API call — includes applicant reference ID, credential type, and issuer context</td>
          </tr>
          <tr>
            <td><strong>2. Template Lookup</strong></td>
            <td>Issuance Service</td>
            <td>Resolves the correct credential template and attribute schema for the requested credential type</td>
          </tr>
          <tr>
            <td><strong>3. Credential Build</strong></td>
            <td>Issuance Service</td>
            <td>Assembles the full credential payload from verified identity attributes — standard namespace + any configured custom attributes</td>
          </tr>
          <tr>
            <td><strong>4. Sign</strong></td>
            <td>HSM / Signing Service</td>
            <td>Per-claim SHA-256 digests sent to AWS CloudHSM — Document Signer key returns a signed MSO (for mDoc) or W3C VC proof (for VC)</td>
          </tr>
          <tr>
            <td><strong>5. Deferred Offer</strong></td>
            <td>Issuance Service</td>
            <td>An OpenID4VCI credential offer is generated and delivered to the holder via email, SMS, or push notification</td>
          </tr>
          <tr>
            <td><strong>6. Notify</strong></td>
            <td>Issuance Service → Case Management System</td>
            <td>Webhook confirmation sent back — issuance status, credential reference ID, and timestamp</td>
          </tr>
        </tbody>
      </table>

      <h2 id="openid4vci">OpenID4VCI Provisioning Flow</h2>
      <p>
        Credential delivery to the holder wallet uses the OpenID4VCI standard — the globally adopted open protocol for digital credential provisioning. IwC supports both issuance modes defined in the specification:
      </p>
      <ul>
        <li>
          <strong>Immediate Issuance:</strong> The credential offer, authorization, and credential exchange complete in a single session. Ideal for production environments where identity data is fully pre-processed. A pre-authorized code flow can complete in under 10 seconds — from notification tap to credential appearing in the holder&apos;s wallet.
        </li>
        <li>
          <strong>Deferred Issuance:</strong> The credential offer is issued before identity data processing is fully complete. The holder&apos;s wallet polls the deferred endpoint. When the credential is ready, it is delivered automatically — no second notification required, no re-enrollment.
        </li>
      </ul>
      <Callout type="note">
        Both modes use the same pre-authorized code flow. The difference is purely in when the credential payload is available — not in any change to the holder experience or the wallet integration.
      </Callout>

      <h2 id="parallel-issuance">Parallel Issuance</h2>
      <p>
        IwC generates both credential formats simultaneously from the same data model — no duplication of identity data, no sequential processing delay:
      </p>
      <table>
        <thead>
          <tr>
            <th>Format</th>
            <th>Encoding</th>
            <th>Delivery</th>
            <th>Offline Capable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>ISO/IEC 18013-5 mDoc</strong></td>
            <td>CBOR</td>
            <td>OpenID4VCI (ISO 18013-7)</td>
            <td>Yes — via pre-generated MSOs</td>
          </tr>
          <tr>
            <td><strong>W3C Verifiable Credential 2.0</strong></td>
            <td>JSON-LD</td>
            <td>OpenID4VCI (HAIP profile)</td>
            <td>Partial — StatusList2021 check requires connectivity</td>
          </tr>
        </tbody>
      </table>
      <p>
        A single issuance request can produce both a CBOR-encoded mDoc and a JSON-LD W3C VC — delivered to the same wallet or to separate format-appropriate wallets — ensuring maximum interoperability with the full ecosystem of verifiers from day one.
      </p>
    </ArticleWrapper>
  );
}
