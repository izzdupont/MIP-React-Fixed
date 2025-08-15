// src/App.jsx (only the Home part needs this effect)
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

function Home() {
  useEffect(() => {
    const id = sessionStorage.getItem('scrollTo');
    if (id) {
      sessionStorage.removeItem('scrollTo');
      // wait a tick so DOM is ready
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    } else {
      // optional: ensure top when coming from blog
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Partners />
      <Contact />
    </>
  );
}

export default function App() {
  // optional: scroll to top on route changes
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== '/') window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
