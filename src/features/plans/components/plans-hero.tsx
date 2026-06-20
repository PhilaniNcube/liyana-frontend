import { Button, buttonVariants } from "@/components/ui/button";

export function PlansHero() {
  return (
    <section className="px-6 py-16 md:py-24 max-w-[1280px] mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-secondary dark:text-white leading-tight">
          Flexible Cover for Every Family
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
          Use our interactive calculator to compare plans and premiums, ensuring you find the exact protection your loved ones need without unnecessary costs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
          <a
            href="https://apply.liyanafinance.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "default",
              className: "h-12 px-8 text-base font-semibold uppercase tracking-wider inline-flex items-center justify-center",
            })}
          >
            Apply Online Now
          </a>
          <Button variant="outline" className="h-12 px-8 text-base font-medium border border-black uppercase tracking-wider hover:bg-zinc-100">
            Speak to an Advisor
          </Button>
        </div>
      </div>
      {/* Hero image placeholder */}
      <div className="md:w-1/2 w-full h-[350px] relative border border-border overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTDPfIo30BdNu7oVvS3u22egQFYofmz1hJmQqijU7WbBhBAX2him-boq79WJfTMRl6fIjKHJRqRQTPQQrSRFsgTvQgQoUbqGVxkhewWaMXBjnyF1IJBdkWg1tin0zoIQXHlOJ5BnUCpicsrm4FlYzunAFn9nzdUFIBUMj6CWOjdfS4-o5n8RRb7kKc4fW3FxHiZJnQTytBGr1Mq_YZc8CVBVCGXaiBNQ8TheSfzVeEr6lxkvnAlH1D4cCaHUv-292mq0PWhKESQXQ')`,
          }}
        ></div>
      </div>
    </section>
  );
}
