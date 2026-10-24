'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { getCategory } from '@/data/blog';
import BlogCard from './BlogCard';

export default function BlogSearch({ posts }) {
  const router = useRouter();
  const params = useSearchParams();
  const [term, setTerm] = useState(params.get('q') || '');
  const query = (params.get('q') || '').trim().toLowerCase();

  const results = useMemo(() => {
    if (!query) return [];
    return posts.filter((p) =>
      [p.title, p.author, getCategory(p.categoryId)?.name, ...p.body.map((b) => b.text)]
        .join(' ')
        .toLowerCase()
        .includes(query)
    );
  }, [posts, query]);

  return (
    <div className="blog-search">
      <form
        role="search"
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          const q = term.trim();
          router.replace(q ? `?q=${encodeURIComponent(q)}` : '?', { scroll: false });
        }}
      >
        <label htmlFor="blog-search" className="visually-hidden">
          Search articles
        </label>
        <input
          id="blog-search"
          type="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search articles, e.g. climate or CBD"
        />
        <button type="submit" className="btn btn--primary">
          Search
        </button>
      </form>

      <p className="search-summary" role="status" aria-live="polite">
        {query
          ? `${results.length} ${results.length === 1 ? 'article matches' : 'articles match'} “${params.get('q')}”.`
          : 'Enter a word or phrase to search all articles.'}
      </p>

      {query && results.length === 0 && (
        <p className="empty-note">Try a broader word, or browse by category in the sidebar.</p>
      )}

      <div className="post-list">
        {results.map((p) => (
          <BlogCard key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
