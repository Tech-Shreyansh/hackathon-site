export default function Marquee({ items }: { items: string[] }) {
    return (
      <div className="relative flex w-full overflow-x-hidden bg-black text-white font-semibold">
        <div className="animate-marquee whitespace-nowrap py-2">
          {items.map((item) => {
            return (
              <span key={item} className="mx-4 text-xl">
                {item}
              </span>
            )
          })}
        </div>
  
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-2">
          {items.map((item) => {
            return (
              <span key={item} className="mx-4 text-xl">
                {item}
              </span>
            )
          })}
        </div>
  
        {/* must have both of there in order to work */}
      </div>
  
      // add this to tailwind.config.js
  
      // theme: {
      //   extend: {
      //     animation: {
      //       marquee: "marquee 5s linear infinite",
      //       marquee2: "marquee2 5s linear infinite",
      //     },
      //     keyframes: {
      //       marquee: {
      //         "0%": { transform: "translateX(0%)" },
      //         "100%": { transform: "translateX(-100%)" },
      //       },
      //       marquee2: {
      //         "0%": { transform: "translateX(100%)" },
      //         "100%": { transform: "translateX(0%)" },
      //       },
      //     },
      //   },
      // },
    )
  }
  