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
          <Route path="/:lang(sv|en)?" element={<HomePage />} />
          <Route path="/:lang(sv|en)/about" element={<AboutPage />} />
          <Route path="/:lang(sv|en)/om-oss" element={<AboutPage />} />
          <Route path="/:lang(sv|en)/services" element={<ServicesPage />} />
          <Route path="/:lang(sv|en)/tjanster" element={<ServicesPage />} />
          <Route path="/:lang(sv|en)/portfolio" element={<PortfolioPage />} />
          <Route path="/:lang(sv|en)/pricing" element={<PricingPage />} />
          <Route path="/:lang(sv|en)/blog" element={<BlogPage />} />
          <Route path="/:lang(sv|en)/contact" element={<ContactPage />} />
          <Route path="/:lang(sv|en)/kontakt" element={<ContactPage />} />
          <Route path="/:lang(sv|en)/quote" element={<QuotePage />} />

          {/* Service Detail Pages */}
          <Route path="/:lang(sv|en)/services/seo" element={<SEOPage />} />
          <Route path="/:lang(sv|en)/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/:lang(sv|en)/services/branding" element={<BrandingPage />} />
          <Route path="/:lang(sv|en)/services/ads" element={<AdsPage />} />
          <Route path="/:lang(sv|en)/services/social-media" element={<SocialMediaPage />} />
          <Route path="/:lang(sv|en)/services/custom-software" element={<CustomSoftwarePage />} />

          {/* Legal Pages */}
          <Route path="/:lang(sv|en)/privacy" element={<PrivacyPage />} />
          <Route path="/:lang(sv|en)/terms" element={<TermsPage />} />
          <Route path="/:lang(sv|en)/integritet" element={<PrivacyPage />} />
          <Route path="/:lang(sv|en)/villkor" element={<TermsPage />} />

          {/* Calculator Hub */}
          <Route path="/:lang(sv|en)/calculators" element={<CalculatorsHub />} />
          <Route path="/:lang(sv|en)/kalkylatorer" element={<CalculatorsHub />} />

          {/* Individual Calculator Pages */}
          <Route path="/:lang(sv|en)/calculators/carbon-footprint" element={<CarbonFootprintCalculator />} />
          <Route path="/:lang(sv|en)/calculators/shipping-emissions" element={<ShippingEmissionsCalculator />} />
          <Route path="/:lang(sv|en)/calculators/solar-energy" element={<SolarEnergyCalculator />} />
          <Route path="/:lang(sv|en)/calculators/plastic-waste" element={<PlasticWasteCalculator />} />
          <Route path="/:lang(sv|en)/calculators/water-usage" element={<WaterUsageCalculator />} />
          <Route path="/:lang(sv|en)/calculators/household-energy" element={<HouseholdEnergyCalculator />} />
          <Route path="/:lang(sv|en)/calculators/electric-vehicle" element={<ElectricVehicleCalculator />} />
          <Route path="/:lang(sv|en)/calculators/green-building" element={<GreenBuildingCalculator />} />
          <Route path="/:lang(sv|en)/calculators/tree-offset" element={<TreeOffsetCalculator />} />
          <Route path="/:lang(sv|en)/calculators/sustainable-packaging" element={<SustainablePackagingCalculator />} />
          <Route path="/:lang(sv|en)/calculators/waste-recycling" element={<WasteRecyclingCalculator />} />
          <Route path="/:lang(sv|en)/calculators/green-commute" element={<GreenCommuteCalculator />} />
          <Route path="/:lang(sv|en)/calculators/home-insulation" element={<HomeInsulationCalculator />} />
          <Route path="/:lang(sv|en)/calculators/carbon-neutral-business" element={<CarbonNeutralBusinessCalculator />} />
          <Route path="/:lang(sv|en)/calculators/food-carbon" element={<FoodCarbonCalculator />} />
          <Route path="/:lang(sv|en)/calculators/appliance-efficiency" element={<ApplianceEfficiencyCalculator />} />
          <Route path="/:lang(sv|en)/calculators/rainwater-harvesting" element={<RainwaterHarvestingCalculator />} />
          <Route path="/:lang(sv|en)/calculators/composting-impact" element={<CompostingImpactCalculator />} />
          <Route path="/:lang(sv|en)/calculators/air-quality" element={<AirQualityCalculator />} />
          <Route path="/:lang(sv|en)/calculators/energy-star" element={<EnergyStarCalculator />} />
        </Routes>
        </MainLayout>
      </div>
    </LanguageProvider>
  )
}

export default App
