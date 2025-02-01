import { IoIosSpeedometer } from 'react-icons/io';
import { FaRobot } from 'react-icons/fa6';
import { PiCurrencyDollarSimpleFill, PiSmileyFill } from 'react-icons/pi';
import Section from '@/components/Section';

import styles from './styles/features.module.css';
import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import FormInput from '@/components/formElements/FormInput';
import Button from '@/components/Button';

const features = [
  {
    icon: <IoIosSpeedometer />,
    heading: 'KYC Completed in Seconds',
    paragraph:
      'No delays, no paperwork. Get verified in record time so you can access funding when you need it—without the usual bottlenecks.',
    image: { src: '/assets/screens/kyc-screen.jpg', alt: 'Musa KYC Screen' },
  },
  {
    icon: <FaRobot />,
    heading: 'Bespoke Risk Rating Algorithm',
    paragraph:
      'Musa understands your business beyond just numbers. Our smart risk rating system ensures fair, tailored funding decisions designed for African SMEs.',
    image: {
      src: '/assets/screens/contractor-profile.jpg',
      alt: 'Risk Rating Algorithm',
    },
  },
  {
    icon: <PiCurrencyDollarSimpleFill />,
    heading: 'Real-Time FX Conversion',
    paragraph:
      'Make transaction requests seamlessly in USD, GBP, EUR, and NGN. Musa ensures instant conversions, giving you flexibility in a dynamic market.',
    image: { src: '/assets/screens/new-transaction.jpg', alt: 'FX Conversion' },
  },
  {
    icon: <PiSmileyFill />,
    heading: 'Seamless User Experience',
    paragraph:
      'From application to execution, every step is designed for ease. No unnecessary steps, just a smooth, intuitive platform that gets you funded fast.',
    image: { src: '/assets/screens/dashboard.jpg', alt: 'Seamless UX' },
  },
];

function Features() {
  return (
    <Section>
      <div className={styles.mainContainer} id="features">
        <Heading />
        <Content />
        <Newsletter />
      </div>
    </Section>
  );
}

function Heading() {
  return (
    <div className={styles.headingContainer}>
      <h3>
        Funding <span>Without</span> the Friction
      </h3>
      <p>
        Musa gives you funding without the hassle. No collateral, no long
        waits—just fast capital and hands-on support to execute. Whether
        you&lsquo;re expanding operations or scaling your supply chain, Musa
        makes it possible.
      </p>
    </div>
  );
}

function Content() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImage = features.at(currentIndex).image;
  return (
    <div className={styles.content}>
      <AllFeatures
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
      />
      <Image
        width={500}
        height={500}
        src={currentImage.src}
        alt={currentImage.alt}
        className={styles.image}
      />
    </div>
  );
}

function AllFeatures({ setCurrentIndex, currentIndex }) {
  return (
    <div className={styles.allFeatures}>
      {features.map((feature, index) => (
        <Feature
          feature={feature}
          index={index}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          key={index}
        />
      ))}
    </div>
  );
}

function Feature({ feature, index, currentIndex, setCurrentIndex }) {
  const isActive = index === currentIndex;

  return (
    <div
      onClick={() => setCurrentIndex(index)}
      className={`${styles.feature} ${isActive ? styles.active : ''}`}
    >
      <div className={styles.featureHeading}>
        {feature.icon}
        <h4>{feature.heading}</h4>
      </div>
      {isActive && <p>{feature.paragraph}</p>}
    </div>
  );
}

function Newsletter() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const formActions = { register, errors };

  function onSubmit(data) {
    const newData = {
      first_name: data.first_name_1,
      last_name: data.last_name_1,
      email: data.email_1,
    };
    console.log(newData);
  }

  return (
    <form className={styles.newsletter} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.newsletterHeading}>
        <h3>Stay Ahead with Musa</h3>
        <p>
          Be the first to know about new features, expert tips, and the latest
          updates. Sign up for our newsletter and unlock the full potential of
          Musa.
        </p>
      </div>
      <div className={styles.imputs}>
        <div className={styles.names}>
          <FormInput
            type="text"
            id="first_name_1"
            formActions={formActions}
            placeholder="First name"
          />
          <FormInput
            type="text"
            id="last_name_1"
            formActions={formActions}
            placeholder="Last name"
          />
        </div>
        <FormInput
          type="email"
          id="email_1"
          formActions={formActions}
          placeholder="Email address"
        />
      </div>
      <Button variant="secondary" type="submit">
        Subscribe
      </Button>
    </form>
  );
}

export default Features;
