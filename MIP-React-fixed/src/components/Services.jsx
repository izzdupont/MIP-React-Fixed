import React from 'react'

const SERVICES = [
  {
    title: 'IT Support Service',
    desc: 'Friendly help for day‑to‑day issues, device setups, and upgrades. No job is too small.',
    icon: '🛠️',
  },
  {
    title: 'Remote & Onsite Support',
    desc: 'Fast remote fixes with the option for hands‑on onsite visits when you need it.',
    icon: '💻',
  },
  {
    title: 'Cybersecurity',
    desc: 'Protect your business with endpoint security, MFA, and ongoing threat monitoring.',
    icon: '🔐',
  },
  {
    title: 'Network Monitoring & Management',
    desc: 'Keep your network healthy, scalable, and reliable with proactive monitoring.',
    icon: '📡',
  },
  {
    title: 'Server Administration & Management',
    desc: 'Secure, maintained servers that support your critical apps and data.',
    icon: '🧭',
  },
  {
    title: 'Employee Onboarding & Offboarding',
    desc: 'Streamlined account creation, device provisioning, and access controls.',
    icon: '👥',
  },
  {
    title: 'Backup & Disaster Recovery',
    desc: 'Resilient backups and recovery plans to minimize downtime.',
    icon: '🗄️',
  },
  {
    title: 'Hardware Deployment & Troubleshooting',
    desc: 'New PCs, upgrades, and break/fix support for your fleet.',
    icon: '🧩',
  },
  {
    title: 'Software Development',
    desc: 'Lightweight custom tools tailored to your workflows.',
    icon: '⚙️',
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="h2">Our Services</h2>
        <p className="lead mt-3">Everything you need to keep your business secure, productive, and growing.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="card">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
