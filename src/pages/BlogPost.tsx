import { Link, Navigate, useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 md:py-24">
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors"
          >
            ← Back to blog
          </Link>
        </div>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Insights
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl mb-12 border border-zinc-800 bg-zinc-950">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </div>

        <div
          className="blog-content text-zinc-300 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
