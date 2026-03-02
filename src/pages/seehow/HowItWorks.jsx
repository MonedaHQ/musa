import Image from 'next/image';
import Section from '@/components/Section';
import WordAnimator from '@/components/WordAnimator';
import styles from './styles/howitworks.module.css';

const steps = [
  {
    image: '/assets/screens/create-account.png',
    title: 'Create an account',
    description: 'Create Your Account in Minutes , Not Through Endless Forms',
  },
  {
    image: '/assets/screens/confirm-kyc.png',
    title: 'Complete KYC',
    description: 'Complete KYC to enjoy the full benefit on Musa',
  },
  {
    image: '/assets/screens/create-transaction.png',
    title: 'Create a transaction',
    description: 'Create transactions and enjoy the full Musa benefits',
  },
];

function HowItWorks() {
  return (
    <Section color="cream">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.label}>HOW IT WORKS</span>
            <WordAnimator as="h2" text="Structured. Controlled. Unified." />
          </div>
          <p className={styles.headerRight}>
            Unlike fragmented stacks that separate underwriting, approvals, and
            payments, Musa unifies credit management and capital execution in
            one operating system. Every transaction moves through structured
            workflows with embedded risk controls and full portfolio visibility.
          </p>
        </div>

        <div className={styles.cards}>
          {steps.map((step, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.imageWrapper}>
                <Image
                  src={step.image}
                  alt={step.title}
                  width={400}
                  height={300}
                  className={styles.cardImage}
                  draggable={false}
                />
              </div>
              <div className={styles.cardContent}>
                <h4>{step.title}</h4>
                <p className={styles.cardDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default HowItWorks;
