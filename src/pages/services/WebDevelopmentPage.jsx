import React from 'react'
import { Link } from 'react-router-dom'
import { Code, CheckCircle, ArrowRight, Zap, Shield, Smartphone } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

export default function WebDevelopmentPage() {
  const { isSwedish, getLocalizedPath } = useLanguage()

  const features = isSwedish ? [
    'Skräddarsydd Webbdesign & Utveckling',
    'E-handelslösningar (Shopify, WooCommerce)',
    'Webapplikationsutveckling',
    'Innehållshanteringssystem (WordPress, Anpassad CMS)',
    'API-utveckling & Integration',
    'Mobilresponsiv Design',
    'Prestandaoptimering',
    'Löpande Underhåll & Support',
  ] : [
    'Custom Website Design & Development',
    'E-Commerce Solutions (Shopify, WooCommerce)',
    'Web Application Development',
    'Content Management Systems (WordPress, Custom CMS)',
    'API Development & Integration',
    'Mobile-Responsive Design',
    'Performance Optimization',
    'Ongoing Maintenance & Support',
  ]

  const benefits = isSwedish ? [
    {
      icon: Zap,
      title: 'Blixtsnabbt',
      description: 'Optimerad för hastighet och prestanda',
    },
    {
      icon: Shield,
      title: 'Säkert & Pålitligt',
      description: 'Byggd med bästa säkerhetspraxis',
    },
    {
      icon: Smartphone,
      title: 'Mobil-först',
      description: 'Perfekt på alla enheter och skärmstorlekar',
    },
  ] : [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with security best practices',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'Perfect on every device and screen size',
    },
  ]

  // Update page meta
  React.useEffect(() => {
    document.title = isSwedish
      ? 'Webbutveckling & Skräddarsydda Webbplatser | Eco Web Agency'
      : 'Web Development & Custom Websites | Eco Web Agency'
  }, [isSwedish])

  return (
    <div className="bg-stone-50">
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white mb-6">
                <Code className="w-8 h-8" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {isSwedish ? 'Webbutveckling & Skräddarsydda Webbplatser' : 'Web Development & Custom Websites'}
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                {isSwedish
                  ? 'Vackra, snabba och konverteringsoptimerade webbplatser byggda med modern teknik. Från enkla landningssidor till komplexa webbapplikationer.'
                  : 'Beautiful, fast, and conversion-optimized websites built with modern technologies. From simple landing pages to complex web applications.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={getLocalizedPath('quote')}
                  className="px-8 py-4 bg-white text-purple-700 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200 shadow-xl text-center"
                >
                  {isSwedish ? 'Få Din Kostnadsfria Offert' : 'Get Your Free Quote'}
                </Link>
                <Link
                  to={getLocalizedPath('portfolio')}
                  className="px-8 py-4 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition-all duration-200 border-2 border-white/20 text-center"
                >
                  {isSwedish ? 'Se Vårt Arbete' : 'View Our Work'}
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl shadow-2xl aspect-square" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {isSwedish ? 'Bevisade Resultat' : 'Proven Results'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-purple-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-purple-600 mb-2">+350%</div>
              <div className="text-slate-700">{isSwedish ? 'Konverteringsökning' : 'Conversion Rate Increase'}</div>
            </div>
            <div className="text-center bg-purple-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-purple-600 mb-2">2.5s</div>
              <div className="text-slate-700">{isSwedish ? 'Genomsnittlig Laddningstid' : 'Average Page Load Time'}</div>
            </div>
            <div className="text-center bg-purple-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-slate-700">{isSwedish ? 'Levererade Webbplatser' : 'Websites Delivered'}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              {isSwedish ? 'Vad Ingår' : "What's Included"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-md">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            {isSwedish ? 'Varför Välja Våra Webbutvecklingstjänster' : 'Why Choose Our Web Development Services'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {isSwedish ? 'Redo att Bygga Din Drömwebbplats?' : 'Ready to Build Your Dream Website?'}
            </h2>
            <p className="text-xl text-purple-100 mb-10 leading-relaxed">
              {isSwedish
                ? 'Låt oss skapa en webbplats som inte bara ser fantastisk ut utan också driver verkliga affärsresultat.'
                : "Let's create a website that not only looks amazing but drives real business results."
              }
            </p>
            <Link
              to={getLocalizedPath('quote')}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-purple-700 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-all duration-200 shadow-xl"
            >
              <span>{isSwedish ? 'Få Din Kostnadsfria Offert' : 'Get Your Free Quote'}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
