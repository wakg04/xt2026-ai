import { motion } from 'framer-motion';

const stats = [
  { value: '4.9', label: 'App Store rating', suffix: '★' },
  { value: '25', label: 'Min avg. delivery', suffix: ' min' },
  { value: '1,200+', label: 'Local restaurants', suffix: '' },
];

const floatingCards = [
  { emoji: '🍕', title: 'Pizza arrives in 18 min', delay: 0 },
  { emoji: '🍣', title: 'Sushi Express — on the way', delay: 2.2 },
  { emoji: '🥗', title: 'Healthy Bowl delivered!', delay: 4.5 },
];

function FloatingCard({ emoji, title, delay, index }: { emoji: string; title: string; delay: number; index: number }) {
  const positions = [
    { top: '15%', right: '-2.5rem' },
    { top: '42%', right: '-4rem' },
    { top: '68%', right: '-1.5rem' },
  ];

  return (
    <motion.div
      className="pointer-events-none absolute z-20 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 backdrop-blur-xl px-4 py-3 shadow-xl shadow-orange-100/30"
      style={{ [positions[index].top]: positions[index].top, right: 0 }}
      animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-lg shadow-sm">
        {emoji}
      </span>
      <div>
        <p className="text-xs font-semibold text-slate-900 whitespace-nowrap">{title}</p>
        <p className="text-[11px] text-slate-500">Track in real time</p>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-hero"
      aria-labelledby="hero-heading"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-orange-200/30 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-[24rem] w-[24rem] rounded-full bg-orange-100/40 blur-3xl" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">

          {/* Left column — text */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6B35] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#FF6B35] animate-pulse" />
              New in town
            </span>

            <h1 id="hero-heading" className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              Your favorite food,{' '}
              <span className="text-[#FF6B35]">delivered fast</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Order from handpicked local restaurants, track your meal in real time,
              and enjoy doorstep delivery that feels effortless. Fresh, hot, and right on time.
            </p>

            {/* App store buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              {/* App Store */}
              <a
                href="#download"
                className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-300/40 transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-300/50 hover:-translate-y-0.5 btn-press"
                aria-label="Download on the App Store"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left leading-tight">
                  <span className="block text-[11px] font-normal text-slate-400">Download on the</span>
                  <span className="font-semibold">App Store</span>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="#download"
                className="inline-flex items-center gap-3 rounded-full border-2 border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-soft transition-all hover:border-[#FF6B35] hover:text-[#FF6B35] hover:shadow-soft-lg btn-press"
                aria-label="Get it on Google Play"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left leading-tight">
                  <span className="block text-[11px] font-normal text-slate-500">Get it on</span>
                  <span className="font-semibold">Google Play</span>
                </div>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 grid grid-cols-3 gap-3 max-w-md">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-soft"
                >
                  <p className="text-xl font-bold text-slate-900 leading-none">
                    {item.value}
                    <span className="text-[#FF6B35]">{item.suffix}</span>
                  </p>
                  <p className="mt-1.5 text-xs text-slate-500 leading-tight">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — iPhone mockup */}
          <motion.div
            className="relative mx-auto w-full max-w-[320px]"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            {/* Floating cards around phone */}
            {floatingCards.map((card, i) => (
              <FloatingCard key={card.title} {...card} index={i} />
            ))}

            {/* iPhone frame */}
            <div className="relative mx-auto w-[272px] rounded-[2.75rem] border-[3px] border-slate-800 bg-slate-800 p-2.5 shadow-2xl shadow-orange-200/30">
              {/* Dynamic Island */}
              <div className="absolute top-2.5 left-1/2 z-10 h-7 w-32 -translate-x-1/2 rounded-full bg-slate-800" />

              {/* Screen */}
              <div className="overflow-hidden rounded-[2.25rem] bg-gradient-to-b from-[#FF6B35] via-orange-500 to-orange-600">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 pt-10 pb-2 text-white">
                  <span className="text-xs font-semibold">9:41</span>
                  <div className="flex gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-80"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C17.93 3.93 6.07 3.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-6-6l2 2c2.76-2.76 7.24-2.76 10 0l2-2C12.14 6.49 5.86 6.49 3 11z"/></svg>
                  </div>
                </div>

                {/* App header */}
                <div className="px-6 pt-2 pb-3">
                  <h2 className="text-xl font-bold text-white">Foodiez</h2>
                  <p className="text-sm text-white/70">Hungry? We've got you.</p>
                </div>

                {/* Restaurant cards */}
                <div className="space-y-3 px-4 pb-5">
                  {[
                    { name: 'Sushi Express', cuisine: 'Japanese', rating: '4.8', eta: '20-30 min', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=200&q=80' },
                    { name: 'FireBite Pizza', cuisine: 'Italian', rating: '4.9', eta: '15-25 min', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=200&q=80' },
                    { name: 'GreenLeaf Kitchen', cuisine: 'Healthy', rating: '4.7', eta: '15-20 min', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80' },
                  ].map((restaurant) => (
                    <motion.div
                      key={restaurant.name}
                      className="flex gap-3 rounded-2xl bg-white/95 p-3.5 shadow-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl bg-orange-100">
                        <img
                          src={restaurant.img}
                          alt=""
                          className="h-full w-full object-cover"
                          loading="lazy"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-900 truncate">{restaurant.name}</p>
                        <p className="text-xs text-slate-500">{restaurant.cuisine} · {restaurant.rating} ★</p>
                        <p className="mt-0.5 text-xs font-semibold text-[#FF6B35]">{restaurant.eta}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom nav */}
                <div className="flex items-center justify-around border-t border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  {['🏠', '🔍', '📦', '👤'].map((icon, i) => (
                    <span key={i} className="text-base opacity-70">{icon}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
