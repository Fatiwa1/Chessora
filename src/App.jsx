import './App.css'
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import CrearTorneo from './components/crearTorneos/crear-torneo';
import SistemaSuizo from './components/tiposDeTorneos/sistemaSuizo/sistema-suizo';
import Torneos from './components/torneos/torneos';

function App() {

  return (
    <Router>
      <header className=' font-'>
        <nav className='flex justify-between items-center w-full text-white bg-[#AF8F6F]'>
          <div>
            <Link to="/"><img className='w-14' src="public/imagenes/logoCaballo.png" alt="logo Chessora" /></Link>
          </div>
          <div className='flex space-x-5'>
            <Link to="/">Inicio</Link>
            <ol>
              <li className="relative group"><Link to="/torneos?lista=todosLosTorneos">Torneos</Link>
                <ol className=' max-h-0 opacity-0 transform -translate-y-4 group-hover:max-h-96 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out absolute bg-[#AF8F6F] w-max p-2 overflow-hidden '>
                <li><Link to="/torneos?lista=tusTorneos">Tus torneos</Link></li>
                <li><Link to="/torneos?lista=torneosJugar">Torneos a jugar</Link></li>
                </ol>
              </li>
            </ol>
            <Link to="/crear-torneo">Crear torneo</Link>
          </div>
          <div className='flex space-x-5'>
            <Link to="/">Registrarse</Link>
            <Link to="/"><img className='w-6' src="public/imagenes/perfil-del-usuario.png" alt="icono perfil" /></Link>
            <Link to="/"><img className='w-6' src="public/imagenes/notificaciones.png" alt="icono notificaciones" /></Link>
          </div>
        </nav>
      </header>
      <main className=' bg-[#F8F4E1] min-h-screen flex items-center justify-center'>
        <Routes>
          <Route path="/" element={
            <article className='flex flex-row justify-center min-h-screen items-center text-white'>
            <div className='flex flex-col w-7/12 text-center bg-[#AF8F6F] mx-10 px-10 justify-center items-center rounded-3xl space-y-5 shadow-xl h-96'>
              <h3 className=' text-6xl font-medium'>Crear Torneo</h3>
              <p className=' text-start text-2xl'>
                ¿Eres un apasionado del ajedrez y te gustaría organizar tu propio torneo? Crea un evento de ajedrez personalizado con facilidad. 
                Gestiona inscripciones, define reglas y elige si el torneo será presencial o en línea. ¡Haz que jugadores de todo el mundo compitan en tu torneo!
              </p>
              <Link className=' text-xl font-medium bg-[#74512D] text-white rounded-lg p-1' to="/crear-torneo">Crear Torneo</Link>
            </div>
            <div className='flex flex-col w-7/12 text-center bg-[#AF8F6F] mx-10 px-10 justify-center items-center rounded-3xl space-y-5 shadow-xl h-96'>
              <h3 className=' text-6xl font-medium'>Unite a un Torneo</h3>
              <p className=' text-start text-2xl'>
                ¿Estás listo para demostrar tus habilidades en ajedrez? Únete a torneos emocionantes, ya sean gratuitos o de pago. Encuentra competiciones de diferentes niveles y juega contra oponentes de todo el mundo, ¡es hora de poner a prueba tu estrategia!
              </p>
              <Link className=' text-xl font-medium bg-[#74512D] text-white rounded-lg p-1' to="/torneos">Unite a un Torneo</Link>
            </div>
          </article>
          } />
          <Route path='/crear-torneo' element={<CrearTorneo />} />
          <Route path='/sistema-suizo' element={<SistemaSuizo />} />
          <Route path='/torneos' element={<Torneos />} />
        </Routes>
      </main>
      <footer className="bg-[#AF8F6F] text-white py-8">
  <div className="container mx-auto flex flex-wrap justify-between items-center">
    <div className="flex flex-col space-y-3">
      <h4 className="text-2xl font-semibold">Sobre Nosotros</h4>
      <p className="text-lg w-52">Plataforma líder para la organización y participación en torneos de ajedrez, ofreciendo experiencias personalizadas y un entorno competitivo.</p>
    </div>

    <div className="flex flex-col space-y-3">
      <h4 className="text-2xl font-semibold">Enlaces</h4>
      <ul>
        <li><a href="/acerca-de" className="text-lg">Acerca de</a></li>
        <li><a href="/como-funciona" className="text-lg">Cómo Funciona</a></li>
        <li><a href="/terminos" className="text-lg">Términos y Condiciones</a></li>
        <li><a href="/privacidad" className="text-lg">Política de Privacidad</a></li>
        <li><a href="/faq" className="text-lg">Preguntas Frecuentes</a></li>
      </ul>
    </div>

    <div className="flex flex-col space-y-3">
      <h4 className="text-2xl font-semibold">Contacto</h4>
      <ul>
        <li><a href="mailto:support@tupagina.com" className="text-lg">support@tupagina.com</a></li>
        <li><a href="tel:+1234567890" className="text-lg">+123 456 7890</a></li>
      </ul>
    </div>

    <div className="flex flex-col space-y-3">
      <h4 className="text-2xl font-semibold">Síguenos</h4>
      <ul className="flex space-x-5">
        <li><a href="https://facebook.com" className="text-lg">Facebook</a></li>
        <li><a href="https://twitter.com" className="text-lg">Twitter</a></li>
        <li><a href="https://instagram.com" className="text-lg">Instagram</a></li>
        <li><a href="https://linkedin.com" className="text-lg">LinkedIn</a></li>
      </ul>
    </div>
  </div>

  <div className="text-center mt-6">
    <p className="text-lg">© 2024 Chessora. Todos los derechos reservados.</p>
    <p className="text-lg"><a href="/cookies" className="text-[#74512D]">Política de Cookies</a></p>
  </div>
</footer>

    </Router>
  )
}

export default App;
