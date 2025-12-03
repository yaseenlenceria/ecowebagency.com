import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageDebug() {
  const { language, isSwedish, isEnglish, switchLanguage } = useLanguage()

  return (
    <div style={{
      position: 'fixed',
      top: '100px',
      right: '20px',
      background: 'red',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      zIndex: 9999,
      fontSize: '12px'
    }}>
      <div>Language: {language}</div>
      <div>isSwedish: {isSwedish.toString()}</div>
      <div>isEnglish: {isEnglish.toString()}</div>
      <button
        onClick={() => switchLanguage('sv')}
        style={{margin: '2px', padding: '2px 5px', background: 'white', color: 'black', border: 'none', borderRadius: '3px'}}
      >
        SV
      </button>
      <button
        onClick={() => switchLanguage('en')}
        style={{margin: '2px', padding: '2px 5px', background: 'white', color: 'black', border: 'none', borderRadius: '3px'}}
      >
        EN
      </button>
    </div>
  )
}