'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Workshop from '@/components/sections/Workshop';
import Booking from '@/components/sections/Booking';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Workshop />
      <Booking />
      <Contact />
    </main>
  );
}
