import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Viewing Your Credential',
  description: 'How to locate and view your digital credentials in the Credence Wallet, including the credential card layout and expanded detail view.',
};

const toc = [
  { id: 'locating-your-credential', title: 'Locating Your Credential', level: 2 as const },
  { id: 'credential-card-layout', title: 'Credential Card Layout', level: 2 as const },
  { id: 'expanded-detail-view', title: 'Expanded Detail View', level: 2 as const },
];

const content = `When a credential is issued to you, it appears automatically on the Credence Wallet home screen as a credential card. Each card displays a summary of the most important fields, including your name and photograph. Tapping a card opens the expanded detail view, which shows all fields included in the credential such as your date of birth, document number, expiry date, and any additional attributes set by the issuer. The expanded view also shows the credential's current status and the name and logo of the issuing organization.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/holder/viewing-credential"
      title="Viewing Your Credential"
      contentText={content}
      toc={toc}
    >
      <h2 id="locating-your-credential">Locating Your Credential</h2>
      <p>
        When a credential is issued to you following a successful enrollment, it is delivered directly to
        your Credence Wallet and appears automatically on the home screen. You will receive a push
        notification informing you that a new credential has been added. If you hold multiple credentials
        from different issuers, they are displayed as a scrollable stack of cards on the home screen.
        You can also access a full list view by tapping the <strong>All Credentials</strong> button. If
        you expected a credential but do not see it, ensure that push notifications are enabled for the
        Credence Wallet and that you are connected to the internet, as the credential is delivered
        over-the-air during the issuance process.
      </p>

      <h2 id="credential-card-layout">Credential Card Layout</h2>
      <p>
        Each credential is displayed as a styled card on the wallet home screen. The card design is
        determined by the issuing organization and may include their logo, brand colours, and layout
        preferences. The front of the card always shows your photograph, your full name, and a status
        indicator showing whether the credential is Active, Suspended, or Revoked. Additional summary
        fields such as your credential number or expiry date may also appear on the card face, depending
        on the issuer's configuration. The card also displays a small icon indicating the available
        presentation methods, such as QR code and NFC.
      </p>

      <h2 id="expanded-detail-view">Expanded Detail View</h2>
      <p>
        Tapping a credential card opens the expanded detail view, which presents the full set of fields
        included in your credential. Common fields include your full legal name, date of birth, nationality,
        document number, issue date, expiry date, and the name of the issuing authority. Depending on your
        credential type, additional fields such as your address, occupation, or access permissions may also
        be present. The expanded view also displays the issuing organization's name and logo, the
        credential type, and the current validity status. From this screen you can initiate credential
        sharing via QR code or NFC, and access options such as credential details and the activity log.
      </p>
    </ArticleWrapper>
  );
}
