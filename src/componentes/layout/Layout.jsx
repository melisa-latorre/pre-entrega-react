// src/componentes/layout/Layout.jsx
import { Header } from './Header.jsx';
import { Navbar } from './NavBar.jsx';
import { Footer } from './Footer.jsx';


export function Layout({ children }) {
  return (
    <div style={estilos.contenedorLayout}>
      <Header />
      <Navbar />
      
      {}
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
    minHeight: '100vh', 
  },
  contenidoPrincipal: {
    flex: 1, 
    padding: '2rem 1rem',
  }
};