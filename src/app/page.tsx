import { HomeHero } from "@/features/home/components/home-hero";
import { WhyChoose } from "@/features/home/components/why-choose";
import { PlansGlance } from "@/features/home/components/plans-glance";

export default function Home() {
  return (
    <div className="w-full bg-background text-foreground font-sans">
      <HomeHero />
      <WhyChoose />
      <PlansGlance />
    </div>
  );
}
