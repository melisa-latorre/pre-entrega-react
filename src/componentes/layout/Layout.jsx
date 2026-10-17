// src/componentes/layout/Layout.jsx
import { Header } from './header';
import { Navbar } from './NavBar';
import { Footer } from './footer';

// Este componente funciona como un "molde".
// La prop "children" representa el contenido dinámico (Inicio, Catálogo, Carrito)
// que va a ir cambiando en el medio de la página.
export function Layout({ children }) {
  return (
    <div style={estilos.contenedorLayout}>
      <Header />
      <Navbar />
      
      {/* Acá se inyecta el contenido de cada página */}
      <main style={estilos.contenidoPrincipal}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
}

const estilos = {
  contenedorLayout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Para que el footer se quede abajo si hay poco contenido
  },
  contenidoPrincipal: {
    flex: 1, // Esto empuja al footer hacia abajo
    padding: '2rem 1rem',
  }
};