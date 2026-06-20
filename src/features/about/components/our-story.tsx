import { BookOpen } from "lucide-react";

export function OurStory() {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-900 py-16 md:py-24 border-y border-border">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-secondary dark:text-white">Our Story</h2>
          <BookOpen className="text-primary size-12 mt-2" />
        </div>
        <div className="md:col-span-8 flex flex-col gap-6">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Liyana Finance was founded with a singular purpose: to provide accessible financial support to our community. For many years, we operated as a dedicated provider of personal loans, helping individuals manage unexpected expenses and bridge financial gaps.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            However, as we grew alongside our clients, we recognized a recurring theme. The true financial strain for many families arose not from daily living, but from the sudden, profound impact of losing a loved one. The burden of arranging a dignified farewell often placed families in prolonged financial distress.
          </p>
          <div className="bg-secondary text-white dark:bg-zinc-950 p-6 border-l-4 border-primary mt-2">
            <p className="text-lg italic leading-relaxed">
              &ldquo;This realization prompted a fundamental pivot in our business model. We chose to transition away from personal lending to dedicate our resources entirely to funeral insurance policies.&rdquo;
            </p>
          </div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Today, our focus is resolute: ensuring that families have the necessary coverage to grieve with peace of mind. We replaced the complexity of loan repayments with the straightforward security of comprehensive funeral cover.
          </p>
        </div>
      </div>
    </section>
  );
}
