import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function PricingPage() {
  const { isSwedish, getLocalizedPath } = useLanguage()
  const packages = [
    {
      name: isSwedish ? 'Starter' : 'Starter',
      icon: Sparkles,
      price: isSwedish ? '25 000 kr' : '$2,500',
      period: isSwedish ? 'per månad' : 'per month',
      description: isSwedish
        ? 'Perfekt för små företag som börjar sin digitala resa'
        : 'Perfect for small businesses starting their digital journey',
      features: isSwedish ? [
        'Grundläggande SEO-optimering',
        'Webbplats med 5 sidor',
        'Mobilanpassad design',
        'Månatlig analysrapport',
        'E-postsupport',
        'Inställning av sociala medier',
      ] : [
        'Basic SEO Optimization',
        '5-Page Website',
        'Mobile Responsive Design',
        'Monthly Analytics Report',
        'Email Support',
        'Social Media Setup',
      ],
      cta: isSwedish ? 'Kom igång' : 'Get Started',
      popular: false,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: isSwedish ? 'Tillväxt' : 'Growth',
      icon: Zap,
      price: isSwedish ? '50 000 kr' : '$5,000',
      period: isSwedish ? 'per månad' : 'per month',
      description: isSwedish
        ? 'Idealiskt för växande företag redo att skala'
        : 'Ideal for growing businesses ready to scale',
      features: isSwedish ? [
        'Avancerad SEO-strategi',
        'Anpassad webbplats (10-15 sidor)',
        'Innehållsmarknadsföring',
        'Google Ads-hantering',
        'Hantering av sociala medier',
        'Veckovisa prestationsrapporter',
        'Prioriterad support',
        'Konverteringsoptimering',
      ] : [
        'Advanced SEO Strategy',
        'Custom Website (10-15 pages)',
        'Content Marketing',
        'Google Ads Management',
        'Social Media Management',
        'Weekly Performance Reports',
        'Priority Support',
        'Conversion Optimization',
      ],
      cta: isSwedish ? 'Börja växa' : 'Start Growing',
      popular: true,
      color: 'from-eco-500 to-eco-600',
    },
    {
      name: isSwedish ? 'Enterprise' : 'Enterprise',
      icon: Rocket,
      price: isSwedish ? 'Anpassat' : 'Custom',
      period: isSwedish ? 'kontakta oss' : 'contact us',
      description: isSwedish
        ? 'Omfattande lösningar för etablerade företag'
        : 'Comprehensive solutions for established businesses',
      features: isSwedish ? [
        'Fullständig SEO- och innehållsstrategi',
        'Anpassad webbapplikation',
        'Marknadsföring i flera kanaler',
        'Avancerad analys och BI',
        'Dedikerad kontoansvarig',
        'Anpassade integrationer',
        'AI- och automationsverktyg',
        'White-Glove-support',
        'Kvartalsvisa strategigenomgångar',
      ] : [
        'Full SEO & Content Strategy',
        'Custom Web Application',
        'Multi-Channel Marketing',
        'Advanced Analytics & BI',
        'Dedicated Account Manager',
        'Custom Integrations',
        'AI & Automation Tools',
        'White-Glove Support',
        'Quarterly Strategy Reviews',
      ],
      cta: isSwedish ? 'Kontakta försäljning' : 'Contact Sales',
      popular: false,
      color: 'from-purple-500 to-purple-600',
    },
  ]

  const services = isSwedish ? [
    { name: 'SEO-tjänster', starting: '15 000 kr/mån' },
    { name: 'Webbutveckling', starting: '30 000 kr projekt' },
    { name: 'Varumärke & Design', starting: '25 000 kr projekt' },
    { name: 'Performance Marketing', starting: '20 000 kr/mån + annonsbudget' },
    { name: 'Hantering av sociala medier', starting: '10 000 kr/mån' },
    { name: 'Anpassad programvara', starting: '100 000 kr projekt' },
  ] : [
    { name: 'SEO Services', starting: '$1,500/mo' },
    { name: 'Web Development', starting: '$3,000 project' },
    { name: 'Branding & Design', starting: '$2,500 project' },
    { name: 'Performance Marketing', starting: '$2,000/mo + ad spend' },
    { name: 'Social Media Management', starting: '$1,000/mo' },
    { name: 'Custom Software', starting: '$10,000 project' },
  ]

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-eco-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isSwedish ? 'Transparent prissättning, verkligt värde' : 'Transparent Pricing, Real Value'}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {isSwedish
                ? 'Välj ett paket som passar dina behov, eller låt oss skapa en anpassad lösning för ditt företag. Inga dolda avgifter, inga överraskningar.'
                : 'Choose a package that fits your needs, or let us create a custom solution for your business. No hidden fees, no surprises.'}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon
              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                    pkg.popular ? 'transform scale-105 border-4 border-eco-500' : 'border-2 border-slate-200'
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-eco-600 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm">
                      {isSwedish ? 'MEST POPULÄR' : 'MOST POPULAR'}
                    </div>
                  )}

                  <div className="p-8">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pkg.color} text-white flex items-center justify-center mb-6`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Package Name */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                    <p className="text-slate-600 mb-6">{pkg.description}</p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-bold text-slate-900">{pkg.price}</span>
                        {pkg.period && (
                          <span className="text-slate-600 ml-2">/ {pkg.period}</span>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-eco-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      to={getLocalizedPath('/quote')}
                      className={`block w-full px-6 py-4 rounded-lg font-semibold text-center transition-all duration-200 ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-eco-600 to-eco-700 text-white hover:shadow-xl transform hover:scale-105'
                          : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                      }`}
                    >
                      {pkg.cta}
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* A La Carte Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                {isSwedish ? 'Enskilda tjänster' : 'Individual Services'}
              </h2>
              <p className="text-lg text-slate-600">
                {isSwedish
                  ? 'Behöver du något specifikt? Vi erbjuder enskilda tjänster à la carte'
                  : 'Need something specific? We offer individual services à la carte'}
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200"
                  >
                    <span className="font-semibold text-slate-900">{service.name}</span>
                    <span className="text-eco-600 font-bold">{service.starting}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link
                  to={getLocalizedPath('/services')}
                  className="inline-flex items-center space-x-2 text-eco-600 font-semibold hover:text-eco-700"
                >
                  <span>{isSwedish ? 'Se alla tjänster' : 'View All Services'}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              {isSwedish ? 'Vanliga frågor' : 'Frequently Asked Questions'}
            </h2>

            <div className="space-y-6">
              {(isSwedish ? [
                {
                  q: 'Kräver ni långtidskontrakt?',
                  a: 'Vi erbjuder flexibla månad-till-månad-avtal för de flesta tjänster. Vi rekommenderar dock minst 6 månaders engagemang för SEO för att se optimala resultat.',
                },
                {
                  q: 'Vad ingår i den månatliga avgiften?',
                  a: 'Varje paket inkluderar specifika leveranser som beskrivs ovan. Vi tillhandahåller detaljerade månatliga rapporter som visar exakt vilket arbete som utförts och vilka resultat som uppnåtts.',
                },
                {
                  q: 'Kan jag anpassa ett paket?',
                  a: 'Absolut! Varje företag är unikt. Kontakta oss för att diskutera en anpassad lösning skräddarsydd efter dina specifika behov och budget.',
                },
                {
                  q: 'Jobbar ni med startups?',
                  a: 'Ja! Vi älskar att arbeta med startups och erbjuder specialpriser för företag i tidigt skede. Vårt Starter-paket är designat med startups i åtanke.',
                },
                {
                  q: 'Vad skiljer er prissättning från andra?',
                  a: 'Vi tror på transparent, värdebaserad prissättning. Du kommer alltid att veta exakt vad du betalar för och vilken ROI du får. Inga dolda avgifter eller överraskningskostnader.',
                },
              ] : [
                {
                  q: 'Do you require long-term contracts?',
                  a: 'We offer flexible month-to-month agreements for most services. However, we recommend a minimum 6-month commitment for SEO to see optimal results.',
                },
                {
                  q: 'What\'s included in the monthly retainer?',
                  a: 'Each package includes specific deliverables outlined above. We provide detailed monthly reports showing exactly what work was done and the results achieved.',
                },
                {
                  q: 'Can I customize a package?',
                  a: 'Absolutely! Every business is unique. Contact us to discuss a custom solution tailored to your specific needs and budget.',
                },
                {
                  q: 'Do you work with startups?',
                  a: 'Yes! We love working with startups and offer special pricing for early-stage companies. Our Starter package is designed with startups in mind.',
                },
                {
                  q: 'What makes your pricing different?',
                  a: 'We believe in transparent, value-based pricing. You\'ll always know exactly what you\'re paying for and the ROI you\'re getting. No hidden fees or surprise charges.',
                },
              ]).map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-eco-600 to-eco-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {isSwedish ? 'Redo att komma igång?' : 'Ready to Get Started?'}
            </h2>
            <p className="text-xl text-eco-100 mb-10 leading-relaxed">
              {isSwedish
                ? 'Låt oss diskutera ditt projekt och hitta den perfekta lösningen för dina affärsmål och budget.'
                : "Let's discuss your project and find the perfect solution for your business goals and budget."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to={getLocalizedPath('/quote')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-eco-700 rounded-lg text-lg font-semibold hover:bg-eco-50 transition-all duration-200 shadow-xl flex items-center justify-center space-x-2"
              >
                <span>{isSwedish ? 'Få din kostnadsfria offert' : 'Get Your Free Quote'}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to={getLocalizedPath('/contact')}
                className="w-full sm:w-auto px-8 py-4 bg-eco-700 text-white rounded-lg text-lg font-semibold hover:bg-eco-800 transition-all duration-200 border-2 border-white/20"
              >
                {isSwedish ? 'Kontakta oss' : 'Contact Us'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
