import { motion } from 'framer-motion';

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#FF6B35] via-[#ff7a4d] to-[#FF6B35]" aria-labelledby="promo-heading">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-white/8 blur-2xl" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-xl p-8 shadow-2xl sm:p-12 lg:p-14"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF6B35]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
                Limited time offer
              </span>
              <h2 id="promo-heading" className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Free delivery on your first order
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                New to Foodiez? Enjoy zero delivery fees on your very first meal. Premium support, real-time tracking, and hot food at your door — on us.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                No hidden fees. Cancel anytime.
              </div>
            </div>

            <div className="flex items-center lg:justify-end">
              <motion.a
                href="#download"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF6B35] px-8 py-4.5 text-base font-semibold text-white shadow-orange-lg transition-all hover:bg-[#e55a2b] hover:shadow-orange hover:-translate-y-0.5 btn-press"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Claim free delivery
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
