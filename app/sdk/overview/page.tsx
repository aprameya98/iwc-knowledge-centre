import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Overview | Credence ID Digital Wallet SDK',
  description: 'An introduction to the Credence ID Digital Wallet — its architecture, delivery options, and supported platforms.',
};

const toc = [
  { id: 'what-is-the-wallet', title: 'What Is the Wallet?', level: 2 as const },
  { id: 'delivery-options', title: 'Delivery Options', level: 2 as const },
  { id: 'supported-platforms', title: 'Supported Platforms', level: 2 as const },
];

const contentText = `The Credence ID Digital Wallet is a cross-platform solution built on Kotlin Multiplatform. It provides a high-level, unified API for credential management, supporting both in-person and online presentation. The wallet is designed to prevent vendor lock-in because cryptographic operations, data handling, and presentation protocols are standards-defined, it seamlessly interoperates with any spec-compliant ecosystem. Delivery options include an embeddable SDK distributed as an aar file for Android and an xcframework file for iOS, and a white-label application ready for app store distribution. Supported platforms are Android 8 and above using Kotlin Multiplatform, Android TEE, and FLAG_SECURE, and iOS 14 and above using Kotlin Multiplatform and the Apple Secure Element.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/sdk/overview"
      title="Overview"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="what-is-the-wallet">What Is the Wallet?</h2>
      <p>
        The Credence ID Digital Wallet is a cross-platform solution built on <strong>Kotlin Multiplatform (KMP)</strong>. It provides a high-level, unified API for credential management, supporting both in-person and online presentation.
      </p>
      <p>
        The wallet is designed to prevent vendor lock-in. Because cryptographic operations, data handling, and presentation protocols are standards-defined, it seamlessly interoperates with any spec-compliant ecosystem — meaning credentials issued through the Credence ID platform can be presented to any ISO 18013-5 or OpenID4VP-compliant verifier, regardless of vendor.
      </p>

      <h2 id="delivery-options">Delivery Options</h2>
      <p>
        The SDK is available in two forms depending on the integration context:
      </p>
      <ul>
        <li>
          <strong>Embeddable SDK</strong> — Integrate directly into an existing mobile application, such as an agency or enterprise app, to enable native credential management without requiring a separate wallet application. The SDK is distributed as an <code>.aar</code> file for Android and an <code>.xcframework</code> file for iOS.
        </li>
        <li>
          <strong>White-Label Application</strong> — A fully customizable, brandable mobile app that is ready for distribution through the Apple App Store and Google Play. This option is suited for deployments where a standalone wallet app is preferred over SDK integration into an existing application.
        </li>
      </ul>

      <Callout type="tip">
        The embeddable SDK is the recommended approach for enterprise and government deployments that already have a citizen-facing or staff-facing mobile application. It allows credentials to live natively within a familiar app experience rather than requiring users to install and switch between applications.
      </Callout>

      <h2 id="supported-platforms">Supported Platforms</h2>
      <p>
        The SDK supports Android 8 and above and iOS 14 and above. The cross-platform architecture is powered by Kotlin Multiplatform, enabling a single shared codebase for credential management logic while leveraging native hardware security components on each platform.
      </p>
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Minimum Version</th>
            <th>Core Technologies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Android</td>
            <td>8+</td>
            <td>Kotlin Multiplatform (KMP), Android TEE, <code>FLAG_SECURE</code></td>
          </tr>
          <tr>
            <td>iOS</td>
            <td>14+</td>
            <td>Kotlin Multiplatform (KMP), Apple Secure Element</td>
          </tr>
        </tbody>
      </table>
      <p>
        The architecture is also designed with forward compatibility in mind. Future integration with Apple Wallet and Google Wallet is planned as those platforms mature and publish stable APIs for standards-based credential management.
      </p>
    </ArticleWrapper>
  );
}
