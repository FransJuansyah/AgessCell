import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Pin from './pages/Pin'
import Dashboard from './pages/Dashboard'
import JualPulsa from './pages/JualPulsa'
import PaketData from './pages/PaketData'
import PLNTagihan from './pages/PLNTagihan'
import Riwayat from './pages/Riwayat'
import TopUp from './pages/TopUp'
import Laporan from './pages/Laporan'
import Layout from './components/Layout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pin" element={<Pin />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pulsa" element={<JualPulsa />} />
          <Route path="/data" element={<PaketData />} />
          <Route path="/pln" element={<PLNTagihan />} />
          <Route path="/riwayat" element={<Riwayat />} />
          <Route path="/topup" element={<TopUp />} />
          <Route path="/laporan" element={<Laporan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}