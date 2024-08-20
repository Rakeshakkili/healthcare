import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/ServicesPage';
import Contact from './pages/Contact';
import PatientLogin from "./components/PatientLogin";
import DoctorLogin from "./components/DoctorLogin";
import DoctorsList from "./components/DoctorsList";
import Header from "./components/Header";
import Footer from './components/Footer';
import PatientRegistration from "./components/PatientRegistration";


function App() {
  return (
    <Router basename="/healthcare">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/patient-register" element={<PatientRegistration />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/doctors-list" element={<DoctorsList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
