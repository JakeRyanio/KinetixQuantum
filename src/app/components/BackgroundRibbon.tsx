"use client";

export default function BackgroundRibbon() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient ribbons using CSS */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-1/2 left-1/4 h-96 w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent animate-pulse" 
             style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <div className="absolute -top-1/2 left-1/2 h-96 w-px bg-gradient-to-b from-transparent via-violet-400/30 to-transparent animate-pulse" 
             style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute -top-1/2 left-3/4 h-96 w-px bg-gradient-to-b from-transparent via-cyan-300/35 to-transparent animate-pulse" 
             style={{ animationDelay: '2s', animationDuration: '4s' }} />
      </div>
      
      {/* Subtle animated orbs */}
      <div className="absolute top-1/4 left-1/6 h-32 w-32 rounded-full bg-cyan-400/10 blur-xl animate-ping" 
           style={{ animationDelay: '0s', animationDuration: '8s' }} />
      <div className="absolute top-3/4 right-1/4 h-24 w-24 rounded-full bg-violet-400/8 blur-xl animate-ping" 
           style={{ animationDelay: '3s', animationDuration: '6s' }} />
      
      {/* Flowing lines */}
      <div className="absolute inset-0">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="ribbon1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgb(34, 211, 238)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(34, 211, 238)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 50 Q 25 30 50 50 T 100 50"
            stroke="url(#ribbon1)"
            strokeWidth="0.2"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: '3s' }}
          />
          <path
            d="M 0 60 Q 25 40 50 60 T 100 60"
            stroke="url(#ribbon1)"
            strokeWidth="0.1"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: '4s', animationDelay: '1s' }}
          />
        </svg>
      </div>
    </div>
  );
}