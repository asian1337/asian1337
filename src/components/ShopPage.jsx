import React, { useState } from 'react'
import { ImagePlaceholder, SectionLabel } from './shared'

export default function ShopPage() {
  const [cart, setCart] = useState({})
  const [notification, setNotification] = useState(null)

  const products = [
    { id: 1, name: 'Classic Manx Kippers', sub: 'Pair · Oak Smoked', price: 6.50, desc: 'A matched pair of whole smoked kippers — the traditional breakfast kipper as it should be.', label: 'pair of smoked kippers — product shot', badge: 'Bestseller' },
    { id: 2, name: 'Kipper Fillet Box', sub: '4 fillets · Boneless', price: 14.00, desc: 'Boneless kipper fillets, perfect for those who want all the flavour with none of the bones.', label: 'boxed kipper fillets — product shot', badge: null },
    { id: 3, name: 'Family Selection', sub: '8 kippers · Gift box', price: 24.00, desc: 'Eight whole kippers in a handsome gift box — ideal for special occasions or the kipper lover in your life.', label: 'gift box of kippers — lifestyle shot', badge: 'Gift' },
    { id: 4, name: 'Breakfast Bundle', sub: '4 pairs + smoked salmon', price: 32.00, desc: 'A generous selection of Manx kippers paired with hand-sliced smoked salmon. Breakfast for a week.', label: 'breakfast bundle — kippers and smoked salmon', badge: 'Bundle' },
    { id: 5, name: 'Kipper Pâté', sub: '2 × 100g jars', price: 9.50, desc: 'Our ready-made kipper pâté — smooth, smoky, intensely flavoured. Sublime on toasted sourdough.', label: 'kipper pâté jars — product shot', badge: 'New' },
    { id: 6, name: 'Monthly Kipper Club', sub: 'Subscription · Monthly delivery', price: 18.00, desc: 'A fresh pair of kippers delivered to your door every month. Subscribe and save 15%.', label: 'subscription box — monthly kippers', badge: 'Subscribe & Save' },
  ]

  const addToCart = (product) => {
    setCart(prev => ({ ...prev, [product.id]: (prev[product.id] || 0) + 1 }))
    setNotification(product.name)
    setTimeout(() => setNotification(null), 2400)
  }

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0)
  const totalPrice = products.reduce((sum, p) => sum + (cart[p.id] || 0) * p.price, 0)

  return (
    <div style={{ paddingTop: '80px' }}>
      <div style={{ background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)', padding: '48px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <SectionLabel>Online Shop</SectionLabel>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '52px', color: 'var(--text)', fontWeight: 400, margin: 0 }}>Order Kippers</h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-muted)', marginTop: '12px' }}>Next day delivery throughout the British Isles · Vacuum packed fresh</p>
          </div>
          {totalItems > 0 && (
            <div style={{ background: 'var(--accent)', padding: '20px 28px', minWidth: '200px' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--btn-text)', opacity: 0.85, marginBottom: '8px' }}>Your Basket</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'var(--btn-text)', marginBottom: '4px' }}>£{totalPrice.toFixed(2)}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--btn-text)', opacity: 0.8, marginBottom: '16px' }}>{totalItems} item{totalItems !== 1 ? 's' : ''}</div>
              <button style={{ width: '100%', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, padding: '10px 0', background: 'var(--btn-text)', color: 'var(--accent)', border: 'none', cursor: 'pointer' }}>Checkout</button>
            </div>
          )}
        </div>
      </div>

      <div style={{ background: 'var(--text)', padding: '12px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
          {['Free delivery on orders over £30', 'Next day delivery available', 'Dispatched Mon–Thu', 'Packed in insulated boxes'].map(t => (
            <span key={t} style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '0.08em', color: 'var(--bg)', opacity: 0.85 }}>{t}</span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {products.map(p => (
            <div key={p.id} style={{ border: '1px solid var(--border)', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative' }}>
                <ImagePlaceholder label={p.label} aspect="4/3" />
                {p.badge && (
                  <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'var(--accent)', padding: '4px 12px', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--btn-text)', fontWeight: 600 }}>{p.badge}</div>
                )}
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '8px' }}>{p.sub}</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--text)', fontWeight: 400, marginBottom: '12px' }}>{p.name}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '24px', flex: 1 }}>{p.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: 'var(--text)' }}>£{p.price.toFixed(2)}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {cart[p.id] > 0 && (
                      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--accent)', fontWeight: 600 }}>×{cart[p.id]}</div>
                    )}
                    <button onClick={() => addToCart(p)} style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, padding: '12px 20px', background: 'var(--accent)', color: 'var(--btn-text)', border: 'none', cursor: 'pointer' }}>Add to Basket</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {notification && (
        <div style={{ position: 'fixed', bottom: '32px', right: '32px', background: 'var(--text)', color: 'var(--bg)', padding: '16px 24px', fontFamily: 'var(--font-sans)', fontSize: '13px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)', zIndex: 200, animation: 'fadeUp 0.3s ease' }}>
          <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Added — </span>{notification}
        </div>
      )}
    </div>
  )
}
