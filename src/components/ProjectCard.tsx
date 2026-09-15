import { motion } from 'framer-motion';
import type { Project } from '../data/projects';
import { PlaceholderImage } from './PlaceholderImage';

type Props = {
  project: Project;
  /** Position in the grid — offsets the breathing loop so cards drift apart. */
  index: number;
  breathing: boolean;
};

export function ProjectCard({ project, index, breathing }: Props) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl border border-cream/10 bg-ink-card gpu"
      animate={
        breathing
          ? { y: [0, -9, 0], scale: [1, 1.006, 1] }
          : undefined
      }
      transition={
        breathing
          ? {
              duration: 6.5 + (index % 3) * 0.9,
              // Staggering the start keeps the grid from pulsing in unison.
              delay: index * 0.45,
              repeat: Infinity,
              ease: 'easeInOut',
            }
          : undefined
      }
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <PlaceholderImage
          scene={project.scene}
          src={project.src}
          alt={`${project.title} — ${project.room}`}
          tag={project.src ? null : 'Illustration'}
        />

        {/* Per the brief: never imply unbuilt work is a finished project. */}
        {!project.completed && (
          <span className="absolute right-3 top-3 rounded-full bg-brass/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-ink">
            Sample Style
          </span>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.16em]">
          <span className="text-peacock-glow">{project.room}</span>
          <span className="text-cream/25">/</span>
          <span className="text-cream/45">{project.style}</span>
        </div>

        <h3 className="font-display text-2xl text-cream">{project.title}</h3>

        <p className="mt-3 text-sm leading-relaxed text-cream/65">{project.description}</p>

        {/* TODO: once the real WhatsApp number is in, consider deep-linking this
            to wa.me with the style name pre-filled in the message. */}
        <a
          href="#contact"
          className="mt-5 inline-flex items-center gap-2 text-sm text-cream/85 underline-offset-4 transition-colors hover:text-peacock-glow hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-peacock-glow"
        >
          Enquire about this style
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </a>
      </div>
    </motion.article>
  );
}
