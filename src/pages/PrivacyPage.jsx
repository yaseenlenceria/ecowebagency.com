import React from 'react'
import { Shield } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function PrivacyPage() {
  const { isSwedish } = useLanguage()

  return (
    <div className="bg-stone-50">
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-eco-400" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {isSwedish ? 'Integritetspolicy' : 'Privacy Policy'}
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
                  ? 'På Eco Web Agency tar vi din integritet på allvar. Denna integritetspolicy förklarar hur vi samlar in, använder, avslöjar och skyddar din information när du besöker vår webbplats eller använder våra tjänster.'
                  : 'At Eco Web Agency, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.'}
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                {isSwedish ? 'Information vi samlar in' : 'Information We Collect'}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {isSwedish
                  ? 'Vi samlar in information som du ger direkt till oss, inklusive:'
                  : 'We collect information that you provide directly to us, including:'}
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
                {isSwedish ? (
                  <>
                    <li>Namn, e-postadress och kontaktinformation</li>
                    <li>Företagsinformation och webbplatsdetaljer</li>
                    <li>Projektkrav och kommunikationspreferenser</li>
                    <li>Betalnings- och faktureringsinformation</li>
                  </>
                ) : (
                  <>
                    <li>Name, email address, and contact information</li>
                    <li>Company information and website details</li>
                    <li>Project requirements and communication preferences</li>
                    <li>Payment and billing information</li>
                  </>
                )}
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                {isSwedish ? 'Hur vi använder din information' : 'How We Use Your Information'}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {isSwedish
                  ? 'Vi använder informationen vi samlar in för att:'
                  : 'We use the information we collect to:'}
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
                {isSwedish ? (
                  <>
                    <li>Tillhandahålla, underhålla och förbättra våra tjänster</li>
                    <li>Bearbeta dina transaktioner och skicka relaterad information</li>
                    <li>Skicka tekniska meddelanden och supportmeddelanden</li>
                    <li>Svara på dina kommentarer och frågor</li>
                    <li>Skicka marknadsföringskommunikation (med ditt samtycke)</li>
                  </>
                ) : (
                  <>
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process your transactions and send related information</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Send you marketing communications (with your consent)</li>
                  </>
                )}
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                {isSwedish ? 'Datasäkerhet' : 'Data Security'}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isSwedish
                  ? 'Vi implementerar lämpliga tekniska och organisatoriska åtgärder för att skydda din personliga information mot obehörig åtkomst, ändring, avslöjande eller förstörelse.'
                  : 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'}
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                {isSwedish ? 'Dina rättigheter' : 'Your Rights'}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {isSwedish
                  ? 'Du har rätt att få tillgång till, korrigera eller radera din personliga information. Du kan också välja bort marknadsföringskommunikation när som helst. Kontakta oss på privacy@ecowebagency.com för integritetrelaterade förfrågningar.'
                  : 'You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. Contact us at privacy@ecowebagency.com for any privacy-related requests.'}
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                {isSwedish ? 'Kontakta oss' : 'Contact Us'}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {isSwedish
                  ? 'Om du har frågor om denna integritetspolicy, vänligen kontakta oss på:'
                  : 'If you have questions about this Privacy Policy, please contact us at:'}
                <br />
                Email: privacy@ecowebagency.com
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
