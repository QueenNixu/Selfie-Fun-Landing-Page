import './App.css';
import './colorPalette.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

import Inicio from './Pages/Inicio/Inicio';
import AcercaDe from './Pages/AcercaDe/AcercaDe';
import Contacto from './Pages/Contacto/Contacto';

import EspejoMagico from './Pages/Servicios/EspejoMagico/EspejoMagico';
import Plataforma360 from './Pages/Servicios/Plataforma360/Plataforma360';
import ShimmerWall from './Pages/Servicios/ShimmerWall/ShimmerWall';

import ScrollToTop from './Util/ScrollToTop';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca_de" element={<AcercaDe />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios/espejo_magico" element={<EspejoMagico />} />
        <Route path="/servicios/plataforma_360" element={<Plataforma360 />} />
        <Route path="/servicios/shimmer_wall" element={<ShimmerWall />} />
      </Routes>
      <Footer />

      <ScrollToTop />
    </>
  );
}

export default App;
