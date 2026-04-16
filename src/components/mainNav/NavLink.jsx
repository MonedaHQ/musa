import { useEffect, useState } from 'react';

import Button from '@/components/Button';
import DropDown from './DropDown';

import styles from './styles/navlink.module.css';
import { useRouter } from 'next/router';
import { useSmoothScroll } from '@/context/SmoothScrollContext';

function NavLink({ link, motion, darkHero, isActive }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAtSection, setIsAtSection] = useState(false);
  const router = useRouter();

  const { handleScrollTo } = useSmoothScroll();

  let icon = null;
  if (link.icon) {
    icon = isHovered ? link.icon2 : link.icon;
  }

  const isSection = link.path.includes('#');
  const cleanPath = isSection ? link.path.replace('#', '') : link.path;

  useEffect(() => {
    if (!isSection) return;

    const section = document.getElementById(cleanPath);
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsAtSection(entry.isIntersecting),
      { rootMargin: '-50% 0px -50% 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [cleanPath]);

  function handleClick() {
    if (isSection) {
      handleScrollTo(cleanPath, 500);
    } else {
      router.push(link.path);
    }
  }

  return (
    <li key={link.label} className="flex  justify-center s text-[14px] leading-[21px]">
      <span
        className="cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        active={isActive || isAtSection}
      >
        {link.label} {icon}
      </span>
      <div className={styles.navLink}>
        {link.dropdown && (
          <DropDown
            dropdownList={link.dropdown}
            setIsHovered={setIsHovered}
            isHovered={isHovered}
            motion={motion}
          />
        )}
      </div>
    </li>
  );
}

export default NavLink;
