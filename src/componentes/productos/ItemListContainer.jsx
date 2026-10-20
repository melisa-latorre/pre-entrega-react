import { useState, useEffect } from 'react';
import { Item } from './Item';

export function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('/productos.json')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
      })
      .catch((error) => console.error("Error al cargar productos.", error))
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p style={{ textAlign: 'center', padding: '2rem' }}>¡Aguarde un instante mientras cargamos el catálogo!</p>;
  }

  return (
    <div style={estilos.contenedorPrincipal}>
      {}
      <div style={{ textAlign: 'center' }}>
        <h2 style={estilos.tituloSeccion}>TODOS LOS PRODUCTOS</h2>
      </div>
      
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
  tituloSeccion: { color: 'var(--color-primario)', marginBottom: '2rem', borderBottom: '2px solid var(--color-acento)', paddingBottom: '10px', display: 'inline-block' },
  
  
  grillaProductos: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(2, 280px)', 
    gap: '3rem', 
    justifyContent: 'center'
  }
};