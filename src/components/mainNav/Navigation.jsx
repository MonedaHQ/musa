import Image from "next/image";
import { motion } from "framer-motion";

import NavLink from "./NavLink";
import Button from "../Button";

import { homeMenuLinks } from "@/data/menu";
import { useRouter } from "next/router";

import styles from "./styles/navigation.module.css";

function Navigation({ scrollPosition = 0, darkHero = false }) {
  const router = useRouter();
  const route = router.route;
  const isScrolled = scrollPosition > 120;

  const showWhiteBg = isScrolled || !darkHero;
  const navContainerClass = `${styles.navContainer} ${
    showWhiteBg ? styles.whiteBg : darkHero ? styles.dark : ""
  }`;

  const effectiveDarkHero = showWhiteBg ? false : darkHero;

  const logoSrc = showWhiteBg
    ? "/assets/logo/musa-dark.png"
    : "/assets/logo/musa-logo.png";

  const headerIntro = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, ease: [0.67, 0.41, 0, 1] },
    },
  };

  return (
    <motion.header
      className={navContainerClass}
      variants={headerIntro}
      initial="initial"
      animate="animate"
    >
      <nav className="flex justify-between items-center  container px-10 mx-auto">
        <Image
          width={showWhiteBg ? 600 : 408.5}
          height={showWhiteBg ? 1200 : 79}
          src={logoSrc}
          alt="Musa Logo"
          draggable={false}
          className={styles.logo}
          onClick={() => router.push("/")}
        />
        <ul className="hidden xl:flex gap-6 md:gap-16 items-center">
          {homeMenuLinks.map((link) => (
            <NavLink
              key={link.label}
              link={link}
              motion={motion}
              darkHero={effectiveDarkHero}
              isActive={route === link.path}
            />
          ))}
        </ul>
        <div className={`hidden xl:block`}>
          <AuthButtons darkHero={effectiveDarkHero} />
        </div>
      </nav>
    </motion.header>
  );
}

function AuthButtons({ darkHero }) {
  return (
    <div className={styles.authButtons}>
      <Button
        variant={darkHero ? "primary-dark" : "primary"}
        href="https://musa-app.moneda.africa/account/login?redirect=/dashboard"
      >
        Login
      </Button>
      <Button
        className="rounded-[4px] text-white px-9 py-5 font-normal"
        variant="secondary"
        href="https://musa-app.moneda.africa/account/register"
      >
        Get Started
      </Button>
    </div>
  );
}

export default Navigation;
