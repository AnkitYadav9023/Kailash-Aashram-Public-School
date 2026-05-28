import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';

const API = process.env.REACT_APP_API;

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/gallery`)
      .then(res => res.json())
      .then(data => { setPhotos(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="page-wrapper">
      <PageHeader
        tag="Gallery"
        title="School Gallery"
        subtitle="Memories and moments from our school"
      />

      <section style={{ padding: '60px 0' }}>
        <div className="section-inner">

          {/* Loading */}
          {loading && (
            <div style={{ textAlign: 'center', padding: 60 }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>⏳</div>
              <div style={{ color: 'var(--gray)' }}>Loading photos...</div>
            </div>
          )}

          {/* Empty */}
          {!loading && photos.length === 0 && (
            <div style={{ textAlign: 'center', padding: 60 }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>📷</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--navy)', marginBottom: 8 }}>
                No photos yet
              </div>
              <div style={{ fontSize: 14, color: 'var(--gray)' }}>
                Photos will appear here once added from admin panel.
              </div>
            </div>
          )}

          {/* Masonry Gallery */}
          {!loading && photos.length > 0 && (
            <div className="gallery-grid">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="gallery-card"
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  <img
                    src={photo.image_url}
                    alt={photo.title || 'gallery'}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      borderRadius: '16px'
                    }}
                  />
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      <style>{`
        .gallery-grid {
          column-count: 3;
          column-gap: 18px;
        }
        .gallery-card {
          break-inside: avoid;
          margin-bottom: 18px;
          overflow: hidden;
          border-radius: 16px;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          background: white;
        }
        @media(max-width: 900px) {
          .gallery-grid { column-count: 2; }
        }
        @media(max-width: 600px) {
          .gallery-grid { column-count: 1; }
        }
      `}</style>
    </div>
  );
}