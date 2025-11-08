import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  { id: 1, name: 'Sauge Boreale', tag: 'Soleil', color: '#9fb49e', price: 18, image: '/seed-1.jpg' },
  { id: 2, name: 'Éclat d’Ocre', tag: 'Ombre', color: '#d9c6a5', price: 24, image: '/seed-2.jpg' },
  { id: 3, name: 'Rosée Sereine', tag: 'Soleil', color: '#b7c8b1', price: 22, image: '/seed-3.jpg' },
  { id: 4, name: 'Feuille Dorée', tag: 'Mi-ombre', color: '#d8b98b', price: 28, image: '/seed-4.jpg' },
];

const TagButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm transition-all border ${
      active
        ? 'bg-[#e8efe8] border-[#a9bea7] text-[#28402b] shadow'
        : 'bg-white border-[#e1e6df] text-[#4b5a49] hover:border-[#cdd7cf]'
    } dark:${
      active
        ? 'bg-[#182219] border-[#2c3a30] text-[#d9e6d9]'
        : 'bg-[#0f1511] border-[#1b221c] text-[#9fb29b] hover:border-[#283328]'
    }`}
  >
    {label}
  </button>
);

const ProductCard = ({ item }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="group relative overflow-hidden rounded-2xl border border-[#e2e5de] dark:border-[#222a23] bg-white dark:bg-[#0f1410] shadow-[0_10px_30px_rgba(24,45,34,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <div
        className="absolute inset-0" 
        style={{ background: `linear-gradient(135deg, ${item.color}55, transparent 60%)` }}
      />
      <img
        src={item.image}
        alt={item.name}
        className="h-full w-full object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_40%)]" />
    </div>
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-lg text-[#263226] dark:text-[#e7efe6]">{item.name}</h3>
        <span className="text-sm text-[#6a7b67] dark:text-[#9bb09a]">{item.tag}</span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-[#263226] dark:text-[#E6E2D6] font-medium">{item.price}€</span>
        <button className="relative overflow-hidden rounded-full px-4 py-2 text-sm text-[#1f2a1e] dark:text-[#e7efe6] bg-gradient-to-b from-[#e8efe8] to-[#e2e9e2] dark:from-[#1a231c] dark:to-[#141b16] border border-[#a9bea7] dark:border-[#2a3b31] shadow transition-all hover:shadow-lg">
          <span className="relative z-10">Acheter</span>
          <motion.span
            aria-hidden
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(164,205,164,0.35),transparent_60%)]"
          />
        </button>
      </div>
    </div>
  </motion.div>
);

const ProductGrid = () => {
  const [filter, setFilter] = useState('Tous');
  const filtered = useMemo(() => {
    if (filter === 'Tous') return products;
    return products.filter((p) => p.tag === filter);
  }, [filter]);

  const tags = ['Tous', 'Soleil', 'Mi-ombre', 'Ombre'];

  return (
    <section id="catalogue" className="relative bg-[#F6F4EF] dark:bg-[#0e0f0d] py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1f2a1e] dark:text-[#E6E2D6]">Catalogue</h2>
          <div className="flex flex-wrap gap-3">
            {tags.map((t) => (
              <TagButton key={t} label={t} active={t === filter} onClick={() => setFilter(t)} />
            ))}
          </div>
        </div>

        <motion.div layout className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
