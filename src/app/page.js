'use client';
import { useState } from 'react';
import './globals.css';

const CATEGORIES = ["Architecture", "Digital Art", "Sculpture", "Photography"];

const ART_ITEMS = Array.from({ length: 150 }, (_, i) => ({
  id: i + 1,
  title: `${["Obsidian", "Nebula", "Chrome", "Prism", "Ether"][i % 5]} ${["Structure", "Flow", "Light", "Shadow", "Void"][i % 5]} #${i + 1}`,
  category: CATEGORIES[i % 4],
  src: `https://picsum.photos/seed/luxeart${i + 1}/600/800`,
  artist: ["J. Doe", "A. Rivers", "M. Vance", "S. Chen"][i % 4],
  year: 2023 + (i % 4),
  description: "A breathtaking exploration of form and medium, challenging the boundaries of modern aesthetics."
}));

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArt, setSelectedArt] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [adsDisabled, setAdsDisabled] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [pendingArt, setPendingArt] = useState(null);
  const [showFloatingAd, setShowFloatingAd] = useState(true);
  const itemsPerPage = 15;

  const handleArtClick = (art) => {
    if (adsDisabled) {
      setSelectedArt(art);
    } else {
      setPendingArt(art);
      setShowInterstitial(true);
      setTimeout(() => {
        setShowInterstitial(false);
        setSelectedArt(art);
        setPendingArt(null);
      }, 5000);
    }
  };

  const filtered = ART_ITEMS.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const displayed = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="container">
      <header>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
            <div>
              <div className="logo serif" onClick={() => setActiveCategory('All')} style={{cursor: 'pointer'}}>Luxe Gallery</div>
              <p className="desktop-only" style={{marginTop: '1rem', color: 'var(--text-secondary)'}}>Curating the digital frontier.</p>
            </div>
            <button className="burger-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="#" style={{color: activeCategory === 'All' ? '#fff' : '#666', textDecoration: 'none'}} onClick={(e) => {e.preventDefault(); setActiveCategory('All'); setCurrentPage(1); setIsMobileMenuOpen(false);}}>All Works</a>
            {CATEGORIES.map(cat => (
              <a key={cat} href="#" style={{color: activeCategory === cat ? '#fff' : '#666', textDecoration: 'none'}} onClick={(e) => {e.preventDefault(); setActiveCategory(cat); setCurrentPage(1); setIsMobileMenuOpen(false);}}>{cat}</a>
            ))}
          </nav>
        </div>
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search artists or collections..." 
            value={searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value); setCurrentPage(1);}}
          />
        </div>
      </header>

      <main className="gallery-grid">
        {displayed.map((item, index) => (
          <div key={`gallery-group-${item.id}`} style={{ display: 'contents' }}>
            <div className="gallery-item" onClick={() => handleArtClick(item)}>
              <img src={item.src} alt={item.title} style={{width: '100%', height: '450px', objectFit: 'cover', background: '#0a0a0a', border: '1px solid #111'}} />
              <div className="info">
                <h3 className="serif">{item.title}</h3>
                <p>{item.category} • {item.artist}</p>
              </div>
            </div>
            {!adsDisabled && (index + 1) % 6 === 0 && (
              <div key={`ad-${item.id}`} className="gallery-ad-bar">
                <span className="ad-label">LUXE SPONSOR</span>
                <div className="ad-content">Experience High-Fidelity 8K Art Prints.</div>
              </div>
            )}
          </div>
        ))}
      </main>

      {totalPages > 1 && (
        <div className="pagination">
          <button disabled={currentPage === 1} onClick={() => {setCurrentPage(p => p - 1); window.scrollTo(0,0);}}>Prev</button>
          <span>{currentPage} / {totalPages}</span>
          <button disabled={currentPage === totalPages} onClick={() => {setCurrentPage(p => p + 1); window.scrollTo(0,0);}}>Next</button>
        </div>
      )}

      {/* Art Lightbox Modal */}
      {selectedArt && (
        <div className="modal-overlay" onClick={() => setSelectedArt(null)} style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.95)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{background: '#000', padding: '2rem', maxWidth: '1200px', width: '95%', maxHeight: '95vh', overflowY: 'auto', border: '1px solid #222', display: 'flex', gap: '4rem'}}>
            <button onClick={() => setSelectedArt(null)} style={{position: 'absolute', top: '2rem', right: '3rem', background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer'}}>&times;</button>
            <div style={{flex: 2}}>
              <img src={selectedArt.src} alt={selectedArt.title} style={{width: '100%', height: 'auto', maxHeight: '85vh', objectFit: 'contain'}} />
            </div>
      {/* Interstitial Ad Modal */}
      {showInterstitial && (
        <div className="modal-overlay" style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.95)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="modal-content" style={{background: '#000', padding: '3rem', borderRadius: '20px', maxWidth: '600px', width: '90%', textAlign: 'center', border: '1px solid #333', position: 'relative'}}>
            <span className="ad-tag" style={{display: 'inline-block', marginBottom: '1.5rem', color: '#fff', fontWeight: 'bold', letterSpacing: '2px'}}>SPONSORED CONTENT</span>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#fff'}}>Discover Premium Art Curation</h2>
            <p style={{color: '#aaa', marginBottom: '2rem'}}>Exclusive access to emerging artists and rare digital collections. Join our elite community of collectors.</p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
              <button onClick={() => {setShowInterstitial(false); setSelectedArt(pendingArt); setPendingArt(null);}} style={{padding: '1rem 2rem', background: 'transparent', border: '1px solid #444', color: '#fff', borderRadius: '8px', cursor: 'pointer'}}>Skip Ad</button>
              <button style={{padding: '1rem 2rem', background: '#fff', border: 'none', color: '#000', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer'}}>Explore</button>
            </div>
          </div>
        </div>
      )}

      {/* Premium Upgrade Modal */}
      {showPremiumModal && (
        <div className="modal-overlay" style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.85)', zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="modal-content" style={{background: '#000', padding: '4rem 3rem', borderRadius: '20px', maxWidth: '500px', width: '90%', textAlign: 'center', border: '1px solid #fff', position: 'relative'}}>
            <button onClick={() => setShowPremiumModal(false)} style={{position: 'absolute', top: '1rem', right: '1.5rem', background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer'}}×</button>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', color: '#fff'}}>LUXE <span style={{color: '#fff'}}}>PRO</span></h2>
            <p style={{color: '#aaa', fontSize: '1.1rem', marginBottom: '2rem'}}>Unlock an ad-free browsing experience, early access to exclusive collections, and premium member benefits.</p>
            <button onClick={() => {setAdsDisabled(true); setShowPremiumModal(false); setShowFloatingAd(false);}} style={{width: '100%', padding: '1.2rem', background: '#fff', border: 'none', color: '#000', fontSize: '1.2rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', marginBottom: '1rem'}}>
              Upgrade for $9.99/mo
            </button>
            <p style={{color: '#666', fontSize: '0.9rem'}}>Cancel anytime. No commitment.</p>
          </div>
        </div>
      )}

      {/* Floating Ad Banner */}
      {!adsDisabled && showFloatingAd && (
        <div style={{position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 40px)', maxWidth: '700px', background: 'rgba(20,20,20,0.95)', backdropFilter: 'blur(10px)', border: '1px solid #333', borderRadius: '16px', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100, boxShadow: '0 20px 40px rgba(0,0,0,0.5)'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <div style={{width: '40px', height: '40px', background: '#fff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold', fontSize: '1.2rem'}}>✨</div>
            <div>
              <p style={{fontSize: '0.8rem', color: '#888', margin: 0, textTransform: 'uppercase', letterSpacing: '1px'}}>Sponsored</p>
              <strong style={{color: '#fff', fontSize: '0.95rem'}}>Premium Art Canvas Prints</strong>
            </div>
          </div>
          <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
            <button style={{background: '#fff', color: '#000', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.85rem'}}>View</button>
            <button onClick={() => setShowFloatingAd(false)} style={{background: 'none', border: 'none', color: '#888', fontSize: '1.5rem', cursor: 'pointer'}}>×</button>
          </div>
        </div>
      )}

            <div style={{flex: 1, paddingTop: '4rem'}}>
              <h2 className="serif" style={{fontSize: '3rem', marginBottom: '1rem'}}>{selectedArt.title}</h2>
              <p style={{color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '2rem'}}>{selectedArt.category} • {selectedArt.year}</p>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '3rem'}}>{selectedArt.description}</p>
              <div style={{padding: '2rem', border: '1px solid #222', textAlign: 'center'}}>
                <h4 style={{marginBottom: '1rem', color: '#fff'}}>{selectedArt.artist}</h4>
                <button style={{background: '#fff', color: '#000', border: 'none', padding: '1rem 2rem', width: '100%', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600}}>Acquire Piece</button>
              </div>
              {!adsDisabled && (
                <div className="gallery-ad-bar" style={{marginTop: '2rem', padding: '2rem'}}>
                  <span className="ad-label">SPONSOR</span>
                  <div className="ad-content" style={{fontSize: '1.2rem'}}>Insure Your Collection Today.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <footer className="luxe-footer">
        <div className="footer-grid">
          <div className="footer-brand serif">Luxe.</div>
          <div className="footer-col">
            <h4>Gallery</h4>
            <a href="#">Latest</a><a href="#">Artists</a><a href="#">Exhibits</a>
          </div>
          <div className="footer-col">
            <h4>Info</h4>
            <a href="#">About</a><a href="#">Press</a><a href="#">Privacy</a>
          </div>
          <div className="footer-col">
            <h4>Social</h4>
            <a href="#">Instagram</a><a href="#">Twitter</a><a href="#">Foundation</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Luxe Gallery. | <a href="#">Terms</a> | <a href="#">Policy</a></p>
        </div>
      </footer>
    </div>
  );
}
