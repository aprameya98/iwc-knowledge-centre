import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Image from 'next/image';
import Tenant1 from '@/public/Tenants1.png';
import Tenant2 from '@/public/Tenants2.png';
export const metadata = {
  title: 'Managing Your Platform Tenants',
  description: 'A guide to managing tenants in the Credence platform, including searching, filtering, onboarding new tenants, and configuring organisation details.',
};

const toc = [
  { id: 'searching-and-filtering', title: 'Searching and Filtering', level: 2 as const },
  { id: 'adding-a-new-tenant', title: 'Adding a New Tenant', level: 2 as const },
  { id: 'understanding-the-tenant-directory', title: 'Understanding the Tenant Directory', level: 2 as const },
  { id: 'onboarding-a-new-tenant', title: 'Onboarding a New Tenant', level: 2 as const },
  { id: 'organisation-details', title: 'Organisation Details', level: 2 as const },
  { id: 'branding', title: 'Branding (Optional)', level: 2 as const },
  { id: 'admin-user-configuration', title: 'Admin User Configuration', level: 2 as const },
  { id: 'finalizing-the-setup', title: 'Finalizing the Setup', level: 2 as const },
];

const content = `Welcome to the Tenants screen. In the Credence platform, Tenants are the distinct organizations or overarching entities that operate within your system. This screen is your directory for viewing, adding, and managing these organizations. Searching and Filtering. As your list grows: Local Search Bar: Below the Tenants heading, search bar labeled Search by name or email to instantly filter the list. Global Search: Search applications bar at top right for broader, platform-wide searches. Adding a New Tenant. When a new organization joins your platform: Onboard Tenant: Click this primary orange button in the top right corner. Understanding the Tenant Directory. The data table columns: TENANT: Organization name with UUID underneath. CONTACT: Primary email. STATUS: Operational state (Active). CREATED: Date onboarded (DD/MM/YYYY). ACTIONS: Eye icon to open detailed view. Onboarding a New Tenant. Welcome to the Onboard New Tenant screen. Organisation Details (Required). Tenant Name: Official name of the organization. Contact Email: Primary email for communications. Branding (Optional). Logo URL and Favicon URL: Direct web links. Primary and Secondary Color: Hex codes or color picker. Admin User Configuration. Every tenant needs an initial admin user. Optional — Auto-Generated if Blank. Username, Email, Full Name fields. Finalizing the Setup. Click orange Onboard Tenant button. Cancel button or Back to Tenants link.`;

export default function Page() {
  return (
    <ArticleWrapper href="/platform/tenants" title="Managing Your Platform Tenants" contentText={content} toc={toc}>
      <p>
        Welcome to the <strong>Tenants</strong> screen. In the Credence platform, &quot;Tenants&quot; are the distinct organizations or overarching entities that operate within your system. This screen is your directory for viewing, adding, and managing these organizations.
      </p>

      <Image src={Tenant1} alt="" />
<br></br>

      {/* <img
        src="/platform/page-03.png"
        alt="Tenants list screen showing the directory of organizations with columns for tenant name, contact, status, created date, and actions"
        style={{ width: '100%', borderRadius: '8px', border: '1px solid #E5E5E3', margin: '1.5rem 0' }}
      /> */}

      <h2 id="searching-and-filtering">Searching and Filtering</h2>
      <p>As your list grows:</p>
      <ul>
        <li>
          <strong>Local Search Bar:</strong> Below the &quot;Tenants&quot; heading, a search bar labeled <code>Search by name or email...</code> to instantly filter the list.
        </li>
        <li>
          <strong>Global Search:</strong> <code>Search applications...</code> bar at top right for broader, platform-wide searches.
        </li>
      </ul>

      <h2 id="adding-a-new-tenant">Adding a New Tenant</h2>
      <p>When a new organization joins your platform:</p>
      <ul>
        <li>
          <strong>+ Onboard Tenant:</strong> Click this primary orange button in the top right corner.
        </li>
      </ul>

      <h2 id="understanding-the-tenant-directory">Understanding the Tenant Directory</h2>
      <p>The data table columns:</p>
      <ul>
        <li><strong>TENANT:</strong> Organization name with UUID underneath.</li>
        <li><strong>CONTACT:</strong> Primary email.</li>
        <li><strong>STATUS:</strong> Operational state (<strong>Active</strong>).</li>
        <li><strong>CREATED:</strong> Date onboarded (DD/MM/YYYY).</li>
        <li><strong>ACTIONS:</strong> Eye icon to open detailed view.</li>
      </ul>

      <h2 id="onboarding-a-new-tenant">Onboarding a New Tenant</h2>
<Image src={Tenant2} alt="" />
<br></br>
      {/* <img
        src="/platform/page-04.png"
        alt="Onboard New Tenant form showing organisation details, branding options, and admin user configuration fields"
        style={{ width: '100%', borderRadius: '8px', border: '1px solid #E5E5E3', margin: '1.5rem 0' }}
      /> */}

      <p>Welcome to the <strong>Onboard New Tenant</strong> screen.</p>

      <h2 id="organisation-details">Organisation Details</h2>
      <p>These fields are <strong>required</strong>:</p>
      <ul>
        <li><strong>Tenant Name (*):</strong> Official name of the organization.</li>
        <li><strong>Contact Email (*):</strong> Primary email for communications.</li>
      </ul>

      <h2 id="branding">Branding (Optional)</h2>
      <ul>
        <li><strong>Logo URL &amp; Favicon URL:</strong> Direct web links to the organization&apos;s branding assets.</li>
        <li><strong>Primary &amp; Secondary Color:</strong> Hex codes or use the color picker to define the tenant&apos;s brand palette.</li>
      </ul>

      <h2 id="admin-user-configuration">Admin User Configuration</h2>
      <p>Every tenant needs an initial admin user.</p>
      <ul>
        <li><strong>Optional &mdash; Auto-Generated if Blank:</strong> If you leave these fields empty, the system will auto-generate credentials.</li>
        <li><strong>Username:</strong> Login identifier for the admin user.</li>
        <li><strong>Email:</strong> Contact email for the admin user.</li>
        <li><strong>Full Name:</strong> Display name for the admin user.</li>
      </ul>

      <h2 id="finalizing-the-setup">Finalizing the Setup</h2>
      <ul>
        <li>Click the orange <strong>Onboard Tenant</strong> button to complete the process.</li>
        <li>Use the <strong>Cancel</strong> button or <strong>Back to Tenants</strong> link to return without saving.</li>
      </ul>
    </ArticleWrapper>
  );
}
