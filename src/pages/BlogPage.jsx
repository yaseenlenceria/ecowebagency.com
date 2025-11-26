import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react'

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: '10 SEO Strategies That Actually Work in 2024',
      excerpt: 'Search engine algorithms are constantly evolving. Here are the proven SEO strategies that are delivering real results for our clients this year.',
      author: 'Sarah Johnson',
      date: 'Nov 15, 2024',
      readTime: '8 min read',
      category: 'SEO',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      featured: true,
    },
    {
      id: 2,
      title: 'How to Calculate Real ROI from Your Digital Marketing',
      excerpt: 'Stop guessing and start measuring. Learn how to accurately track and calculate the return on investment from your digital marketing efforts.',
      author: 'David Park',
      date: 'Nov 12, 2024',
      readTime: '6 min read',
      category: 'Marketing',
      image: 'bg-gradient-to-br from-green-400 to-green-600',
      featured: true,
    },
    {
      id: 3,
      title: 'The Complete Guide to Website Conversion Optimization',
      excerpt: 'Your website gets traffic, but is it converting? Discover proven techniques to turn more visitors into customers.',
      author: 'Michael Chen',
      date: 'Nov 8, 2024',
      readTime: '10 min read',
      category: 'Web Development',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
      featured: true,
    },
    {
      id: 4,
      title: 'Branding Mistakes That Cost You Customers',
      excerpt: 'Your brand is more than just a logo. Avoid these common branding mistakes that could be hurting your business.',
      author: 'Emma Rodriguez',
      date: 'Nov 5, 2024',
      readTime: '5 min read',
      category: 'Branding',
      image: 'bg-gradient-to-br from-pink-400 to-pink-600',
    },
    {
      id: 5,
      title: 'Google Ads vs. Facebook Ads: Which is Right for You?',
      excerpt: 'Both platforms offer unique advantages. Here\'s how to decide which advertising platform will give you the best ROI.',
      author: 'David Park',
      date: 'Nov 1, 2024',
      readTime: '7 min read',
      category: 'Ads',
      image: 'bg-gradient-to-br from-orange-400 to-orange-600',
    },
    {
      id: 6,
      title: 'Social Media Trends to Watch in 2024',
      excerpt: 'Stay ahead of the curve with these emerging social media trends that are reshaping how brands connect with audiences.',
      author: 'Sarah Johnson',
      date: 'Oct 28, 2024',
      readTime: '6 min read',
      category: 'Social Media',
      image: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
    },
    {
      id: 7,
      title: 'AI Tools That Are Transforming Digital Marketing',
      excerpt: 'Artificial intelligence is no longer optional. Discover the AI tools that are giving businesses a competitive edge.',
      author: 'Michael Chen',
      date: 'Oct 25, 2024',
      readTime: '9 min read',
      category: 'Technology',
      image: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
    },
    {
      id: 8,
      title: 'Why Your Business Needs a Mobile-First Strategy',
      excerpt: 'Over 60% of web traffic comes from mobile devices. Here\'s why mobile-first design is no longer optional.',
      author: 'Emma Rodriguez',
      date: 'Oct 22, 2024',
      readTime: '5 min read',
      category: 'Web Development',
      image: 'bg-gradient-to-br from-teal-400 to-teal-600',
    },
    {
      id: 9,
      title: 'Content Marketing: Quality vs. Quantity',
      excerpt: 'Should you publish more content or better content? The answer might surprise you.',
      author: 'Sarah Johnson',
      date: 'Oct 18, 2024',
      readTime: '7 min read',
      category: 'Content',
      image: 'bg-gradient-to-br from-rose-400 to-rose-600',
    },
  ]

  const categories = ['All', 'SEO', 'Marketing', 'Web Development', 'Branding', 'Ads', 'Social Media', 'Technology', 'Content']

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-eco-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Digital Marketing Insights
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Expert strategies, industry trends, and actionable tips to help your business grow
              online.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-eco-100 hover:text-eco-700 transition-colors whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Featured Articles</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {posts.filter(p => p.featured).map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className={`aspect-video ${post.image} relative`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white text-slate-900 text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-eco-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>

                  {/* Meta */}
                  <div className="flex items-center text-sm text-slate-500 space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="text-eco-600 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300">
                    <span>Read More</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Regular Posts Grid */}
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Recent Posts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.filter(p => !p.featured).map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className={`aspect-video ${post.image} relative`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white text-slate-900 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-eco-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>

                  {/* Meta */}
                  <div className="flex items-center text-xs text-slate-500 space-x-3 mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* CTA */}
                  <button className="text-eco-600 font-semibold text-sm flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-eco-600 to-eco-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get Digital Marketing Tips in Your Inbox
            </h2>
            <p className="text-xl text-eco-100 mb-8">
              Join 5,000+ business owners receiving weekly insights and strategies
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-lg text-slate-900 focus:outline-none focus:ring-4 focus:ring-eco-300"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-eco-100 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
