import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Lost or Stolen Device',
  description: 'What to do if your phone is lost or stolen — including how to protect your credentials, request remote revocation, and recover your wallet on a new device.',
};

const toc = [
  { id: 'immediate-steps', title: 'Immediate Steps', level: 2 as const },
  { id: 'credential-security-on-locked-devices', title: 'Credential Security on Locked Devices', level: 2 as const },
  { id: 'remote-revocation', title: 'Remote Revocation', level: 2 as const },
  { id: 'recovering-on-a-new-device', title: 'Recovering on a New Device', level: 2 as const },
];

const content = `If your device is lost or stolen, act quickly to protect your credentials. Contact your issuing authority immediately to request credential suspension or revocation. Use your device's remote lock and remote wipe features through iCloud Find My or Google Find My Device to prevent unauthorized access. Credentials stored in the Credence Wallet are protected by device biometric authentication and encryption, making them inaccessible on a locked device without the correct biometric or PIN. Once you have a new device, contact your issuing organizations to initiate credential reissuance.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/holder/lost-stolen-device"
      title="Lost or Stolen Device"
      contentText={content}
      toc={toc}
    >
      <Callout type="warning">
        If you believe your phone has been stolen, contact your issuing authority immediately to request
        credential revocation. Do not wait.
      </Callout>

      <h2 id="immediate-steps">Immediate Steps</h2>
      <p>
        If your device is lost or stolen, take the following steps as quickly as possible. First, use
        Apple's Find My (iCloud.com) or Google's Find My Device (android.com/find) to remotely lock
        your device if it is not already locked. If you believe the device cannot be recovered, use the
        remote wipe option to erase all data on the device. Second, contact each issuing organization
        from which you hold a credential and inform them of the situation, requesting that your
        credentials be suspended or revoked immediately. Third, change your passwords for any accounts
        accessible from the device, including your email account, as these may be used in credential
        recovery flows. Keep a record of the reference numbers provided by each issuing organization for
        follow-up communications.
      </p>

      <h2 id="credential-security-on-locked-devices">Credential Security on Locked Devices</h2>
      <p>
        Credentials stored in the Credence Wallet are protected by multiple layers of security even if
        someone has physical possession of your device. The wallet requires biometric authentication
        (Face ID, fingerprint, or equivalent) or the wallet PIN before any credential can be displayed
        or shared. All credential data is stored in encrypted form in the device's secure enclave or
        hardware-backed keystore, which cannot be accessed without the device unlock credentials. An
        attacker with a locked device cannot extract credential data from storage, cannot generate a
        valid QR code presentation, and cannot perform an NFC presentation. This means that even in the
        worst case where your device cannot be wiped, your credentials are not immediately exploitable.
      </p>

      <h2 id="remote-revocation">Remote Revocation</h2>
      <p>
        Your issuing organization has the ability to suspend or revoke your credential remotely at any
        time, without needing access to your device. When you contact them to report a lost or stolen
        device, they will typically suspend the credential immediately while the situation is assessed,
        and then proceed to revocation if the device cannot be recovered. Once revoked, any attempt to
        present your credential — whether from your lost device or from any other source — will be
        rejected by verifiers, as the revocation is reflected in the credential status registry. You do
        not need to take any action in the wallet for revocation to take effect; it is enforced at the
        verification level.
      </p>

      <h2 id="recovering-on-a-new-device">Recovering on a New Device</h2>
      <p>
        Once you have a replacement device, you can recover your credentials through a reissuance process.
        Install the Credence Wallet app on your new device and contact each issuing organization to
        request credential reissuance. Depending on the organization's policies, you may be required to
        complete a partial or full re-enrollment flow to verify your identity before a new credential is
        issued to your new device. Your issuing organization will send you a reissuance invitation to
        your registered email address or phone number. Follow the instructions in that invitation to
        complete the process. Once reissued, the new credential will be delivered directly to your new
        device's Credence Wallet.
      </p>
    </ArticleWrapper>
  );
}
