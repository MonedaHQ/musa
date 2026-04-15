import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const WordAnimator = ({
  text,
  as: Tag = "h1",
  animationDuration = 0.5,
  staggerDelay = 0.1,
  spacing = "1rem",
  highlightWords = {},
}) => {
  const [isClient, setIsClient] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const lines = text.split(/<br\s*\/?>/);
  const parsedContent = lines.map((line, lineIndex) => ({
    lineIndex,
    words: line.trim().split(" ").filter(Boolean),
  }));

  let wordCounter = 0;
  const flatWords = parsedContent.flatMap(({ lineIndex, words }) =>
    words.map((word) => ({ word, lineIndex, staggerIndex: wordCounter++ })),
  );

  const wordVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (index) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: animationDuration,
        delay: index * staggerDelay,
      },
    }),
  };

  if (!isClient) {
    return (
      <div ref={ref}>
        {parsedContent.map(({ lineIndex, words }) => (
          <div key={lineIndex} style={{ display: "block" }}>
            {words.map((word, wordIndex) => {
              const highlightColor = highlightWords[word];
              return (
                <span
                  key={wordIndex}
                  style={{
                    display: "inline-block",
                    marginRight: spacing,
                    visibility: "hidden",
                  }}
                >
                  <Tag
                    style={
                      highlightColor ? { color: highlightColor } : undefined
                    }
                  >
                    {word}
                  </Tag>
                </span>
              );
            })}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref}>
      {parsedContent.map(({ lineIndex, words }) => (
        <div key={lineIndex} style={{ display: "block" }}>
          {words.map((word) => {
            const flatWord = flatWords.find(
              (fw) => fw.word === word && fw.lineIndex === lineIndex,
            );
            const highlightColor = highlightWords[word];
            return (
              <motion.span
                key={`${lineIndex}-${word}`}
                custom={flatWord?.staggerIndex}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={wordVariants}
                style={{
                  display: "inline-block",
                  marginRight: spacing,
                  overflow: "hidden",
                }}
              >
                <Tag
                  style={highlightColor ? { color: highlightColor } : undefined}
                >
                  {word}
                </Tag>
              </motion.span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default WordAnimator;
