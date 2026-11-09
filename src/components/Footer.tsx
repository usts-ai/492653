import React from 'react';
import { motion } from 'framer-motion';

const colonnes = [
  {
    titre: 'Projet',
    liens: ['Audit Drupal', 'Migration BDD', 'Recette & SEO', 'Mise en production'],
  },
  {
    titre: 'Ressources',
    liens: ['Cahier des charges', 'Devis détaillé', 'Budget participatif', 'Documentation'],
  },
  {
    titre: 'Légal',
    liens: ['Mentions légales', 'Confidentialité', 'Accessibilité', 'Cookies'],
  },
];

const reseaux = [
  { nom: 'LinkedIn', href: '#' },
  { nom: 'GitHub', href: '#' },
  { nom: 'X', href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[#007BFF]/10 bg-[#0B1F3A] text-white">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#00C9FF]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#92FE9D]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#top" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00C9FF] to-[#92FE9D] font-[Syne] text-sm font-bold text-[#0A1628]">
                N
              </span>
              <span className="font-[Syne] text-2xl font-bold">Nexora</span>
            </a>
            <p className="mt-5 max-w-sm font-[Outfit] text-sm leading-relaxed text-white/70">
              Migration de sites et bases de données vers une plateforme moderne, stable et
              durable — conçue pour un financement en budget participatif.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {reseaux.map((r) => (
                <motion.a
                  key={r.nom}
                  href={r.href}
                  whileHover={{ y: -3, scale: 1.04 }}
                  className="rounded-lg border border-white/15 px-4 py-2 font-[Outfit] text-sm text-white/80 transition-colors hover:border-[#40E0D0] hover:text-[#40E0D0]"
                >
                  {r.nom}
                </motion.a>
              ))}
            </div>
          </div>

          {colonnes.map((col) => (
            <div key={col.titre}>
              <h3 className="font-[Syne] text-sm font-bold uppercase tracking-[0.18em] text-[#40E0D0]">
                {col.titre}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.liens.map((lien) => (
                  <li key={lien}>
                    <a
                      href="#mission"
                      className="group inline-flex items-center gap-2 font-[Outfit] text-sm text-white/65 transition-colors hover:text-white"
                    >
                      <span className="h-px w-0 bg-[#00C9FF] transition-all duration-300 group-hover:w-3" />
                      {lien}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="font-[Outfit] text-xs text-white/45">
            © {new Date().getFullYear()} Nexora — Démonstration visuelle. Tous droits réservés.
          </p>
          <p className="font-[Outfit] text-xs text-white/45">
            HTTPS · Sauvegardes · Redirections 301 · Traçabilité
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
