import { useState } from 'react'
import { CreditCard, Upload, CheckCircle, Copy } from 'lucide-react'

const banks = [
  { nama:'BCA',     rek:'1234567890',    atas:'AgesCell Indonesia',    color:'#3B82F6', bg:'rgba(59,130,246,0.15)' },
  { nama:'Mandiri', rek:'0987654321',    atas:'AgesCell Indonesia',    color:'#F59E0B', bg:'rgba(245,158,11,0.15)' },
  { nama:'BNI',     rek:'1122334455',    atas:'AgesCell Indonesia',    color:'#EF4444', bg:'rgba(239,68,68,0.15)' },
  { nama:'BRI',     rek:'5544332211',    atas:'AgesCell Indonesia',    color:'#10B981', bg:'rgba(16,185,129,0.15)' },
  { nama:'BSI',     rek:'7788990011',    atas:'AgesCell Indonesia',    color:'#8B5CF6', bg:'rgba(139,92,246,0.15)' },
  { nama:'QRIS',    rek:'Scan QR Code',  atas:'Semua e-wallet/bank', color:'#EC4899', bg:'rgba(236,72,153,0.15)' },
]

const nominals = [50000,100000,200000,500000,1000000,2000000]

export default function TopUp() {
  const [selectedBank, setSelectedBank] = useState(null)
  const [nominal, setNominal]           = useState(null)
  const [step, setStep]                 = useState(1) // 1=pilih, 2=instruksi, 3=done
  const [copied, setCopied]             = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(()=>setCopied(false), 2000)
  }

  const reset = () => { setSelectedBank(null); setNominal(null); setStep(1) }

  if (step === 3) return (
    <div style={{ display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'70vh',gap:20 }}>
      <div style={{ width:72,height:72,borderRadius:'50%',background:'rgba(16,185,129,0.2)',display:'flex',alignItems:'center',justifyContent:'center' }}>
        <CheckCircle size={36} color="#34d399" />
      </div>
      <h2 style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:22,fontWeight:700,color:'#fff' }}>Konfirmasi Dikirim!</h2>
      <p style={{ fontSize:14,color:'rgba(255,255,255,0.4)',textAlign:'center',fontWeight:500 }}>
        Top up <span style={{ color:'#34d399',fontWeight:700 }}>Rp {nominal?.toLocaleString('id-ID')}</span> via {selectedBank?.nama}<br />
        sedang diproses. Saldo akan masuk dalam 5–15 menit.
      </p>
      <button onClick={reset} style={{ padding:'12px 28px',borderRadius:12,border:'none',cursor:'pointer',background:'linear-gradient(135deg,#6C63FF,#EC4899)',color:'#fff',fontSize:14,fontWeight:800,fontFamily:"'Nunito',sans-serif", transition: 'opacity 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
        Top Up Lagi
      </button>
    </div>
  )

  if (step === 2 && selectedBank && nominal) return (
    <div style={{ display:'flex',flexDirection:'column',gap:22 }}>
      <div className="fade-in">
        <h1 style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:22,fontWeight:700,color:'#F0F4FF',marginBottom:4 }}>Instruksi Transfer</h1>
        <p style={{ fontSize:13,color:'rgba(255,255,255,0.4)',fontWeight:500 }}>Selesaikan pembayaran dalam 60 menit</p>
      </div>

      <div className="glass-card fade-in fade-in-1" style={{ padding:'24px' }}>
        {/* Bank header */}
        <div style={{ display:'flex',alignItems:'center',gap:14,marginBottom:24 }}>
          <div style={{ width:44,height:44,borderRadius:12,background:selectedBank.bg,display:'flex',alignItems:'center',justifyContent:'center' }}>
            <CreditCard size={20} color={selectedBank.color} />
          </div>
          <div>
            <p style={{ fontSize:16,fontWeight:800,color:'#fff' }}>Transfer {selectedBank.nama}</p>
            <p style={{ fontSize:12,color:'rgba(255,255,255,0.4)',fontWeight:500,marginTop:2 }}>a.n. {selectedBank.atas}</p>
          </div>
        </div>

        {/* Detail */}
        {[
          ['Nomor Rekening', selectedBank.rek, true],
          ['Jumlah Transfer', `Rp ${nominal.toLocaleString('id-ID')}`, true],
          ['Berita Transfer', `TOPUP-${Date.now().toString().slice(-6)}`, false],
        ].map(([k,v,showCopy])=>(
          <div key={k} style={{ display:'flex',justifyContent:'space-between',alignItems:'center',padding:'14px 0',borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
            <div>
              <p style={{ fontSize:11,fontWeight:700,color:'rgba(255,255,255,0.35)',letterSpacing:'0.06em',textTransform:'uppercase' }}>{k}</p>
              <p style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:18,fontWeight:700,color:'#fff',marginTop:4 }}>{v}</p>
            </div>
            {showCopy && (
              <button onClick={handleCopy} style={{ padding:'7px 14px',borderRadius:9,border:'1px solid rgba(255,255,255,0.15)',background:'rgba(255,255,255,0.07)',color:copied?'#34d399':'rgba(255,255,255,0.6)',fontSize:12,fontWeight:700,cursor:'pointer',display:'flex',alignItems:'center',gap:5,fontFamily:"'Nunito',sans-serif" }}>
                <Copy size={12} /> {copied?'Disalin!':'Salin'}
              </button>
            )}
          </div>
        ))}
      </div>

      <div style={{ display:'flex',gap:10 }}>
        <button onClick={reset} style={{ flex:1,padding:'13px',borderRadius:12,border:'1px solid rgba(255,255,255,0.15)',background:'transparent',color:'rgba(255,255,255,0.6)',fontSize:14,fontWeight:700,cursor:'pointer',fontFamily:"'Nunito',sans-serif" }}>
          <span style={{ transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.parentNode.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
            onMouseLeave={e => { e.currentTarget.parentNode.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}>
          Batal
          </span>
        </button>
        <button onClick={()=>setStep(3)} style={{ flex:2,padding:'13px',borderRadius:12,border:'none',cursor:'pointer',background:'linear-gradient(135deg,#6C63FF,#EC4899)',color:'#fff',fontSize:14,fontWeight:800,fontFamily:"'Nunito',sans-serif",display:'flex',alignItems:'center',justifyContent:'center',gap:6, transition: 'opacity 0.2s' }} onMouseEnter={e => e.currentTarget.style.opacity = '0.88'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
          <Upload size={15} /> Sudah Transfer
        </button>
      </div>
    </div>
  )

  return (
    <div style={{ display:'flex',flexDirection:'column',gap:22 }}>
      {/* Header */}
      <div className="fade-in">
        <div style={{ display:'flex',alignItems:'center',gap:12,marginBottom:4 }}>
          <div style={{ width:36,height:36,borderRadius:10,background:'rgba(108,99,255,0.2)',display:'flex',alignItems:'center',justifyContent:'center' }}>
            <CreditCard size={18} color="#a78bfa" />
          </div>
          <h1 style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:22,fontWeight:700,color:'#F0F4FF' }}>Top Up Saldo</h1>
        </div>
        <p style={{ fontSize:13,color:'rgba(255,255,255,0.4)',marginLeft:48,fontWeight:500 }}>Isi saldo untuk melakukan transaksi</p>
      </div>

      {/* Saldo sekarang */}
      <div className="fade-in fade-in-1" style={{ background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:16,padding:'18px 22px',display:'flex',alignItems:'center',justifyContent:'space-between',position:'relative',overflow:'hidden' }}>
        <div style={{ position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(108,99,255,0.15),rgba(236,72,153,0.08))',borderRadius:16 }} />
        <div style={{ position:'relative' }}>
          <p style={{ fontSize:10,fontWeight:700,letterSpacing:'0.1em',color:'rgba(255,255,255,0.4)',textTransform:'uppercase',marginBottom:4 }}>Saldo saat ini</p>
          <p style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:26,fontWeight:700,color:'#fff' }}>Rp 2.450.000</p>
        </div>
      </div>

      {/* Pilih bank */}
      <div className="fade-in fade-in-2">
        <p style={{ fontSize:11,fontWeight:700,color:'rgba(255,255,255,0.4)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:12 }}>Metode Transfer</p>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10 }}>
          {banks.map(b=>(
            <div key={b.nama} onClick={()=>setSelectedBank(b)} style={{
              background:selectedBank?.nama===b.nama?b.bg:'rgba(255,255,255,0.05)',
              border:`1px solid ${selectedBank?.nama===b.nama?b.color+'60':'rgba(255,255,255,0.08)'}`,
              borderRadius:14,padding:'16px 12px',
              display:'flex',flexDirection:'column',alignItems:'center',gap:8,
              cursor:'pointer',transition:'all 0.2s',
            }}>
              <div style={{ width:36,height:36,borderRadius:10,background:b.bg,display:'flex',alignItems:'center',justifyContent:'center' }}>
                <CreditCard size={16} color={b.color} />
              </div>
              <span style={{ fontSize:13,fontWeight:800,color:selectedBank?.nama===b.nama?'#fff':'rgba(255,255,255,0.6)' }}>{b.nama}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pilih nominal */}
      <div className="fade-in fade-in-3">
        <p style={{ fontSize:11,fontWeight:700,color:'rgba(255,255,255,0.4)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:12 }}>Nominal Top Up</p>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10 }}>
          {nominals.map(n=>(
            <div key={n} onClick={()=>setNominal(n)} style={{
              background:nominal===n?'rgba(108,99,255,0.25)':'rgba(255,255,255,0.05)',
              border:`1px solid ${nominal===n?'rgba(108,99,255,0.5)':'rgba(255,255,255,0.08)'}`,
              borderRadius:13,padding:'14px 10px',textAlign:'center',cursor:'pointer',transition:'all 0.2s',
            }}>
              <p style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:16,fontWeight:700,color:nominal===n?'#a78bfa':'#fff' }}>
                {n>=1000000?`${n/1000000} jt`:`${(n/1000).toString()}rb`}
              </p>
              <p style={{ fontSize:10,color:'rgba(255,255,255,0.3)',fontWeight:600,marginTop:3 }}>Rp {n.toLocaleString('id-ID')}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      {selectedBank && nominal && (
        <div className="fade-in glass-card" style={{ padding:'18px 22px',display:'flex',alignItems:'center',justifyContent:'space-between' }}>
          <div>
            <p style={{ fontSize:12,color:'rgba(255,255,255,0.4)',fontWeight:600 }}>Top up via {selectedBank.nama}</p>
            <p style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:24,fontWeight:700,color:'#fff',marginTop:2 }}>Rp {nominal.toLocaleString('id-ID')}</p>
          </div>
          <button onClick={()=>setStep(2)} style={{ padding:'13px 28px',borderRadius:13,border:'none',cursor:'pointer',background:'linear-gradient(135deg,#6C63FF,#EC4899)',color:'#fff',fontSize:14,fontWeight:800,fontFamily:"'Nunito',sans-serif" }}>
            <span style={{ transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.parentNode.style.opacity = '0.88'}
              onMouseLeave={e => e.currentTarget.parentNode.style.opacity = '1'}>
            Lanjutkan →
            </span>
          </button>
        </div>
      )}
    </div>
  )
}