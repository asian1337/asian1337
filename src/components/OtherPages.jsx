import React, { useState } from 'react'
import { ImagePlaceholder, SectionLabel } from './shared'

export function RecipesPage() {
  const recipes = [
    { title: 'Classic Grilled Kippers', time: '10 min', difficulty: 'Easy', label: 'grilled kipper on plate — food photography', desc: 'The simplest and best way to eat a kipper. Grill skin-side up under a hot flame until sizzling.' },
    { title: 'Kipper Pâté on Toast', time: '15 min', difficulty: 'Easy', label: 'kipper pâté on sourdough toast — food photography', desc: 'Flake poached kipper into cream cheese with lemon zest and dill. Serve on toasted sourdough.' },
    { title: 'Kedgeree', time: '35 min', difficulty: 'Medium', label: 'kedgeree with kipper — food photography', desc: 'A Victorian breakfast classic. Kipper, basmati rice, soft-boiled eggs and a gentle curry spice.' },
    { title: 'Kipper Fishcakes', time: '40 min', difficulty: 'Medium', label: 'kipper fishcakes with salad — food photography', desc: 'Crispy on the outside, smoky and flaky within. Serve with a sharp caper and herb mayonnaise.' },
    { title: 'Kipper Pasta', time: '20 min', difficulty: 'Easy', label: 'kipper pasta with capers — food photography', desc: 'Torn kipper fillets tossed with spaghetti, capers, cherry tomatoes and good olive oil.' },
    { title: 'Smoked Kipper Chowder', time: '45 min', difficulty: 'Medium', label: 'kipper chowder in bowl — food photography', desc: 'A hearty, creamy chowder with kipper, potato, leek and a whisper of smoked paprika.' },
  ]

  return (
    <div style={{ paddingTop: '80px' }}>
      <div style={{ background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)', padding: '48px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel>Recipes</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '52px', color: 'var(--text)', fontWeight: 400, margin: '0 0 12px' }}>From Our Kitchen</h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-muted)' }}>Simple, satisfying recipes — from a five-minute breakfast to a Sunday centrepiece.</p>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {recipes.map((r, i) => (
            <div key={i} style={{ cursor: 'pointer', border: '1px solid var(--border)', background: 'var(--bg)', overflow: 'hidden' }}>
              <ImagePlaceholder label={r.label} aspect="3/2" />
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500 }}>{r.time}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500 }}>{r.difficulty}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--text)', fontWeight: 400, marginBottom: '10px' }}>{r.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function NewsPage() {
  const news = [
    { type: 'News', date: 'March 2024', title: 'New Spring Season Kippers Now Available', body: 'Our first catch of the new season has arrived — fresher than ever, the spring herring are leaner and full of flavour. Order yours now while stocks last.', label: 'kippers in smokehouse — editorial' },
    { type: 'Offer', date: 'March 2024', title: '20% Off Family Boxes This Easter', body: 'Treat the family to proper Manx kippers this Easter. Use code EASTER24 at checkout for 20% off all family selection boxes.', label: 'easter kipper offer — promotional' },
    { type: 'News', date: 'January 2024', title: 'Devereaus Featured in The Times Food Section', body: 'We were delighted to be included in The Times\' guide to the finest mail-order smoked fish in Britain. A wonderful start to the year.', label: 'press feature — The Times — editorial' },
    { type: 'Offer', date: 'December 2023', title: 'Christmas Gift Boxes — Order by 20th December', body: 'Our handsome kipper gift boxes make an unusual and memorable Christmas present. Order by the 20th for guaranteed Christmas delivery.', label: 'christmas gift box — product shot' },
    { type: 'News', date: 'October 2023', title: 'Behind the Smokehouse: A Short Film', body: 'We commissioned a short documentary about our smokehouse and curing process. Watch it on our YouTube channel.', label: 'smokehouse film still — editorial' },
    { type: 'News', date: 'August 2023', title: 'Sustainability Report 2023 Published', body: 'Read about our commitments and progress on sustainable sourcing, packaging reduction and island employment in our annual sustainability report.', label: 'sustainability report — editorial' },
  ]

  return (
    <div style={{ paddingTop: '80px' }}>
      <div style={{ background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)', padding: '48px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel>Latest</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '52px', color: 'var(--text)', fontWeight: 400, margin: '0 0 12px' }}>News &amp; Offers</h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-muted)' }}>Stories from the smokehouse, seasonal offers and what we've been up to.</p>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
          {news.map((n, i) => (
            <div key={i} style={{ border: '1px solid var(--border)', background: 'var(--bg)', overflow: 'hidden', display: 'flex', cursor: 'pointer' }}>
              <div style={{ width: '160px', flexShrink: 0 }}>
                <ImagePlaceholder label={n.label} aspect="auto" style={{ height: '100%', aspectRatio: 'unset' }} />
              </div>
              <div style={{ padding: '24px', flex: 1 }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--btn-text)', background: n.type === 'Offer' ? 'var(--accent)' : 'var(--text)', padding: '3px 10px', fontWeight: 600 }}>{n.type}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-muted)' }}>{n.date}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--text)', fontWeight: 400, marginBottom: '10px', lineHeight: 1.3 }}>{n.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>{n.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const inputStyle = { width: '100%', fontFamily: 'var(--font-sans)', fontSize: '14px', padding: '14px 16px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }
  const labelStyle = { fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, display: 'block', marginBottom: '8px' }

  return (
    <div style={{ paddingTop: '80px' }}>
      <div style={{ background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)', padding: '48px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel>Get in Touch</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '52px', color: 'var(--text)', fontWeight: 400, margin: 0 }}>Contact Us</h1>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: 'var(--text)', fontWeight: 400, marginBottom: '32px' }}>Send Us a Message</h2>
            {submitted ? (
              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderTop: '3px solid var(--accent)', padding: '40px 32px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: 'var(--accent)', marginBottom: '12px' }}>Thank you</div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.7 }}>We've received your message and will be in touch within one working day.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Name</label>
                    <input required style={inputStyle} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input required type="email" style={inputStyle} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Subject</label>
                  <input style={inputStyle} value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" />
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea required rows={6} style={{ ...inputStyle, resize: 'vertical' }} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Your message..." />
                </div>
                <button type="submit" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, padding: '16px 32px', background: 'var(--accent)', color: 'var(--btn-text)', border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}>Send Message</button>
              </form>
            )}
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: 'var(--text)', fontWeight: 400, marginBottom: '32px' }}>Visit or Call</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { title: 'Main Shop & Offices', lines: ['33 Castle Street', 'Douglas', 'Isle of Man, IM1 2EX', '', 'Tel: +44 (0) 1624 673257', 'Fax: +44 (0) 1624 661741', 'enquiries@isleofmankippers.com'] },
                { title: 'Factory Shop', lines: ['Mill Road', 'Peel', 'Isle of Man, IM5 1TA', '', 'Tel: +44 (0) 1624 843160'] },
              ].map((loc, i) => (
                <div key={i} style={{ padding: '28px 24px', background: 'var(--bg-alt)', border: '1px solid var(--border)', borderLeft: '3px solid var(--accent)' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--text)', fontWeight: 400, marginBottom: '16px' }}>{loc.title}</h3>
                  {loc.lines.map((line, j) =>
                    line === '' ? <div key={j} style={{ height: '8px' }} /> :
                      <div key={j} style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: line.includes('@') || line.startsWith('Tel') || line.startsWith('Fax') ? 'var(--accent)' : 'var(--text-muted)', lineHeight: 1.8 }}>{line}</div>
                  )}
                </div>
              ))}
              <div style={{ padding: '24px', background: 'var(--bg-alt)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--text)', fontWeight: 400, marginBottom: '8px' }}>Order Enquiries</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>For order updates, tracking or delivery queries, please email us or call the main shop. We respond to all enquiries within one working day, Mon–Fri.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
