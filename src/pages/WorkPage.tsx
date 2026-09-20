import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';

export function WorkPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-40">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-peacock-dim">Work</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">A style, in progress</h1>
        <p className="mt-4 max-w-xl text-ink-dim">
          Every render here is real design work from our own team — not stock, not AI — shown
          exactly as we build it, ahead of construction.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 0.1}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
