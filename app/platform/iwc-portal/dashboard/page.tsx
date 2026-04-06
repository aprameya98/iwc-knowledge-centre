import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Image from 'next/image';
import dashboard from '@/public/Dashboard.png';

export const metadata = {
  title: 'Getting Started with the Dashboard',
  description: 'A guide to the Issuance with Credence admin dashboard, covering navigation, platform overview, trends, and recent output monitoring.',
};

const toc = [
  { id: 'main-navigation-search', title: 'Main Navigation & Search', level: 2 as const },
  { id: 'platform-overview', title: 'Platform Overview & Quick Actions', level: 2 as const },
  { id: 'tracking-trends', title: 'Tracking Trends & Activity', level: 2 as const },
  { id: 'monitoring-recent-output', title: 'Monitoring Recent Output', level: 2 as const },
];

const content = `Welcome to the Issuance with Credence admin dashboard. This screen serves as your central command center, providing a high-level overview of your platform's health, recent credential activities, and pending tasks. Main Navigation and Search. Left Navigation Menu: This dark sidebar is your primary way to move between different modules. You are currently viewing the Dashboard. From here, you can navigate to manage Tenants, Issuers, Templates, and view detailed Analytics. Global Search (Top Right): Use the Search applications bar to quickly find specific user applications or credential IDs without leaving the page. User Profile: Your current login status (iwc-admin) is located at the bottom left, and your general profile/notification settings are at the top right. Platform Overview and Quick Actions. The top section gives you the most critical numbers at a glance. Action Buttons (Top Right): Applications (18): This button highlights that you have 18 items requiring your attention. Clicking this will take you to a queue to approve or reject them. Onboard Issuer: Use this primary action button to add a new organization that can issue credentials. ID Applications Card: Shows the total volume of identity applications (139). It breaks down how many have been successfully verified (76) versus how many are pending review (18), resulting in a 55% overall approval rate. Digital Credentials Card: Shows the total number of actual credentials issued (177). It shows how many are currently active (100) and if any have been revoked (0). Tip: Click the View all link in the top right of these cards to dive into the full, detailed lists. Tracking Trends and Activity. The middle section helps you visualize platform usage over time. Issuance Trend (Graph): This line chart plots credential issuance over the last 6 months. You can see a flatline from November to February, followed by a sharp upward trend indicating a rapid increase in credential generation starting in late February. This Month's Activity (Bottom Left): This provides a quick daily/monthly tally of application outcomes. Currently, it shows 0 Approved and 0 Rejected for the current time period. Monitoring Recent Output. The right side of the screen focuses on specific, recent events. Recent Credentials: A live feed of the newest credentials created on the platform. It displays the unique ID string, the specific issuer, the technical standard used, and its current status. Platform Health (Quick Links): Shortcut widgets to jump directly into configuring key platform settings: Manage Issuers, Templates, Trust Management.`;

export default function Page() {
  return (
    <ArticleWrapper href="/platform/iwc-portal/dashboard" title="Getting Started with the Dashboard" contentText={content} toc={toc}>
      <p>
        Welcome to the <strong>Issuance with Credence</strong> admin dashboard. This screen serves as your central command center, providing a high-level overview of your platform&apos;s health, recent credential activities, and pending tasks.
      </p>

<Image src={dashboard} alt="" />
<br></br>
      {/* <img
        src="/platform/page-01.png"
        alt="Dashboard screenshot showing the main admin interface with navigation, platform overview cards, issuance trend graph, and recent credentials"
        style={{ width: '100%', borderRadius: '8px', border: '1px solid #E5E5E3', margin: '1.5rem 0' }}
      /> */}

      <h2 id="main-navigation-search">Main Navigation &amp; Search</h2>
      <ul>
        <li>
          <strong>Left Navigation Menu:</strong> This dark sidebar is your primary way to move between different modules. You are currently viewing the <strong>Dashboard</strong>. From here, you can navigate to manage <strong>Tenants</strong>, <strong>Issuers</strong>, <strong>Templates</strong>, and view detailed <strong>Analytics</strong>.
        </li>
        <li>
          <strong>Global Search (Top Right):</strong> Use the <code>Search applications...</code> bar to quickly find specific user applications or credential IDs without leaving the page.
        </li>
        <li>
          <strong>User Profile:</strong> Your current login status (<code>iwc-admin</code>) is located at the bottom left, and your general profile/notification settings are at the top right.
        </li>
      </ul>

      <h2 id="platform-overview">Platform Overview &amp; Quick Actions</h2>
      <p>The top section gives you the most critical numbers at a glance.</p>
      <ul>
        <li>
          <strong>Action Buttons (Top Right):</strong>
          <ul>
            <li>
              <strong>Applications (18):</strong> This button highlights that you have 18 items requiring your attention. Clicking this will take you to a queue to approve or reject them.
            </li>
            <li>
              <strong>+ Onboard Issuer:</strong> Use this primary action button to add a new organization that can issue credentials.
            </li>
          </ul>
        </li>
        <li>
          <strong>ID Applications Card:</strong> Shows the total volume of identity applications (<strong>139</strong>). It breaks down how many have been successfully verified (<strong>76</strong>) versus how many are pending review (<strong>18</strong>), resulting in a <strong>55%</strong> overall approval rate.
        </li>
        <li>
          <strong>Digital Credentials Card:</strong> Shows the total number of actual credentials issued (<strong>177</strong>). It shows how many are currently active (<strong>100</strong>) and if any have been revoked (<strong>0</strong>).
        </li>
      </ul>
      <p>
        <strong>Tip:</strong> Click the &quot;View all&quot; link in the top right of these cards to dive into the full, detailed lists.
      </p>

      <h2 id="tracking-trends">Tracking Trends &amp; Activity</h2>
      <p>The middle section helps you visualize platform usage over time.</p>
      <ul>
        <li>
          <strong>Issuance Trend (Graph):</strong> This line chart plots credential issuance over the last 6 months. You can see a flatline from November to February, followed by a sharp upward trend indicating a rapid increase in credential generation starting in late February.
        </li>
        <li>
          <strong>This Month&apos;s Activity (Bottom Left):</strong> This provides a quick daily/monthly tally of application outcomes. Currently, it shows <strong>0 Approved</strong> and <strong>0 Rejected</strong> for the current time period.
        </li>
      </ul>

      <h2 id="monitoring-recent-output">Monitoring Recent Output</h2>
      <p>The right side of the screen focuses on specific, recent events.</p>
      <ul>
        <li>
          <strong>Recent Credentials:</strong> A live feed of the newest credentials created on the platform. It displays the unique ID string, the specific issuer (e.g., <strong>National Bank of Egypt</strong>), the technical standard used (<code>Org.Iso.18013.5.1.MDL</code>), and its current status (<strong>Active</strong>).
        </li>
        <li>
          <strong>Platform Health (Quick Links):</strong> Shortcut widgets to jump directly into configuring key platform settings:
          <ul>
            <li><strong>Manage Issuers:</strong> View and onboard new issuing organizations.</li>
            <li><strong>Templates:</strong> Configure the schemas (the data structures) for the credentials.</li>
            <li><strong>Trust Management:</strong> Configure trust chains (RICAL) to ensure the credentials can be verified by relying parties.</li>
          </ul>
        </li>
      </ul>
    </ArticleWrapper>
  );
}
