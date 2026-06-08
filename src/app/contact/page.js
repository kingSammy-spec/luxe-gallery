export default function Contact() {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', color: '#fff' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Contact Us</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem' }}>
        Have questions or feedback? We'd love to hear from you.
      </p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="email" placeholder="Your Email" style={{ padding: '1rem', borderRadius: '8px', background: '#222', border: '1px solid #444', color: '#fff' }} />
        <textarea placeholder="Your Message" rows="5" style={{ padding: '1rem', borderRadius: '8px', background: '#222', border: '1px solid #444', color: '#fff' }}></textarea>
        <button type="button" style={{ padding: '1rem', background: '#10b981', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Send Message</button>
      </form>
    </div>
  );
}
