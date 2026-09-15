import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

type Props = {
  text: string;
  className?: string;
  /** Seconds before the first word moves. */
  delay?: number;
  as?: 'h1' | 'h2' | 'p';
};

const container: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.055, delayChildren: delay },
  }),
};

const word: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Reveals a headline word by word, each word sliding up out of its own clipping
 * box. The whole string stays in the accessibility tree as one label so screen
 * readers do not read it as isolated words.
 */
export function WordReveal({ text, className = '', delay = 0.15, as = 'h1' }: Props) {
  const Tag = motion[as];
  const words = text.split(' ');

  return (
    <Tag
      className={className}
      variants={container}
      custom={delay}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          aria-hidden
          // `pb`/`-mb` gives descenders room so they are not clipped mid-glyph.
          className="inline-flex overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom"
        >
          <motion.span variants={word} className="inline-block gpu">
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
