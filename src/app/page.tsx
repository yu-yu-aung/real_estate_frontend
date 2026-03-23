import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-background font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">    
        <HeroSection />
      </main>
    </div>
  );
}
