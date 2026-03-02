import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import WordAnimator from '@/components/WordAnimator';
import styles from './styles/seehowhero.module.css';

function SeeHowHero() {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroSection}>
        {/* Background Circles - Behind everything */}
        <div className={styles.circle1} />
        <div className={styles.circle2} />

        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.title}>
              <WordAnimator text="One Platform. Zero Fragmentation." as="h1" />
            </div>
            <p className={styles.subtitle}>
              The only unified platform that combines credit management tools
              and payment processing solutions for the private debt ecosystem
            </p>
            <div className={styles.buttonWrapper}>
              <Button
                href="https://musa-app.moneda.africa/account/register"
                variant="secondary"
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Image
                src="/assets/screens/mobile-mockup.png"
                alt="Musa Dashboard Interface"
                width={800} // Adjust based on your needs
                height={600} // Adjust based on your needs
                priority
                draggable={false}
                className={styles.heroImage}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeHowHero;
