import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const timetables = {
  'Class 10': [
    { date: '15 Feb 2026', day: 'Sunday',   subject: 'Mathematics',    time: '10:30 AM – 1:30 PM', code: '041' },
    { date: '18 Feb 2026', day: 'Wednesday', subject: 'Science',       time: '10:30 AM – 1:30 PM', code: '086' },
    { date: '21 Feb 2026', day: 'Saturday', subject: 'Hindi Course-B', time: '10:30 AM – 1:30 PM', code: '085' },
    { date: '25 Feb 2026', day: 'Wednesday', subject: 'English Comm.', time: '10:30 AM – 1:30 PM', code: '101' },
    { date: '28 Feb 2026', day: 'Saturday', subject: 'Social Science', time: '10:30 AM – 1:30 PM', code: '087' },
    { date: '4 Mar 2026',  day: 'Wednesday', subject: 'Sanskrit',      time: '10:30 AM – 12:30 PM', code: '122' },
  ],
  'Class 12 Science': [
    { date: '14 Feb 2026', day: 'Saturday', subject: 'English Core',   time: '10:30 AM – 1:30 PM', code: '301' },
    { date: '17 Feb 2026', day: 'Tuesday',  subject: 'Physics',        time: '10:30 AM – 1:30 PM', code: '042' },
    { date: '20 Feb 2026', day: 'Friday',   subject: 'Chemistry',      time: '10:30 AM – 1:30 PM', code: '043' },
    { date: '24 Feb 2026', day: 'Tuesday',  subject: 'Mathematics',    time: '10:30 AM – 1:30 PM', code: '041' },
    { date: '27 Feb 2026', day: 'Friday',   subject: 'Biology',        time: '10:30 AM – 1:30 PM', code: '044' },
    { date: '3 Mar 2026',  day: 'Tuesday',  subject: 'Computer Sci.',  time: '10:30 AM – 12:30 PM', code: '083' },
  ],
  'Class 12 Commerce': [
    { date: '14 Feb 2026', day: 'Saturday', subject: 'English Core',   time: '10:30 AM – 1:30 PM', code: '301' },
    { date: '17 Feb 2026', day: 'Tuesday',  subject: 'Accountancy',    time: '10:30 AM – 1:30 PM', code: '055' },
    { date: '20 Feb 2026', day: 'Friday',   subject: 'Economics',      time: '10:30 AM – 1:30 PM', code: '030' },
    { date: '24 Feb 2026', day: 'Tuesday',  subject: 'Mathematics',    time: '10:30 AM – 1:30 PM', code: '041' },
    { date: '27 Feb 2026', day: 'Friday',   subject: 'Business Studies', time: '10:30 AM – 1:30 PM', code: '054' },
    { date: '3 Mar 2026',  day: 'Tuesday',  subject: 'Informatics Pr.', time: '10:30 AM – 12:30 PM', code: '065' },
  ],
};

export default function Exams() {
  const [activeTab, setActiveTab] = useState('Class 10');

  return (
    <div className="page-wrapper">
      <PageHeader tag="Pariksha Karyakram" title="Exam Timetable 2025–26" subtitle="CBSE Board Exam ka poora schedule. Apni class select karein aur timetable download karein." />

      <section style={{ padding: '56px 0' }}>
        <div className="section-inner">
          {/* Info banner */}
          <div style={{ background: 'rgba(201,151,58,0.08)', border: '1px solid rgba(201,151,58,0.25)', borderRadius: 12, padding: '14px 20px', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 20 }}>ℹ️</span>
            <span style={{ fontSize: 13, color: 'var(--text)' }}>
              Sabhi exams <strong>Room No. 101–110</strong> mein honge. Admit card saath laana compulsory hai. Exam se 30 minute pehle pahunchen.
            </span>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 28, borderBottom: '2px solid var(--border)', paddingBottom: 0 }}>
            {Object.keys(timetables).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                padding: '10px 20px', border: 'none', background: 'transparent', cursor: 'pointer',
                fontSize: 14, fontWeight: 600, fontFamily: "'DM Sans',sans-serif",
                color: activeTab === tab ? 'var(--navy)' : 'var(--gray)',
                borderBottom: activeTab === tab ? '2px solid var(--navy)' : '2px solid transparent',
                marginBottom: -2, transition: 'all 0.2s',
              }}>{tab}</button>
            ))}
          </div>

          {/* Table */}
          <div className="card" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '18px 24px', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#fff', fontSize: 17 }}>{activeTab} — Board Exam Schedule</span>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(201,151,58,0.2)', color: 'var(--gold-light)', border: '1px solid rgba(201,151,58,0.3)', padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 600 }}>
                📥 Download PDF
              </a>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#F9F6F1' }}>
                    {['Date', 'Day', 'Subject', 'Subject Code', 'Time'].map(h => (
                      <th key={h} style={{ padding: '12px 20px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: 'var(--gray)', letterSpacing: '0.07em', textTransform: 'uppercase', borderBottom: '1px solid var(--border)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {timetables[activeTab].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}
                      onMouseOver={e => e.currentTarget.style.background = '#FDFAF6'}
                      onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                      <td style={{ padding: '14px 20px', fontWeight: 600, color: 'var(--navy)', fontSize: 14 }}>{row.date}</td>
                      <td style={{ padding: '14px 20px', fontSize: 13, color: 'var(--gray)' }}>{row.day}</td>
                      <td style={{ padding: '14px 20px', fontSize: 14, fontWeight: 500, color: 'var(--text)' }}>{row.subject}</td>
                      <td style={{ padding: '14px 20px' }}><span className="pill pill-blue">{row.code}</span></td>
                      <td style={{ padding: '14px 20px', fontSize: 13, color: 'var(--green)', fontWeight: 600 }}>{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ padding: '14px 24px', background: '#FDFAF6', fontSize: 12, color: 'var(--gray)' }}>
              📌 Yeh schedule CBSE ke official calendar ke anusar hai. Kisi bhi badlaav ke liye school notice board check karein.
            </div>
          </div>

          {/* Important instructions */}
          <div style={{ marginTop: 40 }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: 'var(--navy)', marginBottom: 20 }}>Important Instructions</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[
                { icon: '🪪', text: 'Admit Card aur School ID saath laana compulsory hai' },
                { icon: '⏰', text: 'Exam shuru hone se 30 minute pehle pahunchen' },
                { icon: '📵', text: 'Mobile phone exam hall mein bilkul allowed nahi hai' },
                { icon: '✏️', text: 'Pencil, pen aur geometry box khud laayein' },
                { icon: '💧', text: 'Transparent water bottle allowed hai' },
                { icon: '📋', text: 'Admit card principal se sign karwaayein' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 10, padding: '14px 16px' }}>
                  <span style={{ fontSize: 18 }}>{item.icon}</span>
                  <span style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.5 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
