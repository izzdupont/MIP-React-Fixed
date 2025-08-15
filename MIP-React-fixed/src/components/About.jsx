import React from 'react'

export default function About() {
  return (
    <section id="about" className="section bg-slate-50">
      <div className="container grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 className="h2">About Us</h2>
          <p className="lead mt-3">
            We’re your neighbour, hands-on IT pros with 20+ years of combined experience. Our mission is simple:
            deliver fair, transparent, and in‑person support that small and mid sized businesses can trust.
          </p>
          <ul className="mt-6 space-y-2 text-slate-700">
            <li>• Minnesota based and relationship driven</li>
            <li>• No outsourcing, you work directly with us</li>
            <li>• Clear pricing aligned to your budget</li>
          </ul>
          <a href="#contact" className="btn btn-primary mt-8">Get in Touch</a>
        </div>
        <div className="relative">
          <img src="images/about.png" alt="About Midwest IT Provider" className="w-full max-w-xl mx-auto" />
        </div>
      </div>
    </section>
  )
}
