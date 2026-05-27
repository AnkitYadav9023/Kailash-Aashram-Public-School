import React from 'react';
import PageHeader from '../components/PageHeader';

const results = [
  { class: 'Class 12 Science', pass: 98, topScore: 98.8, topper: 'Priya Sharma', enrolled: 120, passed: 118 },
  { class: 'Class 12 Commerce', pass: 100, topScore: 96.4, topper: 'Rahul Gupta', enrolled: 80, passed: 80 },
  { class: 'Class 10', pass: 100, topScore: 97.2, topper: 'Ananya Singh', enrolled: 180, passed: 180 },
  { class: 'Class 9', pass: 96, topScore: 95.0, topper: 'Vikram Yadav', enrolled: 160, passed: 154 },
  { class: 'Class 8', pass: 99, topScore: 98.0, topper: 'Shreya Verma', enrolled: 140, passed: 139 },
];

const achievements = [
  { icon: '🥇', title: 'State Rank 3 — Class 12', desc: 'Priya Sharma ne 98.8% lekar poore UP state mein 3rd rank prapt ki' },
  { icon: '🏆', title: '8 Saal Lagaatar 100% Pass', desc: 'Class 10 aur 12 dono mein lagaatar 8 saalon se 100% pass result' },
  { icon: '🎓', title: '45 Students — IIT/NIT/NEET', desc: 'Is saal 45 students ne top engineering/medical colleges mein dakhila liya' },
  { icon: '⭐', title: 'District Best School Award', desc: '2025 mein Kanpur District ka Best Academic School award mila' },
];

export default function Results() {
  return (
    <div className="page-wrapper">
      <PageHeader tag="Parinaam" title="Academic Results 2024–25" subtitle="Hamare students ki mehnat aur teachers ki dedication ka nateeja — ek shaaandaar result." />

      <section style={{ padding: '56px 0' }}>
        <div className="section-inner">
          {/* Achievement cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 48 }}>
            {achievements.map((a, i) => (
              <div key={i} className="card" style={{ padding: '22px', borderLeft: '4px solid var(--gold)' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{a.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--navy)', marginBottom: 6 }}>{a.title}</div>
                <div style={{ fontSize: 12, color: 'var(--gray)', lineHeight: 1.6 }}>{a.desc}</div>
              </div>
            ))}
          </div>

          {/* Result table */}
          <h2 className="section-title" style={{ marginBottom: 24 }}>Class-wise Result Summary</h2>
          <div className="card" style={{ overflow: 'hidden', marginBottom: 40 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--navy)' }}>
                  {['Class', 'Enrolled', 'Passed', 'Pass %', 'Top Score', 'Topper', 'Download'].map(h => (
                    <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.07em', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}
                    onMouseOver={e => e.currentTarget.style.background = '#FDFAF6'}
                    onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                    <td style={{ padding: '14px 20px', fontWeight: 600, color: 'var(--navy)' }}>{r.class}</td>
                    <td style={{ padding: '14px 20px', fontSize: 14, color: 'var(--text)' }}>{r.enrolled}</td>
                    <td style={{ padding: '14px 20px', fontSize: 14, color: 'var(--text)' }}>{r.passed}</td>
                    <td style={{ padding: '14px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 80, height: 6, background: '#E5E7EB', borderRadius: 3, overflow: 'hidden' }}>
                          <div style={{ width: `${r.pass}%`, height: '100%', background: 'linear-gradient(90deg,var(--gold),var(--gold-light))', borderRadius: 3 }} />
                        </div>
                        <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--green)' }}>{r.pass}%</span>
                      </div>
                    </td>
                    <td style={{ padding: '14px 20px', fontWeight: 700, color: 'var(--navy)' }}>{r.topScore}%</td>
                    <td style={{ padding: '14px 20px', fontSize: 13, color: 'var(--gray)' }}>{r.topper}</td>
                    <td style={{ padding: '14px 20px' }}>
                      <a href="#" style={{ fontSize: 12, fontWeight: 600, color: 'var(--gold)', background: 'rgba(201,151,58,0.1)', border: '1px solid rgba(201,151,58,0.25)', padding: '5px 12px', borderRadius: 6 }}>📥 PDF</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Year trend */}
          <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '32px', color: '#fff' }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, marginBottom: 24 }}>5-Year Result Trend — Class 10 & 12</h3>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, height: 120 }}>
              {[
                { year: '2021', c10: 96, c12: 94 },
                { year: '2022', c10: 98, c12: 96 },
                { year: '2023', c10: 100, c12: 97 },
                { year: '2024', c10: 100, c12: 98 },
                { year: '2025', c10: 100, c12: 98 },
              ].map((d, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: '100%', display: 'flex', gap: 4, alignItems: 'flex-end', height: 90 }}>
                    <div style={{ flex: 1, background: 'var(--gold)', borderRadius: '4px 4px 0 0', height: `${d.c10}%`, opacity: 0.8 }} title={`Class 10: ${d.c10}%`} />
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.25)', borderRadius: '4px 4px 0 0', height: `${d.c12}%` }} title={`Class 12: ${d.c12}%`} />
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{d.year}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 20, marginTop: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 12, height: 12, background: 'var(--gold)', borderRadius: 3 }} />
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Class 10</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 12, height: 12, background: 'rgba(255,255,255,0.25)', borderRadius: 3 }} />
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Class 12</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
