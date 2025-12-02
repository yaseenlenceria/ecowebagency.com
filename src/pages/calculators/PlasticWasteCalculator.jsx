import React, { useState } from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Recycle } from 'lucide-react'

export default function PlasticWasteCalculator() {
  const [results, setResults] = useState(null)

  const calculate = () => {
    setResults({
      totalEmissions: '2.5 tons CO₂e/year',
      breakdown: {
        bottlesSaved: '365 bottles/year',
        bagsSaved: '520 bags/year',
        wasteReduction: '45 lbs plastic/year'
      },
      recommendations: ['Switch to reusable water bottles', 'Use cloth shopping bags', 'Choose glass or metal containers']
    })
  }

  return (
    <CalculatorBase
      title="Plastic Waste Reduction Calculator"
      description="Calculate how many plastic items you save with reusable products"
      icon={Recycle}
      onCalculate={calculate}
      results={results}
    >
      <div className="p-4 bg-eco-50 rounded-lg">
        <p>Coming soon! This calculator will help you track your plastic waste reduction.</p>
      </div>
    </CalculatorBase>
  )
}