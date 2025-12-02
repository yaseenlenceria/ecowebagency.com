import React, { useState } from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Home } from 'lucide-react'

export default function GreenBuildingCalculator() {
  const [results, setResults] = useState(null)

  const calculate = () => {
    setResults({
      totalEmissions: '15.8 tons CO₂e',
      breakdown: {
        concrete: '8.2 tons',
        steel: '4.5 tons',
        wood: '2.1 tons',
        insulation: '1.0 tons'
      },
      recommendations: ['Use recycled steel', 'Consider mass timber', 'Choose sustainable insulation']
    })
  }

  return (
    <CalculatorBase
      title="Green Building Carbon Calculator"
      description="Measure carbon footprint of construction materials"
      icon={Home}
      onCalculate={calculate}
      results={results}
    >
      <div className="p-4 bg-eco-50 rounded-lg">
        <p>Coming soon! This calculator will help architects and contractors choose eco-friendly materials.</p>
      </div>
    </CalculatorBase>
  )
}