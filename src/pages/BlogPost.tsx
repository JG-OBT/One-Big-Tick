import { Navigate, useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <article className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400 mb-3">
          Blog
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          {post.title}
        </h1>

        <div className="flex items-center gap-3 text-sm text-zinc-400 mb-8">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <div className="overflow-hidden rounded-3xl mb-10 border border-zinc-800">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </div>

        <div
          className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
