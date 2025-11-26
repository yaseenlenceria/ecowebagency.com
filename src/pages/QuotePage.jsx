import React, { useState } from 'react'
import { CheckCircle, Sparkles, ArrowRight } from 'lucide-react'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    // Contact Info
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',

    // Project Details
    services: [],
    budget: '',
    timeline: '',
    projectDescription: '',

    // Additional Info
    referralSource: '',
    newsletter: false,
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const serviceOptions = [
    'SEO & Organic Visibility',
    'Web Development & Custom Websites',
    'Branding & Graphic Design',
    'Ads & Performance Marketing',
    'Social Media Management',
    'Custom Software / AI Tools',
  ]

  const budgetRanges = [
    'Less than $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
  ]

  const timelineOptions = [
    'ASAP (Within 1 month)',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring options',
  ]

  const referralSources = [
    'Google Search',
    'Social Media',
    'Referral from a friend',
    'Industry event',
    'Online ad',
    'Other',
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleServiceToggle = (service) => {
    const newServices = formData.services.includes(service)
      ? formData.services.filter(s => s !== service)
      : [...formData.services, service]

    setFormData({
      ...formData,
      services: newServices,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const nextStep = () => {
    setCurrentStep(Math.min(currentStep + 1, 3))
  }

  const prevStep = () => {
    setCurrentStep(Math.max(currentStep - 1, 1))
  }

  if (submitted) {
    return (
      <div className="bg-stone-50 min-h-screen">
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-2xl p-12 shadow-2xl border-2 border-eco-200">
                <CheckCircle className="w-24 h-24 text-eco-600 mx-auto mb-6" />
                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                  Thank You!
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  We've received your quote request and one of our experts will review it carefully.
                  You'll hear from us within 24 hours with a detailed proposal.
                </p>
                <div className="bg-eco-50 rounded-xl p-6 mb-8">
                  <h3 className="font-bold text-slate-900 mb-2">What Happens Next?</h3>
                  <ul className="text-left text-slate-600 space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="font-bold text-eco-600">1.</span>
                      <span>We'll review your requirements (within 24 hours)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-bold text-eco-600">2.</span>
                      <span>Our team will prepare a custom proposal</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-bold text-eco-600">3.</span>
                      <span>We'll schedule a consultation call to discuss</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="/"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-eco-600 text-white rounded-lg font-semibold hover:bg-eco-700 transition-all duration-200 shadow-lg"
                >
                  <span>Return to Homepage</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-eco-600 to-eco-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Free, No-Obligation Quote</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get Your Custom Quote
            </h1>
            <p className="text-xl text-eco-100 leading-relaxed">
              Tell us about your project and we'll provide a detailed proposal tailored to your
              needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((step) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                        currentStep >= step
                          ? 'bg-eco-600 text-white'
                          : 'bg-slate-200 text-slate-500'
                      }`}
                    >
                      {step}
                    </div>
                    <span className="text-sm mt-2 text-slate-600">
                      {step === 1 && 'Contact Info'}
                      {step === 2 && 'Project Details'}
                      {step === 3 && 'Final Details'}
                    </span>
                  </div>
                  {step < 3 && (
                    <div
                      className={`flex-1 h-1 mx-4 transition-all duration-300 ${
                        currentStep > step ? 'bg-eco-600' : 'bg-slate-200'
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border-2 border-slate-200">
              {/* Step 1: Contact Info */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    Let's Start with Your Contact Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Current Website (if applicable)
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    Tell Us About Your Project
                  </h2>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Which services are you interested in? (Select all that apply) *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-4 py-3 rounded-lg border-2 text-left transition-all duration-200 ${
                            formData.services.includes(service)
                              ? 'border-eco-500 bg-eco-50 text-eco-700 font-semibold'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Project Budget Range *
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Project Timeline *
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none resize-none"
                      placeholder="Tell us about your project goals, target audience, key challenges, and any specific requirements..."
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Final Details */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    Almost Done!
                  </h2>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none"
                    >
                      <option value="">Select one</option>
                      {referralSources.map((source) => (
                        <option key={source} value={source}>{source}</option>
                      ))}
                    </select>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-6">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="w-5 h-5 rounded border-2 border-slate-300 text-eco-600 focus:ring-4 focus:ring-eco-100 mt-0.5"
                      />
                      <span className="text-sm text-slate-700">
                        I'd like to receive digital marketing tips and updates from Eco Web Agency.
                        (You can unsubscribe anytime)
                      </span>
                    </label>
                  </div>

                  <div className="bg-eco-50 border-2 border-eco-200 rounded-xl p-6">
                    <h3 className="font-bold text-slate-900 mb-3">What Happens Next?</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-eco-600 flex-shrink-0 mt-0.5" />
                        <span>We'll review your request within 24 hours</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-eco-600 flex-shrink-0 mt-0.5" />
                        <span>Receive a custom proposal with detailed pricing</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-eco-600 flex-shrink-0 mt-0.5" />
                        <span>Schedule a free consultation call to discuss</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t-2 border-slate-200">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg font-semibold hover:bg-slate-200 transition-all duration-200"
                  >
                    Previous
                  </button>
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-8 py-3 bg-eco-600 text-white rounded-lg font-semibold hover:bg-eco-700 transition-all duration-200 shadow-lg flex items-center space-x-2"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-8 py-3 bg-eco-600 text-white rounded-lg font-semibold hover:bg-eco-700 transition-all duration-200 shadow-lg flex items-center space-x-2"
                  >
                    <span>Submit Quote Request</span>
                    <CheckCircle className="w-5 h-5" />
                  </button>
                )}
              </div>

              <p className="text-sm text-slate-500 text-center mt-6">
                By submitting this form, you agree to our privacy policy. We'll never share your
                information with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
