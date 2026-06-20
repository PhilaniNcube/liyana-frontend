import { Suspense } from "react";
import { PlansHero } from "@/features/plans/components/plans-hero";
import { PlansList, PlansListSkeleton } from "@/features/plans/components/plans-list";
import { PremiumCalculator } from "@/features/plans/components/premium-calculator";

export default function PlansPage() {
  return (
    <div className="w-full bg-background text-foreground font-sans">
      <PlansHero />

      {/* Plans Section */}
      <section className="bg-zinc-50 dark:bg-zinc-900 py-16 md:py-24 border-t border-border">
        <div className="px-6 max-w-[1280px] mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary dark:text-white">
              Choose Your Protection
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Select between comprehensive single member cover or extended family protection tailored to your exact needs.
            </p>
          </div>

          <Suspense fallback={<PlansListSkeleton />}>
            <PlansList />
          </Suspense>
        </div>
      </section>

      {/* <PremiumCalculator /> */}
    </div>
  );
}
