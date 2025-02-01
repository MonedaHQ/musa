import { footer } from '@/data/footer';

import styles from './styles/footer.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <ul className={styles.linkList}>
        {footer.map((link) => (
          <a key={link.label} href={link.path}>
            {link.label}
          </a>
        ))}
      </ul>
      <p>&copy; {year} Musa | Moneda Africa</p>
    </div>
  );
}

export default Footer;
