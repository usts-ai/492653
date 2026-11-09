import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { etapes, flux } from '../data/mock';

const ParcoursSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [actif, setActif] = useState(0);

  return (
    <section
      id="parcours"
      ref={ref}
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="font-[Outfit] text-xs font-semibold uppercase tracking-[0.22em] text-[#007BFF]"
            >
              Parcours
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="mt-3 font-[Syne] text-3xl font-bold text-[#0A1628] md:text-5xl"
            >
              Six étapes pour une migration sans rupture
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="max-w-sm font-[Outfit] text-sm text-[#333333]/70 md:text-base"
          >
            Explorez chaque phase : de l’audit Drupal jusqu’au devis pour le budget participatif.
          </motion.p>
        </div>

        <div className="mt-12 flex gap-2 overflow-x-auto pb-2 md:mt-14 md:flex-wrap md:overflow-visible">
          {etapes.map((etape, i) => (
            <motion.button
              key={etape.id}
              type="button"
              onClick={() => setActif(i)}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05 }}
              className={`shrink-0 rounded-xl px-4 py-2.5 font-[Outfit] text-sm font-medium transition-all duration-300 ${
                actif === i
                  ? 'bg-[#007BFF] text-white shadow-[0_10px_30px_rgba(0,123,255,0.25)]'
                  : 'bg-[#F0F7FF] text-[#0A1628]/70 hover:bg-[#E3F2FF]'
              }`}
            >
              <span className="mr-2 opacity-60">{etape.id}</span>
              {etape.titre}
            </motion.button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <div className="relative overflow-hidden rounded-2xl lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.img
                key={actif}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                src={
                  actif % 2 === 0
                    ? 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80'
                    : 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80'
                }
                alt="Illustration technique de migration et développement"
                className="h-64 w-full object-cover sm:h-80 lg:h-full lg:min-h-[360px]"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 to-transparent" />
            <p className="absolute bottom-5 left-5 font-[Syne] text-4xl font-bold text-white/90">
              {etapes[actif].id}
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-[#F4FBFF] p-8 lg:col-span-3 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={actif}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="font-[Syne] text-2xl font-bold text-[#0A1628] md:text-3xl">
                  {etapes[actif].titre}
                </h3>
                <p className="mt-4 max-w-xl font-[Outfit] text-base leading-relaxed text-[#333333]/80 md:text-lg">
                  {etapes[actif].description}
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActif((a) => (a === 0 ? etapes.length - 1 : a - 1))}
                    className="rounded-xl border border-[#007BFF]/20 px-4 py-2 font-[Outfit] text-sm text-[#007BFF] transition-colors hover:bg-[#007BFF] hover:text-white"
                  >
                    Précédent
                  </button>
                  <button
                    type="button"
                    onClick={() => setActif((a) => (a + 1) % etapes.length)}
                    className="rounded-xl bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] px-4 py-2 font-[Outfit] text-sm font-semibold text-[#0A1628]"
                  >
                    Suivant
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <p className="mb-6 font-[Outfit] text-xs font-semibold uppercase tracking-[0.2em] text-[#007BFF]">
            Flux de travail
          </p>
          <div className="relative flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-6 md:overflow-visible">
            {flux.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.06 }}
                className="relative min-w-[140px] flex-1"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#007BFF] font-[Syne] text-xs font-bold text-white">
                  {i + 1}
                </div>
                <p className="font-[Outfit] text-sm font-medium leading-snug text-[#0A1628]">
                  {f}
                </p>
                {i < flux.length - 1 && (
                  <span className="absolute left-9 top-4 hidden h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-[#00C9FF] to-transparent md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParcoursSection;
