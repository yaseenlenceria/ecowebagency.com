import React, { useState } from 'react'
import { Calculator, Leaf, ArrowLeft, RotateCcw, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CalculatorBase({
  title,
  description,
  icon: Icon = Calculator,
  children,
  onCalculate,
  onReset,
  results,
  showResults = true,
  backTo = '/calculators'
}) {
  const [isCalculating, setIsCalculating] = useState(false)

  const handleCalculate = async () => {
    setIsCalculating(true)
    if (onCalculate) {
      await onCalculate()
    }
    setIsCalculating(false)
  }

  const handleReset = () => {
    if (onReset) {
      onReset()
    }
  }

  const handleExport = () => {
    if (results) {
      const dataStr = JSON.stringify(results, null, 2)
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr)
      const exportFileDefaultName = `${title.toLowerCase().replace(/\s+/g, '-')}-results.json`
      const linkElement = document.createElement('a')
      linkElement.setAttribute('href', dataUri)
      linkElement.setAttribute('download', exportFileDefaultName)
      linkElement.click()
    }
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-eco-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to={backTo}
                className="flex items-center space-x-2 text-eco-100 hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Calculators</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Leaf className="w-6 h-6" />
              <span className="text-eco-100">Eco Calculator</span>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
                <p className="text-eco-100 mt-1">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-slate-800 mb-2">Enter Your Information</h2>
                <p className="text-slate-600">Fill in the details below to calculate your environmental impact.</p>
              </div>

              {children}

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  onClick={handleCalculate}
                  disabled={isCalculating}
                  className="px-6 py-3 bg-eco-600 text-white rounded-lg font-semibold hover:bg-eco-700 disabled:bg-eco-400 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg shadow-eco-600/30 flex items-center space-x-2"
                >
                  <Calculator className="w-5 h-5" />
                  <span>{isCalculating ? 'Calculating...' : 'Calculate Impact'}</span>
                </button>

                {onReset && (
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-300 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <RotateCcw className="w-5 h-5" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-1">
            {showResults && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-24">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">Results</h3>
                  <p className="text-sm text-slate-600">Your environmental impact calculations</p>
                </div>

                {results ? (
                  <div className="space-y-4">
                    <div className="bg-eco-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-eco-700">Total CO₂ Emissions</span>
                        <Leaf className="w-4 h-4 text-eco-600" />
                      </div>
                      <div className="text-2xl font-bold text-eco-800">
                        {results.totalEmissions}
                      </div>
                      <div className="text-xs text-eco-600 mt-1">
                        tons CO₂e per year
                      </div>
                    </div>

                    {/* Results Details */}
                    {results.breakdown && (
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-700">Breakdown</h4>
                        {Object.entries(results.breakdown).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center py-2 border-b border-slate-100">
                            <span className="text-sm text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                            <span className="text-sm font-medium text-slate-800">{value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Recommendations */}
                    {results.recommendations && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-slate-700 mb-2">Recommendations</h4>
                        <ul className="space-y-2">
                          {results.recommendations.slice(0, 3).map((rec, index) => (
                            <li key={index} className="text-xs text-slate-600 flex items-start space-x-2">
                              <span className="text-eco-600 mt-0.5">•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Export Button */}
                    <button
                      onClick={handleExport}
                      className="w-full px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors duration-200 flex items-center justify-center space-x-2 mt-4"
                    >
                      <Download className="w-4 h-4" />
                      <span>Export Results</span>
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calculator className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-500">Enter your information and click "Calculate Impact" to see results</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Educational Section */}
      <div className="bg-eco-50 py-12 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Understanding Your Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-eco-200">
                <h3 className="font-semibold text-eco-700 mb-2">What is CO₂e?</h3>
                <p className="text-sm text-slate-600">CO₂e (Carbon Dioxide Equivalent) is a universal unit of measurement used to compare the emissions from various greenhouse gases based on their global warming potential.</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-eco-200">
                <h3 className="font-semibold text-eco-700 mb-2">Why It Matters</h3>
                <p className="text-sm text-slate-600">Understanding your carbon footprint helps you make informed decisions that reduce your environmental impact and contribute to climate change mitigation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}