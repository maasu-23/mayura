import { useState } from 'react';
import { INITIAL_VISIBLE, projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function PortfolioGrid() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_VISIBLE);

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-peacock-dim">Work</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">A style, in progress</h2>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {!showAll && projects.length > INITIAL_VISIBLE && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-peacock hover:text-peacock-dim"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}
