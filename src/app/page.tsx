
import RecentVisit from "@/components/ui/landing/RecentVisit";
import Recommand from "@/components/ui/landing/RelatedSearch";
import StatesRegion from "@/components/ui/landing/StatesRegion";
import HeroSection from "@/components/ui/landing/HeroSection";
import RelatedSearch from "@/components/ui/landing/RelatedSearch";
import NewRent from "@/components/ui/landing/NewRent";
import NewSale from "@/components/ui/landing/NewSale";
import InsightSection from "@/components/ui/landing/InsightSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-background font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">    
        <HeroSection />
        <StatesRegion />
        <RecentVisit />
        <RelatedSearch/>
        <NewRent/>
        <NewSale />
        <InsightSection />
      </main>
    </div>
  );
}
