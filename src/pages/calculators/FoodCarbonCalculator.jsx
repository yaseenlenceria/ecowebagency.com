import React, { useState } from 'react'
import CalculatorBase from '../../components/CalculatorBase'
import { Leaf, Beef, Fish } from 'lucide-react'

export default function FoodCarbonCalculator() {
  const [formData, setFormData] = useState({
    diet: 'omnivore',
    beef: '2',
    chicken: '3',
    fish: '2',
    dairy: '2',
    eggs: '1',
    vegetables: '5',
    grains: '4',
    organic: '25'
  })

  const [results, setResults] = useState(null)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const calculateFoodCarbon = () => {
    const emissionsPerServing = {
      beef: 6.6,
      chicken: 1.1,
      fish: 1.7,
      dairy: 1.2,
      eggs: 0.8,
      vegetables: 0.2,
      grains: 0.3
    }

    const weeklyBeef = (parseFloat(formData.beef) || 0) * emissionsPerServing.beef
    const weeklyChicken = (parseFloat(formData.chicken) || 0) * emissionsPerServing.chicken
    const weeklyFish = (parseFloat(formData.fish) || 0) * emissionsPerServing.fish
    const weeklyDairy = (parseFloat(formData.dairy) || 0) * emissionsPerServing.dairy
    const weeklyEggs = (parseFloat(formData.eggs) || 0) * emissionsPerServing.eggs
    const weeklyVegetables = (parseFloat(formData.vegetables) || 0) * emissionsPerServing.vegetables
    const weeklyGrains = (parseFloat(formData.grains) || 0) * emissionsPerServing.grains

    const totalWeekly = weeklyBeef + weeklyChicken + weeklyFish + weeklyDairy + weeklyEggs + weeklyVegetables + weeklyGrains
    const totalAnnual = totalWeekly * 52

    const organicReduction = parseFloat(formData.organic) / 100 * 0.2
    const adjustedEmissions = totalAnnual * (1 - organicReduction)
    const adjustedTons = adjustedEmissions / 1000

    const recommendations = []
    if (weeklyBeef > 10) recommendations.push("Reducing beef consumption can significantly lower your food carbon footprint")
    if (parseFloat(formData.organic) < 50) recommendations.push("Choosing more organic foods reduces emissions by up to 20%")
    if (weeklyVegetables < 5) recommendations.push("Eating more plant-based meals reduces carbon footprint")
    if (adjustedTons > 2) recommendations.push("Your diet has high emissions - consider more plant-based options")

    setResults({
      totalEmissions: `${adjustedTons.toFixed(2)} tons CO₂e/year`,
      breakdown: {
        beef: `${(weeklyBeef * 52).toFixed(1)} kg CO₂e/year`,
        chicken: `${(weeklyChicken * 52).toFixed(1)} kg CO₂e/year`,
        fish: `${(weeklyFish * 52).toFixed(1)} kg CO₂e/year`,
        dairy: `${(weeklyDairy * 52).toFixed(1)} kg CO₂e/year`,
        plantBased: `${((weeklyVegetables + weeklyGrains) * 52).toFixed(1)} kg CO₂e/year`,
        weeklyTotal: `${totalWeekly.toFixed(1)} kg CO₂e/week`,
        organicSavings: `${(totalAnnual - adjustedEmissions).toFixed(1)} kg CO₂e/year`
      },
      recommendations
    })
  }

  const resetForm = () => {
    setFormData({
      diet: 'omnivore',
      beef: '2',
      chicken: '3',
      fish: '2',
      dairy: '2',
      eggs: '1',
      vegetables: '5',
      grains: '4',
      organic: '25'
    })
    setResults(null)
  }

  return (
    <CalculatorBase
      title="Food Carbon Footprint Calculator"
      description="Calculate emissions from different diets and food choices"
      icon={Leaf}
      onCalculate={calculateFoodCarbon}
      onReset={resetForm}
      results={results}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Diet Type</label>
          <select value={formData.diet} onChange={(e) => handleInputChange('diet', e.target.value)} className="w-full px-3 py-2 border rounded-lg">
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="omnivore">Omnivore</option>
          </select>
        </div>

        {['beef', 'chicken', 'fish', 'dairy', 'eggs', 'vegetables', 'grains'].map(food => (
          <div key={food}>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {food.charAt(0).toUpperCase() + food.slice(1)} (servings per week)
            </label>
            <input
              type="number"
              value={formData[food]}
              onChange={(e) => handleInputChange(food, e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="0"
            />
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Organic Percentage (%)</label>
          <input
            type="number"
            value={formData.organic}
            onChange={(e) => handleInputChange('organic', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="25"
          />
        </div>
      </div>
    </CalculatorBase>
  )
}