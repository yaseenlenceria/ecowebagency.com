import React from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Home } from 'lucide-react'

export default function HomeInsulationCalculator() {
  return (
    <CalculatorBase
      title="Home Insulation Energy Savings Calculator"
      description="Calculate energy and money savings from upgrading home insulation"
      icon={Home}
      onCalculate={() => {}}
    >
      <div className="p-4 bg-eco-50 rounded-lg">
        <p>Coming soon! This calculator will estimate insulation upgrade savings based on your home details.</p>
      </div>
    </CalculatorBase>
  )
}