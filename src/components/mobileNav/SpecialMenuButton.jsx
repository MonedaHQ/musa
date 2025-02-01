import { motion } from 'framer-motion';
import styles from './styles/specialmenubutton.module.css';
import { useMenuToggler } from '@/context/MenuToggleContext';

import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

function SpecialMenuButton({ isActive }) {
  const { toggleMenu } = useMenuToggler();

  return (
    <div className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? '-100%' : '0%' }}
        transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
      >
        <ButtonActual label={<RxHamburgerMenu />} toggleMenu={toggleMenu} />
        <ButtonActual label={<IoMdClose />} toggleMenu={toggleMenu} />
      </motion.div>
    </div>
  );
}

function ButtonActual({ label, toggleMenu }) {
  return (
    <button className={styles.el} onClick={() => toggleMenu()}>
      <PerspectiveText label={label} />
    </button>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}

export default SpecialMenuButton;
