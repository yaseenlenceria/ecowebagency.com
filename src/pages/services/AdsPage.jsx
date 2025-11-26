import React from 'react'
import { Link } from 'react-router-dom'
import { TrendingUp, CheckCircle, ArrowRight, DollarSign, Target, LineChart } from 'lucide-react'

export default function AdsPage() {
  const features = [
    'Google Ads Management (Search, Display, Shopping)',
    'Meta Ads (Facebook & Instagram)',
    'LinkedIn Advertising for B2B',
    'Remarketing & Retargeting Campaigns',
    'Landing Page Optimization',
    'A/B Testing & Conversion Rate Optimization',
    'Audience Research & Targeting',
    'Real-Time Analytics & Reporting',
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: 'High ROI',
      description: 'Average 8.5x return on ad spend',
    },
    {
      icon: Target,
      title: 'Precise Targeting',
      description: 'Reach your ideal customers at the right time',
    },
    {
      icon: LineChart,
      title: 'Data-Driven',
      description: 'Every decision backed by analytics',
    },
  ]

  return (
    <div className="bg-stone-50">
      <section className="relative bg-gradient-to-br from-orange-600 to-orange-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ads & Performance Marketing
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                ROI-focused advertising campaigns that drive real business growth. We optimize every
                dollar for maximum return on investment.
              </p>
              <Link
                to="/quote"
                className="inline-block px-8 py-4 bg-white text-orange-700 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 shadow-xl"
              >
                Get Your Free Strategy Session
              </Link>
            </div>
            <div>
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl shadow-2xl aspect-square" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-orange-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-orange-600 mb-2">8.5x</div>
              <div className="text-slate-700">Average ROAS</div>
            </div>
            <div className="text-center bg-orange-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-orange-600 mb-2">$50M+</div>
              <div className="text-slate-700">Ad Spend Managed</div>
            </div>
            <div className="text-center bg-orange-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-orange-600 mb-2">45%</div>
              <div className="text-slate-700">Lower CPA</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              Performance Marketing Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-md">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
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
            Why Choose Our Ad Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Scale Your Business with Ads?
            </h2>
            <p className="text-xl text-orange-100 mb-10 leading-relaxed">
              Let's create a performance marketing strategy that drives profitable growth.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-orange-700 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-all duration-200 shadow-xl"
            >
              <span>Get Your Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
