'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, CreditCard, Mail, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

export default function Booking() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    grade: '',
    previousMark: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.surname || !formData.grade || !formData.previousMark) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Booking Information Received!",
      description: "Please proceed with the payment details below.",
    });
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-600 text-white px-4 py-2 text-sm">
              Secure Your Spot
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Booking Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to join the workshop
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-2xl">Step 1: Your Information</CardTitle>
                <CardDescription className="text-blue-100">
                  Tell us about yourself
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base font-semibold">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="border-2 focus:border-blue-500 h-12"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="surname" className="text-base font-semibold">Surname *</Label>
                      <Input
                        id="surname"
                        placeholder="Enter your surname"
                        value={formData.surname}
                        onChange={(e) => handleInputChange('surname', e.target.value)}
                        className="border-2 focus:border-blue-500 h-12"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="grade" className="text-base font-semibold">Grade *</Label>
                      <Select value={formData.grade} onValueChange={(value) => handleInputChange('grade', value)}>
                        <SelectTrigger className="border-2 focus:border-blue-500 h-12">
                          <SelectValue placeholder="Select your grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">Grade 10</SelectItem>
                          <SelectItem value="11">Grade 11</SelectItem>
                          <SelectItem value="12">Grade 12</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="previousMark" className="text-base font-semibold">
                        Previous Term Mark (%) *
                      </Label>
                      <Input
                        id="previousMark"
                        type="number"
                        min="0"
                        max="100"
                        placeholder="e.g., 75"
                        value={formData.previousMark}
                        onChange={(e) => handleInputChange('previousMark', e.target.value)}
                        className="border-2 focus:border-blue-500 h-12"
                        required
                      />
                    </div>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-orange-800">
                          <span className="font-bold">Important:</span> This workshop is for <span className="font-bold">CAPS curriculum only</span>, not IEB.
                        </p>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Continue to Payment Details
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 text-center">
                      <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Information Received!</h3>
                      <p className="text-gray-700 mb-4">
                        Thank you, <span className="font-bold">{formData.name} {formData.surname}</span>
                      </p>
                      <div className="bg-white rounded-lg p-4 space-y-2 text-left">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Grade:</span>
                          <span className="font-semibold">Grade {formData.grade}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Previous Mark:</span>
                          <span className="font-semibold">{formData.previousMark}%</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-gray-600">
                      Now proceed with the payment using the details on the right
                    </p>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Edit Information
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                <CardTitle className="text-2xl">Step 2: Payment</CardTitle>
                <CardDescription className="text-green-100">
                  Complete your booking with payment
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Payment Details</h3>
                  </div>
                  <div className="space-y-3 bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-600 font-medium">Amount:</span>
                      <span className="text-2xl font-bold text-green-600">R350</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bank:</span>
                        <span className="font-semibold">Capitec</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account Number:</span>
                        <span className="font-semibold font-mono">1746170288</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Branch Code:</span>
                        <span className="font-semibold font-mono">470010</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-600">Reference:</span>
                        <span className="font-semibold text-right">
                          {isSubmitted ? `${formData.name} ${formData.surname}` : 'Name & Surname'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="h-6 w-6 text-orange-600" />
                    <h3 className="text-xl font-bold text-gray-900">After Payment</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-700 font-medium">
                      Email proof of payment to:
                    </p>
                    <a
                      href="mailto:keytoacemaths@gmail.com"
                      className="block bg-white rounded-lg p-4 text-center font-bold text-blue-600 hover:bg-blue-50 transition-colors border-2 border-blue-200"
                    >
                      keytoacemaths@gmail.com
                    </a>
                    <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
                      <p className="font-semibold text-gray-900">Include in your email:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                          Your grade
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                          Your name & surname
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                          Your WhatsApp number
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                          Proof of payment
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <p className="text-sm text-green-800">
                    <span className="font-bold">Next Step:</span> You will be added to your grade WhatsApp group and Microsoft Teams.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
}
