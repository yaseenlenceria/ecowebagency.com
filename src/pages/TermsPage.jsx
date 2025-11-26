import React from 'react'
import { FileText } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="bg-stone-50">
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="w-16 h-16 mx-auto mb-6 text-eco-400" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-slate-300">Last updated: November 2024</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Welcome to Eco Web Agency. By accessing our website or using our services, you
                agree to be bound by these Terms of Service.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Services</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Eco Web Agency provides digital marketing, web development, and related services as
                outlined in our service agreements. We reserve the right to modify or discontinue
                services with reasonable notice.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Client Responsibilities</h2>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
                <li>Provide accurate and complete information</li>
                <li>Respond to requests for information in a timely manner</li>
                <li>Make payments according to agreed terms</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Payment Terms</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Payment terms will be specified in your service agreement. Late payments may result
                in service suspension and additional fees.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Upon full payment, clients own the deliverables created specifically for their
                project. Eco Web Agency retains rights to reusable code, templates, and
                methodologies.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Eco Web Agency shall not be liable for any indirect, incidental, special, or
                consequential damages arising out of or related to our services.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Termination</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Either party may terminate services with 30 days written notice, subject to payment
                for work completed.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Contact</h2>
              <p className="text-slate-600 leading-relaxed">
                Questions about these Terms? Contact us at:
                <br />
                Email: legal@ecowebagency.com
                <br />
                Phone: +1 (234) 567-890
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
