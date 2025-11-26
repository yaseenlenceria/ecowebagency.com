import React from 'react'
import { Link } from 'react-router-dom'
import { Palette, CheckCircle, ArrowRight, Eye, Heart, Sparkles } from 'lucide-react'

export default function BrandingPage() {
  const features = [
    'Brand Strategy & Positioning',
    'Logo Design & Identity Systems',
    'Brand Guidelines & Style Guides',
    'Marketing Collateral Design',
    'Social Media Graphics & Templates',
    'Packaging Design',
    'Business Cards & Stationery',
    'Brand Refresh & Redesign',
  ]

  const benefits = [
    {
      icon: Eye,
      title: 'Stand Out',
      description: 'Differentiate from competitors with unique branding',
    },
    {
      icon: Heart,
      title: 'Build Trust',
      description: 'Professional design builds credibility',
    },
    {
      icon: Sparkles,
      title: 'Memorable',
      description: 'Create lasting impressions that drive recall',
    },
  ]

  return (
    <div className="bg-stone-50">
      <section className="relative bg-gradient-to-br from-pink-600 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white mb-6">
                <Palette className="w-8 h-8" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Branding & Graphic Design
              </h1>
              <p className="text-xl text-pink-100 mb-8 leading-relaxed">
                Stand out with compelling visual identity. Professional branding that captures your
                unique story and resonates with your target audience.
              </p>
              <Link
                to="/quote"
                className="inline-block px-8 py-4 bg-white text-pink-700 rounded-lg font-semibold hover:bg-pink-50 transition-all duration-200 shadow-xl"
              >
                Start Your Brand Journey
              </Link>
            </div>
            <div>
              <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl shadow-2xl aspect-square" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-pink-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-pink-600 mb-2">98%</div>
              <div className="text-slate-700">Client Satisfaction</div>
            </div>
            <div className="text-center bg-pink-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-pink-600 mb-2">150+</div>
              <div className="text-slate-700">Brands Created</div>
            </div>
            <div className="text-center bg-pink-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-pink-600 mb-2">95%</div>
              <div className="text-slate-700">Brand Recognition</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              Branding Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-md">
                  <CheckCircle className="w-6 h-6 text-pink-600 flex-shrink-0 mt-0.5" />
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
            Why Branding Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-pink-600 to-pink-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build a Memorable Brand?
            </h2>
            <p className="text-xl text-pink-100 mb-10 leading-relaxed">
              Let's create a brand identity that captures your unique story and drives business growth.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-pink-700 rounded-lg text-lg font-semibold hover:bg-pink-50 transition-all duration-200 shadow-xl"
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
