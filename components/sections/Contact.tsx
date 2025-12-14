'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Have questions? Reach out through any of these channels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-6 text-center">
                <a href="mailto:keytoacemaths@gmail.com" className="block group">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Email</h3>
                  <p className="text-blue-600 hover:underline break-all">
                    keytoacemaths@gmail.com
                  </p>
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-6 text-center">
                <a href="tel:0601495691" className="block group">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <Phone className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Phone</h3>
                  <p className="text-green-600 hover:underline font-mono">
                    0601495691
                  </p>
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-6 text-center">
                <div className="group">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <MessageCircle className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">TikTok</h3>
                  <p className="text-purple-600 text-sm mb-1">@key.to.ace.maths</p>
                  <p className="text-purple-600 text-sm">@keitu.metsee_only</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Excel in Mathematics?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the Maths Exam Prep Workshop and prepare for success with expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#booking"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Your Spot Now
              </a>
              <a
                href="mailto:keytoacemaths@gmail.com"
                className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full border-2 border-white/30 backdrop-blur-sm transition-all duration-300"
              >
                Ask a Question
              </a>
            </div>
          </div>

          <footer className="mt-16 text-center text-white/80 pb-8">
            <p className="text-sm">
              © 2025 Key to Ace Maths. All rights reserved.
            </p>
            <p className="text-xs mt-2">
              Maths Exam Prep Workshop - CAPS Curriculum Only
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}
