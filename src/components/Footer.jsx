import Image from 'next/image';
import Section from '@/components/Section';
import Button from '@/components/Button';
import styles from './styles/footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.links}>
            <Button
              variant="link-dark"
              href="https://musa-app.moneda.africa/privacy"
            >
              Privacy Policy
            </Button>
            <span className={styles.separator}>|</span>
            <Button
              variant="link-dark"
              href="https://musa-app.moneda.africa/terms"
            >
              Terms of use
            </Button>
            <span className={styles.separator}>|</span>
            <Button variant="link-dark" href="https://moneda.africa">
              Go to Moneda
            </Button>
          </div>

          <div className={styles.copyright}>
            <p>&copy; {currentYear} Musa | Powered by Moneda Africa</p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomSection}>
          <div className={styles.logoContainer}>
            <Image
              src="/assets/coin-white.png"
              alt="Moneda Coin"
              width={90}
              height={90}
              className={styles.rotatingCoin}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
