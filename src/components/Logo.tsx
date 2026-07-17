import { ReactNode } from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="logo-cyan-grad" x1="10%" y1="10%" x2="90%" y2="90%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="50%" stopColor="#00BFFF" />
          <stop offset="100%" stopColor="#0055FF" />
        </linearGradient>
        <linearGradient id="logo-purple-grad" x1="10%" y1="10%" x2="90%" y2="90%">
          <stop offset="0%" stopColor="#D800FF" />
          <stop offset="50%" stopColor="#8A2BE2" />
          <stop offset="100%" stopColor="#4B0082" />
        </linearGradient>
        <linearGradient id="logo-pink-violet" x1="10%" y1="10%" x2="90%" y2="90%">
          <stop offset="0%" stopColor="#FF1493" />
          <stop offset="60%" stopColor="#8A2BE2" />
          <stop offset="100%" stopColor="#00BFFF" />
        </linearGradient>
        
        {/* Gloss Glow effects */}
        <filter id="logo-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer abstract planet/network sweeps */}
      {/* 1. Left cyan swoosh sweeping around outer circumference */}
      <path
        d="M 52 18 C 30 22, 16 42, 21 68 C 23 74, 28 81, 35 83 C 28 78, 25 70, 24 62 C 20 46, 32 26, 52 18 Z"
        fill="url(#logo-cyan-grad)"
      />

      {/* 2. Top-Right violet/purple sweep */}
      <path
        d="M 58 19 C 80 23, 90 46, 85 64 C 84 66, 82 68, 81 68 C 83 60, 81 50, 74 41 C 66 31, 58 24, 58 19 Z"
        fill="url(#logo-purple-grad)"
      />

      {/* 3. Bottom sweeping curve with pink-magenta highlights */}
      <path
        d="M 51 61 C 55 72, 65 82, 78 82 C 84 81, 89 74, 88 66 C 85 71, 79 77, 71 78 C 61 79, 53 71, 51 61 Z"
        fill="url(#logo-pink-violet)"
      />

      {/* Inner Constellation Network Lines */}
      {/* Central node: 56, 56 */}
      {/* Top node: 54, 20 */}
      {/* Right node: 67, 38 */}
      {/* Left node: 37, 63 */}
      {/* Outer-right node: 87, 62 */}
      <g stroke="#00BFFF" strokeWidth="1" strokeOpacity="0.8">
        <line x1="54" y1="20" x2="67" y2="38" />
        <line x1="67" y1="38" x2="56" y2="56" />
        <line x1="56" y1="56" x2="37" y2="63" />
        <line x1="37" y1="63" x2="31" y2="71" />
        <line x1="54" y1="20" x2="56" y2="56" />
        <line x1="67" y1="38" x2="80" y2="45" strokeOpacity="0.4" stroke="#00BFFF" />
        <line x1="56" y1="56" x2="31" y2="71" strokeOpacity="0.5" stroke="#00BFFF" />
      </g>

      {/* Glowing Star/Node points */}
      {/* Node 1: Top Center-right */}
      <circle cx="54" cy="20" r="4" fill="#38BDF8" filter="url(#logo-glow)" />
      
      {/* Node 2: Mid Right */}
      <circle cx="67" cy="38" r="3" fill="#60A5FA" />
      
      {/* Node 3: Center-core */}
      <circle cx="56" cy="56" r="5" fill="#00E5FF" filter="url(#logo-glow)" />
      
      {/* Node 4: Bottom-Left connecting */}
      <circle cx="37" cy="63" r="1.5" fill="#38BDF8" />

      {/* Node 5: Far Bottom-Left */}
      <circle cx="31" cy="71" r="4" fill="#38BDF8" filter="url(#logo-glow)" />

      {/* Node 6: Outer Right purple bead */}
      <circle cx="87" cy="62" r="4" fill="#C084FC" filter="url(#logo-glow)" />
    </svg>
  );
}

export default Logo;
