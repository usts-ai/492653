import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { avantages, chiffres } from '../data/mock';

const MissionSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="mission"
      ref={ref}
      className="relative overflow-hidden bg-[#F4FBFF] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-[#00C9FF]/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-[#92FE9D]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="font-[Outfit] text-xs font-semibold uppercase tracking-[0.22em] text-[#007BFF]"
            >
              Mission
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="mt-3 font-[Syne] text-3xl font-bold leading-tight text-[#0A1628] md:text-5xl"
            >
              Du Drupal historique à une plateforme qui dure
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-5 font-[Outfit] text-base leading-relaxed text-[#333333] md:text-lg"
            >
              Votre site public, exposé sur Internet et adossé à une ancienne version de Drupal,
              mérite une refonte technique propre : contenus préservés, administration simplifiée,
              maintenance maîtrisée et devis clair pour l’appel de fonds.
            </motion.p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
              {chiffres.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.08 }}
                  className="border-l-2 border-[#40E0D0] pl-4"
                >
                  <p className="font-[Syne] text-2xl font-bold text-[#007BFF] md:text-3xl">
                    {c.valeur}
                  </p>
                  <p className="mt-1 font-[Outfit] text-xs text-[#333333]/70 md:text-sm">
                    {c.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80"
                alt="Transformation numérique et données connectées"
                className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.45 }}
              className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-[0_20px_50px_rgba(0,123,255,0.12)] backdrop-blur-md sm:left-8 sm:right-auto sm:max-w-xs"
            >
              <p className="font-[Syne] text-sm font-bold text-[#0A1628]">
                Intégrité & traçabilité
              </p>
              <p className="mt-2 font-[Outfit] text-xs leading-relaxed text-[#333333]/80">
                Chaque enregistrement migré est contrôlé, journalisé et validé avant la mise en
                production.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {avantages.map((a, i) => (
            <motion.article
              key={a.titre}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-[#007BFF]/10 bg-white p-6 transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(0,123,255,0.1)]"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] transition-all duration-300 group-hover:w-16" />
              <h3 className="font-[Syne] text-lg font-bold text-[#0A1628]">{a.titre}</h3>
              <p className="mt-3 font-[Outfit] text-sm leading-relaxed text-[#333333]/75">
                {a.texte}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
