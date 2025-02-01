import MetaTags from '@/components/head';
import Navigation from '@/components/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPostion';
import { scrollOffset } from '@/utils/config';
import Herosection from './homepage/Herosection';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import WhyMusa from './homepage/WhyMusa';
import Metrics from './homepage/Metrics';
import Features from './homepage/Features';
import Testimonials from './homepage/Testimonials';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import Footer from '@/components/Footer';
import Contact from './homepage/Contact';
import MapSection from './homepage/MapSection';

function LandingPage() {
  const scrollPosition = useScrollPosition(scrollOffset);
  return (
    <>
      <MetaTags
        title="Musa: Empower Your Growth. Transform Africa"
        description="No-collateral funding. Hands-on execution support. For Critical SMEs driving Africa’s transformation."
      />
      <Navigation scrollPosition={scrollPosition} darkHero={true} />
      <MobileNavigationHeader />
      <Herosection />
      <WhyMusa />
      <Metrics />
      <Features />
      <Testimonials />
      <FrequentlyAskedQuestions />
      <Contact />
      <MapSection />
      <Footer />
    </>
  );
}

export default LandingPage;
