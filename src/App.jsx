import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div className="min-h-screen bg-[#F6F4EF] dark:bg-[#0e0f0d] selection:bg-[#cfe0cf] selection:text-[#1f2a1e] dark:selection:bg-[#2b3a30] dark:selection:text-[#e7efe6]">
      <Hero />
      <HowItWorks />
      <ProductGrid />
      <Testimonials />

      <footer className="relative overflow-hidden bg-[#F6F4EF] dark:bg-[#0e0f0d] py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-serif text-2xl text-[#1f2a1e] dark:text-[#E6E2D6]">Rejoignez la révolution verte</h3>
            <p className="mt-3 text-[#4b5a49] dark:text-[#c9cfca]">Recevez des nouvelles inspirantes et des lancements exclusifs.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center">
              <input type="email" required placeholder="Votre email" className="w-full sm:w-80 rounded-full border border-[#dfe5dd] bg-white/80 dark:bg-[#0f1410]/80 dark:border-[#1f271f] px-5 py-3 text-sm text-[#263226] dark:text-[#e7efe6] placeholder:text-[#96a296] outline-none focus:ring-2 focus:ring-[#9fb49e]" />
              <button className="rounded-full px-6 py-3 text-sm text-[#1f2a1e] dark:text-[#e7efe6] bg-gradient-to-b from-[#e8efe8] to-[#e2e9e2] dark:from-[#1a231c] dark:to-[#141b16] border border-[#a9bea7] dark:border-[#2a3b31] shadow transition-all hover:shadow-lg">S’inscrire</button>
            </form>
            <p className="mt-6 text-xs text-[#6a7b67] dark:text-[#9bb09a]">© {new Date().getFullYear()} Autograine. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
