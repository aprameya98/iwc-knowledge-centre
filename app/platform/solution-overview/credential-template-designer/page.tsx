import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import StepFlow from '@/components/content/StepFlow';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Credential Template Designer | Issuance with Credence Solution Overview',
  description: 'The IwC Credential Data Model Designer — a guided four-step workflow to define new credential types without custom development.',
};

const toc = [
  { id: 'overview', title: 'Overview', level: 2 as const },
  { id: 'step-1', title: 'Step 1 — Credential Info', level: 2 as const },
  { id: 'step-2', title: 'Step 2 — Attribute Selection', level: 2 as const },
  { id: 'step-3', title: 'Step 3 — Issuer Assignment', level: 2 as const },
  { id: 'step-4', title: 'Step 4 — Review & Publish', level: 2 as const },
  { id: 'prebuilt-document-types', title: 'Pre-Built Document Types', level: 2 as const },
];

const contentText = `Defining a new credential type should take hours not months. The IwC Credential Data Model Designer makes it possible with a guided four-step workflow that puts administrators in complete control of their credential schemas with no custom development and no vendor dependency. Step 1 is Credential Info covering credential name description validity period background image multiple MSOs and MSO validity window. Step 2 is Attribute Selection from a pre-loaded library of 25 or more standard identity attributes. Step 3 is Issuer Assignment supporting multi-tenant operations. Step 4 is Review and Publish presenting the complete configured template before it goes live. IwC ships with three production-ready document type schemas including Driver's Licence Digital ID and Person ID.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/platform/solution-overview/credential-template-designer"
      title="Credential Template Designer"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="overview">Overview</h2>
      <p>
        Defining a new credential type should take hours, not months. The IwC <strong>Credential Data Model Designer</strong> makes it possible — a guided four-step workflow that puts administrators in complete control of their credential schemas, with no custom development and no vendor dependency.
      </p>

      <h2 id="step-1">Step 1 — Credential Info</h2>
      <p>Start with the basics:</p>
      <ul>
        <li><strong>Credential Name</strong> — Human-readable identifier (e.g., &quot;Digital Identity Credential&quot;)</li>
        <li><strong>Description</strong> — Clear statement of the credential&apos;s purpose and program</li>
        <li><strong>Validity Period</strong> — Configurable in days (e.g., 365, 730, or multi-year)</li>
        <li><strong>Background Image</strong> — Upload a card design to visually match the digital credential to any existing physical document — building immediate holder recognition and trust</li>
        <li><strong>Issue Multiple MSOs</strong> — Pre-generate staggered Mobile Security Objects for seamless offline and low-connectivity use</li>
        <li><strong>MSO Validity Window</strong> — Fine-tune how frequently MSOs refresh, balancing offline usability against status freshness</li>
      </ul>

      <h2 id="step-2">Step 2 — Attribute Selection</h2>
      <p>
        Choose from a pre-loaded library of <strong>25+ standard identity attributes</strong> — or add custom ones:
      </p>
      <ul>
        <li>Toggle each attribute as <strong>Required</strong> or <strong>Optional</strong></li>
        <li>Search and bulk-select for fast configuration</li>
        <li>Extend the schema with fully custom, program-specific attributes at any time</li>
        <li>
          Standard attributes include: <code>family_name</code>, <code>given_name</code>, <code>date_of_birth</code>, <code>portrait</code>, <code>issue_date</code>, <code>expiry_date</code>, <code>document_number</code>, <code>issuing_authority</code>, <code>issuing_country</code>, <code>age_over_18</code>, <code>age_over_21</code>, and more
        </li>
      </ul>

      <h2 id="step-3">Step 3 — Issuer Assignment</h2>
      <p>IwC is built for multi-tenant operations from the ground up:</p>
      <ul>
        <li>Assign credential templates to one or more authorized issuers</li>
        <li>Different offices, regions, or programs can issue distinct credential types under a single root of trust</li>
        <li>Centralized governance, distributed issuance — with full auditability at every level</li>
      </ul>

      <h2 id="step-4">Step 4 — Review &amp; Publish</h2>
      <p>
        A final review presents the complete configured template before it goes live. Once published, that template governs every subsequent issuance of that credential type — consistently, automatically, and at scale.
      </p>

      <h2 id="prebuilt-document-types">Pre-Built Document Types</h2>
      <p>IwC ships with three production-ready document type schemas to accelerate deployment:</p>
      <table>
        <thead>
          <tr>
            <th>Document Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Driver&apos;s Licence</strong></td>
            <td>Full ISO 18013-5 mDL attribute set</td>
          </tr>
          <tr>
            <td><strong>Digital ID</strong></td>
            <td>General-purpose identity credential with 25+ configurable attributes</td>
          </tr>
          <tr>
            <td><strong>Person ID</strong></td>
            <td>Streamlined personal identity credential</td>
          </tr>
        </tbody>
      </table>
    </ArticleWrapper>
  );
}
