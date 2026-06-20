import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getFeaturedPost, getRecentPosts } from "../blog-queries";

export async function BlogPosts() {
  const [featuredPost, recentPosts] = await Promise.all([
    getFeaturedPost(),
    getRecentPosts(),
  ]);

  return (
    <div className="flex flex-col gap-8">
      {/* Featured Post */}
      <article className="group relative bg-secondary dark:bg-zinc-950 border border-border overflow-hidden cursor-pointer">
        <div className="aspect-[16/9] w-full overflow-hidden relative bg-zinc-900">
          {featuredPost.imageUrl && (
            <img
              alt="Featured Post Image"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
              src={featuredPost.imageUrl}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-black font-semibold text-xs px-3 py-1 uppercase tracking-wider">
              Featured Guide
            </span>
          </div>
          <div className="absolute bottom-0 left-0 p-6 w-full space-y-2">
            <div className="flex items-center space-x-2 text-primary text-xs font-semibold uppercase tracking-wider">
              <span>{featuredPost.category}</span>
              <span>•</span>
              <span>{featuredPost.date}</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              {featuredPost.title}
            </h2>
            <p className="text-zinc-300 text-sm md:text-base line-clamp-2 max-w-2xl">
              {featuredPost.description}
            </p>
            <div className="inline-flex items-center text-primary font-bold text-xs uppercase tracking-widest gap-1 group-hover:text-white transition-colors pt-2">
              READ MORE <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </article>

      {/* Recent Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recentPosts.map((post, i) => (
          <article
            key={i}
            className="bg-white dark:bg-zinc-900 border border-border hover:border-black dark:hover:border-primary transition-colors flex flex-col h-full group cursor-pointer"
          >
            <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-950 overflow-hidden relative">
              {post.imageUrl ? (
                <img
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src={post.imageUrl}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-secondary dark:bg-zinc-950">
                  <span className="text-primary/20 font-black text-3xl tracking-widest uppercase">
                    {post.category}
                  </span>
                </div>
              )}
            </div>
            <div className="p-6 flex flex-col flex-grow gap-3">
              <div className="flex items-center space-x-2 text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                <span className="text-secondary dark:text-primary font-bold">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-lg font-bold text-secondary dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3 flex-grow leading-relaxed">
                {post.description}
              </p>
              <div className="inline-flex items-center text-secondary dark:text-primary font-bold text-xs uppercase tracking-widest gap-1 pt-2 w-max">
                READ ARTICLE <ArrowUpRight className="size-3.5" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Action */}
      <div className="mt-4 flex justify-center">
        <Button
          variant="outline"
          className="border border-black px-8 py-6 text-sm font-bold uppercase tracking-wider hover:bg-zinc-100"
        >
          LOAD MORE POSTS <ChevronDown className="size-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}

export function BlogPostsSkeleton() {
  return (
    <div className="flex flex-col gap-8">
      {/* Featured Post Skeleton */}
      <div className="border border-border bg-secondary dark:bg-zinc-950 overflow-hidden aspect-[16/9] w-full p-6 flex flex-col justify-end gap-3 relative">
        <Skeleton className="absolute top-4 left-4 h-6 w-32 bg-zinc-800" />
        <Skeleton className="h-4 w-40 bg-zinc-800" />
        <Skeleton className="h-8 w-3/4 bg-zinc-800" />
        <Skeleton className="h-4 w-1/2 bg-zinc-800" />
        <Skeleton className="h-4 w-28 bg-zinc-800" />
      </div>

      {/* Recent Posts Skeleton Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="border border-border bg-white dark:bg-zinc-900 flex flex-col gap-4 p-6">
            <Skeleton className="aspect-video w-full" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-6 w-3/4" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-5/6" />
            </div>
            <Skeleton className="h-4 w-28 mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
