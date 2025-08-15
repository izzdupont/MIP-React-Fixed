import React, { useState } from 'react'
import logo from '../assets/nobg-logo.png';

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    // Example: Formspree endpoint; replace with your ID or use your own backend
    const endpoint = 'https://formspree.io/f/your-id'
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data,
    })
    if (res.ok) {
      setStatus('Thanks! We will be in touch.')
      form.reset()
    } else {
      setStatus('Something went wrong. Please email info@midwestitprovider.com.')
    }
  }

  return (
    <section id="contact" className="section bg-gradient-to-b from-white to-brand-50">
      <div className="container grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="h2">Get In Touch</h2>
          <p className="lead mt-3">
            Tell us about your environment and goals. We’ll suggest a right‑sized plan and timeline.
          </p>
          <div className="mt-6 space-y-2 text-slate-700">
            <p><strong>Midwest IT Provider</strong></p>
            <p>Minneapolis, MN</p>
            <p><a className="text-brand-700 underline" href="tel:+16123837049">+1 (612) 383‑7049</a></p>
            <p><a className="text-brand-700 underline" href="mailto:info@midwestitprovider.com">info@midwestitprovider.com</a></p>
            <img
              src={logo}
              alt="Midwest IT Provider Logo"
              style={{ width: "2in", height: "2in", marginTop: "0.5rem" }}
            />
          </div>
        </div>
        <form onSubmit={onSubmit} className="card">
          <label className="block text-sm font-medium">Your Name
            <input name="name" required className="mt-1 w-full rounded-xl border border-slate-300 p-3" />
          </label>
          <label className="block text-sm font-medium mt-4">Company
            <input name="company" className="mt-1 w-full rounded-xl border border-slate-300 p-3" />
          </label>
          <label className="block text-sm font-medium mt-4">Email
            <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-slate-300 p-3" />
          </label>
          <label className="block text-sm font-medium mt-4">Message
            <textarea name="message" rows="4" required className="mt-1 w-full rounded-xl border border-slate-300 p-3"></textarea>
          </label>
          <button type="submit" className="btn btn-primary mt-6 w-full">Send</button>
          {status && <p className="mt-3 text-sm text-slate-600">{status}</p>}
        </form>
      </div>
    </section>
  )
}
