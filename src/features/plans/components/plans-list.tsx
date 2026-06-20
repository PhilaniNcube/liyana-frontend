import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getPlans } from "../plans-queries";

export async function PlansList() {
  const plans = await getPlans();
  const individualPlans = plans.filter((p) => p.category === "individual");
  const familyPlans = plans.filter((p) => p.category === "family");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Single Member Plans Card (Bento Style) */}
      <div className="border border-border bg-white dark:bg-zinc-950 p-8 flex flex-col justify-between hover:border-black dark:hover:border-primary transition-colors">
        <div>
          <div className="inline-block bg-zinc-100 dark:bg-zinc-900 border border-border px-3 py-1 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Single Member Plans
            </span>
          </div>
          <h3 className="text-2xl font-bold text-secondary dark:text-white mb-2">Individual Cover</h3>
          <p className="text-zinc-500 text-sm mb-8">
            Tailored for individuals seeking robust, straightforward protection.
          </p>
          <div className="space-y-6">
            {individualPlans.map((plan) => (
              <div key={plan.id} className="p-5 border border-border bg-zinc-50 dark:bg-zinc-900">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-secondary dark:text-white text-lg">{plan.name}</h4>
                  {plan.badge && (
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 ${plan.badge === "Premium"
                          ? "bg-primary text-black"
                          : "bg-secondary text-white dark:bg-zinc-800 dark:text-primary"
                        }`}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="text-zinc-500 text-xs mb-4">Ideal for: {plan.idealFor}</p>
                <div className="flex justify-between items-end border-t border-border pt-4">
                  <div>
                    <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Cover Amount</span>
                    <span className="text-xl font-bold text-secondary dark:text-white">
                      R{plan.coverAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Premium From</span>
                    <span className="text-xl font-bold text-secondary dark:text-white">
                      R{plan.premiumFrom}
                      <span className="text-xs text-zinc-400 font-normal">/mo</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <Button variant="outline" className="mt-8 w-full border border-zinc-400">
          View Individual Options
        </Button> */}
      </div>

      {/* Family Plans Card (Bento Style - Highlighted) */}
      <div className="bg-secondary dark:bg-zinc-950 text-white p-8 flex flex-col justify-between relative overflow-hidden border border-zinc-800 border-t-4 border-t-primary">
        <div className="relative z-10">
          <div className="inline-block bg-zinc-900 px-3 py-1 mb-6 border border-zinc-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Family Plans
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Comprehensive Family Cover</h3>
          <p className="text-zinc-400 text-sm mb-8">
            Extend your peace of mind to your loved ones with flexible family options.
          </p>
          <div className="space-y-6">
            {familyPlans.map((plan) => (
              <div key={plan.id} className="p-5 border border-zinc-800 bg-zinc-900/60">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-white text-lg">{plan.name}</h4>
                  {plan.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-primary text-black px-2.5 py-0.5">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="text-zinc-500 text-xs mb-4">Ideal for: {plan.idealFor}</p>
                <div className="flex justify-between items-end border-t border-zinc-800 pt-4">
                  <div>
                    <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Cover Amount</span>
                    <span className="text-xl font-bold text-white">R{plan.coverAmount.toLocaleString()}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Premium From</span>
                    <span className="text-xl font-bold text-primary">
                      R{plan.premiumFrom}
                      <span className="text-xs text-zinc-400 font-normal">/mo</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <Button variant="default" className="mt-8 w-full font-bold relative z-10">
          Configure Family Plan
        </Button> */}
      </div>
    </div>
  );
}

export function PlansListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Individual Skeleton */}
      <div className="border border-border bg-white dark:bg-zinc-950 p-8 flex flex-col justify-between">
        <div>
          <Skeleton className="h-6 w-32 mb-6" />
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-64 mb-8" />
          <div className="space-y-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="p-5 border border-border bg-zinc-50 dark:bg-zinc-900 space-y-4">
                <div className="flex justify-between items-center">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-3 w-40" />
                <div className="border-t border-border pt-4 flex justify-between">
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-5 w-20" />
                  </div>
                  <div className="space-y-2 text-right">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-5 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Skeleton className="h-10 w-full mt-8" />
      </div>

      {/* Family Skeleton */}
      <div className="border border-zinc-800 bg-secondary dark:bg-zinc-950 p-8 flex flex-col justify-between border-t-4 border-t-primary">
        <div>
          <Skeleton className="h-6 w-32 mb-6 bg-zinc-700" />
          <Skeleton className="h-8 w-48 mb-2 bg-zinc-700" />
          <Skeleton className="h-4 w-64 mb-8 bg-zinc-700" />
          <div className="space-y-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="p-5 border border-zinc-800 bg-zinc-900 space-y-4">
                <div className="flex justify-between items-center">
                  <Skeleton className="h-6 w-32 bg-zinc-700" />
                  <Skeleton className="h-4 w-16 bg-zinc-700" />
                </div>
                <Skeleton className="h-3 w-40 bg-zinc-700" />
                <div className="border-t border-zinc-800 pt-4 flex justify-between">
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-16 bg-zinc-700" />
                    <Skeleton className="h-5 w-20 bg-zinc-700" />
                  </div>
                  <div className="space-y-2 text-right">
                    <Skeleton className="h-3 w-16 bg-zinc-700" />
                    <Skeleton className="h-5 w-20 bg-zinc-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Skeleton className="h-10 w-full mt-8 bg-zinc-700" />
      </div>
    </div>
  );
}
