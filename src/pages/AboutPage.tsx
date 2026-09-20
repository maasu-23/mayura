import { Reveal } from '../components/Reveal';

export function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-40">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-peacock-dim">About</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
          About Mayura Interiors
        </h1>
        <p className="mt-4 text-lg text-ink-dim">Creating Spaces. Crafting Experiences.</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 space-y-5 text-ink-dim">
        <p>
          Founded in 2016, <strong className="font-semibold text-ink">Mayura Interiors</strong> is
          an interior design and execution company built around one simple philosophy — creating
          spaces that are beautiful, functional, and made to last.
        </p>
        <p>
          With over a decade of experience in the interior industry, we provide{' '}
          <strong className="font-semibold text-ink">end-to-end interior solutions</strong>,
          bringing design, manufacturing, and execution together under one roof.
        </p>
        <p>
          From thoughtfully designed homes and modular kitchens to wardrobes, living spaces,
          bedrooms, and commercial environments, every project is planned around the client's
          lifestyle, requirements, and vision.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-14">
        <h2 className="text-2xl font-semibold text-ink">Design • Manufacture • Execute</h2>
        <div className="mt-5 space-y-5 text-ink-dim">
          <p>
            What sets Mayura Interiors apart is our integrated approach. With{' '}
            <strong className="font-semibold text-ink">in-house manufacturing capabilities</strong>,
            we maintain greater control over materials, craftsmanship, finishing, and execution
            throughout the project.
          </p>
          <p>
            Our team works closely with every client from the initial consultation and space
            planning to design development, manufacturing, installation, and final handover.
          </p>
          <p>
            We believe great interiors are not simply about how a space looks. They are about{' '}
            <strong className="font-semibold text-ink">
              how it feels, how it functions, and how well it serves the people who live or work
              in it.
            </strong>
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mt-14">
        <h2 className="text-2xl font-semibold text-ink">Our Commitment</h2>
        <div className="mt-5 space-y-5 text-ink-dim">
          <p>
            At Mayura Interiors, we combine{' '}
            <strong className="font-semibold text-ink">
              creative design, skilled craftsmanship, quality materials, and professional execution
            </strong>{' '}
            to deliver interiors that reflect individuality and stand the test of time.
          </p>
          <p>
            Whether it is a new home, a complete renovation, or a commercial space, our goal is to
            make the entire interior journey{' '}
            <strong className="font-semibold text-ink">transparent, organized, and effortless</strong>{' '}
            for our clients.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.25} className="mt-16 border-t border-line pt-8 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-peacock">
          Mayura Interiors — Design • Manufacture • Execute
        </p>
      </Reveal>
    </section>
  );
}
