import { motion } from 'framer-motion';

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-[#FF6B35]" aria-labelledby="cta-heading">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute top-0 left-0 h-full w-full" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">
            Ready to feel the difference?
          </p>
          <h2 id="cta-heading" className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Download Foodiez and get your food faster than ever
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            Join thousands of hungry customers who rely on Foodiez for fresh, delicious meals delivered on their schedule — every single time.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* App Store */}
            <a
              href="#"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-lg shadow-black/20 transition-all hover:bg-slate-100 hover:shadow-xl hover:shadow-black/25 hover:-translate-y-0.5"
              aria-label="Download on the App Store"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left leading-tight">
                <span className="block text-[11px] font-normal text-slate-500">Download on the</span>
                <span className="font-semibold">App Store</span>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="#"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#FF6B35] px-8 py-4 text-sm font-semibold text-white shadow-orange-lg transition-all hover:bg-[#e55a2b] hover:shadow-orange hover:-translate-y-0.5"
              aria-label="Get it on Google Play"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              <div className="text-left leading-tight">
                <span className="block text-[11px] font-normal text-white/70">Get it on</span>
                <span className="font-semibold">Google Play</span>
              </div>
            </a>
          </div>

          {/* Trust badge */}
          <p className="mt-8 text-sm text-slate-500">
            No commitment. Cancel anytime. 4.9 ★ rating across platforms.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
