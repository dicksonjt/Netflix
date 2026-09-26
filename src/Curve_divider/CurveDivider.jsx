// CurveDivider.jsx
import React from 'react'

const CurveDivider = () => {
  return (
    <div className="relative w-full h-20 md:h-28 bg-black overflow-hidden">
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <radialGradient id="curveGlow" cx="50%" cy="0%" r="80%">
            <stop offset="0%" stopColor="#3b2a5e" />
            <stop offset="50%" stopColor="#160b26" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
          <linearGradient id="accentLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#210d16" />
            <stop offset="20%" stopColor="#b82869" />
            <stop offset="50%" stopColor="#e50914" />
            <stop offset="80%" stopColor="#b82869" />
            <stop offset="100%" stopColor="#210d16" />
          </linearGradient>
        </defs>

        {/* Fill: glow sits BELOW the curve line, fading to black */}
        <path d="M0,55 Q720,10 1440,55 L1440,100 L0,100 Z" fill="url(#curveGlow)" />

        {/* Stroke: same curve, traced as the red/pink line on top */}
        <path d="M0,55 Q720,10 1440,55" fill="none" stroke="url(#accentLine)" strokeWidth="2.5" />
      </svg>
    </div>
  )
}

export default CurveDivider