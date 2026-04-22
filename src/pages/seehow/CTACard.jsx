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
            <span className="text-[35px] leading-[45px]  md:text-[50px] md:leading-[60px]">
              Built for Transactions <br className="hidden md:flex" /> That
              Can't Afford <br className="hidden md:flex" /> Mistakes
            </span>
          </div>

          <div className={styles.right}>
            <p className=" text-[16px] font-normal text-white text-left">
              From onboarding counterparties to approving, executing,{" "}
              <br className="hidden md:flex" /> and settling structured
              deals, Musa integrates credit <br className="hidden md:flex" />{" "}
              management and payment infrastructure into one{" "}
              <br className="hidden md:flex" /> continuous
              system, eliminating operational gaps and{" "}
              <br className="hidden md:flex" /> strengthening risk oversight
              across the private debt <br className="hidden md:flex" />{" "}
              lifecycle. 
            </p>
            <Button
              href="https://musa-app.moneda.africa/account/register"
              variant="tertiary"
              className="rounded-[4px]"
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
