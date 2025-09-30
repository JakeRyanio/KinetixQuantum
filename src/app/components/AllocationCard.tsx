"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface AllocationCardProps {
  allocation: {
    key: string;
    name: string;
    range: string;
    kineticForce: string;
    bullets: string[];
  };
  index: number;
}

export default function AllocationCard({ allocation, index }: AllocationCardProps) {
  return (
    <Link href={`/allocations/${allocation.key}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -4, scale: 1.02 }}
        className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 
                   hover:border-cyan-400/40 transition-all duration-500 backdrop-blur-sm
                   hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.3)] cursor-pointer"
      >
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-quantum-cyan/5 to-quantum-violet/5 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-cyan-400 font-medium text-lg group-hover:text-lime-400 transition-colors duration-300 flex items-center gap-2">
              {allocation.name}
              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </h3>
            <div className="text-sm text-slate-400 mt-1 font-medium">
              {allocation.range}
            </div>
          </div>
          
          {/* Animated indicator */}
          <motion.div 
            className="h-2 w-2 rounded-full bg-cyan-400/60"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        </div>
        
        <p className="text-slate-200 mb-6 leading-relaxed">
          {allocation.kineticForce}
        </p>
        
        <ul className="space-y-3">
          {allocation.bullets.map((bullet, idx) => (
            <motion.li 
              key={idx} 
              className="flex gap-3 items-start text-sm text-slate-300"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index * 0.1) + (idx * 0.05) }}
            >
              <span className="mt-2 h-1 w-1 rounded-full bg-cyan-400/80 flex-shrink-0" />
              <span className="leading-relaxed">{bullet}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
    </Link>
  );
}
