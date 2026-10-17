// src/context/CartContext.jsx
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);


  const agregarAlCarrito = (producto) => {
    const existe = carrito.find((item) => item.id === producto.id);
    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  
  const restarCantidad = (id) => {
    const existe = carrito.find((item) => item.id === id);
    if (existe.cantidad === 1) {
      eliminarProducto(id);
    } else {
      setCarrito(
        carrito.map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
      );
    }
  };

  
  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  
  const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <CartContext.Provider value={{ 
      carrito, 
      agregarAlCarrito, 
      restarCantidad, 
      eliminarProducto, 
      vaciarCarrito, 
      cantidadTotal 
    }}>
      {children}
    </CartContext.Provider>
  );
}