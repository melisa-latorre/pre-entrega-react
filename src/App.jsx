// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './componentes/layout/Layout';
import { ItemListContainer } from './componentes/productos/ItemListContainer';


function Inicio() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h2>Bienvenido a la librería legal más completa</h2>
      <p>Navegá por nuestro catálogo para encontrar tus códigos actualizados.</p>
    </div>
  );
}


function Carrito() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h2>Tu Carrito de Compras</h2>
      <p>Aún no agregaste ningún código a tu carrito.</p>
    </div>
  );
}

function App() {
  return (
    
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;