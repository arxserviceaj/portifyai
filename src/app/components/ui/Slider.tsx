"use client";

import Marquee from "react-fast-marquee";

export default function Slider() {
  // Remove duplicates and organize logically
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Adobe",
    "Deloitte",
    "TCS",
    "Infosys",
  ];

  // Duplicate the array to create seamless looping
  // This ensures continuous flow without gaps
  const marqueeItems = [...companies, ...companies, ...companies];

  return (
    <div className="w-full">
      <p className="text-3xl font-bold dark:hover:text-white uppercase tracking-widest text-black dark:text-white mb-22 text-center transition-all duration-300">
        Students got hired at
      </p>

            <div className="max-w-[1500px] mx-auto px-4">
      <Marquee
        speed={60}
        gradient={true}
        gradientColor={[10, 6, 20]} // match your dark bg (#0a0614)
        pauseOnHover={true}
        autoFill={false} // We're manually filling
      >
        {marqueeItems.map((company, index) => (
          <span
            key={`${company}-${index}`} // More unique key
            className="mx-12 text-xl font-semibold text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300 cursor-default whitespace-nowrap"
          >
            {company}
          </span>
        ))}
      </Marquee>
      </div>
    </div>
  );
}