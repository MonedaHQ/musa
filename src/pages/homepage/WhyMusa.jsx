import { useRef, useEffect } from 'react';
import Hls from 'hls.js';

import Section from '@/components/Section';

import styles from './styles/whymusa.module.css';

import { IoIosCheckmarkCircle } from 'react-icons/io';

const musaReasons = [
  '<strong>No Collateral, No Delays</strong> – Quick funding designed for Critical SMEs.',
  '<strong>Beyond Financing</strong> – Hands-on execution support to keep your projects on track.',
  '<strong>Smarter Risk, Faster Approvals</strong> – Our risk rating algorithm ensures fair, data-driven decisions.',
  '<strong>Built for African SMEs</strong> – Tailored solutions that help you scale and succeed.',
  '<strong>Backed by Moneda</strong> – Trusted expertise in funding Africa’s natural resource value chain.',
];

function WhyMusa() {
  return (
    <Section>
      <div className={styles.container} id="why-musa">
        <h2>
          Why <span>Musa</span>
        </h2>
        <div className={styles.content}>
          <Benefits />
          <VideoPlayer />
        </div>
        <div className={styles.getStarted}>
          <p>Let Musa power your growth.</p>
          <a href="https://musa.monedainvest.app/">Get started today</a>
        </div>
      </div>
    </Section>
  );
}

function Benefits() {
  return (
    <div className={styles.benefitsBox}>
      {musaReasons.map((reason) => (
        <Benefit reason={reason} key={reason} />
      ))}
    </div>
  );
}

function Benefit({ reason }) {
  return (
    <div className={styles.benefit}>
      <IoIosCheckmarkCircle />
      <p dangerouslySetInnerHTML={{ __html: reason }} />
    </div>
  );
}

function VideoPlayer() {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/E9i6J5wkCcw?rel=0&modestbranding=1&showinfo=0&autoplay=0&controls=1"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className={styles.video}
    />
  );
}

export default WhyMusa;
