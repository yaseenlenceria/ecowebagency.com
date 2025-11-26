import React from 'react'
import { Link } from 'react-router-dom'
import { Code, CheckCircle, ArrowRight, Zap, Shield, Smartphone } from 'lucide-react'

export default function WebDevelopmentPage() {
  const features = [
    'Custom Website Design & Development',
    'E-Commerce Solutions (Shopify, WooCommerce)',
    'Web Application Development',
    'Content Management Systems (WordPress, Custom CMS)',
    'API Development & Integration',
    'Mobile-Responsive Design',
    'Performance Optimization',
    'Ongoing Maintenance & Support',
  ]

  const benefits = [
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
                Web Development & Custom Websites
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Beautiful, fast, and conversion-optimized websites built with modern technologies.
                From simple landing pages to complex web applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quote"
                  className="px-8 py-4 bg-white text-purple-700 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200 shadow-xl text-center"
                >
                  Get Your Free Quote
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition-all duration-200 border-2 border-white/20 text-center"
                >
                  View Our Work
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
              Proven Results
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-purple-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-purple-600 mb-2">+350%</div>
              <div className="text-slate-700">Conversion Rate Increase</div>
            </div>
            <div className="text-center bg-purple-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-purple-600 mb-2">2.5s</div>
              <div className="text-slate-700">Average Page Load Time</div>
            </div>
            <div className="text-center bg-purple-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-slate-700">Websites Delivered</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              What's Included
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
            Why Choose Our Web Development Services
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
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-xl text-purple-100 mb-10 leading-relaxed">
              Let's create a website that not only looks amazing but drives real business results.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-purple-700 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-all duration-200 shadow-xl"
            >
              <span>Get Your Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
