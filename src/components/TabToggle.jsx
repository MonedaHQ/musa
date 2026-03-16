import {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from 'react';
import { motion } from 'framer-motion';
import styles from './styles/tabtoggle.module.css';

function TabToggle({ tabs, activeTab, onTabChange, variant = 'dark' }) {
  const containerRef = useRef(null);
  const tabRefs = useRef({});
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const updateUnderline = useCallback(() => {
    const activeTabEl = tabRefs.current[activeTab];
    if (activeTabEl && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const tabRect = activeTabEl.getBoundingClientRect();
      setUnderlineStyle({
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
      });
    }
  }, [activeTab]);

  useLayoutEffect(() => {
    updateUnderline();
  }, [updateUnderline]);

  useEffect(() => {
    window.addEventListener('resize', updateUnderline);
    return () => window.removeEventListener('resize', updateUnderline);
  }, [updateUnderline]);

  return (
    <div
      className={`${styles.tabToggle} ${variant === 'light' ? styles.light : ''}`}
      ref={containerRef}
    >
      {tabs.map((tab) => (
        <button
          key={tab.value}
          ref={(el) => (tabRefs.current[tab.value] = el)}
          className={`${styles.tabButton} ${activeTab === tab.value ? styles.tabButtonActive : ''}`}
          onClick={() => onTabChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
      <motion.div
        className={styles.underline}
        initial={false}
        animate={{
          x: underlineStyle.left,
          width: underlineStyle.width,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        style={{ left: 0 }}
      />
    </div>
  );
}

export default TabToggle;
