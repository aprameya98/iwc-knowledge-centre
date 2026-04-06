import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Credence Wallet Overview',
  description: 'An introduction to the Credence Wallet — what it is, its role in the IwC ecosystem, what credentials it holds, and how it protects your data.',
};

const toc = [
  { id: 'what-is-the-credence-wallet', title: 'What is the Credence Wallet', level: 2 as const },
  { id: 'role-in-the-ecosystem', title: 'Role in the Ecosystem', level: 2 as const },
  { id: 'what-the-wallet-holds', title: 'What the Wallet Holds', level: 2 as const },
  { id: 'security-and-privacy', title: 'Security and Privacy', level: 2 as const },
];

const content = `The Credence Wallet is a mobile application developed by Credence ID that securely stores and manages your verifiable digital credentials. It acts as the holder component in the IwC identity ecosystem, receiving credentials from issuing organizations and enabling you to present them to verifiers. The wallet can hold multiple credentials simultaneously, including digital identity cards, access badges, and membership credentials. Credentials are stored in encrypted form on your device and are protected by your device's biometric lock or PIN. The wallet never shares your credential data without your explicit action.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/holder/overview"
      title="Credence Wallet Overview"
      contentText={content}
      toc={toc}
    >
      <h2 id="what-is-the-credence-wallet">What is the Credence Wallet</h2>
      <p>
        The Credence Wallet is a mobile application developed by Credence ID that securely stores and
        manages your verifiable digital credentials. Available for both iOS and Android, the wallet
        provides a personal, portable container for credentials issued to you by organizations using the
        IwC platform. Unlike paper documents or traditional plastic cards, credentials in the Credence
        Wallet are cryptographically signed, tamper-evident, and can be selectively disclosed — meaning
        you can choose to share only the specific fields a verifier requires without revealing your full
        identity record.
      </p>

      <h2 id="role-in-the-ecosystem">Role in the Ecosystem</h2>
      <p>
        In the IwC identity ecosystem, there are three primary roles: issuers, holders, and verifiers.
        Issuers are organizations that create and issue credentials after completing identity verification.
        Verifiers are organizations or individuals that check credentials to confirm identity or
        entitlement. The Credence Wallet places you — the holder — in control of your own credentials.
        When an issuer approves your enrollment, your credential is delivered directly to your wallet.
        When a verifier requests proof of identity, you present the credential from your wallet. At no
        point does any central party need to be queried to confirm your credential, which ensures both
        speed and privacy.
      </p>

      <h2 id="what-the-wallet-holds">What the Wallet Holds</h2>
      <p>
        The Credence Wallet can hold multiple credentials simultaneously from different issuing
        organizations. Supported credential types include digital identity documents (such as digital
        national IDs and digital driver's licenses), workplace access credentials, event passes,
        membership cards, and any other credential type issued by an IwC-enabled organization. Each
        credential is displayed as a card in the wallet's main view and contains the fields that the
        issuer has included, such as your name, photograph, date of birth, and any role-specific
        attributes. Credentials from different issuers are kept separate and can each be managed
        independently.
      </p>

      <h2 id="security-and-privacy">Security and Privacy</h2>
      <p>
        Security is a foundational principle of the Credence Wallet. All credentials are stored in
        encrypted form in your device's secure enclave or keystore, ensuring they cannot be accessed even
        if your device storage is cloned. The wallet requires biometric authentication (Face ID,
        fingerprint, or equivalent) or a device PIN before any credential can be displayed or shared.
        Credential data is never transmitted to Credence ID servers for verification — the cryptographic
        proof of validity is embedded in the credential itself. The wallet does not track where or when
        you present your credentials, ensuring that your movement and activity remain private.
      </p>
    </ArticleWrapper>
  );
}
