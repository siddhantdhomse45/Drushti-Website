import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/aboutUs/About';
import Universities from './pages/universities/Universities';
import ArunodayaUniversity from './pages/arunodayauniversity/ArunodayaUniversity';
import Programs from './pages/programs/Programs';
import UnderGraduate from './pages/undergraduate/UnderGraduate';
import PostGraduate from './pages/postgraduate/PostGraduate'
import DiplomaEngg from './pages/diplomaEngg/DiplomaEngg'
import './index.css'
import HelpDesk from './pages/help/HelpDesk';
import Footer from './components/footer/Footer'
import BTechnology from './pages/technology/BTechnology';
import MTechnology from './pages/master/MTechnology';
import DiplomaCourse from './pages/diplomaCourse/DiplomaCourse';
import Certificates from './pages/certificates/Certificates';
import PGDiploma from './pages/pgdiploma/PGDiploma';
import ScrollTop from './components/scrollTop/ScrollTop';
import '@fortawesome/fontawesome-free/css/all.min.css';




function App() {
  

  return (
    <>
    <Router>
      {/* Render your Navbar */}
      <Navbar />
      <ScrollTop />
      
      {/* Define the Routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/universities" element={<Universities />} />
      
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/undergraduate" element={<UnderGraduate />} />
        <Route path="/programs/postgraduate" element={<PostGraduate />} />
        <Route path="/programs/diploma" element={<DiplomaEngg />} />
        <Route path="/programs/technology" element={<BTechnology />} />
        <Route path="/programs/master" element={<MTechnology />} />
        <Route path="/programs/diplomacourse" element={<DiplomaCourse />} />
        <Route path="/programs/certificate" element={<Certificates />} />
        <Route path="/programs/pgdiploma" element={<PGDiploma />} />
       
        <Route path="/help" element={<HelpDesk />} />
      </Routes>
     
    </Router>
    <Footer />
    </>
  );
}

export default App