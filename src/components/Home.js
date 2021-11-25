import { Link } from "react-router-dom";

export default function Home() {
    return (
        <ul>
            <li> <Link to="/clases" > Con Clases </Link> </li>
            <li> <Link to="/hooks" > Con Funciones/Hooks </Link> </li>
            <li> <Link to="/clientes" > Acceso API REST con Aixos </Link> </li>
        </ul>
    );
}