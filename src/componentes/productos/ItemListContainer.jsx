// src/componentes/productos/ItemListContainer.jsx
import { useState, useEffect } from 'react';
import { Item } from './Item';

export function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Usamos fetch para leer el archivo productos.json de la carpeta public
    fetch('/productos.json')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
      })
      .catch((error) => console.error("Error al cargar productos:", error))
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p style={{ textAlign: 'center', padding: '2rem' }}>Cargando catálogo legal...</p>;
  }

  return (
    <div style={estilos.contenedorPrincipal}>
      <h2 style={estilos.tituloSeccion}>Catálogo de Códigos</h2>
      
      <div style={estilos.grillaProductos}>
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

const estilos = {
  contenedorPrincipal: { padding: '2rem', maxWidth: '1200px', margin: '0 auto' },
  tituloSeccion: { textAlign: 'center', color: 'var(--color-primario)', marginBottom: '2rem', borderBottom: '2px solid var(--color-acento)', paddingBottom: '10px', display: 'inline-block' },
  grillaProductos: { display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }
};