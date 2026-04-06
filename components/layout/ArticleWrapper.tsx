import TableOfContents, { type TocItem } from '@/components/layout/TableOfContents';
import ArticleHeader from '@/components/content/ArticleHeader';
import ArticleNav from '@/components/content/ArticleNav';
import { getBreadcrumb, getPrevNext, getActiveSection } from '@/lib/navigation';
import { calculateReadingTime } from '@/lib/reading-time';

interface Props {
  href: string;
  title: string;
  contentText: string;
  toc: TocItem[];
  children: React.ReactNode;
}

export default function ArticleWrapper({ href, title, contentText, toc, children }: Props) {
  const breadcrumb = getBreadcrumb(href);
  const section = getActiveSection(href);
  const { prev, next } = getPrevNext(href);
  const readingTime = calculateReadingTime(contentText);

  return (
    <div className="flex gap-12 px-8 sm:px-12 py-12 max-w-[calc(740px+240px+96px)] mx-auto">
      <article className="flex-1 min-w-0 max-w-[740px]">
        <ArticleHeader
          breadcrumb={breadcrumb}
          title={title}
          readingTime={readingTime}
          section={section?.label ?? ''}
        />
        <div className="prose-content">
          {children}
        </div>
        <ArticleNav prev={prev} next={next} />
      </article>
      <TableOfContents items={toc} />
    </div>
  );
}
