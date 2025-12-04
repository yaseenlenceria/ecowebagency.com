import React from 'react'
import { FileText } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function TermsPage() {
  const { isSwedish } = useLanguage()

  return (
    <div className="bg-stone-50">
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="w-16 h-16 mx-auto mb-6 text-eco-400" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {isSwedish ? 'Användarvillkor' : 'Terms of Service'}
            </h1>
            <p className="text-xl text-slate-300">
              {isSwedish ? 'Senast uppdaterad: November 2024' : 'Last updated: November 2024'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {isSwedish
                  ? 'Välkommen till Eco Web Agency. Genom att använda vår webbplats eller våra tjänster godkänner du att vara bunden av dessa användarvillkor.'
                  : 'Welcome to Eco Web Agency. By accessing our website or using our services, you agree to be bound by these Terms of Service.'}
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                {isSwedish ? 'Tjänster' : 'Services'}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isSwedish
                  ? 'Eco Web Agency tillhandahåller digital marknadsföring, webbutveckling och relaterade tjänster enligt beskrivning i våra serviceavtal. Vi förbehåller oss rätten att modifiera eller avbryta tjänster med rimlig förvarning.'
                  : 'Eco Web Agency provides digital marketing, web development, and related services as outlined in our service agreements. We reserve the right to modify or discontinue services with reasonable notice.'}
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                {isSwedish ? 'Klientansvar' : 'Client Responsibilities'}
              </h2>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
                {isSwedish ? (
                  <>
                    <li>Tillhandahålla korrekt och fullständig information</li>
                    <li>Svara på informationsförfrågningar i tid</li>
                    <li>Göra betalningar enligt överenskomna villkor</li>
                    <li>Följa alla tillämpliga lagar och regler</li>
                  </>
                ) : (
                  <>
                    <li>Provide accurate and complete information</li>
                    <li>Respond to requests for information in a timely manner</li>
                    <li>Make payments according to agreed terms</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </>
                )}
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                {isSwedish ? 'Betalningsvillkor' : 'Payment Terms'}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isSwedish
                  ? 'Betalningsvillkor kommer att specificeras i ditt serviceavtal. Sena betalningar kan resultera i avstängning av tjänster och ytterligare avgifter.'
                  : 'Payment terms will be specified in your service agreement. Late payments may result in service suspension and additional fees.'}
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                {isSwedish ? 'Immateriella rättigheter' : 'Intellectual Property'}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isSwedish
                  ? 'Efter full betalning äger klienter de leveranser som skapats specifikt för deras projekt. Eco Web Agency behåller rättigheter till återanvändbar kod, mallar och metodik.'
                  : 'Upon full payment, clients own the deliverables created specifically for their project. Eco Web Agency retains rights to reusable code, templates, and methodologies.'}
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                {isSwedish ? 'Ansvarsbegränsning' : 'Limitation of Liability'}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isSwedish
                  ? 'Eco Web Agency ska inte hållas ansvarig för indirekta, tillfälliga, särskilda eller följdskador som uppstår från eller relaterar till våra tjänster.'
                  : 'Eco Web Agency shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to our services.'}
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                {isSwedish ? 'Uppsägning' : 'Termination'}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isSwedish
                  ? 'Endera parten kan säga upp tjänster med 30 dagars skriftlig varsel, med förbehåll för betalning för utfört arbete.'
                  : 'Either party may terminate services with 30 days written notice, subject to payment for work completed.'}
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                {isSwedish ? 'Kontakt' : 'Contact'}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {isSwedish
                  ? 'Frågor om dessa villkor? Kontakta oss på:'
                  : 'Questions about these Terms? Contact us at:'}
                <br />
                Email: legal@ecowebagency.com
                <br />
                {isSwedish ? 'Telefon: +1 (234) 567-890' : 'Phone: +1 (234) 567-890'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
