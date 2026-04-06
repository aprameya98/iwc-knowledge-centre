import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Temp1 from '@/public/Template1.png';
import Temp2 from '@/public/Template2.png';
import Temp3 from '@/public/Template3.png';
import Temp4 from '@/public/Template4.png';
import Image from 'next/image';

export const metadata = {
  title: 'Creating Credential Templates',
  description: 'Learn how to design and configure credential templates on the Credence platform.',
};

const toc = [
  { id: 'credential-info', title: 'Step 1: Credential Info', level: 2 as const },
  { id: 'defining-core-details', title: 'Defining Core Details', level: 2 as const },
  { id: 'security-format-settings', title: 'Security and Format Settings', level: 2 as const },
  { id: 'attributes', title: 'Step 2: Attributes', level: 2 as const },
  { id: 'selecting-attributes', title: 'Selecting Your Data Fields', level: 2 as const },
  { id: 'assigning-issuers', title: 'Step 3: Issuers', level: 2 as const },
  { id: 'final-review', title: 'Step 4: Final Review', level: 2 as const },
];

const content = `In the Credence platform, a Template acts as the blueprint or schema for a digital document. This page walks you through designing a new type of credential using a four-step wizard: Credential Info, Attributes, Issuers, and Review. The Credential Info step captures the name, description, expiry, and format. The Attributes step lets you select which data fields to include. The Issuers step optionally assigns authorized organizations. The Final Review presents a read-only summary before you create the template.`;

export default function Page() {
  return (
    <ArticleWrapper href="/platform/iwc-portal/templates" title="Creating Credential Templates" contentText={content} toc={toc}>
      <p>
        In the Credence platform, a <strong>&ldquo;Template&rdquo;</strong> acts as the blueprint or schema for a digital document. This page walks you through designing a new type of credential using a guided <strong>4-step wizard</strong>: <em>Credential Info &rarr; Attributes &rarr; Issuers &rarr; Review</em>.
      </p>

      <h2 id="credential-info">Step 1: Credential Info</h2>
      <Image src={Temp1} alt="" />
      <br></br>

      <h2 id="defining-core-details">Defining Core Details</h2>
      <p>The following required fields define the identity of your credential:</p>
      <ul>
        <li><strong>Credential Name (*):</strong> A descriptive name for the template, e.g., &ldquo;Egypt Digital ID&rdquo;.</li>
        <li><strong>Credential Description (*):</strong> A brief summary explaining the purpose of this credential.</li>
        <li><strong>Expiry Date (*):</strong> Use the calendar picker to set a default expiration date for credentials issued from this template.</li>
        <li><strong>Credential Background Image (optional):</strong> Upload a background graphic that will appear on the credential&rsquo;s visual representation.</li>
      </ul>

      <h2 id="security-format-settings">Security and Format Settings</h2>
      <p><strong>Mobile Security Objects (MSO) Toggles:</strong></p>
      <ul>
        <li><strong>Issue Multiple MSO:</strong> Toggle to allow issuing multiple Mobile Security Objects per credential.</li>
        <li><strong>Enable MSO Validity:</strong> Toggle to enforce validity periods on MSOs.</li>
      </ul>
      <p><strong>Credential Format (*):</strong> Select one of the following radio button options:</p>
      <ul>
        <li><strong>Driver&rsquo;s Licence:</strong> ISO/IEC 18013-5 compliant format designed for mobile driving licences.</li>
        <li><strong>Digital ID:</strong> A general-purpose format with passport-style attributes.</li>
        <li><strong>Person ID:</strong> An extended format with additional residential attributes.</li>
      </ul>
      <p>
        Click <strong>Next &gt;</strong> to proceed to Attributes.
      </p>

      <h2 id="attributes">Step 2: Attributes</h2>

      <Image src={Temp2} alt="" />
      <br></br>

      <h2 id="selecting-attributes">Selecting Your Data Fields</h2>
      <p>
        This step lets you choose which data fields will be included in credentials issued from this template. The interface provides several tools to streamline selection:
      </p>
      <ul>
        <li><strong>Selection Counter:</strong> Displays progress, e.g., &ldquo;5 of 25 attributes selected&rdquo;.</li>
        <li><strong>Quick Select Buttons:</strong> Use <em>Select all</em> to check every attribute, or <em>Required only</em> to select just the mandatory fields.</li>
        <li><strong>Search Bar:</strong> Filter the list by typing in the <em>&ldquo;Search attributes...&rdquo;</em> field.</li>
      </ul>
      <p>
        Attributes are displayed in a grid of checkboxes. Selected attributes are highlighted in orange. Fields tagged with <strong>REQ</strong> are mandatory and include core identity data such as <em>family_name</em>, <em>given_name</em>, <em>date_of_birth</em>, and others.
      </p>
      <p>
        Click <strong>Next &gt;</strong> to proceed to the Issuers step.
      </p>

      <h2 id="assigning-issuers">Step 3: Issuers</h2>

      <Image src={Temp3} alt="" />
      <br></br>

      <p>
        In this optional step, you can assign which issuers are authorized to use this template. Check the boxes next to the organizations you wish to authorize. This step is <strong>entirely optional</strong> &mdash; you can always assign issuers later from the Issuers management page.
      </p>
      <p>
        Click <strong>Next &gt;</strong> to proceed to the Final Review.
      </p>

      <h2 id="final-review">Step 4: Final Review</h2>

      <Image src={Temp4} alt="" />
      <br></br>

      <p>
        The Final Review presents a <strong>read-only summary</strong> of your entire template configuration:
      </p>
      <ul>
        <li><strong>Credential Info:</strong> Name, Description, Credential Format, Expiry Date, and MSO settings.</li>
        <li><strong>Attributes (X Selected):</strong> All chosen attributes listed as gray tags for easy scanning.</li>
        <li><strong>Assigned Issuers (X):</strong> The organization names you selected, along with an Initial Status badge (typically &ldquo;Draft&rdquo;).</li>
      </ul>
      <p>
        Click <strong>Create Template</strong> (green button) to finalize the template, or <strong>&lt; Back</strong> to return and edit any previous step.
      </p>
    </ArticleWrapper>
  );
}
