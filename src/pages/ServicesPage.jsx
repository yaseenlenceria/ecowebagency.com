import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import {
  Search,
  Code,
  Palette,
  TrendingUp,
  Share2,
  Cpu,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from 'lucide-react'

export default function ServicesPage() {
  const { language, isSwedish, getLocalizedPath } = useLanguage()

  // Translation content
  const content = {
    sv: {
      hero: {
        badge: 'Kompletta Digitala Lösningar',
        title: 'Tjänster Som Ger Verkliga Resultat',
        description: 'Från SEO till skräddarsydd mjukvara erbjuder vi en komplett svit av digitala tjänster designade för att hjälpa ditt företag växa, konkurrera och dominera din marknad.',
        badgeText: 'Kompletta Digitala Lösningar'
      },
      services: [
        {
          title: 'SEO & Organisk Synlighet',
          shortDesc: 'Dominera sökresultaten med datadrivna strategier',
          description: 'Hitta dina ideala kunder precis när de söker efter det du erbjuder. Våra omfattande SEO-tjänster inkluderar sökordsanalys, on-page-optimering, teknisk SEO, länkbyggande och innehållsstrategi.',
          features: [
            'Sökordsanalys & Strategi',
            'Tekniska SEO-granskningar',
            'On-Page & Off-Page Optimering',
            'Lokal SEO',
            'Innehållsstrategi',
            'Månadsrapportering & Analys',
          ],
          results: '+520% genomsnittlig ökning av organisk trafik',
          link: 'services/seo',
        },
        {
          title: 'Webbutveckling & Skräddarsydda Webbplatser',
          shortDesc: 'Högpresterande webbplatser som konverterar besökare till kunder',
          description: 'Från enkla landningssidor till komplexa webbapplikationer bygger vi snabba, säkra och vackra webbplatser med modern teknologi. Varje webbplats optimeras för konverteringar, är mobilanpassad och byggd för att skalas med din verksamhet.',
          features: [
            'Skräddarsydd Webbdesign',
            'E-handelsutveckling',
            'Webbapplikationer',
            'CMS-integration',
            'API-utveckling',
            'Underhåll & Support',
          ],
          results: '+350% genomsnittlig förbättring av konverteringsgrad',
          link: 'services/web-development',
        },
        {
          title: 'Varumärkesdesign & Grafisk Design',
          shortDesc: 'Visuell identitet som gör dig oföglömlig',
          description: 'Stick ut i en trång marknad med professionell branding och grafisk design. Vi skapar sammanhängande visuella identiteter som fångar din unika historia och resonerar med din målgrupp.',
          features: [
            'Varumärkesstrategi & Positionering',
            'Logotypdesign',
            'Brand Guidelines',
            'Marknadsföringsmaterial',
            'Social Media-grafik',
            'Förpackningsdesign',
          ],
          results: '98% kundnöjdhet',
          link: 'services/branding',
        },
        {
          title: 'Annonsering & Performance Marketing',
          shortDesc: 'ROI-fokuserade kampanjer som driver verklig tillväxt',
          description: 'Omvandla annonsbudget till vinst med datadriven performance marketing. Vi hanterar kampanjer över Google Ads, Meta (Facebook/Instagram), LinkedIn och mer – optimerar varje krona för maximal avkastning.',
          features: [
            'Google Ads Hantering',
            'Meta Ads (Facebook & Instagram)',
            'LinkedIn-annonsering',
            'Remarketingkampanjer',
            'Landningssideoptimering',
            'Konverteringsoptimering',
          ],
          results: '8.5x genomsnittlig avkastning på annonsutgifter (ROAS)',
          link: 'services/ads',
        },
        {
          title: 'Social Media Management',
          shortDesc: 'Bygg engagerade communityn som ger affärsresultat',
          description: 'Social media handlar inte bara om gilla-markeringar – det handlar om att bygga autentiska relationer med din publik. Vi skapar och genomför sociala strategier som ökar varumärkesmedvetenhet, driver engagemang och konverterar följare till kunder.',
          features: [
            'Social Media Strategi',
            'Innehållsskapande & Kuratering',
            'Community Management',
            'Influencer-partnerskap',
            'Social Media-annonsering',
            'Analys & Rapportering',
          ],
          results: '250K+ följare genererade för kunder',
          link: 'services/social-media',
        },
        {
          title: 'Skräddarsydd Mjukvara & AI-verktyg',
          shortDesc: 'Intelligent automatisering och skräddarsydda lösningar för komplexa problem',
          description: 'Effektivisera operationer och få konkurrensfördelar med skräddarsydda mjukvarulösningar. Från CRM-system till AI-drivna automatiseringsverktyg bygger vi mjukvara som löser dina unika affärsutmaningar.',
          features: [
            'Skräddarsydd Mjukvaruutveckling',
            'AI & Maskininlärningsintegration',
            'Processautomatisering',
            'API-integrationer',
            'Dataanalysplattformar',
            'SaaS-utveckling',
          ],
          results: '10K+ aktiva användare på kundplattformar',
          link: 'services/custom-software',
        },
      ],
      process: {
        title: 'Vår Beprövade Process',
        description: 'Ett systematiskt tillvägagångssätt som levererar konsekventa resultat',
        steps: [
          { step: '01', title: 'Upptäckt', desc: 'Förstå ditt företag, dina mål och dina utmaningar' },
          { step: '02', title: 'Strategi', desc: 'Utveckla en skräddarsydd plan för framgång' },
          { step: '03', title: 'Genomförande', desc: 'Implementera med precision och expertis' },
          { step: '04', title: 'Optimering', desc: 'Kontinuerlig förbättring och skalning' },
        ]
      },
      cta: {
        title: 'Låt Oss Bygga Din Tillväxtstrategi',
        description: 'Boka en kostnadsfri konsultation för att diskutera vilka tjänster som passar ditt företag och hur vi kan hjälpa dig att nå dina mål.',
        primary: 'Få Din Gratis Offert',
        secondary: 'Boka Ett Samtal'
      }
    },
    en: {
      hero: {
        badge: 'Comprehensive Digital Solutions',
        title: 'Services That Drive Real Results',
        description: 'From SEO to custom software, we offer a complete suite of digital services designed to help your business grow, compete, and dominate your market.',
        badgeText: 'Comprehensive Digital Solutions'
      },
      services: [
        {
          title: 'SEO & Organic Visibility',
          shortDesc: 'Dominate search rankings with data-driven strategies',
          description: 'Get found by your ideal customers at the exact moment they\'re searching for what you offer. Our comprehensive SEO services include keyword research, on-page optimization, technical SEO, link building, and content strategy.',
          features: [
            'Keyword Research & Strategy',
            'Technical SEO Audits',
            'On-Page & Off-Page Optimization',
            'Local SEO',
            'Content Strategy',
            'Monthly Reporting & Analytics',
          ],
          results: '+520% avg. organic traffic increase',
          link: 'services/seo',
        },
        {
          title: 'Web Development & Custom Websites',
          shortDesc: 'High-performance websites that convert visitors into customers',
          description: 'From simple landing pages to complex web applications, we build fast, secure, and beautiful websites using modern technologies. Every site is optimized for conversions, mobile-responsive, and built to scale with your business.',
          features: [
            'Custom Website Design',
            'E-Commerce Development',
            'Web Applications',
            'CMS Integration',
            'API Development',
            'Maintenance & Support',
          ],
          results: '+350% avg. conversion rate improvement',
          link: 'services/web-development',
        },
        {
          title: 'Branding & Graphic Design',
          shortDesc: 'Visual identity that makes you unforgettable',
          description: 'Stand out in a crowded market with professional branding and stunning graphic design. We create cohesive visual identities that capture your unique story and resonate with your target audience.',
          features: [
            'Brand Strategy & Positioning',
            'Logo Design',
            'Brand Guidelines',
            'Marketing Collateral',
            'Social Media Graphics',
            'Packaging Design',
          ],
          results: '98% client satisfaction rate',
          link: 'services/branding',
        },
        {
          title: 'Ads & Performance Marketing',
          shortDesc: 'ROI-focused campaigns that drive real business growth',
          description: 'Turn ad spend into profit with data-driven performance marketing. We manage campaigns across Google Ads, Meta (Facebook/Instagram), LinkedIn, and more—optimizing every dollar for maximum return on investment.',
          features: [
            'Google Ads Management',
            'Meta Ads (Facebook & Instagram)',
            'LinkedIn Advertising',
            'Remarketing Campaigns',
            'Landing Page Optimization',
            'Conversion Rate Optimization',
          ],
          results: '8.5x avg. return on ad spend (ROAS)',
          link: 'services/ads',
        },
        {
          title: 'Social Media Management',
          shortDesc: 'Build engaged communities that drive business results',
          description: 'Social media isn\'t just about likes—it\'s about building authentic relationships with your audience. We create and execute social strategies that increase brand awareness, drive engagement, and convert followers into customers.',
          features: [
            'Social Media Strategy',
            'Content Creation & Curation',
            'Community Management',
            'Influencer Partnerships',
            'Social Media Advertising',
            'Analytics & Reporting',
          ],
          results: '250K+ followers generated for clients',
          link: 'services/social-media',
        },
        {
          title: 'Custom Software & AI Tools',
          shortDesc: 'Intelligent automation and custom solutions for complex problems',
          description: 'Streamline operations and gain competitive advantages with custom software solutions. From CRM systems to AI-powered automation tools, we build software that solves your unique business challenges.',
          features: [
            'Custom Software Development',
            'AI & Machine Learning Integration',
            'Workflow Automation',
            'API Integrations',
            'Data Analytics Platforms',
            'SaaS Development',
          ],
          results: '10K+ active users on client platforms',
          link: 'services/custom-software',
        },
      ],
      process: {
        title: 'Our Proven Process',
        description: 'A systematic approach that delivers consistent results',
        steps: [
          { step: '01', title: 'Discovery', desc: 'Understand your business, goals, and challenges' },
          { step: '02', title: 'Strategy', desc: 'Develop a customized plan for success' },
          { step: '03', title: 'Execution', desc: 'Implement with precision and expertise' },
          { step: '04', title: 'Optimization', desc: 'Continuous improvement and scaling' },
        ]
      },
      cta: {
        title: 'Let\'s Build Your Growth Strategy',
        description: 'Schedule a free consultation to discuss which services are right for your business and how we can help you achieve your goals.',
        primary: 'Get Your Free Quote',
        secondary: 'Schedule a Call'
      }
    }
  }

  const servicesConfig = [
    { icon: Search, color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
    { icon: Code, color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50', textColor: 'text-purple-600' },
    { icon: Palette, color: 'from-pink-500 to-pink-600', bgColor: 'bg-pink-50', textColor: 'text-pink-600' },
    { icon: TrendingUp, color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-50', textColor: 'text-orange-600' },
    { icon: Share2, color: 'from-green-500 to-green-600', bgColor: 'bg-green-50', textColor: 'text-green-600' },
    { icon: Cpu, color: 'from-indigo-500 to-indigo-600', bgColor: 'bg-indigo-50', textColor: 'text-indigo-600' },
  ]

  const currentContent = content[language]
  const services = currentContent.services.map((service, index) => ({
    ...service,
    ...servicesConfig[index]
  }))

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-eco-600 to-eco-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.3),transparent)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-eco-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>{currentContent.hero.badgeText}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {currentContent.hero.title}
            </h1>
            <p className="text-xl text-eco-100 leading-relaxed max-w-3xl mx-auto">
              {currentContent.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h2>

                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className={`w-5 h-5 ${service.textColor} flex-shrink-0 mt-0.5`} />
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Results Badge */}
                    <div className={`inline-flex items-center space-x-2 ${service.bgColor} ${service.textColor} px-4 py-2 rounded-lg font-semibold text-sm mb-6`}>
                      <TrendingUp className="w-4 h-4" />
                      <span>{service.results}</span>
                    </div>

                    {/* CTA Button */}
                    <div>
                      <Link
                        to={getLocalizedPath(service.link)}
                        className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                      >
                        <span>{isSwedish ? 'Läs Mer' : 'Learn More'}</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className={`aspect-square bg-gradient-to-br ${service.color} rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300`} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {currentContent.process.title}
            </h2>
            <p className="text-lg text-slate-600">
              {currentContent.process.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.process.steps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-eco-200 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 to-eco-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {currentContent.cta.title}
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              {currentContent.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to={getLocalizedPath('quote')}
                className="w-full sm:w-auto px-8 py-4 bg-eco-600 text-white rounded-lg text-lg font-semibold hover:bg-eco-700 transition-all duration-200 shadow-xl flex items-center justify-center space-x-2"
              >
                <span>{currentContent.cta.primary}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to={getLocalizedPath('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-200 border-2 border-white/20"
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
