'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function StackedCardsReveal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center"
         onMouseEnter={() => setIsOpen(true)}
         onMouseLeave={() => setIsOpen(false)}>
      {/* Stacked Cards */}
      <div className="relative w-40 h-56 cursor-pointer flex items-center justify-center">
        {/* Simulating stacked cards */}
        <div className={`absolute w-40 h-56 bg-gray-300 shadow-md transform transition-transform duration-300 ${isOpen ? 'translate-y-[-50px] rotate-0' : 'rotate-[-5deg]'}`}></div>
        <div className={`absolute w-40 h-56 bg-gray-400 shadow-md transform transition-transform duration-300 ${isOpen ? 'translate-y-[-25px] rotate-0' : 'rotate-[0deg]'}`}></div>
        <div className={`absolute w-40 h-56 bg-white shadow-lg flex items-center justify-center transition-transform duration-300 ${isOpen ? 'translate-y-0 rotate-0' : ''}`}>
          <span className="text-lg font-bold">Hover Me</span>
        </div>
      </div>
      
      {/* Expanding Grid Reveal */}
      <div className={`absolute w-40 bg-white shadow-lg p-2 grid grid-cols-2 grid-rows-4 gap-2 transition-all duration-300 overflow-hidden transform ${isOpen ? 'opacity-100 scale-100 translate-y-4' : 'opacity-0 scale-90 translate-y-0'}`}>
        {[...Array(8)].map((_, index) => (
          <Image key={index} src="/Home/Showcase.png" alt="placeholder" width={50} height={50} className="w-full h-full object-cover" />
        ))}
      </div>
    </div>
  );
}
