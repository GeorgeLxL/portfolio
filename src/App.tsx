import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/index.sass';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Notfound from './pages/Notfound';
import Icons from './pages/Icons'

function App() {

  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/404" element={<Notfound />} />
            <Route path="/icons" element={<Icons />} />
            <Route path="*" element={<Navigate to='404' />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
