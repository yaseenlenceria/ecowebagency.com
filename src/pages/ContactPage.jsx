import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function ContactPage() {
  const { isSwedish, getLocalizedPath } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    }, 5000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: isSwedish ? 'Mejla oss' : 'Email Us',
      details: ['hello@ecowebagency.com', 'support@ecowebagency.com'],
      action: 'mailto:hello@ecowebagency.com',
    },
    {
      icon: Phone,
      title: isSwedish ? 'Ring oss' : 'Call Us',
      details: ['+1 (234) 567-890', isSwedish ? 'Mån-Fre 9-18 EST' : 'Mon-Fri 9am-6pm EST'],
      action: 'tel:+1234567890',
    },
    {
      icon: MapPin,
      title: isSwedish ? 'Besök oss' : 'Visit Us',
      details: ['123 Green Street', 'Eco City, EC 12345'],
      action: null,
    },
    {
      icon: Clock,
      title: isSwedish ? 'Öppettider' : 'Business Hours',
      details: isSwedish
        ? ['Måndag - Fredag: 9-18', 'Helg: Efter överenskommelse']
        : ['Monday - Friday: 9am - 6pm', 'Weekend: By appointment'],
      action: null,
    },
  ]

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-eco-600 to-eco-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isSwedish ? 'Låt oss starta en konversation' : "Let's Start a Conversation"}
            </h1>
            <p className="text-xl text-eco-100 leading-relaxed">
              {isSwedish
                ? 'Har du ett projekt i åtanke? Frågor om våra tjänster? Vi skulle gärna höra från dig. Vårt team svarar vanligtvis inom 24 timmar.'
                : "Have a project in mind? Questions about our services? We'd love to hear from you. Our team typically responds within 24 hours."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
                >
                  <div className="w-12 h-12 rounded-lg bg-eco-100 text-eco-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-slate-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.action && (
                    <a
                      href={info.action}
                      className="inline-block mt-3 text-eco-600 font-semibold text-sm hover:text-eco-700"
                    >
                      {isSwedish ? 'Kontakta oss →' : 'Get in touch →'}
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                {isSwedish ? 'Skicka oss ett meddelande' : 'Send Us a Message'}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                {isSwedish
                  ? 'Fyll i formuläret nedan så återkommer vi till dig så snart som möjligt. För brådskande ärenden, ring oss direkt.'
                  : "Fill out the form below and we'll get back to you as soon as possible. For urgent matters, please call us directly."}
              </p>

              {submitted ? (
                <div className="bg-eco-50 border-2 border-eco-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-eco-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {isSwedish ? 'Meddelande skickat!' : 'Message Sent Successfully!'}
                  </h3>
                  <p className="text-slate-600">
                    {isSwedish
                      ? 'Tack för att du hörde av dig. Vi återkommer till dig inom 24 timmar.'
                      : "Thank you for reaching out. We'll get back to you within 24 hours."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      {isSwedish ? 'Fullständigt namn *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none"
                      placeholder={isSwedish ? 'Anna Andersson' : 'John Doe'}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        {isSwedish ? 'E-postadress *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none"
                        placeholder={isSwedish ? 'anna@foretag.se' : 'john@company.com'}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                        {isSwedish ? 'Telefonnummer' : 'Phone Number'}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none"
                        placeholder={isSwedish ? '+46 70 123 45 67' : '+1 (234) 567-890'}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                      {isSwedish ? 'Företagsnamn' : 'Company Name'}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none"
                      placeholder={isSwedish ? 'Ditt företag' : 'Your Company'}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      {isSwedish ? 'Meddelande *' : 'Message *'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-eco-500 focus:ring-4 focus:ring-eco-100 transition-all duration-200 outline-none resize-none"
                      placeholder={isSwedish ? 'Berätta om ditt projekt...' : 'Tell us about your project...'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-eco-600 text-white rounded-lg font-semibold hover:bg-eco-700 transition-all duration-200 shadow-lg shadow-eco-600/30 flex items-center justify-center space-x-2"
                  >
                    <span>{isSwedish ? 'Skicka meddelande' : 'Send Message'}</span>
                    <Send className="w-5 h-5" />
                  </button>

                  <p className="text-sm text-slate-500 text-center">
                    {isSwedish
                      ? 'Genom att skicka detta formulär godkänner du vår integritetspolicy.'
                      : 'By submitting this form, you agree to our privacy policy.'}
                  </p>
                </form>
              )}
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-eco-200 to-eco-400 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-2xl font-bold">{isSwedish ? 'Vårt kontor' : 'Our Office'}</p>
                    <p className="text-lg">123 Green Street</p>
                    <p className="text-lg">Eco City, EC 12345</p>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {isSwedish ? 'Varför kontakta oss?' : 'Why Contact Us?'}
                </h3>
                <ul className="space-y-4">
                  {(isSwedish ? [
                    'Gratis konsultation och projektutvärdering',
                    'Anpassade lösningar skräddarsydda efter dina behov',
                    'Transparent prissättning utan dolda avgifter',
                    'Snabb svarstid (inom 24 timmar)',
                    'Expertvägledning från erfarna yrkespersoner',
                  ] : [
                    'Free consultation and project assessment',
                    'Custom solutions tailored to your needs',
                    'Transparent pricing with no hidden fees',
                    'Fast response time (within 24 hours)',
                    'Expert guidance from experienced professionals',
                  ]).map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-eco-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              {isSwedish ? 'Innan du hör av dig' : 'Before You Reach Out'}
            </h2>

            <div className="space-y-6">
              {(isSwedish ? [
                {
                  q: 'Vilken information ska jag inkludera i mitt meddelande?',
                  a: 'Berätta om ditt företag, dina mål och vilka tjänster du är intresserad av. Ju mer detaljer du ger, desto bättre kan vi hjälpa dig.',
                },
                {
                  q: 'Hur snabbt svarar ni?',
                  a: 'Vi svarar vanligtvis på alla förfrågningar inom 24 timmar på vardagar. För brådskande ärenden, ring oss direkt.',
                },
                {
                  q: 'Erbjuder ni gratis konsultationer?',
                  a: 'Ja! Vi erbjuder en gratis 30-minuters konsultation för att diskutera ditt projekt och avgöra hur vi kan hjälpa.',
                },
                {
                  q: 'Kan jag boka ett samtal istället för att fylla i formuläret?',
                  a: 'Absolut! Ring oss på +1 (234) 567-890 eller nämn din föredragna tid i meddelandefältet.',
                },
              ] : [
                {
                  q: 'What information should I include in my message?',
                  a: 'Tell us about your business, your goals, and what services you\'re interested in. The more details you provide, the better we can help you.',
                },
                {
                  q: 'How quickly will you respond?',
                  a: 'We typically respond to all inquiries within 24 hours on business days. For urgent matters, please call us directly.',
                },
                {
                  q: 'Do you offer free consultations?',
                  a: 'Yes! We offer a free 30-minute consultation to discuss your project and determine how we can help.',
                },
                {
                  q: 'Can I schedule a call instead of filling out the form?',
                  a: 'Absolutely! Call us at +1 (234) 567-890 or mention your preferred time in the message field.',
                },
              ]).map((faq, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
