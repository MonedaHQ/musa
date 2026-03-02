import WordAnimator from '@/components/WordAnimator';
import styles from './styles/featuresteps.module.css';

export default function FeatureSteps({
  subheading = null,
  heading,
  description,
  steps = [],
  variant = 'dark',
}) {
  return (
    <div
      className={`${styles.content} ${variant === 'light' ? styles.light : ''}`}
    >
      <div className={styles.heading}>
        {subheading && <span className={styles.subheading}>{subheading}</span>}
        <WordAnimator as="h2" text={heading} />
        {description && <p>{description}</p>}
      </div>

      <div className={styles.steps}>
        {steps.map((step, i) => (
          <div key={i} className={styles.step}>
            <div className={styles.stepNumberContainer}>
              <div className={styles.stepNumber}>{step.number}</div>
              {i !== steps.length - 1 && <div className={styles.line}></div>}
            </div>
            <div className={styles.stepContent}>
              <h5>{step.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
