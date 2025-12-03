import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { seoContent } from '../../data/seoContent'
import {
  Search,
  CheckCircle,
  ArrowRight,
  Target,
  BarChart,
  Users,
  Globe,
  Zap,
  Shield,
  TrendingUp,
} from 'lucide-react'

export default function SEOPage() {
  const { language, isSwedish, isEnglish } = useLanguage()
  const content = seoContent.seoServices
  const contactInfo = seoContent.contactInfo[language]
  const cta = seoContent.cta[language]

  const hero = content.hero[language]
  const services = content.services[language]
  const process = content.process[language]
  const results = content.results[language]

  // Update page meta
  React.useEffect(() => {
    document.title = isSwedish
      ? 'SEO Byrå Sverige - Ranka Högre, Ansvarsfullt | Eco Web Agency'
      : 'SEO Agency Sweden - Rank Higher, Responsibly | Eco Web Agency'
  }, [language, isSwedish])

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Link
                  to="/services"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                  {isSwedish ? 'Tillbaka till tjänster' : 'Back to services'}
                </Link>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {hero.title}
              </h1>

              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                  <Shield className="w-4 h-4 mr-2" />
                  {isSwedish ? 'Klimatneutral SEO' : 'Climate-Neutral SEO'}
                </span>
              </div>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quote"
                  className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {cta.primary}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg border-2 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200"
                >
                  {cta.contact}
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl p-8 shadow-xl">
                <div className="text-6xl mb-4 text-center">
                  <Search className="w-24 h-24 text-emerald-600 mx-auto" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    #1
                  </div>
                  <p className="text-gray-600 font-medium">
                    {isSwedish ? 'SEO Byrå i Sverige' : 'SEO Agency in Sweden'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {services.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.items.map((service, index) => {
              const icons = [Globe, Target, Zap, BarChart]
              const IconComponent = icons[index] || Search

              return (
                <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                      <IconComponent className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {process.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full">
                    <div className="flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-emerald-600" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {results.title}
            </h2>
            <p className="text-xl text-white/90">
              {results.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <p className="text-white/90 font-medium">
                  {metric.metric}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {isSwedish ? 'Redo att ranka högre i Google?' : 'Ready to rank higher in Google?'}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {isSwedish
              ? 'Boka en kostnadsfri SEO-analys och få en skräddarsydd strategi för er verksamhet.'
              : 'Book a free SEO analysis and get a customized strategy for your business.'
            }
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {isSwedish ? 'Boka kostnadsfri SEO-analys' : 'Book Free SEO Analysis'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}