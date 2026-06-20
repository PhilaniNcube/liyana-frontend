import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="px-6 py-16 md:py-24 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 border border-border px-3 py-1 bg-white text-xs font-semibold tracking-wider uppercase">
          <span className="text-zinc-500">Authorized Financial Services Provider</span>
          <span className="w-1.5 h-1.5 bg-zinc-400"></span>
          <span className="text-secondary font-bold dark:text-primary">FSP 12345</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-secondary dark:text-white">
          Peace of Mind for You and <br />
          <span className="text-zinc-500 font-medium">Your Loved Ones</span>
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed">
          Liyana Finance specialises in providing affordable and reliable funeral cover to help you navigate life’s unexpected challenges with dignity and support.
        </p>
        <div className="pt-4 flex flex-wrap gap-4">
          <a
            href="https://apply.liyanafinance.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "default",
              className: "h-12 px-8 text-base font-semibold uppercase tracking-wider inline-flex items-center justify-center",
            })}
          >
            Apply Now
          </a>
          <Link
            href="/plans"
            className={buttonVariants({
              variant: "outline",
              className: "h-12 px-8 text-base font-medium border border-black uppercase tracking-wider hover:bg-zinc-100 inline-flex items-center justify-center",
            })}
          >
            Compare Our Plans
          </Link>
        </div>
      </div>
      {/* Hero Image */}
      <div className="flex justify-center items-center">
        <img
          alt="Liyana Finance Services Illustration"
          className="w-full max-w-md h-auto object-contain drop-shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
          src="https://lh3.googleusercontent.com/aida/AP1WRLuqdIfJlQXjsdyKf74o-K5twDrdygfygGh59hPRNcAwl46r75dm1Mvz_fbxhvtlrQQNL81kHx46NSfxYhqBLUR_NLfPwE3whXKdEJSwg98U2bYr3ibvVBPjb0tHaG1yOr4DRyOITLrexTGd-cuM4iDaO1KGFFLQu3OS74rgTPLFqgLkWW0S3tQgnKrvO_ZrggNL3aLWwKXLGlvPMW1omfwHeg3NVGX4v6_TcQKB0N8NrR1ryo3rxlhLaag"
        />
      </div>
    </section>
  );
}
