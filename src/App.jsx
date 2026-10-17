// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout } from './componentes/layout/Layout';
import { ItemListContainer } from './componentes/productos/ItemListContainer';
import FormularioContainer from './componentes/formulario/FormularioContainer';
import { CartProvider, CartContext } from './context/CartContext';
import { useContext } from 'react';

function Inicio() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h2>Bienvenido a la librería legal más completa</h2>
      <p>Navegá por nuestro catálogo para encontrar tus códigos actualizados.</p>
    </div>
  );
}

// EL CARRITO SUPER PROFESIONAL
function Carrito() {
  // Traemos todas las herramientas que creamos en el contexto
  const { carrito, agregarAlCarrito, restarCantidad, eliminarProducto, vaciarCarrito } = useContext(CartContext);

  const precioTotal = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);

  const finalizarCompra = () => {
    alert(`¡Gracias por tu compra! El total es de $${precioTotal.toLocaleString()}. Redirigiendo a pagos...`);
    vaciarCarrito();
  };

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Tu Carrito de Compras</h2>
      
      {carrito.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Aún no agregaste ningún código a tu carrito.</p>
          <Link to="/productos" style={{ backgroundColor: 'var(--color-primario)', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
            Ir al Catálogo
          </Link>
        </div>
      ) : (
        <div>
          {/* Lista de productos */}
          {carrito.map((producto) => (
            <div key={producto.id} style={{ borderBottom: '1px solid #ccc', margin: '10px 0', padding: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              
              {/* Info del producto */}
              <div style={{ flex: 2 }}>
                <h4 style={{ margin: '0 0 5px 0' }}>{producto.titulo}</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Precio unitario: ${producto.precio.toLocaleString()}</p>
              </div>

              {/* Controles de cantidad (+ / -) */}
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                <button onClick={() => restarCantidad(producto.id)} style={{ padding: '5px 10px', cursor: 'pointer', border: '1px solid #ccc', backgroundColor: 'white' }}>-</button>
                <span style={{ fontWeight: 'bold' }}>{producto.cantidad}</span>
                <button onClick={() => agregarAlCarrito(producto)} style={{ padding: '5px 10px', cursor: 'pointer', border: '1px solid #ccc', backgroundColor: 'white' }}>+</button>
              </div>

              {/* Subtotal y botón eliminar */}
              <div style={{ flex: 1, textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
                <p style={{ margin: 0, fontWeight: 'bold' }}>${(producto.precio * producto.cantidad).toLocaleString()}</p>
                <button onClick={() => eliminarProducto(producto.id)} style={{ backgroundColor: 'transparent', color: 'red', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontSize: '0.9rem' }}>
                  Eliminar
                </button>
              </div>

            </div>
          ))}
          
          {/* Resumen Final */}
          <div style={{ textAlign: 'right', marginTop: '30px', fontSize: '1.5rem', fontWeight: 'bold', borderTop: '2px solid var(--color-primario)', paddingTop: '20px' }}>
            Total a Pagar: ${precioTotal.toLocaleString()}
          </div>

          {/* Botones de acción general */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', marginTop: '30px' }}>
            <button 
              onClick={vaciarCarrito} 
              style={{ backgroundColor: 'white', color: 'var(--color-primario)', border: '1px solid var(--color-primario)', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Vaciar Carrito
            </button>
            
            <button 
              onClick={finalizarCompra} 
              style={{ backgroundColor: 'var(--color-acento)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Finalizar Compra
            </button>
          </div>
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