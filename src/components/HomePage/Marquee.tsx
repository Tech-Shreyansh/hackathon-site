import React from 'react';

interface MarqueeProps {
  items: (string | React.ReactNode)[];
}

export default function Marquee({ items }: MarqueeProps) {
  return (
    <>
      <div className="relative flex w-full overflow-x-hidden bg-black text-white font-semibold">
        <div className="animate-marquee whitespace-nowrap py-2">
          {items.map((item) => (
            <span className="mx-4 text-xl">
              {item}
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-2">
          {items.map((item) => (
            <span className="mx-4 text-xl">
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
