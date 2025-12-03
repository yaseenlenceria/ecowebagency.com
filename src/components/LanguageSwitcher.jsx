import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const { language, switchLanguage, isSwedish, isEnglish } = useLanguage()

  return (
    <div className="relative inline-flex items-center bg-blue-500 rounded-lg p-1 border-2 border-blue-600 shadow-lg">
      <div className="flex items-center space-x-1">
        <button
          onClick={() => {
            console.log('SV button clicked')
            switchLanguage('sv')
          }}
          className={`
            inline-flex items-center px-4 py-2 rounded text-sm font-bold transition-all duration-200
            ${isSwedish
              ? 'bg-white text-blue-600 shadow-md'
              : 'text-white hover:bg-blue-600'
            }
          `}
        >
          <span className="mr-1">🇸🇪</span>
          SV
        </button>
        <button
          onClick={() => {
            console.log('EN button clicked')
            switchLanguage('en')
          }}
          className={`
            inline-flex items-center px-4 py-2 rounded text-sm font-bold transition-all duration-200
            ${isEnglish
              ? 'bg-white text-blue-600 shadow-md'
              : 'text-white hover:bg-blue-600'
            }
          `}
        >
          <span className="mr-1">🇬🇧</span>
          EN
        </button>
      </div>
    </div>
  )
}