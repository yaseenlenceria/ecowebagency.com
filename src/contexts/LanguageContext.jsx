import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Try to get language from localStorage, default to Swedish
    const savedLanguage = localStorage.getItem('language')
    return savedLanguage || 'sv'
  })

  const switchLanguage = (lang) => {
    console.log('Switching language to:', lang)
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key) => {
    // This would normally use the seoContent, but for now we'll return the key
    // In a real implementation, you'd import seoContent and use it
    return key
  }

  useEffect(() => {
    // Set HTML lang attribute for SEO
    document.documentElement.lang = language
  }, [language])

  const value = {
    language,
    switchLanguage,
    t,
    isSwedish: language === 'sv',
    isEnglish: language === 'en'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}