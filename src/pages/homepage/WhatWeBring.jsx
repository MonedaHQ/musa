import Image from 'next/image';
import Section from '@/components/Section';
import Button from '@/components/Button';
import styles from './styles/whatwebring.module.css';
import WordAnimator from '@/components/WordAnimator';

export default function WhatWeBring() {
  return (
    <Section color="light" id="what-we-bring" fullWidth={true}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <span className={styles.subheading}>
              WHAT WE BRING TO THE TABLE
            </span>
            <WordAnimator
              as="h2"
              text="A single source of truth for structured finance"
            />
            <p>
              End-to-end transaction control, Reduced operational and compliance
              risk, Centralized collaboration across teams, Built-in
              additability and reporting, Actionable insights across the entire
              portfolio
            </p>
          </div>
          <Button
            variant="secondary"
            href="https://musa-app.moneda.africa/account/register"
          >
            Get Started
          </Button>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/assets/charts.png"
            alt="Musa Analytics Dashboard"
            width={700}
            height={600}
            className={styles.image}
            draggable={false}
          />
        </div>
      </div>
    </Section>
  );
}
