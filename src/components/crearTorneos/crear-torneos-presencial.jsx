import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Torneos from "../torneos/torneos";

function CrearTorneosPresencial() {
  const [datosTorneo, setDatosTorneo] = useState({
    nombreDelTorneo: '',
    descripcion: '',
    fechaHora: '',
    cierreDeInscripcion: '',
    duracionDelTorneo: '',
    ubicacionDelTorneo: '',
    formatoDelTorneo: 'Suizo',  // Valor por defecto
    numeroDeRondas: '',
    controlDeTiempo: '1+0', // Valor por defecto
    costoDeInscripcion: '',
    premios: '',
    numeroMaxJugadores: '',
    contactoDelOrganizador: '',
    tipoTorneo: 'Presencial'
  });

  const navigate = useNavigate();

  const handleDatosTorneoChange = (e) => {
    const { name, value } = e.target;
    setDatosTorneo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const torneosGuardados = JSON.parse(localStorage.getItem("torneos")) || [];
    
    // Añadir el nuevo torneo
    const nuevosTorneos = [...torneosGuardados, datosTorneo];
    
    // Guardar de nuevo en localStorage
    localStorage.setItem("torneos", JSON.stringify(nuevosTorneos));
    navigate(`${datosTorneo.formatoDelTorneo === "Suizo" ? "/sistema-suizo" : datosTorneo.formatoDelTorneo === "Round-robin" ? "/sistema-round-robin" : "/sistema-de-eliminacion-directa"}`, { state: datosTorneo });
  };

  return (
    <>
    <form className="flex flex-col w-8/12 mx-auto" onSubmit={handleSubmit}>
      <label htmlFor="nombreDelTorneo">Nombre del torneo</label>
      <input

        className="text-black"
        type="text" 
        id="nombreDelTorneo" 
        name="nombreDelTorneo" 
        placeholder="nombre del torneo..." 
        required 
        value={datosTorneo.nombreDelTorneo}
        onChange={handleDatosTorneoChange}
      />

      <label htmlFor="descripcion">Descripcion</label>
      <textarea 
      className="text-black"
        id="descripcion" 
        name="descripcion" 
        placeholder="descripcion..." 
        value={datosTorneo.descripcion}
        onChange={handleDatosTorneoChange}
      />

      <label htmlFor="fechaHora">Fecha y Hora</label>
      <input 
        className="text-black" 
        type="datetime-local" 
        id="fechaHora" 
        name="fechaHora" 
        required 
        value={datosTorneo.fechaHora}
        onChange={handleDatosTorneoChange}
      />

      <label htmlFor="cierreDeInscripcion">Cierre de inscripcion</label>
      <input 
        className="text-black" 
        type="datetime-local" 
        id="cierreDeInscripcion" 
        name="cierreDeInscripcion" 
        required 
        value={datosTorneo.cierreDeInscripcion}
        onChange={handleDatosTorneoChange}
      />

      <label htmlFor="duracionDelTorneo">Duracion del torneo</label>
      <input 
      className="text-black"
        type="number" 
        id="duracionDelTorneo" 
        name="duracionDelTorneo" 
        placeholder="duracion del torneo..." 
        value={datosTorneo.duracionDelTorneo}
        onChange={handleDatosTorneoChange}
      />

      <label htmlFor="ubicacionDelTorneo">Ubicacion del torneo</label>
      <input 
      className="text-black"
        type="text" 
        id="ubicacionDelTorneo" 
        name="ubicacionDelTorneo" 
        placeholder="ubicacion del torneo..." 
        required 
        value={datosTorneo.ubicacionDelTorneo}
        onChange={handleDatosTorneoChange}
      />

      <label htmlFor="formatoDelTorneo">Formato del torneo</label>
      <select 
        className="text-black" 
        id="formatoDelTorneo" 
        name="formatoDelTorneo" 
        required 
        value={datosTorneo.formatoDelTorneo}
        onChange={handleDatosTorneoChange}
      >
        <option value="suizo">Suizo</option>
        <option value="roundRobin">Round-robin</option>
        <option value="eliminacionDirecta">Eliminacion Directa</option>
      </select>

      <label htmlFor="numeroDeRondas">Numero de rondas</label>
      <input 
      className="text-black"
        type="number" 
        id="numeroDeRondas" 
        name="numeroDeRondas" 
        placeholder="numero de rondas..." 
        value={datosTorneo.numeroDeRondas}
        onChange={handleDatosTorneoChange}
      />

      <label htmlFor="controlDeTiempo">Control de tiempo</label>
      <select 
        className="text-black" 
        name="controlDeTiempo" 
        id="controlDeTiempo" 
        value={datosTorneo.controlDeTiempo}
        onChange={handleDatosTorneoChange}
      >
        <option value="1+0">1+0</option>
        <option value="2+1">2+1</option>
        <option value="3+0">3+0</option>
        <option value="3+2">3+2</option>
        <option value="5+0">5+0</option>
        <option value="5+3">5+3</option>
        <option value="10+0">10+0</option>
        <option value="10+5">10+5</option>
        <option value="15+10">15+10</option>
        <option value="30+0">30+0</option>
        <option value="30+20">30+20</option>
      </select>

      <label htmlFor="costoDeInscripcion">Costo de inscripcion</label>
      <input 
      className="text-black"
        type="number" 
        id="costoDeInscripcion" 
        name="costoDeInscripcion" 
        placeholder="costo de inscripcion..." 
        value={datosTorneo.costoDeInscripcion}
        onChange={handleDatosTorneoChange}
      />

      <label htmlFor="premios">Premios</label>
      <textarea 
      className="text-black"
        id="premios" 
        name="premios" 
        placeholder="premios..." 
        value={datosTorneo.premios}
        onChange={handleDatosTorneoChange}
      />

      <label htmlFor="numeroMaxJugadores">Numero maximo de jugadores</label>
      <input 
      className="text-black"
        type="number" 
        id="numeroMaxJugadores" 
        name="numeroMaxJugadores" 
        placeholder="numero maximo de jugadores..." 
        value={datosTorneo.numeroMaxJugadores}
        onChange={handleDatosTorneoChange}
      />

      <label htmlFor="contactoDelOrganizador">Contacto del organizador</label>
      <textarea 
      className="text-black"
        id="contactoDelOrganizador" 
        name="contactoDelOrganizador" 
        placeholder="contacto del organizador..." 
        required 
        value={datosTorneo.contactoDelOrganizador}
        onChange={handleDatosTorneoChange}
      />

      <button className="mx-auto w-max font-medium bg-[#74512D] text-white rounded-lg p-1" type="submit">
        Crear Torneo
      </button>
    </form>
    </>
  );
}

export default CrearTorneosPresencial;
