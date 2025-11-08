import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Élise R.',
    text: 'Une poésie vivante dans mon jardin. J’ai simplement laissé la rosée faire son œuvre — résultats splendides.',
  },
  {
    id: 2,
    name: 'Malo V.',
    text: 'Expérience apaisante et innovante. La croissance est régulière, sans effort, c’est bluffant.',
  },
  {
    id: 3,
    name: 'Sofia L.',
    text: 'Design soigné et graines d’exception. On sent une vision durable et élégante derrière le produit.',
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-[#F6F4EF] dark:bg-[#0e0f0d] py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1f2a1e] dark:text-[#E6E2D6]">Avis clients</h2>
          <p className="mt-3 text-[#4b5a49] dark:text-[#c9cfca]">Des retours sincères, portés par la beauté du vivant.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative rounded-2xl border border-[#e2e5de] dark:border-[#222a23] bg-white/70 dark:bg-[#10140f]/70 backdrop-blur-sm p-6 shadow-[0_10px_30px_rgba(24,45,34,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-1 text-[#6a7b67] dark:text-[#9bb09a]">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-[#263226] dark:text-[#e7efe6]">{t.text}</p>
              <p className="mt-4 text-sm text-[#6a7b67] dark:text-[#9bb09a]">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
