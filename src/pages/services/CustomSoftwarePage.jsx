import React from 'react'
import { Link } from 'react-router-dom'
import { Cpu, CheckCircle, ArrowRight, Zap, Shield, Layers } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

export default function CustomSoftwarePage() {
  const { isSwedish, getLocalizedPath } = useLanguage()

  const features = isSwedish ? [
    'Skräddarsydd Mjukvaruutveckling',
    'AI & Maskininlärningsintegration',
    'Arbetsflödesautomation & Processoptimering',
    'API-utveckling & Tredjepartsintegrationer',
    'Dataanalys & Business Intelligence',
    'SaaS-produktutveckling',
    'CRM & ERP-system',
    'Molninfrastruktur & DevOps',
  ] : [
    'Custom Software Development',
    'AI & Machine Learning Integration',
    'Workflow Automation & Process Optimization',
    'API Development & Third-Party Integrations',
    'Data Analytics & Business Intelligence',
    'SaaS Product Development',
    'CRM & ERP Systems',
    'Cloud Infrastructure & DevOps',
  ]

  const benefits = isSwedish ? [
    {
      icon: Zap,
      title: 'Automatisering',
      description: 'Effektivisera verksamheten och spara tid',
    },
    {
      icon: Shield,
      title: 'Skalbar',
      description: 'Byggd för att växa med er affär',
    },
    {
      icon: Layers,
      title: 'Integration',
      description: 'Anslut sömlöst alla era verktyg',
    },
  ] : [
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline operations and save time',
    },
    {
      icon: Shield,
      title: 'Scalable',
      description: 'Built to grow with your business',
    },
    {
      icon: Layers,
      title: 'Integration',
      description: 'Seamlessly connect all your tools',
    },
  ]

  // Update page meta
  React.useEffect(() => {
    document.title = isSwedish
      ? 'Skräddarsydd Mjukvara & AI-verktyg | Eco Web Agency'
      : 'Custom Software & AI Tools | Eco Web Agency'
  }, [isSwedish])

  return (
    <div className="bg-stone-50">
      <section className="relative bg-gradient-to-br from-indigo-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white mb-6">
                <Cpu className="w-8 h-8" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {isSwedish ? 'Skräddarsydd Mjukvara & AI-verktyg' : 'Custom Software & AI Tools'}
              </h1>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                {isSwedish
                  ? 'Intelligent automation och skräddarsydda lösningar för komplexa affärsutmaningar. Vi bygger mjukvara som löser era unika problem och ger er en konkurrensfördel.'
                  : 'Intelligent automation and custom solutions for complex business challenges. We build software that solves your unique problems and gives you a competitive edge.'
                }
              </p>
              <Link
                to={getLocalizedPath('quote')}
                className="inline-block px-8 py-4 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-200 shadow-xl"
              >
                {isSwedish ? 'Diskutera Ert Projekt' : 'Discuss Your Project'}
              </Link>
            </div>
            <div>
              <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl shadow-2xl aspect-square" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-indigo-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-indigo-600 mb-2">10K+</div>
              <div className="text-slate-700">{isSwedish ? 'Aktiva Användare' : 'Active Users'}</div>
            </div>
            <div className="text-center bg-indigo-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-indigo-600 mb-2">60%</div>
              <div className="text-slate-700">{isSwedish ? 'Tidsbesparing' : 'Time Savings'}</div>
            </div>
            <div className="text-center bg-indigo-50 rounded-2xl p-8">
              <div className="text-5xl font-bold text-indigo-600 mb-2">{isSwedish ? '5M kr' : '$500K'}</div>
              <div className="text-slate-700">{isSwedish ? 'Kostnadsminskning' : 'Cost Reduction'}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              {isSwedish ? 'Skräddarsydda Mjukvarutjänster' : 'Custom Software Services'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-md">
                  <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            {isSwedish ? 'Varför Skräddarsydd Mjukvara' : 'Why Custom Software'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {isSwedish ? 'Redo att Bygga Er Skräddarsydda Lösning?' : 'Ready to Build Your Custom Solution?'}
            </h2>
            <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
              {isSwedish
                ? 'Låt oss diskutera era unika utmaningar och skapa mjukvara som ger er en konkurrensfördel.'
                : "Let's discuss your unique challenges and create software that gives you a competitive advantage."
              }
            </p>
            <Link
              to={getLocalizedPath('quote')}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-indigo-700 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-all duration-200 shadow-xl"
            >
              <span>{isSwedish ? 'Boka Ett Upptäcktssamtal' : 'Schedule a Discovery Call'}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
