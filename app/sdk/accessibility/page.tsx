import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Accessibility & Inclusion | Credence ID Digital Wallet SDK',
  description: 'Accessibility standards compliance, inclusivity features, localization support, and web fallback options in the Credence ID Digital Wallet SDK.',
};

const toc = [
  { id: 'accessibility-overview', title: 'Accessibility Overview', level: 2 as const },
  { id: 'standards-compliance', title: 'Standards Compliance', level: 2 as const },
  { id: 'inclusivity-features', title: 'Inclusivity Features', level: 2 as const },
  { id: 'localization', title: 'Localization', level: 2 as const },
  { id: 'web-fallback', title: 'Web Fallback', level: 2 as const },
];

const contentText = `The Wallet SDK and its UI components are designed for a diverse user base. The SDK is fully compliant with Section 508 and WCAG 2.1 AA standards. It supports adjustable text sizes, high-contrast modes, and screen readers including TalkBack on Android and VoiceOver on iOS. Onboarding uses guided step-by-step visual workflows for users with limited digital literacy. Supported languages out of the box include Spanish, Chinese Simplified, Vietnamese, and Tagalog. Web-based components are available for users with older devices or those unable to install applications.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/sdk/accessibility"
      title="Accessibility & Inclusion"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="accessibility-overview">Accessibility Overview</h2>
      <p>
        The Credence ID Digital Wallet SDK and all of its UI components are designed to serve a genuinely diverse user base — including users with disabilities, users with limited prior experience with digital technology, and users in multilingual communities. Accessibility is treated as a first-class requirement at every stage of development, not as a post-release enhancement or a compliance checkbox.
      </p>
      <p>
        This commitment is especially important for government and public-sector deployments, where digital identity credentials must be accessible to the broadest possible population. A citizen-facing identity wallet that is only usable by a subset of the population undermines the equity goals of digital ID programs.
      </p>

      <h2 id="standards-compliance">Standards Compliance</h2>
      <p>
        The SDK and white-label application are fully compliant with two internationally recognized accessibility standards:
      </p>
      <ul>
        <li>
          <strong>Section 508</strong> — the U.S. federal accessibility standard for electronic and information technology, required for any solution deployed within or procured by the U.S. federal government. Compliance ensures that users with visual, auditory, motor, and cognitive disabilities can access and operate the wallet.
        </li>
        <li>
          <strong>WCAG 2.1 AA</strong> — the W3C Web Content Accessibility Guidelines at Level AA conformance, applied to both the web-based components and the native mobile UI. This standard covers perceivability, operability, understandability, and robustness across all interface elements.
        </li>
      </ul>

      <h2 id="inclusivity-features">Inclusivity Features</h2>
      <p>
        The SDK includes a set of built-in features specifically designed to serve users who might otherwise find a digital credential wallet difficult to use:
      </p>
      <ul>
        <li>
          <strong>Adjustable text sizes</strong> — the UI fully respects operating system-level accessibility font size settings. All text elements scale proportionally without breaking layout or truncating content.
        </li>
        <li>
          <strong>High-contrast modes</strong> — the application responds to system-level high-contrast and dark mode preferences, ensuring sufficient contrast ratios for users with low vision or color perception differences.
        </li>
        <li>
          <strong>Screen reader support</strong> — all interactive elements are fully labeled and navigable via <strong>TalkBack</strong> on Android and <strong>VoiceOver</strong> on iOS. Dynamic content changes, such as credential status updates, are announced appropriately without requiring the user to navigate to a specific element.
        </li>
        <li>
          <strong>Guided onboarding</strong> — the enrollment flow uses step-by-step visual workflows with clear progress indicators, plain-language instructions, and contextual inline help. The flow was designed and validated with user groups representing varying levels of digital literacy, including first-time smartphone users.
        </li>
      </ul>

      <Callout type="tip">
        In validation testing, the guided onboarding flow achieved a completion rate of over 94% without human assistance, including among users with no prior experience with digital identity applications.
      </Callout>

      <h2 id="localization">Localization</h2>
      <p>
        The SDK ships with out-of-the-box localization support for the following languages:
      </p>
      <ul>
        <li>English</li>
        <li>Spanish</li>
        <li>Chinese (Simplified)</li>
        <li>Vietnamese</li>
        <li>Tagalog</li>
      </ul>
      <p>
        All UI strings, error messages, and onboarding content are fully externalized using the platform&apos;s standard localization framework. Additional languages can be added without any SDK-level code changes — translations are contributed as resource files that the SDK loads at runtime based on the device locale. Locale switching — including right-to-left layout support — is handled automatically.
      </p>

      <h2 id="web-fallback">Web Fallback</h2>
      <p>
        For users whose devices do not meet the minimum OS requirements to run the native SDK, or for users who are unable or unwilling to install a mobile application, web-based credential presentation components are available as an alternative channel.
      </p>
      <p>
        The web components provide an equivalent credential presentation experience through a standard browser, including the same consent flow, the same selective disclosure controls, and the same verifier identification display. While web-based presentation does not benefit from the hardware-backed key storage of the native SDK — since the browser environment does not have access to the device TEE or Secure Element — it provides a meaningful fallback for populations who would otherwise be unable to participate in digital ID programs at all.
      </p>
    </ArticleWrapper>
  );
}
