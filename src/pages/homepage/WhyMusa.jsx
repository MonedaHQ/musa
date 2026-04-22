import Image from 'next/image';
import { useState } from 'react';
import Section from '@/components/Section';
import Button from '@/components/Button';
import TabToggle from '@/components/TabToggle';
import styles from './styles/whymusa.module.css';

import {
  HiOutlineDocumentText,
  HiOutlineChatBubbleLeftRight,
  HiOutlineChartBar,
  HiOutlineCreditCard,
  HiOutlineGlobeAlt,
} from 'react-icons/hi2';
import WordAnimator from '@/components/WordAnimator';

const financiersFeatures = [
  {
    title: 'Credit Management',
    description:
      'End-to-end process for seamless transactions with your customers - from KYC to project monitoring.',
    icon: <HiOutlineDocumentText />,
  },
  {
    title: 'Automated Collections',
    description:
      'Reduce your risk and crash your default rate with our automated collections and repayment feature.',
    icon: <HiOutlineChatBubbleLeftRight />,
  },
  {
    title: 'Reporting & Analytics',
    description:
      "No more running around for reconciliation for your periodic reports - it's all in one, safe place in Musa.",
    icon: <HiOutlineChartBar />,
  },
];

const smesFeatures = [
  {
    title: 'Access to credit',
    description:
      'Get sustainable, no-limit, no-collateral financing from our anchor financer - Moneda',
    icon: <HiOutlineCreditCard />,
  },
  {
    title: 'Cross-border payments',
    description:
      'Get access to local & foreign virtual accounts enabling you transact with global suppliers.',
    icon: <HiOutlineGlobeAlt />,
  },
  {
    title: 'Reporting & Analytics',
    description:
      'Real-time insights into your business that helps you see the past with clarity and predict the future with certainty.',
    icon: <HiOutlineChartBar />,
  },
];

function WhyMusa() {
  const [activeTab, setActiveTab] = useState('financiers');

  const features =
    activeTab === 'financiers' ? financiersFeatures : smesFeatures;

  return (
    <>
      <Section>
        <div className={styles.container} id="why-musa">
          <div className={styles.header}>
            <h4 className="text-[20px] text-[--color-orange] font-semibold">
              WHAT WE DO
            </h4>
            <p className="text-[#212121] text-center text-[18px] font-normal">
              Musa is a private credit catalyst - bridging the gap between
              alternative <br className='hidden md:block'/> financiers and SMEs and removing all bottlenecks
              between them.
            </p>
          </div>
        </div>
      </Section>

      <div className={styles.contentSection}>
        <div className={styles.contentGrid}>
          <div className={styles.featureList}>
            <TabToggle
              tabs={[
                { value: "financiers", label: "Alternative Financiers" },
                { value: "smes", label: "SMEs" },
              ]}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            {features.map((feature, index) => (
              <div className={styles.featureItem} key={index}>
                <div className={styles.iconWrapper}>{feature.icon}</div>
                <div className={styles.featureText}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}

            <Button className='rounded-[4px] !px-[3.25rem]' variant="secondary" href="/see-how">
              How It Works
            </Button>
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
    </>
  );
}

export default WhyMusa;
