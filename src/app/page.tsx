import HeroSection from "@/components/ui/HeroSection";
import RecentVisit from "@/components/ui/RecentVisit";
import StatesRegion from "@/components/ui/StatesRegion";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-background font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">    
        <HeroSection />
        <StatesRegion />
        <RecentVisit />
      </main>
    </div>
  );
}
