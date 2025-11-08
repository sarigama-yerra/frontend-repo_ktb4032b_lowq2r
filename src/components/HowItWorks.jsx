import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Leaf, Sparkles } from 'lucide-react';

const Step = ({ icon: Icon, title, text, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ delay, duration: 0.6, ease: 'easeOut' }}
    className="group relative rounded-2xl border border-[#e2e5de] dark:border-[#222a23] bg-white/70 dark:bg-[#10140f]/70 backdrop-blur-sm p-6 shadow-[0_10px_30px_rgba(24,45,34,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
  >
    <div className="flex items-start gap-4">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-b from-[#eaf2ea] to-[#dfe9e0] dark:from-[#162018] dark:to-[#0f1611] border border-[#d7ded6] dark:border-[#283328] shadow-inner">
        <Icon className="h-6 w-6 text-[#4f6a50] dark:text-[#9fc6a1]" />
        <motion.span
          className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/40 to-transparent"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
      </div>
      <div>
        <h3 className="font-serif text-xl text-[#263226] dark:text-[#e7efe6]">{title}</h3>
        <p className="mt-2 text-sm text-[#516051] dark:text-[#a9b6ac]">{text}</p>
      </div>
    </div>
  </motion.div>
);

const HowItWorks = () => {
  return (
    <section className="relative w-full bg-[#F6F4EF] dark:bg-[#0e0f0d] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(163,184,155,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(212,197,150,0.12),transparent_50%)]" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1f2a1e] dark:text-[#E6E2D6]">Comment ça marche</h2>
          <p className="mt-3 text-[#4b5a49] dark:text-[#c9cfca]">
            Une alchimie douce entre rosée, micro-capteurs naturels et énergie ambiante.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Step
            icon={Sparkles}
            title="Activation douce"
            text="Chaque graine capte l’humidité de l’aube et s’active sans intervention."
            delay={0.1}
          />
          <Step
            icon={Droplets}
            title="Rosée intelligente"
            text="La micro-texture retient la rosée, nourrissant la graine avec précision."
            delay={0.2}
          />
          <Step
            icon={Leaf}
            title="Croissance organique"
            text="Un développement harmonieux, stable et auto-régulé dans le temps."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
