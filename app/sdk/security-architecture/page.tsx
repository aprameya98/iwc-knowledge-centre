import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Security Architecture | Credence ID Digital Wallet SDK',
  description: 'The multi-layered security architecture of the Credence ID Digital Wallet SDK, covering hardware-backed key storage, RASP, secure UI, and backend anomaly detection.',
};

const toc = [
  { id: 'security-posture', title: 'Security Posture', level: 2 as const },
  { id: 'hardware-protection', title: 'Hardware Protection & Anti-Cloning', level: 2 as const },
  { id: 'anti-tampering', title: 'Anti-Tampering & Fraud Mitigation', level: 2 as const },
];

const contentText = `The SDK aligns with NIST AAL2 with AAL3 on the roadmap for Q3 2026 and employs a multi-layered security approach to protect data at rest and in transit. Keys and credentials are bound to non-exportable hardware-backed ECDSA P-256 key pairs stored in the Android Trusted Execution Environment or iOS Secure Element. OS-level biometric authentication and PIN registration are required and the private key never leaves the device. The RASP layer detects root, jailbreak, hooking frameworks such as Frida and Xposed, debuggers, emulators, and overlay attacks, immediately terminating sessions. FLAG_SECURE on Android blocks screenshots and screen recording of sensitive data. Backend monitoring detects simultaneous device bindings, rapid request and revoke cycles, and geographic anomalies.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/sdk/security-architecture"
      title="Security Architecture"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="security-posture">Security Posture</h2>
      <p>
        The Credence ID Digital Wallet SDK aligns with <strong>NIST Authenticator Assurance Level 2 (AAL2)</strong>, with AAL3 on the roadmap for Q3 2026. It employs a multi-layered security approach that protects credential data at rest, in transit, and during the presentation interaction. Security is enforced simultaneously at the hardware level, the operating system level, and the application runtime level — no single layer is relied upon exclusively.
      </p>

      <Callout type="important">
        The private key never leaves the device. All cryptographic signing operations — including credential binding and presentation — occur entirely inside the Trusted Execution Environment or Secure Element. The key material cannot be extracted by any software process, including OS-level privileged processes or forensic imaging.
      </Callout>

      <h2 id="hardware-protection">Hardware Protection & Anti-Cloning</h2>
      <p>
        <strong>Secure Storage:</strong> Credential keys are bound to non-exportable, hardware-backed <strong>ECDSA P-256 key pairs</strong>. On Android, these are generated and stored inside the <strong>Trusted Execution Environment (TEE)</strong> — an isolated processor environment that is separated from the main OS and inaccessible to application code or even root-privileged processes. On iOS, the equivalent is the <strong>Apple Secure Element</strong>, a dedicated security chip that provides the same hardware isolation guarantees.
      </p>
      <p>
        Because the key pair is non-exportable and hardware-bound, credential cloning is cryptographically impossible. Even if an attacker obtained a full filesystem image of the device, the private key would not be present in any extractable form. A credential is permanently and exclusively tied to the device on which it was issued.
      </p>
      <p>
        <strong>Biometric Gate:</strong> Before any cryptographic operation — including presentation — OS-level biometric authentication (fingerprint or face recognition) or PIN entry is required. This ensures that physical possession of the device alone is not sufficient to use a stored credential. The biometric challenge is handled entirely by the operating system, meaning the wallet application never has access to the raw biometric data.
      </p>

      <h2 id="anti-tampering">Anti-Tampering & Fraud Mitigation</h2>
      <p>
        <strong>RASP Layer:</strong> The SDK includes a <strong>Runtime Application Self-Protection (RASP)</strong> layer that continuously monitors the environment in which the app is running. Upon detecting any of the following conditions, the RASP layer immediately terminates the session and prevents credential access:
      </p>
      <ul>
        <li>Root or jailbreak environments, which remove the OS-level security boundary the TEE depends on</li>
        <li>Hooking frameworks such as Frida or Xposed, which are commonly used to intercept and modify application behaviour at runtime</li>
        <li>Active debugger attachment, which could allow memory inspection or step-through execution of cryptographic routines</li>
        <li>Emulators or virtualized environments, which lack genuine hardware security modules</li>
        <li>Overlay attacks, where a malicious app renders a transparent UI layer over the wallet to intercept touch input during a presentation flow</li>
      </ul>
      <p>
        <strong>Secure Window:</strong> On Android, the SDK uses <code>FLAG_SECURE</code> on all windows that display sensitive data, including credential details and QR codes generated for in-person presentation. This system flag prevents the contents of those windows from appearing in screenshots, screen recordings, or being captured by other applications running in the background.
      </p>
      <p>
        <strong>Backend Monitoring:</strong> The server-side infrastructure complements device-level protections by monitoring for anomalous patterns across all devices bound to a credential. The system flags and investigates situations including simultaneous active bindings on multiple devices for the same credential, rapid sequences of credential request and revocation that may indicate automated probing, and geographic anomalies such as presentations occurring in locations inconsistent with the holder&apos;s profile or recent activity.
      </p>
    </ArticleWrapper>
  );
}
