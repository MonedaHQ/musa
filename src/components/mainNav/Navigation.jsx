import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import NavLink from './NavLink';

import { homeMenuLinks } from '@/data/menu';
import { useRouter } from 'next/router';

import styles from './styles/navigation.module.css';

function Navigation({ scrollPosition = 0, darkHero = false }) {
  const isHero = scrollPosition > 120;
  const router = useRouter();

  return (
    <AnimatePresence>
      {/* <HeaderInitial darkHero={darkHero} /> */}
      {isHero ? <HeaderSecondary /> : <HeaderInitial darkHero={darkHero} />}
    </AnimatePresence>
  );
}

function HeaderSecondary() {
  const router = useRouter();

  const headerIntro = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };
  return (
    <motion.header
      className={`${styles.navContainer} ${styles.navContainerSecondary}`}
      variants={headerIntro}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <nav className={styles.navigation2}>
        <Image
          width={600}
          height={1200}
          src={`/assets/logo/musa-dark.png`}
          draggable={false}
          alt="logo"
          className={styles.logo}
          onClick={() => router.push('/')}
        />
        <ul className={styles.navigationList}>
          {homeMenuLinks.map((link) => (
            <NavLink key={link.label} link={link} motion={motion} />
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

function HeaderInitial({ darkHero }) {
  const router = useRouter();
  const route = router.route;

  const headerIntro = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, ease: [0.67, 0.41, 0, 1] },
    },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <motion.header
      className={`${styles.navContainer} ${darkHero ? styles.dark : ''}`}
      variants={headerIntro}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <nav className={styles.navigation}>
        <Image
          width={408.5}
          height={79}
          src={`/assets/logo/musa-logo.png`}
          alt="Musa Logo"
          draggable={false}
          className={styles.logo}
          onClick={() => router.push('/')}
        />
        <ul className={styles.navigationList}>
          {homeMenuLinks.map((link) => (
            <NavLink
              key={link.label}
              link={link}
              motion={motion}
              darkHero={darkHero}
              isActive={route === link.path}
            />
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

export default Navigation;
