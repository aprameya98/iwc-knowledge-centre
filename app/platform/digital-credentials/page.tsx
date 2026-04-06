import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Dig1 from '@/public/DigCred1.png';
import Dig2 from '@/public/DigCred2.png';
import Image from 'next/image';

export const metadata = {
  title: 'Managing Issued Digital Credentials',
  description: 'A guide to the Digital Credentials screen, covering how to search, filter, review, and manage issued credentials including attribute privacy and revocation.',
};

const toc = [
  { id: 'searching-filtering-ledger', title: 'Searching & Filtering Your Ledger', level: 2 as const },
  { id: 'understanding-credentials-table', title: 'Understanding the Credentials Table', level: 2 as const },
  { id: 'reviewing-specific-credentials', title: 'Reviewing Specific Credentials', level: 2 as const },
  { id: 'credential-detail', title: 'Reviewing a Specific Credential', level: 2 as const },
  { id: 'viewing-attributes-privacy', title: 'Viewing Credential Attributes & Managing Privacy', level: 2 as const },
  { id: 'taking-action', title: 'Taking Action', level: 2 as const },
];

const content = `Welcome to the Digital Credentials screen. This is your master ledger. Once an identity application is approved, the resulting live digital credential appears here. Searching and Filtering Your Ledger. The top of the screen provides tools to locate credentials quickly. The Search Bar allows you to search by ID, holder, or issuer. Status Tabs let you filter by All, Active, Revoked, or Expired. Understanding the Credentials Table. The table displays key columns: CREDENTIAL ID as a UUID in green text, APPLICATION ID linking back to the original request, ISSUED TO showing the full name of the holder, TEMPLATE showing the schema used, ISSUER showing the organization that issued the credential, ISSUED showing the date generated, and STATUS showing the current state. Reviewing Specific Credentials. Click the View eye icon to open a detailed read-only view of any credential. Reviewing a Specific Credential. The Header and Summary section shows the Credential ID and navigation controls, a Status Badge, and a Credential Summary including Issued To, Doc Type, Issuer, Issued At, and Expires At. Viewing Credential Attributes and Managing Privacy. The Credential Attributes table displays Key, Label, Value, and PII columns. Yellow PII tags appear on sensitive rows. Values are hidden with dots by default and can be revealed by clicking the dotted line. Less sensitive data is visible by default. Taking Action. The Revoke Credential button at the bottom permanently invalidates the document. It is highlighted in red to prevent accidental clicks.`;

export default function Page() {
  return (
    <ArticleWrapper href="/platform/digital-credentials" title="Managing Issued Digital Credentials" contentText={content} toc={toc}>
      <p>
        Welcome to the <strong>Digital Credentials</strong> screen. This is your master ledger. Once an identity application is approved, the resulting live digital credential appears here.
      </p>

      <Image src={Dig1} alt="" />
      <br></br>

      <h2 id="searching-filtering-ledger">Searching &amp; Filtering Your Ledger</h2>
      <p>The top of the screen provides tools to quickly locate the credentials you need.</p>
      <ul>
        <li>
          <strong>Search Bar:</strong> Use the <code>Search by ID, holder, or issuer...</code> field to find a specific credential instantly.
        </li>
        <li>
          <strong>Status Tabs:</strong> Filter the ledger by clicking one of the status tabs: <strong>All</strong>, <strong>Active</strong>, <strong>Revoked</strong>, or <strong>Expired</strong>.
        </li>
      </ul>

      <h2 id="understanding-credentials-table">Understanding the Credentials Table</h2>
      <p>The table displays the following columns:</p>
      <ul>
        <li>
          <strong>CREDENTIAL ID:</strong> A UUID displayed in green text, uniquely identifying each credential.
        </li>
        <li>
          <strong>APPLICATION ID:</strong> Links back to the original identity application request.
        </li>
        <li>
          <strong>ISSUED TO:</strong> The full name of the credential holder.
        </li>
        <li>
          <strong>TEMPLATE:</strong> The schema used for the credential (e.g., <code>Org.Iso.18013.5.1.MDL</code>).
        </li>
        <li>
          <strong>ISSUER:</strong> The organization that issued the credential.
        </li>
        <li>
          <strong>ISSUED:</strong> The date the credential was generated.
        </li>
        <li>
          <strong>STATUS:</strong> A badge indicating the current state (e.g., <strong>Active</strong>).
        </li>
      </ul>

      <h2 id="reviewing-specific-credentials">Reviewing Specific Credentials</h2>
      <ul>
        <li>
          <strong>View (eye icon):</strong> Click to open a detailed, read-only view of any credential.
        </li>
      </ul>

      <h2 id="credential-detail">Reviewing a Specific Credential</h2>

      <Image src={Dig2} alt="" />
      <br></br>

      <p><strong>The Header &amp; Summary:</strong></p>
      <ul>
        <li>
          <strong>Credential ID &amp; Navigation:</strong> The credential&apos;s unique identifier is displayed at the top, along with navigation controls.
        </li>
        <li>
          <strong>Status Badge:</strong> Shows the current state of the credential (e.g., <strong>Active</strong>).
        </li>
        <li>
          <strong>Credential Summary:</strong> Key details including <strong>Issued To</strong>, <strong>Doc Type</strong>, <strong>Issuer</strong>, <strong>Issued At</strong>, and <strong>Expires At</strong>.
        </li>
      </ul>

      <h2 id="viewing-attributes-privacy">Viewing Credential Attributes &amp; Managing Privacy</h2>
      <ul>
        <li>
          <strong>Credential Attributes Table:</strong> Displays columns for <strong>Key</strong>, <strong>Label</strong>, <strong>Value</strong>, and <strong>PII</strong>.
        </li>
        <li>
          <strong>Understanding PII:</strong> Sensitive rows are tagged with a yellow <strong>PII</strong> badge, indicating personally identifiable information.
        </li>
        <li>
          <strong>Data Masking:</strong> PII values are hidden by default, displayed as dots (<code>........</code>) to protect sensitive data.
        </li>
        <li>
          <strong>Revealing Data:</strong> Click the dotted line to temporarily unmask and view the actual value.
        </li>
        <li>
          <strong>Standard Data:</strong> Less sensitive attributes (e.g., document type, issuing authority) are visible by default without masking.
        </li>
      </ul>

      <h2 id="taking-action">Taking Action</h2>
      <ul>
        <li>
          <strong>Revoke Credential:</strong> A red button located at the bottom of the detail page. Clicking this permanently invalidates the digital document. The button is highlighted in red to draw attention and prevent accidental clicks.
        </li>
      </ul>
    </ArticleWrapper>
  );
}
