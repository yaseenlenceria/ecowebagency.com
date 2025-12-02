import React, { useState } from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Car, Bike, Bus, Train, Users } from 'lucide-react'

export default function GreenCommuteCalculator() {
  const [formData, setFormData] = useState({
    commute: {
      distance: '',
      daysPerWeek: '5',
      currentMethod: 'car',
      alternativeMethod: 'bike'
    },
    vehicle: {
      mpg: '25',
      fuelPrice: '3.50'
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

  const calculateGreenCommute = () => {
    const distance = parseFloat(formData.commute.distance) || 0
    const daysPerWeek = parseFloat(formData.commute.daysPerWeek)
    const mpg = parseFloat(formData.vehicle.mpg)
    const fuelPrice = parseFloat(formData.vehicle.fuelPrice)

    // Emission factors (kg CO2 per mile)
    const emissionFactors = {
      car: 0.411,
      truck: 0.567,
      bus: 0.089,
      train: 0.041,
      bike: 0,
      walk: 0
    }

    const currentEmissions = emissionFactors[formData.commute.currentMethod] || 0.411
    const alternativeEmissions = emissionFactors[formData.commute.alternativeMethod] || 0

    // Calculate annual emissions and costs
    const annualMiles = distance * 2 * daysPerWeek * 52 // Round trip
    const currentAnnualEmissions = annualMiles * currentEmissions / 1000 // Convert to tons
    const alternativeAnnualEmissions = annualMiles * alternativeEmissions / 1000
    const emissionReduction = currentAnnualEmissions - alternativeAnnualEmissions

    // Calculate costs for car travel
    const annualFuelCost = formData.commute.currentMethod === 'car' ?
      (annualMiles / mpg) * fuelPrice : 0

    // Calculate health benefits
    const healthBenefits = formData.commute.alternativeMethod === 'bike' || formData.commute.alternativeMethod === 'walk' ?
      (distance * 2 * daysPerWeek * 52 * 0.5) : 0 // Metabolic equivalent minutes

    const recommendations = []
    if (emissionReduction > 2) recommendations.push("Excellent choice! Your switch reduces significant CO2 emissions")
    if (formData.commute.alternativeMethod === 'bike' || formData.commute.alternativeMethod === 'walk') {
      recommendations.push("Active commuting improves health and saves money on gym membership")
    }
    if (distance > 10 && formData.commute.alternativeMethod === 'bike') {
      recommendations.push("Consider e-bike for longer commutes to make biking more feasible")
    }
    if (annualFuelCost > 1000) recommendations.push("Public transit could save you over $1000 annually in fuel costs")

    setResults({
      totalEmissions: `${emissionReduction.toFixed(2)} tons CO₂e/year`,
      breakdown: {
        currentEmissions: `${currentAnnualEmissions.toFixed(2)} tons`,
        alternativeEmissions: `${alternativeAnnualEmissions.toFixed(2)} tons`,
        annualFuelSavings: formData.commute.currentMethod === 'car' ? `$${annualFuelCost.toFixed(2)}` : '$0',
        annualMiles: `${annualMiles.toFixed(0)} miles`,
        healthMinutes: `${healthBenefits.toFixed(0)} minutes/year`
      },
      recommendations
    })
  }

  const resetForm = () => {
    setFormData({
      commute: {
        distance: '',
        daysPerWeek: '5',
        currentMethod: 'car',
        alternativeMethod: 'bike'
      },
      vehicle: {
        mpg: '25',
        fuelPrice: '3.50'
      }
    })
    setResults(null)
  }

  return (
    <CalculatorBase
      title="Green Commute Calculator"
      description="Compare emissions and costs between different commute methods"
      icon={Car}
      onCalculate={calculateGreenCommute}
      onReset={resetForm}
      results={results}
    >
      <div className="space-y-6">
        {/* Commute Details */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Car className="w-5 h-5 text-eco-600" />
            <span>Commute Details</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                One-Way Distance (miles)
              </label>
              <input
                type="number"
                value={formData.commute.distance}
                onChange={(e) => handleInputChange('commute', 'distance', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="10"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Days Per Week
              </label>
              <select
                value={formData.commute.daysPerWeek}
                onChange={(e) => handleInputChange('commute', 'daysPerWeek', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="1">1 day</option>
                <option value="2">2 days</option>
                <option value="3">3 days</option>
                <option value="4">4 days</option>
                <option value="5">5 days</option>
                <option value="7">7 days</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Current Commute Method
              </label>
              <select
                value={formData.commute.currentMethod}
                onChange={(e) => handleInputChange('commute', 'currentMethod', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="car">Car (Standard)</option>
                <option value="truck">Truck/SUV</option>
                <option value="bus">Public Bus</option>
                <option value="train">Train/Subway</option>
                <option value="bike">Bicycle</option>
                <option value="walk">Walking</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Alternative Method
              </label>
              <select
                value={formData.commute.alternativeMethod}
                onChange={(e) => handleInputChange('commute', 'alternativeMethod', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="bike">Bicycle</option>
                <option value="walk">Walking</option>
                <option value="bus">Public Bus</option>
                <option value="train">Train/Subway</option>
                <option value="car">Car (Electric/Hybrid)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Vehicle Details (if current method is car) */}
        {formData.commute.currentMethod === 'car' && (
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Vehicle Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Fuel Efficiency (MPG)
                </label>
                <select
                  value={formData.vehicle.mpg}
                  onChange={(e) => handleInputChange('vehicle', 'mpg', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                >
                  <option value="15">15 MPG (Truck/SUV)</option>
                  <option value="20">20 MPG (Large SUV)</option>
                  <option value="25">25 MPG (Average Car)</option>
                  <option value="30">30 MPG (Efficient Car)</option>
                  <option value="35">35 MPG (Compact Car)</option>
                  <option value="50">50 MPG (Hybrid)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Fuel Price ($/gallon)
                </label>
                <select
                  value={formData.vehicle.fuelPrice}
                  onChange={(e) => handleInputChange('vehicle', 'fuelPrice', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                >
                  <option value="2.50">$2.50</option>
                  <option value="3.00">$3.00</option>
                  <option value="3.50">$3.50</option>
                  <option value="4.00">$4.00</option>
                  <option value="4.50">$4.50</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Grid */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Emission Comparison</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-slate-50 rounded-lg p-3 text-center">
              <Car className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-slate-700">Car</div>
              <div className="text-xs text-slate-500">0.411 kg CO₂/mi</div>
            </div>

            <div className="bg-slate-50 rounded-lg p-3 text-center">
              <Bus className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-slate-700">Bus</div>
              <div className="text-xs text-slate-500">0.089 kg CO₂/mi</div>
            </div>

            <div className="bg-slate-50 rounded-lg p-3 text-center">
              <Train className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-slate-700">Train</div>
              <div className="text-xs text-slate-500">0.041 kg CO₂/mi</div>
            </div>

            <div className="bg-eco-50 rounded-lg p-3 text-center">
              <Bike className="w-8 h-8 text-eco-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-eco-700">Bicycle</div>
              <div className="text-xs text-eco-600">0 kg CO₂/mi</div>
            </div>

            <div className="bg-eco-50 rounded-lg p-3 text-center">
              <Users className="w-8 h-8 text-eco-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-eco-700">Walking</div>
              <div className="text-xs text-eco-600">0 kg CO₂/mi</div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-eco-50 rounded-lg p-4 border border-eco-200">
          <h4 className="font-semibold text-eco-700 mb-2">🌱 Green Commute Benefits</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• Average commuter saves 4,600 lbs of CO₂ annually by biking instead of driving</li>
            <li>• Public transit riders get 3x more physical activity than drivers</li>
            <li>• Walking or biking 2 miles/day can save $1,500+ annually on gas and maintenance</li>
            <li>• Commute alternatives reduce traffic congestion and air pollution</li>
            <li>• Active commuting improves mental health and reduces stress</li>
          </ul>
        </div>
      </div>
    </CalculatorBase>
  )
}