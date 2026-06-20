export function WhyChoose() {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-900 border-y border-border py-16 md:py-24">
      <div className="px-6 max-w-[1280px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-secondary dark:text-white mb-12">
          Why Choose Liyana Finance?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Premium 1 */}
          <div className="bg-white dark:bg-zinc-950 p-8 border border-border flex flex-col items-center text-center shadow-sm">
            <div className="size-16 bg-primary/10 text-secondary dark:text-primary flex items-center justify-center mb-6">
              <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-secondary dark:text-white">Affordable Premiums</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              We offer funeral policies tailored to fit your budget, ensuring you get the coverage you need without financial strain.
            </p>
          </div>
          {/* Premium 2 */}
          <div className="bg-white dark:bg-zinc-950 p-8 border border-border flex flex-col items-center text-center shadow-sm">
            <div className="size-16 bg-primary/10 text-secondary dark:text-primary flex items-center justify-center mb-6">
              <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-secondary dark:text-white">Quick & Easy Application</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Our streamlined process makes it simple to apply and get covered quickly, so you can focus on what matters most.
            </p>
          </div>
          {/* Premium 3 */}
          <div className="bg-white dark:bg-zinc-950 p-8 border border-border flex flex-col items-center text-center shadow-sm">
            <div className="size-16 bg-primary/10 text-secondary dark:text-primary flex items-center justify-center mb-6">
              <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-secondary dark:text-white">Trusted Underwriting</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Partnered with reliable underwriters to guarantee your claims are secure and paid out promptly when you need them most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
