import Section from '@/components/Section';
import styles from './styles/mapsection.module.css';
import dynamic from 'next/dynamic';
import Button from '@/components/Button';

// Dynamically load the MapEmbed component for client-side rendering only
const MapEmbed = dynamic(
  () =>
    Promise.resolve(() => (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6585916025742!2d3.460395376297987!3d6.43787489355335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5ab250118cd%3A0x26b009f0fde10ca0!2s12%20Abeke%20Animashaun%20St%2C%20Lekki%20Phase%20I%2C%20Str%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1728150587545!5m2!1sen!2sng"
        width="600"
        height="450"
        loading="lazy"
        style={{ border: 0 }}
        allowFullScreen=""
      />
    )),
  { ssr: false }
);

function MapSection() {
  return (
    <Section color="darkBrown">
      <div className={styles.mapSection}>
        <div className={styles.mapInfo}>
          <h3>Find us on Google Maps</h3>
          <p>
            Need directions? Use Google Maps to locate us quickly and easily.
            Click the link below for accurate directions.
          </p>
        </div>
        <div className={styles.mapEmbed}>
          <MapEmbed />
          <Button
            variant="secondary"
            href="https://maps.app.goo.gl/xod8EyenNrV8sRYx6"
          >
            Get directions
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default MapSection;
