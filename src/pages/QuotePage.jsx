import React, { useState } from 'react'
import { CheckCircle, Sparkles, ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function QuotePage() {
  const { isSwedish, getLocalizedPath } = useLanguage()
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

  const serviceOptions = isSwedish ? [
    'SEO & organisk synlighet',
    'Webbutveckling & anpassade webbplatser',
    'Varumärke & grafisk design',
    'Annonser & performance marketing',
    'Hantering av sociala medier',
    'Anpassad programvara / AI-verktyg',
  ] : [
    'SEO & Organic Visibility',
    'Web Development & Custom Websites',
    'Branding & Graphic Design',
    'Ads & Performance Marketing',
    'Social Media Management',
    'Custom Software / AI Tools',
  ]

  const budgetRanges = isSwedish ? [
    'Mindre än 50 000 kr',
    '50 000 - 100 000 kr',
    '100 000 - 250 000 kr',
    '250 000 - 500 000 kr',
    '500 000 - 1 000 000 kr',
    '1 000 000 kr+',
  ] : [
    'Less than $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
  ]

  const timelineOptions = isSwedish ? [
    'Så snart som möjligt (inom 1 månad)',
    '1-3 månader',
    '3-6 månader',
    '6+ månader',
    'Utforskar bara alternativ',
  ] : [
    'ASAP (Within 1 month)',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring options',
  ]

  const referralSources = isSwedish ? [
    'Google-sökning',
    'Sociala medier',
    'Rekommendation från en vän',
    'Branschevenemang',
    'Online-annons',
    'Annat',
  ] : [
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
                  {isSwedish ? 'Tack!' : 'Thank You!'}
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  {isSwedish
                    ? 'Vi har tagit emot din offertförfrågan och en av våra experter kommer att granska den noggrant. Du hör från oss inom 24 timmar med ett detaljerat förslag.'
                    : "We've received your quote request and one of our experts will review it carefully. You'll hear from us within 24 hours with a detailed proposal."}
                </p>
                <div className="bg-eco-50 rounded-xl p-6 mb-8">
                  <h3 className="font-bold text-slate-900 mb-2">
                    {isSwedish ? 'Vad händer härnäst?' : 'What Happens Next?'}
                  </h3>
                  <ul className="text-left text-slate-600 space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="font-bold text-eco-600">1.</span>
                      <span>
                        {isSwedish
                          ? 'Vi granskar dina krav (inom 24 timmar)'
                          : "We'll review your requirements (within 24 hours)"}
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-bold text-eco-600">2.</span>
                      <span>
                        {isSwedish
                          ? 'Vårt team förbereder ett anpassat förslag'
                          : 'Our team will prepare a custom proposal'}
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-bold text-eco-600">3.</span>
                      <span>
                        {isSwedish
                          ? 'Vi bokar ett konsultationssamtal för diskussion'
                          : "We'll schedule a consultation call to discuss"}
                      </span>
                    </li>
                  </ul>
                </div>
                <a
                  href={getLocalizedPath('/')}
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-eco-600 text-white rounded-lg font-semibold hover:bg-eco-700 transition-all duration-200 shadow-lg"
                >
                  <span>{isSwedish ? 'Återgå till startsidan' : 'Return to Homepage'}</span>
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
              <span>{isSwedish ? 'Gratis, icke-bindande offert' : 'Free, No-Obligation Quote'}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isSwedish ? 'Få din anpassade offert' : 'Get Your Custom Quote'}
            </h1>
            <p className="text-xl text-eco-100 leading-relaxed">
              {isSwedish
                ? 'Berätta om ditt projekt så ger vi dig ett detaljerat förslag skräddarsytt efter dina behov och budget.'
                : "Tell us about your project and we'll provide a detailed proposal tailored to your needs and budget."}
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
                      {step === 1 && (isSwedish ? 'Kontaktinfo' : 'Contact Info')}
                      {step === 2 && (isSwedish ? 'Projektdetaljer' : 'Project Details')}
                      {step === 3 && (isSwedish ? 'Slutliga detaljer' : 'Final Details')}
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
                    {isSwedish
                      ? 'Låt oss börja med din kontaktinformation'
                      : "Let's Start with Your Contact Information"}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {isSwedish ? 'Fullständigt namn *' : 'Full Name *'}
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
                        {isSwedish ? 'E-postadress *' : 'Email Address *'}
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
                        {isSwedish ? 'Telefonnummer' : 'Phone Number'}
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
                        {isSwedish ? 'Företagsnamn *' : 'Company Name *'}
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
                      {isSwedish ? 'Nuvarande webbplats (om tillämpligt)' : 'Current Website (if applicable)'}
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none"
                      placeholder={isSwedish ? 'https://dinwebbplats.se' : 'https://yourwebsite.com'}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    {isSwedish ? 'Berätta om ditt projekt' : 'Tell Us About Your Project'}
                  </h2>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      {isSwedish
                        ? 'Vilka tjänster är du intresserad av? (Välj alla som gäller) *'
                        : 'Which services are you interested in? (Select all that apply) *'}
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
                      {isSwedish ? 'Projektbudget *' : 'Project Budget Range *'}
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none"
                    >
                      <option value="">{isSwedish ? 'Välj budgetintervall' : 'Select budget range'}</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      {isSwedish ? 'Tidsplan *' : 'Project Timeline *'}
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none"
                    >
                      <option value="">{isSwedish ? 'Välj tidsplan' : 'Select timeline'}</option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      {isSwedish ? 'Projektbeskrivning *' : 'Project Description *'}
                    </label>
                    <textarea
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none resize-none"
                      placeholder={isSwedish
                        ? 'Berätta om dina projektmål, målgrupp, viktiga utmaningar och eventuella specifika krav...'
                        : 'Tell us about your project goals, target audience, key challenges, and any specific requirements...'}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Final Details */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    {isSwedish ? 'Nästan klart!' : 'Almost Done!'}
                  </h2>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      {isSwedish ? 'Hur hörde du om oss?' : 'How did you hear about us?'}
                    </label>
                    <select
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none"
                    >
                      <option value="">{isSwedish ? 'Välj ett alternativ' : 'Select one'}</option>
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
                        {isSwedish
                          ? 'Jag vill gärna ta emot tips om digital marknadsföring och uppdateringar från Eco Web Agency. (Du kan avsluta prenumerationen när som helst)'
                          : "I'd like to receive digital marketing tips and updates from Eco Web Agency. (You can unsubscribe anytime)"}
                      </span>
                    </label>
                  </div>

                  <div className="bg-eco-50 border-2 border-eco-200 rounded-xl p-6">
                    <h3 className="font-bold text-slate-900 mb-3">
                      {isSwedish ? 'Vad händer härnäst?' : 'What Happens Next?'}
                    </h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-eco-600 flex-shrink-0 mt-0.5" />
                        <span>
                          {isSwedish
                            ? 'Vi granskar din förfrågan inom 24 timmar'
                            : "We'll review your request within 24 hours"}
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-eco-600 flex-shrink-0 mt-0.5" />
                        <span>
                          {isSwedish
                            ? 'Ta emot ett anpassat förslag med detaljerad prissättning'
                            : 'Receive a custom proposal with detailed pricing'}
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-eco-600 flex-shrink-0 mt-0.5" />
                        <span>
                          {isSwedish
                            ? 'Boka ett gratis konsultationssamtal för diskussion'
                            : 'Schedule a free consultation call to discuss'}
                        </span>
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
                    {isSwedish ? 'Föregående' : 'Previous'}
                  </button>
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-8 py-3 bg-eco-600 text-white rounded-lg font-semibold hover:bg-eco-700 transition-all duration-200 shadow-lg flex items-center space-x-2"
                  >
                    <span>{isSwedish ? 'Nästa steg' : 'Next Step'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-8 py-3 bg-eco-600 text-white rounded-lg font-semibold hover:bg-eco-700 transition-all duration-200 shadow-lg flex items-center space-x-2"
                  >
                    <span>{isSwedish ? 'Skicka offertförfrågan' : 'Submit Quote Request'}</span>
                    <CheckCircle className="w-5 h-5" />
                  </button>
                )}
              </div>

              <p className="text-sm text-slate-500 text-center mt-6">
                {isSwedish
                  ? 'Genom att skicka detta formulär godkänner du vår integritetspolicy. Vi delar aldrig din information med tredje part.'
                  : "By submitting this form, you agree to our privacy policy. We'll never share your information with third parties."}
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
