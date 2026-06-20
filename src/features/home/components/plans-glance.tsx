"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { trackCTA } from "@/lib/gtm";

export function PlansGlance() {
  return (
    <section className="px-6 py-16 md:py-24 max-w-[1280px] mx-auto" id="plans">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-secondary dark:text-white mb-12">
        Our Funeral Plans at a Glance
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Ukuthula */}
        <div className="bg-secondary text-white p-8 flex flex-col border border-zinc-800 hover:-translate-y-1 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-primary mb-3">Ukuthula</h3>
          <p className="text-zinc-400 text-sm mb-8 flex-grow">Essential coverage for essential peace of mind.</p>
          <Link
            href="/plans"
            onClick={() => trackCTA({ text: "View Details - Ukuthula", location: "plans_glance", url: "/plans" })}
            className={buttonVariants({
              variant: "default",
              className: "w-full inline-flex items-center justify-center",
            })}
          >
            View Details
          </Link>
        </div>
        {/* Ilanga */}
        <div className="bg-secondary text-white p-8 flex flex-col border border-zinc-800 hover:-translate-y-1 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-primary mb-3">Ilanga</h3>
          <p className="text-zinc-400 text-sm mb-8 flex-grow">Brightening your tomorrow with comprehensive benefits.</p>
          <Link
            href="/plans"
            onClick={() => trackCTA({ text: "View Details - Ilanga", location: "plans_glance", url: "/plans" })}
            className={buttonVariants({
              variant: "default",
              className: "w-full inline-flex items-center justify-center",
            })}
          >
            View Details
          </Link>
        </div>
        {/* Elula Air */}
        <div className="bg-secondary text-white p-8 flex flex-col border border-zinc-800 hover:-translate-y-1 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-primary mb-3">Elula Air</h3>
          <p className="text-zinc-400 text-sm mb-8 flex-grow">Light and flexible plans designed for your convenience.</p>
          <Link
            href="/plans"
            onClick={() => trackCTA({ text: "View Details - Elula Air", location: "plans_glance", url: "/plans" })}
            className={buttonVariants({
              variant: "default",
              className: "w-full inline-flex items-center justify-center",
            })}
          >
            View Details
          </Link>
        </div>
        {/* Ilifa (Highlighted Premium Plan) */}
        <div className="bg-secondary text-white p-8 flex flex-col border-2 border-primary relative hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 -mt-3.5 mr-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-black bg-primary px-3 py-1 shadow-sm">
              Premium
            </span>
          </div>
          <h3 className="text-2xl font-bold text-primary mb-3 mt-2">Ilifa</h3>
          <p className="text-zinc-400 text-sm mb-8 flex-grow">Securing your legacy with our highest tier of coverage.</p>
          <Link
            href="/plans"
            onClick={() => trackCTA({ text: "View Details - Ilifa", location: "plans_glance", url: "/plans" })}
            className={buttonVariants({
              variant: "default",
              className: "w-full inline-flex items-center justify-center",
            })}
          >
            View Details
          </Link>
        </div>
      </div>
    </section>
  );
}
