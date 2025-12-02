import React from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Calculator } from 'lucide-react'

export default function CarbonNeutralBusinessCalculator() {
  return (
    <CalculatorBase
      title="CarbonNeutralBusiness Calculator"
      description="Coming soon: Calculate your environmental impact"
      icon={Calculator}
      onCalculate={() => {}}
    >
      <div className="p-4 bg-eco-50 rounded-lg">
        <p>This calculator is currently under development. Check back soon for detailed environmental calculations!</p>
      </div>
    </CalculatorBase>
  )
}
