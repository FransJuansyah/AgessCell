import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, Smartphone, Wifi, Zap, FileText,
  Clock, CreditCard, BarChart2, Settings, LogOut, Bell
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, path: '/dashboard', label: 'Dashboard' },
  { icon: Smartphone,      path: '/pulsa',     label: 'Pulsa' },
  { icon: Wifi,            path: '/data',      label: 'Paket Data' },
  { icon: Zap,             path: '/pln',       label: 'PLN & Tagihan' },
  { icon: CreditCard,      path: '/topup',     label: 'Top Up' },
  { icon: Clock,           path: '/riwayat',   label: 'Riwayat' },
  { icon: BarChart2,       path: '/laporan',   label: 'Laporan' },
]

export default function Layout() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div style={{ display: 'flex', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Background blobs */}
      <div className="bg-scene">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>

      {/* Sidebar */}
      <aside style={{
        width: 72, flexShrink: 0,
        background: 'rgba(255,255,255,0.05)',
        borderRight: '1px solid rgba(255,255,255,0.07)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '20px 0', gap: 4, zIndex: 10, position: 'relative',
        backdropFilter: 'blur(20px)',
      }}>
        {/* Logo */}
        <div onClick={() => navigate('/dashboard')} style={{
          width: 42, height: 42, borderRadius: 14, cursor: 'pointer',
          background: 'linear-gradient(135deg, #3B82F6, #8B5CF6, #10B981)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 18, flexShrink: 0,
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
          </svg>
        </div>

        {/* Nav items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1, width: '100%', alignItems: 'center' }}>
          {navItems.map(({ icon: Icon, path, label }) => {
            const active = location.pathname === path
            return (
              <div key={path}
                title={label}
                onClick={() => navigate(path)}
                style={{
                  width: 44, height: 44, borderRadius: 13, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', transition: 'all 0.2s',
                  background: active ? 'rgba(59,130,246,0.25)' : 'transparent',
                  color: active ? '#a78bfa' : 'rgba(255,255,255,0.35)',
                }}
                onMouseEnter={e => { if (!active) { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}}
              >
                {active && (
                  <div style={{
                    position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                    width: 3, height: 24, borderRadius: '0 3px 3px 0',
                    background: 'linear-gradient(180deg, #3B82F6, #10B981)',
                  }} />
                )}
                <Icon size={18} />
                {path === '/riwayat' && (
                  <div style={{
                    position: 'absolute', top: 8, right: 8,
                    width: 7, height: 7, background: '#EF4444',
                    borderRadius: '50%', border: '1.5px solid #0D0D1A',
                  }} />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
          <div title="Pengaturan" style={{
            width: 44, height: 44, borderRadius: 13, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.3)', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.3)' }}
          >
            <Settings size={17} />
          </div>
          <div title="Logout" onClick={() => navigate('/login')} style={{
            width: 44, height: 44, borderRadius: 13, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(239,68,68,0.5)', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.1)'; e.currentTarget.style.color = '#f87171' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(239,68,68,0.5)' }}
          >
            <LogOut size={17} />
          </div>
          <div style={{
            width: 34, height: 34, borderRadius: '50%', marginTop: 6,
            background: 'linear-gradient(135deg, #3B82F6, #10B981)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 800, color: '#fff',
            border: '2px solid rgba(255,255,255,0.15)',
          }}>AG</div>
        </div>
      </aside>

      {/* Main content */}
      <main style={{
        flex: 1, overflow: 'auto', position: 'relative', zIndex: 5,
        padding: '28px 28px 28px 24px',
      }}>
        <Outlet />
      </main>
    </div>
  )
}