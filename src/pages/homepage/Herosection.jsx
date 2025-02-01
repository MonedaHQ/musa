import Button from '@/components/Button';
import styles from './styles/herosection.module.css';

function Herosection() {
  return (
    <div className={styles.heroSection}>
      <video
        className={styles.backgroundVideo}
        src="/assets/vid/landing-video.mp4"
        autoPlay
        loop
        muted
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />
      <HeroContent />
    </div>
  );
}

function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <h1>Empower Your Growth, Transform Africa</h1>
      <h4>
        No-collateral funding. Hands-on execution support. <br />
        For Critical SMEs driving Africa’s transformation.
      </h4>
      <Button variant="secondary" href="https://musa.monedainvest.app/">
        Get started today
      </Button>
    </div>
  );
}

export default Herosection;
