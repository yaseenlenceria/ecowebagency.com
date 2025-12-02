import React from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Package } from 'lucide-react'

export default function SustainablePackagingCalculator() {
  return (
    <CalculatorBase
      title="Sustainable Packaging Calculator"
      description="Compare environmental impact of different packaging materials"
      icon={Package}
      onCalculate={() => {}}
    >
      <div className="p-4 bg-eco-50 rounded-lg">
        <p>Coming soon! This calculator will compare plastic, paper, and biodegradable packaging options.</p>
      </div>
    </CalculatorBase>
  )
}