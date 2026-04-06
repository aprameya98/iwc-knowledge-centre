import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Credential Data Model | Issuance with Credence Solution Overview',
  description: 'Supported credential formats, standard and custom namespaces, derived attributes, and status representation in IwC.',
};

const toc = [
  { id: 'supported-formats', title: 'Supported Credential Formats', level: 2 as const },
  { id: 'standard-namespace', title: 'Standard Namespace — org.iso.18013.5.1', level: 2 as const },
  { id: 'custom-namespaces', title: 'Custom Namespaces', level: 2 as const },
  { id: 'derived-attributes', title: 'Derived & Privacy-Preserving Attributes', level: 2 as const },
  { id: 'status-representation', title: 'Status Representation', level: 2 as const },
];

const contentText = `IwC issues in both major digital credential formats from a single authoritative data model so no data is ever duplicated and no standard is ever sacrificed. ISO IEC 18013-5 mDoc uses CBOR encoding with BLE NFC QR and HTTPS protocols best for in-person verification device-bound credentials and offline scenarios. W3C Verifiable Credentials 2.0 uses JSON-LD encoding with OpenID4VP and HTTPS protocols best for online and remote verification cross-system data sharing and derived attribute use cases. The standard namespace org.iso.18013.5.1 includes family_name given_name date_of_birth portrait issue_date expiry_date document_number issuing_authority issuing_country age_over_18 and age_over_21. Custom namespaces support program-specific attributes including document_category_code authorization_class authorization_validity_dates case_reference_number card_serial_version_linkage and eligibility_indicators. Derived attributes include status_verified document_valid age_over_18 age_over_21 and authorization_category.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/platform/solution-overview/credential-data-model"
      title="Credential Data Model"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="supported-formats">Supported Credential Formats</h2>
      <p>
        IwC issues in both major digital credential formats from a single authoritative data model — so no data is ever duplicated and no standard is ever sacrificed:
      </p>
      <table>
        <thead>
          <tr>
            <th>Format</th>
            <th>Encoding</th>
            <th>Protocol</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>ISO/IEC 18013-5 mDoc</strong></td>
            <td>CBOR</td>
            <td>BLE / NFC / QR (ISO 18013-5), HTTPS (ISO 18013-7)</td>
            <td>In-person verification, device-bound credentials, offline scenarios</td>
          </tr>
          <tr>
            <td><strong>W3C Verifiable Credentials 2.0</strong></td>
            <td>JSON-LD</td>
            <td>OpenID4VP, HTTPS</td>
            <td>Online and remote verification, cross-system data sharing, derived attribute use cases</td>
          </tr>
        </tbody>
      </table>

      <h2 id="standard-namespace">Standard Namespace — <code>org.iso.18013.5.1</code></h2>
      <p>
        By building on the internationally recognized ISO/IEC 18013-5 namespace, IwC-issued credentials are natively understood by thousands of ISO-compliant verifiers already deployed worldwide — dramatically reducing integration burden on relying parties from day one.
      </p>
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>family_name</code></td><td>string</td><td>Holder&apos;s surname</td></tr>
          <tr><td><code>given_name</code></td><td>string</td><td>Holder&apos;s given name(s)</td></tr>
          <tr><td><code>date_of_birth</code></td><td>full-date</td><td>Date of birth</td></tr>
          <tr><td><code>portrait</code></td><td>image</td><td>Facial photograph</td></tr>
          <tr><td><code>issue_date</code></td><td>full-date</td><td>Credential issuance date</td></tr>
          <tr><td><code>expiry_date</code></td><td>full-date</td><td>Credential expiry date</td></tr>
          <tr><td><code>document_number</code></td><td>string</td><td>Document identifier</td></tr>
          <tr><td><code>issuing_authority</code></td><td>string</td><td>Issuing organization</td></tr>
          <tr><td><code>issuing_country</code></td><td>string</td><td>Issuing country code</td></tr>
          <tr><td><code>age_over_18</code></td><td>boolean</td><td>Age threshold (derived)</td></tr>
          <tr><td><code>age_over_21</code></td><td>boolean</td><td>Age threshold (derived)</td></tr>
        </tbody>
      </table>

      <h2 id="custom-namespaces">Custom Namespaces — Built for Any Program</h2>
      <p>
        Every deployment has data elements that don&apos;t fit neatly into a standard schema. IwC solves this with fully configurable custom namespaces — program-specific extensions that sit alongside the standard ISO attributes without compromising interoperability.
      </p>
      <p>A custom namespace can carry any combination of:</p>
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>document_category_code</code></td>
            <td>Classifies the specific credential category or tier within a program</td>
          </tr>
          <tr>
            <td><code>authorization_class</code></td>
            <td>Distinguishes between authorization levels or permission types</td>
          </tr>
          <tr>
            <td><code>authorization_validity_dates</code></td>
            <td>The active period for a specific entitlement — independent of document expiry</td>
          </tr>
          <tr>
            <td><code>case_reference_number</code></td>
            <td>Links the digital credential to its originating case or application record for full auditability</td>
          </tr>
          <tr>
            <td><code>card_serial_version_linkage</code></td>
            <td>Ties the digital credential to its physical counterpart for parallel lifecycle management</td>
          </tr>
          <tr>
            <td><code>eligibility_indicators</code></td>
            <td>Machine-readable flags representing specific benefits, permissions, or program entitlements</td>
          </tr>
        </tbody>
      </table>

      <h2 id="derived-attributes">Derived &amp; Privacy-Preserving Attributes</h2>
      <p>
        Derived attributes are computed claims that give relying parties the answer they need — without handing over data they don&apos;t:
      </p>
      <table>
        <thead>
          <tr>
            <th>Derived Attribute</th>
            <th>Type</th>
            <th>What It Enables</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>status_verified</code></td>
            <td>boolean</td>
            <td>A simple yes/no confirmation of holder status — no underlying case details required</td>
          </tr>
          <tr>
            <td><code>document_valid</code></td>
            <td>boolean</td>
            <td>Real-time validity confirmation without exposing expiry dates or case references</td>
          </tr>
          <tr>
            <td><code>age_over_18</code></td>
            <td>boolean</td>
            <td>Age-gated access without revealing the holder&apos;s date of birth</td>
          </tr>
          <tr>
            <td><code>age_over_21</code></td>
            <td>boolean</td>
            <td>Age-gated access without revealing the holder&apos;s date of birth</td>
          </tr>
          <tr>
            <td><code>authorization_category</code></td>
            <td>scoped enum</td>
            <td>Delivers the authorization classification a relying party needs — and nothing more</td>
          </tr>
        </tbody>
      </table>
      <p>
        Every verification becomes a minimum-data transaction. Holders share only what&apos;s necessary. Verifiers receive only what&apos;s required. Privacy by design, not by policy.
      </p>

      <h2 id="status-representation">Status Representation</h2>
      <p>
        Credential status is a first-class citizen of the IwC data model — not an afterthought:
      </p>
      <ul>
        <li>
          <strong>For mDoc Credentials:</strong> MSO validity windows and epoch-based expiry are embedded directly in the Mobile Security Object. Configurable per template. Offline verifiers can check status with zero network dependency.
        </li>
        <li>
          <strong>For W3C VC Credentials:</strong> Status is represented via <strong>W3C StatusList2021</strong> — a privacy-preserving bitstring mechanism that lets verifiers confirm validity without learning anything about any other credential in the system.
        </li>
      </ul>
    </ArticleWrapper>
  );
}
