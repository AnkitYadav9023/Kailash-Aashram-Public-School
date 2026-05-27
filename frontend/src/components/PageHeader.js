import React from 'react';

export default function PageHeader({ tag, title, subtitle }) {
  return (
    <div style={{
      background: 'var(--navy)',
      padding: '64px 0 56px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* bg grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 50% 80% at 80% 50%, rgba(201,151,58,0.1) 0%, transparent 70%)',
      }} />
      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-tag">{tag}</span>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 46, fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 14 }}>
          {title}
        </h1>
        {subtitle && <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 540, lineHeight: 1.7 }}>{subtitle}</p>}
      </div>
    </div>
  );
}
