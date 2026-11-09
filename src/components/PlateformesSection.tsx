import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { plateformes } from '../data/mock';

const PlateformesSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section
      id="plateformes"
      ref={ref}
      className="relative overflow-hidden bg-[#0B1F3A] py-20 text-white md:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#40E0D0]/50 to-transparent" />
      <div className="pointer-events-none absolute -right-10 top-24 h-96 w-96 rounded-full bg-[#007BFF]/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="font-[Outfit] text-xs font-semibold uppercase tracking-[0.22em] text-[#40E0D0]"
            >
              Plateformes
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="mt-3 font-[Syne] text-3xl font-bold md:text-4xl lg:text-5xl"
            >
              Une cible récente, stable, peu exigeante
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18 }}
              className="mt-5 font-[Outfit] text-sm leading-relaxed text-white/70 md:text-base"
            >
              Le choix final s’appuie sur l’audit : Drupal LTS, WordPress ou framework PHP —
              toujours avec MySQL/MariaDB ou PostgreSQL, scripts de migration et sauvegardes
              automatisées.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.28 }}
              className="mt-8 overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
                alt="Sécurité et infrastructure numérique"
                className="h-48 w-full object-cover md:h-56"
              />
            </motion.div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-8">
            {plateformes.map((p, i) => (
              <motion.article
                key={p.nom}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1 }}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className={`relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 md:p-8 ${
                  hover === i || (hover === null && i === 0)
                    ? 'border-[#40E0D0]/50 bg-white/10'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <div
                  className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#00C9FF] to-[#92FE9D] transition-opacity duration-300 ${
                    hover === i || (hover === null && i === 0) ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-[Outfit] text-xs uppercase tracking-[0.18em] text-[#40E0D0]">
                      {p.focus}
                    </p>
                    <h3 className="mt-1 font-[Syne] text-2xl font-bold md:text-3xl">{p.nom}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 font-[Outfit] text-xs text-white/80 md:text-sm"
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlateformesSection;
