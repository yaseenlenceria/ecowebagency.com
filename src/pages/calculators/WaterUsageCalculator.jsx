import React, { useState } from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Droplet, Droplets, Bath, Home } from 'lucide-react'

export default function WaterUsageCalculator() {
  const [formData, setFormData] = useState({
    showers: {
      frequency: 'daily',
      duration: '8',
      flowRate: '2.5'
    },
    baths: {
      perWeek: '1'
    },
    toilet: {
      flushesPerDay: '5',
      toiletType: 'standard'
    },
    sinks: {
      minutesPerDay: '10',
      efficient: false
    },
    laundry: {
      loadsPerWeek: '3',
      machineType: 'standard'
    },
    dishes: {
      dishwasherLoadsPerWeek: '3',
      handWashMinutesPerDay: '5'
    },
    outdoor: {
      wateringMinutesPerWeek: '0',
      poolMinutesPerMonth: '0'
    },
    leaks: {
      hasLeaks: false,
      leakyFaucets: '0'
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

  const calculateWaterUsage = () => {
    // Calculate daily water usage in gallons

    // Showers
    const showerFrequency = formData.showers.frequency === 'daily' ? 7 : formData.showers.frequency === 'twice' ? 14 : 0
    const weeklyShowerGallons = showerFrequency * parseFloat(formData.showers.duration) * parseFloat(formData.showers.flowRate)

    // Baths
    const weeklyBathGallons = parseFloat(formData.baths.perWeek) * 35 // Average bath uses 35 gallons

    // Toilets
    const toiletGallonsPerFlush = formData.toilet.toiletType === 'standard' ? 3.5 : formData.toilet.toiletType === 'low' ? 1.6 : 1.28
    const weeklyToiletGallons = parseFloat(formData.toilet.flushesPerDay) * 7 * toiletGallonsPerFlush

    // Sinks
    const sinkGPM = parseFloat(formData.sinks.efficient) ? 1.5 : 2.2
    const weeklySinkGallons = parseFloat(formData.sinks.minutesPerDay) * 7 * sinkGPM

    // Laundry
    const laundryGallonsPerLoad = formData.laundry.machineType === 'standard' ? 40 : formData.laundry.machineType === 'efficient' ? 25 : 15
    const weeklyLaundryGallons = parseFloat(formData.laundry.loadsPerWeek) * laundryGallonsPerLoad

    // Dishes
    const dishwasherGallonsPerLoad = 6 // Modern dishwashers
    const weeklyDishwasherGallons = parseFloat(formData.dishes.dishwasherLoadsPerWeek) * dishwasherGallonsPerLoad
    const weeklyHandWashGallons = parseFloat(formData.dishes.handWashMinutesPerDay) * 7 * 2 // 2 gallons per minute hand washing

    // Outdoor
    const weeklyOutdoorGallons = parseFloat(formData.outdoor.wateringMinutesPerWeek) * 10 // 10 gallons per minute average
    const weeklyPoolGallons = parseFloat(formData.outdoor.poolMinutesPerMonth) / 4.33 * 15 // Average pool fill rate

    // Leaks
    const weeklyLeakGallons = formData.leaks.hasLeaks ?
      (parseFloat(formData.leaks.leakyFaucets) || 1) * 7 * 20 : 0 // 20 gallons per day per leaky faucet

    // Total weekly usage
    const totalWeeklyGallons = weeklyShowerGallons + weeklyBathGallons + weeklyToiletGallons +
                              weeklySinkGallons + weeklyLaundryGallons + weeklyDishwasherGallons +
                              weeklyHandWashGallons + weeklyOutdoorGallons + weeklyPoolGallons + weeklyLeakGallons

    const dailyUsage = totalWeeklyGallons / 7
    const monthlyUsage = dailyUsage * 30
    const yearlyUsage = dailyUsage * 365

    // Calculate potential savings
    const efficientShowerSavings = (parseFloat(formData.showers.flowRate) - 1.8) * parseFloat(formData.showers.duration) * (showerFrequency / 7) * 365
    const efficientToiletSavings = (toiletGallonsPerFlush - 1.28) * parseFloat(formData.toilet.flushesPerDay) * 365
    const efficientLaundrySavings = formData.laundry.machineType === 'standard' ? 15 * parseFloat(formData.laundry.loadsPerWeek) * 52 : 0

    const totalPotentialSavings = efficientShowerSavings + efficientToiletSavings + efficientLaundrySavings

    // Calculate cost (average $1.50 per 1000 gallons in US)
    const yearlyCost = (yearlyUsage / 1000) * 1.50
    const potentialSavings = (totalPotentialSavings / 1000) * 1.50

    const recommendations = []
    if (parseFloat(formData.showers.flowRate) > 2.0) recommendations.push("Install low-flow showerheads to save water and energy")
    if (formData.toilet.toiletType === 'standard') recommendations.push("Upgrade to WaterSense toilets to cut toilet water use by 60%")
    if (formData.laundry.machineType === 'standard') recommendations.push("Switch to ENERGY STAR washing machines to save 40% water")
    if (formData.leaks.hasLeaks) recommendations.push("Fix leaky faucets immediately - they waste thousands of gallons annually")
    if (parseFloat(formData.outdoor.wateringMinutesPerWeek) > 0) recommendations.push("Install drip irrigation or water during cooler hours")

    setResults({
      totalEmissions: `${((dailyUsage * 365 * 0.004) / 1000).toFixed(2)} tons CO₂e/year`,
      breakdown: {
        dailyUsage: `${dailyUsage.toFixed(0)} gallons`,
        monthlyUsage: `${monthlyUsage.toFixed(0)} gallons`,
        yearlyUsage: `${yearlyUsage.toFixed(0)} gallons`,
        yearlyCost: `$${yearlyCost.toFixed(2)}`,
        potentialSavings: `${(totalPotentialSavings / 365).toFixed(0)} gallons/day`
      },
      recommendations
    })
  }

  const resetForm = () => {
    setFormData({
      showers: {
        frequency: 'daily',
        duration: '8',
        flowRate: '2.5'
      },
      baths: {
        perWeek: '1'
      },
      toilet: {
        flushesPerDay: '5',
        toiletType: 'standard'
      },
      sinks: {
        minutesPerDay: '10',
        efficient: false
      },
      laundry: {
        loadsPerWeek: '3',
        machineType: 'standard'
      },
      dishes: {
        dishwasherLoadsPerWeek: '3',
        handWashMinutesPerDay: '5'
      },
      outdoor: {
        wateringMinutesPerWeek: '0',
        poolMinutesPerMonth: '0'
      },
      leaks: {
        hasLeaks: false,
        leakyFaucets: '0'
      }
    })
    setResults(null)
  }

  return (
    <CalculatorBase
      title="Water Usage Calculator"
      description="Calculate your daily, weekly, and monthly water usage and find savings opportunities"
      icon={Droplet}
      onCalculate={calculateWaterUsage}
      onReset={resetForm}
      results={results}
    >
      <div className="space-y-6">
        {/* Bathroom Usage */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Droplets className="w-5 h-5 text-eco-600" />
            <span>Bathroom Usage</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Shower Frequency
              </label>
              <select
                value={formData.showers.frequency}
                onChange={(e) => handleInputChange('showers', 'frequency', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="daily">Daily</option>
                <option value="twice">Twice daily</option>
                <option value="0">Don't shower at home</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Average Shower Duration (minutes)
              </label>
              <select
                value={formData.showers.duration}
                onChange={(e) => handleInputChange('showers', 'duration', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="5">5 minutes</option>
                <option value="8">8 minutes</option>
                <option value="10">10 minutes</option>
                <option value="15">15 minutes</option>
                <option value="20">20+ minutes</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Shower Flow Rate (GPM)
              </label>
              <select
                value={formData.showers.flowRate}
                onChange={(e) => handleInputChange('showers', 'flowRate', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="1.8">1.8 GPM (Low-flow)</option>
                <option value="2.0">2.0 GPM (Efficient)</option>
                <option value="2.5">2.5 GPM (Standard)</option>
                <option value="3.5">3.5+ GPM (Old shower)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Baths per Week
              </label>
              <select
                value={formData.baths.perWeek}
                onChange={(e) => handleInputChange('baths', 'perWeek', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="0">None</option>
                <option value="1">1 per week</option>
                <option value="3">3 per week</option>
                <option value="7">Daily</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Toilet Flushes per Day
              </label>
              <select
                value={formData.toilet.flushesPerDay}
                onChange={(e) => handleInputChange('toilet', 'flushesPerDay', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="3">3 flushes</option>
                <option value="5">5 flushes</option>
                <option value="8">8 flushes</option>
                <option value="10">10+ flushes</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Toilet Type
              </label>
              <select
                value={formData.toilet.toiletType}
                onChange={(e) => handleInputChange('toilet', 'toiletType', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="standard">Standard (3.5+ GPF)</option>
                <option value="low">Low-flow (1.6 GPF)</option>
                <option value="efficient">High-efficiency (1.28 GPF)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Kitchen and Laundry */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Home className="w-5 h-5 text-eco-600" />
            <span>Kitchen & Laundry</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Sink Usage (minutes/day)
              </label>
              <select
                value={formData.sinks.minutesPerDay}
                onChange={(e) => handleInputChange('sinks', 'minutesPerDay', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="5">5 minutes</option>
                <option value="10">10 minutes</option>
                <option value="20">20 minutes</option>
                <option value="30">30+ minutes</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Faucet Type
              </label>
              <select
                value={formData.sinks.efficient}
                onChange={(e) => handleInputChange('sinks', 'efficient', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="true">Low-flow (1.5 GPM)</option>
                <option value="false">Standard (2.2+ GPM)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Laundry Loads per Week
              </label>
              <select
                value={formData.laundry.loadsPerWeek}
                onChange={(e) => handleInputChange('laundry', 'loadsPerWeek', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="1">1 load</option>
                <option value="3">3 loads</option>
                <option value="5">5 loads</option>
                <option value="10">10+ loads</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Washing Machine Type
              </label>
              <select
                value={formData.laundry.machineType}
                onChange={(e) => handleInputChange('laundry', 'machineType', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="standard">Standard (40+ gallons/load)</option>
                <option value="efficient">Efficient (25 gallons/load)</option>
                <option value="high">High-efficiency (15 gallons/load)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Dishwasher Loads per Week
              </label>
              <select
                value={formData.dishes.dishwasherLoadsPerWeek}
                onChange={(e) => handleInputChange('dishes', 'dishwasherLoadsPerWeek', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="0">None (hand wash only)</option>
                <option value="3">3 loads</option>
                <option value="5">5 loads</option>
                <option value="7">Daily</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Hand Washing (minutes/day)
              </label>
              <select
                value={formData.dishes.handWashMinutesPerDay}
                onChange={(e) => handleInputChange('dishes', 'handWashMinutesPerDay', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="0">None</option>
                <option value="5">5 minutes</option>
                <option value="10">10 minutes</option>
                <option value="15">15+ minutes</option>
              </select>
            </div>
          </div>
        </div>

        {/* Outdoor Usage */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Droplet className="w-5 h-5 text-eco-600" />
            <span>Outdoor Usage</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Lawn/Garden Watering (minutes/week)
              </label>
              <select
                value={formData.outdoor.wateringMinutesPerWeek}
                onChange={(e) => handleInputChange('outdoor', 'wateringMinutesPerWeek', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="0">None</option>
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="120">2 hours</option>
                <option value="240">4+ hours</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Pool/Spa Filling (minutes/month)
              </label>
              <select
                value={formData.outdoor.poolMinutesPerMonth}
                onChange={(e) => handleInputChange('outdoor', 'poolMinutesPerMonth', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="0">No pool</option>
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="120">2+ hours</option>
              </select>
            </div>
          </div>
        </div>

        {/* Leaks */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Leaks & Maintenance</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.leaks.hasLeaks}
                  onChange={(e) => handleInputChange('leaks', 'hasLeaks', e.target.checked)}
                  className="w-4 h-4 text-eco-600 border-slate-300 rounded focus:ring-eco-500"
                />
                <span className="text-sm font-medium text-slate-700">I have leaky faucets or pipes</span>
              </label>
            </div>

            {formData.leaks.hasLeaks && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Number of leaky fixtures
                </label>
                <select
                  value={formData.leaks.leakyFaucets}
                  onChange={(e) => handleInputChange('leaks', 'leakyFaucets', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                >
                  <option value="1">1 fixture</option>
                  <option value="2">2 fixtures</option>
                  <option value="3">3 fixtures</option>
                  <option value="4">4+ fixtures</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-eco-50 rounded-lg p-4 border border-eco-200">
          <h4 className="font-semibold text-eco-700 mb-2">💧 Water Saving Tips</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• Turn off tap while brushing teeth - saves 8 gallons per day</li>
            <li>• Only run full loads in dishwasher and washing machine</li>
            <li>• Use a broom instead of hose to clean outdoor areas</li>
            <li>• Install rain sensors on irrigation systems</li>
          </ul>
        </div>
      </div>
    </CalculatorBase>
  )
}