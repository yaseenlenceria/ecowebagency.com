import React, { useState } from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Zap, DollarSign, Leaf, Sun } from 'lucide-react'

export default function SolarEnergyCalculator() {
  const [formData, setFormData] = useState({
    monthlyElectricityBill: '',
    electricityRate: '0.12',
    systemSize: '',
    sunlightHours: '5',
    installationCost: '20000',
    incentives: '0'
  })

  const [results, setResults] = useState(null)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const calculateSavings = () => {
    const monthlyBill = parseFloat(formData.monthlyElectricityBill) || 0
    const electricityRate = parseFloat(formData.electricityRate)
    const systemSize = parseFloat(formData.systemSize) || 6
    const sunlightHours = parseFloat(formData.sunlightHours)
    const installationCost = parseFloat(formData.installationCost) || 20000
    const incentives = parseFloat(formData.incentives) || 0

    // Calculate current annual electricity cost
    const annualElectricityCost = monthlyBill * 12

    // Calculate system production (kWh per year)
    const systemProduction = systemSize * sunlightHours * 365

    // Calculate annual savings
    const annualSavings = systemProduction * electricityRate

    // Calculate payback period
    const netCost = installationCost - incentives
    const paybackPeriod = netCost / annualSavings

    // Calculate CO2 savings (assumes 0.4 kg CO2 per kWh)
    const co2SavingsPerYear = (systemProduction * 0.4 / 1000).toFixed(2)

    // Calculate 25-year savings (typical solar panel lifespan)
    const total25YearSavings = annualSavings * 25

    const recommendations = []
    if (paybackPeriod > 15) recommendations.push("Consider increasing system size or looking for additional incentives")
    if (sunlightHours < 4) recommendations.push("Your location may have limited sunlight - consider energy storage solutions")
    if (electricityRate > 0.15) recommendations.push("High electricity rates make solar an excellent investment")
    if (incentives < installationCost * 0.3) recommendations.push("Look for federal, state, and local solar incentives")

    setResults({
      totalEmissions: `${co2SavingsPerYear} tons CO₂e/year`,
      breakdown: {
        annualSavings: `$${annualSavings.toFixed(2)}`,
        paybackPeriod: `${paybackPeriod.toFixed(1)} years`,
        totalSavings: `$${total25YearSavings.toFixed(2)}`,
        systemProduction: `${systemProduction.toFixed(0)} kWh/year`
      },
      recommendations
    })
  }

  const resetForm = () => {
    setFormData({
      monthlyElectricityBill: '',
      electricityRate: '0.12',
      systemSize: '',
      sunlightHours: '5',
      installationCost: '20000',
      incentives: '0'
    })
    setResults(null)
  }

  return (
    <CalculatorBase
      title="Solar Energy Savings Calculator"
      description="Calculate money and CO₂ savings by switching to solar power"
      icon={Sun}
      onCalculate={calculateSavings}
      onReset={resetForm}
      results={results}
    >
      <div className="space-y-6">
        {/* Current Electricity Usage */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Zap className="w-5 h-5 text-eco-600" />
            <span>Current Electricity Usage</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Monthly Electricity Bill ($)
              </label>
              <input
                type="number"
                value={formData.monthlyElectricityBill}
                onChange={(e) => handleInputChange('monthlyElectricityBill', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="150"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Electricity Rate ($/kWh)
              </label>
              <select
                value={formData.electricityRate}
                onChange={(e) => handleInputChange('electricityRate', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="0.08">$0.08 (Low rate)</option>
                <option value="0.12">$0.12 (Average)</option>
                <option value="0.15">$0.15 (High rate)</option>
                <option value="0.20">$0.20 (Very high rate)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Solar System Details */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Sun className="w-5 h-5 text-eco-600" />
            <span>Solar System Details</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                System Size (kW)
              </label>
              <select
                value={formData.systemSize}
                onChange={(e) => handleInputChange('systemSize', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="4">4 kW (Small home)</option>
                <option value="6">6 kW (Average home)</option>
                <option value="8">8 kW (Large home)</option>
                <option value="10">10 kW (Very large home)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Average Daily Sunlight Hours
              </label>
              <select
                value={formData.sunlightHours}
                onChange={(e) => handleInputChange('sunlightHours', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="3">3 hours (Cloudy region)</option>
                <option value="4">4 hours (Partly cloudy)</option>
                <option value="5">5 hours (Average)</option>
                <option value="6">6 hours (Sunny region)</option>
                <option value="7">7 hours (Very sunny)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Financial Details */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-eco-600" />
            <span>Financial Details</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Installation Cost ($)
              </label>
              <input
                type="number"
                value={formData.installationCost}
                onChange={(e) => handleInputChange('installationCost', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="20000"
              />
              <p className="text-xs text-slate-500 mt-1">Typical range: $15,000 - $30,000</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Available Incentives ($)
              </label>
              <input
                type="number"
                value={formData.incentives}
                onChange={(e) => handleInputChange('incentives', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="6000"
              />
              <p className="text-xs text-slate-500 mt-1">Federal tax credits, state rebates, etc.</p>
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-eco-50 rounded-lg p-4 border border-eco-200">
            <h4 className="font-semibold text-eco-700 mb-2">Did You Know?</h4>
            <p className="text-sm text-slate-600">Solar panels can increase your home value by 3-4% and typically last 25-30 years.</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="font-semibold text-blue-700 mb-2">Federal Tax Credit</h4>
            <p className="text-sm text-slate-600">Current federal tax credit covers 30% of installation costs through 2032.</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Environmental Impact</h4>
            <p className="text-sm text-slate-600">A typical 6kW system eliminates 6 tons of CO₂ annually - equivalent to planting 100 trees.</p>
          </div>
        </div>
      </div>
    </CalculatorBase>
  )
}