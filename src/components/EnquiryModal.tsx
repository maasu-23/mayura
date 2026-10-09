import { AnimatePresence, motion } from 'framer-motion';
import { site } from '../data/site';

type Props = {
  packageName: string | null;
  onClose: () => void;
};

/**
 * Package "Enquire" buttons are ambiguous about which location the lead is
 * for, so this asks before handing off to WhatsApp rather than guessing.
 */
export function EnquiryModal({ packageName, onClose }: Props) {
  const message = packageName ? `Hi, I'm interested in the ${packageName} package.` : '';

  const destinations = [
    { label: 'Kerala', href: `${site.contacts[1].href}?text=${encodeURIComponent(message)}` },
    { label: 'Tamil Nadu', href: `${site.chennai.whatsapp}?text=${encodeURIComponent(message)}` },
  ];

  return (
    <AnimatePresence>
      {packageName && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/50 px-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-sm rounded-2xl bg-paper-hi p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold text-ink">Which location is this for?</h3>
            <p className="mt-2 text-sm text-ink-dim">
              {packageName} package — we will connect you on WhatsApp.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {destinations.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="rounded-full bg-peacock px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-paper transition-colors hover:bg-peacock-dim"
                >
                  {d.label}
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-5 text-xs uppercase tracking-widest text-ink-faint transition-colors hover:text-ink"
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
