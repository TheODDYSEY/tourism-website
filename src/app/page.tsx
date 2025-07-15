import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DestinationsMap from '@/components/DestinationsMap';
import SustainabilitySection from '@/components/SustainabilitySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <FeaturesSection />
        <DestinationsMap />
        <SustainabilitySection />
      </main>
      <Footer />
    </div>
  );
}
