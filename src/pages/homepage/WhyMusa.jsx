import Image from 'next/image';
import Section from '@/components/Section';
import styles from './styles/whymusa.module.css';

import {
  HiOutlineDocumentText,
  HiOutlineClock,
  HiOutlineBookmark,
} from 'react-icons/hi2';
import WordAnimator from '@/components/WordAnimator';

const features = [
  {
    title: 'Operational Accuracy',
    description:
      'Every module mirrors real financial and operational processes, reducing errors and manual work.',
    icon: <HiOutlineDocumentText />,
  },
  {
    title: 'Speed with Control',
    description:
      'Automated workflows accelerate transactions without compromising governance or risk checks.',
    icon: <HiOutlineClock />,
  },
  {
    title: 'Scales Without Rework',
    description:
      'Musa grows with transaction volume, product expansion, and new stakeholders.',
    icon: <HiOutlineBookmark />,
  },
];

function WhyMusa() {
  return (
    <Section>
      <div className={styles.container} id="why-musa">
        <div className={styles.header}>
          <h4 className={styles.subtitle}>WHY MUSA</h4>
          <WordAnimator as="h2" text="Structured finance, simplified." />
          <p style={{ textAlign: 'center' }}>
            Musa is core operating system for managing complex contractor
            financing, from onboarding and KYC to transaction execution and
            repayment. Designed to mirror real business workflows, Musa connects
            customers, internal teams, and investors on a single, intelligent
            platform.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.featureList}>
            {features.map((feature, index) => (
              <div className={styles.featureItem} key={index}>
                <div className={styles.iconWrapper}>{feature.icon}</div>
                <div className={styles.featureText}>
                  <WordAnimator as="h3" text={feature.title} />
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/assets/transactions.png"
              alt="Musa Transactions Dashboard"
              width={1000}
              height={800}
              className={styles.image}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default WhyMusa;
