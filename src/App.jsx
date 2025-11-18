
import  { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/aboutUs/About";
import Universities from "./pages/universities/Universities";
// import ArunodayaUniversity from "./pages/arunodayauniversity/ArunodayaUniversity";
import Programs from "./pages/programs/Programs";
import UnderGraduate from "./pages/undergraduate/UnderGraduate";
import PostGraduate from "./pages/postgraduate/PostGraduate";
import DiplomaEngg from "./pages/diplomaEngg/DiplomaEngg";
import BTechnology from "./pages/technology/BTechnology";
import MTechnology from "./pages/master/MTechnology";
import DiplomaCourse from "./pages/diplomaCourse/DiplomaCourse";
import Certificates from "./pages/certificates/Certificates";
import PGDiploma from "./pages/pgdiploma/PGDiploma";
import ScrollTop from "./components/scrollTop/ScrollTop";
import Footer from "./components/footer/Footer";
import HelpDesk from "./pages/help/HelpDesk";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import SchoolPrograms from "./pages/school/SchoolPrograms";
import ITICourses from "./pages/iti/ITICourses";
// import ResultForm from "./pages/result/ResultForm";
import EventPage from './pages/EventPage';
import EventDetail from './components/event/eventDetail/EventDetail'
// import EnquiryForm from "./pages/enquiry/EnquiryForm";
import WhatsAppFloat from "./components/whatsapp/WhatsAppFloat";
import BroadcastBar from "./components/broadcast/BroadcastBar";


function App() {
  // ✅ State to control popup visibility globally
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <>
      <Router>

         <BroadcastBar />
        {/* Hide navbar when popup open */}
        {!isHelpOpen && <Navbar />}
     
      
        <ScrollTop />

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
          <Route path="/programs/pg-diploma" element={<PGDiploma />} />
          <Route path="/programs/school" element={<SchoolPrograms />} />
          <Route path="/programs/iti" element={<ITICourses />} />
           {/* <Route path="/result" element={<ResultForm />} /> */}
            {/* <Route path="/photo" element={<Gallery />} /> */}
            <Route path="/event" element={<EventPage />} />
        <Route path='/event/:id' element={<EventDetail/>}/>
        {/* <Route path="/enquiry" element={<EnquiryForm />} /> */}
        

        </Routes>
     

        <Footer />

        {/* ✅ Global Help Desk with control */}
        
        <HelpDesk setIsHelpOpen={setIsHelpOpen} />
       <WhatsAppFloat />
      </Router>
    </>
  );
}

export default App;
