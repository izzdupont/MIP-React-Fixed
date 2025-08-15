// src/components/Navbar.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const NAV = [
  { to: '#home', label: 'Home', type: 'section' },
  { to: '#about', label: 'About', type: 'section' },
  { to: '#services', label: 'Services', type: 'section' },
  { to: '#contact', label: 'Contact', type: 'section' },
  { to: '/blog', label: 'Blog', type: 'route' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const go = (e, item) => {
    e.preventDefault();
    setOpen(false);

    if (item.type === 'route') {
      navigate(item.to);
      return;
    }

    // item.type === 'section'
    const id = item.to.replace('#', '');

    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      sessionStorage.setItem('scrollTo', id);
      navigate('/');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo acts like 'Home' */}
        <a href="#home" onClick={(e) => go(e, { to: '#home', type: 'section' })} className="flex items-center gap-2 font-extrabold text-xl">
          <img src={logo} alt="Midwest IT Provider" className="h-8 w-8" />
          <span style={{ color: '#6610f2' }}>Midwest IT Provider</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) =>
            item.type === 'route' ? (
              <Link key={item.label} to={item.to} className="text-sm font-semibold hover:text-brand-700">
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.to} onClick={(e) => go(e, item)} className="text-sm font-semibold hover:text-brand-700">
                {item.label}
              </a>
            )
          )}
          <a href="#contact" onClick={(e) => go(e, { to: '#contact', type: 'section' })} className="btn btn-primary text-sm">
            Contact Us
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden btn btn-outline text-sm" aria-label="Menu">
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container py-4 space-y-3">
            {NAV.map((item) =>
              item.type === 'route' ? (
                <Link key={item.label} to={item.to} onClick={() => setOpen(false)} className="block font-medium">
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.to} onClick={(e) => go(e, item)} className="block font-medium">
                  {item.label}
                </a>
              )
            )}
            <a href="#contact" onClick={(e) => go(e, { to: '#contact', type: 'section' })} className="btn btn-primary w-full">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
