import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../content/posts';

function fmtDate(s) {
  return new Date(s).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <section className="section">
        <div className="container">
          <p className="lead">Post not found.</p>
          <Link to="/blog" className="btn btn-outline mt-4">Back to blog</Link>
        </div>
      </section>
    );
  }

  return (
    <article className="section">
      <div className="container">
        <Link to="/blog" className="text-sm text-brand-700 hover:underline">← Back to blog</Link>
        <h1 className="h1 mt-3">{post.title}</h1>
        <p className="text-sm text-slate-500 mt-2">{fmtDate(post.date)} · {post.author}</p>
        {post.coverImage && (
          <img src={post.coverImage} alt={post.title} className="w-full rounded-2xl mt-6" />
        )}
        {/* Render trusted HTML from the content string */}
        <div
          className="prose prose-slate max-w-none mt-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        {post.tags?.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
