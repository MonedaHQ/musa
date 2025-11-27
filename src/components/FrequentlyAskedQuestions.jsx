import Image from 'next/image';
import Section from './Section';
import { useState } from 'react';

import styles from './styles/frequentlyaskedquestions.module.css';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { PiMinusThin, PiPlusCircleLight } from 'react-icons/pi';

const frequentlyAskedQuestions = [
  {
    question: 'What is Musa?',
    answer:
      'Musa is a proprietary lending, payments, and transaction-management software built to power Africa’s alternative credit ecosystem. Built by Moneda Invest Africa, Musa empowers alternative financiers specifically for Africa’s Critical SMEs in energy, minerals, agriculture and infrastructure to seamlessly provide credit, facilitate cross-border payments, and manage risk with speed and transparency.',
  },
  {
    question: 'Who can use Musa?',
    answer:
      'Musa is built for Critical SMEs—businesses that play an essential role in Africa’s natural resource industries, including suppliers, service providers, and contractors in sectors like oil and gas, mining, and infrastructure development.',
  },
  {
    question: 'How does Musa’s funding work?',
    answer:
      'Musa provides no-collateral funding to eligible SMEs based on an advanced risk-rating algorithm. This ensures quick access to capital while mitigating risks, enabling businesses to execute contracts without financial bottlenecks.',
  },
  {
    question: 'How long does onboarding take?',
    answer:
      'Onboarding is designed to be fast and efficient, with KYC completed in seconds. Once approved, users gain immediate access to Musa’s funding and transaction capabilities.',
  },
  {
    question: 'Does Musa support foreign currency transactions?',
    answer:
      'Yes, Musa has real-time FX conversion capabilities, allowing users to transact in multiple currencies, including USD, GBP, EUR, and NGN, without unnecessary delays or hidden fees.',
  },
  {
    question: 'What makes Musa different from traditional financing options?',
    answer:
      'Unlike traditional lenders, Musa doesn’t require collateral and provides tailored financial support based on your business’s actual needs and transaction history. It also integrates execution support, ensuring businesses not only access funds but also successfully deliver on contracts.',
  },
  {
    question: 'Can I track my transactions on Musa?',
    answer:
      'Yes, Musa offers a seamless user experience with real-time transaction tracking, automated updates, and clear visibility into your financial activities.',
  },
  {
    question: 'How do I get started with Musa?',
    answer:
      'Simply sign up, complete the quick onboarding process, and submit your first transaction request. Our team is available to guide you through the process and ensure a smooth experience.',
  },
];

function FrequentlyAskedQuestions() {
  return (
    <Section>
      <div className={styles.faqComponent} id="faqs">
        <HeadingComponent />
        <FAQs />
      </div>
    </Section>
  );
}

function HeadingComponent() {
  return (
    <div className={styles.headingBox}>
      <h2>FAQs</h2>
    </div>
  );
}

function FAQs({ faqArray = frequentlyAskedQuestions }) {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className={styles.faqsBox}>
      {faqArray.map((item, index) => (
        <QuestionBox
          questionItem={item}
          key={item.question}
          stateControls={{ isOpen, setIsOpen }}
          index={index}
        />
      ))}
    </div>
  );
}

function QuestionBox({ questionItem, stateControls, index }) {
  const { isOpen, setIsOpen } = stateControls;

  const openVariants = {
    initial: { transform: 'translateY(-30px)', opacity: 0 },
    animate: { transform: 'translateY(0)', opacity: 1 },
  };

  return (
    <>
      <div className={styles.questionBox}>
        <div
          className={styles.questionHeading}
          onClick={() => setIsOpen(index)}
        >
          <h4
            className={`${styles.question} ${
              index === isOpen && styles.activeQuestion
            }`}
          >
            {questionItem.question}
          </h4>
          <div className={styles.iconBox}>
            {index !== isOpen ? <PiPlusCircleLight /> : <PiMinusThin />}
          </div>
        </div>

        {index === isOpen && (
          <motion.div
            key="content"
            variants={openVariants}
            initial="initial"
            animate="animate"
            className={styles.answerBox}
          >
            <p>{questionItem.answer}</p>
          </motion.div>
        )}
      </div>
      <div className={styles.line} />
    </>
  );
}

export default FrequentlyAskedQuestions;
