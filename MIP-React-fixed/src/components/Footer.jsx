import React from 'react';
import logo from '../assets/logo.png'; // make sure your logo.png is in src/assets/

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="container py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-extrabold text-xl">
            <img src={logo} alt="Midwest IT Provider" className="h-8 w-8" />
            <span style={{ color: '#6610f2' }}>Midwest IT Provider</span>
          </div>

          {/* Chamber of Commerce Badge */}
          <div className="mt-4">
            <a
              href="https://www.chamberofcommerce.com/business-directory/minnesota/champlin/computer-support-and-services/2033709358-midwest-it-provider?source=memberwebsite"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ height: '150px', width: 'auto' }}
                src="https://coc.codes/images/badge/2033709358"
                alt="Chamber of Commerce Member Badge"
              />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold">Useful links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#home" className="hover:text-brand-700">Home</a></li>
            <li><a href="#about" className="hover:text-brand-700">About</a></li>
            <li><a href="#services" className="hover:text-brand-700">Services</a></li>
            <li><a href="#contact" className="hover:text-brand-700">Contact Us</a></li>
            <li>
              <a
                href="/blog"
                className="hover:text-brand-700"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Minneapolis, MN</li>
            <li><a href="tel:+16123837049" className="hover:text-brand-700">+1 (612) 383-7049</a></li>
            <li><a href="mailto:info@midwestitprovider.com" className="hover:text-brand-700">info@midwestitprovider.com</a></li>
            <li className="text-slate-500 text-xs">
              © <span id="year"></span> Midwest IT Provider
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold">Newsletter</h4>
          <p className="mt-3 text-sm text-slate-600">
            Subscribe for tips, security alerts, and updates.
          </p>
          <form className="mt-3 flex gap-2">
            <input
              placeholder="Your email"
              className="flex-1 rounded-xl border border-slate-300 p-3"
            />
            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: "document.getElementById('year').textContent = new Date().getFullYear()",
        }}
      />
    </footer>
  );
}
