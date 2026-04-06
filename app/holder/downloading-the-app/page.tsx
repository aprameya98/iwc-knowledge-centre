import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Downloading the Credence Wallet',
  description: 'How to download and install the Credence Wallet on iOS and Android, including system requirements and first-launch setup.',
};

const toc = [
  { id: 'system-requirements', title: 'System Requirements', level: 2 as const },
  { id: 'installation', title: 'Installation', level: 2 as const },
  { id: 'first-launch', title: 'First Launch', level: 2 as const },
];

const content = `The Credence Wallet is available as a free download from the Apple App Store for iOS devices running iOS 14 or later, and from Google Play for Android devices running Android 8.0 (Oreo) or later. Search for "Credence Wallet" and install the app published by Credence ID. On first launch, the app will request permission to send push notifications and, on some devices, access to NFC hardware. These permissions are required for full functionality. You will also be prompted to set up or confirm your device biometric lock, which is used to protect credential access.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/holder/downloading-the-app"
      title="Downloading the Credence Wallet"
      contentText={content}
      toc={toc}
    >
      <h2 id="system-requirements">System Requirements</h2>
      <p>
        The Credence Wallet requires iOS 14.0 or later on Apple devices, which includes iPhone 6s and
        newer. On Android, the app requires Android 8.0 (Oreo) or later. The app is compatible with both
        smartphones and tablets, though the user interface is optimized for phone-sized screens. A device
        with a biometric sensor (Face ID, Touch ID, or fingerprint scanner) is strongly recommended, as
        biometric authentication is the default method for unlocking credentials. The app also requires
        approximately 80 MB of free storage space for installation, with additional space used as
        credentials are added to the wallet.
      </p>

      <h2 id="installation">Installation</h2>
      <p>
        On iOS, open the App Store, tap the Search tab, and search for <strong>Credence Wallet</strong>.
        Locate the app published by <strong>Credence ID</strong> and tap <strong>Get</strong> to download
        and install it. On Android, open Google Play, search for <strong>Credence Wallet</strong>, and
        tap <strong>Install</strong> on the listing by Credence ID. The app is free to download and there
        are no in-app purchases. Verify that you are installing the official app by Credence ID before
        proceeding; do not install third-party or similarly named applications.
      </p>

      <Callout type="tip">
        If your organization provided a direct download link or QR code for the app, use that link to
        ensure you are directed to the correct listing in your device's app store.
      </Callout>

      <h2 id="first-launch">First Launch</h2>
      <p>
        When you open the Credence Wallet for the first time, you will be guided through a brief setup
        flow. The app will request permission to send push notifications — tap <strong>Allow</strong> so
        you receive timely credential and application status updates. On Android devices, the app may also
        request permission to use NFC for credential sharing; enable this if your device supports NFC.
        You will then be prompted to set a wallet PIN as a fallback access method in case biometric
        authentication is unavailable. Choose a PIN that is distinct from your device unlock PIN for
        added security. Once setup is complete, the wallet home screen will display, ready to receive
        credentials from your enrollment or any organization that issues you a credential.
      </p>
    </ArticleWrapper>
  );
}
