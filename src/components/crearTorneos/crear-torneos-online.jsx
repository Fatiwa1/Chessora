function CrearTorneosOnline() {
    return(
        <>
        <form className=" flex flex-col w-8/12 mx-auto">
            <label htmlFor="nombreDelTorneo">Nombre del torneo</label>
            <input type="text" id="nombreDelTorneo" name="nombreDelTorneo" placeholder="nombre del torneo..." required />

            <label htmlFor="descripcion">Descripcion</label>
            <textarea id="descripcion" name="descripcion" placeholder="descripcion..."></textarea>

            <label htmlFor="fechaHora">Fecha y Hora</label>
            <input className="text-black" type="datetime-local" id="fechaHora" name="fechaHora" required />

            <label htmlFor="duracionDelTorneo">Duracion del torneo</label>
            <input type="number" id="duracionDelTorneo" name="duracionDelTorneo" placeholder="duracion del torneo..." />

            <label htmlFor="formatoDelTorneo">Formato del torneo</label>
            <select className="text-black" id="formatoDelTorneo" name="formatoDelTorneo" required>
                <option value="suizo">Suizo</option>
                <option value="roundRobin">Round-robin</option>
                <option value="eliminacionDirecta">Eliminacion Directa</option>
            </select>

            <label htmlFor="numeroDeRondas">Numero de rondas</label>
            <input type="number" id="numeroDeRondas" name="numeroDeRondas" placeholder="numero de rondas..." />

            <label htmlFor="controlDeTiempo">Control de tiempo</label>
            <select className="text-black" name="controlDeTiempo" id="controlDeTiempo">
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
                <option value="">Personalizado</option>
            </select>

            <label htmlFor="costoDeInscripcion">Costo de inscripcion</label>
            <input type="number" id="costoDeInscripcion" name="costoDeInscripcion" placeholder="costo de inscripcion..." />

            <label htmlFor="premios">Premios</label>
            <textarea id="premios" name="premios" placeholder="premios..."></textarea>

            <label htmlFor="numeroMaxJugadores">Numero maximo de jugadores</label>
            <input type="number" id="numeroMaxJugadores" name="numeroMaxJugadores" placeholder="numero maximo de jugadores..." />

            <button className=" mx-auto w-max font-medium bg-[#74512D] text-white rounded-lg p-1" type="submit">Crear Torneo</button>
        </form>
        </>
    )
}
export default CrearTorneosOnline;