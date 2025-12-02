import React, { useState } from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Recycle, Droplets, Package } from 'lucide-react'

export default function PlasticWasteCalculator() {
  const [formData, setFormData] = useState({
    bottles: {
      singleUse: '',
      reusable: '0'
    },
    bags: {
      singleUse: '',
      reusable: '0'
    },
    cups: {
      singleUse: '',
      reusable: '0'
    },
    containers: {
      singleUse: '',
      reusable: '0'
    },
    straws: {
      singleUse: '',
      reusable: '0'
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

  const calculatePlasticWaste = () => {
    // Calculate annual plastic waste reduction
    const bottleReduction = (parseFloat(formData.bottles.singleUse) - parseFloat(formData.bottles.reusable)) * 365
    const bagReduction = (parseFloat(formData.bags.singleUse) - parseFloat(formData.bags.reusable)) * 365
    const cupReduction = (parseFloat(formData.cups.singleUse) - parseFloat(formData.cups.reusable)) * 365
    const containerReduction = (parseFloat(formData.containers.singleUse) - parseFloat(formData.containers.reusable)) * 365
    const strawReduction = (parseFloat(formData.straws.singleUse) - parseFloat(formData.straws.reusable)) * 365

    // Calculate weight reduction (average weights in grams)
    const bottleWeight = 12 // grams
    const bagWeight = 5
    const cupWeight = 10
    const containerWeight = 20
    const strawWeight = 0.5

    const totalWeightReduction = (bottleReduction * bottleWeight + bagReduction * bagWeight +
                                 cupReduction * cupWeight + containerReduction * containerWeight +
                                 strawReduction * strawWeight) / 1000 // Convert to kg

    const totalItemsSaved = bottleReduction + bagReduction + cupReduction + containerReduction + strawReduction

    // Calculate CO2 equivalent (plastic production ~6kg CO2 per kg of plastic)
    const co2Reduction = (totalWeightReduction * 6) / 1000 // Convert to tons

    // Calculate marine life impact
    const marineLivesSaved = totalItemsSaved * 0.001 // Conservative estimate

    const recommendations = []
    if (parseFloat(formData.bottles.singleUse) > 0) recommendations.push("Switch to reusable water bottles to save 365+ bottles annually")
    if (parseFloat(formData.bags.singleUse) > 0) recommendations.push("Use cloth shopping bags to eliminate hundreds of plastic bags")
    if (parseFloat(formData.cups.singleUse) > 0) recommendations.push("Bring a reusable coffee cup to cafes")
    if (parseFloat(formData.containers.singleUse) > 0) recommendations.push("Use glass or metal food containers instead of plastic")
    if (parseFloat(formData.straws.singleUse) > 0) recommendations.push("Say no to plastic straws or use reusable ones")

    setResults({
      totalEmissions: `${co2Reduction.toFixed(3)} tons CO₂e/year`,
      breakdown: {
        bottlesSaved: bottleReduction.toFixed(0),
        bagsSaved: bagReduction.toFixed(0),
        cupsSaved: cupReduction.toFixed(0),
        containersSaved: containerReduction.toFixed(0),
        weightReduction: `${totalWeightReduction.toFixed(1)} kg/year`,
        totalItemsSaved: totalItemsSaved.toFixed(0)
      },
      recommendations
    })
  }

  const resetForm = () => {
    setFormData({
      bottles: {
        singleUse: '',
        reusable: '0'
      },
      bags: {
        singleUse: '',
        reusable: '0'
      },
      cups: {
        singleUse: '',
        reusable: '0'
      },
      containers: {
        singleUse: '',
        reusable: '0'
      },
      straws: {
        singleUse: '',
        reusable: '0'
      }
    })
    setResults(null)
  }

  return (
    <CalculatorBase
      title="Plastic Waste Reduction Calculator"
      description="Calculate how many plastic items you save by using reusable eco-products"
      icon={Recycle}
      onCalculate={calculatePlasticWaste}
      onReset={resetForm}
      results={results}
    >
      <div className="space-y-6">
        {/* Water Bottles */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Droplets className="w-5 h-5 text-eco-600" />
            <span>Water Bottles</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Single-Use Bottles per Day
              </label>
              <select
                value={formData.bottles.singleUse}
                onChange={(e) => handleInputChange('bottles', 'singleUse', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="">Select...</option>
                <option value="0">0 (None)</option>
                <option value="1">1 bottle</option>
                <option value="2">2 bottles</option>
                <option value="3">3 bottles</option>
                <option value="4">4+ bottles</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Reusable Bottles per Day
              </label>
              <select
                value={formData.bottles.reusable}
                onChange={(e) => handleInputChange('bottles', 'reusable', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="0">0 (None)</option>
                <option value="1">1 bottle</option>
                <option value="2">2 bottles</option>
                <option value="3">3+ bottles</option>
              </select>
            </div>
          </div>
        </div>

        {/* Shopping Bags */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Package className="w-5 h-5 text-eco-600" />
            <span>Shopping Bags</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Plastic Bags per Week
              </label>
              <select
                value={formData.bags.singleUse}
                onChange={(e) => handleInputChange('bags', 'singleUse', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="">Select...</option>
                <option value="0">0 bags</option>
                <option value="3">3 bags</option>
                <option value="5">5 bags</option>
                <option value="10">10 bags</option>
                <option value="15">15+ bags</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Reusable Bags per Week
              </label>
              <select
                value={formData.bags.reusable}
                onChange={(e) => handleInputChange('bags', 'reusable', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="0">0 bags</option>
                <option value="3">3 bags</option>
                <option value="5">5 bags</option>
                <option value="10">10+ bags</option>
              </select>
            </div>
          </div>
        </div>

        {/* Coffee Cups */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Coffee Cups</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Disposable Cups per Week
              </label>
              <select
                value={formData.cups.singleUse}
                onChange={(e) => handleInputChange('cups', 'singleUse', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="">Select...</option>
                <option value="0">0 cups</option>
                <option value="1">1 cup</option>
                <option value="3">3 cups</option>
                <option value="5">5 cups</option>
                <option value="7">7+ cups</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Reusable Cups per Week
              </label>
              <select
                value={formData.cups.reusable}
                onChange={(e) => handleInputChange('cups', 'reusable', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="0">0 cups</option>
                <option value="1">1 cup</option>
                <option value="3">3 cups</option>
                <option value="5">5+ cups</option>
              </select>
            </div>
          </div>
        </div>

        {/* Food Containers */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Food Containers</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Plastic Containers per Week
              </label>
              <select
                value={formData.containers.singleUse}
                onChange={(e) => handleInputChange('containers', 'singleUse', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="">Select...</option>
                <option value="0">0 containers</option>
                <option value="1">1 container</option>
                <option value="3">3 containers</option>
                <option value="5">5+ containers</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Reusable Containers per Week
              </label>
              <select
                value={formData.containers.reusable}
                onChange={(e) => handleInputChange('containers', 'reusable', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="0">0 containers</option>
                <option value="1">1 container</option>
                <option value="3">3 containers</option>
                <option value="5">5+ containers</option>
              </select>
            </div>
          </div>
        </div>

        {/* Plastic Straws */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Plastic Straws</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Plastic Straws per Week
              </label>
              <select
                value={formData.straws.singleUse}
                onChange={(e) => handleInputChange('straws', 'singleUse', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="">Select...</option>
                <option value="0">0 straws</option>
                <option value="3">3 straws</option>
                <option value="7">7 straws</option>
                <option value="14">14+ straws</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Reusable Straws per Week
              </label>
              <select
                value={formData.straws.reusable}
                onChange={(e) => handleInputChange('straws', 'reusable', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="0">0 straws</option>
                <option value="3">3 straws</option>
                <option value="7">7 straws</option>
                <option value="14">14+ straws</option>
              </select>
            </div>
          </div>
        </div>

        {/* Educational Section */}
        <div className="bg-eco-50 rounded-lg p-4 border border-eco-200">
          <h4 className="font-semibold text-eco-700 mb-2">💡 Plastic Waste Facts</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• 1 million plastic bottles are purchased every minute worldwide</li>
            <li>• Plastic takes 400+ years to decompose in landfills</li>
            <li>• 8 million tons of plastic enter oceans annually</li>
            <li>• By 2050, ocean plastic could outweigh all fish</li>
            <li>• Switching to reusable items can eliminate 500+ plastic items per person yearly</li>
          </ul>
        </div>
      </div>
    </CalculatorBase>
  )
}