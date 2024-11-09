import { useEffect, useState } from "react";
function TodosLosTorneos() {

    const [torneos, setTorneos] = useState([]);

  useEffect(() => {
    // Obtener los torneos del localStorage
    const torneosGuardados = JSON.parse(localStorage.getItem("torneos")) || [];
    setTorneos(torneosGuardados);
  }, []);

    return(
        <>
        {torneos.length > 0 ? (
        <table className=" text-white border-separate border-spacing-2 ">
          <thead>
                <tr>
                    <th className=" mx-20">Id</th>
                    <th>Nombre</th>
                    <th>Fecha/Hora</th>
                    <th>Duracion</th>
                    <th>Formato</th>
                    <th>Tipo de torneo</th>
                    <th>Numero de rondas</th>
                    <th>controlDeTiempo</th>
                </tr>
            </thead>
          {torneos.map((torneo, index) => (
            <tbody key={index}>
                <th>{index}</th>
                <th>{torneo.nombreDelTorneo}</th>
                <th>{torneo.fechaHora}</th>
                <th>{torneo.duracionDelTorneo} hs</th>
                <th>{torneo.formatoDelTorneo}</th>
                <th>{torneo.tipoTorneo}</th>
                <th>{torneo.numeroDeRondas}</th>
                <th>{torneo.controlDeTiempo}</th>
            </tbody>
          ))}
        </table>
      ) : (
        <p>No hay torneos creados aún.</p>
      )}
        </>
    )
}
export default TodosLosTorneos;