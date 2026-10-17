// src/componentes/layout/Header.jsx
// src/componentes/layout/Header.jsx
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header style={estilos.header}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 style={estilos.titulo}>⚖️ Ediciones Jurídicas</h1>
      </Link>
    </header>
  );
}

const estilos = {
  header: { padding: '20px', textAlign: 'center', backgroundColor: 'var(--color-fondo)' },
  titulo: { margin: 0, color: 'var(--color-primario)', fontSize: '2rem' }
};