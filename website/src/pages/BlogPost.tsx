import { Link, useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { POSTS } from "./blog-data";
import NotFound from "./not-found";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = POSTS.find((p) => p.slug === params?.slug);
  if (!post) return <NotFound />;

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <main className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </button>
          </Link>
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">{post.title}</h1>
          <p className="text-sm text-muted-foreground mb-10">
            {post.author} · {post.date} · {post.readTime}
          </p>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            {post.body.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
