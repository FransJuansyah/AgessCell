import { useState } from 'react'
import { Wifi, ChevronRight, CheckCircle, Zap } from 'lucide-react'

const operators = [
  { name: 'Telkomsel', color: '#EF4444', bg: 'rgba(239,68,68,0.15)' },
  { name: 'Indosat',   color: '#F59E0B', bg: 'rgba(245,158,11,0.15)' },
  { name: 'XL Axiata', color: '#3B82F6', bg: 'rgba(59,130,246,0.15)' },
  { name: 'Tri',       color: '#8B5CF6', bg: 'rgba(139,92,246,0.15)' },
  { name: 'Smartfren', color: '#10B981', bg: 'rgba(16,185,129,0.15)' },
  { name: 'By.U',      color: '#EC4899', bg: 'rgba(236,72,153,0.15)' },
]

const pakets = {
  Telkomsel: [
    { nama: 'Combo Lite',   kuota: '1 GB',  masa: '7 hari',  harga: 13000,  bonus: '' },
    { nama: 'Combo Mini',   kuota: '3 GB',  masa: '14 hari', harga: 25000,  bonus: '500 MB malam' },
    { nama: 'Combo Seru',   kuota: '5 GB',  masa: '30 hari', harga: 45000,  bonus: '2 GB malam' },
    { nama: 'Combo Kerennn',kuota: '10 GB', masa: '30 hari', harga: 75000,  bonus: '5 GB malam' },
    { nama: 'Combo MAX',    kuota: '15 GB', masa: '30 hari', harga: 100000, bonus: '10 GB malam' },
    { nama: 'Combo ULTRA',  kuota: '30 GB', masa: '30 hari', harga: 175000, bonus: '15 GB malam' },
  ],
  Indosat: [
    { nama: 'Freedom Mini', kuota: '2 GB',  masa: '7 hari',  harga: 15000,  bonus: '' },
    { nama: 'Freedom 5GB',  kuota: '5 GB',  masa: '30 hari', harga: 40000,  bonus: '1 GB Apps' },
    { nama: 'Freedom 10GB', kuota: '10 GB', masa: '30 hari', harga: 70000,  bonus: '3 GB Apps' },
    { nama: 'Freedom 20GB', kuota: '20 GB', masa: '30 hari', harga: 120000, bonus: '5 GB Apps' },
  ],
  'XL Axiata': [
    { nama: 'XTRA Combo S',  kuota: '2 GB',  masa: '7 hari',  harga: 14000, bonus: '' },
    { nama: 'XTRA Combo M',  kuota: '6 GB',  masa: '30 hari', harga: 50000, bonus: '' },
    { nama: 'XTRA Combo L',  kuota: '12 GB', masa: '30 hari', harga: 80000, bonus: '2 GB Lokal' },
    { nama: 'XTRA Combo XL', kuota: '25 GB', masa: '30 hari', harga: 150000, bonus: '5 GB Lokal' },
  ],
  Tri: [
    { nama: 'AlwaysOn 1GB',  kuota: '1 GB',  masa: '30 hari', harga: 10000, bonus: '' },
    { nama: 'AlwaysOn 5GB',  kuota: '5 GB',  masa: '30 hari', harga: 42000, bonus: '' },
    { nama: 'AlwaysOn 10GB', kuota: '10 GB', masa: '30 hari', harga: 72000, bonus: '1 GB IG' },
    { nama: 'AlwaysOn 20GB', kuota: '20 GB', masa: '30 hari', harga: 130000, bonus: '3 GB IG' },
  ],
  Smartfren: [
    { nama: 'Unlimited Lite',   kuota: '2 GB',   masa: '30 hari', harga: 15000, bonus: '' },
    { nama: 'Unlimited Basic',  kuota: '10 GB',  masa: '30 hari', harga: 65000, bonus: '' },
    { nama: 'Unlimited Jumbo',  kuota: '25 GB',  masa: '30 hari', harga: 130000, bonus: 'Streaming HD' },
  ],
  'By.U': [
    { nama: 'By.U 2GB',   kuota: '2 GB',  masa: '30 hari', harga: 13000, bonus: '' },
    { nama: 'By.U 6GB',   kuota: '6 GB',  masa: '30 hari', harga: 35000, bonus: '' },
    { nama: 'By.U 12GB',  kuota: '12 GB', masa: '30 hari', harga: 60000, bonus: 'Sosmed gratis' },
  ],
}

export default function PaketData() {
  const [phone, setPhone] = useState('')
  const [selectedOp, setSelectedOp] = useState('Telkomsel')
  const [selectedPaket, setSelectedPaket] = useState(null)
  const [done, setDone] = useState(false)

  const list = pakets[selectedOp] || []

  if (done) return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70vh', gap: 20 }}>
      <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(6,182,212,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CheckCircle size={36} color="#22d3ee" />
      </div>
      <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 700, color: '#fff' }}>Paket Terkirim!</h2>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', textAlign: 'center', fontWeight: 500 }}>
        {selectedPaket?.nama} ({selectedPaket?.kuota}) berhasil dikirim ke<br />
        <span style={{ color: '#22d3ee', fontWeight: 700 }}>{phone}</span>
      </p>
      <button onClick={() => { setDone(false); setPhone(''); setSelectedPaket(null) }} style={{
        padding: '12px 28px', borderRadius: 12, border: 'none', cursor: 'pointer',
        background: 'linear-gradient(135deg,#06B6D4,#6C63FF)',
        color: '#fff', fontSize: 14, fontWeight: 800, fontFamily: "'Nunito',sans-serif",
      }}>Transaksi Baru</button>
    </div>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      {/* Header */}
      <div className="fade-in">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(6,182,212,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Wifi size={18} color="#22d3ee" />
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 700, color: '#F0F4FF' }}>Paket Data</h1>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginLeft: 48, fontWeight: 500 }}>Pilih paket data terbaik untuk semua operator</p>
      </div>

      {/* Nomor */}
      <div className="glass-card fade-in fade-in-1" style={{ padding: '20px 22px' }}>
        <label style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>Nomor Tujuan</label>
        <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Ketik nomor HP..." style={{
          width: '100%', padding: '13px 16px', borderRadius: 12,
          background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
          color: '#F0F4FF', fontSize: 16, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, outline: 'none',
        }}
          onFocus={e => e.target.style.borderColor = 'rgba(6,182,212,0.6)'}
          onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
        />
      </div>

      {/* Operator tabs */}
      <div className="fade-in fade-in-2">
        <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Operator</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {operators.map(op => (
            <div key={op.name} onClick={() => { setSelectedOp(op.name); setSelectedPaket(null) }} style={{
              padding: '8px 18px', borderRadius: 99, cursor: 'pointer', transition: 'all 0.2s',
              background: selectedOp === op.name ? op.bg : 'rgba(255,255,255,0.06)',
              border: `1px solid ${selectedOp === op.name ? op.color + '70' : 'rgba(255,255,255,0.09)'}`,
              fontSize: 13, fontWeight: 700,
              color: selectedOp === op.name ? op.color : 'rgba(255,255,255,0.5)',
            }}>{op.name}</div>
          ))}
        </div>
      </div>

      {/* Paket list */}
      <div className="fade-in fade-in-3">
        <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Pilih Paket</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
          {list.map((p, i) => {
            const active = selectedPaket?.nama === p.nama
            return (
              <div key={i} onClick={() => setSelectedPaket(p)} style={{
                background: active ? 'rgba(6,182,212,0.12)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${active ? 'rgba(6,182,212,0.4)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: 14, padding: '16px 16px', cursor: 'pointer', transition: 'all 0.2s',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                  <div>
                    <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 700, color: active ? '#22d3ee' : '#fff' }}>{p.kuota}</p>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 600, marginTop: 2 }}>{p.nama}</p>
                  </div>
                  {p.bonus && (
                    <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 99, background: 'rgba(245,158,11,0.2)', color: '#fbbf24', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Zap size={10} /> {p.bonus}
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>⏱ {p.masa}</span>
                  <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, fontWeight: 700, color: active ? '#22d3ee' : 'rgba(255,255,255,0.8)' }}>Rp {p.harga.toLocaleString('id-ID')}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Summary */}
      {selectedPaket && phone && (
        <div className="fade-in glass-card" style={{ padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>Total bayar</p>
            <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 24, fontWeight: 700, color: '#fff', marginTop: 2 }}>Rp {selectedPaket.harga.toLocaleString('id-ID')}</p>
            <p style={{ fontSize: 12, color: '#22d3ee', fontWeight: 600, marginTop: 2 }}>{selectedPaket.nama} · {selectedPaket.kuota} · {selectedPaket.masa}</p>
          </div> 
          <button onClick={() => setDone(true)} style={{ padding: '13px 28px', borderRadius: 13, border: 'none', cursor: 'pointer', background: 'linear-gradient(135deg,#06B6D4,#6C63FF)', color: '#fff', fontSize: 14, fontWeight: 800, fontFamily: "'Nunito',sans-serif", display: 'flex', alignItems: 'center', gap: 6, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            Beli Sekarang <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  )
}