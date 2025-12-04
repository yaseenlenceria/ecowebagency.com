import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import MainLayout from './layouts/MainLayout'
import ScrollToTop from './components/ScrollToTop'
import SEOHead from './components/SEOHead'

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

// Calculator pages
import CarbonFootprintCalculator from './pages/calculators/CarbonFootprintCalculator'
import ShippingEmissionsCalculator from './pages/calculators/ShippingEmissionsCalculator'
import SolarEnergyCalculator from './pages/calculators/SolarEnergyCalculator'
import PlasticWasteCalculator from './pages/calculators/PlasticWasteCalculator'
import WaterUsageCalculator from './pages/calculators/WaterUsageCalculator'
import HouseholdEnergyCalculator from './pages/calculators/HouseholdEnergyCalculator'
import ElectricVehicleCalculator from './pages/calculators/ElectricVehicleCalculator'
import GreenBuildingCalculator from './pages/calculators/GreenBuildingCalculator'
import TreeOffsetCalculator from './pages/calculators/TreeOffsetCalculator'
import SustainablePackagingCalculator from './pages/calculators/SustainablePackagingCalculator'
import WasteRecyclingCalculator from './pages/calculators/WasteRecyclingCalculator'
import GreenCommuteCalculator from './pages/calculators/GreenCommuteCalculator'
import HomeInsulationCalculator from './pages/calculators/HomeInsulationCalculator'
import CarbonNeutralBusinessCalculator from './pages/calculators/CarbonNeutralBusinessCalculator'
import FoodCarbonCalculator from './pages/calculators/FoodCarbonCalculator'
import ApplianceEfficiencyCalculator from './pages/calculators/ApplianceEfficiencyCalculator'
import RainwaterHarvestingCalculator from './pages/calculators/RainwaterHarvestingCalculator'
import CompostingImpactCalculator from './pages/calculators/CompostingImpactCalculator'
import AirQualityCalculator from './pages/calculators/AirQualityCalculator'
import EnergyStarCalculator from './pages/calculators/EnergyStarCalculator'
import CalculatorsHub from './pages/CalculatorsHub'

function App() {
  return (
    <LanguageProvider>
      <div className="font-sans antialiased text-slate-800 bg-stone-50 selection:bg-eco-200 selection:text-eco-900">
        <ScrollToTop />
        <SEOHead />
        <MainLayout>
        <Routes>
          {/* Main Pages with language prefixes */}
          <Route path="/:lang(sv)?" element={<HomePage />} />
          <Route path="/:lang(sv)?/about" element={<AboutPage />} />
          <Route path="/:lang(sv)?/om-oss" element={<AboutPage />} />
          <Route path="/:lang(sv)?/services" element={<ServicesPage />} />
          <Route path="/:lang(sv)?/tjanster" element={<ServicesPage />} />
          <Route path="/:lang(sv)?/portfolio" element={<PortfolioPage />} />
          <Route path="/:lang(sv)?/pricing" element={<PricingPage />} />
          <Route path="/:lang(sv)?/blog" element={<BlogPage />} />
          <Route path="/:lang(sv)?/contact" element={<ContactPage />} />
          <Route path="/:lang(sv)?/kontakt" element={<ContactPage />} />
          <Route path="/:lang(sv)?/quote" element={<QuotePage />} />

          {/* Service Detail Pages */}
          <Route path="/:lang(sv)?/services/seo" element={<SEOPage />} />
          <Route path="/:lang(sv)?/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/:lang(sv)?/services/branding" element={<BrandingPage />} />
          <Route path="/:lang(sv)?/services/ads" element={<AdsPage />} />
          <Route path="/:lang(sv)?/services/social-media" element={<SocialMediaPage />} />
          <Route path="/:lang(sv)?/services/custom-software" element={<CustomSoftwarePage />} />

          {/* Legal Pages */}
          <Route path="/:lang(sv)?/privacy" element={<PrivacyPage />} />
          <Route path="/:lang(sv)?/terms" element={<TermsPage />} />
          <Route path="/:lang(sv)?/integritet" element={<PrivacyPage />} />
          <Route path="/:lang(sv)?/villkor" element={<TermsPage />} />

          {/* Calculator Hub */}
          <Route path="/:lang(sv)?/calculators" element={<CalculatorsHub />} />
          <Route path="/:lang(sv)?/kalkylatorer" element={<CalculatorsHub />} />

          {/* Individual Calculator Pages */}
          <Route path="/:lang(sv)?/calculators/carbon-footprint" element={<CarbonFootprintCalculator />} />
          <Route path="/:lang(sv)?/calculators/shipping-emissions" element={<ShippingEmissionsCalculator />} />
          <Route path="/:lang(sv)?/calculators/solar-energy" element={<SolarEnergyCalculator />} />
          <Route path="/:lang(sv)?/calculators/plastic-waste" element={<PlasticWasteCalculator />} />
          <Route path="/:lang(sv)?/calculators/water-usage" element={<WaterUsageCalculator />} />
          <Route path="/:lang(sv)?/calculators/household-energy" element={<HouseholdEnergyCalculator />} />
          <Route path="/:lang(sv)?/calculators/electric-vehicle" element={<ElectricVehicleCalculator />} />
          <Route path="/:lang(sv)?/calculators/green-building" element={<GreenBuildingCalculator />} />
          <Route path="/:lang(sv)?/calculators/tree-offset" element={<TreeOffsetCalculator />} />
          <Route path="/:lang(sv)?/calculators/sustainable-packaging" element={<SustainablePackagingCalculator />} />
          <Route path="/:lang(sv)?/calculators/waste-recycling" element={<WasteRecyclingCalculator />} />
          <Route path="/:lang(sv)?/calculators/green-commute" element={<GreenCommuteCalculator />} />
          <Route path="/:lang(sv)?/calculators/home-insulation" element={<HomeInsulationCalculator />} />
          <Route path="/:lang(sv)?/calculators/carbon-neutral-business" element={<CarbonNeutralBusinessCalculator />} />
          <Route path="/:lang(sv)?/calculators/food-carbon" element={<FoodCarbonCalculator />} />
          <Route path="/:lang(sv)?/calculators/appliance-efficiency" element={<ApplianceEfficiencyCalculator />} />
          <Route path="/:lang(sv)?/calculators/rainwater-harvesting" element={<RainwaterHarvestingCalculator />} />
          <Route path="/:lang(sv)?/calculators/composting-impact" element={<CompostingImpactCalculator />} />
          <Route path="/:lang(sv)?/calculators/air-quality" element={<AirQualityCalculator />} />
          <Route path="/:lang(sv)?/calculators/energy-star" element={<EnergyStarCalculator />} />
        </Routes>
        </MainLayout>
      </div>
    </LanguageProvider>
  )
}

export default App
