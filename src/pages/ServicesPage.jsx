import React from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  Code,
  Palette,
  TrendingUp,
  Share2,
  Cpu,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: 'SEO & Organic Visibility',
      shortDesc: 'Dominate search rankings with data-driven strategies',
      description:
        'Get found by your ideal customers at the exact moment they\'re searching for what you offer. Our comprehensive SEO services include keyword research, on-page optimization, technical SEO, link building, and content strategy.',
      features: [
        'Keyword Research & Strategy',
        'Technical SEO Audits',
        'On-Page & Off-Page Optimization',
        'Local SEO',
        'Content Strategy',
        'Monthly Reporting & Analytics',
      ],
      results: '+520% avg. organic traffic increase',
      link: '/services/seo',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      icon: Code,
      title: 'Web Development & Custom Websites',
      shortDesc: 'High-performance websites that convert visitors into customers',
      description:
        'From simple landing pages to complex web applications, we build fast, secure, and beautiful websites using modern technologies. Every site is optimized for conversions, mobile-responsive, and built to scale with your business.',
      features: [
        'Custom Website Design',
        'E-Commerce Development',
        'Web Applications',
        'CMS Integration',
        'API Development',
        'Maintenance & Support',
      ],
      results: '+350% avg. conversion rate improvement',
      link: '/services/web-development',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
    {
      icon: Palette,
      title: 'Branding & Graphic Design',
      shortDesc: 'Visual identity that makes you unforgettable',
      description:
        'Stand out in a crowded market with professional branding and stunning graphic design. We create cohesive visual identities that capture your unique story and resonate with your target audience.',
      features: [
        'Brand Strategy & Positioning',
        'Logo Design',
        'Brand Guidelines',
        'Marketing Collateral',
        'Social Media Graphics',
        'Packaging Design',
      ],
      results: '98% client satisfaction rate',
      link: '/services/branding',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
    },
    {
      icon: TrendingUp,
      title: 'Ads & Performance Marketing',
      shortDesc: 'ROI-focused campaigns that drive real business growth',
      description:
        'Turn ad spend into profit with data-driven performance marketing. We manage campaigns across Google Ads, Meta (Facebook/Instagram), LinkedIn, and more—optimizing every dollar for maximum return on investment.',
      features: [
        'Google Ads Management',
        'Meta Ads (Facebook & Instagram)',
        'LinkedIn Advertising',
        'Remarketing Campaigns',
        'Landing Page Optimization',
        'Conversion Rate Optimization',
      ],
      results: '8.5x avg. return on ad spend (ROAS)',
      link: '/services/ads',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      shortDesc: 'Build engaged communities that drive business results',
      description:
        'Social media isn\'t just about likes—it\'s about building authentic relationships with your audience. We create and execute social strategies that increase brand awareness, drive engagement, and convert followers into customers.',
      features: [
        'Social Media Strategy',
        'Content Creation & Curation',
        'Community Management',
        'Influencer Partnerships',
        'Social Media Advertising',
        'Analytics & Reporting',
      ],
      results: '250K+ followers generated for clients',
      link: '/services/social-media',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
    },
    {
      icon: Cpu,
      title: 'Custom Software & AI Tools',
      shortDesc: 'Intelligent automation and custom solutions for complex problems',
      description:
        'Streamline operations and gain competitive advantages with custom software solutions. From CRM systems to AI-powered automation tools, we build software that solves your unique business challenges.',
      features: [
        'Custom Software Development',
        'AI & Machine Learning Integration',
        'Workflow Automation',
        'API Integrations',
        'Data Analytics Platforms',
        'SaaS Development',
      ],
      results: '10K+ active users on client platforms',
      link: '/services/custom-software',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
    },
  ]

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-eco-600 to-eco-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.3),transparent)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-eco-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Comprehensive Digital Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Services That Drive Real Results
            </h1>
            <p className="text-xl text-eco-100 leading-relaxed max-w-3xl mx-auto">
              From SEO to custom software, we offer a complete suite of digital services designed
              to help your business grow, compete, and dominate your market.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h2>

                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className={`w-5 h-5 ${service.textColor} flex-shrink-0 mt-0.5`} />
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Results Badge */}
                    <div className={`inline-flex items-center space-x-2 ${service.bgColor} ${service.textColor} px-4 py-2 rounded-lg font-semibold text-sm mb-6`}>
                      <TrendingUp className="w-4 h-4" />
                      <span>{service.results}</span>
                    </div>

                    {/* CTA Button */}
                    <div>
                      <Link
                        to={service.link}
                        className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className={`aspect-square bg-gradient-to-br ${service.color} rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300`} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-slate-600">
              A systematic approach that delivers consistent results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand your business, goals, and challenges' },
              { step: '02', title: 'Strategy', desc: 'Develop a customized plan for success' },
              { step: '03', title: 'Execution', desc: 'Implement with precision and expertise' },
              { step: '04', title: 'Optimization', desc: 'Continuous improvement and scaling' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-eco-200 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 to-eco-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Let's Build Your Growth Strategy
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Schedule a free consultation to discuss which services are right for your business
              and how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/quote"
                className="w-full sm:w-auto px-8 py-4 bg-eco-600 text-white rounded-lg text-lg font-semibold hover:bg-eco-700 transition-all duration-200 shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Get Your Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-200 border-2 border-white/20"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
