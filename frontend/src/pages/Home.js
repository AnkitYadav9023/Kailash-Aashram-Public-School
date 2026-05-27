import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import schoolVideo from '../assets/school-video.mp4';
import image1 from '../assets/photo1.png';
import image2 from '../assets/photo2.png';
import image3 from '../assets/photo3.png';


const stats = [
  { num: '250+', label: 'Students Enrolled' },
  { num: '20+',  label: 'Qualified Teachers' },
  { num: 'MP Board', label: 'Board Affiliated' },
  { num: 'Nursery - 8', label: 'Classes Offered' },
];

const reviews = [
  { name: 'Ramesh Sharma', role: 'Father of Class 6 Student', initials: 'RS', color: '#3C3489', bg: '#EEEDFE',
    text: 'My son joined this school 3 years ago in Class 3. Today his confidence and academic performance have improved tremendously. The teachers are very caring and dedicated.', stars: 4 },
  { name: 'Priya Devi', role: 'Mother of Class 8 ', initials: 'PD', color: '#0F6E56', bg: '#E1F5EE',
    text: 'My daughter studied here and performed exceptionally well. The school has a very strong academic foundation and the staff is always sMPportive.', stars: 5 },
  { name: 'Anil Kumar', role: 'Father of Class 7 Student', initials: 'AK', color: '#185FA5', bg: '#E6F1FB',
    text: 'The bus service is excellent. Children are safe and arrive home on time. The school communication system is also very good — every notice is sent on the phone.', stars: 5 },
];

function FadeIn({ children, delay = 0 }) {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref}>{children}</div>;
}

export default function Home() {
  return (
    <div className="page-wrapper">

      {/* ── HERO ── */}
      <section style={{
        minHeight: '92vh', background: 'var(--navy)', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(201,151,58,0.1) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="section-inner" style={{ position: 'relative', zIndex: 1, padding: '80px 32px', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>

            {/* LEFT — Text */}
            <div>
              {/* Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(201,151,58,0.15)', border: '1px solid rgba(201,151,58,0.3)', borderRadius: 40, padding: '5px 14px', marginBottom: 28 }}>
                <span style={{ width: 6, height: 6, background: '#4ADE80', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
                <span style={{ fontSize: 12, color: 'var(--gold-light)', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'MPpercase' }}>MP Board · Admissions Open 2026–27</span>
              </div>

              <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 58, fontWeight: 900, color: '#fff', lineHeight: 1.05, marginBottom: 20 }}>
                Building Tomorrow's<br />
                <span style={{ color: 'var(--gold)' }}>Leaders Today</span>
              </h1>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 40, maxWidth: 480 }}>
                Kailash Aashram Public School — where education meets values to create a bright future. MP Board affiliated, experienced faculty, and a nurturing environment for Classes Nursery to 8.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-gold">Admission Enquiry</Link>
                <Link to="/facilities" style={{ border: '1.5px solid rgba(255,255,255,0.3)', color: '#fff', padding: '12px 26px', borderRadius: 8, fontWeight: 500, fontSize: 14, transition: 'all 0.2s' }}>
                  Explore Facilities
                </Link>
              </div>
            </div>

            {/* RIGHT — Photo Box */}
            <div style={{ position: 'relative' }}>
              {/* Main photo card */}
              <div
                style={{
                  borderRadius: 20,
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
                  background: 'rgba(255,255,255,0.05)',
                }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                >
                  <source src={schoolVideo} type="video/mp4" />
                </video>
                </div>

              {/* Floating badge — top right */}
              <div style={{
                position: 'absolute', top: -16, right: -16,
                background: '#fff', borderRadius: 14, padding: '12px 18px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <div style={{ display: 'flex' }}>
                  {['#C9973A','#4ADE80','#60A5FA'].map((c,i) => (
                    <div key={i} style={{ width: 22, height: 22, borderRadius: '50%', background: c, marginLeft: i > 0 ? -6 : 0, border: '2px solid #fff' }} />
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: 10, color: '#6B7280', fontWeight: 500 }}>Happy Families</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#0B1F3A' }}>250+ Students</div>
                </div>
              </div>

              {/* Floating badge — bottom left */}
              <div style={{
                position: 'absolute', bottom: -30, left: -16,
                background: '#fff', borderRadius: 14, padding: '12px 18px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <div style={{ width: 36, height: 36, background: '#FEF3C7', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🏆</div>
                <div>
                  <div style={{ fontSize: 10, color: '#6B7280', fontWeight: 500 }}>Academic Result</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#0B1F3A' }}>100% Pass Rate 🎉</div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <style>{`
          @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
          @media(max-width:768px){
            .hero-grid { grid-template-columns: 1fr !important; }
            .hero-photo { display: none !important; }
          }
        `}</style>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: 'var(--gold)', padding: '22px 0' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '8px 16px', borderRight: i < 3 ? '1px solid rgba(11,31,58,0.2)' : 'none' }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 900, color: 'var(--navy)' }}>{s.num}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(11,31,58,0.65)', textTransform: 'MPpercase', letterSpacing: '0.06em', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section style={{ padding: '90px 0' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <FadeIn>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div style={{ gridColumn: 'span 2', borderRadius: 16, overflow: 'hidden', aspectRatio: '16/7', background: 'linear-gradient(135deg,#1a3a5c,#2a5a8c)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }}>
                  <span style={{ fontSize: 52 }}><img src={image1} alt="School Campus" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>School Campus</span>
                </div>
                <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '1', background: 'linear-gradient(135deg,#1a4a2a,#2a7a4a)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }}>
                  <span style={{ fontSize: 36 }}><img src={image2} alt="Science Lab" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Science Lab</span>
                </div>
                <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '1', background: 'linear-gradient(135deg,#5a3a1a,#8c6a2a)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }}>
                  <span style={{ fontSize: 36 }}><img src={image3} alt="Library" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Library</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <span className="section-tag">About Us</span>
              <h2 className="section-title">Education That<br />Changes Lives</h2>
              <p className="section-sub" style={{ marginBottom: 32 }}>
                Kailash Aashram Public School is an institution that creates an environment where children do not just study, but learn to think, grow, and become responsible citizens of tomorrow.
              </p>
              {[
                { icon: '🎓', title: 'MP Board Affiliated', text: 'Providing quality education from Classes 1 to 8 under the Madhya Pradesh Board of Secondary Education (MPBSE) standards.' },
                { icon: '🏆', title: 'Academic Excellence', text: 'Consistently producing outstanding results with a focus on conceptual clarity and overall development.' },
                { icon: '🌱', title: 'Holistic Development', text: 'Sports, arts, music and extracurricular activities for the complete growth of every student.' },
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 18 }}>
                  <div style={{ width: 40, height: 40, background: 'rgba(201,151,58,0.1)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{p.icon}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--navy)', marginBottom: 3 }}>{p.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--gray)', lineHeight: 1.6 }}>{p.text}</div>
                  </div>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section style={{ background: 'var(--light)', padding: '64px 0' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-tag">Quick Access</span>
            <h2 className="section-title">What Are You Looking For?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {[
              {
                icon: '📢',
                label: 'Notices',
                sub: 'Latest announcements',
                path: '/notices',
                color: '#B91C1C',
                bg: '#FEE2E2'
              },

              {
                icon: '🖼️',
                label: 'Gallery',
                sub: 'School photos & events',
                path: '/gallery',
                color: '#2563EB',
                bg: '#DBEAFE'
              },

              {
                icon: '🏟️',
                label: 'Facilities',
                sub: 'Campus & infrastructure',
                path: '/facilities',
                color: '#7C3AED',
                bg: '#EDE9FE'
              },

              {
                icon: '💰',
                label: 'Fee Structure',
                sub: 'Session 2026–27',
                path: '/fees',
                color: '#92400E',
                bg: '#FEF3C7'
              },

              {
                icon: '📞',
                label: 'Contact Us',
                sub: 'Admission enquiry',
                path: '/contact',
                color: '#059669',
                bg: '#D1FAE5'
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <Link to={item.path} style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="card" style={{ padding: '24px', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                    onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)'; }}
                    onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow)'; }}>
                    <div style={{ width: 48, height: 48, background: item.bg, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 14 }}>{item.icon}</div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--navy)', marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: 'var(--gray)' }}>{item.sub}</div>
                    <div style={{ marginTop: 14, fontSize: 12, fontWeight: 600, color: item.color }}>View →</div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section style={{ padding: '90px 0' }}>
        <div className="section-inner">
          <span className="section-tag">Parent Reviews</span>
          <h2 className="section-title">What Parents Say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 40 }}>
            {reviews.map((r, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ padding: 28, position: 'relative', overflow: 'hidden', transition: 'transform 0.2s' }}
                  onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 20, right: 24, fontFamily: "'Playfair Display',serif", fontSize: 72, lineHeight: 1, color: 'rgba(201,151,58,0.1)', fontWeight: 900 }}>"</div>
                  <div style={{ color: 'var(--gold)', fontSize: 16, marginBottom: 14, letterSpacing: 2 }}>{'★'.repeat(r.stars)}</div>
                  <p style={{ fontSize: 14, color: 'var(--gray)', lineHeight: 1.75, marginBottom: 22 }}>{r.text}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: r.bg, color: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13 }}>{r.initials}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--navy)' }}>{r.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--gray)' }}>{r.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--gold)', padding: '64px 0' }}>
        <div className="section-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 34, fontWeight: 900, color: 'var(--navy)', marginBottom: 8 }}>Admission or Any Query?</h2>
            <p style={{ fontSize: 15, color: 'rgba(11,31,58,0.65)' }}>Office Hours: Monday–Saturday, 8 AM – 4 PM</p>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <Link to="/contact" className="btn-navy">📞 Contact Us</Link>
            {/* <a href="mailto:info@kailashaashramschool.edu.in" style={{ background: '#fff', color: 'var(--navy)', padding: '12px 26px', borderRadius: 8, fontWeight: 600, fontSize: 14 }}>✉️ Email Us</a> */}
          </div>
        </div>
      </section>
    </div>
  );
}