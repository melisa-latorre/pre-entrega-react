import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export function NavBar() {

  const { cantidadTotal } = useContext(CartContext);

  return (
    <nav style={estilos.nav}>
      <ul style={estilos.lista}>
        <li><Link to="/" style={estilos.link}>Inicio</Link></li>
        <li><Link to="/productos" style={estilos.link}>Catálogo</Link></li>
        
        {}
        <li>
          <Link to="/carrito" style={estilos.link}>
            Carrito {cantidadTotal > 0 && <span style={estilos.contador}>({cantidadTotal})</span>}
          </Link>
        </li>
        
        <li><Link to="/agregar" style={estilos.link}>Nuevo Producto</Link></li>
      </ul>
    </nav>
  );
}

const estilos = {
  nav: { backgroundColor: 'var(--color-primario)', padding: '15px 0' },
  lista: { display: 'flex', justifyContent: 'center', gap: '2rem', margin: 0, padding: 0, listStyle: 'none' },
  link: { color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' },
  contador: { backgroundColor: 'var(--color-acento)', padding: '2px 8px', borderRadius: '50%', fontSize: '0.9rem' }
};