import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  fade?: boolean;
};

export function Marquee({ children, fade = true }: Props) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <div className={`${fade ? 'marquee-mask ' : ''}group min-w-0 max-w-full overflow-hidden`}>
      <div className="marquee-track flex w-max gap-3 py-1 group-hover:[animation-play-state:paused]">
        {[...items, ...items].map((child, index) => (
          <div key={index} className="shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
