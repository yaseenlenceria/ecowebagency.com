import React, { useState } from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Package, Plane, Ship, Truck } from 'lucide-react'

export default function ShippingEmissionsCalculator() {
  const [formData, setFormData] = useState({
    weight: '',
    distance: '',
    method: 'truck',
    units: 'imperial'
  })

  const [results, setResults] = useState(null)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const calculateShippingEmissions = () => {
    const weight = parseFloat(formData.weight) || 0
    const distance = parseFloat(formData.distance) || 0

    // Emission factors (kg CO2e per ton-mile)
    const emissionFactors = {
      truck: 0.15,
      air: 0.5,
      ship: 0.02,
      rail: 0.04
    }

    const weightInTons = formData.units === 'imperial' ? weight / 2000 : weight / 1000
    const distanceInMiles = formData.units === 'imperial' ? distance : distance * 0.621371

    const co2e = weightInTons * distanceInMiles * emissionFactors[formData.method]
    const co2eInTons = (co2e / 1000).toFixed(3)

    const recommendations = []
    if (formData.method === 'air' && distance > 1000) recommendations.push("Consider shipping by sea for long distances to reduce emissions by 80%")
    if (formData.method === 'truck' && weight > 1000) recommendations.push("Consider rail freight for heavy shipments over long distances")
    if (co2e > 100) recommendations.push("This shipment has significant emissions - consider consolidation or slower shipping methods")

    setResults({
      totalEmissions: `${co2eInTons} tons CO₂e`,
      breakdown: {
        shippingMethod: formData.method,
        co2ePerMile: `${(co2e / distanceInMiles).toFixed(2)} kg CO₂e/mile`,
        efficiency: `${(co2e / weightInTons / distanceInMiles * 1000).toFixed(1)} g CO₂e/ton-km`
      },
      recommendations
    })
  }

  const resetForm = () => {
    setFormData({
      weight: '',
      distance: '',
      method: 'truck',
      units: 'imperial'
    })
    setResults(null)
  }

  return (
    <CalculatorBase
      title="Shipping Carbon Emissions Calculator"
      description="Estimate CO₂ emissions from shipping packages by different methods"
      icon={Package}
      onCalculate={calculateShippingEmissions}
      onReset={resetForm}
      results={results}
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Package className="w-5 h-5 text-eco-600" />
            <span>Shipping Details</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Package Weight
              </label>
              <input
                type="number"
                value={formData.weight}
                onChange={(e) => handleInputChange('weight', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="10"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Shipping Distance
              </label>
              <input
                type="number"
                value={formData.distance}
                onChange={(e) => handleInputChange('distance', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Units
              </label>
              <select
                value={formData.units}
                onChange={(e) => handleInputChange('units', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="imperial">Pounds & Miles</option>
                <option value="metric">Kilograms & Kilometers</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Shipping Method
              </label>
              <select
                value={formData.method}
                onChange={(e) => handleInputChange('method', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="truck">Truck</option>
                <option value="rail">Rail</option>
                <option value="ship">Ship</option>
                <option value="air">Air</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h4 className="font-semibold text-blue-700 mb-2">🚚 Shipping Emission Comparison</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• Ship: 0.02 kg CO₂e per ton-mile (lowest emissions)</li>
            <li>• Rail: 0.04 kg CO₂e per ton-mile</li>
            <li>• Truck: 0.15 kg CO₂e per ton-mile</li>
            <li>• Air: 0.5 kg CO₂e per ton-mile (highest emissions)</li>
          </ul>
        </div>
      </div>
    </CalculatorBase>
  )
}