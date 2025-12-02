import React from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Recycle } from 'lucide-react'

export default function WasteRecyclingCalculator() {
  return (
    <CalculatorBase
      title="Waste Recycling Impact Calculator"
      description="Calculate CO₂ savings from recycling paper, metal, glass, and plastic"
      icon={Recycle}
      onCalculate={() => {}}
    >
      <div className="p-4 bg-eco-50 rounded-lg">
        <p>Coming soon! This calculator will show your recycling impact and CO₂ savings.</p>
      </div>
    </CalculatorBase>
  )
}
