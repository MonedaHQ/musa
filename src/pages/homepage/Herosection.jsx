import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import WordAnimator from '@/components/WordAnimator';
import styles from './styles/herosection.module.css';

function Herosection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.ellipseTop} />
      <div className={styles.ellipseBottom} />
      <div className={styles.container}>
        <HeroContent />
        <motion.div
          className={styles.dashboardPreview}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="/assets/screens/dashboard.png"
            alt="Musa Dashboard Interface"
            width={2880}
            height={1800}
            priority
            draggable={false}
          />
        </motion.div>
      </div>
    </div>
  );
}

function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <WordAnimator text="Powering Structured Transactions, End-to-End" />
      <h4>
        Musa is not just a tool. It’s the system that holds everything together.{' '}
        <br />
        Gain clarity. Enforce control. Move forward with confidence.
      </h4>
      <div className={styles.ctaButtons}>
        <Button
          variant="secondary"
          href="https://musa-app.moneda.africa/account/register"
        >
          Get started
        </Button>
        <Button variant="primary" href="#how-it-works">
          See How it works
        </Button>
      </div>
    </div>
  );
}

export default Herosection;
