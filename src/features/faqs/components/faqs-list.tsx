import { Skeleton } from "@/components/ui/skeleton";
import { getFAQs } from "../faqs-queries";
import { FAQAccordion } from "./faq-accordion";

export async function FAQsList() {
  const faqs = await getFAQs();
  return <FAQAccordion items={faqs} />;
}

export function FAQsListSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="border border-border bg-white dark:bg-zinc-900 p-6 flex justify-between items-center">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-5 w-5 rounded-full" />
        </div>
      ))}
    </div>
  );
}
