import React, { useState } from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Trees, Leaf } from 'lucide-react'

export default function TreeOffsetCalculator() {
  const [formData, setFormData] = useState({
    co2Amount: '',
    offsetGoal: 'complete'
  })

  const [results, setResults] = useState(null)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const calculateTreeOffset = () => {
    const co2Tons = parseFloat(formData.co2Amount) || 0

    // Average mature tree absorbs ~48 lbs CO2 per year (about 22 kg)
    const co2PerTreePerYear = 48 / 2000 // Convert to tons

    const treesNeeded = Math.ceil(co2Tons / co2PerTreePerYear)
    const acresNeeded = Math.ceil(treesNeeded / 400) // ~400 trees per acre for mature forest
    const yearsToOffset = formData.offsetGoal === 'complete' ? 1 :
                         formData.offsetGoal === '5years' ? 5 : 10

    const treesNeededForGoal = Math.ceil(treesNeeded / yearsToOffset)

    const recommendations = []
    if (treesNeeded > 1000) recommendations.push("Consider supporting reforestation organizations for large-scale planting")
    if (treesNeeded < 50) recommendations.push("You can easily plant these trees yourself or support local tree planting initiatives")
    if (formData.offsetGoal === 'complete') recommendations.push("Consider spreading planting over multiple years for sustainable growth")

    setResults({
      totalEmissions: `${co2Tons} tons CO₂e`,
      breakdown: {
        treesNeeded: treesNeeded.toString(),
        acresNeeded: acresNeeded.toString(),
        treesPerYear: treesNeededForGoal.toString(),
        co2PerTree: '48 lbs/year',
        timeToOffset: `${yearsToOffset} years`
      },
      recommendations
    })
  }

  const resetForm = () => {
    setFormData({
      co2Amount: '',
      offsetGoal: 'complete'
    })
    setResults(null)
  }

  return (
    <CalculatorBase
      title="Tree Offset Impact Calculator"
      description="Calculate how many trees needed to offset your CO₂ emissions"
      icon={Trees}
      onCalculate={calculateTreeOffset}
      onReset={resetForm}
      results={results}
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Trees className="w-5 h-5 text-eco-600" />
            <span>Carbon Offset Details</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                CO₂ to Offset (tons per year)
              </label>
              <input
                type="number"
                value={formData.co2Amount}
                onChange={(e) => handleInputChange('co2Amount', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="10"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Offset Timeline
              </label>
              <select
                value={formData.offsetGoal}
                onChange={(e) => handleInputChange('offsetGoal', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="complete">Complete in 1 year</option>
                <option value="5years">Spread over 5 years</option>
                <option value="10years">Spread over 10 years</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <h4 className="font-semibold text-green-700 mb-2">🌳 Tree Facts</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• One mature tree absorbs ~48 lbs CO₂ per year</li>
            <li>• It takes about 400-500 trees per acre for a healthy forest</li>
            <li>• Trees take 10-20 years to reach maturity and peak absorption</li>
            <li>• Different species absorb different amounts of CO₂</li>
          </ul>
        </div>
      </div>
    </CalculatorBase>
  )
}