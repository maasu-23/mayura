import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const HOLD_MS = 650;

/**
 * Logo splash on full page load/refresh only — mounted once in App, so it
 * never replays on in-site route navigation (no full reload there).
 */
export function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), HOLD_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-paper"
        >
          <motion.img
            src="/mayura-mark.png"
            alt=""
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-16 w-16"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
