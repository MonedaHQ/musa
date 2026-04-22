import Section from '@/components/Section';
import WordAnimator from '@/components/WordAnimator';
import styles from './styles/whatmakesusidfferent.module.css';

const differentiators = [
  {
    number: 1,
    title: 'Built for Africa',
    description:
      'From bespoke risk ratings that are reflective of the African reality to approval processes that are non-discriminatory - we are African and we understand the African context.',
  },
  {
    number: 2,
    title: 'Built for Scale',
    description:
      "With virtual accounts in multiple currencies, SMEs can expand their reach and participate in global markets. We don't just want SMEs to access credit, we want them to create value with it.",
  },
];

function WhatMakesUsDifferent() {
  return (
    <Section color="cream" id="what-makes-us-different">
      <div className={styles.container}>
        <div className={styles.header}>
          <h4 className="text-[20px] text-[--color-orange] font-semibold">
            WHAT MAKES US DIFFERENT
          </h4>
          <WordAnimator
            as="h2"
            text="We See The Big Picture"
            className="!font-[500] !text-[40px] !leading-[150%] !tracking-[-3%]"
          />
          <p className={styles.description}>
            There are too many silos in the African private credit ecosystem
            creating the perception <br className="hidden md:block" /> of high
            risk. We use technology to link all moving parts of the African
            private credit <br className="hidden md:block" /> ecosystem and
            foster growth.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {differentiators.map((item) => (
            <DifferentiatorCard
              key={item.number}
              number={item.number}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

function DifferentiatorCard({ number, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.number}>{number}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}

export default WhatMakesUsDifferent;
