import React from 'react'
import { Link } from 'react-router-dom'
import { Search, CheckCircle, ArrowRight, TrendingUp, Target, BarChart } from 'lucide-react'

export default function SEOPage() {
  const features = [
    'Comprehensive Keyword Research & Strategy',
    'Technical SEO Audits & Optimization',
    'On-Page SEO (Content, Meta Tags, Schema)',
    'Off-Page SEO & Link Building',
    'Local SEO & Google Business Profile',
    'Content Strategy & Creation',
    'Competitor Analysis',
    'Monthly Reporting & Analytics',
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Organic Traffic',
      description: 'Get more qualified visitors from search engines',
    },
    {
      icon: Target,
      title: 'Better Rankings',
      description: 'Dominate page 1 for your target keywords',
    },
    {
      icon: BarChart,
      title: 'Higher ROI',
      description: 'Lower cost per acquisition than paid ads',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'SEO Audit',
      description: 'Comprehensive analysis of your current SEO performance and opportunities',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Custom SEO roadmap tailored to your business goals and market',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute technical fixes, content optimization, and link building',
    },
    {
      step: '04',
      title: 'Monitor & Optimize',
      description: 'Continuous tracking, reporting, and refinement for maximum results',
    },
  ]

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white mb-6">
                <Search className="w-8 h-8" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                SEO & Organic Visibility Services
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Dominate search rankings and get found by customers actively searching for what you
                offer. Our data-driven SEO strategies deliver real, measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quote"
                  className="px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-xl text-center"
                >
                  Get Your Free SEO Audit
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all duration-200 border-2 border-white/20 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl aspect-square" />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-xl text-slate-600">Average results for our SEO clients:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-blue-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-blue-600 mb-2">+520%</div>
              <div className="text-slate-700">Organic Traffic Increase</div>
            </div>
            <div className="text-center bg-blue-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-blue-600 mb-2">Top 3</div>
              <div className="text-slate-700">Average Keyword Rankings</div>
            </div>
            <div className="text-center bg-blue-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-blue-600 mb-2">+300%</div>
              <div className="text-slate-700">Lead Generation Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              What's Included in Our SEO Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-md">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Why SEO Matters for Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our SEO Process
            </h2>
            <div className="space-y-8">
              {process.map((item, index) => (
                <div key={index} className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-md">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Dominate Search Rankings?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Get a free SEO audit and discover opportunities to improve your search visibility.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/quote"
                className="w-full sm:w-auto px-8 py-4 bg-white text-blue-700 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Get Your Free SEO Audit</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-blue-700 text-white rounded-lg text-lg font-semibold hover:bg-blue-800 transition-all duration-200 border-2 border-white/20"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
