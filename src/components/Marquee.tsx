import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function Marquee({ children }: Props) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <div className="marquee-mask group overflow-hidden">
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
