"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Coins, Boxes, Sigma, Factory, ShieldCheck, Building2, Droplets, Rocket
} from "lucide-react";
import Image from "next/image";

type Item = {
  key: string;
  name: string;
  roi: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  roiDetails: string;
};

const ITEMS: Item[] = [
  {
    key: "commodities",
    name: "Commodities & Arbitrage",
    roi: "~30–50%",
    icon: Coins,
    image: "/images/commodities.jpg",
    roiDetails: "Extract profit from real-world imbalances through strategic commodity positioning and crypto-hard asset arbitrage opportunities."
  },
  {
    key: "tokenization", 
    name: "Tokenization of Real-World Assets",
    roi: "~20–35%",
    icon: Boxes,
    image: "/images/tokenization.jpg",
    roiDetails: "Turn illiquid assets into liquid rail-ready value by creating tokenized ownership of real estate, mines, and infrastructure."
  },
  {
    key: "primefx",
    name: "Prime Trader — FX Algo", 
    roi: "~70–75%",
    icon: Sigma,
    image: "/images/primefx.jpg",
    roiDetails: "Precision velocity through automated, risk-controlled execution with scalable performance across all liquidity regimes."
  },
  {
    key: "pe",
    name: "Private Equity (Blue Collar Roll-Ups)",
    roi: "~25–45%",
    icon: Factory,
    image: "/images/pe.jpg",
    roiDetails: "Revalue resilient, labor-centric businesses with AI optimization, operational systems, and sales psychology enhancements."
  },
  {
    key: "insurance",
    name: "Insurance (Life Settlements)",
    roi: "~20–35%", 
    icon: ShieldCheck,
    image: "/images/insurance.jpg",
    roiDetails: "Convert time into cash-flow certainty through discounted death benefit purchases with actuarial predictability."
  },
  {
    key: "realestate",
    name: "Real Estate",
    roi: "~15–25%",
    icon: Building2,
    image: "/images/realestate.jpg",
    roiDetails: "Hard-asset spine providing income, appreciation, and inflation hedge through multifamily, data centers, and land investments."
  },
  {
    key: "mineralwater",
    name: "Mineral & Water Rights",
    roi: "~10–18%",
    icon: Droplets,
    image: "/images/mineralwater.jpg",
    roiDetails: "Own the scarcity bedrock of civilization through direct rights exposure and hydrology/minerals optionality."
  },
  {
    key: "venture",
    name: "Venture Capital (In-House + Collaborative Pool)",
    roi: "~25–40% +5–10% pooled upside",
    icon: Rocket,
    image: "/images/venture.jpg",
    roiDetails: "Shared-upside founders only, with venture returns cycling back to the LP pool through collective prosperity mechanisms."
  },
];

// Triple the items for seamless infinite scroll
const LOOP = [...ITEMS, ...ITEMS, ...ITEMS];

export default function KineticMarquee({
  speed = 40,
  itemWidth = 200,
  gap = 32,
}: { speed?: number; itemWidth?: number; gap?: number }) {

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full overflow-hidden py-12">
      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10" />

      {/* Continuously scrolling rail */}
      <div 
        ref={containerRef}
        className="relative"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <motion.div
          className="flex"
          animate={{
            x: [0, -(itemWidth * 2 + gap) * ITEMS.length] // Move exactly one set length
          }}
          transition={{
            duration: ((itemWidth * 2 + gap) * ITEMS.length) / speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          style={{ gap }}
        >
          {LOOP.map((item, idx) => (
            <FlipCard 
              key={`${item.key}-${idx}`} 
              item={item} 
              width={itemWidth}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FlipCard({ item, width }: { item: Item; width: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;
  
  return (
    <motion.div
      className="relative shrink-0 group"
      style={{ width: width * 2 }} // 2x larger as requested
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="relative w-full aspect-[4/3]">
        
        {/* Front side - Image */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-transparent border border-slate-700/30"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
        <Image
          src={item.image}
          alt={item.name}
          fill
            className={`transition-transform duration-500 ${
              item.key === 'tokenization' 
                ? 'object-contain'
                : 'object-cover'
            }`}
            priority
          />
        
        {/* Icon overlay */}
          <div className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900/90 backdrop-blur-sm">
            <Icon className="h-6 w-6 text-cyan-300" />
        </div>
        
          {/* Text overlay with black backdrop */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 border border-slate-700/30">
              <div className="text-base font-semibold text-white leading-tight">
                {item.name}
              </div>
              <div className="text-sm text-lime-400 mt-1 font-bold">
                AVG ANNUAL RETURN: {item.roi}
              </div>
            </div>
      </div>
        </motion.div>

        {/* Back side - ROI Details */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-slate-800/95 border border-cyan-400/50 backdrop-blur-sm"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="p-6 h-full flex flex-col justify-center text-white">
            <div className="text-center mb-4">
              <Icon className="h-8 w-8 text-cyan-300 mx-auto mb-2" />
              <div className="text-lg font-bold text-cyan-200">
          {item.name}
        </div>
            </div>
            
            <div className="text-center mb-4">
              <div className="text-2xl font-bold text-lime-400">
                {item.roi}
              </div>
              <div className="text-xs text-slate-300 uppercase tracking-wider">
                Average Annual ROI
        </div>
            </div>
            
            <p className="text-sm text-slate-200 leading-relaxed text-center">
              {item.roiDetails}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 
                      bg-gradient-to-r from-cyan-400/20 via-violet-400/20 to-lime-400/20 
                      blur-lg transition-opacity duration-300 -z-10" />
    </motion.div>
  );
}