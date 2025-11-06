
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  queryType: string;
  budget: string;
  location: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  image_url: string;
  display_order: number;
  status: string;
}

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    queryType: '',
    budget: '',
    location: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  // Fetch services from database
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .eq('status', 'active')
          .order('display_order', { ascending: true });

        if (error) {
          console.error('Error fetching services:', error);
        } else if (data) {
          setServices(data);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setServicesLoading(false);
      }
    };

    fetchServices();
  }, [supabase]);

  const budgetOptions = [
    'Under ₹50 lakhs',
    '₹50 lakhs - ₹1 crore',
    '₹1 crore - ₹2 crores',
    '₹2 crores - ₹5 crores',
    '₹5 crores - ₹10 crores',
    '₹10 crores or above',
    'I\'m really not sure'
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            query_type: formData.queryType,
            budget: formData.budget,
            location: formData.location,
            status: 'new',
          }
        ]);

      if (error) throw error;

      // Success - show confirmation and redirect
      alert('Thank you! Your inquiry has been submitted successfully. We will contact you soon.');
      router.push('/');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your inquiry. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName;
      case 2:
        return formData.email || formData.phone;
      case 3:
        return formData.service;
      case 4:
        return formData.queryType;
      case 5:
        return formData.budget;
      case 6:
        return formData.location;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] px-6 py-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/" className="-ml-16 md:ml-0">
            <div className="relative h-40 w-80">
              <Image 
<<<<<<< HEAD
                src="/logofinal.png" 
=======
                src="/logo12.png" 
>>>>>>> 8621800 (chage)
                alt="Logo" 
                fill
                className="object-cover object-center"
              />
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-base">{currentStep} / {totalSteps}</span>
            <button
              onClick={() => window.history.back()}
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-4xl mx-auto mt-20">
          {/* Step 1: Name */}
          {currentStep === 1 && (
            <div className="space-y-12">
              <div className="text-center">
                <p className="text-[#6B8E23] text-base mb-3">Great to meet you!</p>
                <h1 className="text-5xl md:text-6xl font-serif text-[#2C3E1F]">What&apos;s your name?</h1>
              </div>
              
              <div className="space-y-4 mt-12">
                <div className="relative">
                  {formData.firstName && (
                    <label className="absolute -top-3 left-6 bg-[#FAF8F3] px-2 text-sm text-[#6B8E23]">
                      First Name*
                    </label>
                  )}
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                    className="w-full px-8 py-5 rounded-full border-2 border-gray-300 focus:border-[#6B8E23] focus:outline-none text-lg bg-white transition-all"
                  />
                </div>
                
                <div className="relative">
                  {formData.lastName && (
                    <label className="absolute -top-3 left-6 bg-[#FAF8F3] px-2 text-sm text-[#6B8E23]">
                      Last Name*
                    </label>
                  )}
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                    className="w-full px-8 py-5 rounded-full border-2 border-gray-300 focus:border-[#6B8E23] focus:outline-none text-lg bg-white transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Contact */}
          {currentStep === 2 && (
            <div className="space-y-12">
              <div className="text-center">
                <p className="text-[#6B8E23] text-base mb-3">Let&apos;s Connect</p>
                <h1 className="text-5xl md:text-6xl font-serif text-[#2C3E1F]">What&apos;s the best way to get in touch?</h1>
              </div>
              
              <div className="space-y-4 mt-12">
                <input
                  type="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full px-8 py-5 rounded-full border-2 border-gray-300 focus:border-[#6B8E23] focus:outline-none text-lg bg-white transition-all"
                />
                
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="w-full px-8 py-5 rounded-full border-2 border-gray-300 focus:border-[#6B8E23] focus:outline-none text-lg bg-white transition-all"
                />
              </div>
            </div>
          )}

          {/* Step 3: Service Selection */}
          {currentStep === 3 && (
            <div className="space-y-12">
              <div className="text-left">
                <p className="text-[#6B8E23] text-base mb-3">What are you looking to build</p>
                <h1 className="text-4xl md:text-5xl font-serif text-[#2C3E1F]">
                  Which of these HRC housing solutions sound most like what you need?
                </h1>
              </div>
              
              {servicesLoading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6B8E23] mx-auto"></div>
                    <p className="mt-4 text-[#6B8E23]">Loading services...</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => updateFormData('service', service.id)}
                      className={`rounded-3xl border-2 transition-all text-left overflow-hidden ${
                        formData.service === service.id
                          ? 'border-[#6B8E23] bg-[#E8F5E9]'
                          : 'border-gray-300 bg-white hover:border-[#6B8E23]'
                      }`}
                    >
                      {/* Image Section */}
                      {service.image_url && (
                        <div className="relative h-40 w-full overflow-hidden">
                          <Image
                            src={service.image_url}
                            alt={service.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      
                      {/* Content Section */}
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center shrink-0 mt-1">
                            {formData.service === service.id && (
                              <div className="w-3.5 h-3.5 rounded-full bg-[#6B8E23]"></div>
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-serif font-semibold text-[#2C3E1F] mb-2">
                              {service.name}
                            </h3>
                            {service.description && (
                              <p className="text-sm text-[#6B8E23] leading-relaxed line-clamp-3">
                                {service.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 4: Query Type */}
          {currentStep === 4 && (
            <div className="space-y-12">
              <div className="text-center">
                <p className="text-[#6B8E23] text-base mb-3">Tell us more</p>
                <h1 className="text-5xl md:text-6xl font-serif text-[#2C3E1F]">What would you like to discuss?</h1>
              </div>
              
              <textarea
                placeholder="Describe your project needs, goals, timeline, or any specific questions you have..."
                value={formData.queryType}
                onChange={(e) => updateFormData('queryType', e.target.value)}
                rows={8}
                className="w-full px-8 py-5 rounded-3xl border-2 border-gray-300 focus:border-[#6B8E23] focus:outline-none text-lg bg-white resize-none transition-all"
              />
            </div>
          )}

          {/* Step 5: Budget */}
          {currentStep === 5 && (
            <div className="space-y-12">
              <div className="text-left">
                <p className="text-[#6B8E23] text-base mb-3">Understanding the Cost</p>
                <h1 className="text-5xl md:text-6xl font-serif text-[#2C3E1F]">Do you have a target budget in mind?</h1>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                {budgetOptions.map((budget, index) => (
                  <button
                    key={index}
                    onClick={() => updateFormData('budget', budget)}
                    className={`p-6 rounded-full border-2 transition-all text-center ${
                      formData.budget === budget
                        ? 'border-[#6B8E23] bg-[#E8F5E9]'
                        : 'border-gray-300 bg-white hover:border-[#6B8E23]'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-7 h-7 rounded-full border-2 border-gray-400 flex items-center justify-center shrink-0">
                        {formData.budget === budget && (
                          <div className="w-4 h-4 rounded-full bg-[#6B8E23]"></div>
                        )}
                      </div>
                      <span className="text-lg text-[#2C3E1F]">{budget}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Location */}
          {currentStep === 6 && (
            <div className="space-y-12">
              <div className="text-center">
                <p className="text-[#6B8E23] text-base mb-3">Project Location</p>
                <h1 className="text-5xl md:text-6xl font-serif text-[#2C3E1F]">Where is your project located?</h1>
              </div>
              
              <input
                type="text"
                placeholder="City, State or Full Address"
                value={formData.location}
                onChange={(e) => updateFormData('location', e.target.value)}
                className="w-full px-8 py-5 rounded-full border-2 border-gray-300 focus:border-[#6B8E23] focus:outline-none text-lg bg-white transition-all"
              />
            </div>
          )}

          {/* Step 7: Review */}
          {currentStep === 7 && (
            <div className="space-y-12">
              <div className="text-center">
                <p className="text-[#6B8E23] text-base mb-3">Almost there!</p>
                <h1 className="text-5xl md:text-6xl font-serif text-[#2C3E1F]">Review your information</h1>
              </div>
              
              <div className="space-y-4 bg-white p-8 rounded-3xl border-2 border-gray-300">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Name</p>
                    <p className="text-lg font-medium">{formData.firstName} {formData.lastName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <p className="text-lg font-medium">{formData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone</p>
                    <p className="text-lg font-medium">{formData.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Service</p>
                    <p className="text-lg font-medium capitalize">{formData.service.replace('-', ' ')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Budget</p>
                    <p className="text-lg font-medium">{formData.budget}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Location</p>
                    <p className="text-lg font-medium">{formData.location}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Project Description</p>
                  <p className="text-lg font-medium">{formData.queryType}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation - Fixed at bottom */}
        <div className="fixed bottom-8 left-0 right-0 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`w-14 h-14 rounded-full border-2 border-black flex items-center justify-center transition-all ${
                currentStep === 1
                  ? 'opacity-0 pointer-events-none'
                  : 'hover:bg-black hover:text-white'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={currentStep === totalSteps ? handleSubmit : handleNext}
              disabled={!canProceed() || submitting}
              className={`px-10 py-4 rounded-full font-semibold transition-all flex items-center gap-3 ${
                canProceed() && !submitting
                  ? 'bg-[#1a2817] text-white hover:bg-[#2F3D24]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {submitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  {currentStep === totalSteps ? 'Submit' : 'Next Question'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
