import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const lignes = [
  { poste: 'Audit Drupal & base de données', jours: '5–8 j', montant: '4 800 €' },
  { poste: 'Choix plateforme & architecture', jours: '3–4 j', montant: '2 400 €' },
  { poste: 'Scripts migration & import', jours: '10–14 j', montant: '9 600 €' },
  { poste: 'Reprise fonctionnelle & thème', jours: '12–18 j', montant: '12 000 €' },
  { poste: 'Recette, redirections 301, prod', jours: '6–8 j', montant: '5 200 €' },
  { poste: 'Documentation & transfert', jours: '2–3 j', montant: '1 800 €' },
];

const DevisSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="devis"
      ref={ref}
      className="relative overflow-hidden bg-[#F4FBFF] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -left-16 top-1/3 h-72 w-72 rounded-full bg-[#92FE9D]/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="font-[Outfit] text-xs font-semibold uppercase tracking-[0.22em] text-[#007BFF]"
            >
              Devis
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="mt-3 font-[Syne] text-3xl font-bold text-[#0A1628] md:text-5xl"
            >
              Un chiffrage clair pour l’appel de fonds
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18 }}
              className="mt-5 font-[Outfit] text-base leading-relaxed text-[#333333]/80"
            >
              Estimation indicative destinée au budget participatif. Les montants finaux dépendent
              de l’audit et de la complexité réelle des modules Drupal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.28 }}
              className="mt-8 overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                alt="Analyse budgétaire et planification de projet"
                className="h-52 w-full object-cover sm:h-64"
              />
            </motion.div>

            <motion.a
              href="#top"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#007BFF] px-6 py-4 font-[Outfit] text-sm font-semibold text-white transition-shadow hover:shadow-[0_14px_40px_rgba(0,123,255,0.35)] sm:w-auto"
            >
              Demander le devis détaillé
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="overflow-hidden rounded-2xl border border-[#007BFF]/12 bg-white lg:col-span-7"
          >
            <div className="flex items-center justify-between border-b border-[#007BFF]/10 bg-gradient-to-r from-[#00C9FF]/10 to-[#92FE9D]/10 px-5 py-4 md:px-6">
              <p className="font-[Syne] text-sm font-bold text-[#0A1628] md:text-base">
                Estimation projet migration
              </p>
              <span className="rounded-lg bg-[#007BFF]/10 px-3 py-1 font-[Outfit] text-xs font-semibold text-[#007BFF]">
                Indicatif
              </span>
            </div>

            <div className="divide-y divide-[#007BFF]/08">
              {lignes.map((l, i) => (
                <motion.div
                  key={l.poste}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.06 }}
                  className="grid grid-cols-12 items-center gap-2 px-5 py-4 transition-colors hover:bg-[#F4FBFF] md:px-6"
                >
                  <p className="col-span-12 font-[Outfit] text-sm text-[#0A1628] sm:col-span-6 md:text-[15px]">
                    {l.poste}
                  </p>
                  <p className="col-span-6 font-[Outfit] text-xs text-[#333333]/55 sm:col-span-3 sm:text-right sm:text-sm">
                    {l.jours}
                  </p>
                  <p className="col-span-6 text-right font-[Syne] text-sm font-bold text-[#007BFF] sm:col-span-3">
                    {l.montant}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-2 border-t border-[#007BFF]/10 bg-[#0B1F3A] px-5 py-5 text-white sm:flex-row sm:items-center sm:justify-between md:px-6">
              <p className="font-[Outfit] text-sm text-white/70">Fourchette totale estimée</p>
              <p className="font-[Syne] text-2xl font-bold md:text-3xl">
                <span className="bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] bg-clip-text text-transparent">
                  35 800 – 42 000 €
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DevisSection;
