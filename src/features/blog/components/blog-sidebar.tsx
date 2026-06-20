"use client";

import { buttonVariants } from "@/components/ui/button";
import { NewsletterForm } from "./newsletter-form";
import { trackCTA } from "@/lib/gtm";

export function BlogSidebar() {
  return (
    <aside className="lg:col-span-4 flex flex-col gap-8">
      {/* Newsletter Signup (Client Leaf) */}
      <NewsletterForm />

      {/* Popular Categories */}
      <div className="bg-white dark:bg-zinc-900 border border-border p-6">
        <h3 className="text-lg font-bold text-secondary dark:text-white mb-4 pb-2 border-b border-border">
          Popular Categories
        </h3>
        <ul className="space-y-3">
          {[
            { name: "Financial Planning", count: 12 },
            { name: "Policy Guides", count: 8 },
            { name: "Grief & Support", count: 5 },
            { name: "Community News", count: 14 },
          ].map((cat, i) => (
            <li key={i}>
              <a href="#" className="flex justify-between items-center group text-sm">
                <span className="text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
                <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold text-xs px-2 py-0.5 group-hover:bg-primary group-hover:text-black transition-colors">
                  {cat.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Urgent Call to Action Widget */}
      <div className="bg-white dark:bg-zinc-900 border border-border p-6 relative overflow-hidden group">
        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out"></div>
        <h3 className="text-lg font-bold text-secondary dark:text-white mb-2 relative z-10">
          Need Immediate Cover?
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 relative z-10 leading-relaxed">
          Get a quote in minutes. Secure your family's future today with no medical exams required.
        </p>
        <a
          href="https://apply.liyanafinance.co.za"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackCTA({ text: "GET A QUOTE", location: "blog_sidebar", url: "https://apply.liyanafinance.co.za" })}
          className={buttonVariants({
            variant: "secondary",
            className: "w-full relative z-10 font-bold uppercase tracking-wider inline-flex items-center justify-center",
          })}
        >
          GET A QUOTE
        </a>
      </div>
    </aside>
  );
}
