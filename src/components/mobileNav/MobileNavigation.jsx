import { homeMenuLinks } from '@/data/menu';
import styles from './styles/mobilenavigation.module.css';
import MobileNavLinks from './MobileNavLinks';
import Button from '../Button';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { perspective } from '@/data/anim';

function MobileNavigation() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const router = useRouter();
  const isHome = router.pathname === '/';
  let menuData = homeMenuLinks;
  if (!isHome) {
    menuData = [...homeMenuLinks];
  }

  function handleDropdownToggle(label) {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }
  return (
    <div className={styles.nav}>
      <ul className={styles.mainNavLinks}>
        {menuData.map((link, i) => {
          return (
            <MobileNavLinks
              data={{ nav: link, index: i }}
              key={`b_${i}`}
              isOpen={openDropdown === link.label}
              onDropdownToggle={handleDropdownToggle}
            />
          );
        })}
      </ul>
      <motion.div
        className={styles.authButtons}
        variants={perspective}
        animate="enter"
        exit="exit"
        initial="initial"
        custom={menuData.length}
      >
        <Button
          variant="primary"
          href="https://musa-app.moneda.africa/account/login?redirect=/dashboard"
          className={styles.loginBtn}
        >
          Login
        </Button>
        <Button
          variant="secondary"
          href="https://musa-app.moneda.africa/account/register"
          className={styles.getStartedBtn}
        >
          Get Started
        </Button>
      </motion.div>
    </div>
  );
}

export default MobileNavigation;
