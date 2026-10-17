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

  
  const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadTotal }}>
      {children}
    </CartContext.Provider>
  );
}