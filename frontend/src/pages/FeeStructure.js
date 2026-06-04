import React from 'react';
import PageHeader from '../components/PageHeader';

const feeData = [
  {
    classes: 'Nursery, LKG & UKG',
    tuition: '₹5,000',
    admission: '₹1,000',
    exam: '₹450',
    total: '₹6,450',
  },
  {
    classes: 'Class 1 & 2',
    tuition: '₹5,500',
    admission: '₹1,000',
    exam: '₹450',
    total: '₹6,950',
  },
  {
    classes: 'Class 3 & 4',
    tuition: '₹6,000',
    admission: '₹1,000',
    exam: '₹450',
    total: '₹7,450',
  },
  {
    classes: 'Class 5 & 6',
    tuition: '₹6,500',
    admission: '₹1,000',
    exam: '₹450',
    total: '₹7,950',
  },
  {
    classes: 'Class 7 & 8',
    tuition: '₹7,000',
    admission: '₹1,000',
    exam: '₹450',
    total: '₹8,450',
  },
];

export default function FeeStructure() {
  return (
    <div className="page-wrapper">
      <PageHeader
        tag="Fee Structure"
        title="Fee Structure 2026–27"
        subtitle="Transparent and affordable fee structure. For any queries, please contact the school office."
      />

      <section style={{ padding: '56px 0', background: 'var(--light)' }}>
        <div className="section-inner">

          {/* Fee Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 24 }}>
            {feeData.map((f, i) => (
              <div key={i} style={{
                background: 'var(--white)',
                borderRadius: 16,
                overflow: 'hidden',
                border: i === 2 ? '2px solid var(--gold)' : '1px solid var(--border)',
                boxShadow: i === 2 ? '0 8px 32px rgba(201,151,58,0.15)' : 'var(--shadow)',
                transform: i === 2 ? 'scale(1.02)' : 'none',
              }}>
                {/* Card Header */}
                <div style={{
                  background: i === 2
                    ? 'linear-gradient(135deg,#0B1F3A,#1a3a5c)'
                    : 'var(--navy)',
                  padding: '20px 24px',
                }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
                    {f.classes}
                  </div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 900, color: '#fff' }}>
                    {f.tuition}
                    <span style={{ fontSize: 13, fontWeight: 400, color: 'rgba(255,255,255,0.5)', marginLeft: 4 }}>/ year</span>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '20px 24px' }}>
                  {[
                    { label: 'Tuition Fee',       amount: f.tuition },
                    { label: 'Admission Fee',      amount: f.admission },
                    { label: 'Exam & Other Fees',  amount: f.exam },
                  ].map((row, j) => (
                    <div key={j} style={{
                      display: 'flex', justifyContent: 'space-between',
                      padding: '9px 0', fontSize: 13,
                      borderBottom: '1px solid var(--border)',
                    }}>
                      <span style={{ color: 'var(--gray)' }}>{row.label}</span>
                      <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{row.amount}</span>
                    </div>
                  ))}
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    padding: '12px 0 0', marginTop: 8,
                    borderTop: '2px solid var(--gold)',
                  }}>
                    <span style={{ fontWeight: 700, color: 'var(--navy)', fontSize: 14 }}>Total / Year</span>
                    <span style={{ fontWeight: 900, color: 'var(--navy)', fontSize: 15 }}>{f.total}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Conveyance Info */}
          <div style={{
            background: 'var(--white)', borderRadius: 14,
            padding: '20px 24px', marginBottom: 16,
            border: '1px solid var(--border)',
          }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--navy)', marginBottom: 14 }}>
              🚌 Conveyance Charges (Extra)
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
              {[
                { range: 'Nearby Area',   charge: '₹400 / month' },
                { range: 'Medium Route',  charge: '₹600 / month' },
                { range: 'Long Route',    charge: '₹800 / month' },
              ].map((c, i) => (
                <div key={i} style={{
                  background: 'var(--light)', borderRadius: 10,
                  padding: '14px 16px', textAlign: 'center',
                }}>
                  <div style={{ fontSize: 12, color: 'var(--gray)', marginBottom: 4 }}>{c.range}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--navy)' }}>{c.charge}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { icon: '📝', text: 'Admission fee of ₹1,000 is charged once at the time of new admission.' },
              { icon: '📋', text: 'Exam & other charges of ₹450 cover examination, activity, and miscellaneous fees.' },
              { icon: '🚌', text: 'Conveyance charges range from ₹400 to ₹800 per month depending on the route distance.' },
              { icon: '💡', text: 'For detailed fee information or special cases, please contact the school office directly.' },
            ].map((n, i) => (
              <div key={i} style={{
                display: 'flex', gap: 12, alignItems: 'flex-start',
                background: 'rgba(201,151,58,0.06)',
                border: '1px solid rgba(201,151,58,0.2)',
                borderRadius: 10, padding: '12px 16px',
              }}>
                <span style={{ fontSize: 16 }}>{n.icon}</span>
                <span style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.5 }}>{n.text}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}