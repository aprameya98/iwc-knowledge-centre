import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Integration & APIs | Issuance with Credence Solution Overview',
  description: 'Issuance trigger API, identity data ingestion, status synchronization, and the API Explorer in IwC.',
};

const toc = [
  { id: 'issuance-trigger', title: 'Issuance Trigger API', level: 2 as const },
  { id: 'data-ingestion', title: 'Identity Data Ingestion', level: 2 as const },
  { id: 'status-sync', title: 'Status Synchronization API', level: 2 as const },
  { id: 'api-explorer', title: 'API Explorer', level: 2 as const },
];

const contentText = `IwC exposes a clean REST API surface that allows any authoritative identity data source or case management system to trigger issuance ingest identity data and synchronize credential status. The issuance trigger API accepts a POST request with the applicant reference ID credential type and issuer context and returns a credential offer ID and delivery status. Identity data ingestion is handled over a mutual TLS secured connection with all data encrypted in transit. The status synchronization API provides webhooks for outbound notifications and a polling endpoint for inbound status queries. The API Explorer in the Admin Portal provides a live interactive reference for all endpoints with authentication token generation and request testing built in.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/platform/solution-overview/integration-apis"
      title="Integration & APIs"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="issuance-trigger">Issuance Trigger API</h2>
      <p>
        The Issuance Trigger API is the primary integration point for case management systems. A single authenticated POST request initiates the full issuance pipeline — from template lookup through credential signing to holder notification:
      </p>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>applicant_reference_id</code></td>
            <td>string</td>
            <td>The unique identifier of the applicant record in the case management system</td>
          </tr>
          <tr>
            <td><code>credential_type</code></td>
            <td>string</td>
            <td>The identifier of the credential template to issue against</td>
          </tr>
          <tr>
            <td><code>issuer_id</code></td>
            <td>string</td>
            <td>The issuer context for this issuance — required for multi-tenant deployments</td>
          </tr>
          <tr>
            <td><code>notification_channel</code></td>
            <td>enum</td>
            <td>How the credential offer is delivered to the holder: <code>email</code>, <code>sms</code>, or <code>push</code></td>
          </tr>
          <tr>
            <td><code>deferred</code></td>
            <td>boolean</td>
            <td>If <code>true</code>, generate a deferred credential offer — identity data will be ingested separately</td>
          </tr>
        </tbody>
      </table>
      <p>
        The response includes a <code>credential_offer_id</code>, delivery status, and an optional tracking URL for monitoring the activation lifecycle.
      </p>

      <h2 id="data-ingestion">Identity Data Ingestion</h2>
      <p>
        IwC does not perform identity proofing. It consumes pre-verified identity attributes from authoritative source systems. The data ingestion API accepts verified attributes over a mutual TLS-secured connection — all data is encrypted in transit and at rest.
      </p>
      <p>
        The ingestion payload maps directly to the attribute schema defined in the credential template — standard namespace attributes (ISO/IEC 18013-5) plus any configured custom namespace attributes. IwC validates the payload against the template schema and returns a structured validation error if any required attributes are missing or malformed.
      </p>
      <Callout type="important">
        IwC does not store raw identity attributes permanently. Once a credential is assembled and signed, the intermediate attribute payload is discarded. Only the signed credential artifact and the audit trail are retained.
      </Callout>

      <h2 id="status-sync">Status Synchronization API</h2>
      <p>
        IwC maintains bidirectional status synchronization with case management systems:
      </p>
      <ul>
        <li>
          <strong>Outbound webhooks:</strong> IwC posts lifecycle event notifications to a configured endpoint in the case management system — covering issuance, activation, suspension, reinstatement, revocation, and expiry events. Each event includes the credential ID, case reference number, event type, timestamp, and operator context.
        </li>
        <li>
          <strong>Inbound status commands:</strong> The case management system can push status change commands directly to IwC via authenticated API — triggering suspension, reinstatement, or revocation without requiring an operator to log into the Admin Portal.
        </li>
        <li>
          <strong>Status query endpoint:</strong> Returns the current lifecycle state of any credential by credential ID or case reference number — for systems that prefer polling over webhook delivery.
        </li>
      </ul>

      <h2 id="api-explorer">API Explorer</h2>
      <p>
        The IwC Admin Portal includes a built-in API Explorer — a live, interactive reference for the full IwC API surface. The Explorer allows administrators and integration engineers to:
      </p>
      <ul>
        <li>Browse all available endpoints organized by category (Issuance, Lifecycle, Status, Analytics, Templates)</li>
        <li>Generate authentication tokens directly within the UI for testing</li>
        <li>Construct and fire live API requests against the connected IwC instance — with full request and response inspection</li>
        <li>View parameter schemas, required vs. optional fields, and example payloads inline</li>
      </ul>
      <p>
        The API Explorer is available as a dedicated section in the Admin Portal and is accessible to users with the Integration Engineer or Administrator role.
      </p>
    </ArticleWrapper>
  );
}
