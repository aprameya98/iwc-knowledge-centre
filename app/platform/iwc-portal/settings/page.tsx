import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Settings from '@/public/Settings.png';
import Image from 'next/image';

export const metadata = {
  title: 'Navigating Platform Settings',
  description: 'A guide to the Settings screen, covering security and compliance, notifications, API keys, user management, and platform branding.',
};

const toc = [
  { id: 'security-compliance', title: 'Security & Compliance', level: 2 as const },
  { id: 'notifications', title: 'Notifications', level: 2 as const },
  { id: 'api-keys', title: 'API Keys', level: 2 as const },
  { id: 'user-management', title: 'User Management', level: 2 as const },
  { id: 'platform-branding', title: 'Platform Branding', level: 2 as const },
];

const content = `Welcome to the Settings screen. This page acts as your central control panel for global platform configurations. The configurations you adjust here dictate how the entire Issuance With Credence system operates, looks, and communicates. Security and Compliance. Click the orange Configure button to dive into your security policies. Enforce strict password requirements, set session timeout limits (automatically log out idle administrators), and access comprehensive audit logs to track every action on the platform for compliance purposes. Notifications. Click Configure to set up automated system communications. Establish email alerts to keep your team informed, or configure webhooks (automated code-based messages) to trigger actions in other internal software tools whenever key events occur — such as a surge in new identity applications or a system error. API Keys. Click Manage to view your active API keys. Securely generate new master tokens for developers, or revoke old keys if an integration is retired or compromised. User Management. Click Manage to open your staff directory. Invite new administrators, deactivate accounts of departing staff, and assign specific role-based permissions to ensure team members only access the specific modules they need. Platform Branding. Click Customise to adjust the visual elements of the system. Upload your official company logo, change the platform name, adjust color schemes, and modify the design templates for any automated emails sent to end-users.`;

export default function Page() {
  return (
    <ArticleWrapper href="/platform/iwc-portal/settings" title="Navigating Platform Settings" contentText={content} toc={toc}>
      <p>
        Welcome to the <strong>Settings</strong> screen. This page acts as your central control panel for global platform configurations. The configurations you adjust here dictate how the entire <strong>Issuance With Credence</strong> system operates, looks, and communicates.
      </p>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image src={Settings} alt="" />
      <br></br>

      <h2 id="security-compliance">Security &amp; Compliance</h2>
      <p>
        Click the orange <strong>Configure</strong> button to dive into your security policies. Enforce strict password requirements, set session timeout limits (automatically log out idle administrators), and access comprehensive audit logs to track every action on the platform for compliance purposes.
      </p>

      <h2 id="notifications">Notifications</h2>
      <p>
        Click <strong>Configure</strong> to set up automated system communications. Establish email alerts to keep your team informed, or configure webhooks (automated code-based messages) to trigger actions in other internal software tools whenever key events occur &mdash; such as a surge in new identity applications or a system error.
      </p>

      <h2 id="api-keys">API Keys</h2>
      <p>
        Click <strong>Manage</strong> to view your active API keys. Securely generate new master tokens for developers, or revoke old keys if an integration is retired or compromised.
      </p>

      <h2 id="user-management">User Management</h2>
      <p>
        Click <strong>Manage</strong> to open your staff directory. Invite new administrators, deactivate accounts of departing staff, and assign specific role-based permissions to ensure team members only access the specific modules they need.
      </p>

      <h2 id="platform-branding">Platform Branding</h2>
      <p>
        Click <strong>Customise</strong> to adjust the visual elements of the system. Upload your official company logo, change the platform name, adjust color schemes, and modify the design templates for any automated emails sent to end-users.
      </p>
    </ArticleWrapper>
  );
}
