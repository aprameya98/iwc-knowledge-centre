import type { Metadata } from 'next';
import ArticleWrapper from '@/components/layout/ArticleWrapper';

export const metadata: Metadata = {
  title: 'Wallet User Journey | Credence ID Wallet',
  description: 'The end-to-end user journey for the Credence ID Wallet.',
};

const toc: Array<{ id: string; title: string; level: 2 | 3 }> = [];

const contentText = '';

export default function Page() {
  return (
    <ArticleWrapper
      href="/holder/wallet-user-journey"
      title="Wallet User Journey"
      contentText={contentText}
      toc={toc}
    >
      <></>
    </ArticleWrapper>
  );
}
