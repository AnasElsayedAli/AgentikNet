interface LogoProps {
  className?: string;
  size?: number;
  rounded?: boolean;
}

export function Logo({ className = "", size = 32, rounded = true }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Wing 1 Cyan-Blue Gradient */}
        <linearGradient id="an-wing-cyan" x1="10%" y1="90%" x2="70%" y2="10%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="35%" stopColor="#00A3FF" />
          <stop offset="70%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>

        {/* Wing 2 Purple-Pink Gradient */}
        <linearGradient id="an-wing-purple" x1="30%" y1="10%" x2="90%" y2="80%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="30%" stopColor="#A855F7" />
          <stop offset="65%" stopColor="#C084FC" />
          <stop offset="90%" stopColor="#E879F9" />
          <stop offset="100%" stopColor="#D946EF" />
        </linearGradient>

        {/* Wing 3 Bottom Sweeping Violet-Cyan Gradient */}
        <linearGradient id="an-wing-bottom" x1="85%" y1="75%" x2="15%" y2="80%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="40%" stopColor="#818CF8" />
          <stop offset="75%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#00F0FF" />
        </linearGradient>

        {/* Center Sphere Radial Gradient (3D look) */}
        <radialGradient id="an-sphere-center" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#E0F2FE" />
          <stop offset="30%" stopColor="#38BDF8" />
          <stop offset="70%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </radialGradient>

        {/* Top Sphere Radial Gradient */}
        <radialGradient id="an-sphere-top" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#BAE6FD" />
          <stop offset="35%" stopColor="#38BDF8" />
          <stop offset="75%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#075985" />
        </radialGradient>

        {/* Upper-Right Sphere Radial Gradient */}
        <radialGradient id="an-sphere-midright" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#E0E7FF" />
          <stop offset="35%" stopColor="#818CF8" />
          <stop offset="75%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#4338CA" />
        </radialGradient>

        {/* Bottom-Left Sphere Radial Gradient */}
        <radialGradient id="an-sphere-bottomleft" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#CFFAFE" />
          <stop offset="35%" stopColor="#06B6D4" />
          <stop offset="75%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0C4A6E" />
        </radialGradient>

        {/* Bottom-Right Sphere Radial Gradient */}
        <radialGradient id="an-sphere-bottomright" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FDF4FF" />
          <stop offset="35%" stopColor="#E879F9" />
          <stop offset="75%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#9333EA" />
        </radialGradient>

        {/* Glow Filters */}
        <filter id="an-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="an-soft-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Dark Backplate Container */}
      <rect
        width="512"
        height="512"
        rx={rounded ? "112" : "0"}
        fill="#04060E"
      />

      {/* Network Interconnection Lines (Subtle Constellation) */}
      <g stroke="#38BDF8" strokeOpacity="0.45" strokeWidth="2.5" strokeLinecap="round">
        <line x1="238" y1="60" x2="252" y2="300" stroke="#0284C7" strokeWidth="2" strokeOpacity="0.6" />
        <line x1="238" y1="60" x2="318" y2="176" stroke="#818CF8" strokeWidth="2" strokeOpacity="0.5" />
        <line x1="318" y1="176" x2="252" y2="300" stroke="#6366F1" strokeWidth="2.2" strokeOpacity="0.6" />
        <line x1="252" y1="300" x2="138" y2="344" stroke="#0284C7" strokeWidth="1.8" strokeOpacity="0.4" />
        <line x1="138" y1="344" x2="106" y2="396" stroke="#38BDF8" strokeWidth="2" strokeOpacity="0.5" />
        <line x1="252" y1="300" x2="400" y2="280" stroke="#C084FC" strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="318" y1="176" x2="390" y2="250" stroke="#A855F7" strokeOpacity="0.4" strokeWidth="1.5" />
      </g>

      {/* Wing 1 (Left Swoop: Cyan to Blue, Dynamic Pinwheel Blade) */}
      <path
        d="M 106 396 C 60 320, 52 220, 92 140 C 125 75, 180 50, 238 60 C 210 90, 160 140, 140 216 C 125 275, 170 300, 226 230 C 150 240, 90 270, 72 350 C 82 370, 95 385, 106 396 Z"
        fill="url(#an-wing-cyan)"
      />
      <path
        d="M 92 140 C 125 75, 180 50, 238 60 C 200 80, 150 135, 134 205 C 118 150, 105 135, 92 140 Z"
        fill="#38BDF8"
        opacity="0.65"
      />

      {/* Wing 2 (Right Swoop: Purple to Magenta, Elegant Curved Blade) */}
      <path
        d="M 238 60 C 290 65, 360 90, 410 150 C 460 215, 465 300, 444 336 C 435 300, 420 220, 360 180 C 305 145, 260 190, 270 280 C 285 240, 320 220, 365 245 C 400 265, 425 300, 444 336 C 425 240, 360 110, 238 60 Z"
        fill="url(#an-wing-purple)"
      />
      <path
        d="M 444 336 C 400 360, 340 375, 270 340 C 320 340, 380 320, 415 270 C 430 295, 438 318, 444 336 Z"
        fill="#E879F9"
        opacity="0.75"
      />

      {/* Wing 3 (Bottom Crescent Blade: Violet into Bright Cyan) */}
      <path
        d="M 444 336 C 410 400, 340 450, 260 458 C 190 464, 135 435, 106 396 C 150 430, 220 440, 275 415 C 330 390, 370 340, 390 280 C 365 330, 310 380, 224 338 C 230 375, 250 410, 310 420 C 370 425, 415 385, 444 336 Z"
        fill="url(#an-wing-bottom)"
      />
      <path
        d="M 224 338 C 235 390, 270 420, 335 422 C 290 430, 240 415, 224 338 Z"
        fill="#00D4FF"
        opacity="0.8"
      />

      {/* Constellation Nodes / Luminous Spheres with 3D Gradients */}
      {/* Micro Node */}
      <circle cx="138" cy="344" r="8" fill="#0284C7" />
      <circle cx="137" cy="343" r="3.5" fill="#E0F2FE" />

      {/* Bottom-Left Sphere */}
      <circle cx="106" cy="396" r="23" fill="url(#an-sphere-bottomleft)" filter="url(#an-glow-cyan)" />
      <circle cx="100" cy="390" r="7" fill="#FFFFFF" opacity="0.65" />

      {/* Top Sphere */}
      <circle cx="238" cy="60" r="24" fill="url(#an-sphere-top)" filter="url(#an-glow-cyan)" />
      <circle cx="232" cy="54" r="7.5" fill="#FFFFFF" opacity="0.75" />

      {/* Upper-Right Mid Sphere */}
      <circle cx="318" cy="176" r="16" fill="url(#an-sphere-midright)" />
      <circle cx="314" cy="172" r="5" fill="#FFFFFF" opacity="0.6" />

      {/* Bottom-Right Sphere */}
      <circle cx="444" cy="336" r="22" fill="url(#an-sphere-bottomright)" filter="url(#an-soft-glow)" />
      <circle cx="438" cy="330" r="7" fill="#FFFFFF" opacity="0.7" />

      {/* Center Focal Sphere (Largest & Brightest) */}
      <circle cx="252" cy="300" r="28" fill="url(#an-sphere-center)" filter="url(#an-glow-cyan)" />
      <circle cx="244" cy="292" r="9" fill="#FFFFFF" opacity="0.8" />
    </svg>
  );
}

export default Logo;
