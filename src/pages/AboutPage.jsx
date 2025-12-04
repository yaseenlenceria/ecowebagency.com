import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import {
  Target,
  Heart,
  Zap,
  Users,
  Award,
  TrendingUp,
  Leaf,
  Globe,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

export default function AboutPage() {
  const { language, isSwedish, getLocalizedPath } = useLanguage()

  const content = {
    sv: {
      hero: {
        badge: 'Bygger en Grönare Digital Framtid',
        title: 'Vi är Inte Bara En Byrå Till',
        description: 'Vi är ett team av passionerade digitala experter dedikerade till att hjälpa företag växa hållbart. Grundade 2017 har vi hjälpt över 150 företag att transformera sin online-närvaro och dominera sina marknader.'
      },
      story: {
        title: 'Vår Berättelse: Byggd på Resultat, Inte Löften',
        paragraphs: [
          'Eco Web Agency grundades 2017 av Sarah Johnson, en digital strateg frustrerad över byråer som lovade för mycket och levererade för lite. Hon föreställde sig en annan typ av byrå—en som prioriterade transparent kommunikation, mätbara resultat och hållbara affärsmetoder.',
          'Vad som började som en enmansbyrå har vuxit till ett team på 20+ specialister, alla förenade av ett gemensamt uppdrag: att hjälpa företag uppnå hållbar digital tillväxt samtidigt som vi minimerar miljöpåverkan.',
          'Idag är vi stolta över att vara en koldioxidneutral byrå som använder grön hosting, distansarbete och miljövänliga metoder i allt vi gör. Men vårt engagemang går bortom hållbarhet—vi är besatta av att leverera verkliga, mätbara resultat för våra kunder.'
        ],
        cta: {
          primary: 'Se Vårt Arbete',
          secondary: 'Kontakta Oss'
        }
      },
      values: {
        title: 'Våra Kärnvärden',
        subtitle: 'Dessa principer vägleder varje beslut vi fattar och varje projekt vi genomför',
        items: [
          {
            title: 'Resultatdrivet',
            description: 'Varje strategi är byggd kring mätbara resultat och ROI.'
          },
          {
            title: 'Kundfokuserat',
            description: 'Din framgång är vår framgång. Vi behandlar ditt företag som vårt eget.'
          },
          {
            title: 'Innovation',
            description: 'Vi ligger steget före trender och utnyttjar banbrytande teknologier.'
          },
          {
            title: 'Hållbarhet',
            description: 'Miljövänliga metoder i allt vi gör, från hosting till verksamhet.'
          },
          {
            title: 'Transparens',
            description: 'Tydlig kommunikation, ärlig rapportering och inga dolda agendor.'
          },
          {
            title: 'Samarbete',
            description: 'Vi arbetar som en förlängning av ditt team, inte bara som en leverantör.'
          }
        ]
      },
      team: {
        title: 'Möt Vårt Ledningsteam',
        subtitle: 'Erfarna proffs dedikerade till din framgång',
        members: [
          {
            name: 'Sarah Johnson',
            role: 'Grundare & VD',
            description: 'Digital strateg med 12+ års erfarenhet av att bygga framgångsrika online-varumärken.'
          },
          {
            name: 'Michael Chen',
            role: 'Utvecklingschef',
            description: 'Full-stack-expert som byggt 200+ webbapplikationer.'
          },
          {
            name: 'Emma Rodriguez',
            role: 'Kreativ Direktör',
            description: 'Prisbelönt designer passionerad om vacker, funktionell design.'
          },
          {
            name: 'David Park',
            role: 'SEO & Tillväxtchef',
            description: 'Datavetare omvandlad till SEO-expert med bevisad meritlista.'
          }
        ]
      },
      milestones: {
        title: 'Vår Resa',
        subtitle: 'Viktiga milstolpar i vår tillväxthistoria',
        items: [
          { year: '2017', title: 'Grundad', description: 'Startade med en vision om hållbar digital tillväxt' },
          { year: '2019', title: '50 Kunder', description: 'Nådde 50 nöjda kunder milstolpen' },
          { year: '2021', title: 'Teamexpansion', description: 'Växte till 20+ interna specialister' },
          { year: '2023', title: 'Branschledare', description: '150+ kunder och flera utmärkelser' }
        ]
      },
      cta: {
        title: 'Redo att Samarbeta?',
        description: 'Gå med i 150+ företag som litar på oss med sin digitala tillväxt. Låt oss diskutera hur vi kan hjälpa dig att nå dina mål.',
        primary: 'Få Din Gratis Offert',
        secondary: 'Boka Ett Samtal'
      }
    },
    en: {
      hero: {
        badge: 'Building a Greener Digital Future',
        title: 'We\'re Not Just Another Agency',
        description: 'We\'re a team of passionate digital experts committed to helping businesses grow sustainably. Founded in 2017, we\'ve helped over 150 companies transform their online presence and dominate their markets.'
      },
      story: {
        title: 'Our Story: Built on Results, Not Promises',
        paragraphs: [
          'Eco Web Agency was founded in 2017 by Sarah Johnson, a digital strategist frustrated with agencies that overpromised and underdelivered. She envisioned a different kind of agency—one that prioritized transparent communication, measurable results, and sustainable business practices.',
          'What started as a one-person operation has grown into a team of 20+ specialists, all united by a common mission: to help businesses achieve sustainable digital growth while minimizing environmental impact.',
          'Today, we\'re proud to be a carbon-neutral agency, using green hosting, remote-first operations, and eco-friendly practices in everything we do. But our commitment goes beyond sustainability—we\'re obsessed with delivering real, measurable results for our clients.'
        ],
        cta: {
          primary: 'View Our Work',
          secondary: 'Get In Touch'
        }
      },
      values: {
        title: 'Our Core Values',
        subtitle: 'These principles guide every decision we make and every project we undertake',
        items: [
          {
            title: 'Results-Driven',
            description: 'Every strategy is built around measurable outcomes and ROI.'
          },
          {
            title: 'Client-Centric',
            description: 'Your success is our success. We treat your business like our own.'
          },
          {
            title: 'Innovation',
            description: 'We stay ahead of trends and leverage cutting-edge technologies.'
          },
          {
            title: 'Sustainability',
            description: 'Eco-friendly practices in everything we do, from hosting to operations.'
          },
          {
            title: 'Transparency',
            description: 'Clear communication, honest reporting, and no hidden agendas.'
          },
          {
            title: 'Collaboration',
            description: 'We work as an extension of your team, not just a vendor.'
          }
        ]
      },
      team: {
        title: 'Meet Our Leadership Team',
        subtitle: 'Experienced professionals dedicated to your success',
        members: [
          {
            name: 'Sarah Johnson',
            role: 'Founder & CEO',
            description: 'Digital strategist with 12+ years building successful online brands.'
          },
          {
            name: 'Michael Chen',
            role: 'Head of Development',
            description: 'Full-stack expert who has built 200+ web applications.'
          },
          {
            name: 'Emma Rodriguez',
            role: 'Creative Director',
            description: 'Award-winning designer passionate about beautiful, functional design.'
          },
          {
            name: 'David Park',
            role: 'SEO & Growth Lead',
            description: 'Data scientist turned SEO expert with proven track record.'
          }
        ]
      },
      milestones: {
        title: 'Our Journey',
        subtitle: 'Key milestones in our growth story',
        items: [
          { year: '2017', title: 'Founded', description: 'Started with a vision for sustainable digital growth' },
          { year: '2019', title: '50 Clients', description: 'Reached 50 satisfied clients milestone' },
          { year: '2021', title: 'Team Expansion', description: 'Grew to 20+ in-house specialists' },
          { year: '2023', title: 'Industry Leader', description: '150+ clients and multiple awards' }
        ]
      },
      cta: {
        title: 'Ready to Work Together?',
        description: 'Join 150+ businesses that trust us with their digital growth. Let\'s discuss how we can help you achieve your goals.',
        primary: 'Get Your Free Quote',
        secondary: 'Schedule a Call'
      }
    }
  }

  const currentContent = content[language]

  const valueIcons = [Target, Heart, Zap, Leaf, Globe, Users]
  const teamColors = ['bg-eco-100', 'bg-blue-100', 'bg-purple-100', 'bg-orange-100']

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-eco-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.3),transparent)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-eco-600/20 text-eco-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              <span>{currentContent.hero.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {currentContent.hero.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {currentContent.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                {currentContent.story.title}
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                {currentContent.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to={getLocalizedPath('portfolio')}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-eco-600 text-white rounded-lg font-semibold hover:bg-eco-700 transition-all duration-200 shadow-lg"
                >
                  <span>{currentContent.story.cta.primary}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to={getLocalizedPath('contact')}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-200 border-2 border-slate-200"
                >
                  <span>{currentContent.story.cta.secondary}</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-eco-400 to-eco-600 rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-eco-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {currentContent.values.title}
            </h2>
            <p className="text-lg text-slate-600">
              {currentContent.values.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.values.items.map((value, index) => {
              const Icon = valueIcons[index]
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  <div className="w-14 h-14 rounded-xl bg-eco-100 text-eco-600 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {currentContent.team.title}
            </h2>
            <p className="text-lg text-slate-600">
              {currentContent.team.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.team.members.map((member, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className={`aspect-square ${teamColors[index]} rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg flex items-center justify-center`}>
                  <Users className="w-20 h-20 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <div className="text-sm font-semibold text-eco-600 mb-3">{member.role}</div>
                <p className="text-sm text-slate-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 to-eco-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {currentContent.milestones.title}
            </h2>
            <p className="text-xl text-slate-300">
              {currentContent.milestones.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {currentContent.milestones.items.map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-eco-600 text-white flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow pt-2">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-eco-300 transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-300 text-lg">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-eco-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {currentContent.cta.title}
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              {currentContent.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to={getLocalizedPath('quote')}
                className="w-full sm:w-auto px-8 py-4 bg-eco-600 text-white rounded-lg text-lg font-semibold hover:bg-eco-700 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>{currentContent.cta.primary}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to={getLocalizedPath('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-slate-100 text-slate-700 rounded-lg text-lg font-semibold hover:bg-slate-200 transition-all duration-200"
              >
                {currentContent.cta.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
