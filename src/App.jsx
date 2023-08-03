import Variables from "./components/Variables";
import Objetos from "./components/Objetos";
import Arreglos from "./components/Arreglos";
import Funciones from "./components/Funciones";
import Desestructuración from "./components/desestructuración";
import Navegador from "./components/Navegador ";
import ImportExport from "./components/ImportExport";
import FechApi from "./components/FechApi";
import AsyncAwait from "./components/AsyncAwait";
import OperadorTernario from "./components/OperadorTernario";
import './App.css'

const App = () => {
  
  const listaComponentes = [Variables, Objetos, Arreglos, Funciones, Desestructuración, ImportExport, FechApi, AsyncAwait, OperadorTernario];

  return (
    <div className="container">
      <h1 className="titulo-principal">Repaso de JavaScript</h1>
       <Navegador listaComponentes={listaComponentes} />
    </div>
  )
}

export default App

