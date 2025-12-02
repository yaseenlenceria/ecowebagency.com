import React, { useState } from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Package, Leaf, DollarSign } from 'lucide-react'

export default function SustainablePackagingCalculator() {
  const [formData, setFormData] = useState({
    packaging: {
      material: 'plastic',
      weight: '',
      quantity: '',
      usagePeriod: 'monthly'
    },
    alternatives: {
      material: 'paper',
      costIncrease: '15'
    },
    business: {
      profitMargin: '30',
      shippingCost: '2.50'
    }
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

  const calculateSustainablePackaging = () => {
    const weight = parseFloat(formData.packaging.weight) || 0
    const quantity = parseFloat(formData.packaging.quantity) || 0
    const periodMultiplier = formData.packaging.usagePeriod === 'daily' ? 365 :
                           formData.packaging.usagePeriod === 'weekly' ? 52 : 12

    // Emission factors (kg CO2 per kg of material)
    const emissionFactors = {
      plastic: 3.5,
      paper: 1.2,
      cardboard: 0.9,
      glass: 0.8,
      aluminum: 8.5,
      biodegradable: 0.5,
      compostable: 0.3
    }

    // Cost factors ($ per kg)
    const costFactors = {
      plastic: 1.2,
      paper: 1.8,
      cardboard: 1.0,
      glass: 0.9,
      aluminum: 2.5,
      biodegradable: 2.8,
      compostable: 3.2
    }

    const currentEmissions = (weight * quantity * periodMultiplier / 1000) * emissionFactors[formData.packaging.material]
    const alternativeEmissions = (weight * quantity * periodMultiplier / 1000) * emissionFactors[formData.alternatives.material]
    const emissionReduction = currentEmissions - alternativeEmissions

    // Calculate waste reduction
    const wasteReduction = (weight * quantity * periodMultiplier / 1000) *
                          (1 - (formData.alternatives.material === 'biodegradable' || formData.alternatives.material === 'compostable' ? 0.8 : 0.9))

    // Calculate costs
    const currentCost = (weight * quantity * periodMultiplier / 1000) * costFactors[formData.packaging.material]
    const costIncreasePercent = parseFloat(formData.alternatives.costIncrease) / 100
    const alternativeCost = currentCost * (1 + costIncreasePercent)
    const costDifference = alternativeCost - currentCost

    // Calculate long-term benefits
    const profitMargin = parseFloat(formData.business.profitMargin) / 100
    const shippingCostPerKg = parseFloat(formData.business.shippingCost)
    const shippingSavings = formData.alternatives.material === 'paper' || formData.alternatives.material === 'cardboard' ?
      (weight * quantity * periodMultiplier / 1000) * shippingCostPerKg * 0.1 : 0

    // Marketing value of sustainable packaging
    const marketingValue = currentCost * 0.05 // 5% of packaging cost as marketing value

    const recommendations = []
    if (emissionReduction > 1) recommendations.push("Significant CO2 reduction! Consider marketing your sustainable choice")
    if (formData.packaging.material === 'plastic') recommendations.push("Switching from plastic can reduce emissions by 60-80%")
    if (formData.alternatives.material === 'biodegradable' || formData.alternatives.material === 'compostable') {
      recommendations.push("Compostable options eliminate landfill waste and improve brand image")
    }
    if (costDifference < 0) recommendations.push("Your chosen alternative is actually cost-effective!")

    setResults({
      totalEmissions: `${emissionReduction.toFixed(2)} tons CO₂e/year`,
      breakdown: {
        currentEmissions: `${currentEmissions.toFixed(2)} tons CO₂e/year`,
        alternativeEmissions: `${alternativeEmissions.toFixed(2)} tons CO₂e/year`,
        wasteReduction: `${wasteReduction.toFixed(1)} tons/year`,
        currentCost: `$${currentCost.toFixed(2)}/year`,
        alternativeCost: `$${alternativeCost.toFixed(2)}/year`,
        costDifference: `$${costDifference.toFixed(2)}/year`,
        shippingSavings: `$${shippingSavings.toFixed(2)}/year`,
        marketingValue: `$${marketingValue.toFixed(2)}/year`,
        netImpact: `$${(marketingValue + shippingSavings - costDifference).toFixed(2)}/year`
      },
      recommendations
    })
  }

  const resetForm = () => {
    setFormData({
      packaging: {
        material: 'plastic',
        weight: '',
        quantity: '',
        usagePeriod: 'monthly'
      },
      alternatives: {
        material: 'paper',
        costIncrease: '15'
      },
      business: {
        profitMargin: '30',
        shippingCost: '2.50'
      }
    })
    setResults(null)
  }

  return (
    <CalculatorBase
      title="Sustainable Packaging Calculator"
      description="Compare environmental impact and costs of different packaging materials"
      icon={Package}
      onCalculate={calculateSustainablePackaging}
      onReset={resetForm}
      results={results}
    >
      <div className="space-y-6">
        {/* Current Packaging */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Package className="w-5 h-5 text-eco-600" />
            <span>Current Packaging</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Current Material
              </label>
              <select
                value={formData.packaging.material}
                onChange={(e) => handleInputChange('packaging', 'material', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="plastic">Plastic</option>
                <option value="paper">Paper</option>
                <option value="cardboard">Cardboard</option>
                <option value="glass">Glass</option>
                <option value="aluminum">Aluminum</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Weight per Unit (grams)
              </label>
              <input
                type="number"
                value={formData.packaging.weight}
                onChange={(e) => handleInputChange('packaging', 'weight', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Units per Period
              </label>
              <input
                type="number"
                value={formData.packaging.quantity}
                onChange={(e) => handleInputChange('packaging', 'quantity', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="1000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Usage Period
              </label>
              <select
                value={formData.packaging.usagePeriod}
                onChange={(e) => handleInputChange('packaging', 'usagePeriod', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>
        </div>

        {/* Alternative Packaging */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Leaf className="w-5 h-5 text-eco-600" />
            <span>Sustainable Alternative</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Alternative Material
              </label>
              <select
                value={formData.alternatives.material}
                onChange={(e) => handleInputChange('alternatives', 'material', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="paper">Paper</option>
                <option value="cardboard">Cardboard</option>
                <option value="glass">Glass</option>
                <option value="aluminum">Aluminum</option>
                <option value="biodegradable">Biodegradable Plastic</option>
                <option value="compostable">Compostable Material</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Estimated Cost Increase (%)
              </label>
              <select
                value={formData.alternatives.costIncrease}
                onChange={(e) => handleInputChange('alternatives', 'costIncrease', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="-10">-10% (Cheaper)</option>
                <option value="0">0% (Same cost)</option>
                <option value="5">5% increase</option>
                <option value="10">10% increase</option>
                <option value="15">15% increase</option>
                <option value="25">25% increase</option>
                <option value="50">50% increase</option>
              </select>
            </div>
          </div>
        </div>

        {/* Business Impact */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-eco-600" />
            <span>Business Impact</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Profit Margin (%)
              </label>
              <input
                type="number"
                value={formData.business.profitMargin}
                onChange={(e) => handleInputChange('business', 'profitMargin', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Shipping Cost ($/kg)
              </label>
              <input
                type="number"
                value={formData.business.shippingCost}
                onChange={(e) => handleInputChange('business', 'shippingCost', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="2.50"
              />
            </div>
          </div>
        </div>

        {/* Material Comparison */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Material Comparison</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-slate-50 rounded-lg p-4">
              <h4 className="font-medium text-slate-700 mb-2">Plastic</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 3.5 kg CO₂/kg</li>
                <li>• 400+ years decomposition</li>
                <li>• Low cost</li>
                <li>• High durability</li>
              </ul>
            </div>

            <div className="bg-eco-50 rounded-lg p-4">
              <h4 className="font-medium text-eco-700 mb-2">Paper/Cardboard</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 1.2 kg CO₂/kg</li>
                <li>• 2-6 months decomposition</li>
                <li>• Recyclable</li>
                <li>• Good brand perception</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-700 mb-2">Biodegradable</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 0.5 kg CO₂/kg</li>
                <li>• 3-6 months decomposition</li>
                <li>• Premium pricing</li>
                <li>• Excellent marketing value</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-eco-50 rounded-lg p-4 border border-eco-200">
          <h4 className="font-semibold text-eco-700 mb-2">🌱 Sustainable Packaging Benefits</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• 73% of consumers willing to pay more for sustainable packaging</li>
            <li>• Reduced regulatory compliance risks as plastic regulations increase</li>
            <li>• Enhanced brand reputation and customer loyalty</li>
            <li>• Potential shipping cost savings with lighter materials</li>
            <li>• Competitive advantage in eco-conscious markets</li>
          </ul>
        </div>
      </div>
    </CalculatorBase>
  )
}