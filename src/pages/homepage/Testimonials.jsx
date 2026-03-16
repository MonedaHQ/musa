import { useState } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import Section from '@/components/Section';
import CharacterAnimator from '@/components/CharacterAnimator';
import TabToggle from '@/components/TabToggle';

import styles from './styles/testimonials.module.css';
import Image from 'next/image';

const financiersTestimonials = [
  {
    client: 'Neptune Energy',
    logo: '/assets/customers/neptune.jpeg',
    paragraph:
      'Musa has transformed how we handle transactions. The process is fast, seamless, and tailored to our needs. What used to take days now happens in minutes, keeping our operations smooth and efficient.',
  },
  {
    client: 'Symax Oilfield',
    logo: '/assets/customers/symax.png',
    paragraph:
      'Getting started with Musa was incredibly easy. The onboarding process was straightforward, and we were up and running in no time. The platform is intuitive, and the support team made sure everything was in place for a seamless experience.',
  },
];

const smesTestimonials = [
  {
    client: 'Dulce Integrated Services',
    logo: '/assets/customers/default.webp',
    paragraph:
      "Musa takes the hassle out of onboarding. The process was quick, clear, and without unnecessary paperwork. Within hours, we were ready to start using the platform, and it's been a game-changer for our business ever since.",
  },
  {
    client: 'Neptune Energy',
    logo: '/assets/customers/neptune.jpeg',
    paragraph:
      'Musa has transformed how we handle transactions. The process is fast, seamless, and tailored to our needs. What used to take days now happens in minutes, keeping our operations smooth and efficient.',
  },
];

function Testimonials() {
  const [activeTab, setActiveTab] = useState('financiers');

  const testimonials =
    activeTab === 'financiers' ? financiersTestimonials : smesTestimonials;

  return (
    <Section color="darkerBrown" id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subheading}>WHAT THEY SAY</span>
          <h2 className={styles.heading}>
            <CharacterAnimator text="Testimonials" as="span" />
          </h2>
          <p className={styles.description}>
            Trusted by Businesses Across Africa
          </p>
        </div>

        <TabToggle
          tabs={[
            { value: 'financiers', label: 'Alternative Financiers' },
            { value: 'smes', label: 'SMEs' },
          ]}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          variant="light"
        />
        <div className={styles.testimonialCards}>
          <TestimonialCards testimonials={testimonials} />
        </div>
      </div>
    </Section>
  );
}

function TestimonialCards({ testimonials }) {
  return (
    <div className={styles.cards}>
      {testimonials.map((testimonial) => (
        <Testimonial testimonial={testimonial} key={testimonial.client} />
      ))}
    </div>
  );
}

function Testimonial({ testimonial }) {
  return (
    <div className={styles.card}>
      <p>{testimonial.paragraph}</p>
      <div className={styles.client}>
        <div className={styles.logoWrapper}>
          <Image
            width={48}
            height={48}
            src={testimonial.logo}
            alt={testimonial.client}
            draggable={false}
          />
        </div>
        <h5>{testimonial.client}</h5>
      </div>
    </div>
  );
}

export default Testimonials;
