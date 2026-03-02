import MetaTags from '@/components/head';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import Footer from '@/components/Footer';
import Contact from './homepage/Contact';
import SeeHowHero from './seehow/SeeHowHero';
import HowItWorks from './seehow/HowItWorks';
import OnePlatform from './seehow/OnePlatform';
import CTACard from './seehow/CTACard';
import useScrollPosition from '@/hooks/useScrollPostion';
import { scrollOffset } from '@/utils/config';

function SeeHowPage() {
  const scrollPosition = useScrollPosition(scrollOffset);

  return (
    <>
      <MetaTags title="See How - Musa" description="See how Musa works." />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <MobileNavigationHeader />
      <main style={{ paddingTop: '100px' }}>
        <SeeHowHero />
        <HowItWorks />
        <OnePlatform />
        <CTACard />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default SeeHowPage;
