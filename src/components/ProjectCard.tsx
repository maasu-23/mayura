import type { Project } from '../data/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-line bg-paper-hi">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.src}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="font-mono text-xs uppercase tracking-widest text-peacock-dim">
          {project.room}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 text-sm text-ink-dim">{project.description}</p>
        <p className="mt-3 text-xs text-ink-faint">{project.style}</p>
      </div>
    </div>
  );
}
