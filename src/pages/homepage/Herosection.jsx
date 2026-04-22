import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import WordAnimator from '@/components/WordAnimator';
import styles from './styles/herosection.module.css';

function Herosection() {
  return (
    <div className={styles.heroSection}>
      {/* <div className={styles.ellipseTop} />
      <div className={styles.ellipseBottom} /> */}
      <div className={styles.container}>
        <HeroContent />
        <motion.div
          className={styles.dashboardPreview}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <Image
              src="/assets/screens/dashboard.svg"
              alt="Musa Dashboard Interface"
              width={2880}
              height={1800}
              priority
              draggable={false}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <div className="hidden md:flex">
        <WordAnimator
          text="Imagine Private Credit, <br /> But Without Fear"
          highlightWords={{ Fear: "var(--color-orange)" }}
          as="h1"
        />
      </div>
      <div className="!text-start flex md:hidden">
        <h1 className="!text-[40px] !leading-[55px]">
          Imagine Private Credit, <br className="hidden md:block" /> But Without
          <span style={{ color: "var(--color-orange)" }}>Fear</span>
        </h1>
      </div>
      <h4 className="mt-5 !text-start md:!text-center">
        Musa is a unified credit management and payment infrastructure{" "}
        <br className="hidden md:block" /> built to facilitate trade in African
        markets by mitigating risk.
      </h4>
      <div className={`!my-10 flex items-center gap-6 ${styles.ctaButtons}`}>
        <Button
          variant="secondary"
          className="rounded-[4px] !px-[3.25rem]"
          href="https://musa-app.moneda.africa/account/register"
        >
          Get started
        </Button>
        <Button
          className="rounded-[4px] text-[#CC5500] !bg-white"
          href="/see-how"
        >
          See How it works
        </Button>
      </div>
    </div>
  );
}

export default Herosection;
