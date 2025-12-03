import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const { language, switchLanguage, isSwedish, isEnglish } = useLanguage()

  return (
    <div className="relative inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
      <div className="flex items-center space-x-1">
        <button
          onClick={() => switchLanguage('sv')}
          className={`
            inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
            ${isSwedish
              ? 'bg-white text-slate-900 shadow-md'
              : 'text-white/70 hover:text-white hover:bg-white/10'
            }
          `}
        >
          <span className="mr-1">🇸🇪</span>
          SV
        </button>
        <button
          onClick={() => switchLanguage('en')}
          className={`
            inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
            ${isEnglish
              ? 'bg-white text-slate-900 shadow-md'
              : 'text-white/70 hover:text-white hover:bg-white/10'
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