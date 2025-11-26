import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ExternalLink, ArrowRight, Filter } from 'lucide-react'

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', 'Web Development', 'SEO', 'Branding', 'Ads', 'Social Media', 'Custom Software']

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform Redesign',
      category: 'Web Development',
      client: 'Fashion Retailer',
      description: 'Complete redesign and development of a high-traffic e-commerce platform with 50K+ products.',
      results: ['+350% Revenue Growth', '+180% Conversion Rate', '2.5s Page Load Time'],
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      featured: true,
    },
    {
      id: 2,
      title: 'National SEO Campaign',
      category: 'SEO',
      client: 'Legal Services Firm',
      description: 'Comprehensive SEO strategy targeting competitive legal industry keywords across 50+ cities.',
      results: ['+520% Organic Traffic', '#1 Rankings for 80+ Keywords', '+300% Lead Generation'],
      image: 'bg-gradient-to-br from-green-400 to-green-600',
      featured: true,
    },
    {
      id: 3,
      title: 'Complete Brand Identity',
      category: 'Branding',
      client: 'Tech Startup',
      description: 'Full brand development including naming, logo design, visual identity, and brand guidelines.',
      results: ['Award-Winning Design', '95% Brand Recognition', 'Series A Funding Success'],
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
      featured: true,
    },
    {
      id: 4,
      title: 'Google Ads Performance Campaign',
      category: 'Ads',
      client: 'B2B SaaS Company',
      description: 'Multi-channel performance marketing campaign across Google Ads, LinkedIn, and remarketing.',
      results: ['8.5x ROAS', '$2.5M Revenue Generated', '45% Lower CPA'],
      image: 'bg-gradient-to-br from-orange-400 to-orange-600',
    },
    {
      id: 5,
      title: 'Social Media Growth Strategy',
      category: 'Social Media',
      client: 'Lifestyle Brand',
      description: 'Organic and paid social media strategy to build brand awareness and community engagement.',
      results: ['250K+ Followers', '+800% Engagement Rate', '50K Monthly Reach'],
      image: 'bg-gradient-to-br from-pink-400 to-pink-600',
    },
    {
      id: 6,
      title: 'Custom CRM & Automation',
      category: 'Custom Software',
      client: 'Financial Services',
      description: 'Custom-built CRM system with AI-powered lead scoring and workflow automation.',
      results: ['10K+ Active Users', '60% Time Savings', '$500K Cost Reduction'],
      image: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
    },
    {
      id: 7,
      title: 'Local Business Website',
      category: 'Web Development',
      client: 'Restaurant Chain',
      description: 'Multi-location restaurant website with online ordering and reservation system.',
      results: ['+200% Online Orders', '4.9/5 User Rating', '95% Mobile Traffic'],
      image: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
    },
    {
      id: 8,
      title: 'Content Marketing & SEO',
      category: 'SEO',
      client: 'Healthcare Provider',
      description: 'Content-driven SEO strategy targeting healthcare information keywords.',
      results: ['+450% Organic Visitors', '100+ Featured Snippets', '+220% Patient Inquiries'],
      image: 'bg-gradient-to-br from-teal-400 to-teal-600',
    },
    {
      id: 9,
      title: 'Rebranding Campaign',
      category: 'Branding',
      client: 'Established Business',
      description: 'Complete rebranding including logo redesign, messaging, and market repositioning.',
      results: ['150% Brand Awareness', '+85% Market Share', 'Industry Recognition'],
      image: 'bg-gradient-to-br from-rose-400 to-rose-600',
    },
  ]

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-eco-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Portfolio & Case Studies
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Real projects. Real results. See how we've helped businesses achieve extraordinary
              growth through strategic digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-600 mb-2">150+</div>
              <div className="text-slate-600">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-600 mb-2">$50M+</div>
              <div className="text-slate-600">Client Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-600 mb-2">98%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-600 mb-2">7+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-2">
            <Filter className="w-5 h-5 text-slate-500 mr-2" />
            <span className="text-sm text-slate-600 font-medium">Filter by Service</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-eco-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Image */}
                <div className={`aspect-video ${project.image} relative`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-white/90 text-slate-900 text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm text-eco-600 font-semibold mb-2">{project.client}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-eco-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                  {/* Results */}
                  <div className="space-y-2 mb-6">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-eco-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-slate-700">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="text-eco-600 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300">
                    <span>View Case Study</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-eco-600 to-eco-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-eco-100 mb-10 leading-relaxed">
              Let's discuss how we can help your business achieve similar results and exceed your
              growth goals.
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
                className="w-full sm:w-auto px-8 py-4 bg-eco-700 text-white rounded-lg text-lg font-semibold hover:bg-eco-800 transition-all duration-200 border-2 border-white/20"
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
