import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Restaurants', href: '#features' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Download', href: '#download' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-soft-lg border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-md border-b border-transparent'
      }`}
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2 text-2xl font-extrabold tracking-tight"
          aria-label="Foodiez home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF6B35] text-lg text-white shadow-orange transition-transform group-hover:scale-105">
            F
          </span>
          <span className="text-slate-900">Foodiez</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-orange-50 hover:text-[#FF6B35]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href="#download" className="hidden lg:inline-flex btn-primary">
          Get the App
        </a>

        {/* Mobile hamburger */}
        <button
          className="inline-flex items-center justify-center rounded-xl p-2.5 text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed right-0 top-0 z-50 flex h-full w-80 flex-col bg-white shadow-2xl lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <span className="text-xl font-extrabold text-[#FF6B35]">Foodiez</span>
                <button
                  className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 transition-colors"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-4 py-3.5 text-base font-medium text-slate-700 transition-colors hover:bg-orange-50 hover:text-[#FF6B35]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-auto p-4 border-t border-slate-100">
                <a
                  href="#download"
                  className="flex w-full items-center justify-center rounded-full bg-[#FF6B35] px-6 py-4 text-sm font-semibold text-white shadow-orange btn-press"
                  onClick={() => setMenuOpen(false)}
                >
                  Get the App
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
