import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Browse restaurants',
    description:
      'Explore curated menus from the best local kitchens. Filter by cuisine, rating, or delivery time to find exactly what you crave.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
      </svg>
    ),
    color: 'bg-orange-100 text-[#FF6B35]',
  },
  {
    number: '02',
    title: 'Order in seconds',
    description:
      'Customize toppings, add special instructions, and check out with one tap. Your saved preferences make reordering instant.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    color: 'bg-amber-100 text-amber-600',
  },
  {
    number: '03',
    title: 'Fast delivery',
    description:
      'Track your order from kitchen prep to your doorstep. Get live ETA updates and know exactly when your food arrives.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    color: 'bg-green-100 text-green-600',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20 sm:py-28" aria-labelledby="how-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6B35]">
            How it works
          </p>
          <h2 id="how-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Three steps to fresh food at your door
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 max-w-xl mx-auto">
            Foodiez makes ordering effortless — whether you're at home, the office, or on the go.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-14 grid gap-6 sm:gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="group relative rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/30 hover:-translate-y-1"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              {/* Step number — decorative */}
              <span className="absolute top-6 right-6 text-7xl font-extrabold text-slate-50 select-none" aria-hidden="true">
                {step.number}
              </span>

              <div className={`relative flex h-16 w-16 items-center justify-center rounded-2xl ${step.color} shadow-sm transition-transform group-hover:scale-110`}>
                {step.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>

              {/* Arrow connector between cards (desktop) */}
              {index < 2 && (
                <div className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14" />
                    <path d="M13 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
