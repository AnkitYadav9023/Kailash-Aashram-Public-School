import React, { useState, useEffect } from 'react';

const ADMIN_PASSWORD = 'Ashok@123';
const API = 'https://kailash-aashram-public-school.onrender.com/api';

export default function AdminPanel() {
  const [auth, setAuth]           = useState(false);
  const [password, setPassword]   = useState('');
  const [activeTab, setActiveTab] = useState('notices');

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuth(true);
    } else {
      alert('Wrong password!');
    }
  };

  if (!auth) {
    return (
      <div style={{
        minHeight: '100vh', background: 'var(--navy)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <div style={{
          background: '#fff', borderRadius: 16, padding: '40px',
          width: 360, textAlign: 'center'
        }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🔐</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", color: 'var(--navy)', marginBottom: 24 }}>
            Admin Access
          </h2>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            style={{
              width: '100%', padding: '12px', border: '1.5px solid #E5E7EB',
              borderRadius: 8, fontSize: 14, marginBottom: 16,
              fontFamily: "'DM Sans',sans-serif", boxSizing: 'border-box'
            }}
          />
          <button onClick={handleLogin} className="btn-gold" style={{ width: '100%', padding: '12px' }}>
            Enter Admin Panel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper" style={{ background: 'var(--light)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: 'var(--navy)', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: "'Playfair Display',serif", color: '#fff', fontSize: 20, fontWeight: 700 }}>
          🏫 Admin Panel — Kailash Aashram Public School
        </div>
        <button onClick={() => setAuth(false)} style={{
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff', padding: '8px 16px', borderRadius: 8, cursor: 'pointer',
          fontSize: 13, fontFamily: "'DM Sans',sans-serif"
        }}>Logout</button>
      </div>

      {/* Tabs */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '0 32px', display: 'flex', gap: 4 }}>
        {[
          { id: 'notices', label: '📢 Notices' },
          { id: 'gallery', label: '🖼️ Gallery' },
          { id: 'reviews', label: '⭐ Reviews' },
        ].map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            padding: '16px 20px', border: 'none', background: 'transparent',
            fontSize: 14, fontWeight: 600, cursor: 'pointer',
            fontFamily: "'DM Sans',sans-serif",
            color: activeTab === tab.id ? 'var(--navy)' : 'var(--gray)',
            borderBottom: activeTab === tab.id ? '2px solid var(--navy)' : '2px solid transparent',
          }}>{tab.label}</button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: '32px', maxWidth: 1000, margin: '0 auto' }}>
        {activeTab === 'notices' && <NoticesAdmin />}
        {activeTab === 'gallery' && <GalleryAdmin />}
        {activeTab === 'reviews' && <ReviewsAdmin />}
      </div>
    </div>
  );
}

// ── NOTICES ──────────────────────────────────────────────────
function NoticesAdmin() {
  const [notices, setNotices] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', category: 'Circular', file_url: '' });
  const [editId, setEditId] = useState(null);
  const categories = ['Urgent', 'Fee', 'Result', 'Circular', 'Admission'];

  useEffect(() => { fetchNotices(); }, []);

  const fetchNotices = async () => {
    const res  = await fetch(`${API}/notices`);
    const data = await res.json();
    setNotices(data);
  };

  const handleSubmit = async () => {
    if (!form.title) return alert('Title required!');
    if (editId) {
      await fetch(`${API}/notices/${editId}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setEditId(null);
    } else {
      await fetch(`${API}/notices`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }
    setForm({ title: '', description: '', category: 'Circular', file_url: '' });
    fetchNotices();
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this notice?')) return;
    await fetch(`${API}/notices/${id}`, { method: 'DELETE' });
    fetchNotices();
  };

  const handleEdit = (n) => {
    setEditId(n.id);
    setForm({ title: n.title, description: n.description, category: n.category, file_url: n.file_url || '' });
  };

  return (
    <div>
      <div style={{ background: '#fff', borderRadius: 14, padding: 24, marginBottom: 24, border: '1px solid var(--border)' }}>
        <h3 style={{ fontFamily: "'Playfair Display',serif", color: 'var(--navy)', marginBottom: 20 }}>
          {editId ? '✏️ Edit Notice' : '➕ Add New Notice'}
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
          <div>
            <label style={labelStyle}>Notice Title *</label>
            <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })}
              placeholder="e.g. Sports Day - 28 May" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Category</label>
            <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} style={inputStyle}>
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={labelStyle}>Description</label>
          <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}
            placeholder="Notice details..." rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={labelStyle}>PDF URL — Google Drive (optional)</label>
          <input value={form.file_url} onChange={e => setForm({ ...form, file_url: e.target.value })}
            placeholder="https://drive.google.com/uc?export=download&id=..." style={inputStyle} />
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={handleSubmit} className="btn-gold">
            {editId ? '✅ Update Notice' : '➕ Add Notice'}
          </button>
          {editId && (
            <button onClick={() => { setEditId(null); setForm({ title: '', description: '', category: 'Circular', file_url: '' }); }}
              style={cancelBtnStyle}>Cancel</button>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {notices.length === 0 && (
          <div style={{ textAlign: 'center', padding: 40, color: 'var(--gray)' }}>No notices yet.</div>
        )}
        {notices.map(n => (
          <div key={n.id} style={{ background: '#fff', borderRadius: 12, padding: '16px 20px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--navy)' }}>{n.title}</span>
                <span className={`pill pill-${n.category === 'Urgent' ? 'red' : n.category === 'Fee' ? 'amber' : n.category === 'Result' ? 'green' : 'blue'}`}>
                  {n.category}
                </span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--gray)' }}>{n.description}</div>
              {n.file_url && <div style={{ fontSize: 11, color: 'var(--gold)', marginTop: 4 }}>📎 PDF attached</div>}
            </div>
            <button onClick={() => handleEdit(n)} style={editBtnStyle}>✏️ Edit</button>
            <button onClick={() => handleDelete(n.id)} style={deleteBtnStyle}>🗑️ Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── GALLERY ──────────────────────────────────────────────────
function GalleryAdmin() {
  const [photos, setPhotos] = useState([]);
  const [form, setForm]     = useState({ title: '', category: 'Annual Function', image_url: '' });
  const categories = ['Annual Function', 'Sports Day', 'Science Fair', 'Republic Day', 'Classroom', 'Other'];

  useEffect(() => { fetchPhotos(); }, []);

  const fetchPhotos = async () => {
    const res  = await fetch(`${API}/gallery`);
    const data = await res.json();
    setPhotos(data);
  };

  const handleSubmit = async () => {
    if (!form.title || !form.image_url) return alert('Title and Image URL required!');
    await fetch(`${API}/gallery`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setForm({ title: '', category: 'Annual Function', image_url: '' });
    fetchPhotos();
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this photo?')) return;
    await fetch(`${API}/gallery/${id}`, { method: 'DELETE' });
    fetchPhotos();
  };

  return (
    <div>
      <div style={{ background: '#fff', borderRadius: 14, padding: 24, marginBottom: 24, border: '1px solid var(--border)' }}>
        <h3 style={{ fontFamily: "'Playfair Display',serif", color: 'var(--navy)', marginBottom: 20 }}>➕ Add Photo</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
          <div>
            <label style={labelStyle}>Photo Title *</label>
            <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })}
              placeholder="e.g. Annual Prize Distribution" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Category</label>
            <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} style={inputStyle}>
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={labelStyle}>Cloudinary Image URL *</label>
          <input value={form.image_url} onChange={e => setForm({ ...form, image_url: e.target.value })}
            placeholder="https://res.cloudinary.com/..." style={inputStyle} />
          <div style={{ fontSize: 11, color: 'var(--gray)', marginTop: 4 }}>
            💡 Cloudinary → Assets → Upload photo → Click photo → Copy URL
          </div>
        </div>
        {form.image_url && (
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Preview</label>
            <img src={form.image_url} alt="preview" style={{ width: 200, height: 130, objectFit: 'cover', borderRadius: 8, border: '1px solid var(--border)' }} />
          </div>
        )}
        <button onClick={handleSubmit} className="btn-gold">➕ Add Photo</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
        {photos.length === 0 && (
          <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: 40, color: 'var(--gray)' }}>No photos yet.</div>
        )}
        {photos.map(p => (
          <div key={p.id} style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>
            <img src={p.image_url} alt={p.title} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)' }}>{p.title}</div>
                <div style={{ fontSize: 11, color: 'var(--gray)' }}>{p.category}</div>
              </div>
              <button onClick={() => handleDelete(p.id)} style={deleteBtnStyle}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── REVIEWS ADMIN ─────────────────────────────────────────────
function ReviewsAdmin() {
  const [pending,  setPending]  = useState([]);
  const [approved, setApproved] = useState([]);
  const [view, setView]         = useState('pending');

  useEffect(() => { fetchAll(); }, []);

  const fetchAll = async () => {
    const [p, a] = await Promise.all([
      fetch(`${API}/reviews/pending`).then(r => r.json()),
      fetch(`${API}/reviews`).then(r => r.json()),
    ]);
    setPending(p);
    setApproved(a);
  };

  const handleApprove = async (id) => {
    await fetch(`${API}/reviews/${id}/approve`, { method: 'PUT' });
    fetchAll();
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this review?')) return;
    await fetch(`${API}/reviews/${id}`, { method: 'DELETE' });
    fetchAll();
  };

  const list = view === 'pending' ? pending : approved;

  return (
    <div>
      {/* Toggle */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        <button onClick={() => setView('pending')} style={{
          padding: '8px 20px', borderRadius: 20, border: '1px solid', cursor: 'pointer',
          fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 600,
          background: view === 'pending' ? 'var(--navy)' : '#fff',
          color: view === 'pending' ? '#fff' : 'var(--gray)',
          borderColor: view === 'pending' ? 'var(--navy)' : 'var(--border)',
        }}>
          ⏳ Pending ({pending.length})
        </button>
        <button onClick={() => setView('approved')} style={{
          padding: '8px 20px', borderRadius: 20, border: '1px solid', cursor: 'pointer',
          fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 600,
          background: view === 'approved' ? 'var(--navy)' : '#fff',
          color: view === 'approved' ? '#fff' : 'var(--gray)',
          borderColor: view === 'approved' ? 'var(--navy)' : 'var(--border)',
        }}>
          ✅ Approved ({approved.length})
        </button>
      </div>

      {/* List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {list.length === 0 && (
          <div style={{ textAlign: 'center', padding: 40, color: 'var(--gray)' }}>
            {view === 'pending' ? 'No pending reviews.' : 'No approved reviews yet.'}
          </div>
        )}
        {list.map(r => (
          <div key={r.id} style={{ background: '#fff', borderRadius: 12, padding: '18px 20px', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#EEEDFE', color: '#3C3489', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13 }}>
                    {r.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--navy)' }}>{r.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--gray)' }}>{r.role}</div>
                  </div>
                  <div style={{ color: 'var(--gold)', fontSize: 14, marginLeft: 4 }}>
                    {'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}
                  </div>
                </div>
                <p style={{ fontSize: 13, color: 'var(--gray)', lineHeight: 1.65, marginBottom: 8 }}>{r.review}</p>
                <div style={{ fontSize: 11, color: 'var(--gray)' }}>
                  📅 {new Date(r.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0 }}>
                {view === 'pending' && (
                  <button onClick={() => handleApprove(r.id)} style={{
                    background: '#D1FAE5', color: '#065F46', border: 'none',
                    padding: '7px 14px', borderRadius: 6, fontSize: 12,
                    fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
                  }}>✅ Approve</button>
                )}
                <button onClick={() => handleDelete(r.id)} style={deleteBtnStyle}>🗑️ Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── SHARED STYLES ─────────────────────────────────────────────
const inputStyle = {
  width: '100%', padding: '10px 14px',
  border: '1.5px solid #E5E7EB', borderRadius: 8,
  fontSize: 14, fontFamily: "'DM Sans',sans-serif",
  boxSizing: 'border-box', background: '#FAFAF9',
};

const labelStyle = {
  display: 'block', fontSize: 11, fontWeight: 700,
  color: 'var(--navy)', textTransform: 'uppercase',
  letterSpacing: '0.06em', marginBottom: 6,
};

const editBtnStyle = {
  background: '#DBEAFE', color: '#1D4ED8', border: 'none',
  padding: '6px 12px', borderRadius: 6, fontSize: 12,
  fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
};

const deleteBtnStyle = {
  background: '#FEE2E2', color: '#B91C1C', border: 'none',
  padding: '6px 12px', borderRadius: 6, fontSize: 12,
  fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
};

const cancelBtnStyle = {
  background: 'var(--light)', color: 'var(--gray)', border: '1px solid var(--border)',
  padding: '10px 20px', borderRadius: 8, fontSize: 14,
  fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
};