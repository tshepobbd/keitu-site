'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, BookOpen, GraduationCap, Trophy } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-600 text-white px-4 py-2 text-sm">
              Meet Your Tutor
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              About Your Tutor
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from a dedicated mathematics expert with proven results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6" />
                  Education & Qualifications
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">BSc in Mathematics and Statistics</p>
                    <p className="text-gray-600">University of Cape Town (UCT)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Honours Degree in Mathematics</p>
                    <p className="text-gray-600">University of Johannesburg (UJ) - In Progress</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Promaths Kutlwanong Alumni</p>
                    <p className="text-gray-600">Excellence in Mathematics Program</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-6 w-6" />
                  Outstanding Results
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold text-gray-900">Grade 11 Mathematics</span>
                      <Badge className="bg-blue-600 text-white text-lg px-4 py-1">98%</Badge>
                    </div>
                    <p className="text-gray-600">Final Mathematics Mark</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-600">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold text-gray-900">Grade 12 Mathematics</span>
                      <Badge className="bg-green-600 text-white text-lg px-4 py-1">97%</Badge>
                    </div>
                    <p className="text-gray-600">Final Mathematics Mark</p>
                  </div>
                  <div className="text-center pt-4">
                    <p className="text-gray-700 italic font-medium">
                      "I do Mathematics everyday basically"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Keitumetse Motlhabane</h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Passionate about mathematics education and helping students achieve excellence.
              With top-tier academic results and ongoing advanced studies, I bring both expertise
              and real-world understanding to every tutoring session.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
