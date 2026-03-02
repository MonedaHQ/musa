import Image from 'next/image';
import Section from '@/components/Section';
import styles from './styles/whymusa.module.css';

import {
  HiOutlineDocumentText,
  HiOutlineClock,
  HiOutlineBookmark,
  HiOutlineBuildingLibrary,
} from 'react-icons/hi2';
import WordAnimator from '@/components/WordAnimator';

const features = [
  {
    title: 'One Unified System ',
    description:
      'Musa brings credit management and payment operations into a single,  platform, eliminating silos manual workarounds and fragmented processes. ',
    icon: <HiOutlineDocumentText />,
  },
  {
    title: 'Embedded Risk Control',
    description:
      'Risk management is integrated across the entire credit lifecycle: from underwriting and approvals to monitoring and repayment tracking. ',
    icon: <HiOutlineClock />,
  },
  {
    title: 'End-to-End Lifecycle Management',
    description:
      'Originate, approve, disburse, monitor, collect, and report. All within one continuous system designed for operational precision.',
    icon: <HiOutlineBookmark />,
  },
  {
    title: 'Purpose-Built for Private Debt',
    description:
      'Designed specifically for lenders, credit funds, and structured finance teams managing complex portfolios; not adapted from generic lending software..',
    icon: <HiOutlineBuildingLibrary />,
  },
];

function WhyMusa() {
  return (
    <Section>
      <div className={styles.container} id="why-musa">
        <div className={styles.header}>
          <h4 className={styles.subtitle}>WHY MUSA</h4>
          <WordAnimator
            as="h2"
            text="Private Debt Is Complex. Your Infrastructure Shouldn’t Be. "
          />
          <p style={{ textAlign: 'center' }}>
            Credit origination, underwriting, portfolio monitoring, repayments,
            reporting, and payment execution are often spread across
            disconnected tools. That fragmentation creates risk, slows
            decision-making, and increases operational cost. 
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
              src="/assets/screens/transaction-dashboard.png"
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
