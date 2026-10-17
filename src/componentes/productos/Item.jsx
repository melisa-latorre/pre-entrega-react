// src/componentes/productos/Item.jsx
export function Item({ producto }) {
  return (
    <div style={estilos.tarjeta}>
      <img src={producto.imagen} alt={producto.titulo} style={estilos.imagen} />
      <div style={estilos.contenido}>
        <h3 style={estilos.titulo}>{producto.titulo}</h3>
        <p style={estilos.descripcion}>{producto.descripcion}</p>
        <p style={estilos.precio}>${producto.precio.toLocaleString()}</p>
        <button style={estilos.boton}>Agregar al Carrito</button>
      </div>
    </div>
  );
}

const estilos = {
  tarjeta: { border: '1px solid var(--color-borde)', borderRadius: '8px', overflow: 'hidden', width: '280px', backgroundColor: 'white', display: 'flex', flexDirection: 'column' },
  imagen: { width: '100%', height: '200px', objectFit: 'cover' },
  contenido: { padding: '1rem', display: 'flex', flexDirection: 'column', flexGrow: 1 },
  titulo: { fontSize: '1.1rem', margin: '0 0 10px 0', color: 'var(--color-primario)' },
  descripcion: { fontSize: '0.9rem', color: '#666', marginBottom: '15px', flexGrow: 1 },
  precio: { fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-acento)', margin: '0 0 15px 0' },
  boton: { backgroundColor: 'var(--color-primario)', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }
};