import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const WordAnimator = ({
  text,
  as: Tag = 'h1', // Default is h1, can be any HTML tag like p, span, etc.
  animationDuration = 0.5,
  staggerDelay = 0.1,
  spacing = '1rem',
}) => {
  const [isClient, setIsClient] = useState(false);
  const words = text.split(' ');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const wordVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: (index) => ({
      y: '0%',
      opacity: 1,
      transition: {
        duration: animationDuration,
        delay: index * staggerDelay,
      },
    }),
  };

  if (!isClient) {
    return (
      <div
        style={{
          display: 'inline-block',
          overflow: 'hidden',
        }}
        ref={ref}
      >
        {words.map((word, index) => (
          <div
            key={index}
            style={{
              display: 'inline-block',
              marginRight: spacing,
              visibility: 'hidden',
            }}
          >
            <Tag>{`${word}  `} </Tag>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={{
        display: 'inline-block',
        overflow: 'hidden',
      }}
    >
      {words.map((word, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={wordVariants}
          style={{ display: 'inline-block', marginRight: spacing }}
        >
          <Tag>{`${word}  `} </Tag>
        </motion.div>
      ))}
    </div>
  );
};

export default WordAnimator;
