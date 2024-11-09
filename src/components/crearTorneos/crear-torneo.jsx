import { useState } from "react";
import CrearTorneosOnline from "./crear-torneos-online";
import CrearTorneosPresencial from "./crear-torneos-presencial";

function CrearTorneo() {
  const [tipoTorneo, setTipoTorneo] = useState('presencial');

  const handleTipoTorneoChange = (e) => {
    setTipoTorneo(e.target.value);
  };

  return (
    <div className="bg-[#AF8F6F] w-2/5 text-white rounded-3xl shadow-xl p-10">
      <div className="w-max mx-auto space-y-1 justify-center items-center ">
        <div className="space-x-5 w-max mx-auto rounded-3xl shadow-xl">
          <button
            className={`text-xl rounded-3xl  p-2 ${tipoTorneo === "presencial" ? "bg-[#74512D] text-white" : ""}`}
            onClick={handleTipoTorneoChange}
            value="presencial"
          >
            Presencial
          </button>
          <button
            className={`text-xl rounded-3xl  p-2 ${tipoTorneo === "online" ? "bg-[#74512D] text-white" : ""}`}
            onClick={handleTipoTorneoChange}
            value="online"
          >
            Online
          </button>
        </div>
      </div>

      {/* Renderizado condicional */}
      {tipoTorneo === "presencial" && <CrearTorneosPresencial />}
      {tipoTorneo === "online" && <CrearTorneosOnline />}
    </div>
  );
}

export default CrearTorneo;
