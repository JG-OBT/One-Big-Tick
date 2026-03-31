import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function Blog() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Insights
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Thinking about growth,
            <br />
            execution, and deals
          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Practical insights from building, fixing, and scaling real businesses.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-zinc-400 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-2 group-hover:text-white transition">
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
