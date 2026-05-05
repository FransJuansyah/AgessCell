import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Delete, Layers } from 'lucide-react'

const KEYS = ['1','2','3','4','5','6','7','8','9','','0','del']

export default function Pin() {
  const [pin, setPin] = useState([])
  const navigate = useNavigate()

  const handle = (k) => {
    if (k === 'del') { setPin(p => p.slice(0, -1)); return }
    if (k === '') return
    if (pin.length >= 6) return
    const next = [...pin, k]
    setPin(next)
    if (next.length === 6) setTimeout(() => navigate('/dashboard'), 400)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="bg-scene">
        <div className="blob blob-1" /><div className="blob blob-2" />
        <div className="blob blob-3" /><div className="blob blob-4" />
      </div>

      <div className="fade-in" style={{ position: 'relative', zIndex: 5, width: '100%', maxWidth: 360, padding: '0 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 36 }}>
          <div style={{
            width: 54, height: 54, borderRadius: 16,
            background: 'linear-gradient(135deg, #3B82F6, #8B5CF6, #10B981)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
          }}>
            <Layers size={24} color="white" />
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: '#F0F4FF' }}>Masukkan PIN</h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 6, fontWeight: 500 }}>PIN 6 digit untuk konfirmasi identitas</p>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 24, padding: '32px 24px',
          backdropFilter: 'blur(20px)',
        }}>
          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginBottom: 36 }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{
                width: 16, height: 16, borderRadius: '50%',
                background: i < pin.length
                  ? 'linear-gradient(135deg, #3B82F6, #10B981)'
                  : 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.15)',
                transition: 'all 0.15s',
                transform: i < pin.length ? 'scale(1.15)' : 'scale(1)',
              }} />
            ))}
          </div>

          {/* Keypad */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {KEYS.map((k, i) => (
              <button key={i} onClick={() => handle(k)} style={{
                height: 58, borderRadius: 14, border: '1px solid rgba(255,255,255,0.09)',
                background: k === '' ? 'transparent' : 'rgba(255,255,255,0.06)',
                cursor: k === '' ? 'default' : 'pointer',
                color: '#F0F4FF', fontSize: k === 'del' ? 12 : 22,
                fontWeight: k === 'del' ? 700 : 600,
                fontFamily: "'Space Grotesk', sans-serif",
                transition: 'all 0.15s',
                opacity: k === '' ? 0.5 : 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.15s',
              }}
                onMouseEnter={e => { if (k !== '') e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
                onMouseLeave={e => { if (k !== '') e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
              >
                {k === 'del' ? <Delete size={18} /> : k}
              </button>
            ))}
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: 20, fontSize: 12, fontWeight: 700, color: 'rgba(108,99,255,0.7)', cursor: 'pointer' }}>
          Gunakan fingerprint
        </p>
      </div>
    </div>
  )
}