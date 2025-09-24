"use client";

import { motion } from "framer-motion";
import { 
  Bitcoin, 
  Coins, 
  Building2, 
  Home, 
  Droplets, 
  Factory, 
  TrendingUp,
  Shield,
  Gem,
  Zap,
  Globe,
  Target
} from "lucide-react";

type Asset = {
  key: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
};

const ASSETS: Asset[] = [
  { key: "bitcoin", name: "Bitcoin", icon: Bitcoin, color: "text-cyan-400" },
  { key: "gold", name: "Gold", icon: Coins, color: "text-cyan-400" },
  { key: "realestate", name: "Real Estate", icon: Building2, color: "text-cyan-400" },
  { key: "residential", name: "Residential", icon: Home, color: "text-cyan-400" },
  { key: "commodities", name: "Commodities", icon: Gem, color: "text-cyan-400" },
  { key: "water", name: "Water Rights", icon: Droplets, color: "text-cyan-400" },
  { key: "industrial", name: "Industrial", icon: Factory, color: "text-cyan-400" },
  { key: "forex", name: "FX Trading", icon: TrendingUp, color: "text-cyan-400" },
  { key: "insurance", name: "Insurance", icon: Shield, color: "text-cyan-400" },
  { key: "energy", name: "Energy", icon: Zap, color: "text-cyan-400" },
  { key: "global", name: "Global Markets", icon: Globe, color: "text-cyan-400" },
  { key: "private", name: "Private Equity", icon: Target, color: "text-cyan-400" },
];

// Triple the assets for seamless infinite scroll
const LOOP = [...ASSETS, ...ASSETS, ...ASSETS];

export default function AssetMarquee({
  speed = 30, // pixels per second
  itemWidth = 80,
  gap = 32,
}: { speed?: number; itemWidth?: number; gap?: number }) {

  return (
    <section className="relative w-full overflow-hidden py-8">
      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10" />

      {/* Continuously scrolling rail */}
      <div 
        className="relative"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <motion.div
          className="flex items-center"
          animate={{
            x: [0, -(itemWidth + gap) * ASSETS.length] // Move exactly one set length
          }}
          transition={{
            duration: ((itemWidth + gap) * ASSETS.length) / speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          style={{ gap }}
        >
          {LOOP.map((asset, idx) => (
            <AssetIcon 
              key={`${asset.key}-${idx}`} 
              asset={asset} 
              width={itemWidth} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AssetIcon({ asset, width }: { asset: Asset; width: number }) {
  const Icon = asset.icon;
  
  return (
    <motion.div
      className="relative shrink-0 group flex flex-col items-center justify-center"
      style={{ width }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className={`relative aspect-square w-12 h-12 rounded-full bg-slate-800/60 backdrop-blur-sm 
                      border border-slate-600/40 flex items-center justify-center
                      group-hover:border-cyan-400/60 transition-colors duration-300`}>
        <Icon className={`h-6 w-6 ${asset.color} transition-transform duration-300 group-hover:scale-110`} />
      </div>
      
      {/* Asset name on hover */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900/90 
                      rounded text-xs text-slate-300 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 whitespace-nowrap">
        {asset.name}
      </div>
    </motion.div>
  );
}
