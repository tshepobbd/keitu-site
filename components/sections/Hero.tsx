'use client';

import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-green-500 rounded-full mb-6 animate-bounce">
            <BookOpen className="h-8 w-8" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Maths Exam Prep
            <span className="block text-green-400">Workshop</span>
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            1 October - 1 November 2025
          </p>

          <p className="text-lg md:text-xl mb-8 text-blue-200">
            With Keitumetse Motlhabane
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={scrollToBooking}
            >
              Book Your Spot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 text-lg px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-green-400 mb-2">Grade 10-12</div>
              <div className="text-blue-100">CAPS Curriculum</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-green-400 mb-2">R350</div>
              <div className="text-blue-100">Once-off Payment</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-green-400 mb-2">Online</div>
              <div className="text-blue-100">Join Anytime</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowRight className="h-5 w-5 rotate-90" />
        </div>
      </div>
    </section>
  );
}
