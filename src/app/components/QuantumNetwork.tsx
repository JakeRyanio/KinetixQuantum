"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function QuantumNetwork() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const container = document.getElementById('allocations-grid');
      if (container) {
        const rect = container.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Generate quantum network paths
  const generateNetworkPaths = () => {
    const paths = [];
    const gridCols = 4; // xl:grid-cols-4
    const gridRows = 2; // 8 cards in 4x2 grid
    
    // Horizontal connections
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols - 1; col++) {
        const startX = (col + 0.5) * (dimensions.width / gridCols);
        const endX = (col + 1.5) * (dimensions.width / gridCols);
        const y = (row + 0.5) * (dimensions.height / gridRows);
        
        paths.push({
          id: `h-${row}-${col}`,
          d: `M${startX},${y} Q${(startX + endX) / 2},${y - 20} ${endX},${y}`,
          delay: (row * gridCols + col) * 0.2
        });
      }
    }
    
    // Vertical connections
    for (let col = 0; col < gridCols; col++) {
      const x = (col + 0.5) * (dimensions.width / gridCols);
      const startY = 0.5 * (dimensions.height / gridRows);
      const endY = 1.5 * (dimensions.height / gridRows);
      
      paths.push({
        id: `v-${col}`,
        d: `M${x},${startY} Q${x + 15},${(startY + endY) / 2} ${x},${endY}`,
        delay: col * 0.3 + 1
      });
    }
    
    // Diagonal connections for quantum entanglement effect
    paths.push({
      id: 'diag-1',
      d: `M${0.5 * (dimensions.width / gridCols)},${0.5 * (dimensions.height / gridRows)} Q${dimensions.width / 2},${dimensions.height / 4} ${3.5 * (dimensions.width / gridCols)},${1.5 * (dimensions.height / gridRows)}`,
      delay: 2
    });
    
    paths.push({
      id: 'diag-2', 
      d: `M${3.5 * (dimensions.width / gridCols)},${0.5 * (dimensions.height / gridRows)} Q${dimensions.width / 2},${dimensions.height / 4} ${0.5 * (dimensions.width / gridCols)},${1.5 * (dimensions.height / gridRows)}`,
      delay: 2.5
    });

    return paths;
  };

  const paths = generateNetworkPaths();

  if (dimensions.width === 0 || dimensions.height === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      >
        <defs>
          <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="whiteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="blackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#000000" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.1" />
          </linearGradient>
          <filter id="quantumGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="whiteGlow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Cyan primary lines */}
        {paths.map((path) => (
          <motion.path
            key={`cyan-${path.id}`}
            d={path.d}
            fill="none"
            stroke="url(#quantumGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            filter="url(#quantumGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.7, 0.7, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: path.delay,
              repeatDelay: 3
            }}
          />
        ))}
        
        {/* White secondary lines with offset timing */}
        {paths.map((path) => (
          <motion.path
            key={`white-${path.id}`}
            d={path.d}
            fill="none"
            stroke="url(#whiteGradient)"
            strokeWidth="0.8"
            strokeLinecap="round"
            filter="url(#whiteGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.4, 0.4, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: path.delay + 1.5,
              repeatDelay: 4
            }}
          />
        ))}
        
        {/* Black tertiary lines for depth */}
        {paths.slice(0, Math.floor(paths.length / 2)).map((path) => (
          <motion.path
            key={`black-${path.id}`}
            d={path.d}
            fill="none"
            stroke="url(#blackGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.3, 0.3, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut", 
              delay: path.delay + 3,
              repeatDelay: 5
            }}
          />
        ))}
        
        {/* Cyan quantum particles */}
        {paths.slice(0, 4).map((path, index) => (
          <motion.circle
            key={`cyan-particle-${path.id}`}
            r="2"
            fill="#22D3EE"
            opacity="0.8"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: ["0%", "100%"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: path.delay + 1
            }}
            style={{
              offsetPath: `path('${path.d}')`,
              offsetRotate: "0deg"
            } as any}
          />
        ))}
        
        {/* White quantum particles */}
        {paths.slice(2, 6).map((path, index) => (
          <motion.circle
            key={`white-particle-${path.id}`}
            r="1.5"
            fill="#FFFFFF"
            opacity="0.6"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: ["0%", "100%"] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: path.delay + 2.5
            }}
            style={{
              offsetPath: `path('${path.d}')`,
              offsetRotate: "0deg"
            } as any}
          />
        ))}
        
        {/* Black data packets */}
        {paths.slice(4, 7).map((path, index) => (
          <motion.circle
            key={`black-particle-${path.id}`}
            r="1"
            fill="#000000"
            opacity="0.4"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: ["0%", "100%"] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: path.delay + 4
            }}
            style={{
              offsetPath: `path('${path.d}')`,
              offsetRotate: "0deg"
            } as any}
          />
        ))}
      </svg>
    </div>
  );
}
