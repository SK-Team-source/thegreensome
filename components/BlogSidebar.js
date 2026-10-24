import Link from 'next/link';
import { archiveMonths, archivePath, categories, categoryPath, monthName, postsInCategory } from '@/data/blog';

export default function BlogSidebar() {
  return (
    <aside className="blog-sidebar" aria-label="Blog navigation">
      <nav aria-label="Blog views" className="blog-sidebar__block">
        <h2 className="blog-sidebar__title">Browse</h2>
        <ul className="blog-sidebar__list">
          <li><Link href="/Blog">Current Articles</Link></li>
          <li><Link href="/Blog/articleType/Archives">Archives</Link></li>
          <li><Link href="/Blog/articleType/Search">Search</Link></li>
          <li><a href="/Blog/rss.xml">RSS feed</a></li>
        </ul>
      </nav>
      <div className="blog-sidebar__block">
        <h2 className="blog-sidebar__title">Categories</h2>
        <ul className="blog-sidebar__list">
          {categories.map((c) => (
            <li key={c.id}>
              <Link href={categoryPath(c)}>{c.name}</Link>
              <span className="count">{postsInCategory(c.id).length}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="blog-sidebar__block">
        <h2 className="blog-sidebar__title">Archives</h2>
        <ul className="blog-sidebar__list">
          {archiveMonths().map((a) => (
            <li key={`${a.year}-${a.month}`}>
              <Link href={archivePath(a.month, a.year)}>
                {monthName(a.month)} {a.year}
              </Link>
              <span className="count">{a.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
