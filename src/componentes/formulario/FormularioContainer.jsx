// src/componentes/formulario/FormularioContainer.jsx
import { useState } from "react";
import FormularioProducto from "./FormularioProducto";

function FormularioContainer() {

    const [datosForm, setDatosForm] = useState({
        id: "",
        nombre: "",
        precio: "",
        stock: ""
    });

    const manejarCambio = (evento) => {
        const { name, value } = evento.target; 

        setDatosForm({
            ...datosForm,
            [name]: value
        });
    }

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        console.log('Enviando los siguientes datos a la API:', datosForm);
        alert('Revisá la consola. ¡El producto se guardó en el estado!');
    };

    return (
        <FormularioProducto 
            datosForm={datosForm} 
            manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio}
        />
    );
}

export default FormularioContainer;