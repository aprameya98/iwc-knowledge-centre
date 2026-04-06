import ArticleWrapper from '@/components/layout/ArticleWrapper';
import T1 from '@/public/Trust1.png';
import T2 from '@/public/Trust2.png';
import T3 from '@/public/Trust3.png';
import T4 from '@/public/Trust4.png';
import Image from 'next/image';

export const metadata = {
  title: 'Navigating Trust Management',
  description: 'A guide to the Trust Management screen, covering signing keys, certificate generation, VICAL, and RICAL configuration for cryptographic infrastructure.',
};

const toc = [
  { id: 'signing-keys', title: 'Signing Keys', level: 2 as const },
  { id: 'searching-filtering-certificates', title: 'Searching & Filtering Your Certificates', level: 2 as const },
  { id: 'generating-certificate', title: 'Generating a New Certificate', level: 2 as const },
  { id: 'understanding-signing-keys-table', title: 'Understanding the Signing Keys Table', level: 2 as const },
  { id: 'certificate-generation-form', title: 'Certificate Generation Form', level: 2 as const },
  { id: 'vical', title: 'VICAL', level: 2 as const },
  { id: 'reviewing-vical', title: 'Reviewing the Current VICAL Version', level: 2 as const },
  { id: 'inspecting-trusted-certificates', title: 'Inspecting the Trusted Certificates', level: 2 as const },
  { id: 'rical', title: 'RICAL', level: 2 as const },
  { id: 'rical-source-configuration', title: 'RICAL Source Configuration', level: 2 as const },
  { id: 'verifier-directory', title: 'Verifier Directory', level: 2 as const },
];

const content = `Welcome to the Trust Management screen. This is a highly technical but critical area where you manage the underlying cryptographic infrastructure, the digital signatures and certificates, that ensures credentials are mathematically secure and trusted by external verifying parties. Signing Keys. The Trust Management screen has three tabs: Signing Keys, VICAL, and RICAL. The Signing Keys tab is active by default. Searching and Filtering Your Certificates. The search bar allows you to search by issuer, common name, or organization. Status Filters let you filter by All, Active, Expiring, Expired, or Revoked. Generating a New Certificate. The Generate Certificate orange button creates a new cryptographic signing certificate. Understanding the Signing Keys Table. The table displays columns for Common Name and Issuer, Curve showing the cryptographic algorithm, Mode showing the storage location, Status showing Active or Revoked, Expires showing the expiry date, and Actions with a View button. Certificate Generation Form. The form includes fields for Issuer, Common Name, Organization, Organizational Unit, State or Province, Country, NIST Curve defaulting to P-256, Validity Period defaulting to 3 Years, and a toggle to set as primary certificate. VICAL or Verifiable Issuer Certificate Authority List. This compiles active trusted keys into a single digitally signed master list for external verifiers. The current VICAL version shows the version header, generated date, signed by information, and entries count with a download button. The trusted certificates section shows Issuer, Subject, Valid From, and Valid To dates. A Change Log at the bottom tracks the audit trail. RICAL or Relying Party Certificate Authority List. This manages authorized external entities or Verifiers trusted to read and verify credentials. The RICAL Source Configuration section offers Automatic Sync with a VwC Endpoint URL, API Key, Sync Frequency, Save Configuration and Sync Now buttons. Manual Upload supports drag and drop of cbor or json files. The Verifier List shows Verifier Name, Verifier ID, Certificate Fingerprint, Added to RICAL date, and Status.`;

export default function Page() {
  return (
    <ArticleWrapper href="/platform/iwc-portal/trust-management" title="Navigating Trust Management" contentText={content} toc={toc}>
      <p>
        Welcome to the <strong>Trust Management</strong> screen. This is a highly technical but critical area where you manage the underlying cryptographic infrastructure &mdash; the digital signatures and certificates &mdash; that ensures credentials are mathematically secure and trusted by external verifying parties.
      </p>

      <h2 id="signing-keys">Signing Keys</h2>

       <Image src={T1} alt="" />
      <br></br>

      <p>
        The Trust Management screen has three tabs: <strong>Signing Keys</strong> (active by default), <strong>VICAL</strong>, and <strong>RICAL</strong>.
      </p>

      <h2 id="searching-filtering-certificates">Searching &amp; Filtering Your Certificates</h2>
      <ul>
        <li>
          <strong>Search Bar:</strong> Use the <code>Search by issuer, common name, or organization...</code> field to find specific certificates.
        </li>
        <li>
          <strong>Status Filters:</strong> Filter the list by clicking: <strong>All</strong>, <strong>Active</strong>, <strong>Expiring</strong>, <strong>Expired</strong>, or <strong>Revoked</strong>.
        </li>
      </ul>

      <h2 id="generating-certificate">Generating a New Certificate</h2>
      <p>
        Click the <strong>+ Generate Certificate</strong> orange button to create a new cryptographic signing certificate.
      </p>

      <h2 id="understanding-signing-keys-table">Understanding the Signing Keys Table</h2>
      <p>The table displays the following columns:</p>
      <ul>
        <li>
          <strong>Common Name &amp; Issuer:</strong> The certificate&apos;s common name and the issuing authority.
        </li>
        <li>
          <strong>Curve:</strong> The cryptographic algorithm used (e.g., <code>P_256</code>).
        </li>
        <li>
          <strong>Mode:</strong> The storage location for the key. An <strong>AWS_HSM</strong> badge indicates the key is stored in a Hardware Security Module.
        </li>
        <li>
          <strong>Status:</strong> <strong>Active</strong> (blue) or <strong>Revoked</strong> (red).
        </li>
        <li>
          <strong>Expires:</strong> The certificate&apos;s expiry date.
        </li>
        <li>
          <strong>Actions:</strong> A <strong>View</strong> button to inspect the certificate details.
        </li>
      </ul>

      <h2 id="certificate-generation-form">Certificate Generation Form</h2>

       <Image src={T2} alt="" />
      <br></br>

      <p>The form includes the following fields:</p>
      <ul>
        <li>
          <strong>Issuer (*):</strong> Select the issuing authority from the dropdown.
        </li>
        <li>
          <strong>Common Name (CN) (*):</strong> A descriptive name for the certificate (e.g., <code>State DMV Authority - Document Signer</code>).
        </li>
        <li>
          <strong>Organization (*):</strong> The legal name of the organization.
        </li>
        <li>
          <strong>Organizational Unit:</strong> An optional department or division.
        </li>
        <li>
          <strong>State / Province &amp; Country (*):</strong> Geographic location fields.
        </li>
        <li>
          <strong>NIST Curve:</strong> The cryptographic curve, defaulting to <strong>P-256</strong>.
        </li>
        <li>
          <strong>Validity Period:</strong> How long the certificate remains valid, defaulting to <strong>3 Years</strong>.
        </li>
        <li>
          <strong>Set as primary certificate:</strong> A toggle switch, <strong>ON</strong> by default, to make this the primary signing certificate.
        </li>
      </ul>
      <p>
        Click <strong>Generate</strong> to create the certificate, or <strong>Cancel</strong> to discard.
      </p>

      <h2 id="vical">VICAL (Verifiable Issuer Certificate Authority List)</h2>

       <Image src={T3} alt="" />
      <br></br>

      <p>
        The VICAL compiles your active trusted signing keys into a single, digitally signed master list that external verifiers can consume to validate credentials.
      </p>

      <h2 id="reviewing-vical">Reviewing the Current VICAL Version</h2>
      <ul>
        <li>
          <strong>Version Header:</strong> Displays the current version (e.g., <strong>VICAL v1.0</strong>).
        </li>
        <li>
          <strong>Generated:</strong> The date the VICAL was last compiled.
        </li>
        <li>
          <strong>Signed By:</strong> The root certificate authority that signed the list (e.g., <strong>IWC Root CA</strong>).
        </li>
        <li>
          <strong>Entries:</strong> The total number of trusted certificates included.
        </li>
        <li>
          <strong>Download VICAL:</strong> A button to download the compiled list for distribution to verifiers.
        </li>
      </ul>

      <h2 id="inspecting-trusted-certificates">Inspecting the Trusted Certificates</h2>
      <ul>
        <li>
          <strong>Issuer &amp; Subject:</strong> Columns identifying who issued each certificate and the subject entity.
        </li>
        <li>
          <strong>Valid From &amp; Valid To:</strong> The validity window for each certificate.
        </li>
      </ul>
      <p>
        <strong>Tracking the Audit Trail:</strong> A <strong>Change Log</strong> at the bottom of the VICAL tab records all modifications, providing a complete audit trail.
      </p>

      <h2 id="rical">RICAL (Relying Party Certificate Authority List)</h2>

      <Image src={T4} alt="" />
      <br></br>

      <p>
        The RICAL manages authorized external entities (<strong>Verifiers</strong>) that are trusted to read and verify your issued credentials.
      </p>

      <h2 id="rical-source-configuration">RICAL Source Configuration</h2>
      <ul>
        <li>
          <strong>Automatic Sync:</strong>
          <ul>
            <li><strong>VwC Endpoint URL:</strong> The endpoint to sync verifier data from.</li>
            <li><strong>API Key:</strong> Authentication key for the sync endpoint.</li>
            <li><strong>Sync Frequency:</strong> How often the list is refreshed (e.g., <strong>Every hour</strong>).</li>
            <li><strong>Save Configuration:</strong> Persist the sync settings.</li>
            <li><strong>Sync Now:</strong> Trigger an immediate sync.</li>
          </ul>
        </li>
        <li>
          <strong>Manual Upload:</strong> Drag and drop a <code>.cbor</code> or <code>.json</code> file to manually upload a verifier list.
        </li>
      </ul>

      <h2 id="verifier-directory">Verifier Directory</h2>
      <ul>
        <li>
          <strong>Search:</strong> Use the <code>Search verifiers...</code> field to find specific verifiers.
        </li>
        <li>
          <strong>Status Filters:</strong> Filter by <strong>All</strong>, <strong>Active</strong>, or <strong>Removed</strong>.
        </li>
      </ul>
      <p>The verifier table displays:</p>
      <ul>
        <li><strong>Verifier Name:</strong> The name of the authorized entity.</li>
        <li><strong>Verifier ID:</strong> A unique identifier for the verifier.</li>
        <li><strong>Certificate Fingerprint:</strong> The cryptographic fingerprint of the verifier&apos;s certificate.</li>
        <li><strong>Added to RICAL:</strong> The date the verifier was added to the list.</li>
        <li><strong>Status:</strong> <strong>Active</strong> or <strong>Removed</strong>.</li>
      </ul>
    </ArticleWrapper>
  );
}
