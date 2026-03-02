import Section from '@/components/Section';
import WordAnimator from '@/components/WordAnimator';
import Button from '@/components/Button';
import styles from './styles/ctacard.module.css';

export default function CTACard() {
  return (
    <Section color="light">
      <div className={styles.wrapper}>
        <div className={styles.card}>
          {/* Gradient circles background */}
          <div className={styles.circles}>
            <div className={`${styles.circle} ${styles.circle1}`}></div>
            <div className={`${styles.circle} ${styles.circle2}`}></div>
            <div className={`${styles.circle} ${styles.circle3}`}></div>
            <div className={`${styles.circle} ${styles.circle4}`}></div>
          </div>

          {/* Content */}
          <div className={styles.left}>
            <WordAnimator
              as="h2"
              text="Built for Transactions That Can't Afford Mistakes"
            />
          </div>

          <div className={styles.right}>
            <p>
              From onboarding counterparties to approving, executing, and
              settling structured deals, Musa integrates credit management and
              payment infrastructure into one continuous
              system, eliminating operational gaps and strengthening risk
              oversight across the private debt lifecycle. 
            </p>
            <Button
              href="https://musa-app.moneda.africa/account/register"
              variant="tertiary"
              active
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
