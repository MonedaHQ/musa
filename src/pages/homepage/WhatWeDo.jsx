import Image from 'next/image';
import Section from '@/components/Section';
import FeatureSteps from '@/components/FeatureSteps';
import styles from './styles/whatwedo.module.css';

const steps = [
  {
    number: '1',
    title: 'Customer & Contractor Onboarding',
  },
  {
    number: '2',
    title: 'Transaction Management',
  },
  {
    number: '3',
    title: 'Internal Approvals & Risk',
  },
  {
    number: '4',
    title: 'Execution & Monitoring',
  },
];

export default function WhatWeDo() {
  return (
    <Section color="darkerBrown" id="what-we-do">
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/notification.png"
            alt="Musa Notification Screen"
            width={600}
            height={600}
            className={styles.image}
            draggable={false}
          />
        </div>

        <FeatureSteps
          subheading="WHAT WE DO"
          heading="One platform. Every transaction stage."
          description="Centralizes every activity required to originate, approve, execute, and monitor structured transactions."
          steps={steps}
        />
      </div>
    </Section>
  );
}
