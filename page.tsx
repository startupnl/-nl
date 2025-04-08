
'use client';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Welkom bij Startups.nl</h1>
      <p style={{ marginTop: '0.5rem', color: '#666' }}>
        Het platform voor de Nederlandse startup scene.
      </p>
      <input
        type="text"
        placeholder="Zoek startups, vacatures, investeerders..."
        style={{ marginTop: '1rem', padding: '0.5rem', width: '100%', maxWidth: '400px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <button style={{ display: 'block', marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px' }}>
        Bekijk startups
      </button>
    </main>
  );
}
