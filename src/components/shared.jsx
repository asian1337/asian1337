import React, { useState, useEffect } from 'react'

const PHOTO_IDS = {
  "hero banner — kippers": "1519708227418-c8fd9a32b7a2",
  "hero banner — isle of man coastline": "1505118380757-91f5f5632de0",
  "hero banner — family smokehouse": "1414235077428-338989a2e8c0",
  "smokehouse interior": "1559925393-8be0ec4767c8",
  "isle of man coastal landscape": "1499028344343-cd173ffc68a9",
  "douglas harbour": "1507003211169-0a1dd7228f2d",
  "split herring": "1574781330855-d3c67892bf93",
  "close-up of smoked kippers": "1476224203421-9ac39bcb3b17",
  "isle of man map": "1496196614460-0f94da35f90e",
  "vacuum-packed kippers": "1553361371-9b09f00b7cb8",
  "pair of smoked kippers": "1476224203421-9ac39bcb3b17",
  "kipper fillets": "1574781330855-d3c67892bf93",
  "gift box": "1513475382585-d06e58bcb0e0",
  "breakfast bundle": "1484723045969-3e2b1d548c76",
  "kipper pâté": "1608039829572-b60bdc1d2f15",
  "subscription box": "1556742049-0cfed4f6a45d",
  "grilled kipper": "1467003909585-2f8a72700288",
  "kipper pâté on toast": "1484723045969-3e2b1d548c76",
  "kedgeree": "1546069901-ba9599a7e63c",
  "kipper fishcakes": "1567620905732-2d1ec7ab7445",
  "kipper pasta": "1612929633738-5e4efb8b6059",
  "kipper chowder": "1547592166-23ac45744acd",
  "devereau family portrait": "1542314831-068cd1dbfeeb",
  "kippers in smokehouse — editorial": "1414235077428-338989a2e8c0",
  "press feature": "1504711434969-e33886168f5c",
  "christmas gift box": "1513475382585-d06e58bcb0e0",
  "smokehouse film still": "1559925393-8be0ec4767c8",
  "sustainability report": "1501854140801-50d01698950b",
  "easter kipper offer": "1476224203421-9ac39bcb3b17",
}

function getPhotoSrc(label) {
  const lower = label.toLowerCase()
  for (const [key, id] of Object.entries(PHOTO_IDS)) {
    if (lower.includes(key.toLowerCase())) {
      return `https://images.unsplash.com/photo-${id}?w=1200&auto=format&fit=crop&q=80`
    }
  }
  const kw = label.replace(/—.*/, '').trim().replace(/[^a-z0-9\s]/gi, '').trim().replace(/\s+/g, ',')
  return `https://source.unsplash.com/featured/1200x800/?${encodeURIComponent(kw)},food`
}

export function ImagePlaceholder({ label, aspect = '16/9', style = {} }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const id = 'stripe_' + label.replace(/\s+/g, '_').replace(/[^a-z0-9_]/gi, '').slice(0, 30)
  const src = getPhotoSrc(label)

  return (
    <div style={{ aspectRatio: aspect, width: '100%', position: 'relative', overflow: 'hidden', background: 'var(--placeholder-bg)', ...style }}>
      {(!loaded || error) && (
        <>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', inset: 0 }}>
            <defs>
              <pattern id={id} patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="10" stroke="var(--placeholder-stripe)" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${id})`} />
          </svg>
          {error && (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--placeholder-text)', background: 'var(--placeholder-label-bg)', padding: '4px 10px', letterSpacing: '0.05em' }}>{label}</span>
            </div>
          )}
        </>
      )}
      {!error && (
        <img
          src={src}
          alt={label}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
        />
      )}
    </div>
  )
}

export function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
      <div style={{ height: '1px', width: '40px', background: 'var(--accent)' }} />
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500 }}>{children}</span>
    </div>
  )
}

export function Nav({ currentPage, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [kippersOpen, setKippersOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    transition: 'background 0.3s, box-shadow 0.3s',
    background: scrolled ? 'var(--bg)' : 'transparent',
    boxShadow: scrolled ? '0 1px 0 var(--border)' : 'none',
  }

  const navInner = {
    maxWidth: '1200px', margin: '0 auto',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 32px', height: scrolled ? '64px' : '80px',
    transition: 'height 0.3s',
  }

  const linkStyle = (page) => ({
    fontFamily: 'var(--font-sans)', fontSize: '13px', letterSpacing: '0.1em',
    textTransform: 'uppercase', fontWeight: 500,
    color: currentPage === page ? 'var(--accent)' : 'var(--text)',
    cursor: 'pointer', padding: '4px 0',
    borderBottom: currentPage === page ? '1px solid var(--accent)' : '1px solid transparent',
    transition: 'color 0.2s, border-color 0.2s', textDecoration: 'none',
    background: 'none', border: 'none',
  })

  const dropdownLinkStyle = {
    display: 'block', fontFamily: 'var(--font-sans)', fontSize: '12px',
    letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500,
    color: 'var(--text)', cursor: 'pointer', padding: '10px 20px',
    transition: 'color 0.15s, background 0.15s',
    textDecoration: 'none', whiteSpace: 'nowrap',
    background: 'none', border: 'none', width: '100%', textAlign: 'left',
  }

  const dropdownStyle = (open) => ({
    position: 'absolute', top: '100%', left: '50%',
    background: 'var(--bg)', border: '1px solid var(--border)',
    minWidth: '180px', opacity: open ? 1 : 0, pointerEvents: open ? 'all' : 'none',
    transform: open ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-8px)',
    transition: 'opacity 0.2s, transform 0.2s',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  })

  const navItemStyle = { position: 'relative', display: 'flex', alignItems: 'center' }

  return (
    <nav style={navStyle}>
      <div style={navInner}>
        <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} onClick={() => setPage('home')}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', letterSpacing: '0.04em', color: 'var(--text)', lineHeight: 1 }}>Devereaus</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginTop: '2px' }}>Est. 1884 · Isle of Man</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          <div style={navItemStyle} onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <button style={linkStyle('about')} onClick={() => setPage('about')}>About</button>
            <div style={dropdownStyle(aboutOpen)}>
              <button style={dropdownLinkStyle} onClick={() => { setPage('about'); setAboutOpen(false) }}>Our Company</button>
              <button style={dropdownLinkStyle} onClick={() => { setPage('about'); setAboutOpen(false) }}>The Isle of Man</button>
            </div>
          </div>
          <div style={navItemStyle} onMouseEnter={() => setKippersOpen(true)} onMouseLeave={() => setKippersOpen(false)}>
            <button style={linkStyle('kippers')} onClick={() => setPage('kippers')}>Kippers</button>
            <div style={dropdownStyle(kippersOpen)}>
              <button style={dropdownLinkStyle} onClick={() => { setPage('kippers'); setKippersOpen(false) }}>What is a Kipper?</button>
              <button style={dropdownLinkStyle} onClick={() => { setPage('kippers'); setKippersOpen(false) }}>Sustainability</button>
              <button style={dropdownLinkStyle} onClick={() => { setPage('kippers'); setKippersOpen(false) }}>Nutritional Info</button>
              <button style={dropdownLinkStyle} onClick={() => { setPage('kippers'); setKippersOpen(false) }}>Storing</button>
            </div>
          </div>
          <button style={linkStyle('shop')} onClick={() => setPage('shop')}>Shop</button>
          <button style={linkStyle('recipes')} onClick={() => setPage('recipes')}>Recipes</button>
          <button style={linkStyle('news')} onClick={() => setPage('news')}>News &amp; Offers</button>
          <button style={linkStyle('contact')} onClick={() => setPage('contact')}>Contact</button>
          <button onClick={() => setPage('shop')} style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, padding: '10px 22px', background: 'var(--accent)', color: 'var(--btn-text)', border: 'none', cursor: 'pointer' }}>Order Now</button>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }} className="mobile-menu-btn">
          <div style={{ width: '22px', height: '2px', background: 'var(--text)', marginBottom: '5px' }} />
          <div style={{ width: '22px', height: '2px', background: 'var(--text)', marginBottom: '5px' }} />
          <div style={{ width: '22px', height: '2px', background: 'var(--text)' }} />
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '16px 24px 24px' }}>
          {[['home','Home'],['about','About'],['kippers','Kippers'],['shop','Shop'],['recipes','Recipes'],['news','News & Offers'],['contact','Contact']].map(([p, label]) => (
            <div key={p} onClick={() => { setPage(p); setMenuOpen(false) }} style={{ padding: '12px 0', fontFamily: 'var(--font-sans)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text)', cursor: 'pointer', borderBottom: '1px solid var(--border)' }}>
              {label}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}

export function Footer({ setPage }) {
  const col = { fontFamily: 'var(--font-sans)' }
  const heading = { fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px', fontWeight: 600 }
  const link = { display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '10px', cursor: 'pointer', transition: 'color 0.15s', textDecoration: 'none' }

  return (
    <footer style={{ background: 'var(--footer-bg)', borderTop: '1px solid var(--border)', padding: '64px 0 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'var(--text)', marginBottom: '4px' }}>Devereaus</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>Est. 1884 · Isle of Man</div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '280px' }}>A family-run business situated on the beautiful Isle of Man, smoking and curing the finest kippers since 1884.</p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '8px' }}>
              <div style={{ width: '36px', height: '36px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </div>
              <div style={{ width: '36px', height: '36px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="var(--text-muted)" stroke="none" /></svg>
              </div>
            </div>
          </div>

          <div style={col}>
            <div style={heading}>Navigate</div>
            {[['home','Home'],['about','About Us'],['kippers','About Kippers'],['shop','Shop'],['recipes','Recipes'],['news','News & Offers'],['contact','Contact']].map(([p, label]) => (
              <span key={p} style={link} onClick={() => setPage(p)}>{label}</span>
            ))}
          </div>

          <div style={col}>
            <div style={heading}>Learn</div>
            <span style={link} onClick={() => setPage('kippers')}>What is a Kipper?</span>
            <span style={link} onClick={() => setPage('kippers')}>Sustainability</span>
            <span style={link} onClick={() => setPage('kippers')}>Nutritional Info</span>
            <span style={link} onClick={() => setPage('kippers')}>Storing Kippers</span>
            <span style={link} onClick={() => setPage('recipes')}>Recipes</span>
          </div>

          <div style={col}>
            <div style={heading}>Find Us</div>
            <p style={{ ...link, cursor: 'default' }}>33 Castle Street<br />Douglas, Isle of Man<br />IM1 2EX</p>
            <p style={{ ...link, marginTop: '12px', cursor: 'default' }}>Factory Shop<br />Mill Road, Peel<br />Isle of Man, IM5 1TA</p>
            <a href="tel:01624673257" style={{ ...link, marginTop: '12px' }}>+44 (0) 1624 673257</a>
            <a href="mailto:enquiries@isleofmankippers.com" style={link}>enquiries@isleofmankippers.com</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-muted)' }}>© 2024 Devereaus Ltd. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms & Conditions'].map(t => (
              <span key={t} style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-muted)', cursor: 'pointer' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
