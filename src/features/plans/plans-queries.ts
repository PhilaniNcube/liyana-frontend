import { cache } from "react";
import "server-only";

export interface Plan {
  id: string;
  name: string;
  category: "individual" | "family";
  badge?: string;
  description: string;
  idealFor: string;
  coverAmount: number;
  premiumFrom: number;
}

export const getPlans = cache(async (): Promise<Plan[]> => {
  // Simulate database/API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: "ukuthula",
      name: "Ukuthula Plan",
      category: "individual",
      badge: "Essential",
      description: "Tailored for individuals seeking robust, straightforward protection.",
      idealFor: "Young professionals.",
      coverAmount: 6000,
      premiumFrom: 67,
    },
    {
      id: "ilanga",
      name: "Ilanga Plan",
      category: "individual",
      badge: "Premium",
      description: "Tailored for individuals seeking robust, straightforward protection.",
      idealFor: "Established individuals needing higher limits.",
      coverAmount: 10000,
      premiumFrom: 139,
    },
    {
      id: "elula-air",
      name: "Elula Air Plan",
      category: "family",
      description: "Extend your peace of mind to your loved ones with flexible family options.",
      idealFor: "Immediate family (Spouse + Children).",
      coverAmount: 12350,
      premiumFrom: 132.90,
    },
    {
      id: "ilifa",
      name: "Ilifa Plan",
      category: "family",
      badge: "Extended",
      description: "Extend your peace of mind to your loved ones with flexible family options.",
      idealFor: "Extended family including parents and in-laws.",
      coverAmount: 18500,
      premiumFrom: 203.60,
    },
  ];
});
