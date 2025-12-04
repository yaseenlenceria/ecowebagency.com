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

    // Check if first segment is Swedish language code
    if (firstSegment === 'sv') {
      return 'sv'
    }

    // Default to English for all other paths (including root and /en)
    return 'en'
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
    // Check if current path has /sv prefix
    if (segments[0] === 'sv') {
      // Remove /sv prefix
      const pathWithoutLanguage = '/' + segments.slice(1).join('/')

      if (newLanguage === 'en') {
        // Switching to English: use path without any prefix
        newPath = pathWithoutLanguage || '/'
      } else {
        // Switching to Swedish: keep /sv prefix (shouldn't happen, but handle it)
        newPath = currentPath
      }
    } else {
      // Current path is English (no prefix)
      if (newLanguage === 'sv') {
        // Switching to Swedish: add /sv prefix
        newPath = `/sv${currentPath === '/' ? '' : currentPath}`
      } else {
        // Switching to English: keep as is (shouldn't happen)
        newPath = currentPath
      }
    }

    // Remove trailing slash for consistency (except for root)
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
    const cleanPath = path.replace(/^\/sv/, '') || '/'

    // For Swedish, add /sv prefix; for English, return clean path
    if (targetLanguage === 'sv') {
      return `/sv${cleanPath === '/' ? '' : cleanPath}`
    } else {
      return cleanPath
    }
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
      const basePath = currentPath.replace(/^\/sv/, '') || '/'
      return {
        sv: `/sv${basePath === '/' ? '' : basePath}`,
        en: basePath,
        'x-default': basePath
      }
    }
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}