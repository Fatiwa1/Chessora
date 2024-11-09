import TablaSuizoEmparejamiento from "./tablaSuizo-emparejamiento";
import TablaSuizoRondas from "./tablaSuizo-rondas";
import TablaSuizoUsuarios from "./tablaSuizo-usuarios";

import { useLocation } from "react-router-dom";

import { useState } from "react";
function SistemaSuizo() {
    const [Tabla, setTabla] = useState("usuarios")

    const location = useLocation();
    const datosTorneo = location.state;

    const handleTabla = (e) => {
        setTabla(e.target.value);
      };

    return(
        <div className="flex flex-col items-center justify-center">
        <div>
            <button onClick={handleTabla} value="emparejamiento">Emparejamiento</button>
            <button onClick={handleTabla} value="rondas">Rondas</button>
            <button onClick={handleTabla} value="usuarios">Usuarios</button>
        </div>
        {Tabla === "emparejamiento" && <TablaSuizoEmparejamiento />}
        {Tabla === "rondas" && <TablaSuizoRondas />}
        {Tabla === "usuarios" && <TablaSuizoUsuarios />}
        </div>
    )
}
export default SistemaSuizo;