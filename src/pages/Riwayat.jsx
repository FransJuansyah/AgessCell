import { useState } from 'react'
import { Clock, Smartphone, Wifi, Zap, CreditCard, FileText, Search, Filter } from 'lucide-react'

const allTrx = [
  { id:'TRX001', icon:Smartphone, color:'#34d399', bg:'rgba(16,185,129,0.15)', name:'Pulsa Telkomsel 50rb',   sub:'0812-3456-7890', tanggal:'04 Mei 2026', jam:'14:32', amount:'-48.500',   type:'minus', status:'success', label:'Sukses',   cat:'pulsa' },
  { id:'TRX002', icon:Zap,        color:'#fbbf24', bg:'rgba(245,158,11,0.15)', name:'PLN Token 100rb',        sub:'1234-5678-9012', tanggal:'04 Mei 2026', jam:'13:10', amount:'-100.000',  type:'minus', status:'success', label:'Sukses',   cat:'pln' },
  { id:'TRX003', icon:CreditCard, color:'#a78bfa', bg:'rgba(108,99,255,0.15)', name:'Top Up Saldo BCA',       sub:'Transfer Bank',  tanggal:'04 Mei 2026', jam:'11:00', amount:'+1.000.000',type:'plus',  status:'warning', label:'Menunggu', cat:'topup' },
  { id:'TRX004', icon:Wifi,       color:'#f87171', bg:'rgba(239,68,68,0.15)',   name:'XL Axiata 15GB',         sub:'0856-1122-3344', tanggal:'04 Mei 2026', jam:'09:47', amount:'-55.000',   type:'minus', status:'danger',  label:'Gagal',    cat:'data' },
  { id:'TRX005', icon:Smartphone, color:'#34d399', bg:'rgba(16,185,129,0.15)', name:'Pulsa Indosat 25rb',     sub:'0855-9876-5432', tanggal:'03 Mei 2026', jam:'16:20', amount:'-24.500',   type:'minus', status:'success', label:'Sukses',   cat:'pulsa' },
  { id:'TRX006', icon:Wifi,       color:'#22d3ee', bg:'rgba(6,182,212,0.15)',   name:'Telkomsel Combo 5GB',    sub:'0821-5544-3322', tanggal:'03 Mei 2026', jam:'15:05', amount:'-44.500',   type:'minus', status:'success', label:'Sukses',   cat:'data' },
  { id:'TRX007', icon:FileText,   color:'#f472b6', bg:'rgba(236,72,153,0.15)', name:'BPJS Kesehatan Mei',     sub:'0001234567890',  tanggal:'03 Mei 2026', jam:'10:30', amount:'-150.000',  type:'minus', status:'success', label:'Sukses',   cat:'pln' },
  { id:'TRX008', icon:Zap,        color:'#fbbf24', bg:'rgba(245,158,11,0.15)', name:'PLN Token 200rb',        sub:'9876-5432-1098', tanggal:'02 Mei 2026', jam:'18:45', amount:'-198.000',  type:'minus', status:'success', label:'Sukses',   cat:'pln' },
  { id:'TRX009', icon:Smartphone, color:'#34d399', bg:'rgba(16,185,129,0.15)', name:'Pulsa Tri 10rb',         sub:'0898-7766-5544', tanggal:'02 Mei 2026', jam:'12:10', amount:'-10.500',   type:'minus', status:'success', label:'Sukses',   cat:'pulsa' },
  { id:'TRX010', icon:CreditCard, color:'#a78bfa', bg:'rgba(108,99,255,0.15)', name:'Top Up Saldo Mandiri',   sub:'Transfer Bank',  tanggal:'01 Mei 2026', jam:'08:00', amount:'+500.000',  type:'plus',  status:'success', label:'Sukses',   cat:'topup' },
  { id:'TRX011', icon:Wifi,       color:'#22d3ee', bg:'rgba(6,182,212,0.15)',   name:'By.U 6GB',              sub:'0858-1234-5678', tanggal:'01 Mei 2026', jam:'17:30', amount:'-34.500',   type:'minus', status:'success', label:'Sukses',   cat:'data' },
  { id:'TRX012', icon:Smartphone, color:'#34d399', bg:'rgba(16,185,129,0.15)', name:'Pulsa Smartfren 50rb',   sub:'0889-5566-7788', tanggal:'01 Mei 2026', jam:'09:15', amount:'-49.500',   type:'minus', status:'success', label:'Sukses',   cat:'pulsa' },
]

const filters = [
  { key:'all',   label:'Semua' },
  { key:'pulsa', label:'Pulsa' },
  { key:'data',  label:'Data' },
  { key:'pln',   label:'PLN & Tagihan' },
  { key:'topup', label:'Top Up' },
]

export default function Riwayat() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [search, setSearch]             = useState('')

  const filtered = allTrx.filter(t => {
    const matchCat  = activeFilter === 'all' || t.cat === activeFilter
    const matchSrch = t.name.toLowerCase().includes(search.toLowerCase()) || t.sub.includes(search)
    return matchCat && matchSrch
  })

  return (
    <div style={{ display:'flex',flexDirection:'column',gap:22 }}>
      {/* Header */}
      <div className="fade-in" style={{ display:'flex',alignItems:'center',justifyContent:'space-between' }}>
        <div>
          <div style={{ display:'flex',alignItems:'center',gap:12,marginBottom:4 }}>
            <div style={{ width:36,height:36,borderRadius:10,background:'rgba(108,99,255,0.2)',display:'flex',alignItems:'center',justifyContent:'center' }}>
              <Clock size={18} color="#a78bfa" />
            </div>
            <h1 style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:22,fontWeight:700,color:'#F0F4FF' }}>Riwayat Transaksi</h1>
          </div>
          <p style={{ fontSize:13,color:'rgba(255,255,255,0.4)',marginLeft:48,fontWeight:500 }}>Rekam jejak seluruh transaksi kamu</p>
        </div>
        <div style={{ display:'flex',alignItems:'center',gap:8 }}>
          <div style={{ padding:'8px 14px',borderRadius:10,background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.1)',fontSize:12,fontWeight:700,color:'rgba(255,255,255,0.6)',display:'flex',alignItems:'center',gap:6,cursor:'pointer', transition: 'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}>
            <Filter size={13} /> Export
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="fade-in fade-in-1" style={{ position:'relative' }}>
        <Search size={15} style={{ position:'absolute',left:14,top:'50%',transform:'translateY(-50%)',color:'rgba(255,255,255,0.3)' }} />
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Cari transaksi..." style={{
          width:'100%',padding:'13px 16px 13px 40px',borderRadius:12,
          background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.09)',
          color:'#F0F4FF',fontSize:14,fontFamily:"'Nunito',sans-serif",fontWeight:600,outline:'none',
        }}
          onFocus={e=>e.target.style.borderColor='rgba(108,99,255,0.5)'}
          onBlur={e=>e.target.style.borderColor='rgba(255,255,255,0.09)'}
        />
      </div>

      {/* Filter pills */}
      <div className="fade-in fade-in-2" style={{ display:'flex',gap:8,flexWrap:'wrap' }}>
        {filters.map(f=>(
          <div key={f.key} onClick={()=>setActiveFilter(f.key)} style={{
            padding:'8px 18px',borderRadius:99,cursor:'pointer',transition:'all 0.2s',
            background:activeFilter===f.key?'rgba(108,99,255,0.3)':'rgba(255,255,255,0.06)',
            border:`1px solid ${activeFilter===f.key?'rgba(108,99,255,0.5)':'rgba(255,255,255,0.09)'}`,
            fontSize:13,fontWeight:700,
            color:activeFilter===f.key?'#a78bfa':'rgba(255,255,255,0.45)',
          }}>{f.label}</div>
        ))}
        <div style={{ marginLeft:'auto',fontSize:12,fontWeight:600,color:'rgba(255,255,255,0.3)',display:'flex',alignItems:'center' }}>
          {filtered.length} transaksi
        </div>
      </div>

      {/* Transaction list */}
      <div className="fade-in fade-in-3" style={{ display:'flex',flexDirection:'column',gap:8 }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign:'center',padding:'60px 0',color:'rgba(255,255,255,0.25)',fontSize:14,fontWeight:600 }}>
            Tidak ada transaksi ditemukan
          </div>
        ) : filtered.map((t,i) => (
          <div key={t.id} style={{
            background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.07)',
            borderRadius:14,padding:'13px 16px',
            display:'flex',alignItems:'center',gap:12,
            transition:'all 0.15s',cursor:'default',
          }}
            onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.08)'}
            onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,0.04)'}
          >
            {/* Icon */}
            <div style={{ width:40,height:40,borderRadius:11,background:t.bg,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>
              <t.icon size={17} color={t.color} />
            </div>

            {/* Info */}
            <div style={{ flex:1 }}>
              <p style={{ fontSize:13,fontWeight:700,color:'rgba(255,255,255,0.85)' }}>{t.name}</p>
              <p style={{ fontSize:11,color:'rgba(255,255,255,0.3)',marginTop:2,fontWeight:500 }}>{t.sub} · {t.tanggal}, {t.jam}</p>
            </div>

            {/* ID */}
            <div style={{ fontSize:10,fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,color:'rgba(255,255,255,0.2)',marginRight:8 }}>
              #{t.id}
            </div>

            {/* Amount + status */}
            <div style={{ textAlign:'right' }}>
              <p style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:14,fontWeight:700,color:t.type==='plus'?'#34d399':'rgba(255,255,255,0.75)' }}>
                {t.amount}
              </p>
              <span className={`pill pill-${t.status}`} style={{ marginTop:4 }}>{t.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}