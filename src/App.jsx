import React, { useState, useEffect } from 'react'
import { Nav, Footer } from './components/shared'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import KippersPage from './components/KippersPage'
import ShopPage from './components/ShopPage'
import { RecipesPage, NewsPage, ContactPage } from './components/OtherPages'

const THEMES = {
  parchment: {
    '--bg': 'oklch(97% 0.012 75)',
    '--bg-alt': 'oklch(93.5% 0.016 75)',
    '--footer-bg': 'oklch(91% 0.018 72)',
    '--text': 'oklch(20% 0.025 60)',
    '--text-muted': 'oklch(45% 0.02 65)',
    '--accent': 'oklch(52% 0.13 58)',
    '--accent-dark': 'oklch(38% 0.10 58)',
    '--border': 'oklch(86% 0.018 75)',
    '--btn-text': 'oklch(98% 0.005 75)',
    '--hero-overlay': 'linear-gradient(to bottom, rgba(30,20,10,0.45) 0%, rgba(20,12,4,0.7) 100%)',
    '--hero-text': '#fff',
    '--hero-sub': 'rgba(255,255,255,0.82)',
    '--placeholder-bg': 'oklch(90% 0.016 75)',
    '--placeholder-stripe': 'oklch(82% 0.018 75)',
    '--placeholder-text': 'oklch(55% 0.015 65)',
    '--placeholder-label-bg': 'oklch(95% 0.01 75)',
  },
  smokehouse: {
    '--bg': 'oklch(17% 0.022 55)',
    '--bg-alt': 'oklch(22% 0.026 55)',
    '--footer-bg': 'oklch(13% 0.018 55)',
    '--text': 'oklch(92% 0.01 75)',
    '--text-muted': 'oklch(68% 0.016 70)',
    '--accent': 'oklch(68% 0.15 60)',
    '--accent-dark': 'oklch(55% 0.12 60)',
    '--border': 'oklch(30% 0.028 58)',
    '--btn-text': 'oklch(12% 0.02 55)',
    '--hero-overlay': 'linear-gradient(to bottom, rgba(10,6,2,0.5) 0%, rgba(10,6,2,0.78) 100%)',
    '--hero-text': '#fff',
    '--hero-sub': 'rgba(255,255,255,0.78)',
    '--placeholder-bg': 'oklch(25% 0.024 55)',
    '--placeholder-stripe': 'oklch(32% 0.026 55)',
    '--placeholder-text': 'oklch(62% 0.018 60)',
    '--placeholder-label-bg': 'oklch(20% 0.02 55)',
  },
  coastal: {
    '--bg': 'oklch(99% 0.004 240)',
    '--bg-alt': 'oklch(95.5% 0.014 230)',
    '--footer-bg': 'oklch(93% 0.018 230)',
    '--text': 'oklch(20% 0.03 255)',
    '--text-muted': 'oklch(46% 0.028 245)',
    '--accent': 'oklch(52% 0.13 58)',
    '--accent-dark': 'oklch(38% 0.10 58)',
    '--border': 'oklch(88% 0.02 230)',
    '--btn-text': 'oklch(99% 0.004 240)',
    '--hero-overlay': 'linear-gradient(to bottom, rgba(15,25,50,0.5) 0%, rgba(15,25,50,0.75) 100%)',
    '--hero-text': '#fff',
    '--hero-sub': 'rgba(255,255,255,0.82)',
    '--placeholder-bg': 'oklch(91% 0.018 230)',
    '--placeholder-stripe': 'oklch(84% 0.02 230)',
    '--placeholder-text': 'oklch(52% 0.025 240)',
    '--placeholder-label-bg': 'oklch(97% 0.008 230)',
  },
}

function applyTheme(themeName) {
  const vars = THEMES[themeName] || THEMES.parchment
  const root = document.documentElement
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v))
}

export default function App() {
  const [page, setPage] = useState(() => localStorage.getItem('devereau_page') || 'home')
  const [theme, setTheme] = useState(() => localStorage.getItem('devereau_theme') || 'parchment')
  const [roundedButtons, setRoundedButtons] = useState(() => localStorage.getItem('devereau_rounded') === 'true')
  const [tweakOpen, setTweakOpen] = useState(false)

  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem('devereau_theme', theme)
    document.documentElement.style.setProperty('--btn-radius', roundedButtons ? '4px' : '0px')
    localStorage.setItem('devereau_rounded', roundedButtons)
  }, [theme, roundedButtons])

  const setPageAndScroll = (p) => {
    setPage(p)
    localStorage.setItem('devereau_page', p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    switch (page) {
      case 'home':    return <HomePage setPage={setPageAndScroll} />
      case 'about':   return <AboutPage />
      case 'kippers': return <KippersPage />
      case 'shop':    return <ShopPage />
      case 'recipes': return <RecipesPage />
      case 'news':    return <NewsPage />
      case 'contact': return <ContactPage />
      default:        return <HomePage setPage={setPageAndScroll} />
    }
  }

  const themeLabels = { parchment: 'Parchment', smokehouse: 'Smokehouse', coastal: 'Coastal' }
  const themeSwatches = {
    parchment:  ['oklch(97% 0.012 75)', 'oklch(52% 0.13 58)'],
    smokehouse: ['oklch(17% 0.022 55)', 'oklch(68% 0.15 60)'],
    coastal:    ['oklch(99% 0.004 240)', 'oklch(52% 0.13 58)'],
  }
  const themeDesc = { parchment: 'Warm cream & copper', smokehouse: 'Dark charcoal & gold', coastal: 'Clean white & navy' }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', transition: 'background 0.4s, color 0.4s' }}>
      <Nav currentPage={page} setPage={setPageAndScroll} />
      <main>{renderPage()}</main>
      <Footer setPage={setPageAndScroll} />

      {/* Tweaks toggle */}
      <button
        onClick={() => setTweakOpen(o => !o)}
        style={{ position: 'fixed', bottom: '24px', left: '24px', width: '44px', height: '44px', background: 'var(--accent)', color: 'var(--btn-text)', border: 'none', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200, boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
        title="Customise theme"
      >
        ⚙
      </button>

      {tweakOpen && (
        <div style={{ position: 'fixed', bottom: '80px', left: '24px', width: '280px', background: 'var(--bg)', border: '1px solid var(--border)', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', zIndex: 300, fontFamily: 'var(--font-sans)' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--text)' }}>Customise</span>
            <button onClick={() => setTweakOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '18px', lineHeight: 1, padding: '0 4px' }}>×</button>
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '10px' }}>Colour Theme</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {Object.entries(themeLabels).map(([key, label]) => (
                  <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '10px 12px', background: theme === key ? 'var(--bg-alt)' : 'transparent', border: theme === key ? '1px solid var(--accent)' : '1px solid var(--border)', transition: 'all 0.15s' }}>
                    <input type="radio" name="theme" checked={theme === key} onChange={() => setTheme(key)} style={{ accentColor: 'var(--accent)' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '13px', color: 'var(--text)', fontWeight: theme === key ? 600 : 400 }}>{label}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>{themeDesc[key]}</div>
                    </div>
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {themeSwatches[key].map((c, ci) => (
                        <div key={ci} style={{ width: '14px', height: '14px', borderRadius: '50%', background: c, border: '1px solid var(--border)' }} />
                      ))}
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '10px' }}>Button Style</div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input type="checkbox" checked={roundedButtons} onChange={e => setRoundedButtons(e.target.checked)} style={{ accentColor: 'var(--accent)', width: '16px', height: '16px' }} />
                <span style={{ fontSize: '13px', color: 'var(--text)' }}>Rounded buttons</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
