import { BarChart2, TrendingUp, DollarSign, ShoppingBag, Award } from 'lucide-react'
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts'

const omsetHarian = [
  { hari:'1',val:650000},{ hari:'2',val:820000},{ hari:'3',val:740000},{ hari:'4',val:1100000},
  { hari:'5',val:980000},{ hari:'6',val:1450000},{ hari:'7',val:1200000},{ hari:'8',val:870000},
  { hari:'9',val:1050000},{ hari:'10',val:1320000},{ hari:'11',val:1180000},{ hari:'12',val:960000},
  { hari:'13',val:1420000},{ hari:'14',val:1580000},{ hari:'15',val:1250000},
]

const kategoriData = [
  { name:'Pulsa',     value:38, color:'#a78bfa' },
  { name:'Paket Data',value:29, color:'#22d3ee' },
  { name:'PLN',       value:19, color:'#fbbf24' },
  { name:'Tagihan',   value:9,  color:'#f472b6' },
  { name:'Top Up',    value:5,  color:'#34d399' },
]

const operatorData = [
  { name:'Telkomsel', trx:142, color:'#EF4444' },
  { name:'Indosat',   trx:87,  color:'#F59E0B' },
  { name:'XL',        trx:65,  color:'#3B82F6' },
  { name:'Tri',       trx:42,  color:'#8B5CF6' },
  { name:'Smartfren', trx:28,  color:'#10B981' },
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div style={{ background:'rgba(13,13,26,0.95)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:10,padding:'8px 14px' }}>
        <p style={{ fontSize:12,fontWeight:700,color:'#a78bfa' }}>Rp {payload[0].value.toLocaleString('id-ID')}</p>
      </div>
    )
  }
  return null
}

const BarTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div style={{ background:'rgba(13,13,26,0.95)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:10,padding:'8px 14px' }}>
        <p style={{ fontSize:12,fontWeight:700,color:'#22d3ee' }}>{payload[0].value} transaksi</p>
      </div>
    )
  }
  return null
}

export default function Laporan() {
  return (
    <div style={{ display:'flex',flexDirection:'column',gap:22 }}>
      {/* Header */}
      <div className="fade-in" style={{ display:'flex',alignItems:'center',justifyContent:'space-between' }}>
        <div>
          <div style={{ display:'flex',alignItems:'center',gap:12,marginBottom:4 }}>
            <div style={{ width:36,height:36,borderRadius:10,background:'rgba(16,185,129,0.2)',display:'flex',alignItems:'center',justifyContent:'center' }}>
              <BarChart2 size={18} color="#34d399" />
            </div>
            <h1 style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:22,fontWeight:700,color:'#F0F4FF' }}>Laporan Bisnis</h1>
          </div>
          <p style={{ fontSize:13,color:'rgba(255,255,255,0.4)',marginLeft:48,fontWeight:500 }}>Analisis performa konter bulan Mei 2026</p>
        </div>
        <div style={{ padding:'8px 16px',borderRadius:10,background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.1)',fontSize:12,fontWeight:700,color:'rgba(255,255,255,0.6)',cursor:'pointer' }}>
          Mei 2026 ▾
        </div>
      </div>

      {/* Summary cards */}
      <div className="fade-in fade-in-1" style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:10 }}>
        {[
          { icon:DollarSign,  label:'Total Omset',     value:'Rp 18,4jt', delta:'+22%', color:'#a78bfa', bg:'rgba(108,99,255,0.2)' },
          { icon:ShoppingBag, label:'Total Transaksi', value:'364',        delta:'+17%', color:'#22d3ee', bg:'rgba(6,182,212,0.2)' },
          { icon:TrendingUp,  label:'Profit Bersih',   value:'Rp 1,2jt',  delta:'+8%',  color:'#34d399', bg:'rgba(16,185,129,0.2)' },
          { icon:Award,       label:'Produk Terlaris', value:'Telkomsel',  delta:'38%',  color:'#fbbf24', bg:'rgba(245,158,11,0.2)' },
        ].map(s=>(
          <div key={s.label} className="glass-card" style={{ padding:'16px 18px' }}>
            <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12 }}>
              <div style={{ width:34,height:34,borderRadius:9,background:s.bg,display:'flex',alignItems:'center',justifyContent:'center' }}>
                <s.icon size={16} color={s.color} />
              </div>
              <span style={{ fontSize:10,fontWeight:700,padding:'2px 8px',borderRadius:99,background:'rgba(16,185,129,0.2)',color:'#34d399' }}>{s.delta}</span>
            </div>
            <p style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:18,fontWeight:700,color:'#fff',letterSpacing:'-0.2px' }}>{s.value}</p>
            <p style={{ fontSize:11,color:'rgba(255,255,255,0.4)',fontWeight:600,marginTop:3 }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Omset chart */}
      <div className="glass-card fade-in fade-in-2" style={{ padding:'20px 22px' }}>
        <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:18 }}>
          <p style={{ fontSize:13,fontWeight:700,color:'rgba(255,255,255,0.7)',letterSpacing:'0.04em',textTransform:'uppercase' }}>Omset harian (15 hari terakhir)</p>
          <div style={{ display:'flex',gap:8 }}>
            {['7H','15H','30H'].map((t,i)=>(
              <span key={t} style={{ fontSize:12,fontWeight:700,padding:'4px 10px',borderRadius:8,cursor:'pointer',background:i===1?'rgba(108,99,255,0.3)':'transparent',color:i===1?'#a78bfa':'rgba(255,255,255,0.35)' }}>{t}</span>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <AreaChart data={omsetHarian}>
            <defs>
              <linearGradient id="gradLap" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#6C63FF" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#6C63FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="hari" tick={{ fill:'rgba(255,255,255,0.3)',fontSize:11,fontWeight:600 }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="val" stroke="#6C63FF" strokeWidth={2.5} fill="url(#gradLap)" dot={false} activeDot={{ r:5,fill:'#a78bfa',strokeWidth:0 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Pie + Bar side by side */}
      <div className="fade-in fade-in-3" style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:12 }}>
        {/* Kategori pie */}
        <div className="glass-card" style={{ padding:'20px 22px' }}>
          <p style={{ fontSize:13,fontWeight:700,color:'rgba(255,255,255,0.7)',letterSpacing:'0.04em',textTransform:'uppercase',marginBottom:16 }}>Komposisi produk</p>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={kategoriData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="value" paddingAngle={3}>
                {kategoriData.map((e,i)=><Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip formatter={(v)=>[`${v}%`,'Porsi']} contentStyle={{ background:'rgba(13,13,26,0.95)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:10,fontSize:12 }} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display:'flex',flexWrap:'wrap',gap:'8px 16px',marginTop:8 }}>
            {kategoriData.map(k=>(
              <div key={k.name} style={{ display:'flex',alignItems:'center',gap:6 }}>
                <div style={{ width:8,height:8,borderRadius:'50%',background:k.color,flexShrink:0 }} />
                <span style={{ fontSize:11,fontWeight:600,color:'rgba(255,255,255,0.5)' }}>{k.name} {k.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Operator bar */}
        <div className="glass-card" style={{ padding:'20px 22px' }}>
          <p style={{ fontSize:13,fontWeight:700,color:'rgba(255,255,255,0.7)',letterSpacing:'0.04em',textTransform:'uppercase',marginBottom:16 }}>Transaksi per operator</p>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={operatorData} barSize={28}>
              <XAxis dataKey="name" tick={{ fill:'rgba(255,255,255,0.35)',fontSize:10,fontWeight:600 }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip content={<BarTooltip />} />
              <Bar dataKey="trx" radius={[6,6,0,0]}>
                {operatorData.map((e,i)=><Cell key={i} fill={e.color} opacity={0.8} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top produk */}
      <div className="glass-card fade-in fade-in-4" style={{ padding:'20px 22px' }}>
        <p style={{ fontSize:11,fontWeight:700,color:'rgba(255,255,255,0.4)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:14 }}>Produk terlaris bulan ini</p>
        <div style={{ display:'flex',flexDirection:'column',gap:10 }}>
          {[
            { rank:1, nama:'Pulsa Telkomsel 50rb',    trx:89, omset:'Rp 4,4jt', pct:89 },
            { rank:2, nama:'Paket Combo Seru 5GB',    trx:67, omset:'Rp 3,0jt', pct:67 },
            { rank:3, nama:'Token PLN 100rb',         trx:54, omset:'Rp 5,4jt', pct:54 },
            { rank:4, nama:'Paket XL XTRA Combo M',  trx:41, omset:'Rp 2,1jt', pct:41 },
            { rank:5, nama:'Pulsa Indosat 25rb',      trx:38, omset:'Rp 930rb', pct:38 },
          ].map(p=>(
            <div key={p.rank} style={{ display:'flex',alignItems:'center',gap:14 }}>
              <span style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:13,fontWeight:700,color:'rgba(255,255,255,0.25)',width:20,textAlign:'center' }}>#{p.rank}</span>
              <div style={{ flex:1 }}>
                <div style={{ display:'flex',justifyContent:'space-between',marginBottom:5 }}>
                  <span style={{ fontSize:13,fontWeight:700,color:'rgba(255,255,255,0.8)' }}>{p.nama}</span>
                  <div style={{ display:'flex',gap:16 }}>
                    <span style={{ fontSize:12,fontWeight:600,color:'rgba(255,255,255,0.4)' }}>{p.trx} trx</span>
                    <span style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:12,fontWeight:700,color:'#34d399' }}>{p.omset}</span>
                  </div>
                </div>
                <div style={{ height:4,borderRadius:99,background:'rgba(255,255,255,0.07)' }}>
                  <div style={{ height:'100%',borderRadius:99,background:'linear-gradient(90deg,#6C63FF,#EC4899)',width:`${p.pct}%`,transition:'width 0.6s ease' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}