import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function Blog() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400 mb-3">
            Blog
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Insights & Articles
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl text-lg">
            Thoughts, ideas, and practical insight from the world of growth, strategy, and execution.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 hover:border-zinc-700 transition"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-zinc-400 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-2xl font-semibold tracking-tight mb-3 group-hover:text-zinc-300 transition">
                  {post.title}
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
