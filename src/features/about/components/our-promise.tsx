import { Eye, Heart, ShieldAlert } from "lucide-react";

export function OurPromise() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-16 md:py-24 flex flex-col gap-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white">Our Promise</h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          The pillars that define our commitment to your family's security and dignity.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Transparency */}
        <div className="border border-border bg-white dark:bg-zinc-950 p-8 flex flex-col gap-6 hover:bg-primary/5 transition-colors duration-300 group cursor-default">
          <div className="size-12 flex items-center justify-center bg-secondary text-white group-hover:bg-primary group-hover:text-secondary transition-colors">
            <Eye className="size-6" />
          </div>
          <h3 className="text-2xl font-bold text-secondary dark:text-white mt-2">Transparency</h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            We believe in clear, straightforward communication. Our policies are devoid of hidden clauses or unexpected fees. You will always know exactly what your premium covers and how to access it when the time comes.
          </p>
        </div>

        {/* Compassion (Highlighted Card) */}
        <div className="border border-border bg-white dark:bg-zinc-950 p-8 flex flex-col gap-6 hover:bg-primary/5 transition-colors duration-300 group cursor-default md:-mt-4 md:mb-4 shadow-sm border-t-4 border-t-primary">
          <div className="size-12 flex items-center justify-center bg-secondary text-white group-hover:bg-primary group-hover:text-secondary transition-colors">
            <Heart className="size-6" />
          </div>
          <h3 className="text-2xl font-bold text-secondary dark:text-white mt-2">Compassion</h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            Behind every policy is a family. We approach every interaction, especially during claims, with deep empathy and respect. Our process is designed to be supportive, removing administrative stress during your grieving period.
          </p>
        </div>

        {/* Reliability */}
        <div className="border border-border bg-white dark:bg-zinc-950 p-8 flex flex-col gap-6 hover:bg-primary/5 transition-colors duration-300 group cursor-default">
          <div className="size-12 flex items-center justify-center bg-secondary text-white group-hover:bg-primary group-hover:text-secondary transition-colors">
            <ShieldAlert className="size-6" />
          </div>
          <h3 className="text-2xl font-bold text-secondary dark:text-white mt-2">Reliability</h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            Trust is earned through consistent execution. We pride ourselves on rapid, hassle-free payouts. When you need us most, we promise to deliver the financial support you secured without unnecessary delays.
          </p>
        </div>
      </div>
    </section>
  );
}
