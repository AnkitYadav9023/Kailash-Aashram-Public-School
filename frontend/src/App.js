import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Notices from './pages/Notices';
import FeeStructure from './pages/FeeStructure';
import Facilities from './pages/Facilities';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/notices"     element={<Notices />} />
        <Route path="/gallery"     element={<Gallery />} />
        <Route path="/fees"        element={<FeeStructure />} />
        <Route path="/facilities"  element={<Facilities />} />
        <Route path="/contact"     element={<Contact />} />
        <Route path="/manage-k9x2q7" element={<AdminPanel />} />      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
