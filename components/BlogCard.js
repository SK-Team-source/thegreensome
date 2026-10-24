import Image from 'next/image';
import Link from 'next/link';
import { categoryPath, excerpt, formatDate, getCategory, postPath } from '@/data/blog';
import { imageSrc } from '@/data/images';

export default function BlogCard({ post, priority = false }) {
  const category = getCategory(post.categoryId);
  return (
    <article className="post-card">
      <Link href={postPath(post)} className="post-card__media" tabIndex={-1} aria-hidden="true">
        <Image
          src={imageSrc(post.image)}
          alt=""
          fill
          sizes="(min-width: 1100px) 22rem, (min-width: 700px) 40vw, 100vw"
          className="post-card__image"
          priority={priority}
        />
      </Link>
      <div className="post-card__body">
        <p className="post-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.author && <span>by {post.author}</span>}
          {category && <Link href={categoryPath(category)}>{category.name}</Link>}
        </p>
        <h2 className="post-card__title">
          <Link href={postPath(post)}>{post.title}</Link>
        </h2>
        <p className="post-card__excerpt">{excerpt(post)}</p>
        <Link href={postPath(post)} className="text-link">
          Read the article<span className="visually-hidden">: {post.title}</span>
        </Link>
      </div>
    </article>
  );
}
