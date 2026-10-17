import { Header } from './Header';
import { NavBar } from './NavBar';
import { PieDePagina } from './PieDePagina';


export function Layout({ children }) {
  return (
    <div style={estilos.contenedorLayout}>
      <Header />
      <NavBar />
      
      {}
      <main style={estilos.contenidoPrincipal}>
        {children}
      </main>
      
      <PieDePagina/>
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