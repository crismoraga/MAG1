import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CursosMejoramiento from './CursosMejoramiento';
import CursosActualizacion from './CursosActualizacion';
import CursosFormacion from './CursosFormacion';
import PerfilesAcreditados from './PerfilesAcreditados';
import MentoriaEmpresarial from './MentoriaEmpresarial';
import ConsultoriaEspecializada from './ConsultoriaEspecializada';
import ZonaEncuentro from './ZonaEncuentro';
import QuienesSomos from './QuienesSomos';
import ServicioAlUsuario from './ServicioAlUsuario';
import Contactenos from './Contactenos';

// Shared Tailwind CSS classes
const hoverUnderline = 'hover:underline';
const bgSecondaryTextSecondaryForeground = 'bg-secondary text-secondary-foreground';
const roundedShadowMdP2 = 'rounded shadow-md p-2';

const Navbar = () => (
  <nav className="flex justify-around bg-gray-800 p-6 text-lg font-bold">
    <Link to="/" className={`${hoverUnderline} text-white`}>Inicio</Link>
    <Dropdown title="Servicio al talento">
      <Dropdown title="Cursos" nested>
        <Link to="/cursos/mejoramiento" className={`${hoverUnderline} block text-white`}>Mejoramiento</Link>
        <Link to="/cursos/actualizacion" className={`${hoverUnderline} block text-white`}>Actualización</Link>
        <Link to="/cursos/formacion" className={`${hoverUnderline} block text-white`}>Formación</Link>
      </Dropdown>
    </Dropdown>
    <Link to="/perfiles-acreditados" className={`${hoverUnderline} text-white`}>Verificación de acreditaciones</Link>
    <Dropdown title="Servicio a empresas">
      <Link to="/mentoria-empresarial" className={`${hoverUnderline} block text-white`}>Mentoría empresarial</Link>
      <Link to="/consultoria-especializada" className={`${hoverUnderline} block text-white`}>Consultoría especializada a medida</Link>
    </Dropdown>
    <Link to="/zona-encuentro" className={`${hoverUnderline} text-white`}>Zona de encuentro</Link>
  </nav>
);

const Dropdown = ({ title, children, nested }) => {
  const baseClass = 'relative group';
  const dropdownClass = `absolute hidden group-hover:block ${bgSecondaryTextSecondaryForeground} ${roundedShadowMdP2}`;
  return (
    <div className={baseClass}>
      <button className={`${hoverUnderline} text-white`}>{title}</button>
      <div className={`${dropdownClass} ${nested ? 'left-0' : ''} bg-gray-700`}>
        {children}
      </div>
    </div>
  );
};

const MainContent = () => (
  <main className="flex-grow p-4 bg-gray-100 bg-opacity-80 rounded-lg shadow-lg">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">¡Bienvenido a nuestro servicio enfocado en impulsar la carrera de profesionales con experiencia!</h1>
        <p className="text-muted-foreground mb-4">
          Sabemos que la edad es solo un número y que tu experiencia es un activo valioso. Estamos aquí para ayudarte a romper barreras y demostrar tu talento en el mercado laboral.
        </p>
        <ul className="list-disc ml-6 text-muted-foreground mb-4">
          <li>Programas de actualización profesional</li>
          <li>Mentoría personalizada</li>
          <li>Talleres de networking</li>
          <li>Asesoría en búsqueda de empleo</li>
          <li>Recursos y herramientas</li>
          <li>Mucho más</li>
        </ul>
        <p className="text-muted-foreground mb-4">
          Creemos en tu potencial. ¡Únete a nuestra comunidad y descubre cómo podemos impulsar tu carrera!
        </p>
        <Link to="/contactenos" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 inline-block">Conocer más...</Link>
      </div>
      <div className="md:w-1/2 flex justify-center items-center p-4">
        <img src="https://imgcdn.stablediffusionweb.com/2024/3/16/506d00f0-cef9-4766-a869-4e86589b9e17.jpg" alt="placeholder" className="w-full h-auto rounded shadow-lg" />
      </div>
    </div>
  </main>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 flex justify-around shadow-inner mt-auto">
    <Link to="/quienes-somos" className={hoverUnderline}>Quiénes somos</Link>
    <Link to="/servicio-al-usuario" className={hoverUnderline}>Servicio al usuario</Link>
    <Link to="/contactenos" className={hoverUnderline}>Contáctenos</Link>
  </footer>
);

const App = () => (
  <div className="min-h-screen flex flex-col bg-gray-100">
    <header className="bg-gray-900 text-white p-6 shadow-lg">
      <Navbar />
    </header>
    <Routes className="flex-grow">
      <Route path="/" element={<MainContent />} />
      <Route path="/cursos/mejoramiento" element={<CursosMejoramiento />} />
      <Route path="/cursos/actualizacion" element={<CursosActualizacion />} />
      <Route path="/cursos/formacion" element={<CursosFormacion />} />
      <Route path="/perfiles-acreditados" element={<PerfilesAcreditados />} />
      <Route path="/mentoria-empresarial" element={<MentoriaEmpresarial />} />
      <Route path="/consultoria-especializada" element={<ConsultoriaEspecializada />} />
      <Route path="/zona-encuentro" element={<ZonaEncuentro />} />
      <Route path="/quienes-somos" element={<QuienesSomos />} />
      <Route path="/servicio-al-usuario" element={<ServicioAlUsuario />} />
      <Route path="/contactenos" element={<Contactenos />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
