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
import { useNewsletter } from '@/hooks/useNewsletter';

const features = [
  {
    icon: <IoIosSpeedometer />,
    heading: 'Scale with ease ',
    paragraph:
      'Allows alternative financiers operate across African markets without borders',
    image: { src: '/assets/screens/kyc-screen.jpg', alt: 'Musa KYC Screen' },
  },
  {
    icon: <FaRobot />,
    heading: 'Transparency',
    paragraph:
      'Access real-time reports using AI-driven risk rating and analytics boosting risk management & investor confidence',
    image: {
      src: '/assets/screens/contractor-profile.jpg',
      alt: 'Risk Rating Algorithm',
    },
  },
  {
    icon: <PiCurrencyDollarSimpleFill />,
    heading: 'Speed',
    paragraph:
      'Automation which has crashed transaction turn-around time by 70%.',
    image: { src: '/assets/screens/new-transaction.jpg', alt: 'FX Conversion' },
  },
  {
    icon: <PiSmileyFill />,
    heading: 'Payments',
    paragraph: 'End-to-end processing to turn SMEs credit into real growth',
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
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const formActions = { register, errors };

  const { newsletterSignup, isSigningUp } = useNewsletter();

  function onSubmit(data) {
    const newData = {
      email: data.email_1,
      listId: 56,
      attributes: { FIRSTNAME: data.first_name_1, LASTNAME: data.last_name_1 },
    };

    newsletterSignup(newData, { onSettled: () => reset() });
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
