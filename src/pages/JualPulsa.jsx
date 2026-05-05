import { useState } from 'react'
import { Smartphone, ChevronRight, CheckCircle } from 'lucide-react'

const operators = [
  { name: 'Telkomsel', prefix: '0811,0812,0813,0821,0822,0823,0851,0852,0853', color: '#EF4444', bg: 'rgba(239,68,68,0.15)' },
  { name: 'Indosat',   prefix: '0814,0815,0816,0855,0856,0857,0858',           color: '#F59E0B', bg: 'rgba(245,158,11,0.15)' },
  { name: 'XL Axiata', prefix: '0817,0818,0819,0859,0877,0878',                color: '#3B82F6', bg: 'rgba(59,130,246,0.15)' },
  { name: 'Tri',       prefix: '0895,0896,0897,0898,0899',                     color: '#8B5CF6', bg: 'rgba(139,92,246,0.15)' },
  { name: 'Smartfren', prefix: '0881,0882,0883,0884,0885,0886,0887,0888,0889', color: '#10B981', bg: 'rgba(16,185,129,0.15)' },
  { name: 'By.U',      prefix: '0851',                                          color: '#EC4899', bg: 'rgba(236,72,153,0.15)' },
]

const nominals = [
  { val: 5000,   label: '5.000',   harga: 5500 },
  { val: 10000,  label: '10.000',  harga: 10500 },
  { val: 15000,  label: '15.000',  harga: 15500 },
  { val: 20000,  label: '20.000',  harga: 20500 },
  { val: 25000,  label: '25.000',  harga: 25500 },
  { val: 30000,  label: '30.000',  harga: 30500 },
  { val: 50000,  label: '50.000',  harga: 49500 },
  { val: 100000, label: '100.000', harga: 98500 },
]

export default function JualPulsa() {
  const [phone, setPhone] = useState('')
  const [selectedOp, setSelectedOp] = useState(null)
  const [selectedNom, setSelectedNom] = useState(null)
  const [done, setDone] = useState(false)

  const handleBeli = () => { if (phone && selectedOp && selectedNom) setDone(true) }

  if (done) return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70vh', gap: 20 }}>
      <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CheckCircle size={36} color="#34d399" />
      </div>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: '#fff' }}>Transaksi Berhasil!</h2>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', textAlign: 'center', fontWeight: 500 }}>
        Pulsa {selectedNom?.label} berhasil dikirim ke<br />
        <span style={{ color: '#a78bfa', fontWeight: 700 }}>{phone}</span>
      </p>
      <button onClick={() => { setDone(false); setPhone(''); setSelectedOp(null); setSelectedNom(null) }} style={{
        padding: '12px 28px', borderRadius: 12, border: 'none', cursor: 'pointer',
        background: 'linear-gradient(135deg, #6C63FF, #EC4899)',
        color: '#fff', fontSize: 14, fontWeight: 800, fontFamily: "'Nunito', sans-serif",
      }}>Transaksi Baru</button>
    </div>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div className="fade-in">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(108,99,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Smartphone size={18} color="#a78bfa" />
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: '#F0F4FF' }}>Jual Pulsa</h1>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginLeft: 48, fontWeight: 500 }}>Isi pulsa semua operator dengan harga terbaik</p>
      </div>

      {/* Input nomor */}
      <div className="glass-card fade-in fade-in-1" style={{ padding: '20px 22px' }}>
        <label style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>Nomor Tujuan</label>
        <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Ketik nomor HP..." style={{
          width: '100%', padding: '13px 16px', borderRadius: 12,
          background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
          color: '#F0F4FF', fontSize: 16, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
          outline: 'none', letterSpacing: '0.05em',
        }}
          onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,0.6)'}
          onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
        />
      </div>

      {/* Pilih operator */}
      <div className="fade-in fade-in-2">
        <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Pilih Operator</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {operators.map(op => (
            <div key={op.name} onClick={() => setSelectedOp(op)} style={{
              background: selectedOp?.name === op.name ? op.bg : 'rgba(255,255,255,0.05)',
              border: `1px solid ${selectedOp?.name === op.name ? op.color + '60' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: 13, padding: '14px 12px',
              display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', transition: 'all 0.2s',
            }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: op.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Smartphone size={15} color={op.color} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: selectedOp?.name === op.name ? '#fff' : 'rgba(255,255,255,0.6)' }}>{op.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pilih nominal */}
      <div className="fade-in fade-in-3">
        <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Pilih Nominal</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          {nominals.map(n => (
            <div key={n.val} onClick={() => setSelectedNom(n)} style={{
              background: selectedNom?.val === n.val ? 'rgba(108,99,255,0.25)' : 'rgba(255,255,255,0.05)',
              border: `1px solid ${selectedNom?.val === n.val ? 'rgba(108,99,255,0.5)' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: 13, padding: '14px 10px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s',
            }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: selectedNom?.val === n.val ? '#a78bfa' : '#fff' }}>{n.label}</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 4, fontWeight: 600 }}>Rp {n.harga.toLocaleString('id-ID')}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Summary + Beli */}
      {selectedNom && selectedOp && phone && (
        <div className="fade-in glass-card" style={{ padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>Total bayar</p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700, color: '#fff', marginTop: 2 }}>Rp {selectedNom.harga.toLocaleString('id-ID')}</p>
          </div>
          <button onClick={handleBeli} style={{
            padding: '13px 28px', borderRadius: 13, border: 'none', cursor: 'pointer',
            background: 'linear-gradient(135deg, #6C63FF, #EC4899)',
            color: '#fff', fontSize: 14, fontWeight: 800, fontFamily: "'Nunito', sans-serif",
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            Beli Sekarang <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  )
}