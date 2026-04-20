import React, { useState, useEffect } from 'react'
import { ImagePlaceholder, SectionLabel } from './shared'

export default function HomePage({ setPage }) {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    { label: 'hero banner — kippers over open smoke', heading: 'Smoked Over Oak', sub: 'Since 1884', body: 'The finest Manx kippers, cured and smoked the traditional way on the Isle of Man.', cta1: 'Shop Now', cta2: 'Our Story', p1: 'shop', p2: 'about' },
    { label: 'hero banner — Isle of Man coastline', heading: 'From Our Island', sub: 'Isle of Man', body: 'Caught in the cold Irish Sea and hand-prepared at our Douglas smokehouse.', cta1: 'About Kippers', cta2: 'Recipes', p1: 'kippers', p2: 'recipes' },
    { label: 'hero banner — family smokehouse interior', heading: 'A Family Legacy', sub: 'Four Generations', body: 'Passed down through four generations, our curing process remains unchanged.', cta1: 'Our Story', cta2: 'Shop', p1: 'about', p2: 'shop' },
  ]

  useEffect(() => {
    const t = setInterval(() => setActiveSlide(s => (s + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  const s = slides[activeSlide]

  const features = [
    { iconSvg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>, title: 'Family Run', body: 'Four generations of the Devereau family, proud to carry forward a tradition of quality and craft.' },
    { iconSvg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>, title: 'Responsibly Sourced', body: 'Our herring is sustainably caught in the waters of the Irish Sea, with full traceability from sea to table.' },
    { iconSvg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>, title: 'Traditional Curing', body: 'Cold-smoked over oak and fruitwood using a method handed down since Victoria\'s reign — no shortcuts.' },
    { iconSvg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>, title: 'Delivered Fresh', body: 'Vacuum-packed and dispatched overnight to your door, anywhere in the British Isles.' },
  ]

  const products = [
    { name: 'Classic Manx Kippers', sub: 'Pair · Oak Smoked', price: '£6.50', label: 'pair of smoked kippers on paper' },
    { name: 'Kipper Fillet Box', sub: '4 fillets · Boneless', price: '£14.00', label: 'kipper fillets boxed — product shot' },
    { name: 'Family Selection', sub: '8 kippers · Gift box', price: '£24.00', label: 'gift box of kippers — product shot' },
  ]

  return (
    <div>
      {/* Hero */}
      <div style={{ position: 'relative', height: '100vh', minHeight: '600px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, transition: 'opacity 0.8s' }}>
          <ImagePlaceholder label={s.label} aspect="auto" style={{ height: '100%', aspectRatio: 'unset' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-overlay)' }} />
        </div>
        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 32px', width: '100%' }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />{s.sub}
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(52px, 7vw, 88px)', lineHeight: 1.0, color: 'var(--hero-text)', fontWeight: 400, marginBottom: '24px' }}>{s.heading}</h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.7, color: 'var(--hero-sub)', marginBottom: '36px', maxWidth: '440px' }}>{s.body}</p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={() => setPage(s.p1)} style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, padding: '15px 32px', background: 'var(--accent)', color: 'var(--btn-text)', border: 'none', cursor: 'pointer' }}>{s.cta1}</button>
              <button onClick={() => setPage(s.p2)} style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, padding: '15px 32px', background: 'transparent', color: 'var(--hero-text)', border: '1px solid rgba(255,255,255,0.4)', cursor: 'pointer' }}>{s.cta2}</button>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
          {slides.map((_, i) => (
            <div key={i} onClick={() => setActiveSlide(i)} style={{ width: i === activeSlide ? '28px' : '8px', height: '2px', background: i === activeSlide ? 'var(--accent)' : 'rgba(255,255,255,0.4)', cursor: 'pointer', transition: 'width 0.3s, background 0.3s' }} />
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: '32px', right: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.3)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, width: '100%', background: 'var(--accent)', animation: 'scrollLine 1.8s ease-in-out infinite' }} />
          </div>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', writingMode: 'vertical-rl' }}>Scroll</span>
        </div>
      </div>

      {/* Heritage band */}
      <div style={{ background: 'var(--accent)', padding: '20px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '16px' }}>
          {['Established 1884', 'Isle of Man', 'Family Owned', 'Next Day Delivery'].map(t => (
            <span key={t} style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--btn-text)', fontWeight: 500 }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Welcome */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 32px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', lineHeight: 1.1, color: 'var(--text)', fontWeight: 400, marginBottom: '24px' }}>A Tradition of<br />Smoke &amp; Sea</h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '20px' }}>Since 1884, Devereaus has been curing and smoking the finest herring on the Isle of Man. Our smokehouse on Castle Street in Douglas has been the beating heart of a craft passed through four generations of the same family.</p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '32px' }}>We believe the best kippers are made slowly, with patience and care — cold-smoked over carefully selected oak, never rushed, never frozen before smoking.</p>
            <button onClick={() => setPage('about')} style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, padding: '14px 28px', background: 'transparent', color: 'var(--accent)', border: '1px solid var(--accent)', cursor: 'pointer' }}>Discover Our Heritage</button>
          </div>
          <div style={{ position: 'relative' }}>
            <ImagePlaceholder label="smokehouse interior — oak beams, hanging kippers" aspect="4/5" />
            <div style={{ position: 'absolute', bottom: '-24px', left: '-24px', background: 'var(--accent)', padding: '20px 24px', minWidth: '160px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--btn-text)', lineHeight: 1 }}>140+</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--btn-text)', opacity: 0.85, marginTop: '4px' }}>Years of craft</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div style={{ background: 'var(--bg-alt)', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <SectionLabel>Why Devereaus</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text)', fontWeight: 400 }}>What Makes Our Kippers Different</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {features.map((f, i) => (
              <div key={i} style={{ padding: '32px 24px', background: 'var(--bg)', border: '1px solid var(--border)' }}>
                <div style={{ marginBottom: '20px' }}>{f.iconSvg}</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--text)', fontWeight: 400, marginBottom: '12px' }}>{f.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)' }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products preview */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
          <div>
            <SectionLabel>The Shop</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text)', fontWeight: 400, margin: 0 }}>Order Fresh Kippers</h2>
          </div>
          <button onClick={() => setPage('shop')} style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, padding: '12px 24px', background: 'transparent', color: 'var(--accent)', border: '1px solid var(--accent)', cursor: 'pointer' }}>View All Products</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {products.map((p, i) => (
            <div key={i} style={{ cursor: 'pointer' }} onClick={() => setPage('shop')}>
              <div style={{ overflow: 'hidden', marginBottom: '16px' }}>
                <ImagePlaceholder label={p.label} aspect="3/4" />
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '6px' }}>{p.sub}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--text)', fontWeight: 400 }}>{p.name}</h3>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 600, color: 'var(--accent)' }}>{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-bleed banner */}
      <div style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
        <ImagePlaceholder label="Isle of Man coastal landscape — cliffs, sea, sky" aspect="auto" style={{ height: '100%', aspectRatio: 'unset' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-overlay)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', padding: '0 32px' }}>
          <SectionLabel>The Isle of Man</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '52px', color: '#fff', fontWeight: 400, marginBottom: '20px', maxWidth: '600px' }}>Our Island, Our Inspiration</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', color: 'rgba(255,255,255,0.8)', marginBottom: '32px', maxWidth: '480px', lineHeight: 1.7 }}>The Isle of Man's clean waters and cool climate are the perfect conditions for herring fishing — and have been for centuries.</p>
          <button onClick={() => setPage('about')} style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, padding: '14px 32px', background: 'var(--accent)', color: 'var(--btn-text)', border: 'none', cursor: 'pointer' }}>Learn More</button>
        </div>
      </div>

      {/* Newsletter */}
      <div style={{ background: 'var(--bg-alt)', padding: '80px 32px' }}>
        <div style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel>Stay in Touch</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '38px', color: 'var(--text)', fontWeight: 400, marginBottom: '16px' }}>News, Offers &amp; Recipes</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.7 }}>Join our mailing list for seasonal specials, new recipes, and stories from the smokehouse.</p>
          <div style={{ display: 'flex' }}>
            <input placeholder="Your email address" style={{ flex: 1, fontFamily: 'var(--font-sans)', fontSize: '14px', padding: '14px 18px', border: '1px solid var(--border)', borderRight: 'none', background: 'var(--bg)', color: 'var(--text)', outline: 'none' }} />
            <button style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, padding: '14px 24px', background: 'var(--accent)', color: 'var(--btn-text)', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}
