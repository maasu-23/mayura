import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { site } from '../data/site';

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

/**
 * Two trust signals, stated plainly and nothing more.
 *
 * Sits between the services marquee and the portfolio — claim first, then the
 * work as proof. Deliberately holds only what the business has actually
 * confirmed; see the note in `site.credentials`.
 */
export function Credentials() {
  const { eyebrow, headline, items } = site.credentials;

  return (
    <section id="why" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-peacock-glow">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl leading-tight tracking-tighter text-cream sm:text-5xl">
            {headline}
          </h2>
        </motion.header>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-cream/10 sm:grid-cols-2">
          {items.map((credential, i) => (
            <motion.div
              key={credential.title}
              custom={i}
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="bg-ink-card p-8 sm:p-10"
            >
              <p className="font-display text-3xl leading-tight text-cream sm:text-4xl">
                {credential.title}
              </p>
              <span
                aria-hidden
                className="mt-5 block h-px w-12 bg-brass/60"
              />
              <p className="mt-5 text-base leading-relaxed text-cream/65">
                {credential.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
