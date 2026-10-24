import { articles } from '@/data/guide';
import { ArticleCard, PageIntro } from '@/components/EditorialComponents';

export const metadata = {
  title: 'Articles',
  description: 'Evidence-led articles on protein, food systems and the UK regulatory landscape.',
};

export default function ArticlesPage() {
  return (
    <>
      <PageIntro
        eyebrow="The journal"
        title="Articles"
        description="A small, considered stream of reporting and analysis. Each piece starts with sources, makes room for uncertainty and adds a perspective beyond the summary."
        image={{
          src: '/images/guide/hero-fields.jpg',
          alt: 'Sunset over a field of crops',
        }}
      />
      <section className="section">
        <div className="section__inner article-grid article-grid--listing">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
