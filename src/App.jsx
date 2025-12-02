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

          {/* Calculator Hub */}
          <Route path="/calculators" element={<CalculatorsHub />} />

          {/* Individual Calculator Pages */}
          <Route path="/calculators/carbon-footprint" element={<CarbonFootprintCalculator />} />
          <Route path="/calculators/shipping-emissions" element={<ShippingEmissionsCalculator />} />
          <Route path="/calculators/solar-energy" element={<SolarEnergyCalculator />} />
          <Route path="/calculators/plastic-waste" element={<PlasticWasteCalculator />} />
          <Route path="/calculators/water-usage" element={<WaterUsageCalculator />} />
          <Route path="/calculators/household-energy" element={<HouseholdEnergyCalculator />} />
          <Route path="/calculators/electric-vehicle" element={<ElectricVehicleCalculator />} />
          <Route path="/calculators/green-building" element={<GreenBuildingCalculator />} />
          <Route path="/calculators/tree-offset" element={<TreeOffsetCalculator />} />
          <Route path="/calculators/sustainable-packaging" element={<SustainablePackagingCalculator />} />
          <Route path="/calculators/waste-recycling" element={<WasteRecyclingCalculator />} />
          <Route path="/calculators/green-commute" element={<GreenCommuteCalculator />} />
          <Route path="/calculators/home-insulation" element={<HomeInsulationCalculator />} />
          <Route path="/calculators/carbon-neutral-business" element={<CarbonNeutralBusinessCalculator />} />
          <Route path="/calculators/food-carbon" element={<FoodCarbonCalculator />} />
          <Route path="/calculators/appliance-efficiency" element={<ApplianceEfficiencyCalculator />} />
          <Route path="/calculators/rainwater-harvesting" element={<RainwaterHarvestingCalculator />} />
          <Route path="/calculators/composting-impact" element={<CompostingImpactCalculator />} />
          <Route path="/calculators/air-quality" element={<AirQualityCalculator />} />
          <Route path="/calculators/energy-star" element={<EnergyStarCalculator />} />
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App
