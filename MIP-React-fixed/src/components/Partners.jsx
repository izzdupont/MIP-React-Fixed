import React from 'react'

const PARTNERS = [
  { name: 'Intelisys', src: '/images/partner-intelisys.png' },
  { name: 'Sophos', src: '/images/partner-sophos.png' },
  { name: 'Datto', src: '/images/partner-datto.jpg' },
  { name: 'Kaseya', src: '/images/partner-kaseya.png' },
]

export default function Partners() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Our Partners</h2>
        <p className="lead mt-3">We work with proven vendors and platforms.</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {PARTNERS.map(p => (
            <div key={p.name} className="card flex items-center justify-center h-24">
              <img src={p.src} alt={p.name} className="max-h-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
