import { createContext, useState, useEffect } from "react";

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

 // Get Products 
 const [items, setItems] = useState(null);
 const [filteredItems, setFilteredItems] = useState(null);

// Get Products by title
 const [searchByTitle, setSearchByTitle] = useState(null);
 useEffect(() => {
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.json())
    .then((data) => setItems(data));
}, []);

const filteredItemsByTitle = (items, searchByTitle) =>{
  return items?.filter(item => item.title.toLowercase().includes(searchByTitle.toLowercase()))
}

useEffect(() => {
  if(searchByTitle) setFilteredItems(filteredItemsByTitle(items,searchByTitle))
}, [items,searchByTitle]);

console.log('Filtered Items: ', filteredItems);

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
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle
      }}
    >
      {children}
    </ShoppinCartContext.Provider>
  );
};
