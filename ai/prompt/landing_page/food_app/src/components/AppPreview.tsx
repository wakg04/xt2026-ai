import { useRef } from 'react';
import { motion } from 'framer-motion';

const screens = [
  {
    title: 'Discover',
    body: 'Fresh recommendations tailored to your cravings, updated daily.',
    accent: 'For you',
    gradient: 'from-orange-500 via-red-400 to-pink-500',
  },
  {
    title: 'Checkout',
    body: 'One-tap reordering with saved payment info and delivery preferences.',
    accent: 'Speed',
    gradient: 'from-emerald-500 via-teal-400 to-cyan-500',
  },
  {
    title: 'Track live',
    body: 'Real-time map with rider location and accurate ETA updates.',
    accent: 'Live map',
    gradient: 'from-violet-500 via-purple-400 to-fuchsia-500',
  },
  {
    title: 'Favorites',
    body: 'Save your top restaurants and dishes for instant access anytime.',
    accent: 'Your picks',
    gradient: 'from-amber-500 via-orange-400 to-yellow-500',
  },
  {
    title: 'Support',
    body: 'In-app chat with real humans. Help is always one tap away.',
    accent: '24/7 help',
    gradient: 'from-sky-500 via-blue-400 to-indigo-500',
  },
];

export default function AppPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="download" className="bg-orange-50 py-20 sm:py-28" aria-labelledby="preview-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6B35]">App preview</p>
          <h2 id="preview-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Explore what's inside Foodiez
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 max-w-xl mx-auto">
            Swipe through the screens that make ordering, tracking, and enjoying food effortless.
          </p>
        </motion.div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="mt-12 flex gap-5 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          role="list"
          aria-label="App screen previews"
        >
          {screens.map((screen, index) => (
            <motion.div
              key={screen.title}
              className="min-w-[260px] sm:min-w-[300px] snap-start"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              role="listitem"
            >
              {/* Phone frame */}
              <div className="overflow-hidden rounded-[2.5rem] border-[3px] border-slate-800 bg-slate-800 p-2 shadow-xl">
                {/* Notch */}
                <div className="mx-auto mb-2 h-6 w-32 rounded-b-2xl bg-slate-800" />

                {/* Screen */}
                <div className={`overflow-hidden rounded-[2rem] bg-gradient-to-br ${screen.gradient} p-5 pt-3 h-96 flex flex-col justify-between`}>
                  {/* Status bar */}
                  <div className="flex items-center justify-between text-white/80">
                    <span className="text-[11px] font-semibold">9:41</span>
                    <div className="flex gap-1">
                      <span className="block h-2.5 w-2.5 rounded-full bg-white/40" />
                      <span className="block h-2.5 w-2.5 rounded-full bg-white/40" />
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="self-start rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-white uppercase tracking-wider">
                    {screen.accent}
                  </span>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-2xl font-bold text-white">{screen.title}</p>
                    <p className="mt-3 text-sm leading-6 text-white/80">{screen.body}</p>
                  </div>

                  {/* Bottom hint */}
                  <div className="flex items-center justify-center gap-1.5 pt-2 border-t border-white/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                    <span className="h-1.5 w-5 rounded-full bg-white" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
