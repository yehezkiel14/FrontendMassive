import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import EdukasiPage from './pages/EdukasiPage';
import PekerjaanPage from './pages/PekerjaanPage';
import DiskusiPage from './pages/DiskusiPage';
import AkunPage from './pages/AkunPage';
import DetailPekerjaan from './components/DetailPekerjaan';
import Mendaftar from './components/Mendaftar';
import DetailArtikel from './components/DetailArtikel';
import EditArtikel from './components/EditArtikel'; // Import komponen EditArtikel
import LayananPage from './pages/LayananPage';
import KontakKami from './pages/KontakKami';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/signupPage';
import AdminDashboard from './admin/AdminDasboard';
import JobForm from './admin/JobForm';
import JobTable from './admin/JobTable';
import JobEdit from './admin/JobEdit';

function App() {
  
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tentang" element={<AboutUs />} />
          <Route path="/layanan" element={<LayananPage />} />
          <Route path="/kontak" element={<KontakKami />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/job-form" element={<JobForm />} />
          <Route path="/job-table" element={<JobTable />} />
          <Route path="/job-edit/:id" element={<JobEdit />} />
          <Route path="/edukasi" element={<EdukasiPage />} /> 
          <Route path="/pekerjaan" element={<PekerjaanPage />} />
          <Route path="/diskusi" element={<DiskusiPage />} />
          <Route path="/akun" element={<AkunPage />} />
        </Routes> 

        {/* <Routes>
          <Route path="/edukasi" element={<EdukasiPage />} /> 
          <Route path="/pekerjaan" element={<PekerjaanPage />} />
          <Route path="/diskusi" element={<DiskusiPage />} />
          <Route path="/akun" element={<AkunPage />} />
        </Routes> */}
        <Routes>
          <Route path="/pekerjaan/detail/:id" element={<DetailPekerjaan />} />
          <Route path="/mendaftar/:id" element={<Mendaftar />} />
          <Route path="/detailartikel" element={<DetailArtikel />} />
          <Route path="/detailartikel/:id" element={<DetailArtikel />} />
          <Route path="/edit/:id" element={<EditArtikel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
