import { homeMenuLinks } from '@/data/menu';
import styles from './styles/mobilenavigation.module.css';
import MobileNavLinks from './MobileNavLinks';
import { useState } from 'react';
import { useRouter } from 'next/router';

function MobileNavigation() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const router = useRouter();
  const isHome = router.pathname === '/';
  let menuData = homeMenuLinks;
  if (!isHome) {
    menuData = [
      // {
      //   path: '/',
      //   label: 'Home',
      //   action: 'onMouseEnter',
      //   icon: <HiMiniChevronDown />,
      //   icon2: <HiMiniChevronUp />,
      //   dropdown: null,
      // },
      ...homeMenuLinks,
    ];
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
    </div>
  );
}

export default MobileNavigation;
