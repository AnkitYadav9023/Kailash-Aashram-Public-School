import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';

const API = process.env.REACT_APP_API;

const pillStyle = {
  Urgent: 'pill-red',
  Fee: 'pill-amber',
  Result: 'pill-green',
  Circular: 'pill-blue',
  Admission: 'pill-purple'
};

const categories = ['All', 'Urgent', 'Fee', 'Result', 'Circular', 'Admission'];

export default function Notices() {
  const [notices, setNotices] = useState([]);
  const [filter, setFilter]   = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/notices`)
      .then(res => res.json())
      .then(data => { setNotices(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = filter === 'All'
    ? notices
    : notices.filter(n => n.category === filter);

  return (
    <div className="page-wrapper">
      <PageHeader
        tag="Notices"
        title="Notices & Announcements"
        subtitle="All important notices and circulars from the school will be available here."
      />

      <section style={{ padding: '56px 0' }}>
        <div className="section-inner">

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)} style={{
                padding: '7px 18px', borderRadius: 20, border: '1px solid',
                fontSize: 13, fontWeight: 500, cursor: 'pointer',
                transition: 'all 0.2s', fontFamily: "'DM Sans',sans-serif",
                background: filter === c ? 'var(--navy)' : 'var(--white)',
                color: filter === c ? '#fff' : 'var(--gray)',
                borderColor: filter === c ? 'var(--navy)' : 'var(--border)',
              }}>{c}</button>
            ))}
          </div>

          {/* Loading */}
          {loading && (
            <div style={{ textAlign: 'center', padding: 60 }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>⏳</div>
              <div style={{ color: 'var(--gray)' }}>Loading notices...</div>
            </div>
          )}

          {/* Empty */}
          {!loading && filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 60 }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>📭</div>
              <div style={{ color: 'var(--gray)' }}>No notices found.</div>
            </div>
          )}

          {/* Notices list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {filtered.map((n, i) => (
              <div key={n.id} className="card" style={{
                padding: '20px 24px', display: 'flex',
                alignItems: 'flex-start', gap: 18,
                animation: `fadeUp 0.4s ease ${i * 0.05}s both`
              }}>
                <div style={{
                  width: 40, height: 40, background: 'var(--light)',
                  borderRadius: 10, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 18, flexShrink: 0
                }}>📋</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--navy)' }}>{n.title}</span>
                    <span className={`pill ${pillStyle[n.category] || 'pill-blue'}`}>{n.category}</span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--gray)', lineHeight: 1.6, marginBottom: 8 }}>{n.description}</p>
                  <span style={{ fontSize: 12, color: 'var(--gray)' }}>
                    📅 {new Date(n.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                </div>
                {n.file_url && (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flexShrink: 0 }}>
    {/* View Button — Google Drive preview */}
    <a 
      href={n.file_url.includes('uc?export=download&id=') 
        ? `https://drive.google.com/file/d/${n.file_url.split('id=')[1]}/view` 
        : n.file_url
      } 
      target="_blank" rel="noreferrer" style={{
        display: 'flex', alignItems: 'center', gap: 6,
        background: 'rgba(201,151,58,0.1)', color: 'var(--gold)',
        border: '1px solid rgba(201,151,58,0.3)',
        padding: '7px 14px', borderRadius: 8,
        fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap',
        textDecoration: 'none',
      }}>
      👁️ View
    </a>
    {/* Download Button */}
    <a 
      href={n.file_url} 
      target="_blank" rel="noreferrer" style={{
        display: 'flex', alignItems: 'center', gap: 6,
        background: 'rgba(11,31,58,0.06)', color: 'var(--navy)',
        border: '1px solid rgba(11,31,58,0.15)',
        padding: '7px 14px', borderRadius: 8,
        fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap',
        textDecoration: 'none',
      }}>
      📥 Download
    </a>
  </div>
)}
              </div>
            ))}
          </div>

        </div>
      </section>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  );
}