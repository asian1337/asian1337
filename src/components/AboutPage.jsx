import React from 'react'
import { ImagePlaceholder, SectionLabel } from './shared'

export default function AboutPage() {
  const timeline = [
    { year: '1884', title: 'Founded', body: 'Thomas Devereau begins smoking herring in a small Castle Street premises, supplying local markets and hotels.' },
    { year: '1920s', title: 'Growing Reputation', body: 'Word spreads beyond the Isle of Man. Devereaus begins supplying Manx kippers to the mainland by rail and steam packet.' },
    { year: '1960s', title: 'Third Generation', body: 'The business passes to Thomas\'s grandson, who modernises the smokehouse while preserving the original curing recipes.' },
    { year: '2000s', title: 'Online & Nationwide', body: 'Devereaus launches its first online shop, bringing traditional Manx kippers to doorsteps across the British Isles.' },
    { year: 'Today', title: 'Still Family Run', body: 'The fourth generation of the Devereau family runs the business from the same Douglas smokehouse, as proud as ever.' },
  ]

  return (
    <div style={{ paddingTop: '80px' }}>
      <div style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
        <ImagePlaceholder label="Douglas harbour, Isle of Man — aerial or wide shot" aspect="auto" style={{ height: '100%', aspectRatio: 'unset' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-overlay)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '48px' }}>
          <SectionLabel>Our Company</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '64px', color: '#fff', fontWeight: 400, margin: 0 }}>About Devereaus</h1>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text)', fontWeight: 400, lineHeight: 1.15, marginBottom: '24px' }}>Four Generations of Craft</h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '20px' }}>Devereaus was founded in 1884 by Thomas Devereau, a fisherman and smokehouse craftsman who believed that the finest kipper demanded patience, skill, and the best herring the Irish Sea could offer.</p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '20px' }}>Over 140 years later, the philosophy hasn't changed. We still smoke over oak and fruitwood. We still cure by hand. We still inspect every kipper before it leaves our smokehouse.</p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)' }}>What has changed is our reach — you can now order the same kippers once enjoyed only by those lucky enough to live on the Isle of Man, delivered fresh to your door anywhere in the British Isles.</p>
          </div>
          <div>
            <ImagePlaceholder label="Devereau family portrait — smokehouse setting" aspect="4/5" />
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--bg-alt)', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text)', fontWeight: 400 }}>Our Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
            {[
              { title: 'Craftsmanship', body: 'Every kipper is cold-smoked for a minimum of 12 hours. There is no shortcut that produces the same depth of flavour, and we refuse to take one.' },
              { title: 'Provenance', body: 'Our herring comes from the Irish Sea, landed at Manx ports. We know exactly where our fish comes from, every day, every batch.' },
              { title: 'Transparency', body: 'No artificial colours, no additives, no preservatives beyond the salt and smoke. Just herring, cured as it has been for centuries.' },
            ].map((v, i) => (
              <div key={i} style={{ background: 'var(--bg)', padding: '40px 32px', borderTop: '3px solid var(--accent)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: 'var(--text)', fontWeight: 400, marginBottom: '16px' }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.8, color: 'var(--text-muted)' }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <SectionLabel>Our History</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text)', fontWeight: 400 }}>140 Years of Tradition</h2>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: 'var(--border)', transform: 'translateX(-50%)' }} />
          {timeline.map((t, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', marginBottom: '48px', position: 'relative' }}>
              {i % 2 === 0 ? (
                <>
                  <div style={{ textAlign: 'right', paddingRight: '40px', paddingTop: '4px' }}>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: 'var(--accent)', marginBottom: '4px' }}>{t.year}</div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--text)', fontWeight: 400, marginBottom: '8px' }}>{t.title}</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)' }}>{t.body}</p>
                  </div>
                  <div />
                </>
              ) : (
                <>
                  <div />
                  <div style={{ paddingLeft: '40px', paddingTop: '4px' }}>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: 'var(--accent)', marginBottom: '4px' }}>{t.year}</div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--text)', fontWeight: 400, marginBottom: '8px' }}>{t.title}</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)' }}>{t.body}</p>
                  </div>
                </>
              )}
              <div style={{ position: 'absolute', left: '50%', top: '8px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent)', transform: 'translateX(-50%)' }} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--bg-alt)', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <ImagePlaceholder label="Isle of Man map or coastline — Peel or Douglas" aspect="3/2" />
          </div>
          <div>
            <SectionLabel>The Isle of Man</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text)', fontWeight: 400, marginBottom: '24px' }}>Why Here?</h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '20px' }}>The Isle of Man sits at the heart of the Irish Sea, surrounded by some of the cleanest, coldest waters in the British Isles. The herring that feed in these waters are lean, flavourful and ideal for smoking.</p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '20px' }}>The island's climate — cool, maritime and humid — is uniquely suited to the cold-smoking process, helping kippers develop their distinctive colour and flavour without drying out.</p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)' }}>The Isle of Man Kipper is protected by a geographical indication under Manx law, guaranteeing authenticity. When you buy from Devereaus, you buy the real thing.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
