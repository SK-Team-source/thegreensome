import Link from 'next/link';

export const metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="section__inner">
        <p className="eyebrow">404 · Page not found</p>
        <h1>This page isn’t here.</h1>
        <p>The address may have changed. Return to the homepage or explore the guide.</p>
        <Link href="/protein-sources">Explore protein sources ↗</Link>
      </div>
    </section>
  );
}
