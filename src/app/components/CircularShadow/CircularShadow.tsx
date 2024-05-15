import React, { FC } from "react";

interface CircularShadowProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  label: string;
}

const CircularShadow: FC<CircularShadowProps> = ({
  children,
  id,
  className,
  label,
}) => (
  <svg className={className} aria-label={label}>
    <defs>
      <filter id={id} x="-40%" y="-40%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
        <feOffset dx="1" dy="1" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.75" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter={`url(#${id})`}>{children}</g>
  </svg>
);

export default CircularShadow;
