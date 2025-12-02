import React, { useState } from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Car, Zap, DollarSign, Leaf } from 'lucide-react'

export default function ElectricVehicleCalculator() {
  const [formData, setFormData] = useState({
    currentVehicle: {
      type: 'gasoline',
      mpg: '25',
      milesPerYear: '12000',
      gasPrice: '3.50'
    },
    electricVehicle: {
      type: 'ev',
      mpge: '120',
      electricityPrice: '0.12',
      batteryCapacity: '75',
      homeCharging: true
    },
    purchase: {
      evPrice: '45000',
      comparableGasPrice: '35000',
      taxCredit: '7500',
      yearsOfOwnership: '5'
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

  const calculateEVsavings = () => {
    const milesPerYear = parseFloat(formData.currentVehicle.milesPerYear)
    const mpg = parseFloat(formData.currentVehicle.mpg)
    const gasPrice = parseFloat(formData.currentVehicle.gasPrice)
    const mpge = parseFloat(formData.electricVehicle.mpge)
    const electricityPrice = parseFloat(formData.electricVehicle.electricityPrice)
    const evPrice = parseFloat(formData.purchase.evPrice)
    const gasPriceVehicle = parseFloat(formData.purchase.comparableGasPrice)
    const taxCredit = parseFloat(formData.purchase.taxCredit)
    const years = parseFloat(formData.purchase.yearsOfOwnership)

    // Annual fuel costs
    const annualGasCost = (milesPerYear / mpg) * gasPrice
    const annualElectricCost = (milesPerYear / mpge) * electricityPrice

    // Annual fuel savings
    const annualFuelSavings = annualGasCost - annualElectricCost

    // Maintenance costs (EVs typically require 50% less maintenance)
    const annualGasMaintenance = 800 // Average annual maintenance for gas car
    const annualEVMaintenance = 400 // Average annual maintenance for EV
    const annualMaintenanceSavings = annualGasMaintenance - annualEVMaintenance

    // Total annual savings
    const totalAnnualSavings = annualFuelSavings + annualMaintenanceSavings
    const totalSavingsOwnership = totalAnnualSavings * years

    // Net purchase cost after incentives
    const netEVCost = evPrice - taxCredit
    const priceDifference = netEVCost - gasPriceVehicle

    // Payback period
    const paybackPeriod = priceDifference / totalAnnualSavings

    // CO2 emissions (assuming 8.89 kg CO2 per gallon of gas, 0.4 kg CO2 per kWh)
    const annualGasCO2 = (milesPerYear / mpg) * 8.89
    const annualEVCO2 = (milesPerYear / mpge) * electricityPrice * 0.4
    const annualCO2Reduction = (annualGasCO2 - annualEVCO2) / 1000 // Convert to tons

    // Lifetime savings (assuming 10 years battery life)
    const lifetimeFuelSavings = annualFuelSavings * 10
    const lifetimeMaintenanceSavings = annualMaintenanceSavings * 10
    const totalLifetimeSavings = lifetimeFuelSavings + lifetimeMaintenanceSavings

    const recommendations = []
    if (paybackPeriod < 5) recommendations.push("Excellent financial case for switching to EV!")
    if (milesPerYear > 15000) recommendations.push("High mileage drivers benefit most from EV savings")
    if (gasPrice > 4.0) recommendations.push("High gas prices make EVs even more attractive")
    if (!formData.electricVehicle.homeCharging) recommendations.push("Consider installing home charging for maximum savings")
    if (annualCO2Reduction > 3) recommendations.push("Significant environmental impact with this switch!")

    setResults({
      totalEmissions: `${annualCO2Reduction.toFixed(2)} tons CO₂e/year`,
      breakdown: {
        annualFuelSavings: `$${annualFuelSavings.toFixed(2)}`,
        annualMaintenanceSavings: `$${annualMaintenanceSavings.toFixed(2)}`,
        totalAnnualSavings: `$${totalAnnualSavings.toFixed(2)}`,
        paybackPeriod: `${paybackPeriod.toFixed(1)} years`,
        lifetimeSavings: `$${totalLifetimeSavings.toFixed(2)}`,
        fuelCostComparison: `Gas: $${annualGasCost.toFixed(2)}/yr vs EV: $${annualElectricCost.toFixed(2)}/yr`
      },
      recommendations
    })
  }

  const resetForm = () => {
    setFormData({
      currentVehicle: {
        type: 'gasoline',
        mpg: '25',
        milesPerYear: '12000',
        gasPrice: '3.50'
      },
      electricVehicle: {
        type: 'ev',
        mpge: '120',
        electricityPrice: '0.12',
        batteryCapacity: '75',
        homeCharging: true
      },
      purchase: {
        evPrice: '45000',
        comparableGasPrice: '35000',
        taxCredit: '7500',
        yearsOfOwnership: '5'
      }
    })
    setResults(null)
  }

  return (
    <CalculatorBase
      title="Electric Vehicle Savings Calculator"
      description="Compare costs and environmental impact of electric vs gasoline vehicles"
      icon={Car}
      onCalculate={calculateEVsavings}
      onReset={resetForm}
      results={results}
    >
      <div className="space-y-6">
        {/* Current Vehicle */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Car className="w-5 h-5 text-eco-600" />
            <span>Current Vehicle</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Vehicle Type
              </label>
              <select
                value={formData.currentVehicle.type}
                onChange={(e) => handleInputChange('currentVehicle', 'type', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="gasoline">Gasoline</option>
                <option value="hybrid">Hybrid</option>
                <option value="diesel">Diesel</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Fuel Efficiency (MPG)
              </label>
              <select
                value={formData.currentVehicle.mpg}
                onChange={(e) => handleInputChange('currentVehicle', 'mpg', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="15">15 MPG (Truck/SUV)</option>
                <option value="20">20 MPG (Large SUV)</option>
                <option value="25">25 MPG (Average Car)</option>
                <option value="30">30 MPG (Efficient Car)</option>
                <option value="35">35 MPG (Compact Car)</option>
                <option value="40">40+ MPG (Hybrid)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Annual Miles Driven
              </label>
              <select
                value={formData.currentVehicle.milesPerYear}
                onChange={(e) => handleInputChange('currentVehicle', 'milesPerYear', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="8000">8,000 miles</option>
                <option value="12000">12,000 miles</option>
                <option value="15000">15,000 miles</option>
                <option value="20000">20,000 miles</option>
                <option value="25000">25,000+ miles</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Current Gas Price ($/gallon)
              </label>
              <select
                value={formData.currentVehicle.gasPrice}
                onChange={(e) => handleInputChange('currentVehicle', 'gasPrice', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="2.50">$2.50</option>
                <option value="3.00">$3.00</option>
                <option value="3.50">$3.50</option>
                <option value="4.00">$4.00</option>
                <option value="4.50">$4.50</option>
                <option value="5.00">$5.00+</option>
              </select>
            </div>
          </div>
        </div>

        {/* Electric Vehicle Details */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Zap className="w-5 h-5 text-eco-600" />
            <span>Electric Vehicle Details</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                EV Efficiency (MPGe)
              </label>
              <select
                value={formData.electricVehicle.mpge}
                onChange={(e) => handleInputChange('electricVehicle', 'mpge', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="80">80 MPGe (Large EV)</option>
                <option value="100">100 MPGe (Mid-size EV)</option>
                <option value="120">120 MPGe (Efficient EV)</option>
                <option value="140">140+ MPGe (Very Efficient EV)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Electricity Price ($/kWh)
              </label>
              <select
                value={formData.electricVehicle.electricityPrice}
                onChange={(e) => handleInputChange('electricVehicle', 'electricityPrice', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="0.08">$0.08 (Low rate)</option>
                <option value="0.12">$0.12 (Average)</option>
                <option value="0.15">$0.15 (High rate)</option>
                <option value="0.20">$0.20 (Very high rate)</option>
                <option value="0.25">$0.25 (Premium rate)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Battery Capacity (kWh)
              </label>
              <select
                value={formData.electricVehicle.batteryCapacity}
                onChange={(e) => handleInputChange('electricVehicle', 'batteryCapacity', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="40">40 kWh (Short range)</option>
                <option value="60">60 kWh (Standard range)</option>
                <option value="75">75 kWh (Long range)</option>
                <option value="100">100+ kWh (Extended range)</option>
              </select>
            </div>

            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.electricVehicle.homeCharging}
                  onChange={(e) => handleInputChange('electricVehicle', 'homeCharging', e.target.checked)}
                  className="w-4 h-4 text-eco-600 border-slate-300 rounded focus:ring-eco-500"
                />
                <span className="text-sm font-medium text-slate-700">I have home charging</span>
              </label>
            </div>
          </div>
        </div>

        {/* Purchase Costs */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-eco-600" />
            <span>Purchase Costs & Incentives</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                EV Purchase Price ($)
              </label>
              <input
                type="number"
                value={formData.purchase.evPrice}
                onChange={(e) => handleInputChange('purchase', 'evPrice', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="45000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Comparable Gas Vehicle Price ($)
              </label>
              <input
                type="number"
                value={formData.purchase.comparableGasPrice}
                onChange={(e) => handleInputChange('purchase', 'comparableGasPrice', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
                placeholder="35000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Available Tax Credits/Incentives ($)
              </label>
              <select
                value={formData.purchase.taxCredit}
                onChange={(e) => handleInputChange('purchase', 'taxCredit', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="0">No incentives</option>
                <option value="2500">$2,500</option>
                <option value="5000">$5,000</option>
                <option value="7500">$7,500 (Federal Credit)</option>
                <option value="10000">$10,000+ (State incentives included)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Years of Ownership
              </label>
              <select
                value={formData.purchase.yearsOfOwnership}
                onChange={(e) => handleInputChange('purchase', 'yearsOfOwnership', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-transparent"
              >
                <option value="3">3 years</option>
                <option value="5">5 years</option>
                <option value="8">8 years</option>
                <option value="10">10 years</option>
              </select>
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-eco-50 rounded-lg p-4 border border-eco-200">
            <h4 className="font-semibold text-eco-700 mb-2">⚡ Charging Benefits</h4>
            <p className="text-sm text-slate-600">Home charging costs ~60% less than public charging. Level 2 chargers add ~25 miles of range per hour.</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="font-semibold text-blue-700 mb-2">🔋 Battery Life</h4>
            <p className="text-sm text-slate-600">Modern EV batteries typically last 10-15 years with 70-80% capacity retention. Many come with 8-year/100,000-mile warranties.</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">🌱 Environmental Impact</h4>
            <p className="text-sm text-slate-600">EVs produce 60% fewer emissions over their lifetime compared to gas vehicles, even accounting for battery manufacturing.</p>
          </div>
        </div>
      </div>
    </CalculatorBase>
  )
}