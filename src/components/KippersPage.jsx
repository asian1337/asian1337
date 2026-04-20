import React, { useState } from 'react'
import { ImagePlaceholder, SectionLabel } from './shared'

export default function KippersPage() {
  const [activeTab, setActiveTab] = useState('what')

  const tabs = [
    { id: 'what', label: 'What is a Kipper?' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'nutrition', label: 'Nutritional Info' },
    { id: 'storing', label: 'Storing' },
  ]

  const tabBtn = (id) => ({
    fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '0.1em',
    textTransform: 'uppercase', fontWeight: 500, padding: '14px 24px',
    background: 'none', border: 'none',
    borderBottom: activeTab === id ? '2px solid var(--accent)' : '2px solid transparent',
    color: activeTab === id ? 'var(--accent)' : 'var(--text-muted)',
    cursor: 'pointer', transition: 'color 0.2s, border-color 0.2s',
  })

  const nutritionData = [
    { nutrient: 'Energy', per100: '198 kcal', perServing: '238 kcal' },
    { nutrient: 'Protein', per100: '21.4 g', perServing: '25.7 g' },
    { nutrient: 'Total Fat', per100: '11.4 g', perServing: '13.7 g' },
    { nutrient: '— of which Omega-3', per100: '2.1 g', perServing: '2.5 g' },
    { nutrient: 'Carbohydrate', per100: '0 g', perServing: '0 g' },
    { nutrient: 'Salt', per100: '1.6 g', perServing: '1.9 g' },
    { nutrient: 'Vitamin D', per100: '14 µg', perServing: '16.8 µg' },
    { nutrient: 'Vitamin B12', per100: '12 µg', perServing: '14.4 µg' },
  ]

  return (
    <div style={{ paddingTop: '80px' }}>
      <div style={{ position: 'relative', height: '360px', overflow: 'hidden' }}>
        <ImagePlaceholder label="close-up of smoked kippers — warm tones, texture" aspect="auto" style={{ height: '100%', aspectRatio: 'unset' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-overlay)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '48px' }}>
          <SectionLabel>About Kippers</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '64px', color: '#fff', fontWeight: 400, margin: 0 }}>The Kipper</h1>
        </div>
      </div>

      <div style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg)', position: 'sticky', top: '64px', zIndex: 10 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', display: 'flex', gap: '4px' }}>
          {tabs.map(t => <button key={t.id} style={tabBtn(t.id)} onClick={() => setActiveTab(t.id)}>{t.label}</button>)}
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px' }}>

        {activeTab === 'what' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start', marginBottom: '64px' }}>
              <div>
                <SectionLabel>The Kipper Explained</SectionLabel>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text)', fontWeight: 400, marginBottom: '24px' }}>What is a Kipper?</h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '20px' }}>A kipper is a whole herring that has been split open, salted and then cold-smoked. The process is ancient — records of smoked herring date back to the 13th century — but the technique perfected on the Isle of Man is considered by many to be the finest in the world.</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '20px' }}>At Devereaus, we start with herring caught fresh in the Irish Sea. The fish are cleaned, split, brined in a light salt solution, then cold-smoked over a bed of oak and fruitwood chips for a minimum of 12 hours. The result is a deep amber colour, a rich smoky aroma, and a flavour unlike any other.</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)' }}>Kippers have been a staple of the British breakfast table for centuries and are one of the most nutritionally complete foods available — rich in Omega-3, Vitamin D, Vitamin B12 and high-quality protein.</p>
              </div>
              <div>
                <ImagePlaceholder label="split herring being laid on smoking racks" aspect="4/5" />
              </div>
            </div>
            <div style={{ background: 'var(--bg-alt)', padding: '48px', borderLeft: '3px solid var(--accent)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'var(--text)', fontWeight: 400, marginBottom: '16px' }}>The Curing Process</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
                {[
                  { step: '01', title: 'Selection', body: 'Only the finest, freshest herring from the Irish Sea are accepted.' },
                  { step: '02', title: 'Splitting', body: 'Each fish is split open by hand along the backbone to ensure even smoking.' },
                  { step: '03', title: 'Brining', body: 'A gentle salt brine draws moisture and prepares the flesh for the smoke.' },
                  { step: '04', title: 'Cold Smoking', body: '12+ hours over oak and fruitwood. Patience is the most important ingredient.' },
                ].map(s => (
                  <div key={s.step}>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', color: 'var(--accent)', opacity: 0.4, lineHeight: 1, marginBottom: '8px' }}>{s.step}</div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--text)', fontWeight: 400, marginBottom: '8px' }}>{s.title}</h4>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)' }}>{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sustainability' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '64px' }}>
              <div>
                <SectionLabel>Our Commitment</SectionLabel>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text)', fontWeight: 400, marginBottom: '24px' }}>Fishing for the Future</h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '20px' }}>The herring in the Irish Sea has sustained communities here for centuries. We take our responsibility to that heritage seriously — buying only from vessels that operate within sustainable catch limits and adhere to Manx sea fisheries regulations.</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '20px' }}>Atlantic herring (Clupea harengus) is certified as sustainable by the Marine Stewardship Council when sourced from well-managed fisheries. We work with suppliers who hold MSC certification and support active stock management.</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)' }}>Our packaging is fully recyclable. We use minimal plastic and are working towards plastic-free dispatch by 2026.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  { title: 'MSC Certified Supply Chain', body: 'All our herring comes from MSC-accredited fisheries with full traceability.' },
                  { title: 'Seasonal Fishing Only', body: 'We follow the natural herring season, refusing to source out-of-season stock.' },
                  { title: 'Recyclable Packaging', body: 'All outer packaging is recyclable. We\'re working towards eliminating all single-use plastic.' },
                  { title: 'Local Employment', body: 'We employ locally on the Isle of Man, supporting the island\'s fishing and food heritage.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', padding: '24px', background: 'var(--bg-alt)', border: '1px solid var(--border)' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', marginTop: '6px', flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--text)', fontWeight: 400, marginBottom: '6px' }}>{item.title}</h4>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'nutrition' && (
          <div style={{ maxWidth: '760px' }}>
            <SectionLabel>Nutrition</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text)', fontWeight: 400, marginBottom: '16px' }}>Nutritional Information</h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '40px' }}>Typical values per 100g and per average serving (120g) of smoked Manx kipper.</p>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--accent)' }}>
                  <th style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--btn-text)', padding: '14px 20px', textAlign: 'left', fontWeight: 500 }}>Nutrient</th>
                  <th style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--btn-text)', padding: '14px 20px', textAlign: 'right', fontWeight: 500 }}>Per 100g</th>
                  <th style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--btn-text)', padding: '14px 20px', textAlign: 'right', fontWeight: 500 }}>Per Serving (120g)</th>
                </tr>
              </thead>
              <tbody>
                {nutritionData.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'var(--bg)' : 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
                    <td style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text)', padding: '14px 20px' }}>{row.nutrient}</td>
                    <td style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-muted)', padding: '14px 20px', textAlign: 'right' }}>{row.per100}</td>
                    <td style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-muted)', padding: '14px 20px', textAlign: 'right' }}>{row.perServing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-muted)', marginTop: '16px', lineHeight: 1.6 }}>Values are typical. Actual nutritional content may vary depending on the size and fat content of the individual fish and seasonal variation.</p>
          </div>
        )}

        {activeTab === 'storing' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <SectionLabel>Storage Guide</SectionLabel>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text)', fontWeight: 400, marginBottom: '24px' }}>Keeping Your Kippers</h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '32px' }}>Our kippers are vacuum-packed and dispatched chilled. Follow these simple guidelines to keep them at their best.</p>
              {[
                { title: 'In the Refrigerator', body: 'Keep refrigerated at 2–4°C. Consume within 3 days of opening or by the date marked on the pack.', detail: 'Up to 10 days unopened' },
                { title: 'In the Freezer', body: 'Kippers freeze exceptionally well. Freeze on the day of receipt and store for up to 3 months at −18°C.', detail: 'Up to 3 months' },
                { title: 'Once Cooked', body: 'Cooked kippers can be refrigerated for up to 2 days. They also flake beautifully into pasta, pâté or fishcakes.', detail: '2 days max' },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: '24px', padding: '24px', background: 'var(--bg-alt)', border: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'start' }}>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--text)', fontWeight: 400, marginBottom: '8px' }}>{item.title}</h4>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>{item.body}</p>
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, whiteSpace: 'nowrap', paddingTop: '4px' }}>{item.detail}</div>
                </div>
              ))}
            </div>
            <div>
              <ImagePlaceholder label="vacuum-packed kippers — product packaging shot" aspect="4/5" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
