import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

const TEASER_COUNT = 3;

export function PortfolioGrid() {
  const teaser = projects.slice(0, TEASER_COUNT);

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-peacock-dim">Work</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">A style, in progress</h2>
        </div>
        <Link
          to="/work"
          className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-peacock hover:text-peacock-dim"
        >
          View All Work
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teaser.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
