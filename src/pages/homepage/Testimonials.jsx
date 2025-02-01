import Section from '@/components/Section';

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
    <Section paddingTop={false}>
      <div className={styles.testimonials} id="testimonials">
        <h3>Testimonials</h3>
        <TestimonialCards />
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
        <Image
          width={48}
          height={48}
          src={testimonial.logo}
          alt={testimonial.client}
        />{' '}
        <h5>{testimonial.client}</h5>
      </div>
    </div>
  );
}

export default Testimonials;
