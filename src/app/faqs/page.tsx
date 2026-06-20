import { Suspense } from "react";
import { FAQsHero } from "@/features/faqs/components/faqs-hero";
import { FAQsList, FAQsListSkeleton } from "@/features/faqs/components/faqs-list";
import { ContactSupport } from "@/features/faqs/components/contact-support";

export default function FAQsPage() {
  return (
    <div className="w-full bg-background text-foreground font-sans">
      <FAQsHero />

      <section className="w-full max-w-3xl mx-auto px-6 py-16 md:py-24">
        <Suspense fallback={<FAQsListSkeleton />}>
          <FAQsList />
        </Suspense>
      </section>

      <ContactSupport />
    </div>
  );
}
