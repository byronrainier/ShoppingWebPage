import { children, createContext, useState } from "react";

export const ShoppinCartContext = createContext();

export const ShoppinCartProvider = ({ children }) => {
  const [count, setCount] = useState(0); // Se coloca 0 porque sera el valor inicial de nuestro ShoppinCart
  // console.log("Contador: ", count);
  return (
    <ShoppinCartContext.Provider
      value={{
        // Valores que va a proveer el provider.
        count,
        setCount,
      }}
    >
      {children}
    </ShoppinCartContext.Provider>
  );
};
