import React from 'react';
import PageHeader from '../components/PageHeader';

const facilities = [
  {
    icon: '🖥️',
    title: 'Smart Classrooms',
    color: '#1D4ED8',
    bg: '#DBEAFE',
    tag: 'Modern Learning',
    desc: 'Technology-enabled smart classrooms for interactive and engaging learning experiences.',
    features: [
      'Digital learning',
      'Interactive classes',
      'Visual teaching',
      'Improved understanding'
    ]
  },

  {
    icon: '🗣️',
    title: 'English Speaking Classes',
    color: '#0F6E56',
    bg: '#D1FAE5',
    tag: 'Communication Skills',
    desc: 'Special English speaking sessions to improve confidence and communication skills.',
    features: [
      'Speaking practice',
      'Daily activities',
      'Confidence building',
      'Grammar support'
    ]
  },

  {
    icon: '🎨',
    title: 'Art & Dance Classes',
    color: '#92400E',
    bg: '#FEF3C7',
    tag: 'Creative Growth',
    desc: 'Art and dance activities for creativity, confidence and personality development.',
    features: [
      'Drawing',
      'Painting',
      'Dance training',
      'Competitions'
    ]
  },

  {
    icon: '📹',
    title: 'CCTV Security',
    color: '#B91C1C',
    bg: '#FEE2E2',
    tag: 'Safe Campus',
    desc: 'School campus and classrooms monitored through CCTV for student safety.',
    features: [
      'Campus monitoring',
      'Classroom cameras',
      'Student safety',
      'Secure environment'
    ]
  },

  {
    icon: '👩‍🏫',
    title: 'Experienced Teachers',
    color: '#5B21B6',
    bg: '#EDE9FE',
    tag: 'Qualified Staff',
    desc: 'Training and guidance provided by experienced and supportive teachers.',
    features: [
      'Experienced faculty',
      'Student guidance',
      'Regular assessments',
      'Personal attention'
    ]
  },

  {
    icon: '🏫',
    title: 'Well-Furnished Classrooms',
    color: '#1a4a2a',
    bg: '#D1FAE5',
    tag: 'Comfortable Learning',
    desc: 'Clean and organized classrooms designed for better concentration.',
    features: [
      'Ventilated rooms',
      'Clean environment',
      'Camera enabled',
      'Comfortable seating'
    ]
  },

  {
    icon: '⚽',
    title: 'Playground & Activities',
    color: '#B91C1C',
    bg: '#FEE2E2',
    tag: 'Physical Development',
    desc: 'Playground facilities and extracurricular activities for all-round growth.',
    features: [
      'Playground',
      'Sports activities',
      'Outdoor games',
      'Physical fitness'
    ]
  },

  {
    icon: '🚌',
    title: 'Safe Transport',
    color: '#1D4ED8',
    bg: '#DBEAFE',
    tag: 'Secure Travel',
    desc: 'Safe transportation facilities with focus on timely pickup and drop.',
    features: [
      'Safe transport',
      'Timely service',
      'Student safety',
      'Reliable routes'
    ]
  },

  {
    icon: '🍱',
    title: 'Student Care & Discipline',
    color: '#065F46',
    bg: '#D1FAE5',
    tag: 'Overall Development',
    desc: 'Special attention to cleanliness, discipline and student well-being.',
    features: [
      'Clean environment',
      'Nutrition awareness',
      'Discipline',
      'Friendly behaviour'
    ]
  }
];

export default function Facilities() {
  return (
    <div className="page-wrapper">
      <PageHeader
        tag="Facilities"
        title="World-Class Facilities"
        subtitle="Providing modern infrastructure and essential amenities for the overall growth and development of every student."
      />
      <section style={{ padding: '56px 0' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {facilities.map((f, i) => (
              <div key={i} className="card" style={{ padding: 0, overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'default' }}
                onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow)'; }}>
                <div style={{ background: f.bg, padding: '24px 24px 20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: 36 }}>{f.icon}</span>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--navy)', marginTop: 10 }}>{f.title}</h3>
                  </div>
                  <span style={{ background: '#fff', color: f.color, fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, whiteSpace: 'nowrap' }}>{f.tag}</span>
                </div>
                <div style={{ padding: '18px 24px' }}>
                  <p style={{ fontSize: 13, color: 'var(--gray)', lineHeight: 1.65, marginBottom: 16 }}>{f.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                    {f.features.map((feat, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text)' }}>
                        <span style={{ color: 'var(--green)', fontSize: 10 }}>✔</span>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
