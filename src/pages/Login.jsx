import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Layers } from 'lucide-react'

export default function Login() {
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({ phone: '', password: '' })
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/pin')
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Blobs */}
      <div className="bg-scene">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>

      <div className="fade-in" style={{ position: 'relative', zIndex: 5, width: '100%', maxWidth: 420, padding: '0 24px' }}>
        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 40 }}>
          <div style={{
            width: 60, height: 60, borderRadius: 18,
            background: 'linear-gradient(135deg, #3B82F6, #8B5CF6, #10B981)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 16,
          }}>
            <Layers size={28} color="white" />
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: '#F0F4FF', letterSpacing: '-0.5px' }}>AgesCell</h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', marginTop: 6, fontWeight: 500 }}>Platform Konter Digital Terpadu</p>
        </div>

        {/* Card */}
        <div style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 24, padding: '32px 28px',
          backdropFilter: 'blur(20px)',
        }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: '#F0F4FF', marginBottom: 6 }}>Masuk ke akun</h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 28, fontWeight: 500 }}>Masukkan nomor HP dan password kamu</p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Nomor HP</label>
              <input
                type="tel" placeholder="08xx-xxxx-xxxx" value={form.phone}
                onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                style={{
                  width: '100%', padding: '12px 16px', borderRadius: 12,
                  background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
                  color: '#F0F4FF', fontSize: 14, fontFamily: "'Nunito', sans-serif", fontWeight: 600,
                  outline: 'none', transition: 'border-color 0.2s',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={show ? 'text' : 'password'} placeholder="••••••••" value={form.password}
                  onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                  style={{
                    width: '100%', padding: '12px 44px 12px 16px', borderRadius: 12,
                    background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
                    color: '#F0F4FF', fontSize: 14, fontFamily: "'Nunito', sans-serif", fontWeight: 600,
                    outline: 'none', transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
                <button type="button" onClick={() => setShow(p => !p)} style={{
                  position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'rgba(255,255,255,0.35)', display: 'flex',
                }}>
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: -4 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#a78bfa', cursor: 'pointer' }}>Lupa password?</span>
            </div>

            <button type="submit" style={{
              width: '100%', padding: '14px', borderRadius: 12, border: 'none', cursor: 'pointer',
              background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
              color: '#fff', fontSize: 15, fontWeight: 800, fontFamily: "'Nunito', sans-serif", transition: 'opacity 0.2s',
              marginTop: 8, transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Masuk
            </button>
          </form>
        </div>

        <p style={{ textAlign: 'center', marginTop: 24, fontSize: 12, color: 'rgba(255,255,255,0.25)', fontWeight: 500 }}>
          © 2026 AgesCell · Konter Digital Indonesia
        </p>
      </div>
    </div>
  )
}