import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-[#0B1F3A]"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
          alt="Infrastructure serveur moderne pour la migration de bases de données"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/92 via-[#0B1F3A]/72 to-[#007BFF]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-[#0B1F3A]/40" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-4 font-[Syne] text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl"
        >
          Nexora
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28 }}
          className="max-w-3xl font-[Syne] text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
        >
          Migrez votre Drupal legacy vers une plateforme stable et pérenne
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="mt-5 max-w-xl font-[Outfit] text-base text-white/80 md:text-lg"
        >
          Audit, migration de base de données, reprise fonctionnelle et devis prêt pour un
          appel de fonds en budget participatif.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#parcours"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] px-7 py-3.5 font-[Outfit] text-sm font-semibold text-[#0A1628] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Découvrir le parcours
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#devis"
            className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-7 py-3.5 font-[Outfit] text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#40E0D0] hover:bg-white/10"
          >
            Voir le chiffrage
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/35 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-[#40E0D0]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
