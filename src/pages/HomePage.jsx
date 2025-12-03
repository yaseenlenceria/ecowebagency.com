import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { seoContent } from '../data/seoContent'
import {
  Search,
  Code,
  Palette,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Leaf,
  Target,
  BarChart,
  Globe,
  Award,
  Users,
} from 'lucide-react'

export default function HomePage() {
  const { language, isSwedish, isEnglish } = useLanguage()
  const content = seoContent.homepage

  // Icon mapping for services
  const serviceIcons = {
    'SEO Byrå Sverige': Search,
    'SEO Agency Sweden': Search,
    'Webbdesign Företag': Code,
    'Web Design Company': Code,
    'Performance Marketing': TrendingUp,
    'Performance Marketing': TrendingUp,
    'Varumärkesdesign': Palette,
    'Brand Design': Palette,
  }

  // Icon mapping for why choose us section
  const valueIcons = {
    '🌱': Leaf,
    '🎯': Target,
    '📊': BarChart,
    '🤝': Users,
  }

  const hero = content.hero[language]
  const services = content.services[language]
  const whyChooseUs = content.whyChooseUs[language]
  const stats = content.stats[language]
  const cta = seoContent.cta[language]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              {hero.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            {hero.title}
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {cta.primary}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg border-2 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200"
            >
              {cta.secondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.items.map((service, index) => {
              const IconComponent = serviceIcons[service.title] || Globe
              return (
                <Link
                  key={index}
                  to="/services"
                  className="group p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                      <IconComponent className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
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
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {whyChooseUs.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {whyChooseUs.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.reasons.map((reason, index) => {
              const IconComponent = valueIcons[reason.icon] || Award
              return (
                <div key={index} className="text-center group">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-2">{reason.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {stats.title}
            </h2>
            <p className="text-xl text-gray-600">
              {stats.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-emerald-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {cta.sectionTitle}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {cta.sectionDescription}
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {cta.primary}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="text-gray-600">
              <Award className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
              <span className="text-sm font-medium">
                {seoContent.trustSignals[language].experience}
              </span>
            </div>
            <div className="text-gray-600">
              <CheckCircle className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
              <span className="text-sm font-medium">
                {seoContent.trustSignals[language].certified}
              </span>
            </div>
            <div className="text-gray-600">
              <Users className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
              <span className="text-sm font-medium">
                {seoContent.trustSignals[language].satisfaction}
              </span>
            </div>
            <div className="text-gray-600">
              <Globe className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
              <span className="text-sm font-medium">
                {seoContent.trustSignals[language].local}
              </span>
            </div>
          </div>
        </div>
      </section>

      </>
  )
}