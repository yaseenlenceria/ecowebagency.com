import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { Menu, X, ChevronDown, Leaf } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { language, isSwedish } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on link
  const closeMobileMenu = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }

  // Services menu items
  const servicesItems = isSwedish
    ? [
        { name: 'SEO', path: '/services/seo' },
        { name: 'Webbutveckling', path: '/services/web-development' },
        { name: 'Varumärkesdesign', path: '/services/branding' },
        { name: 'Performance Marketing', path: '/services/ads' },
        { name: 'Social Media Management', path: '/services/social-media' },
        { name: 'Custom Software / AI Tools', path: '/services/custom-software' },
      ]
    : [
        { name: 'SEO', path: '/services/seo' },
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'Branding & Graphic Design', path: '/services/branding' },
        { name: 'Ads & Performance Marketing', path: '/services/ads' },
        { name: 'Social Media Management', path: '/services/social-media' },
        { name: 'Custom Software / AI Tools', path: '/services/custom-software' },
      ]

  // Main navigation items
  const navItems = isSwedish
    ? [
        { name: 'Tjänster', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Om oss', path: '/about' },
        { name: 'Kontakt', path: '/contact' },
      ]
    : [
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
      ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={closeMobileMenu}
          >
            <div className="bg-eco-600 p-2 rounded-lg group-hover:bg-eco-700 transition-colors duration-300">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-slate-800 group-hover:text-eco-700 transition-colors duration-300">
                Eco Web Agency
              </h1>
              <p className="text-xs text-slate-600 leading-tight">
                {isSwedish ? 'Hållbar Digital Tillväxt för Moderna Företag' : 'Sustainable Digital Growth for Modern Businesses'}
              </p>
            </div>
            <div className="block sm:hidden">
              <h1 className="text-lg font-bold text-slate-800 group-hover:text-eco-700 transition-colors duration-300">
                Eco Web Agency
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-eco-700 bg-eco-50'
                    : 'text-slate-700 hover:text-eco-700 hover:bg-eco-50'
                }`
              }
            >
              {isSwedish ? 'Hem' : 'Home'}
            </NavLink>

            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-eco-700 bg-eco-50'
                      : 'text-slate-700 hover:text-eco-700 hover:bg-eco-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                    isActive
                      ? 'text-eco-700 bg-eco-50'
                      : 'text-slate-700 hover:text-eco-700 hover:bg-eco-50'
                  }`
                }
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </NavLink>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-eco-50 hover:text-eco-700 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-eco-700 bg-eco-50'
                    : 'text-slate-700 hover:text-eco-700 hover:bg-eco-50'
                }`
              }
            >
              Portfolio
            </NavLink>

            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-eco-700 bg-eco-50'
                    : 'text-slate-700 hover:text-eco-700 hover:bg-eco-50'
                }`
              }
            >
              Pricing
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-eco-700 bg-eco-50'
                    : 'text-slate-700 hover:text-eco-700 hover:bg-eco-50'
                }`
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/calculators"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-eco-700 bg-eco-50'
                    : 'text-slate-700 hover:text-eco-700 hover:bg-eco-50'
                }`
              }
            >
              Eco Calculators
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-eco-700 bg-eco-50'
                    : 'text-slate-700 hover:text-eco-700 hover:bg-eco-50'
                }`
              }
            >
              Contact
            </NavLink>

            {/* CTA Button */}
            <LanguageSwitcher />
            <Link
              to="/quote"
              className="ml-4 px-6 py-2.5 bg-eco-600 text-white rounded-lg text-sm font-semibold hover:bg-eco-700 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-eco-600/30 hover:shadow-eco-700/40"
            >
              {isSwedish ? 'Be om offert' : 'Request a Quote'}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-eco-50 hover:text-eco-700 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-6 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-eco-700 bg-eco-50'
                        : 'text-slate-700 hover:text-eco-700 hover:bg-eco-50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Mobile Services Section */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:text-eco-700 hover:bg-eco-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <span>{isSwedish ? 'Tjänster' : 'Services'}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={closeMobileMenu}
                        className="block px-4 py-2 rounded-md text-sm text-slate-600 hover:text-eco-700 hover:bg-eco-50 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/portfolio"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-eco-700 bg-eco-50'
                      : 'text-slate-700 hover:text-eco-700 hover:bg-eco-50'
                  }`
                }
              >
                Portfolio
              </NavLink>

              <NavLink
                to="/pricing"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-eco-700 bg-eco-50'
                      : 'text-slate-700 hover:text-eco-700 hover:bg-eco-50'
                  }`
                }
              >
                Pricing
              </NavLink>

              <NavLink
                to="/blog"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-eco-700 bg-eco-50'
                      : 'text-slate-700 hover:text-eco-700 hover:bg-eco-50'
                  }`
                }
              >
                Blog
              </NavLink>

              <NavLink
                to="/calculators"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-eco-700 bg-eco-50'
                      : 'text-slate-700 hover:text-eco-700 hover:bg-eco-50'
                  }`
                }
              >
                Eco Calculators
              </NavLink>

              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-eco-700 bg-eco-50'
                      : 'text-slate-700 hover:text-eco-700 hover:bg-eco-50'
                  }`
                }
              >
                Contact
              </NavLink>

              {/* Mobile CTA Button */}
              <Link
                to="/quote"
                onClick={closeMobileMenu}
                className="mx-4 mt-4 px-6 py-3 bg-eco-600 text-white rounded-lg text-base font-semibold hover:bg-eco-700 transition-colors duration-200 shadow-lg shadow-eco-600/30 text-center"
              >
                {isSwedish ? 'Be om offert' : 'Request a Quote'}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
