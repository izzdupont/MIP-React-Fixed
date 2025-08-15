import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../content/posts';

function fmtDate(s) {
  return new Date(s).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogList() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">Blog</h1>
        <p className="lead mt-3">Insights, tips, and news from the Midwest IT Provider team.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.slug} className="card">
              {p.coverImage && (
                <img src={p.coverImage} alt={p.title} className="w-full rounded-xl mb-4" />
              )}
              <h2 className="text-2xl font-bold">
                <Link to={`/blog/${p.slug}`} className="hover:text-brand-700">{p.title}</Link>
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                {fmtDate(p.date)} · {p.author}
              </p>
              <p className="mt-3 text-slate-700">{p.excerpt}</p>
              {p.tags?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              )}
              <div className="mt-6">
                <Link to={`/blog/${p.slug}`} className="btn btn-outline">Read more</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
