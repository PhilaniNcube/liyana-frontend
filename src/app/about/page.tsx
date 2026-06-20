import { AboutHero } from "@/features/about/components/about-hero";
import { OurStory } from "@/features/about/components/our-story";
import { OurPromise } from "@/features/about/components/our-promise";

export default function AboutPage() {
  return (
    <div className="w-full bg-background text-foreground font-sans">
      <AboutHero />
      <OurStory />
      <OurPromise />
    </div>
  );
}
