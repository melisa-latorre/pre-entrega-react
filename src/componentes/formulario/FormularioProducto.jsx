import styles from './FormularioProducto.module.css';

function FormularioProducto({ datosForm, manejarCambio, manejarEnvio }) {
    return (
        <form onSubmit={manejarEnvio} className={styles.formulario}>
            <h3 style={{ textAlign: 'center', margin: '0 0 10px 0' }}>AGREGAR PRODUCTO</h3>
            <div>
                <label htmlFor="id">Id: </label><br/>
                <input type="text" name="id" onChange={manejarCambio}/>
            </div>
            <div>
                <label htmlFor="nombre">Nombre del Producto: </label><br/>
                <input
                    type="text"
                    name="nombre" 
                    placeholder="Ej: Código Penal Comentado"
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Precio: </label><br/>
                <input
                    type="number"
                    placeholder="Ej: 15000"
                    name="precio"
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Stock: </label><br/>
                <input
                    type="number"
                    placeholder="Ej: 20"
                    name="stock"
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Imagen: </label><br/>
                <input type="file"/>
            </div>

            <button type="submit">Guardar Producto</button>

        </form>
    )
}

export default FormularioProducto;