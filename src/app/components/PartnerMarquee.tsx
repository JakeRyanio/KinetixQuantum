"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Partner = {
  key: string;
  name: string;
  image: string;
};

const PARTNERS: Partner[] = [
  {
    key: "gd-developers",
    name: "GD Developers",
    image: "/images/partners/gd-developers.png"
  },
  {
    key: "lirunex",
    name: "Lirunex",
    image: "/images/partners/lirunex.png"
  },
  {
    key: "comet-cash",
    name: "Comet Cash",
    image: "/images/partners/comet-cash.png"
  },
  {
    key: "prime-trader",
    name: "Prime Trader",
    image: "/images/partners/prime-trader.png"
  },
  {
    key: "aa-logo",
    name: "AA Partners",
    image: "/images/partners/aa-logo.png"
  },
  {
    key: "binghatti",
    name: "Binghatti",
    image: "/images/partners/binghatti.png"
  },
];

// Triple the partners for seamless infinite scroll
const PARTNER_LOOP = [...PARTNERS, ...PARTNERS, ...PARTNERS];

export default function PartnerMarquee({
  speed = 30, // Slower than main marquee
  itemWidth = 100, // 50% of main marquee size
  gap = 20,
}: { speed?: number; itemWidth?: number; gap?: number }) {

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full overflow-hidden py-6">
      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10" />

      {/* Continuously scrolling rail - OPPOSITE DIRECTION */}
      <div 
        ref={containerRef}
        className="relative"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <motion.div
          className="flex"
          animate={{
            x: [-(itemWidth + gap) * PARTNERS.length, 0] // REVERSE DIRECTION
          }}
          transition={{
            duration: ((itemWidth + gap) * PARTNERS.length) / speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          style={{ gap }}
        >
          {PARTNER_LOOP.map((partner, idx) => (
            <PartnerLogo 
              key={`${partner.key}-${idx}`} 
              partner={partner} 
              width={itemWidth}
            />
          ))}
        </motion.div>
      </div>

    </section>
  );
}

function PartnerLogo({ partner, width }: { partner: Partner; width: number }) {
  return (
    <motion.div
      className="relative shrink-0 group"
      style={{ width }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-slate-800/40 border border-slate-700/20 backdrop-blur-sm">
        <Image
          src={partner.image}
          alt={partner.name}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
          priority
        />
        
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-400/10 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Partner name on hover */}
      <motion.div
        className="absolute -bottom-8 left-0 right-0 text-center"
        initial={{ opacity: 0, y: 5 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-xs text-slate-400 font-medium">
          {partner.name}
        </div>
      </motion.div>
    </motion.div>
  );
}
