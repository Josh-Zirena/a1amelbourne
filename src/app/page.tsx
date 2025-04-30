import HeroSection from "@/components/ui/HeroSection";
import MissionStatement from "@/components/ui/MissionStatement";
import ConnectSection from "@/components/ui/ConnectSection";
import LocationMap from "@/components/ui/LocationMap";
import UpcomingEvents from "@/components/ui/UpcomingEvents";
import Footer from "@/components/ui/Footer";
import BackToTop from "@/components/ui/BackToTop";
import GallerySection from "@/components/ui/GallerySection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <HeroSection />
        <MissionStatement />
        <ConnectSection />
        <LocationMap />
        <UpcomingEvents />
        <GallerySection />
      </div>
      <Footer />
      <BackToTop />
    </main>
  );
}
