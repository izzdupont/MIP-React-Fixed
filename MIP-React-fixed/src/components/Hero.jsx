import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="section bg-gradient-to-b from-brand-50 to-white">
      <div className="container grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="badge">Minneapolis, MN • +1 (612) 383‑7049 • info@midwestitprovider.com</p>
          <h1 className="h1 mt-4">High‑Quality IT Solutions for Growing Businesses</h1>
          <p className="lead mt-4">
            Managed IT, Cybersecurity, and friendly support you can count on. We help you save money, work faster,
            and stay secure—so you can focus on what matters.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#contact" className="btn btn-primary">Request a Free Consultation</a>
            <a href="#services" className="btn btn-outline">Explore Services</a>
          </div>
          <ul className="mt-8 grid gap-2 text-sm text-slate-600">
            <li>• Remote & onsite support</li>
            <li>• Security patching & monitoring</li>
            <li>• Firewall & network management</li>
            <li>• Backup & disaster recovery</li>
          </ul>
        </div>
        <div className="relative">
          <img src="images/hero-illustration.png" alt="IT Solutions" className="w-full max-w-xl mx-auto" />
        </div>
      </div>
    </section>
  )
}
