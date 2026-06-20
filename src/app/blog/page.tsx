import { Suspense } from "react";
import { BlogHero } from "@/features/blog/components/blog-hero";
import { BlogPosts, BlogPostsSkeleton } from "@/features/blog/components/blog-posts";
import { BlogSidebar } from "@/features/blog/components/blog-sidebar";

export default function BlogPage() {
  return (
    <div className="w-full bg-background text-foreground font-sans">
      <BlogHero />

      {/* Main Content Grid */}
      <div className="px-6 max-w-[1280px] mx-auto pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Featured & Recent Posts */}
        <div className="lg:col-span-8">
          <Suspense fallback={<BlogPostsSkeleton />}>
            <BlogPosts />
          </Suspense>
        </div>

        {/* Right Column: Sidebar */}
        <BlogSidebar />
      </div>
    </div>
  );
}
