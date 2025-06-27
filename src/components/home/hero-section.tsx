'use client';

import departmentData from '@/lib/data';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-[#28485D] text-white py-24 px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-2 py-8">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Welcome to the MPQ Safety Centre
        </h1>
        <p className="text-lg text-gray-200">Please choose your department.</p>
      </div>

      <div className="py-16 grid grid-cols-2  px-8 sm:grid-cols-3 md:grid-cols-7 gap-6 justify-center mx-auto">
        {departmentData.map((dept) => (
          <div
            key={dept.name}
            className="flex flex-col items-center gap-4 hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="w-full h-28 relative rounded overflow-hidden shadow-lg">
              <Image
                src={dept.image || '/placeholder.svg'}
                alt={dept.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm font-medium">{dept.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
