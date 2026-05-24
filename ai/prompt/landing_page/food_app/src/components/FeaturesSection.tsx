import { motion } from 'framer-motion';

const features = [
  {
    title: 'Real-time order tracking',
    description: 'Watch your meal move from kitchen prep to your doorstep. Get live map updates and accurate delivery ETAs so you\'re never left wondering.',
    image: 'https://images.unsplash.com/photo-1555992336-03a23c2b6bcb?auto=format&fit=crop&w=800&q=80',
    tag: 'Live tracking',
  },
  {
    title: 'Personalized recommendations',
    description: 'Discover dishes and restaurants curated to your taste. Our smart engine learns your preferences to suggest what you\'ll love next.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    tag: 'AI-powered',
  },
  {
    title: 'Lightning-fast checkout',
    description: 'Saved payment details, favorite addresses, and one-tap reordering mean you go from craving to confirmed in under 10 seconds.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    tag: 'Speed',
  },
  {
    title: 'Exclusive local restaurants',
    description: 'Support neighborhood kitchens with menus you can only find on Foodiez. Fresh, authentic, and made with care just around the corner.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    tag: 'Local gems',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6B35]">Features</p>
          <h2 id="features-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Everything you need to order with confidence
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 max-w-xl mx-auto">
            Thoughtfully designed features that make food delivery fast, personal, and delightful.
          </p>
        </motion.div>

        {/* Feature rows */}
        <div className="mt-16 space-y-20 lg:space-y-28">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={feature.title}
                className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
              >
                {/* Image side */}
                <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                  <div className="group relative overflow-hidden rounded-3xl bg-slate-100 shadow-soft">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80 lg:h-96"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-900/5" aria-hidden="true" />
                  </div>
                </div>

                {/* Text side */}
                <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
                  <div className="max-w-lg">
                    <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-[#FF6B35] uppercase tracking-wide">
                      {feature.tag}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold text-slate-950 sm:text-3xl">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
