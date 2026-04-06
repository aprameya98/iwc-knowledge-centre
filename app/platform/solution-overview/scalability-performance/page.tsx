import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';
import Callout from '@/components/content/Callout';

export const metadata: Metadata = {
  title: 'Scalability & Performance | Issuance with Credence Solution Overview',
  description: 'IwC throughput, availability targets, and proven production scale metrics.',
};

const toc = [
  { id: 'performance-metrics', title: 'Performance Metrics', level: 2 as const },
  { id: 'proven-scale', title: 'Proven at Scale', level: 2 as const },
  { id: 'architecture', title: 'How IwC Scales', level: 2 as const },
];

const contentText = `IwC is designed to handle national-scale credential programs with millions of holders and high-throughput issuance operations. The platform supports up to 160000 enrollments per day and 4.4 million authentications per day in production deployments. Availability target is 99.9 percent uptime. Credential issuance latency from trigger to signed credential is under 2 seconds under normal load. OpenID4VCI activation completes in under 10 seconds. The architecture uses horizontal auto-scaling for the issuance service and a multi-node CloudHSM cluster for signing throughput. All components are stateless and container-based enabling rapid scale-out.`;

export default function Page() {
  return (
    <ArticleWrapper
      href="/platform/solution-overview/scalability-performance"
      title="Scalability & Performance"
      contentText={contentText}
      toc={toc}
    >
      <h2 id="performance-metrics">Performance Metrics</h2>
      <p>
        IwC is designed to handle national-scale credential programs — millions of holders, high-throughput issuance bursts, and continuous lifecycle operations — without degradation in performance or availability.
      </p>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Target</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Platform Availability</td>
            <td>99.9% uptime (production SLA)</td>
          </tr>
          <tr>
            <td>Credential Issuance Latency</td>
            <td>&lt;2 seconds (trigger to signed credential, p95)</td>
          </tr>
          <tr>
            <td>OpenID4VCI Activation</td>
            <td>&lt;10 seconds (offer tap to credential in wallet)</td>
          </tr>
          <tr>
            <td>Status Update Propagation (W3C VC)</td>
            <td>&lt;60 seconds (suspension/revocation visible to online verifiers)</td>
          </tr>
          <tr>
            <td>API Response Time</td>
            <td>&lt;500ms (issuance trigger and status query endpoints, p95)</td>
          </tr>
          <tr>
            <td>Concurrent Sessions</td>
            <td>Unlimited — horizontal auto-scaling, no per-session state</td>
          </tr>
        </tbody>
      </table>

      <h2 id="proven-scale">Proven at Scale</h2>
      <p>
        IwC is not benchmarked at scale — it is <em>deployed</em> at scale. The platform has been validated in production environments handling:
      </p>
      <table>
        <thead>
          <tr>
            <th>Workload</th>
            <th>Proven Volume</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Daily enrollments</td>
            <td>160,000 per day</td>
          </tr>
          <tr>
            <td>Daily authentications</td>
            <td>4,400,000 per day</td>
          </tr>
          <tr>
            <td>Credentials under management</td>
            <td>Millions — across multi-tenant, multi-issuer deployments</td>
          </tr>
          <tr>
            <td>Concurrent issuance burst</td>
            <td>High-volume batch issuance following approval processing events</td>
          </tr>
        </tbody>
      </table>
      <Callout type="note">
        These figures reflect real production deployments, not laboratory benchmarks. Performance in your deployment will vary based on network topology, credential template complexity, and HSM cluster configuration.
      </Callout>

      <h2 id="architecture">How IwC Scales</h2>
      <p>
        IwC&apos;s scalability is an architectural property, not an operational workaround:
      </p>
      <ul>
        <li>
          <strong>Stateless Issuance Service:</strong> The credential engine is fully stateless and containerized. Additional instances are spun up automatically under load and retired when demand drops — with no manual intervention and no reconfiguration.
        </li>
        <li>
          <strong>Multi-Node CloudHSM Cluster:</strong> Signing throughput scales horizontally by adding HSM nodes to the cluster. Each node handles signing operations independently; the cluster load-balances across all active nodes.
        </li>
        <li>
          <strong>Distributed Status List Service:</strong> The W3C StatusList2021 service is independently scalable and CDN-cacheable — serving millions of status check requests without load on the core issuance infrastructure.
        </li>
        <li>
          <strong>Queue-Based Issuance Pipeline:</strong> Issuance requests are queued and processed asynchronously, smoothing out burst traffic and preventing back-pressure on the HSM signing service.
        </li>
      </ul>
    </ArticleWrapper>
  );
}
