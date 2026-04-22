import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import WordAnimator from "@/components/WordAnimator";
import styles from "./styles/seehowhero.module.css";

function SeeHowHero() {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroSection}>
      
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.title}>
              <div className="hidden md:flex">
                <WordAnimator
                  text="One Platform. Zero Fragmentation."
                  as="h1"
                />
              </div>
            </div>
            <div className="!text-start flex md:hidden">
              <h1 className="!text-[32px] !leading-[55px]">
                One Platform. Zero Fragmentation.
              </h1>
            </div>
            <p className={`text-left !mb-14 md:!mb-20 mt-10 ${styles.subtitle}`}>
              The only unified platform combining credit management and{" "}
              <br className="hidden md:block" /> payment infrastructure for the
              private credit ecosystem, giving{" "}
              <br className="hidden md:block" /> you full control of risk,
              workflows, and capital in one system. 
            </p>

            <div>
              <div className={styles.buttonWrapper}>
                <Button
                  href="https://musa-app.moneda.africa/account/register"
                  variant="secondary"
                  className="rounded-[4px]"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center xl:hidden">
            <div className={styles.imageWrapper}>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
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
    </div>
  );
}

export default SeeHowHero;
