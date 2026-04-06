import ArticleWrapper from '@/components/layout/ArticleWrapper';
import APIExp from '@/public/API Exp.png';
import Image from 'next/image';

export const metadata = {
  title: 'Navigating the API Explorer',
  description: 'A guide to the API Explorer, covering the base URL, endpoint list, HTTP method badges, endpoint groups, and security permissions.',
};

const toc = [
  { id: 'essential-api-info', title: 'Essential API Information & Searching', level: 2 as const },
  { id: 'understanding-endpoint-list', title: 'Understanding the Endpoint List', level: 2 as const },
  { id: 'security-permissions', title: 'Reviewing Security & Permissions', level: 2 as const },
];

const content = `Welcome to the API Explorer screen. This is a developer-focused workspace providing comprehensive documentation and access to the platform's backend services. Essential API Information and Searching. Base URL: https://api.credence.id/v1 (top right corner). Role-Based Access Banner: Blue banner showing filtered by your permissions. Platform Admin has unrestricted access. Search Bar: Search endpoints. Category Tabs: Issuers, Doc Types, ID Applications, Digital Credentials, Trust Management, Issuer Workflows, Analytics, Users & Roles, Authentication. Understanding the Endpoint List. Grouped by function. Each row has an Expand Arrow showing detailed view with parameters, headers, example responses. HTTP Method Badges: GET (Blue) retrieves data, POST (Green) creates new data, PUT (Yellow) updates existing data, DELETE (Red) permanently removes data. Endpoint Path: e.g., /api/v1/issuers. Items in curly brackets like {issuerId} are dynamic variables. Description: Plain-English summary. API Endpoint Groups: Issuers (6): List, create, get, update, enable, disable. Doc Types (6): List, create, get, update, delete, list issuers. ID Applications (6): List, get, approve, deny, request-info, get AML. Digital Credentials (5): List, get, revoke, check status, get audit trail. Trust Management (7): List/generate/get/revoke certificates, get/download VICAL, get changelog. Issuer Workflows (3): Get, update, get history. Analytics (5): Summary, issuance, per-issuer stats, doc-types, export. Users & Roles (5): List, create, get, update, deactivate. Authentication (3): Login, refresh, logout. Reviewing Security and Permissions. Lock Icon: Endpoint is authenticated, requires valid security token. Role Badges: platform for high-level administrative access, issuer for restricted issuing organization actions, public/any for open endpoints in the Authentication section for retrieving initial tokens.`;

export default function Page() {
  return (
    <ArticleWrapper href="/platform/iwc-portal/api-explorer" title="Navigating the API Explorer" contentText={content} toc={toc}>
      <p>
        Welcome to the <strong>API Explorer</strong> screen. This is a developer-focused workspace providing comprehensive documentation and access to the platform&apos;s backend services.
      </p>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image src={APIExp} alt="" />
      <br></br>

      <h2 id="essential-api-info">Essential API Information &amp; Searching</h2>
      <ul>
        <li>
          <strong>Base URL:</strong> The platform&apos;s base URL is displayed in the top right corner: <code>https://api.credence.id/v1</code>. All endpoint paths are relative to this root.
        </li>
        <li>
          <strong>Role-Based Access Banner:</strong> A blue banner at the top indicates that the endpoint list is <em>filtered by your permissions</em>. As a <strong>Platform Admin</strong>, you have unrestricted access to every endpoint.
        </li>
        <li>
          <strong>Search Bar:</strong> Use the <code>Search endpoints...</code> field to quickly locate a specific API call by name, path, or description.
        </li>
        <li>
          <strong>Category Tabs:</strong> Endpoints are organized into tabs for quick filtering:
          <ul>
            <li><strong>Issuers</strong></li>
            <li><strong>Doc Types</strong></li>
            <li><strong>ID Applications</strong></li>
            <li><strong>Digital Credentials</strong></li>
            <li><strong>Trust Management</strong></li>
            <li><strong>Issuer Workflows</strong></li>
            <li><strong>Analytics</strong></li>
            <li><strong>Users &amp; Roles</strong></li>
            <li><strong>Authentication</strong></li>
          </ul>
        </li>
      </ul>

      <h2 id="understanding-endpoint-list">Understanding the Endpoint List</h2>
      <p>Endpoints are grouped by function. Each row contains the following elements:</p>
      <ul>
        <li>
          <strong>Expand Arrow (&gt;):</strong> Click to reveal a detailed view with parameters, headers, and example responses.
        </li>
        <li>
          <strong>HTTP Method Badges:</strong>
          <ul>
            <li><strong>GET</strong> (Blue) &mdash; Retrieves data without modifying it.</li>
            <li><strong>POST</strong> (Green) &mdash; Creates new data or triggers an action.</li>
            <li><strong>PUT</strong> (Yellow) &mdash; Updates an existing resource.</li>
            <li><strong>DELETE</strong> (Red) &mdash; Permanently removes data.</li>
          </ul>
        </li>
        <li>
          <strong>Endpoint Path:</strong> For example, <code>/api/v1/issuers</code>. Items in curly brackets like <code>{'{issuerId}'}</code> are dynamic variables that you replace with actual values.
        </li>
        <li>
          <strong>Description:</strong> A plain-English summary of what the endpoint does.
        </li>
      </ul>

      <h3>API Endpoint Groups</h3>
      <ul>
        <li><strong>Issuers (6):</strong> List, create, get, update, enable, disable</li>
        <li><strong>Doc Types (6):</strong> List, create, get, update, delete, list issuers</li>
        <li><strong>ID Applications (6):</strong> List, get, approve, deny, request-info, get AML</li>
        <li><strong>Digital Credentials (5):</strong> List, get, revoke, check status, get audit trail</li>
        <li><strong>Trust Management (7):</strong> List/generate/get/revoke certificates, get/download VICAL, get changelog</li>
        <li><strong>Issuer Workflows (3):</strong> Get, update, get history</li>
        <li><strong>Analytics (5):</strong> Summary, issuance, per-issuer stats, doc-types, export</li>
        <li><strong>Users &amp; Roles (5):</strong> List, create, get, update, deactivate</li>
        <li><strong>Authentication (3):</strong> Login, refresh, logout</li>
      </ul>

      <h2 id="security-permissions">Reviewing Security &amp; Permissions</h2>
      <ul>
        <li>
          <strong>Lock Icon:</strong> A lock icon next to an endpoint means it is <em>authenticated</em> and requires a valid security token in the request header.
        </li>
        <li>
          <strong>Role Badges:</strong> Each endpoint displays one or more role badges indicating who can call it:
          <ul>
            <li><code>platform</code> &mdash; High-level administrative access. Full control over all platform resources.</li>
            <li><code>issuer</code> &mdash; Restricted to actions scoped to a specific issuing organization.</li>
            <li><code>public</code> / <code>any</code> &mdash; Open endpoints (primarily in the <strong>Authentication</strong> section) used for retrieving initial tokens. No prior authentication required.</li>
          </ul>
        </li>
      </ul>
    </ArticleWrapper>
  );
}
