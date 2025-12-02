import React, { useState } from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Zap, Home, Thermometer, Lightbulb } from 'lucide-react'

export default function HouseholdEnergyCalculator() {
  const [formData, setFormData] = useState({
    heating: {
      type: 'natural_gas',
      usage: '800',
      efficiency: '80'
    },
    cooling: {
      type: 'central_ac',
      usage: '600',
      efficiency: '12'
    },
    appliances: {
      refrigerator: '500',
      washer: '200',
      dryer: '1000',
      dishwasher: '300',
      oven: '400'
    },
    lighting: {
      bulbCount: '20',
      bulbType: 'led',
      hoursPerDay: '4'
    },
    electronics: {
      computers: '200',
      tv: '300',
      entertainment: '150'
    },
    waterHeating: {
      type: 'electric',
      usage: '400'
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

  const calculateHouseholdEnergy = () => {
    // Calculate annual energy usage in kWh
    let annualUsage = 0

    // Heating (gas or electric)
    if (formData.heating.type === 'electric') {
      annualUsage += parseFloat(formData.heating.usage) * 12 // Convert monthly to annual
    } else {
      // Convert gas usage to equivalent electricity (1 therm = 29.3 kWh)
      const gasUsage = parseFloat(formData.heating.usage) * 12 * 29.3
      annualUsage += gasUsage
    }

    // Cooling
    annualUsage += parseFloat(formData.cooling.usage) * 12

    // Major appliances (annual usage)
    annualUsage += parseFloat(formData.appliances.refrigerator)
    annualUsage += parseFloat(formData.appliances.washer) * 52 // Weekly usage
    annualUsage += parseFloat(formData.appliances.dryer) * 52
    annualUsage += parseFloat(formData.appliances.dishwasher) * 52
    annualUsage += parseFloat(formData.appliances.oven) * 52

    // Lighting
    const bulbPower = formData.lighting.bulbType === 'led' ? 10 : formData.lighting.bulbType === 'cfl' ? 15 : 60
    const lightingUsage = (parseFloat(formData.lighting.bulbCount) * bulbPower * parseFloat(formData.lighting.hoursPerDay) * 365) / 1000
    annualUsage += lightingUsage

    // Electronics
    annualUsage += parseFloat(formData.electronics.computers) * 365 // Daily usage
    annualUsage += parseFloat(formData.electronics.tv) * 365 * 0.33 // 8 hours/day average
    annualUsage += parseFloat(formData.electronics.entertainment) * 365 * 0.5 // 12 hours/day average

    // Water heating
    annualUsage += parseFloat(formData.waterHeating.usage) * 12

    // Calculate costs and emissions
    const averageRate = 0.14 // Average electricity rate $/kWh
    const annualCost = annualUsage * averageRate

    // CO2 emissions (0.4 kg CO2 per kWh for average US grid)
    const co2Emissions = (annualUsage * 0.4) / 1000 // Convert to tons

    // Monthly breakdown
    const monthlyUsage = annualUsage / 12
    const monthlyCost = annualCost / 12

    // Potential savings with efficiency improvements
    const efficiencySavings = calculateEfficiencySavings(annualUsage)

    const recommendations = []
    if (parseFloat(formData.lighting.bulbType) !== 'led') recommendations.push("Switch to LED bulbs to save 75% on lighting costs")
    if (parseFloat(formData.cooling.efficiency) < 16) recommendations.push("Upgrade to high-efficiency AC (SEER 16+) for 30% savings")
    if (annualUsage > 12000) recommendations.push("Your usage is high - consider energy audit and major upgrades")
    if (formData.waterHeating.type === 'electric') recommendations.push("Consider heat pump water heater for 50% water heating savings")

    setResults({
      totalEmissions: `${co2Emissions.toFixed(2)} tons CO₂e/year`,
      breakdown: {
        annualUsage: `${annualUsage.toFixed(0)} kWh`,
        monthlyUsage: `${monthlyUsage.toFixed(0)} kWh`,
        annualCost: `$${annualCost.toFixed(2)}`,
        monthlyCost: `$${monthlyCost.toFixed(2)}`,
        potentialSavings: `$${efficiencySavings.toFixed(2)}/year`,
        heating: `${((formData.heating.type === 'electric' ? parseFloat(formData.heating.usage) : parseFloat(formData.heating.usage) * 29.3) * 12).toFixed(0)} kWh`,
        cooling: `${(parseFloat(formData.cooling.usage) * 12).toFixed(0)} kWh`,
        lighting: `${lightingUsage.toFixed(0)} kWh`
      },
      recommendations
    })
  }

  const calculateEfficiencySavings = (currentUsage) => {
    let savings = 0
    if (formData.lighting.bulbType !== 'led') {
      savings += currentUsage * 0.1 // 10% savings from LED upgrade
    }
    if (parseFloat(formData.cooling.efficiency) < 16) {
      savings += currentUsage * 0.15 // 15% savings from AC upgrade
    }
    if (formData.waterHeating.type === 'electric') {
      savings += currentUsage * 0.1 // 10% savings from heat pump water heater
    }
    return savings * 0.14 // Convert to dollar savings
  }

  const resetForm = () => {
    setFormData({
      heating: {
        type: 'natural_gas',
        usage: '800',
        efficiency: '80'
      },
      cooling: {
        type: 'central_ac',
        usage: '600',
        efficiency: '12'
      },
      appliances: {
        refrigerator: '500',
        washer: '200',
        dryer: '1000',
        dishwasher: '300',
        oven: '400'
      },
      lighting: {
        bulbCount: '20',
        bulbType: 'led',
        hoursPerDay: '4'
      },
      electronics: {
        computers: '200',
        tv: '300',
        entertainment: '150'
      },
      waterHeating: {
        type: 'electric',
        usage: '400'
      }
    })
    setResults(null)
  }

  return (
    <CalculatorBase
      title="Household Energy Consumption Calculator"
      description="Estimate total household energy usage and find savings opportunities"
      icon={Home}
      onCalculate={calculateHouseholdEnergy}
      onReset={resetForm}
      results={results}
    >
      <div className="space-y-6">
        {/* Heating & Cooling */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Thermometer className="w-5 h-5 text-eco-600" />
            <span>Heating & Cooling</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-slate-700 mb-3">Heating</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Heating Type
                  </label>
                  <select
                    value={formData.heating.type}
                    onChange={(e) => handleInputChange('heating', 'type', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                  >
                    <option value="natural_gas">Natural Gas</option>
                    <option value="electric">Electric</option>
                    <option value="oil">Heating Oil</option>
                    <option value="propane">Propane</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Monthly Usage ({formData.heating.type === 'electric' ? 'kWh' : 'therms'})
                  </label>
                  <input
                    type="number"
                    value={formData.heating.usage}
                    onChange={(e) => handleInputChange('heating', 'usage', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                    placeholder="800"
                  />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-slate-700 mb-3">Cooling</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    AC Type
                  </label>
                  <select
                    value={formData.cooling.type}
                    onChange={(e) => handleInputChange('cooling', 'type', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                  >
                    <option value="central_ac">Central AC</option>
                    <option value="heat_pump">Heat Pump</option>
                    <option value="window_ac">Window AC</option>
                    <option value="none">No AC</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Monthly Usage (kWh)
                  </label>
                  <input
                    type="number"
                    value={formData.cooling.usage}
                    onChange={(e) => handleInputChange('cooling', 'usage', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                    placeholder="600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    AC Efficiency (SEER)
                  </label>
                  <select
                    value={formData.cooling.efficiency}
                    onChange={(e) => handleInputChange('cooling', 'efficiency', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                  >
                    <option value="10">10 SEER (Old unit)</option>
                    <option value="12">12 SEER (Standard)</option>
                    <option value="14">14 SEER (Efficient)</option>
                    <option value="16">16 SEER (High-efficiency)</option>
                    <option value="20">20+ SEER (Premium)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appliances */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Zap className="w-5 h-5 text-eco-600" />
            <span>Major Appliances</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Refrigerator (kWh/year)
              </label>
              <select
                value={formData.appliances.refrigerator}
                onChange={(e) => handleInputChange('appliances', 'refrigerator', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="300">300 kWh (ENERGY STAR)</option>
                <option value="500">500 kWh (Modern)</option>
                <option value="700">700 kWh (Old unit)</option>
                <option value="900">900 kWh (Very old)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Clothes Washer (kWh/load)
              </label>
              <select
                value={formData.appliances.washer}
                onChange={(e) => handleInputChange('appliances', 'washer', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="100">100 kWh (ENERGY STAR)</option>
                <option value="200">200 kWh (Standard)</option>
                <option value="300">300 kWh (Old unit)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Clothes Dryer (kWh/load)
              </label>
              <select
                value={formData.appliances.dryer}
                onChange={(e) => handleInputChange('appliances', 'dryer', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="500">500 kWh (Heat pump)</option>
                <option value="1000">1000 kWh (Electric)</option>
                <option value="1500">1500 kWh (Old unit)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Dishwasher (kWh/load)
              </label>
              <select
                value={formData.appliances.dishwasher}
                onChange={(e) => handleInputChange('appliances', 'dishwasher', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="200">200 kWh (ENERGY STAR)</option>
                <option value="300">300 kWh (Standard)</option>
                <option value="400">400 kWh (Old unit)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Electric Oven (kWh/use)
              </label>
              <select
                value={formData.appliances.oven}
                onChange={(e) => handleInputChange('appliances', 'oven', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="300">300 kWh (Modern)</option>
                <option value="400">400 kWh (Standard)</option>
                <option value="500">500 kWh (Old unit)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Water Heating (kWh/month)
              </label>
              <select
                value={formData.waterHeating.usage}
                onChange={(e) => handleInputChange('waterHeating', 'usage', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="300">300 kWh (Heat pump)</option>
                <option value="400">400 kWh (Standard)</option>
                <option value="500">500 kWh (Old unit)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lighting */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Lightbulb className="w-5 h-5 text-eco-600" />
            <span>Lighting</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Number of Bulbs
              </label>
              <input
                type="number"
                value={formData.lighting.bulbCount}
                onChange={(e) => handleInputChange('lighting', 'bulbCount', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Bulb Type
              </label>
              <select
                value={formData.lighting.bulbType}
                onChange={(e) => handleInputChange('lighting', 'bulbType', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="led">LED (10W)</option>
                <option value="cfl">CFL (15W)</option>
                <option value="incandescent">Incandescent (60W)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Hours Per Day
              </label>
              <input
                type="number"
                value={formData.lighting.hoursPerDay}
                onChange={(e) => handleInputChange('lighting', 'hoursPerDay', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="4"
              />
            </div>
          </div>
        </div>

        {/* Electronics */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Electronics</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Computers (kWh/day)
              </label>
              <input
                type="number"
                value={formData.electronics.computers}
                onChange={(e) => handleInputChange('electronics', 'computers', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                TV & Entertainment (kWh/day)
              </label>
              <input
                type="number"
                value={formData.electronics.tv}
                onChange={(e) => handleInputChange('electronics', 'tv', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Other Electronics (kWh/day)
              </label>
              <input
                type="number"
                value={formData.electronics.entertainment}
                onChange={(e) => handleInputChange('electronics', 'entertainment', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="150"
              />
            </div>
          </div>
        </div>

        {/* Energy Saving Tips */}
        <div className="bg-eco-50 rounded-lg p-4 border border-eco-200">
          <h4 className="font-semibold text-eco-700 mb-2">💡 Energy Saving Tips</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• LED bulbs use 75% less energy and last 25x longer than incandescent bulbs</li>
            <li>• Smart thermostats can reduce heating/cooling costs by 10-15%</li>
            <li>• ENERGY STAR appliances are 10-50% more efficient than standard models</li>
            <li>• Unplug electronics when not in use to avoid phantom power drain</li>
            <li>• Regular HVAC maintenance can improve efficiency by 5-10%</li>
          </ul>
        </div>
      </div>
    </CalculatorBase>
  )
}