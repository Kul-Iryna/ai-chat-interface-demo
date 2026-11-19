type AnimatedOrbProps = {
  size?: number
  className?: string
}

export const AnimatedOrb = ({ size = 56, className = '' }: AnimatedOrbProps) => {
  const id = `orb-${size}`

  return (
    <div
      className={`animated-orb relative shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div
        className="animated-orb-shadow absolute inset-0 rounded-full"
        style={{
          boxShadow: `
            0 8px 24px rgba(94, 92, 230, 0.35),
            0 2px 8px rgba(255, 122, 144, 0.25),
            inset 0 0 0 1px rgba(255, 255, 255, 0.55)
          `,
        }}
      />
      <svg
        className="animated-orb-core absolute inset-0 size-full overflow-visible"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={`${id}-grad`}
            className="animated-orb-gradient"
            x1="8"
            y1="8"
            x2="48"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5AC8FA">
              <animate
                attributeName="stop-color"
                values="#5AC8FA;#7B61FF;#5AC8FA;#FF7A90;#5AC8FA"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="0.45" stopColor="#5E5CE6">
              <animate
                attributeName="stop-color"
                values="#5E5CE6;#BF5AF2;#5AC8FA;#5E5CE6;#5E5CE6"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="0.75" stopColor="#BF5AF2">
              <animate
                attributeName="stop-color"
                values="#BF5AF2;#FF7A90;#5E5CE6;#BF5AF2;#BF5AF2"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="1" stopColor="#FF7A90">
              <animate
                attributeName="stop-color"
                values="#FF7A90;#5AC8FA;#BF5AF2;#FF7A90;#FF7A90"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter
            id={`${id}-blur`}
            x="-20%"
            y="-40%"
            width="140%"
            height="160%"
            filterUnits="objectBoundingBox"
          >
            <feGaussianBlur stdDeviation="4.5" />
          </filter>
          <clipPath id={`${id}-clip`}>
            <circle cx="28" cy="28" r="28" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${id}-clip)`}>
          <circle cx="28" cy="28" r="28" fill={`url(#${id}-grad)`} />
          <g className="animated-orb-highlight" opacity="0.85" filter={`url(#${id}-blur)`}>
            <ellipse cx="24" cy="16" rx="14" ry="10" fill="white" fillOpacity="0.55" />
          </g>
        </g>
      </svg>
    </div>
  )
}
