import React, { useState } from 'react';

export default function IncrementoHooks(props) {
    const inicio = parseInt(props.inicio);
    const incremento = parseInt(props.incremento);
    const [valor, setValor] = useState(inicio);

    function incrementar () {
        setValor(valor + incremento);
    }

    return (
        <div>
            <h2>Incremento con Hooks</h2>

            <ul>
                <li>Inicial: {inicio} </li>
                <li>Valor : {valor} </li>
            </ul>

            <button onClick={ incrementar }>
                Incrementar {incremento}
            </button>
        </div>
    );
}