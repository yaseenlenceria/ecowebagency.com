import React, { useState } from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Zap } from 'lucide-react'

export default function HouseholdEnergyCalculator() {
  const [results, setResults] = useState(null)

  const calculate = () => {
    setResults({
      totalEmissions: '8.2 tons CO₂e/year',
      breakdown: {
        heating: '3.5 tons',
        cooling: '2.1 tons',
        appliances: '1.8 tons',
        lighting: '0.8 tons'
      },
      recommendations: ['Upgrade to ENERGY STAR appliances', 'Add smart thermostat', 'Switch to LED lighting']
    })
  }

  return (
    <CalculatorBase
      title="Household Energy Consumption Calculator"
      description="Estimate total household energy usage and CO₂ emissions"
      icon={Zap}
      onCalculate={calculate}
      results={results}
    >
      <div className="p-4 bg-eco-50 rounded-lg">
        <p>Coming soon! This calculator will analyze your household energy consumption.</p>
      </div>
    </CalculatorBase>
  )
}