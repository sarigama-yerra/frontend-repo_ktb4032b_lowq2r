import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.8]);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#F6F4EF] dark:bg-[#0e0f0d]">
      <motion.div style={{ y, opacity }} className="relative h-[75vh] w-full">
        <Spline
          scene="https://prod.spline.design/Tu-wEVxfDuICpwJI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Subtle vignette/gradient overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#F6F4EF] dark:from-black/30 dark:via-transparent dark:to-[#0e0f0d]" />
      </motion.div>

      {/* Content overlay */}
      <div className="container mx-auto px-6 -mt-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl leading-tight font-serif text-[#1f2a1e] dark:text-[#E6E2D6]">
            Les graines qui poussent d’elles-mêmes
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#4b5a49] dark:text-[#c9cfca]">
            Une collection de graines autosuffisantes qui s’éveillent avec la rosée. Design organique, technologie douce, nature augmentée.
          </p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#catalogue"
              className="relative inline-flex items-center rounded-full border border-[#9fb49e] bg-gradient-to-b from-[#e8efe8] to-[#e2e9e2] px-6 py-3 text-sm font-medium text-[#1f2a1e] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_30px_rgba(45,75,60,0.15)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_20px_40px_rgba(45,75,60,0.25)] transition-all dark:from-[#1a231c] dark:to-[#141b16] dark:text-[#e7efe6] dark:border-[#2a3b31]"
            >
              <span className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-[#D9EDC8]/0 via-[#B2D3A8]/20 to-[#D9EDC8]/0 blur-xl pointer-events-none" />
              Découvrir nos graines
            </a>
            <span className="text-sm text-[#6a7b67] dark:text-[#9bb09a]">Une expérience poétique et durable</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Seedling growth micro-animation */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 origin-bottom"
      >
        <div className="h-24 w-[2px] bg-gradient-to-b from-[#a6c3a1] to-[#5e7b5a] dark:from-[#5d7a63] dark:to-[#2f4236]" />
        <div className="mx-auto -mt-1 h-2 w-2 rounded-full bg-[#5e7b5a] shadow-[0_0_12px_2px_rgba(46,84,63,0.35)]" />
      </motion.div>
    </section>
  );
};

export default Hero;
