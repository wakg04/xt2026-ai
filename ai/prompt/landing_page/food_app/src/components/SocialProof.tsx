import { motion } from 'framer-motion';

const partners = [
  { name: 'GreenLeaf Kitchen', logo: '🥬' },
  { name: 'Gusto Hub', logo: '🍝' },
  { name: 'FireBite Pizza', logo: '🔥' },
  { name: 'TasteStreet', logo: '🍜' },
  { name: 'Harvest Kitchen', logo: '🌿' },
];

const reviews = [
  {
    name: 'Ava Martinez',
    role: 'Startup founder',
    quote: 'Foodiez gets every order right, and the live tracker feels like magic. I never wait long for dinner anymore.',
    rating: 5,
    avatar: 'AM',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'Marcus Johnson',
    role: 'Software engineer',
    quote: 'The personalized recommendations always know exactly what I\'m craving. It\'s like the app reads my mind.',
    rating: 5,
    avatar: 'MJ',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Noah Chen',
    role: 'Night shift nurse',
    quote: 'I count on Foodiez during long shifts. Checkout takes seconds and the food arrives hot, every single time.',
    rating: 5,
    avatar: 'NC',
    color: 'bg-green-100 text-green-700',
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={i < count ? '#FF6B35' : '#e2e8f0'}
        aria-hidden="true"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

export default function SocialProof() {
  return (
    <section id="reviews" className="bg-white border-t border-slate-100" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6B35]">
            Trusted by locals
          </p>
          <h2 id="reviews-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Your neighbors love Foodiez
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 max-w-xl mx-auto">
            Join thousands of happy customers who order from top local restaurants every day.
          </p>
        </motion.div>

        {/* Partner logos */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 px-5 py-4 shadow-sm transition-all hover:shadow-soft hover:border-orange-200"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <span className="text-2xl" aria-hidden="true">{partner.logo}</span>
              <span className="text-sm font-semibold text-slate-700">{partner.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              className="group rounded-3xl border border-slate-200 bg-gradient-to-b from-orange-50/60 to-white p-7 shadow-sm transition-all hover:shadow-soft-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${review.color} shadow-sm`}
                  aria-hidden="true"
                >
                  <span className="text-sm font-bold">{review.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-950">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>

              <blockquote className="mt-5 text-slate-700 leading-relaxed">
                <p>"{review.quote}"</p>
              </blockquote>

              <div className="mt-5">
                <StarRating count={review.rating} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
