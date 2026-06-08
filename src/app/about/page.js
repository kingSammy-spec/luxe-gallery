'use client';
import '../globals.css';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <header>
        <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Link href="/" className="brand" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer', fontFamily: 'serif'}}>Luxe Gallery</Link>
          <nav className="nav-links">
            <Link href="/">Gallery</Link>
            <Link href="/">Artists</Link>
            <Link href="/">Exhibits</Link>
            <Link href="/about" style={{color: 'var(--accent-color)'}}>About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero" style={{marginTop: '3rem', marginBottom: '4rem'}}>
          <h1 style={{marginBottom: '1rem', fontFamily: 'serif'}}>About Luxe Gallery</h1>
          <p style={{fontSize: '1.2rem', color: '#aaa', maxWidth: '800px'}}>Celebrating artistic excellence and curating exceptional contemporary and fine art.</p>
        </section>

        <section style={{maxWidth: '900px', margin: '0 auto', marginBottom: '4rem'}}>
          <div style={{background: '#fafaf8', border: '1px solid #e0ddd8', borderRadius: '16px', padding: '3rem', marginBottom: '2rem'}}>
            <h2 style={{marginTop: 0, marginBottom: '1rem', fontFamily: 'serif'}}>Our Gallery</h2>
            <p style={{color: '#333', lineHeight: '1.8', fontSize: '1.05rem'}}>
              Luxe Gallery is a premier destination for contemporary and fine art, showcasing emerging and established artists from around the world.
              Our carefully curated collections celebrate creativity, innovation, and artistic excellence across multiple mediums and styles.
            </p>
          </div>

          <div style={{background: '#fafaf8', border: '1px solid #e0ddd8', borderRadius: '16px', padding: '3rem', marginBottom: '2rem'}}>
            <h2 style={{marginTop: 0, marginBottom: '1rem', fontFamily: 'serif'}}>Our Mission</h2>
            <p style={{color: '#333', lineHeight: '1.8', fontSize: '1.05rem'}}>
              We believe in democratizing access to fine art and fostering meaningful connections between artists and collectors.
              Through our gallery, exhibitions, and digital platform, we provide a vibrant space for artistic expression and cultural appreciation.
            </p>
          </div>

          <div style={{background: '#fafaf8', border: '1px solid #e0ddd8', borderRadius: '16px', padding: '3rem', marginBottom: '2rem'}}>
            <h2 style={{marginTop: 0, marginBottom: '1rem', fontFamily: 'serif'}}>Transparency & Trust</h2>
            <p style={{color: '#333', lineHeight: '1.8', fontSize: '1.05rem'}}>
              Luxe Gallery operates with complete transparency regarding artist partnerships and sponsored features. We maintain high standards for authenticity and credibility.
              This site uses Google AdSense to deliver relevant advertisements. These ads help us maintain our platform and support emerging artists.
            </p>
          </div>

          <div style={{background: '#fafaf8', border: '1px solid #e0ddd8', borderRadius: '16px', padding: '3rem'}}>
            <h2 style={{marginTop: 0, marginBottom: '1rem', fontFamily: 'serif'}}>Connect With Us</h2>
            <p style={{color: '#333', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem'}}>
              Interested in featuring your work or learning more about our exhibitions? Visit our <Link href="/contact" style={{color: 'var(--accent-color)', textDecoration: 'none'}}>Contact page</Link>.
            </p>
          </div>
        </section>
      </main>

      <footer className="luxe-footer">
        <div className="container footer-grid">
          <div className="footer-brand" style={{fontFamily: 'serif'}}>Luxe.</div>
          <div className="footer-col">
            <h4>Gallery</h4>
            <Link href="/">Latest</Link><Link href="/">Artists</Link><Link href="/">Exhibits</Link>
          </div>
          <div className="footer-col">
            <h4>Info</h4>
            <Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/">Press</Link>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <Link href="/">Terms</Link><Link href="/">Privacy Policy</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Luxe Gallery. | <Link href="/">Terms</Link> | <Link href="/">Privacy</Link></p>
        </div>
      </footer>
    </>
  );
}
