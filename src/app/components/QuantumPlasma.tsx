"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function QuantumPlasma() {
  const [morphState, setMorphState] = useState(0);

  // Cycle through different geometric states
  useEffect(() => {
    const interval = setInterval(() => {
      setMorphState(prev => (prev + 1) % 4);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute -right-20 top-1/2 -translate-y-56 w-80 h-80 pointer-events-none">
      {/* Main plasma container */}
      <div className="relative w-full h-full">
        
        {/* Central core */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 
                     rounded-full bg-cyan-400/80 shadow-[0_0_40px_rgba(34,211,238,0.6)]"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Orbiting geometric shapes */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 80 + (morphState * 20);
          
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-cyan-300/60"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: Math.cos(angle + morphState * 0.5) * radius - 4,
                y: Math.sin(angle + morphState * 0.5) * radius - 4,
                scale: [0.8, 1.2, 0.8],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1
              }}
            />
          );
        })}

        {/* Morphing geometric lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 384 384">
          <defs>
            <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 211, 238, 0.4)" />
              <stop offset="50%" stopColor="rgba(192, 132, 252, 0.3)" />
              <stop offset="100%" stopColor="rgba(195, 255, 94, 0.2)" />
            </linearGradient>
          </defs>
          
          {/* Morphing polygon */}
          <motion.polygon
            fill="none"
            stroke="url(#quantumGradient)"
            strokeWidth="1"
            points={
              morphState === 0 ? "192,50 300,150 250,280 134,280 84,150" : // Pentagon
              morphState === 1 ? "192,60 320,120 320,264 192,324 64,264 64,120" : // Hexagon
              morphState === 2 ? "192,80 280,192 192,304 104,192" : // Diamond
              "192,70 270,140 270,244 192,314 114,244 114,140" // Hexagon variant
            }
            animate={{
              opacity: [0.3, 0.7, 0.3],
              strokeWidth: [1, 2, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Inner rotating lines */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "192px 192px" }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.line
                key={i}
                x1="192"
                y1="192"
                x2={192 + Math.cos((i / 6) * Math.PI * 2) * 60}
                y2={192 + Math.sin((i / 6) * Math.PI * 2) * 60}
                stroke="rgba(34, 211, 238, 0.3)"
                strokeWidth="1"
                animate={{
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.g>
          
          {/* Outer energy rings */}
          <motion.circle
            cx="192"
            cy="192"
            r="120"
            fill="none"
            stroke="rgba(192, 132, 252, 0.2)"
            strokeWidth="1"
            strokeDasharray="4 8"
            animate={{
              strokeDashoffset: [0, -24],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.circle
            cx="192"
            cy="192"
            r="160"
            fill="none"
            stroke="rgba(195, 255, 94, 0.15)"
            strokeWidth="1"
            strokeDasharray="2 6"
            animate={{
              strokeDashoffset: [0, 16],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </svg>

        {/* Floating quantum particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-300/40"
            style={{
              left: `${20 + (i * 6)}%`,
              top: `${15 + (i * 7)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3 + (i * 0.2),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}

        {/* Removed background - pure geometric patterns only */}
      </div>
    </div>
  );
}
