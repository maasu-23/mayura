import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { site } from '../data/site';
import { EnquiryModal, type EnquirySubject } from './EnquiryModal';
import { FillButton } from './FillButton';
import { GradientBackdrop } from './GradientBackdrop';

const CONSULTATION_SUBJECT: EnquirySubject = {
  description: 'Free consultation — we will connect you on WhatsApp.',
  message: "Hi, I'd like to book a free consultation.",
};

const CHAT_SUBJECT: EnquirySubject = {
  description: 'We will connect you on WhatsApp.',
  message: 'Hi, I have a question about Mayura Interiors.',
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [enquiring, setEnquiring] = useState<EnquirySubject | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  // Image is oversized (130% height, see below) so this range never reveals
  // an edge — subtle drift, not a full parallax rig.
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src="/hero/bedroom-luxury-chandelier.jpg"
          alt=""
          style={{ y }}
          className="absolute left-0 top-[-15%] h-[130%] w-full object-cover"
        />
      </div>
      <div className="absolute inset-0">
        <GradientBackdrop />
      </div>
      {/* Text sits in the left ~55%, so the scrim needs to be solid there and
          drop off fast — a slow 3-stop fade (Tailwind's from/via/to) stays
          >30% opaque past the text and washes out the photo on the right. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(248,248,246,0.78) 0%, rgba(248,248,246,0.78) 42%, rgba(248,248,246,0.45) 54%, rgba(248,248,246,0) 70%)',
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-paper" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-6xl px-6"
      >
        <a
          href={site.chennai.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-full bg-peacock py-2.5 pl-3 pr-6 text-paper shadow-lg shadow-peacock/30 ring-4 ring-peacock/15 transition-all hover:bg-peacock-dim hover:ring-peacock/25"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-brass" />
          </span>
          <span className="text-base font-semibold tracking-wide md:text-lg">
            Now open in Chennai
          </span>
          <span className="hidden text-sm text-paper/80 sm:inline">· {site.chennai.name}</span>
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </a>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-peacock-dim">
          {site.region} · Tamil Nadu · Residential Interiors
        </p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-7xl">
          {site.hero.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink-dim">{site.hero.sub}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <FillButton onClick={() => setEnquiring(CONSULTATION_SUBJECT)} solid>
            {site.hero.cta}
          </FillButton>
          <FillButton onClick={() => setEnquiring(CHAT_SUBJECT)} solid>
            Chat with Kerala
          </FillButton>
        </div>
      </motion.div>

      <EnquiryModal subject={enquiring} onClose={() => setEnquiring(null)} />
    </section>
  );
}
