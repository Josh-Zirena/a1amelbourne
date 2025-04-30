import HeroSection from "@/components/ui/HeroSection";
import MissionStatement from "@/components/ui/MissionStatement";
import ConnectSection from "@/components/ui/ConnectSection";
import LocationMap from "@/components/ui/LocationMap";
import UpcomingEvents from "@/components/ui/UpcomingEvents";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="space-y-20">
      <HeroSection />
      <MissionStatement />
      <ConnectSection />
      <LocationMap />
      <UpcomingEvents />
      <Footer />
    </main>
  );
}
