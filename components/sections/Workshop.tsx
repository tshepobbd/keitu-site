'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, DollarSign, Laptop, Users, BookOpen, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Workshop() {
  return (
    <section id="workshop" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-600 text-white px-4 py-2 text-sm">
              Workshop Details
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Maths Exam Prep Workshop
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Intensive preparation for CAPS curriculum mathematics exams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Duration</h3>
                <p className="text-gray-600">1 Oct - 1 Nov 2025</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Grades</h3>
                <p className="text-gray-600">Grade 10, 11 & 12</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Price</h3>
                <p className="text-gray-600 font-bold text-xl">R350</p>
                <p className="text-sm text-gray-500">once-off</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Laptop className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Format</h3>
                <p className="text-gray-600">Online</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-blue-200 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">What's Included</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Comprehensive exam preparation for CAPS curriculum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Access to grade-specific WhatsApp groups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Microsoft Teams sessions for interactive learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Join anytime from 1st October to 1st November</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Direct support from an experienced mathematics tutor</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Important Reminders</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/80 rounded-lg p-4 border-l-4 border-orange-500">
                    <p className="font-semibold text-gray-900 mb-1">Curriculum</p>
                    <p className="text-gray-700">This workshop is for <span className="font-bold text-orange-600">CAPS curriculum ONLY</span>, not IEB.</p>
                  </div>
                  <div className="bg-white/80 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="font-semibold text-gray-900 mb-1">Flexible Joining</p>
                    <p className="text-gray-700">You can join the workshop anytime between 1st October and 1st November.</p>
                  </div>
                  <div className="bg-white/80 rounded-lg p-4 border-l-4 border-green-500">
                    <p className="font-semibold text-gray-900 mb-1">Proof of Payment</p>
                    <p className="text-gray-700">Email your proof of payment to secure your spot in the workshop.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
