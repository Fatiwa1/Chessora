import { useLocation } from 'react-router-dom';
import TodosLosTorneos from "./todos-los-torneos";
import TorneosJugar from "./torneos-a-jugar";
import TorneosCreados from "./torneos-creados";
import { useState, useEffect } from "react";

function Torneos() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const listaFromUrl = queryParams.get('lista') || 'todosLosTorneos'; // valor por defecto

  const [listaTorneos, setListaTorneos] = useState(listaFromUrl);

  const handleListaTorneos = (e) => {
    setListaTorneos(e.target.value);
  };

  useEffect(() => {
    setListaTorneos(listaFromUrl);
  }, [listaFromUrl]);

  return (
    <div className="flex flex-col bg-[#AF8F6F] rounded-3xl p-10 text-white">
      <div className="space-x-5 w-max mx-auto rounded-3xl shadow-xl">
        <button
          className={`text-xl rounded-3xl  p-2 ${listaTorneos === "todosLosTorneos" ? "bg-[#74512D] text-white" : ""}`}
          onClick={handleListaTorneos}
          value="todosLosTorneos"
        >
          Todos los torneos
        </button>
        <button
          className={`text-xl rounded-3xl  p-2 ${listaTorneos === "torneosJugar" ? "bg-[#74512D] text-white" : ""}`}
          onClick={handleListaTorneos}
          value="torneosJugar"
        >
          Torneos a jugar
        </button>
        <button
          className={`text-xl rounded-3xl  p-2 ${listaTorneos === "tusTorneos" ? "bg-[#74512D] text-white" : ""}`}
          onClick={handleListaTorneos}
          value="tusTorneos"
        >
          Tus torneos
        </button>
      </div>
      <div className="torneos-list">
        {listaTorneos === "todosLosTorneos" && <TodosLosTorneos />}
        {listaTorneos === "torneosJugar" && <TorneosJugar />}
        {listaTorneos === "tusTorneos" && <TorneosCreados />}
      </div>
    </div>
  );
}

export default Torneos;
