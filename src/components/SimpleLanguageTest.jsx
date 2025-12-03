import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function SimpleLanguageTest() {
  const { language, switchLanguage } = useLanguage()

  const handleLanguageChange = (newLang) => {
    console.log(`Changing language from ${language} to ${newLang}`)
    switchLanguage(newLang)
    console.log(`Language should now be ${newLang}`)
  }

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      left: '10px',
      background: 'red',
      color: 'white',
      padding: '20px',
      zIndex: 9999,
      borderRadius: '10px'
    }}>
      <h3>Language Test</h3>
      <p>Current: {language}</p>
      <button
        onClick={() => handleLanguageChange('sv')}
        style={{
          background: language === 'sv' ? 'white' : 'blue',
          color: language === 'sv' ? 'blue' : 'white',
          margin: '5px',
          padding: '10px',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Svenska
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        style={{
          background: language === 'en' ? 'white' : 'blue',
          color: language === 'en' ? 'blue' : 'white',
          margin: '5px',
          padding: '10px',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        English
      </button>
    </div>
  )
}