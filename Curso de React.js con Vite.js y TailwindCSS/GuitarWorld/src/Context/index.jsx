import { createContext, useState } from "react";

export const ShoppinCartContext = createContext();

export const ShoppinCartProvider = ({ children }) => {
  // Shopping Cart . Increment Quantity
  const [count, setCount] = useState(0); // Se coloca 0 porque sera el valor inicial de nuestro ShoppinCart

  // Product Detail . Open / Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); // Ya no es un numero, o esta abierto o no, V o F
  const openProductDetail = () => setIsProductDetailOpen(true); // Para cuando este abierto el PD
  const closeProductDetail = () => setIsProductDetailOpen(false); // Para cuando este cerrado el PD

  // Producto Detail . Show Product
  const [productToShow, setProductToShow] = useState({});

  // Carrito de Shopping . add products to cart
  const [carProducts, setCarProducts] = useState([]);

 // CheckOutSideMenu . Open / Close
 const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false); 
 const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true); // Para cuando este abierto el CheckOutSideMenu
 const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false); // Para cuando este cerrado el CheckOutSideMenu

 // Shopping Cart . Order
 const [order, setOrder] = useState([]);


  return (
    <ShoppinCartContext.Provider
      value={{
        // Valores que va a proveer el provider.
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        carProducts,
        setCarProducts,
        isCheckOutSideMenuOpen,
        openCheckOutSideMenu,
        closeCheckOutSideMenu,
        order,
        setOrder
      }}
    >
      {children}
    </ShoppinCartContext.Provider>
  );
};
