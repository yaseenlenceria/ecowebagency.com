import React from 'react'
import { Link } from 'react-router-dom'
import { Share2, CheckCircle, ArrowRight, Users, MessageCircle, TrendingUp } from 'lucide-react'

export default function SocialMediaPage() {
  const features = [
    'Social Media Strategy Development',
    'Content Creation & Curation',
    'Community Management & Engagement',
    'Influencer Partnership Management',
    'Social Media Advertising',
    'Analytics & Performance Reporting',
    'Content Calendar & Scheduling',
    'Brand Reputation Management',
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Build Community',
      description: 'Grow engaged followers who love your brand',
    },
    {
      icon: MessageCircle,
      title: 'Engagement',
      description: 'Create conversations that drive loyalty',
    },
    {
      icon: TrendingUp,
      title: 'Drive Results',
      description: 'Convert followers into customers',
    },
  ]

  return (
    <div className="bg-stone-50">
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white mb-6">
                <Share2 className="w-8 h-8" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Social Media Management
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Build engaged communities that drive business results. Strategic social media
                management that increases brand awareness and converts followers into customers.
              </p>
              <Link
                to="/quote"
                className="inline-block px-8 py-4 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200 shadow-xl"
              >
                Start Growing Your Community
              </Link>
            </div>
            <div>
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-2xl aspect-square" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-green-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-green-600 mb-2">250K+</div>
              <div className="text-slate-700">Followers Generated</div>
            </div>
            <div className="text-center bg-green-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-green-600 mb-2">+800%</div>
              <div className="text-slate-700">Engagement Increase</div>
            </div>
            <div className="text-center bg-green-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-green-600 mb-2">50K</div>
              <div className="text-slate-700">Monthly Reach</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              Social Media Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-md">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
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
            Why Social Media Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Your Social Presence?
            </h2>
            <p className="text-xl text-green-100 mb-10 leading-relaxed">
              Let's create a social media strategy that builds community and drives business growth.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-green-700 rounded-lg text-lg font-semibold hover:bg-green-50 transition-all duration-200 shadow-xl"
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
