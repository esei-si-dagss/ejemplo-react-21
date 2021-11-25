import './App.css';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "./components/Home.js";
import IncrementoClases from "./components/incrementoClases";
import IncrementoHooks from "./components/incrementoHooks";
import ClientesListado from "./components/clientes/clientesListado";
import ClientesDetalle from "./components/clientes/clientesDetalle";


function App() {
    return (
        <BrowserRouter>
            <h1> Ejemplos: Hooks vs.Clases + APIs REST </h1>


            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="clases" element={<IncrementoClases inicio="0" incremento="10" />} />
                <Route path="hooks" element={<IncrementoHooks inicio="0" incremento="10" />} />  
                <Route path="clientes" element={<ClientesListado />}>
                  <Route path="clientes/:id" element={<ClientesDetalle />} />
                </Route>  
                             
            </Routes>
        </BrowserRouter>
    );
}

export default App;
