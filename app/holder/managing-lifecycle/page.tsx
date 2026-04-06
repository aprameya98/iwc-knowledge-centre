import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Managing Your Credential Lifecycle',
  description: 'How to handle credential expiry, renewal, data updates, reissuance, and managing multiple credentials in the Credence Wallet.',
};

const toc = [
  { id: 'expiry-and-renewal', title: 'Expiry and Renewal', level: 2 as const },
  { id: 'credential-updates', title: 'Credential Updates', level: 2 as const },
  { id: 'multiple-credentials', title: 'Multiple Credentials', level: 2 as const },
  { id: 'reissuance', title: 'Reissuance', level: 2 as const },
];

const content = `Digital credentials have a lifecycle that spans from issuance through active use to eventual expiry or revocation. Understanding this lifecycle helps you ensure your credentials remain valid when you need them. Credentials expire on the date set by the issuing organization at the time of issuance. The Credence Wallet will notify you before your credential expires so you can initiate renewal in time. Credential data such as your address or name can be updated by the issuing organization, which results in a new version of the credential being delivered to your wallet. You can hold multiple credentials simultaneously, including different credential types from different issuers.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/holder/managing-lifecycle"
      title="Managing Your Credential Lifecycle"
      contentText={content}
      toc={toc}
    >
      <h2 id="expiry-and-renewal">Expiry and Renewal</h2>
      <p>
        Every credential issued through the IwC platform has an expiry date set by the issuing organization
        at the time of issuance. The expiry date is visible in the credential detail view in the Credence
        Wallet. As your credential approaches its expiry date, the wallet will send you a push notification
        reminding you to renew. The renewal process is initiated by your issuing organization, which will
        send you a renewal invitation — similar to your original enrollment invitation — via email, SMS, or
        push notification. You will typically be asked to confirm your identity again through a simplified
        re-verification flow. Once renewal is complete, a new credential with an updated expiry date is
        delivered to your wallet and replaces the expired one.
      </p>

      <Callout type="tip">
        Do not wait until your credential has already expired before initiating renewal. Some verifiers
        may reject credentials that are within a few days of expiry even if they have not yet technically
        expired. Renew as soon as you receive the renewal invitation.
      </Callout>

      <h2 id="credential-updates">Credential Updates</h2>
      <p>
        From time to time, the data contained in your credential may need to be updated to reflect changes
        in your personal information, such as a change of name, address, or status. When your issuing
        organization makes an update to your credential record, a new version of the credential is
        automatically delivered to your Credence Wallet. You will receive a push notification informing
        you that your credential has been updated. The previous version is replaced in the wallet by the
        updated version. Review the updated credential to ensure the data is correct. If you notice any
        inaccuracies in the updated data, contact your issuing organization promptly to have them
        corrected.
      </p>

      <h2 id="multiple-credentials">Multiple Credentials</h2>
      <p>
        The Credence Wallet is designed to hold multiple credentials simultaneously, and you may accumulate
        credentials from different issuing organizations over time. For example, you might hold a government-
        issued digital identity credential alongside a workplace access credential from your employer and a
        membership credential from a professional association. Each credential is managed independently,
        has its own expiry date and status, and can be presented separately. In the wallet home screen,
        credentials are displayed as a scrollable card stack. You can reorder them by pressing and holding
        a card and dragging it to your preferred position, placing the credentials you use most frequently
        at the top.
      </p>

      <h2 id="reissuance">Reissuance</h2>
      <p>
        Reissuance is the process of issuing a completely new credential following a significant change,
        such as a lost or stolen device, a substantial change in your personal data, or a security
        incident that required your original credential to be revoked. Unlike a routine update, reissuance
        may require you to complete a full or partial re-enrollment flow to verify your identity again
        before the new credential is issued. Your issuing organization will communicate the reissuance
        process to you and send a new invitation when required. When a reissued credential is delivered to
        your wallet, it will appear as a new credential alongside any existing credentials. Any previously
        revoked credential that it replaces will remain in the wallet marked as Revoked for your records.
      </p>
    </ArticleWrapper>
  );
}
