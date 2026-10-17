// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './componentes/layout/Layout';
import { ItemListContainer } from './componentes/productos/ItemListContainer';
import FormularioContainer from './componentes/formulario/FormularioContainer';
import { CartProvider, CartContext } from './context/CartContext'; // NUEVO IMPORT
import { useContext } from 'react'; // NUEVO IMPORT

function Inicio() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h2>Bienvenido a la librería legal más completa</h2>
      <p>Navegá por nuestro catálogo para encontrar tus códigos actualizados.</p>
    </div>
  );
}


function Carrito() {
  const { carrito } = useContext(CartContext);

  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h2>Tu Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>Aún no agregaste ningún código a tu carrito.</p>
      ) : (
        <div>
          {carrito.map((producto) => (
            <div key={producto.id} style={{ border: '1px solid #ccc', margin: '10px auto', padding: '10px', maxWidth: '400px' }}>
              <h4>{producto.titulo}</h4>
              <p>Cantidad: {producto.cantidad}</p>
              <p>Subtotal: ${producto.precio * producto.cantidad}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/agregar" element={<FormularioContainer />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;