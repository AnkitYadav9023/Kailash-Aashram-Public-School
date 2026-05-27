import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const navItems = [
  { label: 'Home',          path: '/' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Facilities',    path: '/facilities' },
  { label: 'Notices',       path: '/notices' },
  { label: 'Fee Structure', path: '/fees' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
      background: scrolled ? 'rgba(11,31,58,0.98)' : 'rgba(11,31,58,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(201,151,58,0.2)',
      transition: 'all 0.3s',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 32px',
        height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={logo} alt="School Logo" style={{
              width: 60, height: 55, borderRadius: '50%', objectFit: 'cover'
            }} />
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: 15, fontWeight: 700, lineHeight: 1.2 }}>
              Kailash Aashram Public School
            </div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Pathara, Chitrakoot Satna
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="desktop-nav">
          {navItems.map(item => (
            <NavLink key={item.path} to={item.path} end={item.path === '/'}
              style={({ isActive }) => ({
                color: isActive ? 'var(--gold-light)' : 'rgba(255,255,255,0.72)',
                fontSize: 13, fontWeight: 500, padding: '7px 13px', borderRadius: 6,
                transition: 'all 0.2s', textDecoration: 'none',
                background: isActive ? 'rgba(255,255,255,0.07)' : 'transparent',
              })}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" style={{
            background: 'var(--gold)', color: 'var(--navy)',
            padding: '7px 18px', borderRadius: 7, fontSize: 13,
            fontWeight: 700, marginLeft: 8, transition: 'all 0.2s',
          }}>Contact Us</Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none',
          color: '#fff', fontSize: 22, cursor: 'pointer',
        }} className="hamburger">☰</button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(11,31,58,0.99)', padding: '12px 24px 20px',
          display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {navItems.map(item => (
            <NavLink key={item.path} to={item.path} end={item.path === '/'}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? 'var(--gold-light)' : 'rgba(255,255,255,0.75)',
                fontSize: 14, fontWeight: 500, padding: '9px 12px',
                borderRadius: 6, textDecoration: 'none',
                background: isActive ? 'rgba(255,255,255,0.07)' : 'transparent',
              })}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setMenuOpen(false)} style={{
            background: 'var(--gold)', color: 'var(--navy)', padding: '10px 16px',
            borderRadius: 7, fontSize: 14, fontWeight: 700, marginTop: 6, textAlign: 'center',
          }}>Contact Us</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
