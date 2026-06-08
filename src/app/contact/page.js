'use client';
import { useState } from 'react';
import '../globals.css';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <header>
        <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Link href="/" className="brand" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer', fontFamily: 'serif'}}>Luxe Gallery</Link>
          <nav className="nav-links">
            <Link href="/">Gallery</Link>
            <Link href="/">Artists</Link>
            <Link href="/">Exhibits</Link>
            <Link href="/about">About</Link>
            <Link href="/contact" style={{color: 'var(--accent-color)'}}>Contact</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero" style={{marginTop: '3rem', marginBottom: '4rem'}}>
          <h1 style={{marginBottom: '1rem', fontFamily: 'serif'}}>Get in Touch</h1>
          <p style={{fontSize: '1.2rem', color: '#aaa', maxWidth: '800px'}}>We'd love to hear from you. Reach out with any questions or inquiries.</p>
        </section>

        <section style={{maxWidth: '700px', margin: '0 auto', marginBottom: '4rem'}}>
          {submitted && (
            <div style={{background: '#eef9f5', border: '1px solid #d0e6dd', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', textAlign: 'center'}}>
              <h3 style={{color: '#1a7a6f', margin: 0}}>✓ Message Sent!</h3>
              <p style={{color: '#2d9d91', marginTop: '0.5rem'}}>Thank you for reaching out. We'll respond within 24 hours.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{background: '#fafaf8', border: '1px solid #e0ddd8', borderRadius: '16px', padding: '3rem'}}>
            <div style={{marginBottom: '1.5rem'}}>
              <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#333'}}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                style={{width: '100%', padding: '0.75rem', background: '#fff', border: '1px solid #d0d0ce', borderRadius: '8px', color: '#333', fontSize: '1rem', boxSizing: 'border-box'}}
              />
            </div>

            <div style={{marginBottom: '1.5rem'}}>
              <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#333'}}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                style={{width: '100%', padding: '0.75rem', background: '#fff', border: '1px solid #d0d0ce', borderRadius: '8px', color: '#333', fontSize: '1rem', boxSizing: 'border-box'}}
              />
            </div>

            <div style={{marginBottom: '1.5rem'}}>
              <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#333'}}>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this about?"
                style={{width: '100%', padding: '0.75rem', background: '#fff', border: '1px solid #d0d0ce', borderRadius: '8px', color: '#333', fontSize: '1rem', boxSizing: 'border-box'}}
              />
            </div>

            <div style={{marginBottom: '2rem'}}>
              <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#333'}}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows="6"
                style={{width: '100%', padding: '0.75rem', background: '#fff', border: '1px solid #d0d0ce', borderRadius: '8px', color: '#333', fontSize: '1rem', fontFamily: 'inherit', boxSizing: 'border-box'}}
              />
            </div>

            <button
              type="submit"
              style={{width: '100%', padding: '1rem', background: 'var(--accent-color)', border: 'none', color: '#fff', fontSize: '1.05rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer'}}
            >
              Send Message
            </button>
          </form>

          <div style={{marginTop: '3rem', padding: '2rem', background: '#fafaf8', border: '1px solid #e0ddd8', borderRadius: '16px', textAlign: 'center'}}>
            <h3 style={{marginTop: 0, fontFamily: 'serif'}}>Other Ways to Reach Us</h3>
            <p style={{color: '#666'}}>Email: contact@luxegallery.io</p>
            <p style={{color: '#666'}}>Follow us on Instagram and Twitter for gallery updates</p>
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
