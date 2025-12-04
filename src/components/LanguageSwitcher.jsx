import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, switchLanguage, isSwedish } = useLanguage()

  return (
    <div className="relative inline-flex items-center">
      <button
        onClick={() => switchLanguage('sv')}
        className={`
          inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 border-2
          ${isSwedish
            ? 'bg-blue-600 text-white border-blue-700 shadow-lg ring-2 ring-blue-300'
            : 'bg-blue-500 text-white border-blue-600 hover:bg-blue-600 hover:shadow-lg shadow-md'
          }
        `}
        aria-label={isSwedish ? 'Currently viewing in Swedish' : 'Switch to Swedish'}
        title={isSwedish ? 'Currently in Swedish' : 'Switch to Swedish'}
      >
        <span className="mr-2 text-lg" role="img" aria-label="Swedish flag">🇸🇪</span>
        <span className="font-semibold">Swedish</span>
      </button>
    </div>
  )
}