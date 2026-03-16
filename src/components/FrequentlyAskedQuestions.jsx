import Image from 'next/image';
import Section from './Section';
import { useState } from 'react';

import styles from './styles/frequentlyaskedquestions.module.css';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { PiMinusThin, PiPlusCircleLight } from 'react-icons/pi';
import CharacterAnimator from './CharacterAnimator';

const frequentlyAskedQuestions = [
  {
    question: 'What is Musa?',
    answer:
      'Musa is a platform that bridges the gap between alternative financiers and SMEs for the effective management of private credit facilities and payment processing capabilities to create value with credit.',
  },
  {
    question: 'Is Musa a FinTech?',
    answer:
      'No, Musa is a technology company that provides infrastructure for alternative financiers to effectively manage their credit and provides tools needed to manage their risk',
  },
  {
    question: "What is Musa's interest rate?",
    answer:
      'Pricing for credit is strictly between the financier and the borrower - Musa only charges the financier for the credit management services provided. Payments passing through the platform are also subject to fees as prescribed by our payment processing partners.',
  },
  {
    question: 'Who can use Musa?',
    answer:
      'Alternative financiers providing private credit to SMEs can use Musa to smoothen their processes and effectively manage their risk portfolio. SMEs can use Musa to access no-limit, no-collateral credit from our anchor financier - Moneda. Visit moneda.africa for more information.',
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
      <CharacterAnimator as="h2" text="FAQs" />
    </div>
  );
}

function FAQs({ faqArray = frequentlyAskedQuestions }) {
  const [isOpen, setIsOpen] = useState(null);
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
          onClick={() => setIsOpen((cur) => (cur === index ? null : index))}
        >
          <h5
            className={`${styles.question} ${
              index === isOpen && styles.activeQuestion
            }`}
          >
            {questionItem.question}
          </h5>
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
