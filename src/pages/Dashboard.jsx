import { useNavigate } from 'react-router-dom'
import { Bell, TrendingUp, DollarSign, Users, Smartphone, Wifi, Zap, FileText, CreditCard, RefreshCw } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const chartData = [
  { day: 'Sen', omset: 850000 },
  { day: 'Sel', omset: 1200000 },
  { day: 'Rab', omset: 970000 },
  { day: 'Kam', omset: 1450000 },
  { day: 'Jum', omset: 1100000 },
  { day: 'Sab', omset: 1800000 },
  { day: 'Min', omset: 1250000 },
]

const recentTrx = [
  { icon: Smartphone, color: '#10B981', bg: 'rgba(16,185,129,0.15)', name: 'Pulsa Telkomsel 50rb', sub: '0812-3456-7890 · 14:32', amount: '-48.500', type: 'minus', status: 'success', statusLabel: 'Sukses' },
  { icon: Zap,        color: '#F59E0B', bg: 'rgba(245,158,11,0.15)',  name: 'PLN Token 100rb',    sub: '1234-5678-9012 · 13:10', amount: '-100.000', type: 'minus', status: 'success', statusLabel: 'Sukses' },
  { icon: CreditCard, color: '#6C63FF', bg: 'rgba(108,99,255,0.15)', name: 'Top Up Saldo BCA',   sub: 'Transfer · 11:00',       amount: '+1.000.000', type: 'plus', status: 'warning', statusLabel: 'Menunggu' },
  { icon: Wifi,       color: '#EF4444', bg: 'rgba(239,68,68,0.15)',   name: 'XL Axiata 15GB',    sub: '0856-1122-3344 · 09:47', amount: '-55.000',  type: 'minus', status: 'danger',  statusLabel: 'Gagal' },
]

const quickActions = [
  { icon: Smartphone, label: 'Pulsa',    color: '#a78bfa', bg: 'rgba(108,99,255,0.2)', path: '/pulsa' },
  { icon: Wifi,       label: 'Data',     color: '#22d3ee', bg: 'rgba(6,182,212,0.2)',  path: '/data' },
  { icon: Zap,        label: 'PLN',      color: '#fbbf24', bg: 'rgba(245,158,11,0.2)', path: '/pln' },
  { icon: FileText,   label: 'Tagihan',  color: '#f472b6', bg: 'rgba(236,72,153,0.2)', path: '/pln' },
]

const fmt = (n) => 'Rp ' + n.toLocaleString('id-ID')

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div style={{ background: 'rgba(13,13,26,0.9)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '8px 14px' }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: '#a78bfa' }}>{fmt(payload[0].value)}</p>
      </div>
    )
  }
  return null
}

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>

      {/* Topbar */}
      <div className="fade-in" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700, color: '#F0F4FF', letterSpacing: '-0.4px' }}>
            Selamat pagi, Agus ✦
          </h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4, fontWeight: 500 }}>
            Senin, 4 Mei 2026 · Semua sistem aktif
          </p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{
            padding: '8px 14px', borderRadius: 10, cursor: 'pointer',
            background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
            fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.6)',
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            Mei 2026
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              color: 'rgba(255,255,255,0.7)',
            }}>
              <Bell size={16} />
            </div>
            <div style={{
              position: 'absolute', top: -3, right: -3,
              width: 16, height: 16, background: '#EF4444', borderRadius: '50%',
              border: '2px solid #0D0D1A', fontSize: 9, fontWeight: 800, color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>3</div>
          </div>
        </div>
      </div>

      {/* Saldo Banner */}
      <div className="fade-in fade-in-1" style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 20, padding: '22px 26px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 20,
          background: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(236,72,153,0.12))',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', marginBottom: 6 }}>Saldo tersedia</p>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 32, fontWeight: 700, color: '#fff', letterSpacing: '-0.5px' }}>Rp 2.450.000</p>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 6, fontWeight: 500 }}>Diperbarui hari ini · 08:14 WIB</p>
        </div>
        <div style={{ display: 'flex', gap: 10, position: 'relative', zIndex: 1 }}>
          {[
            { icon: CreditCard, label: 'Top Up', onClick: () => navigate('/topup'), accent: true },
            { icon: RefreshCw, label: 'Mutasi', onClick: () => navigate('/riwayat'), accent: false },
          ].map(({ icon: Icon, label, onClick, accent }) => (
            <button key={label} onClick={onClick} style={{
              display: 'flex', alignItems: 'center', gap: 7,
              background: accent ? 'rgba(108,99,255,0.35)' : 'rgba(255,255,255,0.12)',
              border: `1px solid ${accent ? 'rgba(108,99,255,0.5)' : 'rgba(255,255,255,0.18)'}`,
              borderRadius: 12, padding: '10px 16px',
              fontSize: 12, fontWeight: 700, color: '#fff', cursor: 'pointer',
              fontFamily: "'Nunito', sans-serif", transition: 'all 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <Icon size={14} /> {label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="fade-in fade-in-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {[
          { icon: TrendingUp, label: 'Transaksi hari ini', value: '47', delta: '↑ 12%', bg: 'rgba(108,99,255,0.2)', color: '#a78bfa' },
          { icon: DollarSign, label: 'Omset hari ini',     value: '1,2 jt', delta: '↑ 8%', bg: 'rgba(6,182,212,0.2)', color: '#22d3ee' },
          { icon: Users,      label: 'Pelanggan bulan ini', value: '213', delta: 'Stabil', bg: 'rgba(16,185,129,0.2)', color: '#34d399' },
        ].map(({ icon: Icon, label, value, delta, bg, color }) => (
          <div key={label} className="glass-card" style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={17} color={color} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 99, background: 'rgba(16,185,129,0.2)', color: '#34d399' }}>{delta}</span>
            </div>
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: '-0.3px' }}>{value}</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 2, fontWeight: 600 }}>{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chart + Quick actions */}
      <div className="fade-in fade-in-3" style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: 12 }}>
        {/* Chart */}
        <div className="glass-card" style={{ padding: '18px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Omset minggu ini</p>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#34d399', background: 'rgba(16,185,129,0.15)', padding: '3px 9px', borderRadius: 99 }}>↑ 18% vs lalu</span>
          </div>
          <ResponsiveContainer width="100%" height={130}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6C63FF" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6C63FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 11, fontWeight: 600 }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="omset" stroke="#6C63FF" strokeWidth={2} fill="url(#grad)" dot={false} activeDot={{ r: 5, fill: '#a78bfa', strokeWidth: 0 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Quick Actions */}
        <div className="glass-card" style={{ padding: '18px 16px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>Transaksi cepat</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {quickActions.map(({ icon: Icon, label, color, bg, path }) => (
              <div key={label} onClick={() => navigate(path)} style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 12, padding: '12px 8px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7,
                cursor: 'pointer', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ width: 34, height: 34, borderRadius: 10, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={15} color={color} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent transactions */}
      <div className="fade-in fade-in-4">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Transaksi terbaru</p>
          <span onClick={() => navigate('/riwayat')} style={{ fontSize: 12, fontWeight: 700, color: '#a78bfa', cursor: 'pointer' }}>Lihat semua →</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {recentTrx.map((t, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 13, padding: '11px 14px',
              display: 'flex', alignItems: 'center', gap: 12,
              transition: 'all 0.15s', cursor: 'default',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
            >
              <div style={{ width: 36, height: 36, borderRadius: 10, background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <t.icon size={16} color={t.color} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>{t.name}</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 2, fontWeight: 500 }}>{t.sub}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, color: t.type === 'plus' ? '#34d399' : 'rgba(255,255,255,0.75)' }}>{t.amount}</p>
                <span className={`pill pill-${t.status}`} style={{ marginTop: 3 }}>{t.statusLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}