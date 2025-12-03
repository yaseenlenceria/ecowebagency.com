import React from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { seoContent } from '../data/seoContent'

export default function SEOHead() {
  const location = useLocation()
  const { language, getHreflangUrls } = useLanguage()

  // Get meta content for current language
  const meta = seoContent.meta[language]

  // Get hreflang URLs for current page
  const hreflangUrls = getHreflangUrls(location.pathname)

  // Update page meta tags
  React.useEffect(() => {
    document.title = meta.title

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content = meta.description

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.content = meta.keywords

    // Remove existing hreflang tags
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]')
    existingHreflangs.forEach(tag => tag.remove())

    // Add new hreflang tags
    Object.entries(hreflangUrls).forEach(([lang, url]) => {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hrefLang = lang
      link.href = url
      document.head.appendChild(link)
    })

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = hreflangUrls[language]

    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta')
    ogTitle.property = 'og:title'
    ogTitle.content = meta.title
    if (!ogTitle.parentNode) document.head.appendChild(ogTitle)

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta')
    ogDescription.property = 'og:description'
    ogDescription.content = meta.description
    if (!ogDescription.parentNode) document.head.appendChild(ogDescription)

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta')
    ogUrl.property = 'og:url'
    ogUrl.content = hreflangUrls[language]
    if (!ogUrl.parentNode) document.head.appendChild(ogUrl)

    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta')
    ogType.property = 'og:type'
    ogType.content = 'website'
    if (!ogType.parentNode) document.head.appendChild(ogType)

  }, [language, meta, hreflangUrls, location.pathname])

  return null // This component doesn't render anything visible
}