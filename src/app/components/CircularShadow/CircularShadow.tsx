interface CircularShadowProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  label: string;
}

/**
 * @component CircularShadow
 * @description A component that applies a circular shadow effect to its children.
 *
 * @returns {JSX.Element}
 */
const CircularShadow = ({
  children,
  id,
  className,
  label,
}: CircularShadowProps): JSX.Element => (
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
