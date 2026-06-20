export function AboutHero() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2 flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-secondary dark:text-white">
          About Liyana Finance
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium">
          A New Chapter Focused on Protecting Your Family.
        </p>
        <div className="h-1.5 w-24 bg-primary mt-2"></div>
      </div>
      <div className="lg:w-1/2 w-full">
        <img
          alt="Warm and comforting family imagery"
          className="w-full h-auto object-cover border border-border grayscale contrast-125 hover:grayscale-0 transition-all duration-700 shadow-sm"
          src="https://lh3.googleusercontent.com/aida/AP1WRLuqdIfJlQXjsdyKf74o-K5twDrdygfygGh59hPRNcAwl46r75dm1Mvz_fbxhvtlrQQNL81kHx46NSfxYhqBLUR_NLfPwE3whXKdEJSwg98U2bYr3ibvVBPjb0tHaG1yOr4DRyOITLrexTGd-cuM4iDaO1KGFFLQu3OS74rgTPLFqgLkWW0S3tQgnKrvO_ZrggNL3aLWwKXLGlvPMW1omfwHeg3NVGX4v6_TcQKB0N8NrR1ryo3rxlhLaag"
        />
      </div>
    </section>
  );
}
