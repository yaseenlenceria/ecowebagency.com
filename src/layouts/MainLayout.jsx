import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Add padding-top to account for fixed header */}
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}
