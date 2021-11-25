
import React, { useState, useEffect} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import clientesService from '../../services/clientesService';

export default function ClientesListado(props) {

    const [clientes, setClientes] = useState(null);


    useEffect(() => {
        clientesService.buscarTodos().then(res => setClientes(res.data));
    }, []);

    return(
        <div>
            <div className="card">
                <DataTable value={clientes} responsiveLayout="scroll">
                    <Column field="dni" header="DNI"></Column>
                    <Column field="nombre" header="Nombre"></Column>
                    <Column field="direccion.localidad" header="Localidad" sortable></Column>
                    <Column field="direccion.provincia" header="Provincia" sortable></Column>
                </DataTable>
            </div>
        </div>
    );
}