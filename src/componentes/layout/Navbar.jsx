// src/componentes/layout/Navbar.jsx
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav style={estilos.nav}>
      <ul style={estilos.lista}>
        <li><Link to="/" style={estilos.link}>Inicio</Link></li>
        <li><Link to="/productos" style={estilos.link}>Catálogo</Link></li>
        <li><Link to="/carrito" style={estilos.link}>Carrito</Link></li>
      </ul>
    </nav>
  );
}

const estilos = {
  nav: { backgroundColor: 'var(--color-primario)', padding: '15px 0' },
  lista: { display: 'flex', justifyContent: 'center', gap: '2rem', margin: 0, padding: 0, listStyle: 'none' },
  link: { color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }
};