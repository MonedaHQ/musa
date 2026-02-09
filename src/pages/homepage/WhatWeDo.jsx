import Image from 'next/image';
import Section from '@/components/Section';
import styles from './styles/whatwedo.module.css';
import WordAnimator from '@/components/WordAnimator';

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

        <div className={styles.content}>
          <div className={styles.heading}>
            <span className={styles.subheading}>WHAT WE DO</span>
            <WordAnimator
              as="h2"
              text="One platform. Every transaction stage."
            />
            <p>
              Centralizes every activity required to originate, approve,
              execute, and monitor structured transactions.
            </p>
          </div>

          <div className={styles.steps}>
            {steps.map((step, i) => (
              <div key={i} className={styles.step}>
                <div className={styles.stepNumberContainer}>
                  <div className={styles.stepNumber}>{step.number}</div>
                  {i !== steps.length - 1 && (
                    <div className={styles.line}></div>
                  )}
                </div>
                <div className={styles.stepContent}>
                  <h5>{step.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
