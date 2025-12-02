import React, { useState } from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Leaf, Car, Zap, Home, Trash2 } from 'lucide-react'

export default function CarbonFootprintCalculator() {
  const [formData, setFormData] = useState({
    transport: {
      carMilesPerYear: '',
      carFuelEfficiency: '25',
      publicTransportMiles: '',
      flightsShort: '',
      flightsLong: ''
    },
    home: {
      electricityMonthly: '',
      naturalGasMonthly: '',
      heatingOilMonthly: '',
      peopleInHousehold: '1'
    },
    waste: {
      recyclingRate: '50'
    },
    food: {
      dietType: 'omnivore'
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

  const calculateEmissions = () => {
    // Transport emissions (in kg CO2e)
    const carEmissions = (formData.transport.carMilesPerYear / formData.transport.carFuelEfficiency) * 8.89
    const publicTransportEmissions = formData.transport.publicTransportMiles * 0.1
    const flightEmissions = (formData.transport.flightsShort * 0.9) + (formData.transport.flightsLong * 2.7)

    // Home energy emissions (in kg CO2e)
    const electricityEmissions = formData.home.electricityMonthly * 12 * 0.4
    const naturalGasEmissions = formData.home.naturalGasMonthly * 12 * 5.3
    const heatingOilEmissions = formData.home.heatingOilMonthly * 12 * 10.3

    // Waste emissions (adjusted for recycling)
    const wasteEmissions = 692 * (1 - formData.waste.recyclingRate / 100)

    // Food emissions (per person per year)
    const foodEmissionFactors = {
      vegan: 1000,
      vegetarian: 1600,
      omnivore: 2500
    }
    const foodEmissions = foodEmissionFactors[formData.food.dietType] * formData.home.peopleInHousehold

    const totalKgCO2e = carEmissions + publicTransportEmissions + flightEmissions +
                       electricityEmissions + naturalGasEmissions + heatingOilEmissions +
                       wasteEmissions + foodEmissions

    const totalTonsCO2e = (totalKgCO2e / 1000).toFixed(2)

    const breakdown = {
      transport: ((carEmissions + publicTransportEmissions + flightEmissions) / 1000).toFixed(2),
      home: ((electricityEmissions + naturalGasEmissions + heatingOilEmissions) / 1000).toFixed(2),
      waste: (wasteEmissions / 1000).toFixed(2),
      food: (foodEmissions / 1000).toFixed(2)
    }

    const recommendations = []
    if (carEmissions > 2000) recommendations.push("Consider reducing car travel or switching to an electric vehicle")
    if (electricityEmissions > 3000) recommendations.push("Switch to renewable energy or reduce electricity consumption")
    if (wasteEmissions > 300) recommendations.push("Increase recycling rate and reduce waste generation")
    if (formData.food.dietType === 'omnivore') recommendations.push("Consider reducing meat consumption for lower carbon footprint")

    setResults({
      totalEmissions: `${totalTonsCO2e} tons`,
      breakdown,
      recommendations
    })
  }

  const resetForm = () => {
    setFormData({
      transport: {
        carMilesPerYear: '',
        carFuelEfficiency: '25',
        publicTransportMiles: '',
        flightsShort: '',
        flightsLong: ''
      },
      home: {
        electricityMonthly: '',
        naturalGasMonthly: '',
        heatingOilMonthly: '',
        peopleInHousehold: '1'
      },
      waste: {
        recyclingRate: '50'
      },
      food: {
        dietType: 'omnivore'
      }
    })
    setResults(null)
  }

  return (
    <CalculatorBase
      title="Carbon Footprint Calculator"
      description="Calculate your total CO₂ emissions from travel, energy use, waste, and lifestyle habits"
      icon={Leaf}
      onCalculate={calculateEmissions}
      onReset={resetForm}
      results={results}
    >
      {/* Transport Section */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Car className="w-5 h-5 text-eco-600" />
            <span>Transportation</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Annual Car Miles
              </label>
              <input
                type="number"
                value={formData.transport.carMilesPerYear}
                onChange={(e) => handleInputChange('transport', 'carMilesPerYear', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="12000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Car Fuel Efficiency (MPG)
              </label>
              <select
                value={formData.transport.carFuelEfficiency}
                onChange={(e) => handleInputChange('transport', 'carFuelEfficiency', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="15">15 MPG (Truck/Large SUV)</option>
                <option value="20">20 MPG (SUV)</option>
                <option value="25">25 MPG (Average Car)</option>
                <option value="30">30 MPG (Efficient Car)</option>
                <option value="35">35 MPG (Hybrid)</option>
                <option value="100">100 MPG (Electric)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Annual Public Transport Miles
              </label>
              <input
                type="number"
                value={formData.transport.publicTransportMiles}
                onChange={(e) => handleInputChange('transport', 'publicTransportMiles', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="1000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Short Flights (&lt;3 hours) per year
              </label>
              <input
                type="number"
                value={formData.transport.flightsShort}
                onChange={(e) => handleInputChange('transport', 'flightsShort', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Long Flights (&gt;3 hours) per year
              </label>
              <input
                type="number"
                value={formData.transport.flightsLong}
                onChange={(e) => handleInputChange('transport', 'flightsLong', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="1"
              />
            </div>
          </div>
        </div>

        {/* Home Energy Section */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Home className="w-5 h-5 text-eco-600" />
            <span>Home Energy</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Monthly Electricity Usage (kWh)
              </label>
              <input
                type="number"
                value={formData.home.electricityMonthly}
                onChange={(e) => handleInputChange('home', 'electricityMonthly', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Monthly Natural Gas (therms)
              </label>
              <input
                type="number"
                value={formData.home.naturalGasMonthly}
                onChange={(e) => handleInputChange('home', 'naturalGasMonthly', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="60"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Monthly Heating Oil (gallons)
              </label>
              <input
                type="number"
                value={formData.home.heatingOilMonthly}
                onChange={(e) => handleInputChange('home', 'heatingOilMonthly', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                People in Household
              </label>
              <select
                value={formData.home.peopleInHousehold}
                onChange={(e) => handleInputChange('home', 'peopleInHousehold', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="1">1 person</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5+ people</option>
              </select>
            </div>
          </div>
        </div>

        {/* Waste Section */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Trash2 className="w-5 h-5 text-eco-600" />
            <span>Waste & Recycling</span>
          </h3>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Recycling Rate (%)
            </label>
            <select
              value={formData.waste.recyclingRate}
              onChange={(e) => handleInputChange('waste', 'recyclingRate', e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
            >
              <option value="0">0% (No recycling)</option>
              <option value="25">25% (Some recycling)</option>
              <option value="50">50% (Average)</option>
              <option value="75">75% (Good recycling)</option>
              <option value="90">90% (Excellent recycling)</option>
            </select>
          </div>
        </div>

        {/* Food Section */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Leaf className="w-5 h-5 text-eco-600" />
            <span>Food & Diet</span>
          </h3>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Diet Type
            </label>
            <select
              value={formData.food.dietType}
              onChange={(e) => handleInputChange('food', 'dietType', e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
            >
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="omnivore">Omnivore (Average)</option>
            </select>
          </div>
        </div>
      </div>
    </CalculatorBase>
  )
}