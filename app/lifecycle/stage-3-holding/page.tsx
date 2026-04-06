import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Holder from '@/public/Wallet_Holder.png'
import Image from 'next/image';
export const metadata: Metadata = {
  title: 'Stage 3: Holding',
  description: 'How digital credentials are securely stored and managed in the Credence Wallet.',
};
const toc = [
  { id: 'what', title: 'What is Holding?', level: 2 as const },
  { id: 'storage', title: 'Secure Storage', level: 2 as const },
  { id: 'management', title: 'Credential Management', level: 2 as const },
  { id: 'lifecycle', title: 'Lifecycle Notifications', level: 2 as const },
];
const content = `Holding is the stage where the credential lives on the holder device in the Credence Wallet, protected by secure element storage.`;

export default function Page() {
  return (
    <ArticleWrapper href="/lifecycle/stage-3-holding" title="Stage 3: Holding" contentText={content} toc={toc}>

      <Image src={Holder} alt="" />
<br></br>

      <h2 id="what">What is Holding?</h2>
      <p>The <strong>holding</strong> stage is the period between credential issuance and its eventual use in a verification transaction. During this time, the credential lives on the holder's device in the Credence Wallet. The holder can view their credential at any time, and the wallet keeps the credential's status synchronized with the issuer's revocation registry.</p>

      <h2 id="storage">Secure Storage</h2>
      <p>Credential security during the holding stage depends on two layers of protection. The credential data itself is stored in encrypted form by the wallet application. The cryptographic keys that allow the holder to prove ownership of the credential — and to generate valid credential presentations — are stored in the device's <strong>secure element</strong>: a hardware component that is isolated from the main processor and cannot be accessed by software attacks.</p>
      <p>On iOS devices, the secure element is Apple's Secure Enclave. On Android devices, it is the StrongBox or Trusted Execution Environment (TEE). Private key operations such as signing a credential presentation are performed within the secure element, meaning the keys never exist in a form that can be copied or extracted.</p>

      <h2 id="management">Credential Management</h2>
      <p>The Credence Wallet allows holders to manage multiple credentials from different issuers in a single interface. Each credential is displayed as a card showing the issuer's branding, the holder's name and photo, and the credential's key fields. Holders can tap into a credential to see all its attributes and check its current status.</p>
      <p>Credentials can be organized and the wallet supports both online and offline access. When the device is offline, previously loaded credentials can still be viewed and presented, since the presentation is generated locally using the keys in the secure element. Status checks require connectivity and will display the last known status when offline.</p>

      <h2 id="lifecycle">Lifecycle Notifications</h2>
      <p>The wallet notifies holders of important lifecycle events. Expiry reminders are sent in advance of a credential's expiry date, prompting the holder to initiate renewal if required. Status change notifications alert the holder if their credential is suspended or revoked by the issuer. These notifications allow holders to take action before their credential becomes unusable in a verification context.</p>
    </ArticleWrapper>
  );
}
