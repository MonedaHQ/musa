import Button from '@/components/Button';
import styles from './styles/dropdown.module.css';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { useSmoothScroll } from '@/context/SmoothScrollContext';

function DropDown({ dropdownList, setIsHovered, isHovered }) {
  const router = useRouter();
  const { handleScrollTo } = useSmoothScroll();

  const dropdown = {
    initial: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.2 },
    },
  };

  function handleClick(path) {
    if (path.includes('#')) {
      const mainPath = path.split('#').at(0);

      const scrollTo = path.split('#').at(1);
      router.push(mainPath).then(() => {
        handleScrollTo(scrollTo, 40);
      });
    } else {
      router.push(path);
    }
  }

  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className={styles.dropDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          variants={dropdown}
          initial="initial"
          animate="visible"
          exit="exit"
        >
          <ul className={styles.dropDownList}>
            {dropdownList.map((link) => (
              <li key={link.label}>
                <Button
                  variant="primary"
                  action={link.action}
                  onClick={() => handleClick(link.path)}
                >
                  {link.label}
                </Button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DropDown;
