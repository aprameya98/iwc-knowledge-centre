import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Multi-Standard & Interoperability | Issuance with Credence Solution Overview',
  description: 'One data model, two formats, and open ecosystem integration in IwC.',
};

const toc = [
  { id: 'one-data-model', title: 'One Data Model, Two Formats', level: 2 as const },
  { id: 'openid4vci', title: 'OpenID4VCI Delivery', level: 2 as const },
  { id: 'open-wallets', title: 'Open Wallet Ecosystem', level: 2 as const },
  { id: 'open-verifiers', title: 'Open Verifier Ecosystem', level: 2 as const },
];

const contentText = `IwC is built from the ground up to issue and manage credentials across multiple standards without compromise. A single authoritative data model drives both ISO IEC 18013-5 mDoc and W3C Verifiable Credentials 2.0 output. Identity attributes are defined once and the issuance service constructs both CBOR-encoded mDoc structures and JSON-LD W3C VC structures from the same source. Credential delivery uses OpenID4VCI which is the global open standard for digital credential provisioning supported by the Open Wallet Foundation and all major digital wallet providers. The verifier ecosystem is equally open with any ISO 18013-5 compliant verifier able to accept mDoc credentials and any W3C VC verifier able to accept the JSON-LD credentials.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/platform/solution-overview/multi-standard-interoperability"
      title="Multi-Standard & Interoperability"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="one-data-model">One Data Model, Two Formats</h2>
      <p>
        IwC is built from the ground up to issue and manage credentials across multiple standards — without compromise, without duplication, and without choosing one standard over another.
      </p>
      <p>
        A single authoritative data model drives both credential format outputs. Identity attributes are defined once in the Credential Template Designer. The Issuance Service then constructs both a CBOR-encoded mDoc structure and a JSON-LD W3C VC structure from the same source data — simultaneously, in a single issuance operation.
      </p>
      <table>
        <thead>
          <tr>
            <th>Standard</th>
            <th>Format</th>
            <th>Primary Use Case</th>
            <th>Verifier Ecosystem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>ISO/IEC 18013-5</strong></td>
            <td>CBOR-encoded mDoc</td>
            <td>In-person, offline, device-bound</td>
            <td>Thousands of deployed ISO-compliant readers worldwide</td>
          </tr>
          <tr>
            <td><strong>W3C VC 2.0</strong></td>
            <td>JSON-LD</td>
            <td>Online, remote, cross-system</td>
            <td>Any W3C VC-compliant verifier service</td>
          </tr>
        </tbody>
      </table>
      <p>
        No data is duplicated. No standard is sacrificed. The two formats share the same attribute values, the same issuance timestamp, and the same PKI trust chain — they are two representations of one credential, not two separate credentials.
      </p>

      <h2 id="openid4vci">OpenID4VCI Delivery</h2>
      <p>
        Credential delivery to holder wallets uses OpenID4VCI — the globally adopted open standard for digital credential provisioning, maintained by the OpenID Foundation and supported by the Open Wallet Foundation, the European Union Digital Identity (EUDI) framework, and all major digital wallet providers.
      </p>
      <p>
        By building on OpenID4VCI rather than a proprietary provisioning protocol, IwC ensures that any standards-conformant wallet can receive credentials from the platform — not just the Credence ID wallet. This is a deliberate architectural choice: program administrators should never be locked into a single wallet vendor because of how credentials are delivered.
      </p>

      <h2 id="open-wallets">Open Wallet Ecosystem</h2>
      <p>
        IwC is tested for interoperability with open-source wallet implementations built on the Open Wallet Foundation (OWF) reference implementation. Agencies or programs that choose to deploy their own wallet application can receive IwC-issued credentials without any custom integration work.
      </p>
      <p>
        The Credence ID Digital Wallet SDK is available for organizations that want a fully supported, production-ready wallet with hardware-backed security and the full IwC lifecycle integration out of the box. But it is not a requirement. The protocol is open. The ecosystem is open.
      </p>

      <h2 id="open-verifiers">Open Verifier Ecosystem</h2>
      <p>
        IwC-issued credentials are verifiable by any standards-conformant relying party — no Credence ID software required on the verification side:
      </p>
      <ul>
        <li>
          <strong>mDoc credentials</strong> are accepted by any ISO/IEC 18013-5 compliant reader or verification application — including thousands of devices already deployed in border control, law enforcement, age verification, and access control scenarios worldwide.
        </li>
        <li>
          <strong>W3C VC credentials</strong> are accepted by any verifier supporting the W3C VC 2.0 specification and OpenID4VP presentation protocol — including government portals, enterprise identity systems, and open-source verifier implementations.
        </li>
      </ul>
      <Callout type="important">
        Interoperability is a design constraint, not a feature. IwC does not add proprietary extensions that break compatibility with standard verifiers. Every credential issued by IwC must be verifiable by any conformant third-party verifier with no Credence ID involvement.
      </Callout>
    </ArticleWrapper>
  );
}
