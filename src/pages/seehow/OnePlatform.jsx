import Image from 'next/image';
import Section from '@/components/Section';
import FeatureSteps from '@/components/FeatureSteps';
import styles from './styles/oneplatform.module.css';

const steps = [
  {
    number: '1',
    title: 'Monitor and manage transactions in real time',
  },
  {
    number: '2',
    title: 'Enforce structured approval workflows',
  },
  {
    number: '3',
    title: 'Track portfolio performance across entities/departments',
  },
  {
    number: '4',
    title: 'Maintain audit-ready records at every stage',
  },
];

export default function OnePlatform() {
  return (
    <Section
      color="darkBrown"
      id="one-platform"
      fullWidth
      paddingBottom={false}
    >
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <FeatureSteps
            heading="One Platform. Total Portfolio Control. "
            description="Musa centralizes credit workflows, approval governance, payment processing, and reporting into a single environment, purpose-built for private debt teams that require precision, compliance, and scale."
            steps={steps}
          />
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/assets/screens/wallet.png"
            alt="Musa Wallet Dashboard"
            width={800}
            height={600}
            className={styles.image}
            draggable={false}
          />
        </div>
      </div>
    </Section>
  );
}
