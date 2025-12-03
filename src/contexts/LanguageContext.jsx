import React, { createContext, useContext, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()

  // Extract language from URL path
  const getLanguageFromPath = (pathname) => {
    const segments = pathname.split('/').filter(Boolean)
    const firstSegment = segments[0]

    // Check if first segment is a language code
    if (firstSegment === 'sv' || firstSegment === 'en') {
      return firstSegment
    }

    // Default to Swedish for root paths
    return 'sv'
  }

  const [language, setLanguage] = useState(() => {
    return getLanguageFromPath(location.pathname)
  })

  // Switch language with URL navigation
  const switchLanguage = (newLanguage) => {
    if (newLanguage === language) return

    const currentPath = location.pathname
    const segments = currentPath.split('/').filter(Boolean)

    let newPath
    if (segments[0] === 'sv' || segments[0] === 'en') {
      // Replace existing language segment
      segments[0] = newLanguage
      newPath = '/' + segments.join('/')
    } else {
      // Add language prefix
      newPath = `/${newLanguage}${currentPath}`
    }

    // Remove trailing slash for consistency
    if (newPath !== '/' && newPath.endsWith('/')) {
      newPath = newPath.slice(0, -1)
    }

    navigate(newPath)
  }

  // Get localized path
  const getLocalizedPath = (path, targetLanguage = language) => {
    if (!path.startsWith('/')) {
      path = '/' + path
    }

    // Remove existing language prefix if present
    const cleanPath = path.replace(/^\/(sv|en)/, '')

    // Add new language prefix
    return `/${targetLanguage}${cleanPath}`
  }

  // Update language state when URL changes
  useEffect(() => {
    const pathLanguage = getLanguageFromPath(location.pathname)
    if (pathLanguage !== language) {
      setLanguage(pathLanguage)
    }
  }, [location.pathname])

  // Set HTML lang attribute for SEO
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const value = {
    language,
    switchLanguage,
    getLocalizedPath,
    isSwedish: language === 'sv',
    isEnglish: language === 'en',
    // Helper for getting current language's alternate
    getAlternateLanguage: () => language === 'sv' ? 'en' : 'sv',
    // Helper for getting hreflang URLs
    getHreflangUrls: (currentPath) => {
      const basePath = currentPath.replace(/^\/(sv|en)/, '')
      return {
        sv: `/sv${basePath}`,
        en: `/en${basePath}`,
        'x-default': `/sv${basePath}`
      }
    }
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}