"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/lib/gtm";

function GtmTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryString = searchParams.toString();
    const url = pathname + (queryString ? `?${queryString}` : "");
    trackPageView({ url });
  }, [pathname, searchParams]);

  return null;
}

export function GtmTracker() {
  return (
    <Suspense fallback={null}>
      <GtmTrackerInner />
    </Suspense>
  );
}
