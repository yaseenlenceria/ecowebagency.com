import React from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  Code,
  Palette,
  TrendingUp,
  Award,
  Users,
  Target,
  Leaf,
  BarChart,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

export default function HomePage() {
  // What We Do services
  const services = [
    {
      icon: Search,
      title: 'SEO & Organic Visibility',
      description:
        'Dominate search rankings with data-driven SEO strategies. We help your business get found by the right customers at the right time.',
      link: '/services/seo',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Code,
      title: 'Web Development & Custom Websites',
      description:
        'Beautiful, fast, and conversion-optimized websites built with modern technologies. From landing pages to complex web applications.',
      link: '/services/web-development',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: Palette,
      title: 'Branding & Graphic Design',
      description:
        'Stand out with compelling visual identity. Professional branding, logo design, and graphic assets that capture your unique story.',
      link: '/services/branding',
      color: 'bg-pink-50 text-pink-600',
    },
    {
      icon: TrendingUp,
      title: 'Ads & Performance Marketing',
      description:
        'ROI-focused advertising campaigns across Google, Meta, and LinkedIn. Every dollar invested is tracked and optimized for maximum return.',
      link: '/services/ads',
      color: 'bg-orange-50 text-orange-600',
    },
  ]

  // Why Choose Us values
  const values = [
    {
      icon: Award,
      title: '7+ Years of Excellence',
      description: 'Proven track record delivering results for businesses of all sizes.',
    },
    {
      icon: BarChart,
      title: 'Transparent Reporting',
      description: 'Real-time dashboards and monthly reports so you always know where you stand.',
    },
    {
      icon: Users,
      title: 'In-House Expert Team',
      description: 'No outsourcing. Work directly with our skilled professionals.',
    },
    {
      icon: Target,
      title: 'Long-Term Strategy',
      description: 'We focus on sustainable growth, not quick fixes.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Practices',
      description: 'Carbon-neutral hosting and sustainable digital solutions.',
    },
  ]

  // Portfolio preview items
  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Revolution',
      category: 'Web Development',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      results: '+350% Revenue Growth',
    },
    {
      id: 2,
      title: 'Brand Transformation',
      category: 'Branding',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
      results: 'Complete Rebrand',
    },
    {
      id: 3,
      title: 'SEO Domination',
      category: 'SEO',
      image: 'bg-gradient-to-br from-green-400 to-green-600',
      results: '+520% Organic Traffic',
    },
    {
      id: 4,
      title: 'SaaS Launch',
      category: 'Custom Software',
      image: 'bg-gradient-to-br from-orange-400 to-orange-600',
      results: '10K+ Active Users',
    },
    {
      id: 5,
      title: 'Social Media Success',
      category: 'Social Media',
      image: 'bg-gradient-to-br from-pink-400 to-pink-600',
      results: '250K+ Followers',
    },
    {
      id: 6,
      title: 'Performance Ads',
      category: 'Ads',
      image: 'bg-gradient-to-br from-red-400 to-red-600',
      results: '8.5x ROAS',
    },
  ]

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-eco-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-eco-100 text-eco-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
              <Sparkles className="w-4 h-4" />
              <span>Award-Winning Digital Agency</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight animate-in fade-in slide-in-from-top-6 duration-700 delay-100">
              Sustainable Digital Growth for{' '}
              <span className="text-eco-600 relative">
                Modern Businesses
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-eco-300"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q25,0 50,5 T100,5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-top-8 duration-700 delay-200">
              We help ambitious companies dominate their markets with premium web development,
              data-driven SEO, and high-performance marketing strategies that deliver real,
              measurable results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-in fade-in slide-in-from-top-10 duration-700 delay-300">
              <Link
                to="/quote"
                className="w-full sm:w-auto px-8 py-4 bg-eco-600 text-white rounded-lg text-lg font-semibold hover:bg-eco-700 transform hover:scale-105 transition-all duration-200 shadow-xl shadow-eco-600/30 hover:shadow-eco-700/40 flex items-center justify-center space-x-2"
              >
                <span>Get Your Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 rounded-lg text-lg font-semibold hover:bg-slate-50 transition-all duration-200 shadow-lg border border-slate-200 flex items-center justify-center space-x-2"
              >
                <span>View Our Work</span>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-12 pt-8 border-t border-slate-200 animate-in fade-in duration-700 delay-500">
              <p className="text-sm text-slate-500 mb-4">Trusted by leading brands</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-slate-400 font-bold text-xl">BRAND</div>
                <div className="text-slate-400 font-bold text-xl">COMPANY</div>
                <div className="text-slate-400 font-bold text-xl">BUSINESS</div>
                <div className="text-slate-400 font-bold text-xl">ENTERPRISE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive digital solutions designed to accelerate your business growth
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-eco-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-eco-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center text-eco-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>
              )
            })}
          </div>

          {/* View All Services CTA */}
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-200 shadow-lg"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-eco-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Why Choose Eco Web Agency
            </h2>
            <p className="text-lg text-slate-600">
              We're not just another agency. We're your long-term growth partner.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  <div className="w-12 h-12 rounded-lg bg-eco-100 text-eco-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              )
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-600 mb-2">150+</div>
              <div className="text-slate-600 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-600 mb-2">7+</div>
              <div className="text-slate-600 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-600 mb-2">500+</div>
              <div className="text-slate-600 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-600 mb-2">98%</div>
              <div className="text-slate-600 text-sm">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-lg text-slate-600">
              Real projects. Real results. See what we've achieved for our clients.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Link
                key={item.id}
                to="/portfolio"
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`aspect-[4/3] ${item.image} relative`}>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <div className="text-sm font-medium text-eco-300 mb-2">{item.category}</div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-eco-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-eco-400">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">{item.results}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Portfolio CTA */}
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-eco-600 text-white rounded-lg font-semibold hover:bg-eco-700 transition-all duration-200 shadow-lg shadow-eco-600/30"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-eco-600 to-eco-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.3))]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-eco-100 mb-10 leading-relaxed">
              Let's discuss how we can help your business achieve sustainable growth and dominate
              your market.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/quote"
                className="w-full sm:w-auto px-8 py-4 bg-white text-eco-700 rounded-lg text-lg font-semibold hover:bg-eco-50 transition-all duration-200 shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Get Your Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-eco-700 text-white rounded-lg text-lg font-semibold hover:bg-eco-800 transition-all duration-200 border-2 border-white/20 flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
