import { useCountIncrement } from '@/hooks/useCountIncrement';

import styles from './styles/metrics.module.css';
import Section from '@/components/Section';

const data = [
  {
    metric: 50,
    prefix: null,
    currency: null,
    suffix: '+',
    description: 'CSMEs onboarded',
  },
  {
    metric: 65,
    prefix: null,
    currency: null,
    suffix: '+',
    description: 'Transaction Requests',
  },
  {
    metric: 25,
    prefix: '$',
    currency: 'm',
    suffix: '+',
    description: 'value of funding requests',
  },
  {
    metric: 2,
    prefix: '$',
    currency: 'm',
    suffix: '',
    description: 'Approved Requests',
  },
];

function Metrics({ paddingTop = false, metrics = data }) {
  return (
    <Section paddingTop={paddingTop}>
      <div className={styles.metrics}>
        {metrics.map((metric) => (
          <Metric key={metric.metric} metric={metric} />
        ))}
      </div>
    </Section>
  );
}

function Metric({ metric }) {
  const [metricDigit, metricRef] = useCountIncrement(0, metric.metric);
  return (
    <div className={styles.metric} key={metric.metric}>
      <div className={styles.metricHeading} ref={metricRef}>
        <h3>
          {metric.prefix}
          {metricDigit}
          {metric.currency}
          <span>{metric.suffix}</span>
        </h3>
      </div>
      <p>{metric.description}</p>
    </div>
  );
}

export default Metrics;
