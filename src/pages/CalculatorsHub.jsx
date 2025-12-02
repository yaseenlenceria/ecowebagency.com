import React from 'react'
import { Link } from 'react-router-dom'
import { Calculator, Leaf, Zap, Droplet, Home, Car, Package, Trees, Recycle } from 'lucide-react'

const calculators = [
  {
    name: 'Carbon Footprint Calculator',
    description: 'Calculate your total CO₂ emissions from travel, energy use, waste, and lifestyle habits. Get breakdown of emission sources and reduction tips.',
    icon: Leaf,
    path: '/calculators/carbon-footprint',
    color: 'eco-600'
  },
  {
    name: 'Shipping Carbon Emissions Calculator',
    description: 'Estimate CO₂ emissions from shipping packages by air, sea, or road. Compare environmental impact of different shipping methods.',
    icon: Package,
    path: '/calculators/shipping-emissions',
    color: 'blue-600'
  },
  {
    name: 'Solar Energy Savings Calculator',
    description: 'Calculate money and CO₂ savings by switching to solar power. Uses local electricity rates and sunlight hours for accurate estimates.',
    icon: Zap,
    path: '/calculators/solar-energy',
    color: 'yellow-600'
  },
  {
    name: 'Plastic Waste Reduction Calculator',
    description: 'See how many plastic bottles, bags, and containers you save by using reusable eco-products. Convert habits into annual waste reduction.',
    icon: Recycle,
    path: '/calculators/plastic-waste',
    color: 'green-600'
  },
  {
    name: 'Water Usage Calculator',
    description: 'Calculate daily, weekly, and monthly water usage from showers, washing, cooking, and cleaning. Show savings with efficient products.',
    icon: Droplet,
    path: '/calculators/water-usage',
    color: 'cyan-600'
  },
  {
    name: 'Household Energy Consumption Calculator',
    description: 'Estimate total household energy usage from appliances, lighting, heating, and cooling. Shows CO₂ emissions and monthly costs.',
    icon: Home,
    path: '/calculators/household-energy',
    color: 'orange-600'
  },
  {
    name: 'Electric Vehicle Savings Calculator',
    description: 'Compare costs of electric vs petrol/diesel vehicles. Calculate fuel savings, maintenance savings, and yearly CO₂ reduction.',
    icon: Car,
    path: '/calculators/electric-vehicle',
    color: 'purple-600'
  },
  {
    name: 'Green Building Carbon Calculator',
    description: 'Measure carbon footprint of construction materials. Help architects compare eco-friendly alternatives for building projects.',
    icon: Home,
    path: '/calculators/green-building',
    color: 'emerald-600'
  },
  {
    name: 'Tree Offset Impact Calculator',
    description: 'Calculate how many trees needed to offset specific CO₂ emissions. Shows yearly CO₂ absorption per tree and offset percentage.',
    icon: Trees,
    path: '/calculators/tree-offset',
    color: 'green-700'
  },
  {
    name: 'Sustainable Packaging Calculator',
    description: 'Compare environmental impact of plastic, paper, and biodegradable packaging. Calculate CO₂ emissions and long-term cost savings.',
    icon: Package,
    path: '/calculators/sustainable-packaging',
    color: 'teal-600'
  },
  {
    name: 'Waste Recycling Impact Calculator',
    description: 'Show how much waste you divert from landfills by recycling. Display CO₂ savings and yearly recycling impact.',
    icon: Recycle,
    path: '/calculators/waste-recycling',
    color: 'lime-600'
  },
  {
    name: 'Green Commute Calculator',
    description: 'Compare emissions between car, bike, bus, train, or walking. Calculate CO₂ saved by choosing greener transport methods.',
    icon: Car,
    path: '/calculators/green-commute',
    color: 'indigo-600'
  },
  {
    name: 'Home Insulation Energy Savings Calculator',
    description: 'Calculate energy and money savings from upgrading home insulation. Uses building size, material type, and climate zone.',
    icon: Home,
    path: '/calculators/home-insulation',
    color: 'amber-600'
  },
  {
    name: 'Carbon Neutral Business Calculator',
    description: 'Help businesses calculate total annual emissions. Suggest offset amounts and produce basic sustainability reporting metrics.',
    icon: Calculator,
    path: '/calculators/carbon-neutral-business',
    color: 'slate-600'
  },
  {
    name: 'Food Carbon Footprint Calculator',
    description: 'Calculate emissions from different diets (vegan, vegetarian, omnivore). Shows CO₂ impact of food choices per meal/week/month.',
    icon: Leaf,
    path: '/calculators/food-carbon',
    color: 'green-600'
  },
  {
    name: 'Appliance Efficiency Comparison Calculator',
    description: 'Compare energy usage and CO₂ output of household appliances. Help choose the most energy-efficient options.',
    icon: Zap,
    path: '/calculators/appliance-efficiency',
    color: 'blue-600'
  },
  {
    name: 'Rainwater Harvesting Savings Calculator',
    description: 'Calculate how much water a home can collect from rainfall and how much money it saves on water bills.',
    icon: Droplet,
    path: '/calculators/rainwater-harvesting',
    color: 'sky-600'
  },
  {
    name: 'Composting Impact Calculator',
    description: 'Show how much organic waste households can keep out of landfills by composting. Convert waste into CO₂ reduction metrics.',
    icon: Leaf,
    path: '/calculators/composting-impact',
    color: 'brown-600'
  },
  {
    name: 'Air Quality Improvement Calculator',
    description: 'Estimate indoor air quality improvements using plants, filters, and ventilation upgrades. Show pollutant reduction levels.',
    icon: Leaf,
    path: '/calculators/air-quality',
    color: 'mint-600'
  },
  {
    name: 'Energy Star Upgrade Calculator',
    description: 'Compare old appliances vs Energy Star models. Calculate money saved and CO₂ reduced over 1, 3, and 5 years.',
    icon: Zap,
    path: '/calculators/energy-star',
    color: 'blue-700'
  }
]

export default function CalculatorsHub() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-eco-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Eco Calculators Hub
            </h1>
            <p className="text-xl md:text-2xl text-eco-100 max-w-3xl mx-auto mb-8">
              Measure, understand, and reduce your environmental impact with our comprehensive suite of eco calculators.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                20+ Calculators
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                Free to Use
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                Science-Based
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculators Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc, index) => {
            const Icon = calc.icon
            return (
              <Link
                key={index}
                to={calc.path}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-eco-300"
              >
                <div className="p-6">
                  <div className={`w-12 h-12 bg-${calc.color}/100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 text-${calc.color.replace('-600', '-600')}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-eco-700 transition-colors duration-200">
                    {calc.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {calc.description}
                  </p>
                  <div className="mt-4 flex items-center text-eco-600 font-medium text-sm group-hover:text-eco-700 transition-colors duration-200">
                    Calculate Now
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-eco-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Start Your Sustainability Journey Today
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Small changes lead to big impacts. Use our calculators to understand your environmental footprint and take actionable steps toward a more sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-eco-600 text-white rounded-lg font-semibold hover:bg-eco-700 transition-colors duration-200 shadow-lg"
            >
              Get Sustainability Consulting
            </Link>
            <Link
              to="/blog"
              className="px-8 py-3 bg-white text-eco-600 border-2 border-eco-600 rounded-lg font-semibold hover:bg-eco-50 transition-colors duration-200"
            >
              Read Eco Tips
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}