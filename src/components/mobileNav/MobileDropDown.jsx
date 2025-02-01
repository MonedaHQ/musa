import { motion } from 'framer-motion';

import styles from './styles/mobiledropdown.module.css';
import { useRouter } from 'next/router';
import { useMenuToggler } from '@/context/MenuToggleContext';
import { grow, perspectiveFast } from '@/data/anim';
import { useSmoothScroll } from '@/context/SmoothScrollContext';

function MobileDropDown({ dropdown }) {
  return (
    <motion.div
      className={styles.dropdown}
      variants={grow}
      animate="enter"
      initial="initial"
      exit="exit"
    >
      <ul className={styles.navList}>
        {dropdown?.map((link, index) => (
          <DropLink key={link.label} index={index} link={link} />
        ))}
      </ul>
    </motion.div>
  );
}

function DropLink({ link, index }) {
  const { closeMenu } = useMenuToggler();
  const { handleScrollTo } = useSmoothScroll();

  const router = useRouter();

  // function handleClick(path) {
  //   if (path.includes('#')) {
  //     const mainPath = path.split('#').at(0);
  //     const scrollTo = path.split('#').at(1);
  //     router.push(mainPath).then(() => {
  //       handleScrollTo(scrollTo, 0);
  //       // closeMenu();
  //     });
  //   } else {
  //     router.push(path);
  //     closeMenu();
  //   }
  // }

  return (
    <motion.li
      onClick={() => {
        router.push(link.path);
        closeMenu();
      }}
      variants={perspectiveFast}
      animate="enter"
      initial="initial"
      exit="exit"
      custom={index}
    >
      {link.label}
    </motion.li>
  );
}

export default MobileDropDown;
