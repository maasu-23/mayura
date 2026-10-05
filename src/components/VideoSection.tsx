import { useState } from 'react';
import { site } from '../data/site';
import { Reveal } from './Reveal';

export function VideoSection() {
  const { eyebrow, headline, youtubeId } = site.video;
  const [playing, setPlaying] = useState(false);

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-peacock-dim">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">{headline}</h2>
      </Reveal>
      <Reveal delay={0.1} className="mt-10">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-ink">
          {playing && youtubeId ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
              title={headline}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src="/cta/bedroom-moody-marble.jpg"
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-60"
              />
              <button
                onClick={() => youtubeId && setPlaying(true)}
                disabled={!youtubeId}
                aria-label={youtubeId ? 'Play video' : 'Video coming soon'}
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-paper"
              >
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-peacock transition-transform hover:scale-110">
                  <span className="absolute inset-0 animate-ping rounded-full bg-peacock/40" />
                  <span className="relative ml-1 text-2xl">▶</span>
                </span>
                {!youtubeId && (
                  <span className="font-mono text-xs uppercase tracking-widest">Video coming soon</span>
                )}
              </button>
            </>
          )}
        </div>
      </Reveal>
    </section>
  );
}
