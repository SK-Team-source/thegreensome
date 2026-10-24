import PageBanner from './PageBanner';
import BlogSidebar from './BlogSidebar';
import { images } from '@/data/images';

// Shared frame for every blog view: original Blog banner, content column, sidebar.
export default function BlogLayout({ title, crumbs = [], intro, children }) {
  const isRoot = title === 'Blog';
  return (
    <>
      <PageBanner
        title={title}
        image={images.pages.blog}
        alt="TheGreenSome blog"
        crumbs={isRoot ? crumbs : [{ label: 'Blog', href: '/Blog' }, ...crumbs]}
      />
      <section className="section">
        <div className="container blog-layout">
          <div className="blog-layout__main">
            {intro && <p className="blog-intro">{intro}</p>}
            {children}
          </div>
          <BlogSidebar />
        </div>
      </section>
    </>
  );
}
