import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const CharacterAnimator = ({
  text,
  as: Tag = 'h1', // Default is h1, can be any HTML tag like p, span, etc.
  animationDuration = 0.5,
  staggerDelay = 0.1,
}) => {
  const [isClient, setIsClient] = useState(false);
  const characters = text.split(''); // Split the text into individual characters
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const characterVariants = {
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
        {characters.map((char, index) => (
          <div
            key={index}
            style={{
              display: 'inline-block',
              visibility: 'hidden',
            }}
          >
            <Tag>{char}</Tag>
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
      {characters.map((char, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={characterVariants}
          style={{ display: 'inline-block' }}
        >
          <Tag>{char}</Tag>
        </motion.div>
      ))}
    </div>
  );
};

export default CharacterAnimator;
