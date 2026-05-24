import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SocialProof from './components/SocialProof';
import HowItWorks from './components/HowItWorks';
import FeaturesSection from './components/FeaturesSection';
import AppPreview from './components/AppPreview';
import PromoBanner from './components/PromoBanner';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-slate-900 selection:bg-orange-300 selection:text-slate-900">
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <SocialProof />
        <HowItWorks />
        <FeaturesSection />
        <AppPreview />
        <PromoBanner />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
