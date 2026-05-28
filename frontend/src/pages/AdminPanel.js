import React, { useState, useEffect } from 'react';

const ADMIN_PASSWORD = 'Ashok@123';
const API = 'https://kailash-aashram-public-school-ug9v.vercel.app/api';

export default function AdminPanel() {
  const [auth, setAuth]       = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('notices');

  // Auth check
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
        }}>
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '0 32px', display: 'flex', gap: 4 }}>
        {[
          { id: 'notices',   label: '📢 Notices' },
          { id: 'gallery',   label: '🖼️ Gallery' },
          { id: 'downloads', label: '📥 Downloads' },
        ].map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            padding: '16px 20px', border: 'none', background: 'transparent',
            fontSize: 14, fontWeight: 600, cursor: 'pointer',
            fontFamily: "'DM Sans',sans-serif",
            color: activeTab === tab.id ? 'var(--navy)' : 'var(--gray)',
            borderBottom: activeTab === tab.id ? '2px solid var(--navy)' : '2px solid transparent',
          }}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: '32px', maxWidth: 1000, margin: '0 auto' }}>
        {activeTab === 'notices'   && <NoticesAdmin />}
        {activeTab === 'gallery'   && <GalleryAdmin />}
        {activeTab === 'downloads' && <DownloadsAdmin />}
      </div>
    </div>
  );
}
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
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setEditId(null);
    } else {
      await fetch(`${API}/notices`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

  const handleEdit = (notice) => {
    setEditId(notice.id);
    setForm({ title: notice.title, description: notice.description, category: notice.category, file_url: notice.file_url || '' });
  };

  return (
    <div>
      {/* Add/Edit Form */}
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
          <label style={labelStyle}>PDF URL (Cloudinary se copy karein — optional)</label>
          <input value={form.file_url} onChange={e => setForm({ ...form, file_url: e.target.value })}
            placeholder="https://res.cloudinary.com/..." style={inputStyle} />
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={handleSubmit} className="btn-gold">
            {editId ? '✅ Update Notice' : '➕ Add Notice'}
          </button>
          {editId && (
            <button onClick={() => { setEditId(null); setForm({ title: '', description: '', category: 'Circular', file_url: '' }); }}
              style={{ ...cancelBtnStyle }}>
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Notices List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {notices.length === 0 && (
          <div style={{ textAlign: 'center', padding: 40, color: 'var(--gray)' }}>No notices yet. Add one above.</div>
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

function GalleryAdmin() {
  const [photos, setPhotos]   = useState([]);
  const [form, setForm]       = useState({ title: '', category: 'Annual Function', image_url: '' });
  const categories = ['Annual Function', 'Sports Day', 'Science Fair', 'Republic Day', 'Classroom', 'Other'];

  useEffect(() => { fetchPhotos(); }, []);

  const fetchPhotos = async () => {
    const res  = await fetch(`${API}/gallery`);
    const data = await res.json();
    setPhotos(data);
  };

  const handleSubmit = async () => {
    if (!form.title || !form.image_url) return alert('Title aur Image URL required!');
    await fetch(`${API}/gallery`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
      {/* Add Form */}
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
            placeholder="https://res.cloudinary.com/your-cloud/image/upload/..." style={inputStyle} />
          <div style={{ fontSize: 11, color: 'var(--gray)', marginTop: 4 }}>
            💡 Cloudinary → Media Library → school-gallery → photo click → Copy URL
          </div>
        </div>
        {/* Preview */}
        {form.image_url && (
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Preview</label>
            <img src={form.image_url} alt="preview" style={{ width: 200, height: 130, objectFit: 'cover', borderRadius: 8, border: '1px solid var(--border)' }} />
          </div>
        )}
        <button onClick={handleSubmit} className="btn-gold">➕ Add Photo</button>
      </div>

      {/* Photos Grid */}
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
function DownloadsAdmin() {
  const [downloads, setDownloads] = useState([]);
  const [form, setForm] = useState({ name: '', file_url: '', file_size: '', category: 'Circular' });
  const categories = ['Circular', 'Admit Card', 'Result', 'Fee Challan', 'Form', 'Holiday List', 'Other'];

  useEffect(() => { fetchDownloads(); }, []);

  const fetchDownloads = async () => {
    const res  = await fetch(`${API}/downloads`);
    const data = await res.json();
    setDownloads(data);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.file_url) return alert('Name aur File URL required!');
    await fetch(`${API}/downloads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setForm({ name: '', file_url: '', file_size: '', category: 'Circular' });
    fetchDownloads();
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this file?')) return;
    await fetch(`${API}/downloads/${id}`, { method: 'DELETE' });
    fetchDownloads();
  };

  return (
    <div>
      {/* Add Form */}
      <div style={{ background: '#fff', borderRadius: 14, padding: 24, marginBottom: 24, border: '1px solid var(--border)' }}>
        <h3 style={{ fontFamily: "'Playfair Display',serif", color: 'var(--navy)', marginBottom: 20 }}>➕ Add Download</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
          <div>
            <label style={labelStyle}>File Name *</label>
            <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Admit Card Class 10" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Category</label>
            <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} style={inputStyle}>
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14, marginBottom: 20 }}>
          <div>
            <label style={labelStyle}>Cloudinary PDF URL *</label>
            <input value={form.file_url} onChange={e => setForm({ ...form, file_url: e.target.value })}
              placeholder="https://res.cloudinary.com/..." style={inputStyle} />
            <div style={{ fontSize: 11, color: 'var(--gray)', marginTop: 4 }}>
              💡 Cloudinary → Media Library → school-downloads → file click → Copy URL
            </div>
          </div>
          <div>
            <label style={labelStyle}>File Size (optional)</label>
            <input value={form.file_size} onChange={e => setForm({ ...form, file_size: e.target.value })}
              placeholder="e.g. 240 KB" style={inputStyle} />
          </div>
        </div>
        <button onClick={handleSubmit} className="btn-gold">➕ Add Download</button>
      </div>

      {/* Downloads List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {downloads.length === 0 && (
          <div style={{ textAlign: 'center', padding: 40, color: 'var(--gray)' }}>No downloads yet.</div>
        )}
        {downloads.map(d => (
          <div key={d.id} style={{ background: '#fff', borderRadius: 12, padding: '16px 20px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 40, height: 40, background: '#FAECE7', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>📄</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--navy)', marginBottom: 2 }}>{d.name}</div>
              <div style={{ fontSize: 12, color: 'var(--gray)' }}>{d.category} {d.file_size && `· ${d.file_size}`}</div>
            </div>
            <a href={d.file_url} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 600, marginRight: 8 }}>Preview</a>
            <button onClick={() => handleDelete(d.id)} style={deleteBtnStyle}>🗑️ Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
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