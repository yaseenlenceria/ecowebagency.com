import React from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Car } from 'lucide-react'

export default function GreenCommuteCalculator() {
  return (
    <CalculatorBase
      title="Green Commute Calculator"
      description="Compare emissions between car, bike, bus, train, or walking"
      icon={Car}
      onCalculate={() => {}}
    >
      <div className="p-4 bg-eco-50 rounded-lg">
        <p>Coming soon! This calculator will help you choose the most eco-friendly commute option.</p>
      </div>
    </CalculatorBase>
  )
}
