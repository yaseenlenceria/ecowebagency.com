import React, { useState } from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Recycle, Leaf, Trash2 } from 'lucide-react'

export default function WasteRecyclingCalculator() {
  const [formData, setFormData] = useState({
    paper: { pounds: '0', recycles: true },
    plastic: { pounds: '0', recycles: true },
    glass: { pounds: '0', recycles: true },
    metal: { pounds: '0', recycles: true },
    organic: { pounds: '0', composts: false },
    period: 'monthly'
  })

  const [results, setResults] = useState(null)

  const handleInputChange = (category, field, value) => {
    setFormData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }))
  }

  const calculateRecyclingImpact = () => {
    const periodMultiplier = formData.period === 'daily' ? 365 :
                           formData.period === 'weekly' ? 52 : 12

    const paperWeight = (parseFloat(formData.paper.pounds) || 0) * periodMultiplier
    const plasticWeight = (parseFloat(formData.plastic.pounds) || 0) * periodMultiplier
    const glassWeight = (parseFloat(formData.glass.pounds) || 0) * periodMultiplier
    const metalWeight = (parseFloat(formData.metal.pounds) || 0) * periodMultiplier
    const organicWeight = (parseFloat(formData.organic.pounds) || 0) * periodMultiplier

    // CO2 savings per pound of material recycled
    const co2SavingsPerPound = {
      paper: 1.5,
      plastic: 2.5,
      glass: 0.3,
      metal: 5.0
    }

    // Energy savings per pound (kWh)
    const energySavingsPerPound = {
      paper: 4.0,
      plastic: 5.5,
      glass: 0.8,
      metal: 7.0
    }

    // Water savings per pound (gallons)
    const waterSavingsPerPound = {
      paper: 3.5,
      plastic: 2.0,
      glass: 0.5,
      metal: 4.0
    }

    let totalCO2Savings = 0
    let totalEnergySavings = 0
    let totalWaterSavings = 0
    let totalWasteDiverted = 0

    if (formData.paper.recycles) {
      totalCO2Savings += paperWeight * co2SavingsPerPound.paper
      totalEnergySavings += paperWeight * energySavingsPerPound.paper
      totalWaterSavings += paperWeight * waterSavingsPerPound.paper
      totalWasteDiverted += paperWeight
    }
    if (formData.plastic.recycles) {
      totalCO2Savings += plasticWeight * co2SavingsPerPound.plastic
      totalEnergySavings += plasticWeight * energySavingsPerPound.plastic
      totalWaterSavings += plasticWeight * waterSavingsPerPound.plastic
      totalWasteDiverted += plasticWeight
    }
    if (formData.glass.recycles) {
      totalCO2Savings += glassWeight * co2SavingsPerPound.glass
      totalEnergySavings += glassWeight * energySavingsPerPound.glass
      totalWaterSavings += glassWeight * waterSavingsPerPound.glass
      totalWasteDiverted += glassWeight
    }
    if (formData.metal.recycles) {
      totalCO2Savings += metalWeight * co2SavingsPerPound.metal
      totalEnergySavings += metalWeight * energySavingsPerPound.metal
      totalWaterSavings += metalWeight * waterSavingsPerPound.metal
      totalWasteDiverted += metalWeight
    }
    if (formData.organic.composts) {
      totalCO2Savings += organicWeight * 0.5
      totalWasteDiverted += organicWeight
    }

    // Calculate equivalent impacts
    const treesEquivalent = Math.floor(totalCO2Savings * 0.008) // Trees saved
    const carsOffRoad = (totalCO2Savings / 20000).toFixed(1) // Cars taken off road for a year
    const homesPowered = (totalEnergySavings / 10972).toFixed(1) // Homes powered for a month
    const gallonsGasSaved = (totalCO2Savings / 19.6).toFixed(0) // Gallons of gasoline

    // Calculate cost savings
    const averageLandfillCost = 0.05 // $0.05 per pound
    const landfillCostSavings = totalWasteDiverted * averageLandfillCost

    const breakdown = {
      paper: formData.paper.recycles ? {
        co2: (paperWeight * co2SavingsPerPound.paper).toFixed(0),
        energy: (paperWeight * energySavingsPerPound.paper).toFixed(0),
        water: (paperWeight * waterSavingsPerPound.paper).toFixed(0)
      } : null,
      plastic: formData.plastic.recycles ? {
        co2: (plasticWeight * co2SavingsPerPound.plastic).toFixed(0),
        energy: (plasticWeight * energySavingsPerPound.plastic).toFixed(0),
        water: (plasticWeight * waterSavingsPerPound.plastic).toFixed(0)
      } : null,
      glass: formData.glass.recycles ? {
        co2: (glassWeight * co2SavingsPerPound.glass).toFixed(0),
        energy: (glassWeight * energySavingsPerPound.glass).toFixed(0),
        water: (glassWeight * waterSavingsPerPound.glass).toFixed(0)
      } : null,
      metal: formData.metal.recycles ? {
        co2: (metalWeight * co2SavingsPerPound.metal).toFixed(0),
        energy: (metalWeight * energySavingsPerPound.metal).toFixed(0),
        water: (metalWeight * waterSavingsPerPound.metal).toFixed(0)
      } : null,
      organic: formData.organic.composts ? {
        co2: (organicWeight * 0.5).toFixed(0)
      } : null
    }

    const recommendations = []
    if (totalWasteDiverted < 100) recommendations.push("Try to recycle more to increase your environmental impact")
    if (!formData.organic.composts && organicWeight > 0) recommendations.push("Start composting organic waste to maximize your impact")
    if (totalCO2Savings > 100) recommendations.push("Excellent recycling! You're making a significant difference")
    if (!formData.metal.recycles && metalWeight > 0) recommendations.push("Metal recycling provides the highest CO2 and energy savings")

    setResults({
      totalEmissions: `${(totalCO2Savings / 2000).toFixed(3)} tons CO₂e/year`,
      breakdown: {
        wasteDiverted: `${(totalWasteDiverted / periodMultiplier).toFixed(0)} lbs/${formData.period.slice(0, -2)}`,
        totalAnnual: `${totalWasteDiverted.toFixed(0)} lbs/year`,
        co2Savings: `${totalCO2Savings.toFixed(0)} lbs CO₂/year`,
        energySavings: `${totalEnergySavings.toFixed(0)} kWh/year`,
        waterSavings: `${totalWaterSavings.toFixed(0)} gallons/year`,
        costSavings: `$${landfillCostSavings.toFixed(2)}/year`,
        treesEquivalent: treesEquivalent,
        carsOffRoad: carsOffRoad,
        homesPowered: homesPowered,
        gallonsGasSaved: gallonsGasSaved
      },
      recommendations
    })
  }

  const resetForm = () => {
    setFormData({
      paper: { pounds: '0', recycles: true },
      plastic: { pounds: '0', recycles: true },
      glass: { pounds: '0', recycles: true },
      metal: { pounds: '0', recycles: true },
      organic: { pounds: '0', composts: false },
      period: 'monthly'
    })
    setResults(null)
  }

  return (
    <CalculatorBase
      title="Waste Recycling Impact Calculator"
      description="Calculate CO₂ savings from recycling paper, metal, glass, and plastic"
      icon={Recycle}
      onCalculate={calculateRecyclingImpact}
      onReset={resetForm}
      results={results}
    >
      <div className="space-y-6">
        {/* Period Selection */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Reporting Period
          </label>
          <select
            value={formData.period}
            onChange={(e) => handleInputChange('period', 'period', e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Paper */}
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-800 mb-3 flex items-center space-x-2">
              <Recycle className="w-5 h-5 text-blue-600" />
              <span>Paper & Cardboard</span>
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Amount (lbs per {formData.period.slice(0, -2)})
                </label>
                <input
                  type="number"
                  value={formData.paper.pounds}
                  onChange={(e) => handleInputChange('paper', 'pounds', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                  placeholder="10"
                />
              </div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.paper.recycles}
                  onChange={(e) => handleInputChange('paper', 'recycles', e.target.checked)}
                  className="w-4 h-4 text-eco-600 border-slate-300 rounded focus:ring-eco-500"
                />
                <span className="text-sm text-slate-700">I recycle paper</span>
              </label>
            </div>
          </div>

          {/* Plastic */}
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-800 mb-3 flex items-center space-x-2">
              <Recycle className="w-5 h-5 text-green-600" />
              <span>Plastic</span>
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Amount (lbs per {formData.period.slice(0, -2)})
                </label>
                <input
                  type="number"
                  value={formData.plastic.pounds}
                  onChange={(e) => handleInputChange('plastic', 'pounds', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                  placeholder="5"
                />
              </div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.plastic.recycles}
                  onChange={(e) => handleInputChange('plastic', 'recycles', e.target.checked)}
                  className="w-4 h-4 text-eco-600 border-slate-300 rounded focus:ring-eco-500"
                />
                <span className="text-sm text-slate-700">I recycle plastic</span>
              </label>
            </div>
          </div>

          {/* Glass */}
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-800 mb-3 flex items-center space-x-2">
              <Recycle className="w-5 h-5 text-purple-600" />
              <span>Glass</span>
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Amount (lbs per {formData.period.slice(0, -2)})
                </label>
                <input
                  type="number"
                  value={formData.glass.pounds}
                  onChange={(e) => handleInputChange('glass', 'pounds', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                  placeholder="8"
                />
              </div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.glass.recycles}
                  onChange={(e) => handleInputChange('glass', 'recycles', e.target.checked)}
                  className="w-4 h-4 text-eco-600 border-slate-300 rounded focus:ring-eco-500"
                />
                <span className="text-sm text-slate-700">I recycle glass</span>
              </label>
            </div>
          </div>

          {/* Metal */}
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-800 mb-3 flex items-center space-x-2">
              <Recycle className="w-5 h-5 text-gray-600" />
              <span>Metal (Aluminum/Steel)</span>
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Amount (lbs per {formData.period.slice(0, -2)})
                </label>
                <input
                  type="number"
                  value={formData.metal.pounds}
                  onChange={(e) => handleInputChange('metal', 'pounds', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                  placeholder="2"
                />
              </div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.metal.recycles}
                  onChange={(e) => handleInputChange('metal', 'recycles', e.target.checked)}
                  className="w-4 h-4 text-eco-600 border-slate-300 rounded focus:ring-eco-500"
                />
                <span className="text-sm text-slate-700">I recycle metal</span>
              </label>
            </div>
          </div>
        </div>

        {/* Organic Waste */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-slate-800 mb-3 flex items-center space-x-2">
            <Leaf className="w-5 h-5 text-green-600" />
            <span>Organic Waste (Food scraps, yard waste)</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Amount (lbs per {formData.period.slice(0, -2)})
              </label>
              <input
                type="number"
                value={formData.organic.pounds}
                onChange={(e) => handleInputChange('organic', 'pounds', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="15"
              />
            </div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.organic.composts}
                onChange={(e) => handleInputChange('organic', 'composts', e.target.checked)}
                className="w-4 h-4 text-eco-600 border-slate-300 rounded focus:ring-eco-500"
              />
              <span className="text-sm text-slate-700">I compost organic waste</span>
            </label>
          </div>
        </div>

        {/* Educational Section */}
        <div className="bg-eco-50 rounded-lg p-4 border border-eco-200">
          <h4 className="font-semibold text-eco-700 mb-2">♻️ Recycling Impact Facts</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
            <div>
              <h5 className="font-medium text-slate-700 mb-2">Environmental Benefits:</h5>
              <ul className="space-y-1">
                <li>• Recycling 1 ton of paper saves 17 trees</li>
                <li>• Recycling aluminum saves 95% energy vs. new production</li>
                <li>• Recycling 1 plastic bottle saves enough energy to power a laptop for 25 hours</li>
                <li>• Composting reduces methane emissions from landfills</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-slate-700 mb-2">Resource Savings:</h5>
              <ul className="space-y-1">
                <li>• Paper: 4,000 kWh energy, 7,000 gallons water per ton</li>
                <li>• Plastic: 5,774 kWh energy, 16.3 barrels oil per ton</li>
                <li>• Glass: 1,300 kWh energy per ton</li>
                <li>• Aluminum: 14,000 kWh energy, 40 barrels oil per ton</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CalculatorBase>
  )
}