import { useState } from 'react'
import { Zap, Droplets, Tv, Heart, Phone, ChevronRight, CheckCircle } from 'lucide-react'

const categories = [
  { id: 'pln',    label: 'PLN Token',   icon: Zap,      color: '#fbbf24', bg: 'rgba(245,158,11,0.2)' },
  { id: 'pdam',   label: 'PDAM / Air',  icon: Droplets, color: '#22d3ee', bg: 'rgba(6,182,212,0.2)' },
  { id: 'bpjs',   label: 'BPJS',        icon: Heart,    color: '#f472b6', bg: 'rgba(236,72,153,0.2)' },
  { id: 'tv',     label: 'TV Kabel',    icon: Tv,       color: '#a78bfa', bg: 'rgba(108,99,255,0.2)' },
  { id: 'telpon', label: 'Telepon',     icon: Phone,    color: '#34d399', bg: 'rgba(16,185,129,0.2)' },
]

const nominalPLN = [20000,50000,100000,150000,200000,500000]

const mockTagihan = {
  pdam:   { nama: 'PDAM Tirta Moedal', tagihan: 87500, periode: 'April 2026', pelanggan: 'Agus Santoso' },
  bpjs:   { nama: 'BPJS Kesehatan',   tagihan: 150000, periode: 'Mei 2026',   pelanggan: '0001234567890' },
  telpon: { nama: 'Telkom IndiHome',  tagihan: 385000, periode: 'Mei 2026',   pelanggan: 'Agus Santoso' },
}

export default function PLNTagihan() {
  const [cat, setCat]           = useState('pln')
  const [idPel, setIdPel]       = useState('')
  const [nominalPln, setNomPln] = useState(null)
  const [checked, setChecked]   = useState(false)
  const [done, setDone]         = useState(false)

  const isPLN  = cat === 'pln'
  const isCek  = ['pdam','bpjs','telpon'].includes(cat)
  const mockData = mockTagihan[cat]
  const selCat = categories.find(c => c.id === cat)

  const handleCek = () => { if (idPel) setChecked(true) }
  const handleBayar = () => setDone(true)
  const handleBeli  = () => { if (idPel && nominalPln) setDone(true) }
  const reset = () => { setIdPel(''); setNomPln(null); setChecked(false); setDone(false) }

  if (done) return (
    <div style={{ display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'70vh',gap:20 }}>
      <div style={{ width:72,height:72,borderRadius:'50%',background:'rgba(245,158,11,0.2)',display:'flex',alignItems:'center',justifyContent:'center' }}>
        <CheckCircle size={36} color="#fbbf24" />
      </div>
      <h2 style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:22,fontWeight:700,color:'#fff' }}>Pembayaran Berhasil!</h2>
      <p style={{ fontSize:14,color:'rgba(255,255,255,0.4)',textAlign:'center',fontWeight:500 }}>
        {isPLN ? `Token PLN Rp ${nominalPln?.toLocaleString('id-ID')} berhasil dibeli` : `Tagihan ${selCat?.label} telah dibayar`}
        <br /><span style={{ color:'#fbbf24',fontWeight:700 }}>ID: {idPel}</span>
      </p>
      <button onClick={reset} style={{ padding:'12px 28px',borderRadius:12,border:'none',cursor:'pointer',background:'linear-gradient(135deg,#F59E0B,#EF4444)',color:'#fff',fontSize:14,fontWeight:800,fontFamily:"'Nunito',sans-serif" }}>
        Transaksi Baru
      </button>
    </div>
  )

  return (
    <div style={{ display:'flex',flexDirection:'column',gap:22 }}>
      {/* Header */}
      <div className="fade-in">
        <div style={{ display:'flex',alignItems:'center',gap:12,marginBottom:4 }}>
          <div style={{ width:36,height:36,borderRadius:10,background:'rgba(245,158,11,0.2)',display:'flex',alignItems:'center',justifyContent:'center' }}>
            <Zap size={18} color="#fbbf24" />
          </div>
          <h1 style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:22,fontWeight:700,color:'#F0F4FF' }}>PLN & Tagihan</h1>
        </div>
        <p style={{ fontSize:13,color:'rgba(255,255,255,0.4)',marginLeft:48,fontWeight:500 }}>Bayar tagihan & beli token PLN dengan mudah</p>
      </div>

      {/* Category selector */}
      <div className="fade-in fade-in-1">
        <p style={{ fontSize:11,fontWeight:700,color:'rgba(255,255,255,0.4)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:12 }}>Pilih Layanan</p>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:10 }}>
          {categories.map(c => (
            <div key={c.id} onClick={() => { setCat(c.id); reset() }} style={{
              background: cat===c.id ? c.bg : 'rgba(255,255,255,0.05)',
              border:`1px solid ${cat===c.id ? c.color+'60':'rgba(255,255,255,0.08)'}`,
              borderRadius:14,padding:'14px 8px',
              display:'flex',flexDirection:'column',alignItems:'center',gap:8,
              cursor:'pointer',transition:'all 0.2s',
            }}>
              <div style={{ width:36,height:36,borderRadius:10,background:c.bg,display:'flex',alignItems:'center',justifyContent:'center' }}>
                <c.icon size={17} color={c.color} />
              </div>
              <span style={{ fontSize:11,fontWeight:700,color:cat===c.id?'#fff':'rgba(255,255,255,0.5)',textAlign:'center' }}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="glass-card fade-in fade-in-2" style={{ padding:'22px 24px',display:'flex',flexDirection:'column',gap:16 }}>
        <div>
          <label style={{ fontSize:11,fontWeight:700,color:'rgba(255,255,255,0.4)',letterSpacing:'0.08em',textTransform:'uppercase',display:'block',marginBottom:10 }}>
            {isPLN ? 'ID Pelanggan PLN' : cat==='bpjs' ? 'No. Peserta BPJS' : cat==='pdam' ? 'No. Pelanggan PDAM' : 'No. Pelanggan'}
          </label>
          <div style={{ display:'flex',gap:10 }}>
            <input value={idPel} onChange={e=>{setIdPel(e.target.value);setChecked(false)}} placeholder="Masukkan nomor pelanggan..." style={{
              flex:1,padding:'13px 16px',borderRadius:12,
              background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.1)',
              color:'#F0F4FF',fontSize:15,fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,outline:'none',
            }}
              onFocus={e=>e.target.style.borderColor='rgba(245,158,11,0.6)'}
              onBlur={e=>e.target.style.borderColor='rgba(255,255,255,0.1)'}
            />
            {isCek && (
              <button onClick={handleCek} style={{
                padding:'0 20px',borderRadius:12,border:'none',cursor:'pointer',
                background:'rgba(245,158,11,0.25)',color:'#fbbf24',
                fontSize:13,fontWeight:800,fontFamily:"'Nunito',sans-serif",whiteSpace:'nowrap',
              }}>Cek Tagihan</button>
            )}
          </div>
        </div>

        {/* PLN nominal */}
        {isPLN && (
          <div>
            <label style={{ fontSize:11,fontWeight:700,color:'rgba(255,255,255,0.4)',letterSpacing:'0.08em',textTransform:'uppercase',display:'block',marginBottom:10 }}>Nominal Token</label>
            <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8 }}>
              {nominalPLN.map(n=>(
                <div key={n} onClick={()=>setNomPln(n)} style={{
                  background:nominalPln===n?'rgba(245,158,11,0.2)':'rgba(255,255,255,0.05)',
                  border:`1px solid ${nominalPln===n?'rgba(245,158,11,0.5)':'rgba(255,255,255,0.08)'}`,
                  borderRadius:12,padding:'13px 10px',textAlign:'center',cursor:'pointer',transition:'all 0.2s',
                }}>
                  <p style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:16,fontWeight:700,color:nominalPln===n?'#fbbf24':'#fff' }}>
                    {n>=1000000 ? (n/1000000)+'jt' : (n/1000)+'rb'}
                  </p>
                  <p style={{ fontSize:10,color:'rgba(255,255,255,0.35)',fontWeight:600,marginTop:3 }}>Rp {n.toLocaleString('id-ID')}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tagihan result */}
        {checked && mockData && (
          <div style={{ background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:12,padding:'16px' }}>
            <p style={{ fontSize:11,fontWeight:700,color:'rgba(255,255,255,0.4)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:12 }}>Detail Tagihan</p>
            {[
              ['Nama Pelanggan', mockData.pelanggan],
              ['Layanan', mockData.nama],
              ['Periode', mockData.periode],
              ['Total Tagihan', `Rp ${mockData.tagihan.toLocaleString('id-ID')}`],
            ].map(([k,v])=>(
              <div key={k} style={{ display:'flex',justifyContent:'space-between',padding:'7px 0',borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize:13,color:'rgba(255,255,255,0.4)',fontWeight:500 }}>{k}</span>
                <span style={{ fontSize:13,fontWeight:700,color:k==='Total Tagihan'?'#fbbf24':'rgba(255,255,255,0.85)' }}>{v}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      {(isPLN ? (idPel && nominalPln) : checked) && (
        <div className="fade-in glass-card" style={{ padding:'18px 22px',display:'flex',alignItems:'center',justifyContent:'space-between' }}>
          <div>
            <p style={{ fontSize:12,color:'rgba(255,255,255,0.4)',fontWeight:600 }}>Total bayar</p>
            <p style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:24,fontWeight:700,color:'#fff',marginTop:2 }}>
              Rp {isPLN ? nominalPln?.toLocaleString('id-ID') : mockData?.tagihan.toLocaleString('id-ID')}
            </p>
          </div>
          <button onClick={isPLN ? handleBeli : handleBayar} style={{
            padding:'13px 28px',borderRadius:13,border:'none',cursor:'pointer',
            background:'linear-gradient(135deg,#F59E0B,#EF4444)',
            color:'#fff',fontSize:14,fontWeight:800,fontFamily:"'Nunito',sans-serif",
            display:'flex',alignItems:'center',gap:6,
          }}>
            {isPLN ? 'Beli Token' : 'Bayar Sekarang'} <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  )
}