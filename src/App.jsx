import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ScrollToTop from './components/ScrollToTop'

// Import pages (will be created)
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import PricingPage from './pages/PricingPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import QuotePage from './pages/QuotePage'

// Service detail pages
import SEOPage from './pages/services/SEOPage'
import WebDevelopmentPage from './pages/services/WebDevelopmentPage'
import BrandingPage from './pages/services/BrandingPage'
import AdsPage from './pages/services/AdsPage'
import SocialMediaPage from './pages/services/SocialMediaPage'
import CustomSoftwarePage from './pages/services/CustomSoftwarePage'

// Legal pages for footer links
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-stone-50 selection:bg-eco-200 selection:text-eco-900">
      <ScrollToTop />
      <MainLayout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<QuotePage />} />

          {/* Service Detail Pages */}
          <Route path="/services/seo" element={<SEOPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/branding" element={<BrandingPage />} />
          <Route path="/services/ads" element={<AdsPage />} />
          <Route path="/services/social-media" element={<SocialMediaPage />} />
          <Route path="/services/custom-software" element={<CustomSoftwarePage />} />

          {/* Legal Pages */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App
