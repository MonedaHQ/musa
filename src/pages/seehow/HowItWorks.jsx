import { useState } from 'react';
import Image from 'next/image';
import Section from '@/components/Section';
import WordAnimator from '@/components/WordAnimator';
import TabToggle from '@/components/TabToggle';
import Button from '@/components/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useSmoothScroll } from '@/context/SmoothScrollContext';
import 'swiper/css';
import styles from './styles/howitworks.module.css';

const tabs = [
  { value: 'financiers', label: 'Alternative Financiers' },
  { value: 'smes', label: 'SMEs' },
];

const financiersSteps = [
  {
    image: '/assets/screens/confirm-kyc.png',
    title: 'Onboard',
    description: 'Seamless KYC process for all your customers.',
  },
  {
    image: '/assets/screens/fam.png',
    title: 'Approve',
    description:
      'Receive transaction requests pre-assessed by our bespoke risk rating algorithm and make investment decisions in minutes, not weeks.',
  },
  {
    image: '/assets/screens/reporting-2.png',
    title: 'Disburse',
    description:
      'We provide virtual accounts that enable you disburse to and on-behalf of your customers across multiple countries.',
  },
  {
    image: '/assets/screens/risk-estimation.png',
    title: 'Monitor',
    description:
      'Clear oversight of operations and financials for all transactions.',
  },
  {
    image: '/assets/screens/reporting.png',
    title: 'Report',
    description:
      'View real-time updates through our dashboards and maturity profile.',
  },
];

const smesSteps = [
  {
    image: '/assets/screens/confirm-kyc.png',
    title: 'Onboard',
    description: 'Complete our seamless, 3-step KYC process.',
  },
  {
    image: '/assets/screens/request.png',
    title: 'Request',
    description: 'Request for credit from our anchor financier - Moneda.',
  },
  {
    image: '/assets/screens/wallet-screen.png',
    title: 'Pay',
    description:
      'When approved, receive funds in your virtual account and disburse to',
  },
  {
    image: '/assets/screens/reporting.png',
    title: 'Report',
    description: 'View real-time report and analytics in your dashboard.',
  },
];

function HowItWorks() {
  const [activeTab, setActiveTab] = useState('financiers');
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [navState, setNavState] = useState({
    isBeginning: true,
    isEnd: false,
    showNav: false,
  });
  const { handleScrollTo } = useSmoothScroll();

  const steps = activeTab === 'financiers' ? financiersSteps : smesSteps;

  const updateNavState = (swiper) => {
    const showNav = swiper.slides.length > swiper.params.slidesPerView;
    setNavState({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
      showNav,
    });
  };

  return (
    <Section color="cream">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>HOW IT WORKS</span>
          <WordAnimator as="h2" text="Structured. Controlled. Unified." />
          <p className={styles.description}>
            Unlike fragmented stacks that separate underwriting, approvals, and
            payments, Musa unifies credit management and capital execution in
            one operating system. Every transaction moves through structured
            workflows with embedded risk controls and full portfolio visibility.
          </p>
          <div className={styles.tabWrapper}>
            <TabToggle
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        </div>

        <div className={styles.carouselContainer}>
          {navState.showNav && (
            <button
              className={`${styles.navButton} ${navState.isBeginning ? styles.navButtonDisabled : ''}`}
              onClick={() => swiperInstance?.slidePrev()}
              disabled={navState.isBeginning}
              aria-label="Previous"
            >
              <HiChevronLeft />
            </button>
          )}

          <Swiper
            spaceBetween={24}
            slidesPerView={4}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
              updateNavState(swiper);
            }}
            onSlideChange={(swiper) => updateNavState(swiper)}
            onResize={(swiper) => updateNavState(swiper)}
            breakpoints={{
              0: { slidesPerView: 1.2, spaceBetween: 16 },
              480: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className={styles.swiper}
          >
            {steps.map((step, index) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={400}
                      height={300}
                      className={styles.cardImage}
                      draggable={false}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <h5>{step.title}</h5>
                    <p className={styles.cardDescription}>{step.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {navState.showNav && (
            <button
              className={`${styles.navButton} ${navState.isEnd ? styles.navButtonDisabled : ''}`}
              onClick={() => swiperInstance?.slideNext()}
              disabled={navState.isEnd}
              aria-label="Next"
            >
              <HiChevronRight />
            </button>
          )}
        </div>

        <div className={styles.ctaWrapper}>
          {activeTab === 'financiers' ? (
            <Button
              variant="secondary"
              onClick={() => handleScrollTo('contact', 100)}
            >
              Talk to us
            </Button>
          ) : (
            <Button
              variant="secondary"
              href="https://musa-app.moneda.africa/account/register"
            >
              Get started
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}

export default HowItWorks;
