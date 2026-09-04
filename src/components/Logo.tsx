type LogoProps = {
  className?: string;
};

export function LogoMark({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="Zenthara"
    >
      <defs>
        <linearGradient id="zenthara-mark-bg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#zenthara-mark-bg)" />
      <g stroke="white" strokeWidth="3.2" strokeLinecap="round">
        <line x1="9" y1="23" x2="9" y2="18" opacity="0.85" />
        <line x1="16" y1="23" x2="16" y2="13" opacity="0.92" />
        <line x1="23" y1="23" x2="23" y2="8" />
      </g>
    </svg>
  );
}
