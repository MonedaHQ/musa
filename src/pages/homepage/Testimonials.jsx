import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import Section from '@/components/Section';
import CharacterAnimator from '@/components/CharacterAnimator';

import styles from './styles/testimonials.module.css';
import Image from 'next/image';

const testimonials = [
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
  {
    client: 'Dulce Integrated Services',
    logo: '/assets/customers/default.webp',
    paragraph:
      'Musa takes the hassle out of onboarding. The process was quick, clear, and without unnecessary paperwork. Within hours, we were ready to start using the platform, and it’s been a game-changer for our business ever since.',
  },
];

function Testimonials() {
  return (
    <Section color="darkerBrown" id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subheading}>WHAT THEY SAY</span>
          <h2 className={styles.heading}>
            <CharacterAnimator text="Testimonials" as="span" />
          </h2>
          <p className={styles.description}>
            Here are some testimonials from our users after using Musa to manage
            their business expenses.
          </p>
        </div>

        <TestimonialCards />

        {/* <div className={styles.navigation}>
          <button
            className={styles.navButton}
            aria-label="Previous testimonial"
          >
            <HiArrowLeft />
          </button>
          <button
            className={`${styles.navButton} ${styles.navButtonActive}`}
            aria-label="Next testimonial"
          >
            <HiArrowRight />
          </button>
        </div> */}
      </div>
    </Section>
  );
}

function TestimonialCards() {
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
