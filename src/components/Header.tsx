import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const liens = [
  { href: '#mission', label: 'Mission' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#plateformes', label: 'Plateformes' },
  { href: '#devis', label: 'Devis' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F4FBFF]/90 backdrop-blur-xl border-b border-[#007BFF]/15 shadow-[0_8px_30px_rgba(0,123,255,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#00C9FF] to-[#92FE9D]">
            <span className="absolute inset-0 translate-y-full bg-[#007BFF] transition-transform duration-500 group-hover:translate-y-0" />
            <span className="relative font-[Syne] text-sm font-bold text-white">N</span>
          </span>
          <span className="font-[Syne] text-xl font-bold tracking-tight text-[#0A1628] md:text-2xl">
            Nexora
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {liens.map((lien) => (
            <a
              key={lien.href}
              href={lien.href}
              className="group relative px-4 py-2 font-[Outfit] text-sm font-medium text-[#0A1628]/75 transition-colors hover:text-[#007BFF]"
            >
              {lien.label}
              <span className="absolute bottom-1 left-4 right-4 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#devis"
            className="group relative overflow-hidden rounded-xl bg-[#007BFF] px-5 py-2.5 font-[Outfit] text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span className="relative z-10">Obtenir un devis</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#00C9FF] to-[#40E0D0] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-[#007BFF]/20 bg-white/70 lg:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-5 bg-[#0A1628]"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-5 bg-[#0A1628]"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-5 bg-[#0A1628]"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 top-full border-b border-[#007BFF]/10 bg-[#F4FBFF]/95 px-5 py-6 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {liens.map((lien, i) => (
                <motion.a
                  key={lien.href}
                  href={lien.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl px-4 py-3 font-[Outfit] text-lg font-medium text-[#0A1628] transition-colors hover:bg-[#007BFF]/08 hover:text-[#007BFF]"
                >
                  {lien.label}
                </motion.a>
              ))}
              <a
                href="#devis"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-xl bg-gradient-to-r from-[#007BFF] to-[#40E0D0] px-4 py-3 text-center font-[Outfit] font-semibold text-white"
              >
                Obtenir un devis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
